import type { BlockProps } from "@/blocks/types";
import { User, Clock } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Understanding Design Tokens", description: "A practical guide to systemizing your visual language.", label: "Sarah Chen", value: "4 min" },
  { title: "API-First Architecture Explained", description: "Why decoupling your backend unlocks faster iteration.", label: "James Okoro", value: "7 min" },
  { title: "User Research on a Budget", description: "Guerrilla methods that deliver real insights.", label: "Amara Diallo", value: "5 min" },
];

export default function Blog155(props: BlockProps) {
  const { theme, heading = "From the Team", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#dcdcdc", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.slice(0, 3).map((item, i) => (
            <article
              key={i}
              className="rounded-3xl p-8"
              style={{
                backgroundColor: theme?.background ?? "#dcdcdc",
                boxShadow: "12px 12px 24px #bababa, -12px -12px 24px #fefefe",
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{
                  backgroundColor: theme?.background ?? "#dcdcdc",
                  boxShadow: "inset 3px 3px 6px #bababa, inset -3px -3px 6px #fefefe",
                }}
              >
                <User className="w-5 h-5 opacity-60" />
              </div>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm opacity-60 leading-relaxed">{item.description}</p>
              <div className="mt-4 flex items-center gap-3 text-xs opacity-50">
                <span>{item.label}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{item.value}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
