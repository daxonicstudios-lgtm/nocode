import { registerBlocks } from "@/blocks/registry";

registerBlocks([
  { slug: "banners-001", name: "Banners 001", category: "banners", importFn: () => import("./banners-001") },
  { slug: "banners-002", name: "Banners 002", category: "banners", importFn: () => import("./banners-002") },
  { slug: "banners-003", name: "Banners 003", category: "banners", importFn: () => import("./banners-003") },
]);
