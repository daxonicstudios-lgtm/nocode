import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta270(props: BlockProps) {
  const {
    theme,
    heading = "Powering the Next Generation",
    subheading = "From Fortune 500s to fast-growing startups.",
    buttonText = "Request Demo",
    buttonUrl = "#",
    items = [
      { title: "Amazon" }, { title: "Google" }, { title: "Meta" },
      { title: "Netflix" }, { title: "Spotify" }, { title: "Airbnb" },
      { title: "Uber" }, { title: "Shopify" },
    ],
  } = props;

  return (
    <section className="px-4 py-20" style={{ backgroundColor: theme?.background ?? "#fafafa", color: theme?.foreground ?? "#171717" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-10">
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold">{heading}</h2>
            <p className="mt-3 opacity-60">{subheading}</p>
            <a href={buttonUrl} className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#171717" }}>
              {buttonText} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {items.map((item, i) => (
              <div key={i} className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center border" style={{ borderColor: theme?.secondary ?? "#e5e5e5" }}>
                <span className="text-[9px] font-bold opacity-30 uppercase">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
