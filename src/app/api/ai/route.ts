import { NextRequest, NextResponse } from "next/server";
import { parseUserPrompt } from "@/lib/ai/agent";

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const result = await parseUserPrompt(prompt);

    // TODO: Create project in Supabase with the AI result
    // TODO: Create pages and assign blocks

    return NextResponse.json(result);
  } catch (error) {
    console.error("AI agent error:", error);
    return NextResponse.json(
      { error: "Failed to process prompt" },
      { status: 500 }
    );
  }
}
