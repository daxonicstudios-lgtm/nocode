import type { BlockProps } from "@/blocks/types";
import { Newspaper, FileText, BookOpen, Printer } from "lucide-react";

const icons = [Newspaper, FileText, BookOpen, Printer];

export default function Features376(props: BlockProps) {
  const {
    theme,
    heading = "THE DAILY FEATURE",
    subheading = "All the news that fits your workflow",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Breaking Updates", description: "Real-time notifications deliver critical changes the moment they happen across your entire system." },
      { title: "Deep Reports", description: "Comprehensive analytics that dig beneath surface metrics to reveal actionable intelligence." },
      { title: "Knowledge Base", description: "Searchable documentation that grows smarter the more your team contributes to it." },
      { title: "Export Anywhere", description: "Generate PDF, CSV, and custom reports formatted exactly how your stakeholders need them." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#faf7f2", color: theme?.foreground || "#2d2d2d" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-2 border-b-2 border-t-2 py-3" style={{ borderColor: theme?.foreground || "#2d2d2d" }}>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-wider" style={{ fontFamily: "Georgia, serif" }}>{heading}</h2>
        </div>
        <p className="text-center text-xs uppercase tracking-widest py-2 border-b mb-8 opacity-50" style={{ borderColor: theme?.foreground || "#2d2d2d", fontFamily: "Georgia, serif" }}>{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className={i < 2 ? "border-b pb-6" : "pb-6"} style={{ borderColor: `${theme?.foreground || "#2d2d2d"}33` }}>
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={16} style={{ color: theme?.primary || "#8b6914" }} />
                  <h3 className="font-bold text-lg" style={{ fontFamily: "Georgia, serif" }}>{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed opacity-70" style={{ fontFamily: "Georgia, serif", columnCount: 1 }}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
