import type { BlockProps } from "@/blocks/types";
import { Heart, Users, CalendarCheck } from "lucide-react";

const icons = [Heart, Users, CalendarCheck];

export default function Features193(props: BlockProps) {
  const {
    theme,
    heading = "Plan Your Perfect Day",
    subheading = "Wedding planning tools that reduce stress",
    bodyText,
    buttonText = "Start Planning",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Timeline Planner", description: "Organize every detail from engagement to honeymoon with smart checklists and reminders." },
      { title: "Vendor Directory", description: "Browse and compare photographers, florists, caterers, and venues in your area." },
      { title: "RSVP Manager", description: "Send digital invitations, track responses, and manage seating charts effortlessly." },
    ],
  } = props;

  const primary = theme?.primary || "#e11d48";

  return (
    <section style={{ backgroundColor: theme?.background || "#fff1f2", color: theme?.foreground || "#1c1917" }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-60 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-2xl p-8 bg-white shadow-sm">
                <Icon size={24} className="mb-5" style={{ color: primary }} />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-full text-white font-medium" style={{ backgroundColor: primary }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
