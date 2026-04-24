import type { BlockProps } from "@/blocks/types";
import { FileText, Calendar, Bell, Settings } from "lucide-react";

const icons = [FileText, Calendar, Bell, Settings];
const iconBgs = ["#dbeafe", "#fce7f3", "#dcfce7", "#fef3c7"];
const iconColors = ["#2563eb", "#db2777", "#16a34a", "#d97706"];

export default function Features290(props: BlockProps) {
  const {
    theme,
    heading = "Everything in One Place",
    subheading = "All the tools your team needs, beautifully organized",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Document Hub", description: "Create, share, and collaborate on docs with real-time editing." },
      { title: "Smart Calendar", description: "Sync schedules across teams with conflict detection and time zones." },
      { title: "Alert Center", description: "Unified notification inbox with smart grouping and priority filters." },
      { title: "Control Panel", description: "Centralized settings with role-based access and audit logging." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#fefefe", color: theme?.foreground || "#1f2937" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl p-6 text-center" style={{ backgroundColor: theme?.background || "#fff", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
                <div className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : iconBgs[i % iconBgs.length], color: theme?.primary || iconColors[i % iconColors.length] }}>
                  <Icon size={24} />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
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
