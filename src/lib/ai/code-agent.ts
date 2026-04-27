/**
 * AI Code Generation Engine
 *
 * The brain of the builder. Supports multiple AI models (Gemini, Claude, GPT-4o).
 * Each model receives the same expert system prompt that teaches it how to
 * generate production-quality React applications.
 */

export type AIModel = "gemini-flash" | "claude-sonnet" | "gpt-4o";

// ─────────────────────────────────────────────────────────────
// THE SYSTEM PROMPT — This is the most important code in the entire project.
// It teaches the AI how to think about design, structure, and code quality.
// ─────────────────────────────────────────────────────────────

const SYSTEM_PROMPT = `You are a world-class full-stack developer and UI designer. You don't just write code — you craft beautiful, production-ready applications that look and feel professional from the very first generation.

═══════════════════════════════════════════════
TECH STACK — Use ONLY these. No exceptions.
═══════════════════════════════════════════════

- React 18 with TypeScript (strict mode)
- Tailwind CSS for ALL styling (loaded via CDN script tag)
- lucide-react for icons
- react-router-dom for routing (multi-page apps only)
- date-fns for date formatting
- recharts for charts and data visualization
- @supabase/supabase-js (ONLY when user has connected Supabase)

═══════════════════════════════════════════════
OUTPUT FORMAT
═══════════════════════════════════════════════

For EVERY file you create or modify, wrap it in a file block:
<boltFile path="src/App.tsx">
// complete file contents
</boltFile>

Rules:
- ALWAYS output src/App.tsx (the entry point)
- When ITERATING, output ONLY files that changed — never re-output unchanged files
- Your response must include: (1) A 1-3 sentence explanation of what you did, then (2) the file blocks
- Do NOT output package.json, tsconfig, vite.config, or any config files

═══════════════════════════════════════════════
DESIGN INTELLIGENCE — How to think about UI
═══════════════════════════════════════════════

You are not just a coder. You are a designer. Every app you generate must look like it was designed by a professional. Follow these principles:

COLOR PALETTES BY CONTEXT:
- Finance/Crypto/Trading → Dark theme (#0F172A base), blue (#3B82F6) + emerald (#10B981) accents, monospace numbers
- Restaurant/Food → Warm palette, cream (#FFFBEB) or dark wood (#1C1917), amber (#F59E0B) + red (#EF4444) accents
- SaaS/Startup → Clean white or dark, violet (#7C3AED) or blue (#2563EB) primary, professional
- Healthcare/Medical → Light clean theme, teal (#0D9488) + blue, trustworthy feel
- Fitness/Gym → Dark/black (#09090B), neon green (#22C55E) or orange (#F97316), energetic
- E-Commerce → Clean white, strong CTAs in orange (#EA580C) or rose (#E11D48), product-focused
- Portfolio/Creative → Minimal, lots of whitespace, one accent color, elegant typography
- Education → Friendly, indigo (#4F46E5) + warm tones, approachable
- Default → Dark theme (#0A0A0F base, #18181B cards), violet (#7C3AED) primary, zinc text

TYPOGRAPHY HIERARCHY (always consistent):
- Page title: text-4xl sm:text-5xl font-bold tracking-tight
- Section heading: text-2xl sm:text-3xl font-bold
- Card title: text-lg font-semibold
- Body text: text-base text-zinc-400 (dark) or text-gray-600 (light)
- Caption/label: text-sm text-zinc-500
- Micro text: text-xs text-zinc-600

SPACING SYSTEM (always consistent):
- Page padding: px-4 sm:px-6 lg:px-8
- Section spacing: py-16 sm:py-24
- Card padding: p-6
- Component gaps: gap-4 (tight), gap-6 (normal), gap-8 (loose)
- Stack spacing: space-y-4 (tight), space-y-6 (normal)

LAYOUT PATTERNS BY APP TYPE:
- "landing page" → Hero (full-width gradient bg, big headline, 2 CTAs) → Features (3-4 cards grid) → Social proof (logos or testimonials) → Pricing (3-tier cards) → CTA section → Footer
- "dashboard" → Sidebar nav (w-64, dark) → Top bar (h-16) → Main area with stat cards (grid-cols-4) + chart + data table
- "e-commerce" → Header (logo, search, cart) → Filters sidebar (w-64) → Product grid (grid-cols-2 sm:grid-cols-3 lg:grid-cols-4) → Product cards (image, title, price, button)
- "portfolio" → Full-screen hero with name → Project grid (masonry or grid) → About/Skills → Contact form
- "blog" → Header → Featured post (large) → Post grid → Sidebar (categories, tags)
- "admin panel" → Sidebar → Data tables → Forms → Charts
- "mobile app" → Bottom tab navigation → Full-screen views → Cards → Action sheets

COMPONENT QUALITY STANDARDS:
- Every button must have hover + active + focus states
- Cards: rounded-xl, subtle shadow (shadow-sm), hover:shadow-md transition
- Inputs: rounded-lg, border, focus:ring-2 focus:ring-{primary}/20 focus:border-{primary}
- Add transition-all duration-200 to all interactive elements
- Loading states: use skeleton placeholders (animate-pulse bg-zinc-800 rounded)
- Images: always include rounded corners, object-cover, aspect-ratio
- Use gradient backgrounds for heroes: bg-gradient-to-br from-{color} to-{color}
- Dividers: use border-t border-zinc-800 (dark) or border-gray-200 (light)

RESPONSIVE DESIGN (mobile-first, always):
- Start at 375px width
- sm: (640px) — tablet adjustments
- md: (768px) — small laptop
- lg: (1024px) — desktop
- Grid: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
- Hide sidebars on mobile, show as slide-over or bottom sheet
- Stack horizontal layouts vertically on mobile

═══════════════════════════════════════════════
CODE STRUCTURE — How to organize files
═══════════════════════════════════════════════

MAXIMUM 150 LINES PER FILE. If a component exceeds this, split it.

File organization:
- src/App.tsx — Root component. Sets up Router if multi-page, otherwise renders main layout.
- src/components/ui/ — Reusable primitives: Button.tsx, Card.tsx, Input.tsx, Badge.tsx, Modal.tsx, Avatar.tsx
- src/components/ — Feature components: Header.tsx, Sidebar.tsx, ProductCard.tsx, etc.
- src/pages/ — Page-level components (only for multi-page apps)
- src/hooks/ — Custom hooks: useLocalStorage, useDebounce, etc.
- src/lib/ — Utilities: cn() class merger, formatCurrency(), etc.
- src/types/ — TypeScript interfaces and types
- src/data/ — Mock data arrays (products, users, posts, etc.)

NAMING CONVENTIONS:
- Components: PascalCase (HeroSection.tsx, ProductCard.tsx)
- Hooks: camelCase with "use" prefix (useCart.ts)
- Utils: camelCase (formatPrice.ts)
- Types: PascalCase interfaces (Product, User, CartItem)

STATE MANAGEMENT:
- Simple state: useState
- Shared state across components: React.createContext + useContext
- Complex state: useReducer
- Never prop-drill more than 2 levels — use context instead

═══════════════════════════════════════════════
CONTENT QUALITY — No fake data
═══════════════════════════════════════════════

NEVER use: "Lorem ipsum", "Item 1", "User 1", "example.com", "John Doe" (overused), "foo", "bar", "test"

ALWAYS use realistic, contextual content:
- Names: "Sarah Chen", "Marcus Johnson", "Amara Okafor", "David Kim"
- Companies: "Nexus Analytics", "Verde Capital", "Pulse Health", "Orbit Studios"
- Prices: $29/mo, $49/mo, $99/mo (realistic SaaS pricing)
- Dates: Use date-fns to show relative dates like "2 hours ago", "Mar 15, 2026"
- Descriptions: Write real, compelling copy that matches the industry
- Images: Use https://images.unsplash.com/photo-{id}?w=400&h=300&fit=crop for real photos
  - Hero backgrounds: ?w=1920&h=1080&fit=crop
  - Avatars: ?w=100&h=100&fit=crop&face
  - Products: ?w=400&h=400&fit=crop

═══════════════════════════════════════════════
ITERATION RULES — When user asks for changes
═══════════════════════════════════════════════

1. "Change the color/style" → Output ONLY the file(s) where the change applies
2. "Add a new section/page" → Output the new file + update App.tsx imports/routing
3. "Fix the bug/error" → Analyze the error, output the minimal surgical fix
4. "Make it responsive" → Output only files with layout changes
5. "Add dark mode" → Add dark: classes to existing Tailwind, output changed files
6. NEVER rewrite files that don't need changes
7. NEVER remove existing features unless explicitly asked
8. When adding features, maintain the existing design language and color palette

═══════════════════════════════════════════════
ACCESSIBILITY — Not optional
═══════════════════════════════════════════════

- Semantic HTML: <nav>, <main>, <section>, <article>, <aside>, <footer>
- aria-label on interactive elements without visible text
- role="button" on non-button clickable elements
- Focus management: focus:outline-none focus:ring-2 focus:ring-{primary}
- Keyboard navigation: tabIndex, onKeyDown for custom controls
- Color contrast: ensure text is readable (4.5:1 ratio minimum)
- Alt text on all images (descriptive, not "image of...")
- Skip to main content link (for multi-section pages)

═══════════════════════════════════════════════
SCREENSHOT-TO-CODE — When you receive an image
═══════════════════════════════════════════════

When the user uploads a screenshot or design image:
1. Analyze the layout carefully: header, sections, grid structure, sidebar, footer
2. Identify the color palette from the image
3. Identify typography sizes and weights
4. Recreate the design PIXEL-PERFECTLY in React + Tailwind
5. Match colors using Tailwind classes or hex values
6. Match spacing and proportions as closely as possible
7. Use proper semantic HTML structure
8. Make it responsive (the image may show desktop — add mobile breakpoints)
9. If the image shows data (tables, charts, cards), generate realistic mock data
10. Output complete, working files — not a partial recreation

═══════════════════════════════════════════════
AFRICAN MARKET INTEGRATIONS
═══════════════════════════════════════════════

When the user mentions African payments, mobile money, or specific African services:

M-PESA (Kenya, Tanzania):
- Use the Safaricom Daraja API pattern
- STK Push for payment initiation
- Callback URL for payment confirmation
- Format: phone numbers as 254XXXXXXXXX
- Show KES currency formatting

FLUTTERWAVE (Pan-African):
- Use Flutterwave inline checkout
- Support NGN, KES, GHS, ZAR, UGX
- Include payment form with card, mobile money, bank transfer options
- Redirect flow or inline popup

PAYSTACK (Nigeria, Ghana, South Africa):
- Use Paystack inline checkout
- Support NGN, GHS, ZAR
- Simple button → popup payment flow
- Verify transaction on callback

LOCAL CURRENCY FORMATTING:
- Nigeria: ₦1,000.00
- Kenya: KES 1,000.00
- Ghana: GH₵ 1,000.00
- South Africa: R 1,000.00
- Uganda: UGX 1,000

LOW BANDWIDTH OPTIMIZATION:
- Lazy load images with loading="lazy"
- Use smaller image sizes (w=400 instead of w=1920)
- Minimize bundle size
- Use system fonts as fallback

═══════════════════════════════════════════════
PWA GENERATION
═══════════════════════════════════════════════

When the user asks for a PWA or offline-capable app, include:
1. A manifest.json file with: name, short_name, icons, start_url, display: standalone, theme_color
2. A service-worker.js with basic cache-first strategy
3. A register-sw.ts that registers the service worker on load
4. Meta tags in the HTML: <meta name="theme-color">, <link rel="manifest">
5. Add to home screen prompt logic

═══════════════════════════════════════════════
IMAGE HANDLING
═══════════════════════════════════════════════

For images in generated apps:
- Hero backgrounds: use https://images.unsplash.com/photo-{relevant-id}?w=1920&h=1080&fit=crop
- Product images: use https://images.unsplash.com/photo-{relevant-id}?w=400&h=400&fit=crop
- Avatars: use https://images.unsplash.com/photo-{relevant-id}?w=100&h=100&fit=crop&face
- Logos: use inline SVG icons or lucide-react icons
- Illustrations: create inline SVG illustrations when possible
- Always use descriptive alt text
- Always add loading="lazy" for performance
- Use object-cover and proper aspect-ratio classes

═══════════════════════════════════════════════
ADVANCED: NEXT.JS GENERATION
═══════════════════════════════════════════════

When the user specifically asks for a Next.js app or mentions SSR/SEO:
- Use Next.js App Router patterns (app/ directory)
- page.tsx for routes, layout.tsx for layouts
- Use 'use client' directive only for interactive components
- Server components by default
- Generate proper metadata exports for SEO
- Use Next.js Image component patterns (but with regular img tags since we're in Sandpack)
- API routes in app/api/ if backend logic needed
- Note: The preview sandbox runs React (not Next.js), so generated code should work as standard React but follow Next.js conventions for easy migration`;

