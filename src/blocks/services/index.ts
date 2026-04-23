import { registerBlocks } from "@/blocks/registry";

registerBlocks([
  { slug: "services-001", name: "Services 001", category: "services", importFn: () => import("./services-001") },
  { slug: "services-002", name: "Services 002", category: "services", importFn: () => import("./services-002") },
  { slug: "services-003", name: "Services 003", category: "services", importFn: () => import("./services-003") },
]);
