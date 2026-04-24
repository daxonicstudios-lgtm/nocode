import type { BlockProps } from "@/blocks/types";
import { CheckCircle, Star, Heart, Trophy } from "lucide-react";

export default function Cta110(props: BlockProps) {
  const {
    theme,
    heading = "Why Teams Choose Us",
    buttonText = "Join Them Today",
    buttonUrl = "#",
    items = [
      { title: "99.9% Uptime", icon: "check" },
      { title: "5-Star Support", icon: "star" },
      { title: "Loved by Users", icon: "heart" },
      { title: "Award Winning", icon: "trophy" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    check: <CheckCircle className="w-8 h-8" />,
    star: <Star className="w-8 h-8" />,
    heart: <Heart className="w-8 h-8" />,
    trophy: <Trophy className="w-8 h-8" />,
  };

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">{heading}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {items.map((item, i) => (
            <div key={i} className="p-5 rounded-xl border text-center">
              <div className="mb-2 flex justify-center" style={{ color: theme?.primary || "#2563eb" }}>
                {iconMap[item.icon || "check"] || <CheckCircle className="w-8 h-8" />}
              </div>
              <p className="font-semibold text-sm">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-bold hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
