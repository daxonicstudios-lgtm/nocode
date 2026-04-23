# Master Task List

> **This is the single source of truth for all project work.**
> Read `CLAUDE.md` for how to use this file.

**Status markers:** `[ ]` Pending | `[~]` In Progress | `[x]` Completed

---

## INFRASTRUCTURE — SONIC

### S-001: Block Types & Registry System
- **Who:** SONIC
- **Status:** [x]
- **Branch:** sonic
- **Push to:** stay
- **Depends on:** —
- **Files to create:** `src/blocks/types.ts`, `src/blocks/registry.ts`
- **What to do:** Create the `BlockProps` interface that ALL block components will use (theme, heading, subheading, bodyText, buttonText, buttonUrl, imageUrl, items, plus index signature). Create the block registry that maps slug strings to lazy-loaded React components. Export `getBlockComponent(slug)`, `getAllBlocks()`, `getBlocksByCategory(category)`. Use `React.lazy()` with dynamic imports for code-splitting.
- **Done when:** Both files compile. Registry exports all three functions. BlockProps is importable from `@/blocks/types`.

### S-002: Block Renderer Component
- **Who:** SONIC
- **Status:** [x]
- **Branch:** sonic
- **Push to:** stay
- **Depends on:** S-001
- **Files to create:** `src/components/editor/BlockRenderer.tsx`
- **What to do:** Create a component that takes a `PageBlock` + `Block` metadata, looks up the component in the registry via `getBlockComponent(block.slug)`, renders it with `custom_props` spread as props, wraps in `React.Suspense` with a skeleton loading fallback. Handle missing blocks gracefully (show placeholder with block name).
- **Done when:** Component renders blocks from registry. Shows skeleton while loading. Shows placeholder for missing blocks. Build passes.

### S-003: Supabase Admin Client
- **Who:** SONIC
- **Status:** [x]
- **Branch:** sonic
- **Push to:** stay
- **Depends on:** —
- **Files to create:** `src/lib/supabase/admin.ts`
- **What to do:** Create a Supabase client using the service role key (from `SUPABASE_SERVICE_ROLE_KEY` env var) that bypasses RLS. This is for server-side admin operations like the AI route inserting blocks and admin pages fetching all data. Add `SUPABASE_SERVICE_ROLE_KEY` to `.env.local` and `.env.example`.
- **Done when:** Admin client is importable. Uses service role key. `.env.example` updated.

### S-004: Data Fetch Helpers
- **Who:** SONIC
- **Status:** [x]
- **Branch:** sonic
- **Push to:** stay
- **Depends on:** S-003
- **Files to create:** `src/lib/api/projects.ts`
- **What to do:** Create server-side data fetching functions: `fetchProject(id)` returns a single project, `fetchProjectPages(projectId)` returns all pages for a project sorted by sort_order, `fetchPageBlocks(pageId)` returns all blocks on a page with their Block metadata joined, `fetchProjectWithDetails(projectId)` returns project + pages + blocks in one call. Use the server Supabase client.
- **Done when:** All functions work, return typed data, handle errors. Used by editor and preview pages.

### S-005: Complete AI API Route
- **Who:** SONIC
- **Status:** [x]
- **Branch:** sonic
- **Push to:** testing
- **Depends on:** S-003, S-004
- **Files to modify:** `src/app/api/ai/route.ts`
- **What to do:** Complete the POST handler. After `parseUserPrompt()` returns the AI response: (1) Create a project in the `projects` table with a generated slug, (2) Create `project_pages` entries for each page the AI suggested, (3) Query the `blocks` table to find matching blocks by category and tags, (4) Create `page_blocks` entries linking blocks to pages with sort_order, (5) Return `{ projectId, projectName, pageCount, blockCount }`. Use the admin Supabase client. Handle errors and rollback if partial insert fails.
- **Done when:** POST `/api/ai` with a prompt creates a full project with pages and blocks in the database. Returns projectId. Error cases handled.

### S-006: Projects Page — Wire Up
- **Who:** SONIC
- **Status:** [x]
- **Branch:** sonic
- **Push to:** testing
- **Depends on:** S-005
- **Files to modify:** `src/app/(dashboard)/projects/page.tsx`
- **What to do:** (1) Uncomment and complete the `handleCreateProject` function — call `/api/ai` with the prompt, then redirect to `/editor/{projectId}`, (2) Add data fetching on mount to load existing projects from `/api/projects`, (3) Display projects in a card grid showing name, status badge, last updated date, with links to editor and preview, (4) Add loading skeleton while fetching, (5) Add error handling with toast.
- **Done when:** User can type a prompt, click "Build My Site", project is created via AI, and they're redirected to the editor. Existing projects show in a grid. Loading states work.

### S-007: Editor — Data Loading & Block Rendering
- **Who:** SONIC
- **Status:** [x]
- **Branch:** sonic
- **Push to:** testing
- **Depends on:** S-002, S-004, S-006
- **Files to modify:** `src/stores/editor-store.ts`, `src/app/(dashboard)/editor/[projectId]/page.tsx`
- **What to do:** In editor-store: add `loadProject(projectId)` async action that fetches project + pages + blocks from Supabase and hydrates the store. Add `saveBlocks()` that persists current block order/props to Supabase. Add `publishProject()` that calls `/api/publish`. In editor page: on mount, call `loadProject(projectId)`. Replace placeholder block divs with `BlockRenderer` component. Wire Publish button to `publishProject()`. Add a page tab bar for multi-page projects.
- **Done when:** Editor loads real project data. Blocks render via BlockRenderer. Theme color changes apply to blocks. Publish button creates a publish request. Page switching works.

### S-008: Preview Page — Server Rendering
- **Who:** SONIC
- **Status:** [x]
- **Branch:** sonic
- **Push to:** testing
- **Depends on:** S-002, S-004
- **Files to modify:** `src/app/preview/[projectId]/page.tsx`
- **What to do:** Make this a server component that fetches project + pages + blocks from Supabase using the data helpers. Render all blocks for the homepage (or specified page) using BlockRenderer in sequence. Keep the "Built with NoCode" watermark. Add Open Graph meta tags (title, description) for link sharing. Handle 404 when project doesn't exist. Apply the project's custom theme colors.
- **Done when:** Preview URL shows the actual assembled website with real blocks. Watermark visible. 404 works. Meta tags present.

