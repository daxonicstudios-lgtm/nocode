import type { BlockProps } from "@/blocks/types";
import { LayoutDashboard, TrendingUp, Users, Activity } from "lucide-react";

const icons = [LayoutDashboard, TrendingUp, Users, Activity];

export default function Features077(props: BlockProps) {
  const {
    theme,
    heading = "Your Command Center",
    subheading = "One dashboard to rule them all",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl = "https://placehold.co/900x500",
    items = [
      { title: "Overview Panel", description: "See traffic, revenue, and user activity at a glance." },
      { title: "Growth Charts", description: "Track week-over-week trends with interactive line graphs." },
      { title: "Team Activity", description: "Monitor who changed what, when, and why across your project." },
      { title: "Health Metrics", description: "Server uptime, error rates, and performance scores live." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl mb-12 border" style={{ borderColor: `${theme?.foreground || "#000"}10` }}>
          <div className="flex items-center gap-2 px-4 py-3" style={{ backgroundColor: theme?.accent || "#f1f5f9" }}>
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <span className="text-xs opacity-40 ml-2">Dashboard</span>
          </div>
          <img src={imageUrl} alt="Dashboard screenshot" className="w-full object-cover" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="text-center">
                <div className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: `${theme?.primary || "#6366f1"}15` }}>
                  <Icon size={22} style={{ color: theme?.primary || "#6366f1" }} />
                </div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="opacity-60 text-sm">{item.description}</p>
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
