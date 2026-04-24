import type { BlockProps } from "@/blocks/types";
import { Award, Medal, BadgeCheck, ShieldCheck } from "lucide-react";

const icons = [Award, Medal, BadgeCheck, ShieldCheck];

export default function Features390(props: BlockProps) {
  const {
    theme,
    heading = "Exclusive Access",
    subheading = "Reserved for those who demand the best",
    bodyText,
    buttonText = "Apply Now",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Founder Badge", description: "Early adopters receive lifetime premium status.", label: "Limited" },
      { title: "Gold Medal", description: "Top-performing teams earn recognition and rewards.", label: "Elite" },
      { title: "Verified Pro", description: "Certified professionals get enhanced credibility.", label: "Verified" },
      { title: "Trust Seal", description: "Display compliance badges that build customer confidence.", label: "Trusted" },
    ],
  } = props;

  const gold = theme?.primary || "#c9a84c";

  return (
    <section style={{ backgroundColor: theme?.background || "#0f0f0f", color: theme?.foreground || "#ede8dc" }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-4" style={{ borderColor: `${gold}44`, color: gold }}>
            <Award size={14} />
            <span className="text-xs uppercase tracking-wider">Members Only</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>{heading}</h2>
          <p className="text-sm opacity-40">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="p-6 rounded-lg border relative" style={{ borderColor: `${gold}22`, backgroundColor: "rgba(201,168,76,0.03)" }}>
                {item.label && (
                  <span className="absolute top-4 right-4 text-xs uppercase tracking-wider px-2 py-0.5 rounded-sm" style={{ backgroundColor: `${gold}22`, color: gold }}>{item.label}</span>
                )}
                <div className="w-14 h-14 rounded-full border-2 flex items-center justify-center mb-4" style={{ borderColor: gold }}>
                  <Icon size={22} style={{ color: gold }} />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Georgia, serif" }}>{item.title}</h3>
                <p className="text-sm opacity-40 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-sm font-medium text-sm uppercase tracking-wider" style={{ backgroundColor: gold, color: "#0f0f0f" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