### S-009: Admin API Routes
- **Who:** SONIC
- **Status:** [x]
- **Branch:** sonic
- **Push to:** testing
- **Depends on:** S-003
- **Files to create:** `src/app/api/admin/blocks/route.ts`, `src/app/api/admin/users/route.ts`, `src/app/api/admin/publish-requests/route.ts`, `src/app/api/admin/settings/route.ts`, `src/app/api/admin/notifications/route.ts`
- **What to do:** Create all admin API routes: (1) `/api/admin/blocks` — GET with query params for category, is_pro, search. POST to create. PATCH to toggle pro status. (2) `/api/admin/users` — GET all profiles. PATCH to update plan. (3) `/api/admin/publish-requests` — GET all with project+user joins. PATCH to approve/reject (update status). (4) `/api/admin/settings` — GET/PUT platform settings. Create a `platform_settings` table in Supabase if needed. (5) `/api/admin/notifications` — GET unread, PATCH mark as read. All routes use admin Supabase client. All verify the requesting user is admin.
- **Done when:** All 5 API route files work. Admin-only access enforced. CRUD operations functional.

### S-010: Editor — Block Picker
- **Who:** SONIC
- **Status:** [x]
- **Branch:** sonic
- **Push to:** stay
- **Depends on:** S-007
- **Files to create:** `src/components/editor/BlockPicker.tsx`
- **What to do:** Create a sidebar panel that shows all available blocks from the registry, organized by category. Each block shows its name and a small preview/thumbnail. User can click a block to add it to the current page at the bottom. Categories are collapsible sections. Include a search bar to filter blocks by name or category. Mobile-friendly (works as a bottom sheet on small screens).
- **Done when:** Block picker shows all registered blocks by category. Search works. Clicking a block adds it to the current page. Works on mobile.

### S-011: Editor — Block Props Editor
- **Who:** SONIC
- **Status:** [x]
- **Branch:** sonic
- **Push to:** stay
- **Depends on:** S-007
- **Files to create:** `src/components/editor/BlockPropsEditor.tsx`
- **What to do:** When a block is selected in the editor, show a panel with editable fields for its `custom_props`. Auto-generate form fields based on the block's current props: text inputs for strings, color pickers for color values, URL inputs for URLs, textarea for long text. Changes update the store in real-time (call `updateBlockProps`). Include a reset button to restore defaults.
- **Done when:** Selecting a block shows its editable props. Changes reflect immediately in the block preview. Reset works.

### S-012: Editor — Drag & Drop Reordering
- **Who:** SONIC
- **Status:** [x]
- **Branch:** sonic
- **Push to:** stay
- **Depends on:** S-007
- **Files to create:** `src/components/editor/DragDropWrapper.tsx`
- **What to do:** Wrap each block in the editor canvas with drag-and-drop functionality. Use HTML5 Drag and Drop API. Show a drag handle on hover. While dragging, show a drop indicator line between blocks. On drop, call `reorderBlocks(fromIndex, toIndex)` from the editor store. Persist the new order to Supabase via `saveBlocks()`. Must work on both desktop and mobile (touch events).
- **Done when:** Blocks can be reordered by dragging. Visual indicators show during drag. Order persists after save. Works on touch devices.

### S-013: Editor — Page Tabs & Mobile Sidebar
- **Who:** SONIC
- **Status:** [x]
- **Branch:** sonic
- **Push to:** testing
- **Depends on:** S-010, S-011, S-012
- **Files to create:** `src/components/editor/PageTabs.tsx`, `src/components/editor/MobileSidebar.tsx`
- **Files to modify:** `src/app/(dashboard)/editor/[projectId]/page.tsx`
- **What to do:** (1) PageTabs: Tab bar showing all pages in the project. Click to switch active page. Active tab highlighted. (2) MobileSidebar: Slide-out drawer for mobile that contains theme controls, block list, and block picker. Triggered by hamburger button visible on small screens. (3) Integrate both into the editor page. Final editor integration with all components working together.
- **Done when:** Page tabs switch between pages. Mobile sidebar opens/closes. All editor features (block picker, props editor, drag-drop, theme, page tabs) work together. Mobile-friendly.

### S-014: Publish Dialog & Notification System
- **Who:** SONIC
- **Status:** [x]
- **Branch:** sonic
- **Push to:** testing
- **Depends on:** S-009
- **Files to create:** `src/components/editor/PublishDialog.tsx`, `src/lib/notifications.ts`, `src/components/admin/NotificationBell.tsx`
- **What to do:** (1) PublishDialog: Confirmation modal before publishing. Shows project name, page count, block count. On confirm calls publishProject(). Shows success/error state. (2) notifications.ts: Helper to create notifications in Supabase when publish request is created. (3) NotificationBell: Bell icon with unread count badge. Dropdown showing recent notifications. Mark as read on click. For admin layout header.
- **Done when:** Publish button opens dialog. Confirmation creates publish request. Admin sees notification bell with count. Clicking marks as read.

### S-015: Admin Settings & Middleware Protection
- **Who:** SONIC
- **Status:** [ ]
- **Branch:** sonic
- **Push to:** testing
- **Depends on:** S-009
- **Files to modify:** `src/app/(admin)/admin/settings/page.tsx`, `src/middleware.ts`
- **What to do:** (1) Settings page: Add form with save button. Fetch current settings on load. Save via `/api/admin/settings`. Show success toast. (2) Middleware: Add admin route protection. For any request to `/admin/*`, check if the user has `is_admin = true` in their profile. If not, redirect to `/projects`.
- **Done when:** Settings page saves and loads. Non-admin users are redirected away from /admin routes.

### S-016: Editor — Undo/Redo & Auto-Save
- **Who:** SONIC
- **Status:** [ ]
- **Branch:** sonic
- **Push to:** testing
- **Depends on:** S-013
- **Files to modify:** `src/stores/editor-store.ts`, `src/app/(dashboard)/editor/[projectId]/page.tsx`
- **What to do:** Add undo/redo to the editor store using an action history stack. Store snapshots of block state on each change. Implement `undo()` and `redo()` actions. Add debounced auto-save (save to Supabase every 5 seconds after last change). Add keyboard shortcuts: Ctrl+Z for undo, Ctrl+Shift+Z for redo, Delete/Backspace to remove selected block.
- **Done when:** Undo/redo works via keyboard and buttons. Auto-save persists changes. Delete key removes selected block.

---

## INFRASTRUCTURE — DAX

### D-001: shadcn/ui Components — Batch 1
- **Who:** DAX
- **Status:** [ ]
- **Branch:** dax
- **Push to:** stay
- **Depends on:** —
- **Files to create:** `src/components/ui/card.tsx`, `src/components/ui/badge.tsx`, `src/components/ui/skeleton.tsx`, `src/components/ui/input.tsx`, `src/components/ui/textarea.tsx`
- **What to do:** Install 5 shadcn/ui components using `pnpm dlx shadcn@latest add card badge skeleton input textarea`. Verify each component is created in `src/components/ui/`. Test that they import and render correctly.
- **Done when:** All 5 components exist, import without errors, build passes.

