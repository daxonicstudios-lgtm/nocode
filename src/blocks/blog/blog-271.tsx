import type { BlockProps } from "@/blocks/types";
import { Heart, MessageCircle, Share2, User } from "lucide-react";

const DEFAULTS = [
  { title: "Just shipped our biggest update yet", description: "200 new components, better performance, and a redesigned editor. We are so excited to share this with you all.", label: "Sarah Chen", value: "2h ago" },
  { title: "Tips for building your first portfolio", description: "Start with a clean layout, showcase three to five projects, and always include a call to action.", label: "David Okafor", value: "5h ago" },
  { title: "The no-code community is amazing", description: "Spent the weekend at a builder meetup in Lagos. The energy and creativity were incredible.", label: "Amara Diallo", value: "1d ago" },
];

export default function Blog271(props: BlockProps) {
  const { theme, heading = "Community Feed", items = DEFAULTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">{heading}</h2>
        <div className="space-y-4">
          {items.map((post, i) => (
            <article key={i} className="rounded-2xl border p-4" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }}>
                  <User className="w-5 h-5 opacity-50" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{String(post.label ?? "")}</p>
                  <p className="text-xs opacity-40">{String(post.value ?? "")}</p>
                </div>
              </div>
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-sm opacity-70 mt-1">{post.description}</p>
              <div className="flex items-center gap-6 mt-4 pt-3 border-t" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                <button className="flex items-center gap-1.5 text-xs opacity-50 hover:opacity-80">
                  <Heart className="w-4 h-4" />
                  <span>{12 + i * 7}</span>
                </button>
                <button className="flex items-center gap-1.5 text-xs opacity-50 hover:opacity-80">
                  <MessageCircle className="w-4 h-4" />
                  <span>{3 + i * 2}</span>
                </button>
                <button className="flex items-center gap-1.5 text-xs opacity-50 hover:opacity-80">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
