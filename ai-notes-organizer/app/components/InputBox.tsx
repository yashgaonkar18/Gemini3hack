"use client";

import { useState } from "react";

export default function InputBox({
  setResult,
  setLoading,
}: {
  setResult: (value: string) => void;
  setLoading: (value: boolean) => void;
}) {
  const [text, setText] = useState("");

  const handleGenerate = async () => {
    if (!text.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = await res.json();
      setResult(data.result);
    } catch (err) {
      alert("Failed to generate study plan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <textarea
        className="w-full min-h-[160px] border rounded-xl p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Paste your notes here or describe what you need to study..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleGenerate}
        className="w-full mt-4 bg-blue-600 hover:bg-blue-500 transition text-white py-3 rounded-xl font-semibold"
      >
        Generate Study Plan
      </button>
    </>
  );
}
