import { registerBlocks } from "@/blocks/registry";

registerBlocks([
  { slug: "pricing-001", name: "Pricing 001", category: "pricing", importFn: () => import("./pricing-001") },
  { slug: "pricing-002", name: "Pricing 002", category: "pricing", importFn: () => import("./pricing-002") },
  { slug: "pricing-003", name: "Pricing 003", category: "pricing", importFn: () => import("./pricing-003") },
]);
