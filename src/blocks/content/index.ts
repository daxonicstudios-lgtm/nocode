import { registerBlocks } from "@/blocks/registry";

registerBlocks([
  { slug: "content-001", name: "Content 001", category: "content", importFn: () => import("./content-001") },
  { slug: "content-002", name: "Content 002", category: "content", importFn: () => import("./content-002") },
  { slug: "content-003", name: "Content 003", category: "content", importFn: () => import("./content-003") },
]);
