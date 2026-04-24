import type { BlockProps } from "@/blocks/types";
import { FileText, Video, Headphones, Images } from "lucide-react";

const TABS = ["All", "Articles", "Videos", "Podcasts", "Galleries"];
const POSTS = [
  { title: "Serverless Functions Deep Dive", description: "When to use them and how to optimize cold starts.", label: "article" },
  { title: "UI Animation Masterclass", description: "Step-by-step guide to polished interface animations.", label: "video" },
  { title: "Founder Fireside Chat", description: "Honest conversations about the startup journey.", label: "podcast" },
  { title: "Team Retreat Highlights", description: "Moments from our annual offsite in Cape Town.", label: "gallery" },
];

const ICONS: Record<string, React.ReactNode> = {
  article: <FileText className="w-4 h-4" />,
  video: <Video className="w-4 h-4" />,
  podcast: <Headphones className="w-4 h-4" />,
  gallery: <Images className="w-4 h-4" />,
};

export default function Blog245(props: BlockProps) {
  const { theme, heading = "Content Library", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">{heading}</h2>
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {TABS.map((tab, i) => (
            <button key={i} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${i === 0 ? "text-white" : "opacity-60 hover:opacity-100"}`} style={i === 0 ? { backgroundColor: theme?.primary ?? "#6366f1" } : {}}>
              {tab}
            </button>
          ))}
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {items.slice(0, 4).map((post, i) => (
            <article key={i} className="flex gap-4 p-4 rounded-xl border" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
              <div className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>{ICONS[post.label ?? "article"]}</div>
              <div>
                <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#6366f1" }}>{post.label}</span>
                <h3 className="mt-1 font-bold">{post.title}</h3>
                <p className="mt-1 text-sm opacity-70">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
