import type { BlockProps } from "@/blocks/types";
import { Globe } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Global Tech Policy Update", description: "New regulations in the EU, US, and Africa shape the next era of digital governance.", label: "World" },
  { title: "Startup Ecosystem Spotlight: Lagos", description: "Why Nigeria's commercial capital is attracting record venture investment.", label: "Africa" },
  { title: "AI Ethics Board Publishes Guidelines", description: "A cross-industry effort to establish responsible AI development standards.", label: "AI" },
  { title: "Supply Chain Tech Gets a Makeover", description: "Blockchain-verified logistics platforms gain mainstream adoption.", label: "Logistics" },
  { title: "Open Source Sustainability Models", description: "How maintainers fund critical infrastructure projects.", label: "Open Source" },
  { title: "Mobile Banking Reaches Rural Communities", description: "Agent networks bring financial services to last-mile populations.", label: "Fintech" },
];

export default function Blog075(props: BlockProps) {
  const { theme, heading = "World News", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8f8f4", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-10">
          <Globe className="w-5 h-5" />
          <h2 className="text-2xl font-black uppercase tracking-widest">{heading}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {items.slice(0, 6).map((post, i) => (
            <article key={i} className="border-t-2 pt-4" style={{ borderColor: i < 3 ? (theme?.primary ?? "#b91c1c") : (theme?.secondary ?? "#d4d0c8") }}>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">{String(post.label)}</span>
              <h3 className="mt-2 font-bold text-base leading-snug">{post.title}</h3>
              <p className="mt-1 text-sm opacity-60">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
