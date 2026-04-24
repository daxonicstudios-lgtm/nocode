import type { BlockProps } from "@/blocks/types";
import { Clock, Key, Map, Briefcase } from "lucide-react";

const icons = [Clock, Key, Map, Briefcase];

export default function Features380(props: BlockProps) {
  const {
    theme,
    heading = "Heirloom Quality",
    subheading = "Features that age gracefully over time",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Time Tested", description: "Core architecture unchanged and stable for five years running." },
      { title: "Master Key", description: "Single sign-on grants access to your entire ecosystem." },
      { title: "Roadmap", description: "Transparent development plan updated every quarter." },
      { title: "Business Ready", description: "Enterprise contracts with SLA guarantees and dedicated support." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#f0ebe1", color: theme?.foreground || "#4a3f35" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{ fontFamily: "Georgia, serif" }}>{heading}</h2>
          <p className="text-base opacity-60" style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}>{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="p-6 rounded-sm" style={{ backgroundColor: "#f8f4ec", border: "1px solid #d9cfbe", boxShadow: "2px 2px 8px rgba(0,0,0,0.06)" }}>
                <div className="flex items-center gap-3 mb-3 pb-3 border-b" style={{ borderColor: "#d9cfbe" }}>
                  <Icon size={20} style={{ color: theme?.primary || "#8b7355" }} />
                  <h3 className="font-bold text-lg" style={{ fontFamily: "Georgia, serif" }}>{item.title}</h3>
                </div>
                <p className="text-sm opacity-60 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>{item.description}</p>
                <div className="flex items-center gap-1 mt-3 opacity-30">
                  {[...Array(5)].map((_, s) => (
                    <div key={s} className="w-1 h-1 rounded-full" style={{ backgroundColor: theme?.primary || "#8b7355" }} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
