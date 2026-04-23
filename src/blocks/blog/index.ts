import { registerBlocks } from "@/blocks/registry";

registerBlocks([
  { slug: "blog-001", name: "Blog 001", category: "blog", importFn: () => import("./blog-001") },
  { slug: "blog-002", name: "Blog 002", category: "blog", importFn: () => import("./blog-002") },
  { slug: "blog-003", name: "Blog 003", category: "blog", importFn: () => import("./blog-003") },
]);
