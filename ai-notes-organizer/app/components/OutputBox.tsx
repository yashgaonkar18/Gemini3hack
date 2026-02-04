import {
  FileText,
  CheckCircle,
  CalendarCheck,
  Copy,
  Download,
} from "lucide-react";
import jsPDF from "jspdf";


/* ---------- PARSE GEMINI OUTPUT SAFELY ---------- */
function parseSections(text: string) {
  // Normalize broken markers (extra safety)
  const fixed = text
    .replace(/summary\s*===/gi, "===SUMMARY===")
    .replace(/tasks\s*===/gi, "===TASKS===")
    .replace(/study plan\s*===/gi, "===STUDY_PLAN===");

  const get = (start: string, end?: string) => {
    const s = fixed.indexOf(start);
    if (s === -1) return "";
    const e = end ? fixed.indexOf(end, s + start.length) : -1;
    return fixed.slice(s + start.length, e === -1 ? undefined : e).trim();
  };

  return {
    summary: get("===SUMMARY===", "===TASKS==="),
    tasks: get("===TASKS===", "===STUDY_PLAN==="),
    plan: get("===STUDY_PLAN==="),
  };
}

/* ---------- PARSE STUDY PLAN INTO DAYS ---------- */
function parseStudyPlan(plan: string) {
  return plan
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => /^day\s*\d+/i.test(line))
    .map((line) => {
      const [day, ...rest] = line.split(":");
      return {
        day: day.trim(),
        content: rest.join(":").trim(),
      };
    });
}

export default function OutputBox({ result }: { result: string }) {
  if (!result) return null;

  const { summary, tasks, plan } = parseSections(result);

  const taskList = tasks
    .split("\n")
    .map((t) => t.replace(/^[-•*]\s*/, "").trim())
    .filter(Boolean);

  const studyPlanDays = parseStudyPlan(plan);

  /* ---------- ACTIONS ---------- */
  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    alert("Copied to clipboard!");
  };

  // const handleDownload = () => {
  //   const blob = new Blob([result], { type: "text/plain" });
  //   const url = URL.createObjectURL(blob);
  //   const a = document.createElement("a");
  //   a.href = url;
  //   a.download = "ai-notes.txt";
  //   a.click();
  //   URL.revokeObjectURL(url);
  // };
const handleDownload = () => {
  const doc = new jsPDF("p", "mm", "a4");

  let y = 15;

  const addText = (text: string) => {
    const lines = doc.splitTextToSize(text, 180);
    doc.text(lines, 15, y);
    y += lines.length * 7;
  };

  // Title
  doc.setFontSize(16);
  doc.text("AI Study Planner", 15, y);
  y += 10;

  doc.setFontSize(12);

  // Summary
  addText("SUMMARY");
  y += 4;
  addText(summary || "No summary generated.");
  y += 6;

  // Tasks
  addText("TASKS");
  y += 4;
  taskList.forEach((task, i) => {
    addText(`${i + 1}. ${task}`);
  });
  y += 6;

  // Study Plan
  addText("STUDY PLAN");
  y += 4;
  studyPlanDays.forEach((day) => {
    addText(`${day.day}: ${day.content}`);
  });

  doc.save("AI_Study_Plan.pdf");
};

  return (
    <div className="mt-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">
          AI Generated Results
        </h2>

        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-3 py-1.5 text-sm bg-gray-900 text-white rounded hover:bg-gray-800"
          >
            <Copy size={16} /> Copy
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-600 text-white rounded hover:bg-blue-500"
          >
            <Download size={16} /> Download PDF

          </button>
        </div>
      </div>

      {/* SUMMARY */}
      <div className="bg-white border rounded-xl p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <FileText className="text-blue-600" />
          <h3 className="text-lg font-semibold">Summary</h3>
        </div>
        <p className="text-gray-700 whitespace-pre-line leading-relaxed">
          {summary || "No summary generated."}
        </p>
      </div>

      {/* TASKS */}
      <div className="bg-white border rounded-xl p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle className="text-green-600" />
          <h3 className="text-lg font-semibold">Tasks</h3>
        </div>

        {taskList.length ? (
          <ul className="space-y-2">
            {taskList.map((task, index) => (
              <li
                key={index}
                className="flex items-start gap-3 bg-green-50 px-3 py-2 rounded-lg"
              >
                <input
                  type="checkbox"
                  className="mt-1 accent-green-600"
                />
                <span className="text-gray-700">{task}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No tasks found.</p>
        )}
      </div>

      {/* STUDY PLAN (BEAUTIFUL UI) */}
      <div className="bg-white border rounded-xl p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <CalendarCheck className="text-purple-600" />
          <h3 className="text-lg font-semibold">Study Plan</h3>
        </div>

        {studyPlanDays.length ? (
          <div className="space-y-4">
            {studyPlanDays.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-purple-50 p-4 rounded-lg"
              >
                {/* Day Badge */}
                <span className="bg-purple-600 text-white text-[13px] flex items-center justify-center font-medium px-5 py-3 rounded-full">
                  {item.day}
                </span>

                {/* Content */}
                <div className="text-gray-700 leading-relaxed">
                  {item.content}
                  {index === 0 && (
                    <span className="ml-2 text-xs text-purple-700 font-medium">
                      (Today)
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No study plan generated.</p>
        )}
      </div>
    </div>
  );
}