// ─────────────────────────────────────────────────────────────
// PROMPT BUILDER
// ─────────────────────────────────────────────────────────────

export function buildPrompt(
  userMessage: string,
  files: Record<string, string>,
  conversationHistory: Array<{ role: string; content: string }>,
  projectKnowledge?: string
): {
  systemPrompt: string;
  messages: Array<{ role: string; content: string }>;
} {
  let systemPrompt = SYSTEM_PROMPT;

  if (projectKnowledge) {
    systemPrompt += `\n\n═══════════════════════════════════════════════\nPROJECT KNOWLEDGE — Follow these for ALL generations\n═══════════════════════════════════════════════\n${projectKnowledge}`;
  }

  // Check if Supabase is connected (look for config in files)
  if (files["__supabase_config__"]) {
    try {
      const config = JSON.parse(files["__supabase_config__"]);
      systemPrompt += `\n\n═══════════════════════════════════════════════
SUPABASE CONNECTED — Full-Stack Mode
═══════════════════════════════════════════════

The user has a Supabase project connected:
- URL: ${config.url}
- Anon Key: available in the app

You can now generate FULL-STACK code:
1. Import { createClient } from '@supabase/supabase-js'
2. Initialize: const supabase = createClient('${config.url}', '${config.anonKey}')
3. Use supabase.from('table').select/insert/update/delete for database operations
4. Use supabase.auth.signUp/signInWithPassword for authentication
5. Use supabase.storage for file uploads
6. Generate proper TypeScript types for database tables
7. Include Row Level Security (RLS) policy suggestions as SQL comments
8. Handle auth state with useEffect + supabase.auth.onAuthStateChange
9. Show login/signup forms when user is not authenticated
10. Always handle loading and error states for async operations`;
    } catch {
      // Skip if config is not valid JSON
    }
  }

  const filePaths = Object.keys(files);
  if (filePaths.length > 0) {
    systemPrompt += `\n\n═══════════════════════════════════════════════\nCURRENT PROJECT (${filePaths.length} files)\n═══════════════════════════════════════════════`;
    systemPrompt += `\nFile tree:\n${filePaths.map((p) => `  ${p}`).join("\n")}`;

    const totalChars = Object.values(files).reduce(
      (sum, c) => sum + c.length,
      0
    );

    if (totalChars < 120_000) {
      for (const [path, content] of Object.entries(files)) {
        systemPrompt += `\n\n--- ${path} ---\n${content}`;
      }
    } else {
      // Large project: include key files + tree
      const priorities = [
        "src/App.tsx",
        "src/main.tsx",
        "src/types/index.ts",
      ];
      for (const p of priorities) {
        if (files[p]) {
          systemPrompt += `\n\n--- ${p} ---\n${files[p]}`;
        }
      }
      // Include files referenced in the user's message
      for (const [path, content] of Object.entries(files)) {
        if (
          !priorities.includes(path) &&
          userMessage.toLowerCase().includes(path.toLowerCase().replace("src/", ""))
        ) {
          systemPrompt += `\n\n--- ${path} ---\n${content}`;
        }
      }
      systemPrompt +=
        "\n\n(Large project — showing key files + referenced files. Full tree shown above.)";
    }
  }

  const recentHistory = conversationHistory.slice(-20);

  // Strip image data from history (too large for context)
  const cleanHistory = recentHistory.map((msg) => ({
    role: msg.role === "assistant" ? "assistant" : "user",
    content: msg.content.replace(/\[IMAGE:data:[^\]]+\]/g, "[Image was attached]"),
  }));

  const messages = [
    ...cleanHistory,
    { role: "user", content: userMessage },
  ];

  return { systemPrompt, messages };
}

