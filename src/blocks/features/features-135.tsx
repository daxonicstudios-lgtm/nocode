import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3, Globe, Palette } from "lucide-react";

const icons = [Zap, Shield, BarChart3, Globe, Palette];

export default function Features135(props: BlockProps) {
  const {
    theme,
    heading = "Feature Guide",
    subheading = "Jump to any section using the sidebar",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Speed", description: "Every page is optimized for instant loading. Our CDN serves assets from the nearest edge location, and automatic image compression keeps file sizes small without sacrificing quality." },
      { title: "Security", description: "Enterprise-grade protection comes standard. Free SSL, automated backups, DDoS mitigation, and continuous vulnerability scanning keep your site safe." },
      { title: "Analytics", description: "Real-time dashboards show visitor counts, page performance, conversion rates, and revenue attribution. Export reports or set up automated email digests." },
      { title: "Integrations", description: "Connect with 200+ tools including Stripe, Mailchimp, Google Analytics, Slack, and Zapier. Our API lets you build custom integrations." },
      { title: "Design", description: "Access a professional design system with typography presets, color palettes, and spacing scales. Maintain brand consistency across every page." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <nav className="md:w-48 flex-shrink-0">
            <ul className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {items.map((item, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <li key={i}>
                    <a href={`#feat-${i}`} className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap hover:opacity-80" style={{ backgroundColor: theme?.accent || "#f3f4f6" }}>
                      <Icon size={14} style={{ color: theme?.primary || "#6366f1" }} />
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex-1 space-y-10">
            {items.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={i} id={`feat-${i}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon size={22} style={{ color: theme?.primary || "#6366f1" }} />
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="opacity-70 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
