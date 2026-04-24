import type { BlockProps } from "@/blocks/types";
import { CheckCircle } from "lucide-react";

export default function Features074(props: BlockProps) {
  const {
    theme,
    heading = "Built for Scale",
    subheading = "From startup to enterprise, our infrastructure grows with you",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl = "https://placehold.co/1200x500",
    items = [
      { title: "Auto-Scaling Servers", description: "Handle traffic spikes without lifting a finger." },
      { title: "Global CDN", description: "Content delivered from 200+ edge locations worldwide." },
      { title: "99.99% Uptime SLA", description: "Guaranteed reliability backed by a service-level agreement." },
      { title: "Automated Backups", description: "Hourly snapshots with one-click restore." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle size={20} className="mt-0.5 shrink-0" style={{ color: theme?.primary || "#6366f1" }} />
              <div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="opacity-60 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src={imageUrl} alt="Platform screenshot" className="w-full object-cover" />
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
