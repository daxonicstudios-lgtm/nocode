import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Bookmark, FileText, PenTool, Share2, Inbox } from "lucide-react";

const icons = [Bookmark, FileText, PenTool, Share2, Inbox, ArrowRight];

export default function Features084(props: BlockProps) {
  const {
    theme,
    heading = "Content Management",
    subheading = "Create, organize, and publish with ease",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Collections", description: "Group related content into smart collections that update automatically." },
      { title: "Templates", description: "Start from professionally designed templates for any content type." },
      { title: "Visual Editor", description: "Edit directly on the page with a what-you-see-is-what-you-get editor." },
      { title: "Distribution", description: "Publish to your site, email list, and social channels in one click." },
      { title: "Content Inbox", description: "Review submissions and drafts from a centralized content queue." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <style>{`
        .underline-084 h3::after {
          content: '';
          display: block;
          width: 0;
          height: 2px;
          transition: width 0.3s ease;
          margin-top: 4px;
        }
        .underline-084:hover h3::after { width: 100%; }
      `}</style>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="underline-084 cursor-pointer group">
                <Icon size={28} className="mb-4" style={{ color: theme?.primary || "#6366f1" }} />
                <h3 className="font-bold text-lg mb-2" style={{ color: theme?.foreground }}>
                  {item.title}
                  <span className="block h-0.5 w-0 group-hover:w-full transition-all duration-300" style={{ backgroundColor: theme?.primary || "#6366f1" }} />
                </h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
              {buttonText} <ArrowRight size={18} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
