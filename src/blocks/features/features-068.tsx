import type { BlockProps } from "@/blocks/types";
import { Inbox, Send, Archive, Tag, Search, Filter, Star, Clock } from "lucide-react";

const icons = [Inbox, Send, Archive, Tag, Search, Filter, Star, Clock];

export default function Features068(props: BlockProps) {
  const {
    theme,
    heading = "Packed With Features",
    subheading = "Small tools that make a big difference",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Inbox Zero", description: "Smart inbox management that helps you reach zero unread every day." },
      { title: "Quick Send", description: "Send messages, files, and updates in one tap." },
      { title: "Auto Archive", description: "Old conversations are neatly organized and searchable." },
      { title: "Smart Tags" },
      { title: "Global Search" },
      { title: "Advanced Filters" },
      { title: "Favorites" },
      { title: "Scheduled Sends" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const hasDesc = !!item.description;
            return hasDesc ? (
              <div key={i} className="col-span-2 rounded-2xl p-6" style={{ backgroundColor: theme?.accent || "#f1f5f9" }}>
                <Icon size={22} className="mb-3" style={{ color: theme?.primary || "#6366f1" }} />
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="opacity-60 text-sm">{item.description}</p>
              </div>
            ) : (
              <div key={i} className="rounded-2xl p-4 flex flex-col items-center justify-center text-center" style={{ backgroundColor: theme?.accent || "#f1f5f9" }}>
                <Icon size={24} className="mb-2" style={{ color: theme?.primary || "#6366f1" }} />
                <span className="text-sm font-medium">{item.title}</span>
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
