import type { BlockProps } from "@/blocks/types";
import { Users, Globe, Clock, Server } from "lucide-react";

const icons = [Users, Globe, Clock, Server];

export default function Features088(props: BlockProps) {
  const {
    theme,
    heading = "Platform at a Glance",
    subheading = "Numbers that speak for themselves",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Happy Customers", value: "25,000", description: "Businesses trust us with their online presence every day." },
      { title: "Countries Served", value: "120", description: "Our platform reaches users on every continent." },
      { title: "Avg Uptime", value: "99.99", description: "Percent reliability guaranteed by our infrastructure." },
      { title: "Pages Hosted", value: "5,000,000", description: "Millions of pages served fast and securely." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <style>{`
        @keyframes countFade088 {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .count-088 { animation: countFade088 0.8s ease-out both; }
      `}</style>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="text-center p-6 rounded-2xl" style={{ backgroundColor: theme?.accent || "#f1f5f9" }}>
                <Icon size={28} className="mx-auto mb-4" style={{ color: theme?.primary || "#6366f1" }} />
                <p className="count-088 text-4xl font-black mb-1" style={{ animationDelay: `${i * 150}ms`, color: theme?.primary || "#6366f1" }}>
                  {item.value}{item.title?.includes("Uptime") ? "%" : "+"}
                </p>
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
