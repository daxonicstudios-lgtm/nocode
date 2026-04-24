import type { BlockProps } from "@/blocks/types";
import { Zap, GraduationCap, Building2, User } from "lucide-react";

export default function Cta243(props: BlockProps) {
  const {
    theme,
    heading = "Built for everyone",
    subheading = "No matter your role, we have a solution tailored to your needs.",
    items = [
      { title: "For Individuals", description: "Personal productivity tools", icon: "user", url: "#" },
      { title: "For Startups", description: "Scale fast with automation", icon: "zap", url: "#" },
      { title: "For Enterprise", description: "Custom solutions at scale", icon: "building", url: "#" },
      { title: "For Education", description: "Tools for students and teachers", icon: "grad", url: "#" },
    ],
  } = props;

  const icons: Record<string, React.ReactNode> = {
    user: <User className="w-5 h-5" />,
    zap: <Zap className="w-5 h-5" />,
    building: <Building2 className="w-5 h-5" />,
    grad: <GraduationCap className="w-5 h-5" />,
  };

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <a key={i} href={item.url ?? "#"} className="p-5 rounded-xl border text-center group" style={{ borderColor: theme?.border ?? "#e5e7eb" }}>
              <div className="w-10 h-10 mx-auto rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: `${theme?.primary ?? "#3b82f6"}15`, color: theme?.primary ?? "#3b82f6" }}>
                {icons[item.icon ?? "user"]}
              </div>
              <p className="font-semibold text-sm">{item.title}</p>
              <p className="text-xs opacity-50 mt-1">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