### D-002: shadcn/ui Components — Batch 2
- **Who:** DAX
- **Status:** [ ]
- **Branch:** dax
- **Push to:** stay
- **Depends on:** —
- **Files to create:** `src/components/ui/dialog.tsx`, `src/components/ui/dropdown-menu.tsx`, `src/components/ui/select.tsx`, `src/components/ui/toast.tsx`, `src/components/ui/avatar.tsx`
- **What to do:** Install 5 more shadcn/ui components using `pnpm dlx shadcn@latest add dialog dropdown-menu select toast avatar`. If toast requires a Toaster provider, add it to the root layout.
- **Done when:** All 5 components exist, import without errors, toast provider in root layout if needed, build passes.

### D-003: Shared Components
- **Who:** DAX
- **Status:** [ ]
- **Branch:** dax
- **Push to:** testing
- **Depends on:** D-001
- **Files to create:** `src/components/shared/loading-spinner.tsx`, `src/components/shared/empty-state.tsx`, `src/components/shared/project-card.tsx`, `src/components/shared/skeleton-card.tsx`, `src/components/shared/skeleton-table.tsx`
- **What to do:** Create 5 shared components: (1) LoadingSpinner — simple spinning icon, accepts size prop. (2) EmptyState — centered icon + title + description + optional action button. (3) ProjectCard — card showing project name, status badge, last updated, edit/preview links. Uses Card + Badge from shadcn. (4) SkeletonCard — loading placeholder matching ProjectCard shape. (5) SkeletonTable — loading placeholder for table rows (5 rows).
- **Done when:** All 5 components render correctly. Build passes. Mobile responsive.

### D-004: Admin Components Page — Wire Up
- **Who:** DAX
- **Status:** [ ]
- **Branch:** dax
- **Push to:** testing
- **Depends on:** D-001, D-002 (needs Card, Badge, Select, Skeleton)
- **Files to modify:** `src/app/(admin)/admin/components/page.tsx`
- **What to do:** Rewrite admin components page: (1) Fetch blocks from `/api/admin/blocks` on mount, (2) Display in Card grid with thumbnail, name, category badge, pro/free badge, (3) Wire up search filter — filter displayed blocks by name, (4) Wire up category dropdown — filter by category, (5) Wire up plan dropdown — filter by free/pro, (6) Add toggle button on each card to switch pro status via PATCH, (7) Add loading skeleton while fetching, (8) Add empty state when no results.
- **Done when:** Page loads real blocks from API. All 3 filters work. Pro toggle works. Loading and empty states work. Note: if Sonic's API (S-009) isn't deployed yet, use mock data and swap later.

### D-005: Admin Users Page — Wire Up
- **Who:** DAX
- **Status:** [ ]
- **Branch:** dax
- **Push to:** stay
- **Depends on:** D-001 (needs Badge)
- **Files to modify:** `src/app/(admin)/admin/users/page.tsx`
- **What to do:** Rewrite admin users page: (1) Fetch users from `/api/admin/users`, (2) Populate table with name, email, plan badge (free/pro), joined date formatted, (3) Add ability to change user plan via dropdown or button, (4) Add loading skeleton, (5) Add empty state.
- **Done when:** Table shows real users. Plan toggle works. Loading state works.

### D-006: Admin Publish Requests Page — Wire Up
- **Who:** DAX
- **Status:** [ ]
- **Branch:** dax
- **Push to:** stay
- **Depends on:** D-001, D-002 (needs Badge, Dialog)
- **Files to modify:** `src/app/(admin)/admin/publish-requests/page.tsx`
- **What to do:** Rewrite admin publish requests page: (1) Fetch from `/api/admin/publish-requests`, (2) Populate table with project name, user name, status badge (pending/approved/deployed/rejected), requested date, (3) Add Approve and Reject buttons per row, (4) Approve/Reject opens confirmation dialog, then calls PATCH, (5) Add loading skeleton, (6) Add empty state.
- **Done when:** Table shows real publish requests. Approve/Reject buttons work with confirmation. Status badges are color-coded.

### D-007: Admin Mobile Menu
- **Who:** DAX
- **Status:** [ ]
- **Branch:** dax
- **Push to:** testing
- **Depends on:** D-002 (needs DropdownMenu)
- **Files to modify:** `src/app/(admin)/layout.tsx`
- **What to do:** Replace the "TODO: Mobile hamburger menu" comment with a working mobile menu. Use DropdownMenu component. On small screens, show a hamburger icon that opens a dropdown with links to Components, Users, Publish Requests, Settings. Keep the desktop sidebar as-is.
- **Done when:** Mobile hamburger menu works on small screens. Desktop sidebar unchanged. All 4 nav links present.

### D-008: Dashboard User Menu & Footer
- **Who:** DAX
- **Status:** [ ]
- **Branch:** dax
- **Push to:** testing
- **Depends on:** D-002 (needs DropdownMenu, Avatar)
- **Files to create:** `src/components/shared/user-menu.tsx`, `src/components/shared/footer.tsx`
- **Files to modify:** `src/app/(dashboard)/layout.tsx`
- **What to do:** (1) UserMenu: Avatar dropdown showing user name, with links to projects and a logout button. Logout calls `supabase.auth.signOut()` and redirects to `/`. (2) Footer: Simple shared footer with copyright and platform name. (3) Add UserMenu to dashboard layout header and Footer to dashboard layout.
- **Done when:** User menu shows in dashboard header with logout. Footer shows at bottom. Logout works.

### D-009: Marketing Page Polish
- **Who:** DAX
- **Status:** [ ]
- **Branch:** dax
- **Push to:** testing
- **Depends on:** D-008
- **Files to modify:** `src/app/(marketing)/page.tsx`, `src/app/globals.css`
- **What to do:** Enhance the landing page: (1) Add "How It Works" section (3 steps: Describe → AI Builds → Customize & Publish), (2) Add social proof section (trust badges, user count, component count), (3) Add a final CTA section before footer, (4) Add shared footer to marketing page, (5) In globals.css: add smooth scroll behavior (`scroll-behavior: smooth`), add focus-visible styles, improve mobile typography.
- **Done when:** Landing page has 5+ sections. Looks professional. Mobile responsive. Smooth scroll works.

---

