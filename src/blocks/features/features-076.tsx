import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Features076(props: BlockProps) {
  const {
    theme,
    heading = "Before & After",
    subheading = "See the transformation our platform delivers",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Page Speed", description: "From sluggish 4-second loads to blazing 0.8-second renders.", label: "Before: 4.2s", value: "After: 0.8s" },
      { title: "Conversion Rate", description: "Watch your signups climb with optimized landing pages.", label: "Before: 1.2%", value: "After: 4.8%" },
      { title: "Bounce Rate", description: "Keep visitors engaged with faster, more relevant experiences.", label: "Before: 68%", value: "After: 23%" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl overflow-hidden" style={{ backgroundColor: theme?.accent || "#f1f5f9" }}>
              <div className="flex">
                <div className="flex-1 p-5 text-center bg-red-50">
                  <p className="text-xs font-semibold text-red-500 uppercase mb-1">Before</p>
                  <p className="text-2xl font-black text-red-600">{item.label?.replace("Before: ", "")}</p>
                </div>
                <div className="flex items-center px-2">
                  <ArrowRight size={20} style={{ color: theme?.primary || "#6366f1" }} />
                </div>
                <div className="flex-1 p-5 text-center bg-green-50">
                  <p className="text-xs font-semibold text-green-500 uppercase mb-1">After</p>
                  <p className="text-2xl font-black text-green-600">{item.value?.replace("After: ", "")}</p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="opacity-60 text-sm">{item.description}</p>
              </div>
            </div>
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
