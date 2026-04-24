import type { BlockProps } from "@/blocks/types";
import { Shield, Lock, Eye, KeyRound } from "lucide-react";

const icons = [Shield, Lock, Eye, KeyRound];
const monograms = ["S", "L", "V", "K"];

export default function Features386(props: BlockProps) {
  const {
    theme,
    heading = "Monogram Collection",
    subheading = "Each feature carries our signature promise",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Sovereign Security", description: "Your data remains under your absolute control." },
      { title: "Locked Vault", description: "Military-grade encryption for sensitive information." },
      { title: "Vigilant Watch", description: "24/7 monitoring detects anomalies in real time." },
      { title: "Key Master", description: "Advanced key management with automatic rotation." },
    ],
  } = props;

  const accent = theme?.primary || "#c9a84c";

  return (
    <section style={{ backgroundColor: theme?.background || "#111", color: theme?.foreground || "#e8dcc8" }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-light tracking-wider" style={{ fontFamily: "Georgia, serif" }}>{heading}</h2>
          <p className="text-sm mt-3 opacity-40">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const letter = monograms[i % monograms.length];
            return (
              <div key={i} className="flex items-start gap-5">
                <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 flex items-center justify-center relative" style={{ borderColor: accent }}>
                  <span className="text-2xl font-light" style={{ fontFamily: "Georgia, serif", color: accent }}>{letter}</span>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: accent }}>
                    <Icon size={12} color="#111" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2 tracking-wide" style={{ fontFamily: "Georgia, serif" }}>{item.title}</h3>
                  <p className="text-sm opacity-40 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