/**
 * Extract image data from a message (if present)
 * Format: [IMAGE:data:image/png;base64,...]
 */
export function extractImageFromMessage(message: string): {
  text: string;
  imageData: string | null;
  mimeType: string | null;
} {
  const match = message.match(/\[IMAGE:(data:([^;]+);base64,([^\]]+))\]/);
  if (!match) {
    return { text: message, imageData: null, mimeType: null };
  }

  const text = message.replace(/\[IMAGE:data:[^\]]+\]/, "").trim();
  const mimeType = match[2]; // e.g., "image/png"
  const base64Data = match[3]; // raw base64 without prefix

  return { text: text || "Recreate this design as a React application", imageData: base64Data, mimeType };
}

// ─────────────────────────────────────────────────────────────
// FILE PARSER
// ─────────────────────────────────────────────────────────────

export function parseFileBlocks(
  response: string
): Array<{ path: string; content: string }> {
  const files: Array<{ path: string; content: string }> = [];
  const regex = /<boltFile\s+path="([^"]+)">([\s\S]*?)<\/boltFile>/g;
  let match;
  while ((match = regex.exec(response)) !== null) {
    files.push({
      path: match[1].trim(),
      content: match[2].replace(/^\n/, "").replace(/\n$/, ""),
    });
  }
  return files;
}

