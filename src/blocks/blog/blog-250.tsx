import type { BlockProps } from "@/blocks/types";
import { FileText, Video, Headphones, LayoutGrid, ArrowUpRight } from "lucide-react";

const POSTS = [
  { title: "Optimistic UI Patterns", description: "Make your app feel instant with optimistic updates.", label: "article", value: "Frontend" },
  { title: "Docker Deep Dive", description: "Containers from first principles to production deployment.", label: "video", value: "DevOps" },
  { title: "Product-Market Fit Stories", description: "How companies found their fit and what it took.", label: "podcast", value: "Startup" },
  { title: "Brand Identity Collection", description: "Visual systems we designed for clients this quarter.", label: "gallery", value: "Design" },
];

const ICONS: Record<string, React.ReactNode> = {
  article: <FileText className="w-4 h-4" />,
  video: <Video className="w-4 h-4" />,
  podcast: <Headphones className="w-4 h-4" />,
  gallery: <LayoutGrid className="w-4 h-4" />,
};

export default function Blog250(props: BlockProps) {
  const { theme, heading = "Explore Everything", subheading = "Articles, videos, podcasts, and visual galleries.", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-2 opacity-60">{subheading}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.slice(0, 4).map((post, i) => (
            <article key={i} className="group rounded-2xl border p-5 cursor-pointer hover:shadow-lg transition-shadow" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
                  {ICONS[post.label ?? "article"]}
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-60 transition-opacity" />
              </div>
              <span className="text-xs font-bold uppercase opacity-50">{post.value}</span>
              <h3 className="mt-1 font-bold">{post.title}</h3>
              <p className="mt-1 text-sm opacity-70">{post.description}</p>
              <span className="mt-3 block text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#6366f1" }}>{post.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
