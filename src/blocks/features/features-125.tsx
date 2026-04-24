import type { BlockProps } from "@/blocks/types";
import { TrendingDown, Clock, Users, Server } from "lucide-react";

const icons = [TrendingDown, Clock, Users, Server];

export default function Features125(props: BlockProps) {
  const {
    theme,
    heading = "Save Time & Money",
    subheading = "Features designed to cut costs and boost efficiency",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Automated Workflows", description: "Replace manual tasks with smart automation.", value: "Save $2,400/yr" },
      { title: "Faster Time to Market", description: "Launch websites in hours instead of weeks.", value: "Save 80+ hours" },
      { title: "Self-Service Portal", description: "Clients update content without developer help.", value: "Save $5,000/yr" },
      { title: "Built-In Hosting", description: "No separate hosting fees or server management.", value: "Save $1,200/yr" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl p-6 border relative overflow-hidden" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-white" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="opacity-60 text-sm mb-3">{item.description}</p>
                    <div className="inline-block px-3 py-1 rounded-full text-sm font-bold bg-green-100 text-green-700">
                      {item.value}
                    </div>
                  </div>
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
