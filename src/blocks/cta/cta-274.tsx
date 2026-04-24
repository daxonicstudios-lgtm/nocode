import type { BlockProps } from "@/blocks/types";
import { Check } from "lucide-react";

export default function Cta274(props: BlockProps) {
  const {
    theme,
    heading = "Why Teams Choose Us",
    subheading = "Feature-rich and remarkably simple.",
    buttonText = "Sign Up Free",
    buttonUrl = "#",
    items = [
      { title: "No-code builder" }, { title: "API first" }, { title: "99.99% uptime" },
      { title: "SOC2 certified" }, { title: "GDPR ready" }, { title: "24/7 support" },
      { title: "Free migrations" }, { title: "Unlimited users" },
    ],
  } = props;

  return (
    <section className="py-20 px-4" style={{ background: `linear-gradient(to bottom, ${theme?.background ?? "#ffffff"}, ${theme?.accent ?? "#f0fdf4"})`, color: theme?.foreground ?? "#0f172a" }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
      </div>
      <div className="mt-8 overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 px-4 w-max mx-auto">
          {items.map((item, i) => (
            <span key={i} className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-white shadow-sm">
              <Check className="w-3.5 h-3.5" style={{ color: theme?.primary ?? "#22c55e" }} />
              {item.title}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center">
        <a href={buttonUrl} className="inline-block px-8 py-4 rounded-full text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#22c55e" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
