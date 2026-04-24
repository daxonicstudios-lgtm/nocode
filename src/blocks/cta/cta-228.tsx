import type { BlockProps } from "@/blocks/types";
import { FolderDown, ArrowRight } from "lucide-react";

export default function Cta228(props: BlockProps) {
  const {
    theme,
    heading = "Resources & downloads",
    subheading = "Everything you need to get started, all in one place.",
    buttonText = "View All Resources",
    buttonUrl = "#",
    items = [
      { title: "Brand Kit", description: "ZIP, 12 MB" },
      { title: "API Documentation", description: "PDF, 3.1 MB" },
      { title: "Onboarding Guide", description: "PDF, 1.8 MB" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
          <p className="mt-2 opacity-60 text-sm">{subheading}</p>
        </div>
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-lg border" style={{ borderColor: theme?.border ?? "#e5e7eb" }}>
              <div className="flex items-center gap-3">
                <FolderDown className="w-5 h-5" style={{ color: theme?.primary ?? "#3b82f6" }} />
                <div>
                  <p className="font-medium text-sm">{item.title}</p>
                  <p className="text-xs opacity-50">{item.description}</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 opacity-40" />
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <a href={buttonUrl} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-medium" style={{ backgroundColor: theme?.primary ?? "#3b82f6" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
