import type { BlockProps } from "@/blocks/types";
import { Bolt, Lock, Globe } from "lucide-react";

const icons = [Bolt, Lock, Globe];

export default function Features166(props: BlockProps) {
  const {
    theme,
    heading = "THE COMPLETE TOOLKIT",
    subheading = "EVERYTHING YOUR BUSINESS NEEDS",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "INSTANT SETUP", description: "Get started in minutes with our guided onboarding process." },
      { title: "BANK-LEVEL SECURITY", description: "256-bit encryption and two-factor authentication standard." },
      { title: "GLOBAL REACH", description: "Serve customers across 195 countries with localized content." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black mb-2 text-center tracking-wider">{heading}</h2>
        <p className="text-sm font-bold tracking-[0.2em] opacity-50 mb-14 text-center">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="text-center">
                <Icon size={24} className="mx-auto mb-4" style={{ color: theme?.primary || "#6366f1" }} />
                <h3 className="text-base font-black tracking-wider mb-2">{item.title}</h3>
                <p className="opacity-50 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-8 py-3 font-black tracking-wider text-sm text-white rounded" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
