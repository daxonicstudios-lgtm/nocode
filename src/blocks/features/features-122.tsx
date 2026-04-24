import type { BlockProps } from "@/blocks/types";
import { FileText, Image, Mail, Database, Lock, Cpu } from "lucide-react";

const icons = [FileText, Image, Mail, Database, Lock, Cpu];

export default function Features122(props: BlockProps) {
  const {
    theme,
    heading = "What You Get",
    subheading = "Free essentials and powerful Pro upgrades",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Page Builder", description: "Drag-and-drop visual editor for any layout.", label: "Free" },
      { title: "Media Library", description: "Upload and manage images, videos, and files.", label: "Free" },
      { title: "Email Campaigns", description: "Send branded emails to your subscriber list.", label: "Pro" },
      { title: "Database CMS", description: "Store and query structured content easily.", label: "Pro" },
      { title: "Advanced Security", description: "WAF, bot protection, and two-factor auth.", label: "Pro" },
      { title: "AI Assistant", description: "Generate copy, layouts, and images with AI.", label: "Pro" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const isFree = item.label === "Free";
            return (
              <div key={i} className="rounded-xl border p-6" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                <div className="flex items-center justify-between mb-4">
                  <Icon size={22} style={{ color: theme?.primary || "#6366f1" }} />
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${isFree ? "bg-green-100 text-green-700" : "text-white"}`} style={!isFree ? { backgroundColor: theme?.primary || "#6366f1" } : {}}>
                    {item.label}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
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
