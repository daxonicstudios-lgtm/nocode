import type { BlockProps } from "@/blocks/types";
import { ChevronDown } from "lucide-react";

export default function Features138(props: BlockProps) {
  const {
    theme,
    heading = "Everything You Need",
    subheading = "Expand each feature for a detailed description",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Drag-and-Drop Builder", description: "Build layouts by placing pre-designed blocks on a canvas. Resize, reorder, and customize every element with a visual editor that requires zero coding knowledge." },
      { title: "Responsive Preview", description: "See exactly how your site looks on desktop, tablet, and mobile. Switch between viewports in real time while editing." },
      { title: "Content Management", description: "Store structured content in a flexible CMS. Define custom fields, create collections, and reference content across pages." },
      { title: "Form Builder", description: "Create contact forms, surveys, and sign-up flows. Submissions are stored in your dashboard and can trigger email notifications or webhooks." },
      { title: "Version History", description: "Every edit is saved automatically. Restore any previous version with one click. Compare changes side by side before reverting." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="divide-y" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
          {items.map((item, i) => (
            <details key={i} className="group py-4">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{i + 1}</span>
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <ChevronDown size={18} className="opacity-40 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 ml-11 opacity-60 text-sm leading-relaxed">{item.description}</p>
            </details>
          ))}
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
