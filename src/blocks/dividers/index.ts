import { registerBlocks } from "@/blocks/registry";

registerBlocks([
  { slug: "dividers-001", name: "Dividers 001", category: "dividers", importFn: () => import("./dividers-001") },
  { slug: "dividers-002", name: "Dividers 002", category: "dividers", importFn: () => import("./dividers-002") },
  { slug: "dividers-003", name: "Dividers 003", category: "dividers", importFn: () => import("./dividers-003") },
]);
