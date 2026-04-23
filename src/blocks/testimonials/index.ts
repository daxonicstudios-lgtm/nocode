import { registerBlocks } from "@/blocks/registry";

registerBlocks([
  { slug: "testimonials-001", name: "Testimonials 001", category: "testimonials", importFn: () => import("./testimonials-001") },
  { slug: "testimonials-002", name: "Testimonials 002", category: "testimonials", importFn: () => import("./testimonials-002") },
  { slug: "testimonials-003", name: "Testimonials 003", category: "testimonials", importFn: () => import("./testimonials-003") },
]);
