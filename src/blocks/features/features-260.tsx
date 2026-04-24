import type { BlockProps } from "@/blocks/types";
import { Brain, Sparkles, Cpu, Wand2 } from "lucide-react";

const icons = [Brain, Sparkles, Cpu, Wand2];

export default function Features260(props: BlockProps) {
  const {
    theme,
    heading = "Powered by AI",
    subheading = "Machine learning features that work out of the box",
    bodyText,
    buttonText = "Explore AI Features",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Smart Suggestions", description: "AI analyzes your data and surfaces actionable recommendations instantly." },
      { title: "Natural Language", description: "Ask questions in plain English and get answers, charts, and reports." },
      { title: "Predictive Analytics", description: "Forecast trends, churn risk, and revenue with built-in ML models." },
      { title: "Auto-Generation", description: "Generate content, summaries, and reports with a single click." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#faf5ff", color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#f3e8ff", color: theme?.primary || "#9333ea" }}>
            <Sparkles size={14} /> AI-Powered
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl p-6 relative overflow-hidden" style={{ backgroundColor: theme?.background || "#fff", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20" style={{ background: `radial-gradient(circle, ${theme?.primary || "#9333ea"}, transparent)` }} />
                <div className="relative">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: `linear-gradient(135deg, ${theme?.primary || "#9333ea"}, ${theme?.accent || "#ec4899"})` }}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ background: `linear-gradient(135deg, ${theme?.primary || "#9333ea"}, ${theme?.accent || "#ec4899"})` }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
