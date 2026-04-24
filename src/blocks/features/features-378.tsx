import type { BlockProps } from "@/blocks/types";
import { Award, CheckCircle2, Shield, Star } from "lucide-react";

const icons = [Award, CheckCircle2, Shield, Star];

export default function Features378(props: BlockProps) {
  const {
    theme,
    heading = "Certified Excellence",
    subheading = "Stamped, sealed, and delivered",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "ISO Certified", description: "Meeting international standards for quality management." },
      { title: "Verified Secure", description: "Independently audited and penetration tested quarterly." },
      { title: "Privacy First", description: "GDPR and CCPA compliant data handling by default." },
      { title: "Five Star Rated", description: "Consistently top-rated across all major review platforms." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#f7f3eb", color: theme?.foreground || "#3d2b1f" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>{heading}</h2>
          <p className="text-base opacity-60" style={{ fontFamily: "Georgia, serif" }}>{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="text-center p-5">
                <div className="w-20 h-20 rounded-full border-4 border-double flex items-center justify-center mx-auto mb-4" style={{ borderColor: theme?.primary || "#8b6914" }}>
                  <div className="w-14 h-14 rounded-full border-2 flex items-center justify-center" style={{ borderColor: theme?.primary || "#8b6914" }}>
                    <Icon size={22} style={{ color: theme?.primary || "#8b6914" }} />
                  </div>
                </div>
                <h3 className="font-bold text-sm mb-1" style={{ fontFamily: "Georgia, serif" }}>{item.title}</h3>
                <p className="text-xs opacity-60 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
