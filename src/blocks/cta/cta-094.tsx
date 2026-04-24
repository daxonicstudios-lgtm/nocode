import type { BlockProps } from "@/blocks/types";
import { GraduationCap, Clock, Users } from "lucide-react";

export default function Cta094(props: BlockProps) {
  const {
    theme,
    heading = "Enroll in our next cohort",
    subheading = "Learn practical skills from industry experts. Flexible schedule, lifetime access.",
    buttonText = "Enroll Now",
    buttonUrl = "#",
    items = [
      { icon: "Clock", title: "8 weeks", description: "Duration" },
      { icon: "Users", title: "30 seats", description: "Available" },
    ],
  } = props;

  const icons: Record<string, React.ReactNode> = {
    Clock: <Clock className="w-5 h-5" />,
    Users: <Users className="w-5 h-5" />,
  };

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-xl mx-auto rounded-2xl border p-8 sm:p-10" style={{ borderColor: theme?.secondary ?? "#e2e8f0" }}>
        <GraduationCap className="w-8 h-8 mb-4" style={{ color: theme?.primary ?? "#7c3aed" }} />
        <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        <p className="mt-2 text-sm opacity-60">{subheading}</p>
        <div className="mt-6 flex gap-6">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span style={{ color: theme?.primary ?? "#7c3aed" }}>{icons[item.icon ?? ""] ?? <Clock className="w-5 h-5" />}</span>
              <div>
                <div className="text-sm font-bold">{item.title}</div>
                <div className="text-xs opacity-50">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
        <a href={buttonUrl} className="inline-block mt-8 w-full text-center py-3.5 rounded-lg text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#7c3aed" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
