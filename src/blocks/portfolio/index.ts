import { registerBlocks } from "@/blocks/registry";

registerBlocks([
  { slug: "portfolio-001", name: "Portfolio 001", category: "portfolio", importFn: () => import("./portfolio-001") },
  { slug: "portfolio-002", name: "Portfolio 002", category: "portfolio", importFn: () => import("./portfolio-002") },
  { slug: "portfolio-003", name: "Portfolio 003", category: "portfolio", importFn: () => import("./portfolio-003") },
]);
