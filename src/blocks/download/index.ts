import { registerBlocks } from "@/blocks/registry";

registerBlocks([
  { slug: "download-001", name: "Download 001", category: "download", importFn: () => import("./download-001") },
  { slug: "download-002", name: "Download 002", category: "download", importFn: () => import("./download-002") },
  { slug: "download-003", name: "Download 003", category: "download", importFn: () => import("./download-003") },
]);
