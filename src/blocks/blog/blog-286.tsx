import type { BlockProps } from "@/blocks/types";
import { Calendar } from "lucide-react";

const DEFAULTS = [
  { title: "Photography Tips for Product Pages", description: "You do not need a professional photographer. Just good lighting and these techniques.", label: "Photography", value: "Mar 28" },
  { title: "User Testing on a Budget", description: "Get real feedback without expensive tools or agencies.", label: "Research", value: "Mar 24" },
  { title: "Email List Building Strategies", description: "Grow your subscriber base with these proven tactics.", label: "Growth", value: "Mar 20" },
  { title: "Choosing the Right Template", description: "Match your template to your industry and goals.", label: "Getting Started", value: "Mar 16" },
];

export default function Blog286(props: BlockProps) {
  const { theme, heading = "From the Blog", items = DEFAULTS } = props;
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">{heading}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <article className="cursor-pointer group">
            <div className="aspect-[4/3] rounded-2xl mb-4" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }} />
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-3 h-3 opacity-40" />
              <span className="text-xs opacity-50">{String(featured?.value ?? "")}</span>
              <span className="text-xs font-medium px-2 py-0.5 rounded" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }}>{String(featured?.label ?? "")}</span>
            </div>
            <h3 className="text-2xl font-bold group-hover:underline">{featured?.title}</h3>
            <p className="opacity-70 mt-2">{featured?.description}</p>
          </article>
          <div className="space-y-4">
            {rest.map((post, i) => (
              <article key={i} className="flex gap-4 cursor-pointer group">
                <div className="w-24 h-24 rounded-xl shrink-0" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }} />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs opacity-40">{String(post.value ?? "")}</span>
                    <span className="text-xs font-medium opacity-50">{String(post.label ?? "")}</span>
                  </div>
                  <h3 className="font-semibold group-hover:underline">{post.title}</h3>
                  <p className="text-sm opacity-60 mt-0.5 line-clamp-2">{post.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
