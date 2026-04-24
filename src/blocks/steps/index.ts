import { registerBlocks } from "@/blocks/registry";

registerBlocks([
  { slug: "steps-001", name: "Steps 001", category: "steps", importFn: () => import("./steps-001") },
  { slug: "steps-002", name: "Steps 002", category: "steps", importFn: () => import("./steps-002") },
  { slug: "steps-003", name: "Steps 003", category: "steps", importFn: () => import("./steps-003") },
]);