export function extractChatText(response: string): string {
  return response
    .replace(/<boltFile\s+path="[^"]+">[\s\S]*?<\/boltFile>/g, "")
    .trim();
}

export function estimateCreditCost(filesChanged: number): number {
  if (filesChanged === 0) return 0.25;
  if (filesChanged <= 2) return 0.5;
  if (filesChanged <= 5) return 1.0;
  return 1.5 + (filesChanged - 5) * 0.1;
}

// ─────────────────────────────────────────────────────────────
// MULTI-MODEL STREAMING
// ─────────────────────────────────────────────────────────────

export async function* streamGeneration(
  userMessage: string,
  files: Record<string, string>,
  conversationHistory: Array<{ role: string; content: string }>,
  projectKnowledge?: string,
  model: AIModel = "gemini-flash",
  byokKey?: string
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

  switch (model) {
    case "claude-sonnet":
      yield* streamClaude(systemPrompt, messages, byokKey);
      break;
    case "gpt-4o":
      yield* streamOpenAI(systemPrompt, messages, byokKey);
      break;
    case "gemini-flash":
    default:
      yield* streamGemini(systemPrompt, messages, byokKey);
      break;
  }
}

// ─── Gemini Streaming ───────────────────────────────────────

async function* streamGemini(
  systemPrompt: string,
  messages: Array<{ role: string; content: string }>,
  apiKey?: string
): AsyncGenerator<
  | { type: "token"; content: string }
  | { type: "file"; path: string; content: string }
  | { type: "done"; fullResponse: string }
  | { type: "error"; message: string }
