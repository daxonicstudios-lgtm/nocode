import type { BlockProps } from "@/blocks/types";
import { Monitor, Cloud, Bell } from "lucide-react";

const icons = [Monitor, Cloud, Bell];

export default function Features156(props: BlockProps) {
  const {
    theme,
    heading = "Platform Highlights",
    subheading = "Clean, focused, and purposeful",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Responsive Previews", description: "See how your site looks on every device before publishing." },
      { title: "Cloud Storage", description: "All your assets stored securely with unlimited bandwidth." },
      { title: "Smart Notifications", description: "Get alerts for traffic milestones and form submissions." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-2 text-center">{heading}</h2>
        <p className="opacity-50 mb-14 text-center">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-lg p-6 border" style={{ borderColor: theme?.foreground ? `${theme.foreground}15` : "#e5e7eb" }}>
                <Icon size={22} className="mb-4" style={{ color: theme?.primary || "#6366f1" }} />
                <h3 className="font-medium text-sm mb-2">{item.title}</h3>
                <p className="opacity-50 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="text-sm font-medium" style={{ color: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
