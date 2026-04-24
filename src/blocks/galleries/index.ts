import { registerBlocks } from "@/blocks/registry";

registerBlocks([
  { slug: "galleries-001", name: "Galleries 001", category: "galleries", importFn: () => import("./galleries-001") },
  { slug: "galleries-002", name: "Galleries 002", category: "galleries", importFn: () => import("./galleries-002") },
  { slug: "galleries-003", name: "Galleries 003", category: "galleries", importFn: () => import("./galleries-003") },
]);
