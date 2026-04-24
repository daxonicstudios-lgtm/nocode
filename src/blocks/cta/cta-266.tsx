import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta266(props: BlockProps) {
  const {
    theme,
    heading = "Trusted by Industry Leaders",
    subheading = "Join 10,000+ companies that rely on our platform.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    items = [
      { title: "Acme Corp" }, { title: "Globex" }, { title: "Initech" },
      { title: "Umbrella" }, { title: "Stark Inc" }, { title: "Wayne Co" },
    ],
  } = props;

  return (
    <section className="px-4 py-20 sm:py-28" style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#0f172a" }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <a href={buttonUrl} className="mt-6 inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
        <div className="mt-12 grid grid-cols-3 sm:grid-cols-6 gap-6 items-center">
          {items.map((item, i) => (
            <div key={i} className="flex items-center justify-center h-12 rounded-lg bg-gray-100 px-3">
              <span className="text-xs font-bold opacity-40 tracking-wider uppercase">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
