import type { BlockProps } from "@/blocks/types";
import { Heart, TrendingUp, Globe } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Work from anywhere", description: "Fully remote, async-first, with four in-person meetups a year." },
  { title: "Equity for everyone", description: "Every employee gets meaningful ownership. No exceptions." },
  { title: "Real growth budget", description: "$2,000 annual learning stipend plus unlimited books." },
];

const ICONS = [Globe, TrendingUp, Heart];

export default function Careers002(props: BlockProps) {
  const { theme, heading = "What it's like to work here", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-12">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((b, i) => {
            const Icon = ICONS[i % 3];
            return (
              <div key={i} className="p-7 rounded-2xl" style={{ backgroundColor: theme?.secondary ?? "#f3f4f6" }}>
                <Icon className="w-7 h-7 mb-4" style={{ color: theme?.primary }} />
                <h3 className="text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm opacity-70">{b.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