## WAVE 1 — UNIVERSAL SECTIONS

> These are sections every website needs. Both devs build blocks simultaneously.
> See `docs/component-map.md` for full variant details.
> Each task = ~50 block components.

### SONIC — Heroes (500 variants, 10 tasks)

### S-100: Heroes Batch 1 — Centered layouts (hero-001 to hero-050)
- **Who:** SONIC
- **Status:** [ ]
- **Branch:** sonic
- **Push to:** stay
- **Depends on:** S-001
- **Files to create:** `src/blocks/heroes/hero-001.tsx` through `src/blocks/heroes/hero-050.tsx`
- **What to do:** Build 50 hero components with centered text layouts. Mix styles: minimal, bold, gradient backgrounds, with CTA buttons, with email input, with stats, with trust badges. Cover industries: generic, SaaS, agency, startup, freelancer, coaching, consulting. Each must be visually unique, mobile-first, accept BlockProps.
- **Done when:** 50 files exist. Each exports a default component. All accept BlockProps. All are mobile responsive. All are visually distinct. Build passes.

### S-101: Heroes Batch 2 — Split layouts (hero-051 to hero-100)
- **Who:** SONIC
- **Status:** [ ]
- **Branch:** sonic
- **Push to:** stay
- **Depends on:** S-001
- **Files to create:** `src/blocks/heroes/hero-051.tsx` through `src/blocks/heroes/hero-100.tsx`
- **What to do:** Build 50 hero components with split layouts (text left + image right, or vice versa). Include: with app mockup, with product image, with illustration placeholder, with video embed area, with feature list. Cover industries: e-commerce, real estate, medical, education, fitness.
- **Done when:** 50 files exist. All visually distinct split layouts. Mobile responsive (stacks vertically on mobile).

### S-102: Heroes Batch 3 — Fullscreen & video backgrounds (hero-101 to hero-150)
- **Who:** SONIC
- **Status:** [ ]
- **Branch:** sonic
- **Push to:** stay
- **Depends on:** S-001
- **Files to create:** `src/blocks/heroes/hero-101.tsx` through `src/blocks/heroes/hero-150.tsx`
- **What to do:** Build 50 hero components with fullscreen backgrounds — image backgrounds with overlay, video background placeholders, gradient mesh, animated gradients, parallax-ready. Cover dark themes, light themes, with search bars, with booking forms, with product showcases.
- **Done when:** 50 files exist. All fullscreen or near-fullscreen. Visually distinct.

### S-103: Heroes Batch 4 — Industry-specific (hero-151 to hero-200)
- **Who:** SONIC
- **Status:** [ ]
- **Branch:** sonic
- **Push to:** stay
- **Depends on:** S-001
- **Files to create:** `src/blocks/heroes/hero-151.tsx` through `src/blocks/heroes/hero-200.tsx`
- **What to do:** Build 50 hero components specifically designed for industries: restaurant (with reservation CTA), legal (with consultation CTA), automotive (with vehicle search), wedding (with countdown), photography (with portfolio grid), music (with streaming links), church (with sermon CTA).
- **Done when:** 50 files. Each clearly industry-specific. Realistic default content.

### S-104: Heroes Batch 5 — Interactive & animated (hero-201 to hero-250)
- **Who:** SONIC
- **Status:** [ ]
- **Branch:** sonic
- **Push to:** stay
- **Depends on:** S-001
- **Files to create:** `src/blocks/heroes/hero-201.tsx` through `src/blocks/heroes/hero-250.tsx`
- **What to do:** Build 50 hero components with interactive or animated elements: typewriter text effect, animated counters, scroll-triggered animations, hover effects on CTAs, animated backgrounds (CSS only, no JS libraries), with interactive elements like toggles or tabs.
- **Done when:** 50 files. Animations work via CSS/Tailwind. No external animation libraries.

### S-105: Heroes Batch 6-10 (hero-251 to hero-500)
- **Who:** SONIC
- **Status:** [ ]
- **Branch:** sonic
- **Push to:** testing
- **Depends on:** S-001
- **Files to create:** `src/blocks/heroes/hero-251.tsx` through `src/blocks/heroes/hero-500.tsx`
- **What to do:** Build remaining 250 hero variants. Mix all styles: minimal variations, bold variations, glassmorphism, neumorphism, brutalist, retro, futuristic, luxury, editorial. Cover remaining industries and niche use cases: crypto, NFT, podcast, gaming, pet services, agriculture, logistics, interior design, architecture, fashion, news. Each batch of 50 should explore a distinct visual direction.
- **Done when:** 250 files. Total 500 hero components. All distinct. Build passes.

### SONIC — Features (400 variants, 8 tasks)

### S-110: Features Batch 1 — Grid layouts (features-001 to features-050)
- **Who:** SONIC
- **Status:** [ ]
- **Branch:** sonic
- **Push to:** stay
- **Depends on:** S-001
- **Files to create:** `src/blocks/features/features-001.tsx` through `src/blocks/features/features-050.tsx`
- **What to do:** Build 50 feature section components with grid layouts: 2-col, 3-col, 4-col, 6-col grids. With icons, with images, with numbers, with hover effects. Minimal, modern, bold, dark styles.
- **Done when:** 50 files. Grid-based feature sections. Mobile responsive (1-col on mobile). Visually distinct.

### S-111: Features Batch 2-8 (features-051 to features-400)
- **Who:** SONIC
- **Status:** [ ]
- **Branch:** sonic
- **Push to:** testing
- **Depends on:** S-001
- **Files to create:** `src/blocks/features/features-051.tsx` through `src/blocks/features/features-400.tsx`
- **What to do:** Build remaining 350 feature variants. Include: alternating rows (text+image zigzag), bento grids, tabbed features, with screenshots, with video, icon grids, with animations, timeline-style, comparison-style, with pricing hint, industry-specific features for all major industries.
- **Done when:** 350 files. Total 400 feature components. Build passes.

### SONIC — Pricing (300), CTA (300), Blog (300), Portfolio (300)

### S-120: Pricing — All 300 variants (pricing-001 to pricing-300)
- **Who:** SONIC
- **Status:** [ ]
- **Branch:** sonic
- **Push to:** testing
- **Depends on:** S-001
- **Files to create:** `src/blocks/pricing/pricing-001.tsx` through `src/blocks/pricing/pricing-300.tsx`
- **What to do:** Build 300 pricing section variants: 2/3/4 tier cards, with toggle (monthly/annual), comparison tables, per-feature pricing, enterprise callout, freemium, usage-based, with FAQ below, with testimonial, highlighted recommended plan, horizontal layout, minimal, bold, dark, with icons, with checkmarks, industry-specific (SaaS, gym, salon, course, subscription box, etc.).
- **Done when:** 300 files. All visually distinct pricing layouts.

