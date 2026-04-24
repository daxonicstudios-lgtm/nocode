import type { BlockProps } from "@/blocks/types";
import { Heart, Repeat2, User } from "lucide-react";

const DEFAULTS = [
  { title: "Thread: What I learned building 50 websites", description: "Number one: keep it simple. Number two: mobile first. Number three: launch before it is perfect. Number four: listen to your users. Number five: iterate fast.", label: "Kwame Asante", value: "4h" },
  { title: "Hot take: every business needs a blog page", description: "Content is still king. If you are not publishing, you are invisible.", label: "Fatima Ndiaye", value: "6h" },
  { title: "Grateful for this community", description: "Started building three months ago with zero experience. Now I have paying clients. Thank you all for the support.", label: "James Mwangi", value: "12h" },
];

export default function Blog273(props: BlockProps) {
  const { theme, heading = "Posts", items = DEFAULTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">{heading}</h2>
        <div className="space-y-0 divide-y" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
          {items.map((post, i) => (
            <article key={i} className="py-5">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }}>
                  <User className="w-5 h-5 opacity-40" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold">{String(post.label ?? "")}</span>
                    <span className="text-xs opacity-30">{String(post.value ?? "")}</span>
                  </div>
                  <h3 className="font-semibold mt-1">{post.title}</h3>
                  <p className="text-sm opacity-70 mt-1 leading-relaxed">{post.description}</p>
                  <div className="flex items-center gap-6 mt-3">
                    <button className="flex items-center gap-1.5 text-xs opacity-40 hover:opacity-70">
                      <Heart className="w-4 h-4" /> {18 + i * 9}
                    </button>
                    <button className="flex items-center gap-1.5 text-xs opacity-40 hover:opacity-70">
                      <Repeat2 className="w-4 h-4" /> {4 + i * 2}
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
