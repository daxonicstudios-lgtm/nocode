import { registerBlocks } from "@/blocks/registry";

registerBlocks([
  { slug: "timeline-001", name: "Timeline 001", category: "timeline", importFn: () => import("./timeline-001") },
  { slug: "timeline-002", name: "Timeline 002", category: "timeline", importFn: () => import("./timeline-002") },
  { slug: "timeline-003", name: "Timeline 003", category: "timeline", importFn: () => import("./timeline-003") },
]);