### S-130: CTA — All 300 variants (cta-001 to cta-300)
- **Who:** SONIC
- **Status:** [ ]
- **Branch:** sonic
- **Push to:** testing
- **Depends on:** S-001
- **Files to create:** `src/blocks/cta/cta-001.tsx` through `src/blocks/cta/cta-300.tsx`
- **What to do:** Build 300 CTA variants: centered, split with image, gradient bg, with email form, with countdown, banner-style, floating, sticky, with social proof, with stats, with illustration, minimal, bold, with video, with testimonial quote, full-width, card-style, with features list, industry-specific.
- **Done when:** 300 files. All visually distinct CTA sections.

### S-140: Blog — All 300 variants (blog-001 to blog-300)
- **Who:** SONIC
- **Status:** [ ]
- **Branch:** sonic
- **Push to:** testing
- **Depends on:** S-001
- **Files to create:** `src/blocks/blog/blog-001.tsx` through `src/blocks/blog/blog-300.tsx`
- **What to do:** Build 300 blog section variants: post grids (2/3/4 col), featured+list, magazine layout, minimal list, with sidebar, category view, single post layout, card style, newspaper style, timeline, with author bio, with comments section, with tags, with related posts, with newsletter CTA, masonry, with filters, with search.
- **Done when:** 300 files. All visually distinct blog/news layouts.

### S-150: Portfolio — All 300 variants (portfolio-001 to portfolio-300)
- **Who:** SONIC
- **Status:** [ ]
- **Branch:** sonic
- **Push to:** testing
- **Depends on:** S-001
- **Files to create:** `src/blocks/portfolio/portfolio-001.tsx` through `src/blocks/portfolio/portfolio-300.tsx`
- **What to do:** Build 300 portfolio section variants: grid, masonry, filterable by category, case study layout, project detail, with client logos, with testimonials, before/after slider, process showcase, minimal, magazine, with hover overlays, with lightbox trigger, with project stats, industry-specific (photography, design, development, architecture, art).
- **Done when:** 300 files. All visually distinct portfolio sections.

### SONIC — Steps (200), Comparison (150), Video (150), Download (150), Content (200)

### S-160: Steps — All 200 variants
- **Who:** SONIC
- **Status:** [ ]
- **Branch:** sonic
- **Push to:** testing
- **Depends on:** S-001
- **Files to create:** `src/blocks/steps/steps-001.tsx` through `src/blocks/steps/steps-200.tsx`
- **What to do:** Build 200 "how it works" / steps / process variants.
- **Done when:** 200 files exist. Build passes.

### S-170: Comparison — All 150 variants
- **Who:** SONIC
- **Status:** [ ]
- **Branch:** sonic
- **Push to:** testing
- **Depends on:** S-001
- **Files to create:** `src/blocks/comparison/comparison-001.tsx` through `src/blocks/comparison/comparison-150.tsx`
- **What to do:** Build 150 comparison section variants.
- **Done when:** 150 files exist. Build passes.

### S-180: Video — All 150 variants
- **Who:** SONIC
- **Status:** [ ]
- **Branch:** sonic
- **Push to:** stay
- **Depends on:** S-001
- **Files to create:** `src/blocks/video/video-001.tsx` through `src/blocks/video/video-150.tsx`
- **What to do:** Build 150 video section variants.
- **Done when:** 150 files exist. Build passes.

### S-190: Download/App Promo — All 150 variants
- **Who:** SONIC
- **Status:** [ ]
- **Branch:** sonic
- **Push to:** stay
- **Depends on:** S-001
- **Files to create:** `src/blocks/download/download-001.tsx` through `src/blocks/download/download-150.tsx`
- **What to do:** Build 150 download/app promo variants.
- **Done when:** 150 files exist. Build passes.

### S-200: Content Blocks — All 200 variants
- **Who:** SONIC
- **Status:** [ ]
- **Branch:** sonic
- **Push to:** testing
- **Depends on:** S-001
- **Files to create:** `src/blocks/content/content-001.tsx` through `src/blocks/content/content-200.tsx`
- **What to do:** Build 200 content block variants.
- **Done when:** 200 files exist. Build passes.

---

### DAX — Navbars (500 variants, 10 tasks)

### D-100: Navbars Batch 1 — Simple & centered (navbar-001 to navbar-050)
- **Who:** DAX
- **Status:** [ ]
- **Branch:** dax
- **Push to:** stay
- **Depends on:** S-001 (needs BlockProps type)
- **Files to create:** `src/blocks/navbars/navbar-001.tsx` through `src/blocks/navbars/navbar-050.tsx`
- **What to do:** Build 50 navbar components with simple/centered layouts. Logo center with links, logo left with links right, transparent, solid background, with CTA button, with search icon, minimal, bold. All must include a mobile hamburger menu that works.
- **Done when:** 50 files. All responsive with working mobile menu. Visually distinct.

### D-101: Navbars Batch 2-10 (navbar-051 to navbar-500)
- **Who:** DAX
- **Status:** [ ]
- **Branch:** dax
- **Push to:** testing
- **Depends on:** S-001
- **Files to create:** `src/blocks/navbars/navbar-051.tsx` through `src/blocks/navbars/navbar-500.tsx`
- **What to do:** Build remaining 450 navbar variants. Include: double-row, with search bar, with user avatar/cart/notification, mega-menu style, sidebar navigation, sticky with shrink, transparent-to-solid on scroll, with language switcher, with announcement bar, dark, light, glassmorphism, industry-specific (e-commerce with cart, restaurant with reservation, SaaS with login/signup, dashboard with breadcrumbs).
- **Done when:** 450 files. Total 500 navbars. All with working mobile menu.

### DAX — Footers (500 variants)

### D-110: Footers — All 500 variants (footer-001 to footer-500)
- **Who:** DAX
- **Status:** [ ]
- **Branch:** dax
- **Push to:** testing
- **Depends on:** S-001
- **Files to create:** `src/blocks/footers/footer-001.tsx` through `src/blocks/footers/footer-500.tsx`
- **What to do:** Build 500 footer variants: simple single-row, 2/3/4/5 column, dark, light, with newsletter signup, mega-footer, minimal, with social icons, with app download buttons, with map, with recent posts, with contact info, stacked, with awards, with trust badges, industry-specific.
- **Done when:** 500 files. All mobile responsive. Visually distinct.

