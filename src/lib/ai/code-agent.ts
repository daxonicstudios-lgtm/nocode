/**
 * AI Code Generation Engine
 *
 * The brain of the builder. Takes a user message + current project files,
 * sends to an LLM, and returns generated React+TS+Tailwind code files.
 *
 * Supports: Gemini (default), Claude (when ANTHROPIC_API_KEY is set)
 */

const SYSTEM_PROMPT = `You are an expert full-stack React developer. You build production-quality web applications from natural language descriptions.

TECH STACK (use ONLY these):
- React 18 with TypeScript (strict mode, no \`any\` types)
- Tailwind CSS for ALL styling (loaded via CDN — no config files needed)
- lucide-react for icons (import from "lucide-react")
- react-router-dom for routing (only if multi-page)
- date-fns for date formatting (only if needed)
- recharts for charts/graphs (only if needed)

OUTPUT FORMAT:
For each file you create or modify, wrap it in a file block:
<boltFile path="src/App.tsx">
// file contents here
</boltFile>

CRITICAL RULES:
1. ALWAYS include src/App.tsx as the entry point — it must be the root component
2. TypeScript strict mode — no \`any\` types, proper interfaces for all data
3. Tailwind CSS utility classes ONLY — no CSS files, no CSS modules, no styled-components
4. Mobile-first responsive design (375px width first, then scale up with sm:, md:, lg:)
5. Use functional components with hooks (useState, useEffect, useMemo, useCallback)
6. Professional, realistic placeholder content — NEVER use "Lorem ipsum" or "foo bar"
7. Self-contained — every import must come from the allowed packages listed above
8. Handle loading states and error states gracefully
9. Use semantic HTML (nav, main, section, article, footer) and aria attributes for accessibility
10. Support dark mode via Tailwind \`dark:\` classes where appropriate
11. When ITERATING on an existing project, output ONLY files that changed — do not re-output unchanged files
12. Use named exports for components, default export for the main component of each file
13. Keep component files focused — one main component per file, extract sub-components when >100 lines
14. Use consistent color schemes — pick a cohesive palette and use it throughout
15. Images: use placeholder URLs from picsum.photos or via inline SVG illustrations

STRUCTURE:
- src/App.tsx — root component, sets up routing if needed
- src/components/ — reusable UI components
- src/pages/ — page-level components (if multi-page)
- src/hooks/ — custom hooks (if needed)
- src/lib/ — utility functions (if needed)
- src/types/ — TypeScript interfaces (if needed)

When the user asks you to build something, generate a COMPLETE, working application. Every file should be production-quality.

When the user asks you to modify something, analyze the existing code and output ONLY the files that need to change. Be surgical — don't rewrite files that don't need changes.

IMPORTANT: Your response should include both:
1. A brief explanation of what you built/changed (2-3 sentences max)
2. The file blocks with the actual code

Do NOT include package.json, tsconfig.json, vite.config.ts, or any config files — those are handled by the sandbox automatically.`;

/**
 * Build the full prompt with project context
 */
export function buildPrompt(
  userMessage: string,
  files: Record<string, string>,
  conversationHistory: Array<{ role: string; content: string }>,
  projectKnowledge?: string
): { systemPrompt: string; messages: Array<{ role: string; content: string }> } {
  let systemPrompt = SYSTEM_PROMPT;

  // Add project knowledge if set
  if (projectKnowledge) {
    systemPrompt += `\n\nPROJECT KNOWLEDGE (follow these instructions for all generations):\n${projectKnowledge}`;
  }

  // Add current file context
  const filePaths = Object.keys(files);
  if (filePaths.length > 0) {
    systemPrompt += `\n\nCURRENT PROJECT FILES (${filePaths.length} files):`;
    systemPrompt += `\nFile tree:\n${filePaths.map((p) => `  ${p}`).join("\n")}`;

    // For small projects, include all file contents
    // For large projects, include only key files + file tree
    const totalChars = Object.values(files).reduce(
      (sum, content) => sum + content.length,
      0
    );
    const MAX_CONTEXT_CHARS = 100_000; // ~25K tokens

    if (totalChars < MAX_CONTEXT_CHARS) {
      // Include all files
      for (const [path, content] of Object.entries(files)) {
        systemPrompt += `\n\n--- ${path} ---\n${content}`;
      }
    } else {
      // Include only App.tsx and referenced files
      const keyFiles = ["src/App.tsx", "src/index.tsx"];
      for (const path of keyFiles) {
        if (files[path]) {
          systemPrompt += `\n\n--- ${path} ---\n${files[path]}`;
        }
      }
      systemPrompt +=
        "\n\n(Large project — only key files shown. Reference the file tree above for full structure.)";
    }
  }

  // Build message history (last 10 messages for context window management)
  const recentHistory = conversationHistory.slice(-10);
  const messages = [
    ...recentHistory.map((msg) => ({
      role: msg.role === "assistant" ? "model" : "user",
      content: msg.content,
    })),
    { role: "user", content: userMessage },
  ];

  return { systemPrompt, messages };
}

