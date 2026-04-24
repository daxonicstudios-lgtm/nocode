import type { BlockProps } from "@/blocks/types";
import { Users, MessageCircle, Share2, UserPlus } from "lucide-react";

const icons = [Users, MessageCircle, Share2, UserPlus];

export default function Features256(props: BlockProps) {
  const {
    theme,
    heading = "Collaborate Without Friction",
    subheading = "Work together in real-time, no matter where your team is based",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Real-Time Editing", description: "Multiple team members can edit simultaneously with live cursors.", value: "5" },
      { title: "Threaded Comments", description: "Discuss changes in context without switching to another tool.", value: "3" },
      { title: "Share Anywhere", description: "Generate shareable links with granular view, edit, or admin permissions.", value: "4" },
      { title: "Guest Access", description: "Invite clients and contractors without giving them full access.", value: "2" },
    ],
  } = props;

  const avatarColors = ["#6366f1", "#ec4899", "#f59e0b", "#10b981", "#ef4444"];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const count = parseInt(item.value || "3", 10);
            return (
              <div key={i} className="rounded-xl border p-6" style={{ borderColor: theme?.primary ? `${theme.primary}25` : "#e5e7eb" }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Icon size={20} style={{ color: theme?.primary || "#6366f1" }} />
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <div className="flex -space-x-2">
                    {Array.from({ length: Math.min(count, 5) }).map((_, j) => (
                      <div key={j} className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: avatarColors[j % avatarColors.length], borderColor: theme?.background || "#fff" }}>
                        {String.fromCharCode(65 + j)}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
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
