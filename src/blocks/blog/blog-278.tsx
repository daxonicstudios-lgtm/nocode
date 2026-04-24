import type { BlockProps } from "@/blocks/types";
import { Heart, Clock, User } from "lucide-react";

const DEFAULTS = [
  { title: "Quick tip: use contrast checkers", description: "Always verify your text is readable against its background. Accessibility matters.", label: "Grace Achieng", value: "1h" },
  { title: "New integration: Stripe payments", description: "Accept payments directly on your no-code site. Setup takes under five minutes.", label: "Tech Team", value: "3h" },
  { title: "Design challenge: recreate Apple.com", description: "This week challenge is to rebuild the Apple homepage. Share your results in the community.", label: "Creative Lab", value: "6h" },
  { title: "Webinar: scaling your freelance business", description: "Join us Thursday for a live session on growing your client base sustainably.", label: "Events", value: "8h" },
];

export default function Blog278(props: BlockProps) {
  const { theme, heading = "Recent Activity", items = DEFAULTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">{heading}</h2>
        <div className="space-y-3">
          {items.map((post, i) => (
            <article key={i} className="flex items-start gap-3 p-3 rounded-xl hover:opacity-80 cursor-pointer" style={{ backgroundColor: theme?.accent ?? "#f9fafb" }}>
              <div className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                <User className="w-5 h-5 opacity-40" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold truncate">{String(post.label ?? "")}</span>
                  <div className="flex items-center gap-1 text-xs opacity-30 shrink-0">
                    <Clock className="w-3 h-3" />
                    <span>{String(post.value ?? "")}</span>
                  </div>
                </div>
                <h3 className="font-medium text-sm mt-0.5">{post.title}</h3>
                <p className="text-xs opacity-60 mt-0.5 line-clamp-1">{post.description}</p>
              </div>
              <button className="flex items-center gap-1 text-xs opacity-40 shrink-0 mt-1">
                <Heart className="w-3.5 h-3.5" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
