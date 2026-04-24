import type { BlockProps } from "@/blocks/types";
import { Heart, MessageCircle } from "lucide-react";

const POSTS = [
  { title: "Async Communication Best Practices", description: "How distributed teams stay aligned without constant meetings.", label: "Remote", value: "12 likes" },
  { title: "Intro to Vector Databases", description: "The backbone of modern AI search and recommendation engines.", label: "Data", value: "28 likes" },
  { title: "Writing Better Error Messages", description: "Turn frustrating errors into helpful guidance for users.", label: "UX", value: "19 likes" },
  { title: "Mobile-First Is Not Enough", description: "Why you should think about thumb zones and one-handed use.", label: "Mobile", value: "34 likes" },
];

export default function Blog205(props: BlockProps) {
  const { theme, heading = "Community Favorites", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">{heading}</h2>
        <div className="space-y-3">
          {items.slice(0, 4).map((post, i) => (
            <article key={i} className="flex items-center gap-4 p-4 rounded-xl hover:bg-black/5 transition cursor-pointer">
              <span className="text-3xl font-black opacity-20 w-8 text-right">{i + 1}</span>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-medium uppercase opacity-50">{post.label}</span>
                <h3 className="font-semibold truncate">{post.title}</h3>
                <p className="text-sm opacity-60 truncate">{post.description}</p>
              </div>
              <div className="shrink-0 flex items-center gap-3 text-xs opacity-50">
                <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5" />{post.value}</span>
                <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" />3</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
