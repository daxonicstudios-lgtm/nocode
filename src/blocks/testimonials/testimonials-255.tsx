import type { BlockProps } from "@/blocks/types";
import { Quote } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Sarah K.", description: "This platform saved us weeks of development time. Absolutely incredible.", label: "CEO, TechStart" },
  { title: "James M.", description: "The easiest website builder I have ever used. Built my entire site from my phone.", label: "Freelancer" },
  { title: "Amina O.", description: "Our online sales doubled within a month of launching with this platform.", label: "Founder, ShopAfrica" },
];

export default function Testimonials255(props: BlockProps) {
  const { theme, heading = "What People Say", subheading = "Trusted by thousands worldwide.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((t, i) => (
            <div key={i} className="rounded-2xl p-8 border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <Quote className="w-6 h-6 mb-4 opacity-20" />
              <p className="text-sm leading-relaxed opacity-80">{t.description}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }} />
                <div>
                  <div className="font-semibold text-sm">{t.title}</div>
                  <div className="text-xs opacity-50">{String(t.label ?? "")}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
