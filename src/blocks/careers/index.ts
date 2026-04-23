import { registerBlocks } from "@/blocks/registry";

registerBlocks([
  { slug: "careers-001", name: "Careers 001", category: "careers", importFn: () => import("./careers-001") },
  { slug: "careers-002", name: "Careers 002", category: "careers", importFn: () => import("./careers-002") },
  { slug: "careers-003", name: "Careers 003", category: "careers", importFn: () => import("./careers-003") },
]);
