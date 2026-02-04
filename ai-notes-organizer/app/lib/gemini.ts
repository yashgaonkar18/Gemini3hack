import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GEMINI_API_KEY!,
});

// ✅ Gemini 2.5 Flash Preview
const MODEL = "gemini-2.5-flash";

export async function generateNotes(inputText: string) {
  if (!inputText || !inputText.trim()) {
    throw new Error("Empty input");
  }

  /**
   * IMPORTANT:
   * We force Gemini to return STRICT, MACHINE-READABLE markers.
   * This guarantees correct parsing in the UI.
   */
const prompt = `
You are an AI study assistant.

You MUST respond using the EXACT markers below.
Markers must be on a SINGLE LINE.
DO NOT add extra lines, symbols, or explanations.

===SUMMARY===
(one concise paragraph)

===TASKS===
- task 1
- task 2
- task 3

===STUDY_PLAN===
Day 1: ...
Day 2: ...

NOTES:
${inputText}
`;


  const response = await ai.models.generateContent({
    model: MODEL,
    contents: [
      {
        parts: [{ text: prompt }],
      },
    ],
  });

  const text =
    response?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    throw new Error("No response from Gemini");
  }

  return text;
}
