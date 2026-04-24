import type { BlockProps } from "@/blocks/types";
import { FileText, Video, Headphones, Image, ArrowRight } from "lucide-react";

const POSTS = [
  { title: "Monolith to Microservices", description: "A pragmatic migration guide.", label: "article" },
  { title: "Prototyping with Framer", description: "Rapid prototyping and user testing workflows.", label: "video" },
  { title: "Engineering Culture Podcast", description: "How top teams build and ship.", label: "podcast" },
];

const FORMAT_INFO: Record<string, { icon: React.ReactNode; bg: string }> = {
  article: { icon: <FileText className="w-5 h-5 text-white" />, bg: "#3b82f6" },
  video: { icon: <Video className="w-5 h-5 text-white" />, bg: "#ef4444" },
  podcast: { icon: <Headphones className="w-5 h-5 text-white" />, bg: "#8b5cf6" },
  gallery: { icon: <Image className="w-5 h-5 text-white" />, bg: "#f59e0b" },
};

export default function Blog247(props: BlockProps) {
  const { theme, heading = "All Formats", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">{heading}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {items.slice(0, 3).map((post, i) => {
            const info = FORMAT_INFO[post.label ?? "article"];
            return (
              <article key={i} className="rounded-2xl overflow-hidden border" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
                <div className="h-3" style={{ backgroundColor: info.bg }} />
                <div className="p-5">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: info.bg }}>{info.icon}</div>
                  <span className="text-xs font-bold uppercase" style={{ color: info.bg }}>{post.label}</span>
                  <h3 className="mt-2 text-lg font-bold">{post.title}</h3>
                  <p className="mt-1 text-sm opacity-70">{post.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium" style={{ color: info.bg }}>Open <ArrowRight className="w-3 h-3" /></span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
