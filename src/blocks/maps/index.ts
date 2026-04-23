import { registerBlocks } from "@/blocks/registry";

registerBlocks([
  { slug: "maps-001", name: "Maps 001", category: "maps", importFn: () => import("./maps-001") },
  { slug: "maps-002", name: "Maps 002", category: "maps", importFn: () => import("./maps-002") },
  { slug: "maps-003", name: "Maps 003", category: "maps", importFn: () => import("./maps-003") },
]);