### DAX — About (300), Services (300), Testimonials (300), Contact (300)

### D-120: About — All 300 variants
- **Who:** DAX
- **Status:** [ ]
- **Branch:** dax
- **Push to:** testing
- **Depends on:** S-001
- **Files to create:** `src/blocks/about/about-001.tsx` through `src/blocks/about/about-300.tsx`
- **What to do:** Build 300 about section variants.
- **Done when:** 300 files. Build passes.

### D-130: Services — All 300 variants
- **Who:** DAX
- **Status:** [ ]
- **Branch:** dax
- **Push to:** testing
- **Depends on:** S-001
- **Files to create:** `src/blocks/services/services-001.tsx` through `src/blocks/services/services-300.tsx`
- **What to do:** Build 300 services section variants.
- **Done when:** 300 files. Build passes.

### D-140: Testimonials — All 300 variants
- **Who:** DAX
- **Status:** [ ]
- **Branch:** dax
- **Push to:** testing
- **Depends on:** S-001
- **Files to create:** `src/blocks/testimonials/testimonials-001.tsx` through `src/blocks/testimonials/testimonials-300.tsx`
- **What to do:** Build 300 testimonial section variants.
- **Done when:** 300 files. Build passes.

### D-150: Contact — All 300 variants
- **Who:** DAX
- **Status:** [ ]
- **Branch:** dax
- **Push to:** testing
- **Depends on:** S-001
- **Files to create:** `src/blocks/contact/contact-001.tsx` through `src/blocks/contact/contact-300.tsx`
- **What to do:** Build 300 contact section variants.
- **Done when:** 300 files. Build passes.

### DAX — FAQ (200), Team (200), Stats (200), Gallery (300)

### D-160: FAQ — All 200 variants
- **Who:** DAX
- **Status:** [ ]
- **Branch:** dax
- **Push to:** testing
- **Depends on:** S-001
- **Files to create:** `src/blocks/faq/faq-001.tsx` through `src/blocks/faq/faq-200.tsx`
- **What to do:** Build 200 FAQ section variants.
- **Done when:** 200 files. Build passes.

### D-170: Team — All 200 variants
- **Who:** DAX
- **Status:** [ ]
- **Branch:** dax
- **Push to:** stay
- **Depends on:** S-001
- **Files to create:** `src/blocks/teams/team-001.tsx` through `src/blocks/teams/team-200.tsx`
- **What to do:** Build 200 team section variants.
- **Done when:** 200 files. Build passes.

### D-180: Stats — All 200 variants
- **Who:** DAX
- **Status:** [ ]
- **Branch:** dax
- **Push to:** stay
- **Depends on:** S-001
- **Files to create:** `src/blocks/stats/stats-001.tsx` through `src/blocks/stats/stats-200.tsx`
- **What to do:** Build 200 stats/counter section variants.
- **Done when:** 200 files. Build passes.

### D-190: Gallery — All 300 variants
- **Who:** DAX
- **Status:** [ ]
- **Branch:** dax
- **Push to:** testing
- **Depends on:** S-001
- **Files to create:** `src/blocks/galleries/gallery-001.tsx` through `src/blocks/galleries/gallery-300.tsx`
- **What to do:** Build 300 gallery/media section variants.
- **Done when:** 300 files. Build passes.

### DAX — Newsletter (150), Logos (150), Timeline (150), Maps (100), Trust (150), Banners (150), Dividers (100), Events (150), Careers (150)

### D-200: Newsletter — All 150 variants
- **Who:** DAX | **Status:** [ ] | **Branch:** dax | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/newsletter/newsletter-001.tsx` through `newsletter-150.tsx`

### D-210: Logos/Partners — All 150 variants
- **Who:** DAX | **Status:** [ ] | **Branch:** dax | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/logos/logos-001.tsx` through `logos-150.tsx`

### D-220: Timeline — All 150 variants
- **Who:** DAX | **Status:** [ ] | **Branch:** dax | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/timeline/timeline-001.tsx` through `timeline-150.tsx`

### D-230: Maps/Location — All 100 variants
- **Who:** DAX | **Status:** [ ] | **Branch:** dax | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/maps/maps-001.tsx` through `maps-100.tsx`

### D-240: Social Proof/Trust — All 150 variants
- **Who:** DAX | **Status:** [ ] | **Branch:** dax | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/trust/trust-001.tsx` through `trust-150.tsx`

### D-250: Banners — All 150 variants
- **Who:** DAX | **Status:** [ ] | **Branch:** dax | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/banners/banners-001.tsx` through `banners-150.tsx`

### D-260: Dividers — All 100 variants
- **Who:** DAX | **Status:** [ ] | **Branch:** dax | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/dividers/dividers-001.tsx` through `dividers-100.tsx`

### D-270: Events — All 150 variants
- **Who:** DAX | **Status:** [ ] | **Branch:** dax | **Push to:** testing | **Depends on:** S-001
- **Files:** `src/blocks/events/events-001.tsx` through `events-150.tsx`

### D-280: Careers — All 150 variants
- **Who:** DAX | **Status:** [ ] | **Branch:** dax | **Push to:** testing | **Depends on:** S-001
- **Files:** `src/blocks/careers/careers-001.tsx` through `careers-150.tsx`

---

## WAVE 2 — E-COMMERCE (SONIC) + FORMS (DAX)

### S-300: E-Commerce Product Grids — 200 variants
- **Who:** SONIC | **Status:** [ ] | **Branch:** sonic | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/ecom-grids/ecom-grids-001.tsx` through `ecom-grids-200.tsx`

### S-310: E-Commerce Product Cards — 300 variants
- **Who:** SONIC | **Status:** [ ] | **Branch:** sonic | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/ecom-cards/ecom-cards-001.tsx` through `ecom-cards-300.tsx`

### S-320: E-Commerce Product Detail — 200 variants
- **Who:** SONIC | **Status:** [ ] | **Branch:** sonic | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/ecom-detail/ecom-detail-001.tsx` through `ecom-detail-200.tsx`

### S-330: E-Commerce Cart — 100 variants
- **Who:** SONIC | **Status:** [ ] | **Branch:** sonic | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/ecom-cart/ecom-cart-001.tsx` through `ecom-cart-100.tsx`

### S-340: E-Commerce Checkout — 150 variants
- **Who:** SONIC | **Status:** [ ] | **Branch:** sonic | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/ecom-checkout/ecom-checkout-001.tsx` through `ecom-checkout-150.tsx`

