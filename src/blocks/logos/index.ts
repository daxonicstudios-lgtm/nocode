import { registerBlocks } from "@/blocks/registry";

registerBlocks([
  { slug: "logos-001", name: "Logos 001", category: "logos", importFn: () => import("./logos-001") },
  { slug: "logos-002", name: "Logos 002", category: "logos", importFn: () => import("./logos-002") },
  { slug: "logos-003", name: "Logos 003", category: "logos", importFn: () => import("./logos-003") },
]);
