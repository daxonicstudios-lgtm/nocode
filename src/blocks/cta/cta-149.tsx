import type { BlockProps } from "@/blocks/types";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function Cta149(props: BlockProps) {
  const {
    theme,
    heading = "Secure, Reliable, Fast",
    subheading = "Your trust is our top priority. We protect your data like our own.",
    buttonText = "Get Protected",
    buttonUrl = "#",
  } = props;

  const badges = ["256-bit SSL", "GDPR Compliant", "ISO 27001", "PCI DSS"];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="max-w-lg mx-auto text-center">
        <ShieldCheck className="w-12 h-12 mx-auto mb-4" style={{ color: theme?.primary || "#2563eb" }} />
        <h2 className="text-2xl md:text-3xl font-bold mb-2">{heading}</h2>
        <p className="text-sm opacity-70 mb-6">{subheading}</p>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {badges.map((b, i) => (
            <span key={i} className="px-3 py-1 rounded-full border text-xs font-semibold" style={{ borderColor: theme?.primary || "#2563eb", color: theme?.primary || "#2563eb" }}>
              {b}
            </span>
          ))}
        </div>
        <a href={buttonUrl} className="inline-flex items-center gap-2 px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