### S-350: E-Commerce Categories — 150 variants
- **Who:** SONIC | **Status:** [ ] | **Branch:** sonic | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/ecom-categories/ecom-categories-001.tsx` through `ecom-categories-150.tsx`

### S-360: E-Commerce Promos — 150 variants
- **Who:** SONIC | **Status:** [ ] | **Branch:** sonic | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/ecom-promos/ecom-promos-001.tsx` through `ecom-promos-150.tsx`

### S-370: E-Commerce Wishlist — 80 variants
- **Who:** SONIC | **Status:** [ ] | **Branch:** sonic | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/ecom-wishlist/ecom-wishlist-001.tsx` through `ecom-wishlist-080.tsx`

### S-380: E-Commerce Orders — 80 variants
- **Who:** SONIC | **Status:** [ ] | **Branch:** sonic | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/ecom-orders/ecom-orders-001.tsx` through `ecom-orders-080.tsx`

### S-390: E-Commerce Reviews — 100 variants
- **Who:** SONIC | **Status:** [ ] | **Branch:** sonic | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/ecom-reviews/ecom-reviews-001.tsx` through `ecom-reviews-100.tsx`

### S-391: E-Commerce Filters — 100 variants
- **Who:** SONIC | **Status:** [ ] | **Branch:** sonic | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/ecom-filters/ecom-filters-001.tsx` through `ecom-filters-100.tsx`

### S-392: E-Commerce Store Locator — 80 variants
- **Who:** SONIC | **Status:** [ ] | **Branch:** sonic | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/ecom-stores/ecom-stores-001.tsx` through `ecom-stores-080.tsx`

### S-393: E-Commerce Customer Account — 100 variants
- **Who:** SONIC | **Status:** [ ] | **Branch:** sonic | **Push to:** testing | **Depends on:** S-001
- **Files:** `src/blocks/ecom-account/ecom-account-001.tsx` through `ecom-account-100.tsx`

### DAX — Forms (1,280 variants)

### D-300: Login Forms — 200 variants
- **Who:** DAX | **Status:** [ ] | **Branch:** dax | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/form-login/form-login-001.tsx` through `form-login-200.tsx`

### D-310: Signup Forms — 200 variants
- **Who:** DAX | **Status:** [ ] | **Branch:** dax | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/form-signup/form-signup-001.tsx` through `form-signup-200.tsx`

### D-320: Contact Forms — 150 variants
- **Who:** DAX | **Status:** [ ] | **Branch:** dax | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/form-contact/form-contact-001.tsx` through `form-contact-150.tsx`

### D-330: Multi-Step Forms — 100 variants
- **Who:** DAX | **Status:** [ ] | **Branch:** dax | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/form-multistep/form-multistep-001.tsx` through `form-multistep-100.tsx`

### D-340: Booking Forms — 150 variants
- **Who:** DAX | **Status:** [ ] | **Branch:** dax | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/form-booking/form-booking-001.tsx` through `form-booking-150.tsx`

### D-350: Survey/Quiz Forms — 100 variants
- **Who:** DAX | **Status:** [ ] | **Branch:** dax | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/form-survey/form-survey-001.tsx` through `form-survey-100.tsx`

### D-360: Payment Forms — 100 variants
- **Who:** DAX | **Status:** [ ] | **Branch:** dax | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/form-payment/form-payment-001.tsx` through `form-payment-100.tsx`

### D-370: Search Bars — 80 variants
- **Who:** DAX | **Status:** [ ] | **Branch:** dax | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/form-search/form-search-001.tsx` through `form-search-080.tsx`

### D-380: Registration Forms — 100 variants
- **Who:** DAX | **Status:** [ ] | **Branch:** dax | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/form-registration/form-registration-001.tsx` through `form-registration-100.tsx`

### D-390: Application Forms — 100 variants
- **Who:** DAX | **Status:** [ ] | **Branch:** dax | **Push to:** testing | **Depends on:** S-001
- **Files:** `src/blocks/form-application/form-application-001.tsx` through `form-application-100.tsx`

---

## WAVE 3 — DASHBOARD (SONIC) + INDUSTRY (DAX)

> Sonic builds all 1,760 dashboard components. Dax builds all 2,220 industry-specific components.
> Same pattern: each task = full category. See component-map.md for variant details.

### SONIC — Dashboard Components (1,760 total)

### S-400: Dashboard Layouts — 150 variants
- **Who:** SONIC | **Status:** [ ] | **Branch:** sonic | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/dash-layouts/dash-layouts-001.tsx` through `dash-layouts-150.tsx`

### S-410: Dashboard Sidebars — 100 variants
- **Who:** SONIC | **Status:** [ ] | **Branch:** sonic | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/dash-sidebars/dash-sidebars-001.tsx` through `dash-sidebars-100.tsx`

### S-420: Dashboard Tables — 150 variants
- **Who:** SONIC | **Status:** [ ] | **Branch:** sonic | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/dash-tables/dash-tables-001.tsx` through `dash-tables-150.tsx`

### S-430: Dashboard Charts — 200 variants
- **Who:** SONIC | **Status:** [ ] | **Branch:** sonic | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/dash-charts/dash-charts-001.tsx` through `dash-charts-200.tsx`

### S-440: Dashboard Profiles — 100 variants
- **Who:** SONIC | **Status:** [ ] | **Branch:** sonic | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/dash-profiles/dash-profiles-001.tsx` through `dash-profiles-100.tsx`

### S-450: Dashboard Settings — 100 | S-460: Notifications — 80 | S-470: File Upload — 80 | S-480: Kanban — 80 | S-490: Calendar — 80 | S-491: Search — 60 | S-492: Empty States — 60 | S-493: Onboarding — 80 | S-494: Chat — 100 | S-495: Activity Feed — 60 | S-496: Tasks — 80 | S-497: Inbox — 80 | S-498: User Management — 60 | S-499: Billing — 60
- **Who:** SONIC | **Status:** [ ] each | **Branch:** sonic | **Push to:** testing (after all done) | **Depends on:** S-001
- **Files:** Each in `src/blocks/dash-{category}/` with sequential numbering

### DAX — Industry-Specific (2,220 total)

### D-400: Restaurant — 100 | D-410: Real Estate — 100 | D-420: Medical — 100 | D-430: Education — 100 | D-440: Fitness — 80 | D-450: Legal — 80 | D-460: Automotive — 80 | D-470: Beauty — 80 | D-480: Construction — 60 | D-490: Church — 60 | D-491: Wedding — 80 | D-492: Photography — 80 | D-493: Music — 80 | D-494: Pets — 60 | D-495: Travel — 100 | D-496: Finance — 100 | D-497: NonProfit — 80 | D-498: Coaching — 60 | D-499: Fashion — 80 | D-500: Agriculture — 40 | D-501: Interior Design — 60 | D-502: Architecture — 60 | D-503: Gaming — 60 | D-504: Podcast — 60 | D-505: News — 80 | D-506: Logistics — 40 | D-507: HR — 60
- **Who:** DAX | **Status:** [ ] each | **Branch:** dax | **Push to:** testing (after all done) | **Depends on:** S-001
- **Files:** Each in `src/blocks/ind-{category}/` with sequential numbering

---

## WAVE 4 — SONIC: INDUSTRY + PAGES + ANIMATIONS | DAX: PAGES + NAV + ANIMATIONS

### SONIC — Industry (560) + Pages (310) + Animations (350)

### S-600: Industry SaaS — 100 | S-610: Finance — 100 | S-620: Gaming — 60 | S-630: Architecture — 60 | S-640: Logistics — 40 | S-650: News — 80 | S-660: HR — 60 | S-670: Podcast — 60
- **Who:** SONIC | **Status:** [ ] each | **Branch:** sonic | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/ind-{category}/`

