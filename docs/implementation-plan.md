# Implementation Plan — Overview

> **The real task list is in `docs/tasks.md`** — that's where all actionable work is tracked.
> **The component breakdown is in `docs/component-map.md`** — 15,780 components across 128 categories.
> **AI instructions are in `CLAUDE.md`** — tells the AI how to handle "I am Sonic" and "I am Dax".

## How to Start Working

1. Open Claude Code
2. Say **"I am Sonic"** or **"I am Dax"**
3. The AI reads `docs/tasks.md`, finds your next task, switches to your branch, and starts building
4. When done, the AI commits, updates the task status, pushes to the right branch, and shows your next task

## Developers

| Developer | Branch | Role |
|-----------|--------|------|
| **Sonic** | `sonic` | Lead dev — platform infrastructure, editor, APIs, AI integration, e-commerce blocks, dashboard blocks, animations |
| **Dax** | `dax` | Developer — UI components, admin pages, navbars, footers, forms, industry blocks, navigation, mobile polish |

## Branch Flow

```
sonic ──┐
        ├──→ testing ──→ staging ──→ main
dax ────┘
```

## Waves

| Wave | What | Sonic | Dax |
|------|------|-------|-----|
| Infrastructure | Platform core + UI components | Registry, APIs, editor, preview | shadcn components, admin pages, mobile menus |
| Wave 1 | Universal sections | Heroes, Features, Pricing, CTA, Blog, Portfolio, Steps, Comparison, Video, Download, Content (~2,950) | Navbars, Footers, About, Services, Testimonials, Contact, FAQ, Team, Stats, Gallery, Newsletter, Logos, Timeline, Maps, Trust, Banners, Dividers, Events, Careers (~4,050) |
| Wave 2 | E-Commerce + Forms | All e-commerce blocks (1,790) | All form blocks (1,280) |
| Wave 3 | Dashboard + Industry | All dashboard blocks (1,760) | All industry-specific blocks (2,220) |
| Wave 4 | Remaining | Industry (560) + Pages (310) + Animations (350) | Pages (320) + Navigation (360) + Animations (390) |
| Wave 5 | Integration | Registry finalization, AI validation | Barrel files, accessibility pass |
| Wave 6 | Launch | Final integration & testing | Final polish & mobile testing |

## Total Work

| | Sonic | Dax | Total |
|-|-------|-----|-------|
| Infrastructure tasks | 16 | 9 | 25 |
| Component tasks | ~45 | ~55 | ~100 |
| Components built | ~7,800 | ~7,980 | ~15,780 |
