import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Features151(props: BlockProps) {
  const {
    theme,
    heading = "What We Offer",
    subheading = "Simple solutions for complex problems",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Instant Deployment", description: "Push your project live in seconds with zero configuration." },
      { title: "Smart Caching", description: "Automatic cache management keeps your content fresh and fast." },
      { title: "Team Collaboration", description: "Invite your team and work together in real time." },
      { title: "Version Control", description: "Track every change and roll back with one click." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold mb-2">{heading}</h2>
        <p className="opacity-50 mb-16 text-base">{subheading}</p>
        <div className="space-y-12">
          {items.map((item, i) => (
            <div key={i}>
              <h3 className="text-lg font-medium mb-1">{item.title}</h3>
              <p className="opacity-50 text-sm leading-relaxed max-w-md">{item.description}</p>
            </div>
          ))}
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-flex items-center gap-2 mt-14 text-sm font-medium" style={{ color: theme?.primary || "#6366f1" }}>
            {buttonText} <ArrowRight size={14} />
          </a>
        )}
      </div>
    </section>
  );
}
