import type { BlockProps } from "@/blocks/types";
import { CheckCircle } from "lucide-react";

export default function Features214(props: BlockProps) {
  const {
    theme,
    heading = "Platform Features",
    subheading = "Designed for teams that value clarity and efficiency",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Visual Workflow Builder", description: "Design complex automations with an intuitive drag-and-drop canvas that anyone can use." },
      { title: "Smart Scheduling", description: "AI-powered calendar management that finds the perfect time for every meeting." },
      { title: "Resource Allocation", description: "Balance workloads across your team with real-time capacity planning tools." },
      { title: "Compliance Tracking", description: "Stay ahead of regulatory requirements with automated audit trails and reports." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-base opacity-70 mb-12 max-w-lg">{subheading}</p>
        <div className="space-y-8">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <CheckCircle size={20} className="mt-1 shrink-0" style={{ color: theme?.primary || "#6366f1" }} />
              <div className="pl-2 border-l-2" style={{ borderColor: theme?.primary ? `${theme.primary}30` : "#e5e7eb" }}>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed pl-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-10 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
