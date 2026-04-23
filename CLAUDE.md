@AGENTS.md

# NoCode Platform — AI Developer Guide

## Project Overview

A no-code website builder where users describe what they want and an AI agent assembles pre-built components into a full website. Mobile-first, targeting users in Africa who build from phones.

**Tech stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, shadcn/ui, Supabase (auth + DB + storage), Zustand (state), Claude API (AI agent)

**Component target:** 15,780+ block components across 128 categories covering every possible website scenario. See `docs/component-map.md` for the full breakdown.

---

## Developer Protocol

This project has two developers. When a developer identifies themselves, follow this protocol:

### When someone says "I am Sonic" or "I am Dax":

1. **Read `docs/tasks.md`** — the single source of truth for all tasks
2. **Find their next task** — scan for the first task with `[ ]` (pending) status assigned to them. Check that all tasks listed in "Depends on" are marked `[x]`. If dependencies aren't met, skip to the next eligible task.
3. **Switch to their branch:**
   - Sonic → `git checkout sonic`
   - Dax → `git checkout dax`
   - If the branch is behind, pull latest: `git pull origin <branch>`
4. **Brief them** — show the task ID, title, and a one-line summary of what they're building
5. **Start building** — execute the task immediately

### When a task is completed:

1. **Verify** — check the "Done when" criteria are met
2. **Commit** — stage the changed files and commit with message: `feat(<task-id>): <short description>`
3. **Update `docs/tasks.md`** — change the task status from `[ ]` to `[x]`
4. **Commit the status update** — `git add docs/tasks.md && git commit -m "task: mark <task-id> complete"`
5. **Push** — follow the "Push to" instruction in the task:
   - `stay` → only push to the dev's own branch (`git push origin sonic` or `git push origin dax`)
   - `testing` → push to dev branch, then merge to testing: `git push origin <branch> && git checkout testing && git merge <branch> && git push origin testing && git checkout <branch>`
   - `staging` → same as testing but also merge testing to staging
6. **Show next task** — find and display the next eligible task

### When someone says "What's my progress?" or "How far am I?":
- Read `docs/tasks.md` and count completed `[x]` vs total tasks for that developer
- Show a summary: tasks done, tasks remaining, current wave/phase

---

## Branch Strategy

```
sonic ──┐
        ├──→ testing ──→ staging ──→ main
dax ────┘
```

- `sonic` — Sonic's working branch. Only Sonic pushes here.
- `dax` — Dax's working branch. Only Dax pushes here.
- `testing` — Both devs merge here after completing tasks. Used for integration testing.
- `staging` — Tested code waits here before production. Safety net.
- `main` — Production. Never push directly. Only receives from staging.

**Before starting work each session:**
```bash
git checkout <your-branch>
git pull origin <your-branch>
```

**If your branch is behind testing** (other dev merged new work):
```bash
git checkout <your-branch>
git merge testing
```

---

## File Ownership Rules

- Each task in `docs/tasks.md` lists exact files to create or modify
- **NEVER touch files assigned to the other developer's active (non-completed) tasks**
- If you need to modify a file the other dev is working on, wait for their task to complete first
- Both devs can read any file, but only write to files in their own tasks
- `docs/tasks.md` is the one shared file — both devs update their own task statuses only

---

## Code Standards

### Block Components (the 15,780 components)

Every block component follows this contract:

```typescript
// Import from src/blocks/types.ts
import type { BlockProps } from "@/blocks/types";

export default function HeroXXX(props: BlockProps) {
  const {
    theme,
    heading = "Default Heading",
    subheading = "Default subheading text",
    bodyText,
    buttonText = "Get Started",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      {/* Component markup */}
    </section>
  );
}
```

**Rules:**
1. Export a **default** React component accepting `BlockProps`
2. **Tailwind CSS only** — no external CSS files, no CSS modules
3. Use `theme?.primary`, `theme?.accent`, etc. for dynamic colors via inline `style` prop — fall back to Tailwind defaults
4. All text content comes from props with **sensible defaults** (block must look good with zero props passed)
5. **Mobile-first responsive** — design for 375px width first, then scale up
6. Use `lucide-react` for icons (already installed)
7. **Self-contained** — do NOT import from `@/components/ui/*`. Blocks must work standalone
8. File naming: `{category}-{number}.tsx` (e.g., `hero-001.tsx`, `navbar-042.tsx`)
9. Each block must be visually distinct from other variants in its category
10. No placeholder text like "Lorem ipsum" — use realistic, context-appropriate defaults

### General Code
- TypeScript strict mode — no `any` types
- Use the `cn()` utility from `@/lib/utils` for className merging (in non-block code)
- Use Supabase server client for server components, browser client for client components
- API routes return proper HTTP status codes and error messages
- All user-facing text should be clear and professional

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `docs/tasks.md` | Master task list — the single source of truth |
| `docs/component-map.md` | Full breakdown of all 15,780 components |
| `docs/transcript.md` | Original project vision from Sonic |
| `src/types/index.ts` | Core TypeScript types (User, Project, Block, etc.) |
| `src/blocks/types.ts` | BlockProps interface (component contract) |
| `src/blocks/registry.ts` | Block registry (slug → component mapping) |
| `src/stores/editor-store.ts` | Editor state management (Zustand) |
| `src/lib/supabase/client.ts` | Browser Supabase client |
| `src/lib/supabase/server.ts` | Server Supabase client |
| `src/lib/ai/agent.ts` | Claude AI prompt parser |

---

## Database

**Supabase project:** `gatayhbuutiknhewmjhd` (EU Central, Frankfurt)

Tables: `profiles`, `projects`, `project_pages`, `blocks`, `page_blocks`, `publish_requests`, `domains`

RLS is enabled on all tables. Auth trigger auto-creates profile on signup.
