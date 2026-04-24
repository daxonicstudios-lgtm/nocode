import type { BlockProps } from "@/blocks/types";
import { Gauge, FileText, PieChart } from "lucide-react";

const icons = [Gauge, FileText, PieChart];

export default function Features209(props: BlockProps) {
  const {
    theme,
    heading = "Streamlined Workflow",
    subheading = "Three core features that transform how you work",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Performance Monitoring", description: "Real-time metrics that surface problems before your users notice them." },
      { title: "Document Management", description: "Organize, search, and collaborate on files with version control built in." },
      { title: "Visual Reports", description: "Turn raw data into compelling stories with automated chart generation." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70 mb-14 max-w-xl mx-auto">{subheading}</p>
        <div className="space-y-0">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i}>
                <div className="rounded-xl border p-8 text-center" style={{ borderColor: `${primary}20` }}>
                  <Icon size={30} className="mx-auto mb-4" style={{ color: primary }} />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-60 max-w-md mx-auto">{item.description}</p>
                </div>
                {i < items.length - 1 && (
                  <div className="h-8 w-0.5 mx-auto" style={{ background: `linear-gradient(to bottom, ${primary}, ${theme?.accent || "#f59e0b"})` }} />
                )}
              </div>
            );
          })}
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-12 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
