import type { BlockProps } from "@/blocks/types";
import { HardHat, Calculator, ShieldAlert } from "lucide-react";

const icons = [HardHat, Calculator, ShieldAlert];

export default function Features197(props: BlockProps) {
  const {
    theme,
    heading = "Construction Management",
    subheading = "Keep every job site running smoothly",
    bodyText,
    buttonText = "See Demo",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Project Tracking", description: "Monitor progress, timelines, and milestones across all active job sites from one dashboard." },
      { title: "Cost Estimates", description: "Generate accurate bids with material calculators, labor rates, and margin analysis." },
      { title: "Safety Compliance", description: "Digital checklists, incident reporting, and certification tracking keep your crew safe." },
    ],
  } = props;

  const primary = theme?.primary || "#d97706";

  return (
    <section style={{ backgroundColor: theme?.background || "#fffbeb", color: theme?.foreground || "#1c1917" }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-60 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl p-8 bg-white shadow-sm border-l-4" style={{ borderColor: primary }}>
                <Icon size={26} className="mb-5" style={{ color: primary }} />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
