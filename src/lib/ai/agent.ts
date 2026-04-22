import Anthropic from "@anthropic-ai/sdk";
import { BLOCK_CATEGORIES } from "@/types";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

interface BlockSelection {
  category: string;
  tags: string[];
  quantity: number;
  notes: string;
}

interface AIResponse {
  siteName: string;
  siteDescription: string;
  pages: {
    name: string;
    slug: string;
    isHomepage: boolean;
    blocks: BlockSelection[];
  }[];
}

const SYSTEM_PROMPT = `You are an AI agent for a no-code website builder platform. Your job is to analyze a user's description of the website they want to build and determine which pre-built components (blocks) are needed.

Available block categories:
${BLOCK_CATEGORIES.map((c) => `- ${c.slug}: ${c.description}`).join("\n")}

Based on the user's prompt, return a JSON response with:
1. A suggested site name
2. A brief site description
3. A list of pages needed, each with the blocks required

Respond ONLY with valid JSON matching this structure:
{
  "siteName": "string",
  "siteDescription": "string",
  "pages": [
    {
      "name": "string",
      "slug": "string",
      "isHomepage": boolean,
      "blocks": [
        {
          "category": "string (from available categories)",
          "tags": ["string"],
          "quantity": number,
          "notes": "string (style/content guidance)"
        }
      ]
    }
  ]
}`;

export async function parseUserPrompt(prompt: string): Promise<AIResponse> {
  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 2048,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const textContent = message.content.find((block) => block.type === "text");
  if (!textContent || textContent.type !== "text") {
    throw new Error("No text response from AI");
  }

  return JSON.parse(textContent.text) as AIResponse;
}
