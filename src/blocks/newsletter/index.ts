import { registerBlocks } from "@/blocks/registry";

registerBlocks([
  { slug: "newsletter-001", name: "Newsletter 001", category: "newsletter", importFn: () => import("./newsletter-001") },
  { slug: "newsletter-002", name: "Newsletter 002", category: "newsletter", importFn: () => import("./newsletter-002") },
  { slug: "newsletter-003", name: "Newsletter 003", category: "newsletter", importFn: () => import("./newsletter-003") },
]);
