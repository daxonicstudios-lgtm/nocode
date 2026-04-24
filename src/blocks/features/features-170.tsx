import type { BlockProps } from "@/blocks/types";
import { Sparkles, Gauge, Fingerprint } from "lucide-react";

const icons = [Sparkles, Gauge, Fingerprint];

export default function Features170(props: BlockProps) {
  const {
    theme,
    heading = "Bold Innovation",
    subheading = "Technology that makes a statement",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "AI Assistant", description: "Natural language interface that understands your intent." },
      { title: "Performance Score", description: "Real-time performance grading with actionable suggestions." },
      { title: "Biometric Auth", description: "Fingerprint and face recognition for seamless security." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";
  const accent = theme?.accent || "#f59e0b";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-60 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl overflow-hidden">
                <div className="h-2" style={{ backgroundColor: i % 2 === 0 ? primary : accent }} />
                <div className="p-8" style={{ backgroundColor: i % 2 === 0 ? `${accent}10` : `${primary}10` }}>
                  <Icon size={28} className="mb-5" style={{ color: i % 2 === 0 ? primary : accent }} />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-bold" style={{ backgroundColor: primary }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
