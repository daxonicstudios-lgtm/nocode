import type { BlockProps } from "@/blocks/types";
import { Megaphone, BarChart3, Mail, Repeat } from "lucide-react";

const icons = [Megaphone, BarChart3, Mail, Repeat];

export default function Features073(props: BlockProps) {
  const {
    theme,
    heading = "Marketing Toolkit",
    subheading = "Grow faster with integrated marketing features",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl = "https://placehold.co/120x80",
    items = [
      { title: "Campaign Builder", description: "Design multi-channel marketing campaigns with a visual drag-and-drop builder.", imageUrl: "https://placehold.co/120x80/6366f1/fff?text=Campaigns" },
      { title: "Conversion Tracking", description: "Measure ROI on every campaign with pixel-accurate conversion attribution.", imageUrl: "https://placehold.co/120x80/8b5cf6/fff?text=Analytics" },
      { title: "Email Automation", description: "Send the right message at the right time with behavior-triggered email sequences.", imageUrl: "https://placehold.co/120x80/06b6d4/fff?text=Email" },
      { title: "Retargeting", description: "Bring back visitors who left without converting using smart retargeting pixels.", imageUrl: "https://placehold.co/120x80/f59e0b/fff?text=Retarget" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex gap-5 p-6 rounded-xl" style={{ backgroundColor: theme?.accent || "#f1f5f9" }}>
                <img src={item.imageUrl || imageUrl} alt={item.title || ""} className="w-20 h-20 rounded-lg object-cover shrink-0" />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={16} style={{ color: theme?.primary || "#6366f1" }} />
                    <h3 className="font-bold">{item.title}</h3>
                  </div>
                  <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
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
