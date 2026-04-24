import type { BlockProps } from "@/blocks/types";
import { User } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Choosing the Right Tech Stack", description: "A framework for evaluating tools based on team size and product stage.", label: "Sarah Chen", value: "CTO & Co-founder" },
  { title: "How We Hire Remote Engineers", description: "Our process for finding great talent across time zones.", label: "James Okafor", value: "Head of Engineering" },
  { title: "Lessons from Our First Pivot", description: "We started as a marketplace before finding product-market fit.", label: "Amina Diallo", value: "CEO" },
];

export default function Blog076(props: BlockProps) {
  const { theme, heading = "Team Perspectives", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="rounded-xl overflow-hidden border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="aspect-[16/9]" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              <div className="p-5">
                <h3 className="font-bold text-base">{post.title}</h3>
                <p className="mt-2 text-sm opacity-60">{post.description}</p>
                <div className="flex items-center gap-3 mt-4 pt-4 border-t" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{String(post.label)}</p>
                    <p className="text-xs opacity-50">{String(post.value)}</p>
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
