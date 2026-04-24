import { registerBlocks } from "@/blocks/registry";

registerBlocks([
  { slug: "features-001", name: "Features 001", category: "features", importFn: () => import("./features-001") },
  { slug: "features-002", name: "Features 002", category: "features", importFn: () => import("./features-002") },
  { slug: "features-003", name: "Features 003", category: "features", importFn: () => import("./features-003") },
]);
