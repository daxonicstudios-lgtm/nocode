import type { BlockProps } from "@/blocks/types";
import { FileText, Video, Headphones, ChevronRight } from "lucide-react";

const POSTS = [
  { title: "Database Migration Strategies", description: "Zero-downtime schema changes for production databases.", label: "article", value: "7 min" },
  { title: "Building Accessible Components", description: "Live coding session with screen reader testing.", label: "video", value: "45 min" },
  { title: "The Future of No-Code", description: "Industry experts discuss what comes next.", label: "podcast", value: "28 min" },
];

const ICONS: Record<string, React.ReactNode> = {
  article: <FileText className="w-4 h-4" />,
  video: <Video className="w-4 h-4" />,
  podcast: <Headphones className="w-4 h-4" />,
};

export default function Blog243(props: BlockProps) {
  const { theme, heading = "Latest Content", buttonText = "Browse All", buttonUrl = "#", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-bold">{heading}</h2>
          <a href={buttonUrl} className="flex items-center gap-1 text-sm font-medium" style={{ color: theme?.primary ?? "#6366f1" }}>{buttonText}<ChevronRight className="w-4 h-4" /></a>
        </div>
        <div className="space-y-4">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="flex items-center gap-4 p-4 rounded-xl border" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
              <div className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
                {ICONS[post.label ?? "article"]}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold truncate">{post.title}</h3>
                <p className="text-sm opacity-60 truncate">{post.description}</p>
              </div>
              <div className="shrink-0 text-right">
                <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#6366f1" }}>{post.label}</span>
                <p className="text-xs opacity-40">{post.value}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
