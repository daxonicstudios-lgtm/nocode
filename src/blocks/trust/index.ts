import { registerBlocks } from "@/blocks/registry";

registerBlocks([
  { slug: "trust-001", name: "Trust 001", category: "trust", importFn: () => import("./trust-001") },
  { slug: "trust-002", name: "Trust 002", category: "trust", importFn: () => import("./trust-002") },
  { slug: "trust-003", name: "Trust 003", category: "trust", importFn: () => import("./trust-003") },
]);