### S-700: Landing Pages — 150 | S-710: 404 Pages — 80 | S-720: Coming Soon — 80
- **Who:** SONIC | **Status:** [ ] each | **Branch:** sonic | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/page-{category}/`

### S-800: Scroll Animations — 100 | S-810: Carousel — 100 | S-820: Backgrounds — 60 | S-830: Text Animations — 60 | S-840: Cursor Effects — 30
- **Who:** SONIC | **Status:** [ ] each | **Branch:** sonic | **Push to:** testing | **Depends on:** S-001
- **Files:** `src/blocks/anim-{category}/`

### DAX — Pages (320) + Navigation (360) + Animations (390)

### D-700: Thank You — 60 | D-710: Link in Bio — 80 | D-720: Splash — 40 | D-730: Maintenance — 40 | D-740: Under Construction — 40 | D-750: Password Protected — 30 | D-760: Offline — 30
- **Who:** DAX | **Status:** [ ] each | **Branch:** dax | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/page-{category}/`

### D-800: Breadcrumbs — 40 | D-810: Pagination — 50 | D-820: Tabs — 60 | D-830: Mega Menus — 60 | D-840: Mobile Menus — 80 | D-850: Sticky Headers — 40 | D-860: Back to Top — 30
- **Who:** DAX | **Status:** [ ] each | **Branch:** dax | **Push to:** stay | **Depends on:** S-001
- **Files:** `src/blocks/nav-{category}/`

### D-900: Hover Effects — 100 | D-910: Loading Animations — 60 | D-920: Marquee — 50 | D-930: Counters — 50 | D-940: Transitions — 50 | D-950: Micro-interactions — 80
- **Who:** DAX | **Status:** [ ] each | **Branch:** dax | **Push to:** testing | **Depends on:** S-001
- **Files:** `src/blocks/anim-{category}/`

---

## WAVE 5 — REGISTRY & INTEGRATION

### S-900: Block Registry — Final Build
- **Who:** SONIC
- **Status:** [ ]
- **Branch:** sonic
- **Push to:** testing
- **Depends on:** ALL component tasks completed by BOTH devs
- **Files to modify:** `src/blocks/registry.ts`
- **Files to create:** `src/blocks/*/index.ts` (barrel files for each category)
- **What to do:** Create barrel file (index.ts) for every block category that exports block metadata + lazy imports. Import all barrel files into the master registry. Verify every block is discoverable via `getBlockComponent()`. Test with sample lookups.
- **Done when:** Registry contains all 15,780 blocks. Any block can be loaded by slug. Build passes.

### S-901: AI Agent — Block Matching Validation
- **Who:** SONIC
- **Status:** [ ]
- **Branch:** sonic
- **Push to:** testing
- **Depends on:** S-900
- **Files to modify:** `src/app/api/ai/route.ts`, `src/lib/ai/agent.ts`
- **What to do:** Update the AI agent's system prompt with the full list of 128 categories and their slugs. Add validation after AI returns selections — verify blocks exist in registry. Add fallback logic if a suggested block doesn't exist. Update the AI to be smarter about industry matching (e.g., "restaurant website" → use `ind-restaurant` blocks).
- **Done when:** AI correctly suggests blocks from the real registry. Missing block fallback works.

### D-900: Barrel Files for All Categories
- **Who:** DAX
- **Status:** [ ]
- **Branch:** dax
- **Push to:** testing
- **Depends on:** ALL of DAX's component tasks
- **Files to create:** `src/blocks/*/index.ts` for all DAX-owned categories
- **What to do:** Create barrel file for each category that exports an array of block metadata with lazy imports. Format: `export const blocks = [{ slug, name, component: () => import("./file") }, ...]`
- **Done when:** Every DAX category has an index.ts with all blocks listed. Imports resolve correctly.

### D-901: Accessibility Pass
- **Who:** DAX
- **Status:** [ ]
- **Branch:** dax
- **Push to:** testing
- **Depends on:** D-900
- **Files to modify:** All block files in DAX-owned categories
- **What to do:** Review all blocks and add: aria-labels, alt attributes on images, semantic HTML (section, nav, main, footer), proper heading hierarchy, focus management, keyboard navigation for interactive elements.
- **Done when:** All DAX blocks pass basic accessibility review. No images without alt. Proper semantic HTML throughout.

---

## WAVE 6 — FINAL MERGE & LAUNCH PREP

### S-999: Final Integration & Testing
- **Who:** SONIC
- **Status:** [ ]
- **Branch:** testing
- **Push to:** staging
- **Depends on:** S-901, D-901
- **What to do:** (1) Merge all work to testing branch, (2) Run full build `pnpm build`, fix any errors, (3) Test end-to-end flow: signup → prompt → AI builds site → editor loads → blocks render → customize → preview → publish, (4) Test admin dashboard with real data, (5) Test on mobile viewport (375px), (6) Fix any integration issues.
- **Done when:** Full build passes. End-to-end flow works. Admin works. Mobile works. No console errors.

### D-999: Final Polish & Mobile Testing
- **Who:** DAX
- **Status:** [ ]
- **Branch:** testing
- **Push to:** staging
- **Depends on:** S-999
- **What to do:** (1) Test every admin page on mobile, (2) Test auth flow on mobile, (3) Test editor on mobile, (4) Fix any responsive issues, (5) Verify all blocks look good at 375px width, (6) Test with different color themes.
- **Done when:** Platform is fully functional and polished on mobile and desktop. Ready for staging → main.
