import { registerBlocks } from "@/blocks/registry";

registerBlocks([
  { slug: "cta-001", name: "CTA 001", category: "cta", importFn: () => import("./cta-001") },
  { slug: "cta-002", name: "CTA 002", category: "cta", importFn: () => import("./cta-002") },
  { slug: "cta-003", name: "CTA 003", category: "cta", importFn: () => import("./cta-003") },
]);
