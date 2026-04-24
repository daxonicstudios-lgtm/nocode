import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight, Pen, Layout, Image, Type, Columns3 } from "lucide-react";

const icons = [Pen, Layout, Image, Type, Columns3, ArrowUpRight];

export default function Features070(props: BlockProps) {
  const {
    theme,
    heading = "Editorial Suite",
    subheading = "Professional publishing tools for content creators",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Rich Editor", description: "A distraction-free writing experience with Markdown support and inline formatting." },
      { title: "Page Layouts", description: "Choose from dozens of pre-designed page templates for blogs, landing pages, and more." },
      { title: "Media Library", description: "Organize, crop, and optimize images and videos from a central media hub." },
      { title: "Custom Fonts", description: "Upload your own fonts or choose from our curated collection of 800+ typefaces." },
      { title: "Grid System", description: "Flexible column layouts that adapt beautifully from mobile to ultra-wide screens." },
      { title: "Quick Publish", description: "Review, approve, and publish content with a streamlined editorial workflow." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: theme?.foreground ? `${theme.foreground}15` : "#e5e7eb" }}>
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="p-8" style={{ backgroundColor: theme?.background || "#ffffff" }}>
                <div className="flex items-start justify-between mb-4">
                  <Icon size={22} style={{ color: theme?.primary || "#6366f1" }} />
                  <ArrowUpRight size={16} className="opacity-30" />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
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
