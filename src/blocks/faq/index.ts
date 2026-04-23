import { registerBlocks } from "@/blocks/registry";

registerBlocks([
  { slug: "faq-001", name: "FAQ 001", category: "faq", importFn: () => import("./faq-001") },
  { slug: "faq-002", name: "FAQ 002", category: "faq", importFn: () => import("./faq-002") },
  { slug: "faq-003", name: "FAQ 003", category: "faq", importFn: () => import("./faq-003") },
]);
