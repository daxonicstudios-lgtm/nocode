import type { BlockProps } from "@/blocks/types";
import { Image, FileText, Share2 } from "lucide-react";

const icons = [Image, FileText, Share2];

export default function Features181(props: BlockProps) {
  const {
    theme,
    heading = "Content Management",
    subheading = "Create, organize, and publish with ease",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Media Library", description: "Upload, organize, and transform images and videos in one place.", imageUrl: "" },
      { title: "Rich Editor", description: "Write content with a powerful block-based text editor.", imageUrl: "" },
      { title: "Social Sharing", description: "Auto-generate Open Graph tags and social preview cards.", imageUrl: "" },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-60 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl overflow-hidden shadow-lg" style={{ backgroundColor: theme?.foreground ? `${theme.foreground}06` : "#f9fafb" }}>
                <div className="h-40 flex items-center justify-center" style={{ backgroundColor: `${primary}10` }}>
                  <Icon size={40} style={{ color: primary }} className="opacity-40" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
