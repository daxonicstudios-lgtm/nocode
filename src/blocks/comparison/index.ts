import { registerBlocks } from "@/blocks/registry";

registerBlocks([
  { slug: "comparison-001", name: "Comparison 001", category: "comparison", importFn: () => import("./comparison-001") },
  { slug: "comparison-002", name: "Comparison 002", category: "comparison", importFn: () => import("./comparison-002") },
  { slug: "comparison-003", name: "Comparison 003", category: "comparison", importFn: () => import("./comparison-003") },
]);
