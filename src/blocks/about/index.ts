import { registerBlocks } from "@/blocks/registry";

registerBlocks([
  { slug: "about-001", name: "About 001", category: "about", importFn: () => import("./about-001") },
  { slug: "about-002", name: "About 002", category: "about", importFn: () => import("./about-002") },
  { slug: "about-003", name: "About 003", category: "about", importFn: () => import("./about-003") },
]);
