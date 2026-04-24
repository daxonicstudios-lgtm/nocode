import type { BlockProps } from "@/blocks/types";
import { Sparkles, Lock, Gauge, Cloud, Palette, Bell } from "lucide-react";

const icons = [Sparkles, Lock, Gauge, Cloud, Palette, Bell];

export default function Features106(props: BlockProps) {
  const {
    theme,
    heading = "Our Story So Far",
    subheading = "Centered timeline of achievements",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Idea Born", description: "A small team with a big vision started building in a garage." },
      { title: "First 100 Users", description: "Word of mouth drove our earliest and most passionate adopters." },
      { title: "Series A Funding", description: "Raised $5M to expand the team and accelerate development." },
      { title: "Enterprise Launch", description: "Released enterprise features including SSO and audit logs." },
      { title: "Design Overhaul", description: "Redesigned the entire platform for speed and simplicity." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 hidden sm:block" style={{ backgroundColor: theme?.accent || "#e5e7eb" }} />
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const isLeft = i % 2 === 0;
            return (
              <div key={i} className="relative mb-12 sm:flex sm:items-center">
                <div className={`sm:w-5/12 ${isLeft ? "sm:text-right sm:pr-8" : "sm:order-3 sm:text-left sm:pl-8"}`}>
                  <div className={`rounded-xl p-5 border inline-block text-left ${isLeft ? "sm:ml-auto" : ""}`} style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="hidden sm:flex sm:order-2 sm:w-2/12 justify-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
                    <Icon size={16} />
                  </div>
                </div>
                <div className={`hidden sm:block sm:w-5/12 ${isLeft ? "sm:order-3" : ""}`} />
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-6">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
