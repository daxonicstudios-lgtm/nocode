import { registerBlocks } from "@/blocks/registry";

registerBlocks([
  { slug: "teams-001", name: "Teams 001", category: "teams", importFn: () => import("./teams-001") },
  { slug: "teams-002", name: "Teams 002", category: "teams", importFn: () => import("./teams-002") },
  { slug: "teams-003", name: "Teams 003", category: "teams", importFn: () => import("./teams-003") },
]);
