import type { BlockProps } from "@/blocks/types";
import { CheckCircle } from "lucide-react";

export default function Features107(props: BlockProps) {
  const {
    theme,
    heading = "Getting Started",
    subheading = "Follow these steps to launch your first project",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Sign Up", description: "Create your free account in seconds." },
      { title: "Choose a Template", description: "Pick from hundreds of professionally designed layouts." },
      { title: "Customize", description: "Adjust colors, fonts, images, and content to match your brand." },
      { title: "Publish", description: "Hit publish and share your site with the world." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="space-y-0">
          {items.map((item, i) => {
            const pct = ((i + 1) / items.length) * 100;
            return (
              <div key={i} className="relative">
                <div className="flex items-start gap-4 py-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
                    <CheckCircle size={18} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="opacity-60 text-sm">{item.description}</p>
                    <div className="mt-3 h-2 rounded-full overflow-hidden" style={{ backgroundColor: theme?.accent || "#e5e7eb" }}>
                      <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: theme?.primary || "#6366f1" }} />
                    </div>
                    <span className="text-xs opacity-50 mt-1 inline-block">{pct}% complete</span>
                  </div>
                </div>
                {i < items.length - 1 && <div className="ml-5 w-px h-4" style={{ backgroundColor: theme?.accent || "#e5e7eb" }} />}
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-8">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
