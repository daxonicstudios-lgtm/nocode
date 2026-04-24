import type { BlockProps } from "@/blocks/types";
import { Palette, Code, Cloud, Settings } from "lucide-react";

const icons = [Palette, Code, Cloud, Settings];

export default function Features056(props: BlockProps) {
  const {
    theme,
    heading = "Powerful Capabilities",
    subheading = "Tools that adapt to your workflow",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl = "https://placehold.co/540x380",
    items = [
      { title: "Custom Themes", description: "Create a brand-consistent look with our advanced theming engine and design tokens." },
      { title: "Developer API", description: "Extend functionality with a RESTful API, webhooks, and extensive SDK support." },
      { title: "Cloud Sync", description: "Your data stays in sync across all devices with real-time cloud synchronization." },
      { title: "Fine-Grained Controls", description: "Adjust permissions, workflows, and settings to match your exact requirements." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="space-y-16">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const isEven = i % 2 === 0;
            return (
              <div key={i} className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}>
                <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden">
                  <img src={imageUrl} alt={item.title || ""} className="w-full object-cover" />
                  <div className="absolute inset-0 rounded-2xl" style={{ background: `linear-gradient(135deg, ${theme?.primary || "#6366f1"}33, ${theme?.accent || "#8b5cf6"}33)` }} />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <Icon size={28} style={{ color: theme?.primary || "#6366f1" }} />
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="opacity-60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
