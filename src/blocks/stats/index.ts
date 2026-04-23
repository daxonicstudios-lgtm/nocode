import { registerBlocks } from "@/blocks/registry";

registerBlocks([
  { slug: "stats-001", name: "Stats 001", category: "stats", importFn: () => import("./stats-001") },
  { slug: "stats-002", name: "Stats 002", category: "stats", importFn: () => import("./stats-002") },
  { slug: "stats-003", name: "Stats 003", category: "stats", importFn: () => import("./stats-003") },
]);
