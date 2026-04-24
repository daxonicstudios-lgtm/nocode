import type { BlockProps } from "@/blocks/types";
import { Rocket, Globe, Users, Zap } from "lucide-react";

const icons = [Rocket, Globe, Users, Zap];

export default function Features289(props: BlockProps) {
  const {
    theme,
    heading = "Scale Without Limits",
    subheading = "Enterprise features that grow with your ambitions",
    bodyText,
    buttonText = "Start Growing",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Launch Fast", description: "Go from idea to production in days with pre-built templates and workflows." },
      { title: "Go Global", description: "Multi-language and multi-currency support for worldwide operations." },
      { title: "Team Growth", description: "Unlimited seats with role-based access control at no extra cost." },
      { title: "Instant Scale", description: "Infrastructure scales automatically during traffic surges." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#fff", color: theme?.foreground || "#111827" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span style={{ background: `linear-gradient(135deg, ${theme?.primary || "#6366f1"}, ${theme?.accent || "#ec4899"})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{heading}</span>
          </h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: theme?.primary ? `${theme.primary}08` : "#f5f3ff", color: theme?.primary || "#6366f1" }}>
                  <Icon size={26} />
                </div>
                <h3 className="font-semibold mb-2" style={{ background: `linear-gradient(135deg, ${theme?.primary || "#6366f1"}, ${theme?.accent || "#ec4899"})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ background: `linear-gradient(135deg, ${theme?.primary || "#6366f1"}, ${theme?.accent || "#ec4899"})` }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