> {
  const key = apiKey || process.env.GEMINI_API_KEY;
  if (!key) {
    yield { type: "error", message: "No Gemini API key configured" };
    return;
  }

  // Build Gemini messages, handling image attachments in the last user message
  const geminiMessages = messages.map((msg, i) => {
    const role = msg.role === "user" ? "user" : "model";
    const isLastMessage = i === messages.length - 1;

    // Check if this message has an embedded image
    if (isLastMessage && role === "user") {
      const { text, imageData, mimeType } = extractImageFromMessage(msg.content);
      if (imageData && mimeType) {
        return {
          role,
          parts: [
            { text },
            { inline_data: { mime_type: mimeType, data: imageData } },
          ],
        };
      }
    }

    // Strip any image markers from non-last messages
    const cleanContent = msg.content.replace(/\[IMAGE:data:[^\]]+\]/g, "[Image was attached]");
    return { role, parts: [{ text: cleanContent }] };
  });

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent?key=${key}&alt=sse`,
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
      const err = await response.text();
      yield { type: "error", message: `Gemini error (${response.status}): ${err.slice(0, 200)}` };
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
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        if (!line.startsWith("data: ")) continue;
        const data = line.slice(6).trim();
        if (data === "[DONE]") continue;

        try {
          const parsed = JSON.parse(data);
          const text = parsed.candidates?.[0]?.content?.parts?.[0]?.text || "";
          if (text) {
            fullResponse += text;
            yield { type: "token", content: text };
          }
        } catch {
          // skip malformed chunks
        }
      }
    }

    const fileBlocks = parseFileBlocks(fullResponse);
    for (const file of fileBlocks) {
      yield { type: "file", path: file.path, content: file.content };
    }
    yield { type: "done", fullResponse };
  } catch (err) {
    yield { type: "error", message: err instanceof Error ? err.message : "Gemini error" };
  }
}

// ─── Claude Streaming ───────────────────────────────────────

async function* streamClaude(
  systemPrompt: string,
  messages: Array<{ role: string; content: string }>,
  apiKey?: string
): AsyncGenerator<
  | { type: "token"; content: string }
  | { type: "file"; path: string; content: string }
  | { type: "done"; fullResponse: string }
  | { type: "error"; message: string }
> {
  const key = apiKey || process.env.ANTHROPIC_API_KEY;
  if (!key || key === "your_anthropic_api_key_here") {
    yield { type: "error", message: "No Anthropic API key configured. Add ANTHROPIC_API_KEY to your environment or switch to Gemini." };
    return;
  }

  // Claude messages format: alternate user/assistant, starting with user
  const claudeMessages: Array<{ role: "user" | "assistant"; content: string }> = [];
  for (const msg of messages) {
    const role = msg.role === "assistant" ? "assistant" as const : "user" as const;
    // Claude requires alternating roles — merge consecutive same-role messages
    if (claudeMessages.length > 0 && claudeMessages[claudeMessages.length - 1].role === role) {
      claudeMessages[claudeMessages.length - 1].content += "\n\n" + msg.content;
    } else {
      claudeMessages.push({ role, content: msg.content });
    }
  }

  // Ensure first message is from user
  if (claudeMessages.length > 0 && claudeMessages[0].role !== "user") {
    claudeMessages.unshift({ role: "user", content: "Begin." });
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 16384,
        system: systemPrompt,
        messages: claudeMessages,
        stream: true,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      yield { type: "error", message: `Claude error (${response.status}): ${err.slice(0, 200)}` };
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
      const events = buffer.split("\n\n");
      buffer = events.pop() || "";

      for (const event of events) {
        const lines = event.split("\n");
        let eventType = "";
        let eventData = "";

        for (const line of lines) {
          if (line.startsWith("event: ")) eventType = line.slice(7);
          if (line.startsWith("data: ")) eventData = line.slice(6);
        }

        if (eventType === "content_block_delta" && eventData) {
          try {
            const parsed = JSON.parse(eventData);
            const text = parsed.delta?.text || "";
            if (text) {
              fullResponse += text;
              yield { type: "token", content: text };
            }
          } catch {
            // skip
          }
        }
      }
    }

    const fileBlocks = parseFileBlocks(fullResponse);
    for (const file of fileBlocks) {
      yield { type: "file", path: file.path, content: file.content };
    }
    yield { type: "done", fullResponse };
  } catch (err) {
    yield { type: "error", message: err instanceof Error ? err.message : "Claude error" };
  }
}

// ─── OpenAI Streaming ───────────────────────────────────────

async function* streamOpenAI(
  systemPrompt: string,
  messages: Array<{ role: string; content: string }>,
  apiKey?: string
): AsyncGenerator<
  | { type: "token"; content: string }
  | { type: "file"; path: string; content: string }
  | { type: "done"; fullResponse: string }
  | { type: "error"; message: string }
> {
  const key = apiKey || process.env.OPENAI_API_KEY;
  if (!key) {
    yield { type: "error", message: "No OpenAI API key configured. Add your key in Settings or switch to Gemini." };
    return;
  }

  const openaiMessages = [
    { role: "system" as const, content: systemPrompt },
    ...messages.map((msg) => ({
      role: (msg.role === "assistant" ? "assistant" : "user") as "system" | "user" | "assistant",
      content: msg.content,
    })),
  ];

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: openaiMessages,
        max_tokens: 16384,
        temperature: 0.7,
        stream: true,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      yield { type: "error", message: `OpenAI error (${response.status}): ${err.slice(0, 200)}` };
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
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        if (!line.startsWith("data: ")) continue;
        const data = line.slice(6).trim();
        if (data === "[DONE]") continue;

        try {
          const parsed = JSON.parse(data);
          const text = parsed.choices?.[0]?.delta?.content || "";
          if (text) {
            fullResponse += text;
            yield { type: "token", content: text };
          }
        } catch {
          // skip
        }
      }
    }

    const fileBlocks = parseFileBlocks(fullResponse);
    for (const file of fileBlocks) {
      yield { type: "file", path: file.path, content: file.content };
    }
    yield { type: "done", fullResponse };
  } catch (err) {
    yield { type: "error", message: err instanceof Error ? err.message : "OpenAI error" };
  }
}
