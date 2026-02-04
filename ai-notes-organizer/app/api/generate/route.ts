import { NextResponse } from "next/server";
import { generateNotes } from "../../lib/gemini";

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    if (!text) {
      return NextResponse.json(
        { error: "No input provided" },
        { status: 400 }
      );
    }

    const result = await generateNotes(text);
    console.log("GEMINI RAW RESULT:\n", result);
    return NextResponse.json({ result });
  } catch (error: any) {
    console.error("API ERROR:", error.message);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
