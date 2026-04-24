import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Announcing Our Series A Funding", label: "April 2026", url: "#" },
  { title: "The Case for Opinionated Software", label: "April 2026", url: "#" },
  { title: "How We Think About Pricing", label: "March 2026", url: "#" },
  { title: "Notes on Building for Mobile-First Markets", label: "March 2026", url: "#" },
  { title: "What We Got Wrong in Year One", label: "February 2026", url: "#" },
  { title: "Reflections on Reaching 10,000 Users", label: "February 2026", url: "#" },
];

export default function Blog022(props: BlockProps) {
  const { theme, heading = "Journal", subheading = "Thoughts and reflections from the team.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold">{heading}</h2>
        <p className="mt-1 text-sm opacity-50 mb-8">{subheading}</p>
        {items.slice(0, 6).map((post, i) => (
          <a key={i} href={post.url ?? "#"} className="group flex items-center justify-between py-3">
            <div>
              <h3 className="font-medium group-hover:underline">{post.title}</h3>
              <span className="text-xs opacity-40">{String(post.label ?? "")}</span>
            </div>
            <ArrowRight className="w-4 h-4 opacity-30 group-hover:opacity-70 transition-opacity shrink-0" />
          </a>
        ))}
      </div>
    </section>
  );
}
