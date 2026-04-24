import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Choose a Template", description: "Browse hundreds of professionally designed templates." },
  { title: "Customize Everything", description: "Change colors, text, images, and layout to match your brand." },
  { title: "Go Live", description: "Publish your site and share it with the world." },
];

export default function Steps107(props: BlockProps) {
  const { theme, heading = "Our Process", subheading = "Follow these steps to get started.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-4">
          {items.slice(0, 3).map((step, i) => (
            <div key={i} className="flex-1 flex items-start gap-4">
              <div className="flex-1 rounded-2xl p-6" style={{ backgroundColor: theme?.background ?? "#fff" }}>
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme?.primary }}>Step {i + 1}</span>
                <h3 className="mt-2 font-semibold text-lg">{step.title}</h3>
                <p className="mt-2 text-sm opacity-60">{step.description}</p>
              </div>
              {i < 2 && <ArrowRight className="w-5 h-5 mt-10 shrink-0 opacity-30 hidden md:block" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