/**
 * Parse file blocks from LLM response
 * Extracts <boltFile path="...">content</boltFile> blocks
 */
export function parseFileBlocks(
  response: string
): Array<{ path: string; content: string }> {
  const files: Array<{ path: string; content: string }> = [];
  const regex = /<boltFile\s+path="([^"]+)">([\s\S]*?)<\/boltFile>/g;

  let match;
  while ((match = regex.exec(response)) !== null) {
    const path = match[1].trim();
    // Remove leading/trailing newlines from content but preserve internal formatting
    const content = match[2].replace(/^\n/, "").replace(/\n$/, "");
    files.push({ path, content });
  }

  return files;
}

/**
 * Extract the chat text (non-file content) from LLM response
 */
export function extractChatText(response: string): string {
  // Remove all file blocks, leaving just the explanation text
  return response
    .replace(/<boltFile\s+path="[^"]+">[\s\S]*?<\/boltFile>/g, "")
    .trim();
}

/**
 * Estimate credit cost based on response complexity
 */
export function estimateCreditCost(filesChanged: number): number {
  if (filesChanged === 0) return 0.25; // chat-only response
  if (filesChanged <= 2) return 0.5; // small change
  if (filesChanged <= 5) return 1.0; // medium change
  return 1.5 + (filesChanged - 5) * 0.1; // large change
}

/**
 * Stream code generation via Gemini API
 */
export async function* streamGeneration(
  userMessage: string,
  files: Record<string, string>,
  conversationHistory: Array<{ role: string; content: string }>,
  projectKnowledge?: string,
  apiKey?: string // BYOK support
): AsyncGenerator<
  | { type: "token"; content: string }
  | { type: "file"; path: string; content: string }
  | { type: "done"; fullResponse: string }
  | { type: "error"; message: string }
> {
  const { systemPrompt, messages } = buildPrompt(
    userMessage,
    files,
    conversationHistory,
    projectKnowledge
  );

  const geminiKey = apiKey || process.env.GEMINI_API_KEY;
  if (!geminiKey) {
    yield { type: "error", message: "No API key configured" };
    return;
  }

  // Build Gemini request
  const geminiMessages = messages.map((msg) => ({
    role: msg.role === "user" ? "user" : "model",
    parts: [{ text: msg.content }],
  }));

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:streamGenerateContent?key=${geminiKey}&alt=sse`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemPrompt }] },
          contents: geminiMessages,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 65536,
            topP: 0.95,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      yield {
        type: "error",
        message: `API error (${response.status}): ${errorText.slice(0, 200)}`,
      };
      return;
    }

    if (!response.body) {
      yield { type: "error", message: "No response body" };
      return;
    }

    let fullResponse = "";
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      // Parse SSE events
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        if (!line.startsWith("data: ")) continue;
        const data = line.slice(6).trim();
        if (data === "[DONE]") continue;

        try {
          const parsed = JSON.parse(data);
          const text =
            parsed.candidates?.[0]?.content?.parts?.[0]?.text || "";
          if (text) {
            fullResponse += text;
            yield { type: "token", content: text };
          }
        } catch {
          // Skip malformed JSON chunks
        }
      }
    }

    // After stream complete, parse file blocks and yield them
    const fileBlocks = parseFileBlocks(fullResponse);
    for (const file of fileBlocks) {
      yield { type: "file", path: file.path, content: file.content };
    }

    yield { type: "done", fullResponse };
  } catch (err) {
    yield {
      type: "error",
      message: err instanceof Error ? err.message : "Unknown error",
    };
  }
}
