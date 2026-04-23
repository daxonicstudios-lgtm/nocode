import { registerBlocks } from "@/blocks/registry";

registerBlocks([
  { slug: "events-001", name: "Events 001", category: "events", importFn: () => import("./events-001") },
  { slug: "events-002", name: "Events 002", category: "events", importFn: () => import("./events-002") },
  { slug: "events-003", name: "Events 003", category: "events", importFn: () => import("./events-003") },
]);
