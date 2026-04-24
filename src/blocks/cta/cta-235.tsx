import type { BlockProps } from "@/blocks/types";
import { Gem, Lock, CheckCircle } from "lucide-react";

export default function Cta235(props: BlockProps) {
  const {
    theme,
    heading = "Unlock premium content",
    subheading = "Upgrade to access exclusive courses, certifications, and community perks.",
    buttonText = "Go Premium",
    buttonUrl = "#",
    items = [
      { title: "Advanced courses", icon: "check" },
      { title: "Certificates", icon: "check" },
      { title: "Priority support", icon: "check" },
      { title: "Exclusive events", icon: "lock" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-lg mx-auto">
        <div className="rounded-2xl p-6 sm:p-8 text-center" style={{ background: `linear-gradient(135deg, ${theme?.primary ?? "#6366f1"}, ${theme?.accent ?? "#a855f7"})`, color: "#fff" }}>
          <Gem className="w-10 h-10 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
          <p className="mt-2 text-sm opacity-80">{subheading}</p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-left">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                {item.icon === "lock" ? <Lock className="w-4 h-4 opacity-50" /> : <CheckCircle className="w-4 h-4" />}
                <span className={item.icon === "lock" ? "opacity-50" : ""}>{item.title}</span>
              </div>
            ))}
          </div>
          <a href={buttonUrl} className="inline-block mt-6 w-full py-3 rounded-lg font-medium text-sm" style={{ backgroundColor: "#fff", color: theme?.primary ?? "#6366f1" }}>
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
