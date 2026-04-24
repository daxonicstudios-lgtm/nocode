import { registerBlocks } from "@/blocks/registry";

registerBlocks([
  { slug: "contact-001", name: "Contact 001", category: "contact", importFn: () => import("./contact-001") },
  { slug: "contact-002", name: "Contact 002", category: "contact", importFn: () => import("./contact-002") },
  { slug: "contact-003", name: "Contact 003", category: "contact", importFn: () => import("./contact-003") },
]);
