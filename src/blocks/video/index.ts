import { registerBlocks } from "@/blocks/registry";

registerBlocks([
  { slug: "video-001", name: "Video 001", category: "video", importFn: () => import("./video-001") },
  { slug: "video-002", name: "Video 002", category: "video", importFn: () => import("./video-002") },
  { slug: "video-003", name: "Video 003", category: "video", importFn: () => import("./video-003") },
]);
