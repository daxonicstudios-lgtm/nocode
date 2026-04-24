import type { BlockProps } from "@/blocks/types";
import { Rocket, BookOpen, Users } from "lucide-react";

export default function Cta241(props: BlockProps) {
  const {
    theme,
    heading = "Choose your path",
    subheading = "Whether you are just starting or scaling, we have the right option for you.",
    items = [
      { title: "Get Started", description: "Create your free account", icon: "rocket", url: "#" },
      { title: "Read the Docs", description: "Explore our guides", icon: "book", url: "#" },
      { title: "Talk to Sales", description: "Get a custom plan", icon: "users", url: "#" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    rocket: <Rocket className="w-5 h-5" />,
    book: <BookOpen className="w-5 h-5" />,
    users: <Users className="w-5 h-5" />,
  };

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <a key={i} href={item.url ?? "#"} className="flex flex-col items-center gap-3 p-6 rounded-xl border transition-colors hover:border-current" style={{ borderColor: i === 0 ? theme?.primary ?? "#6366f1" : theme?.border ?? "#e5e7eb", backgroundColor: i === 0 ? `${theme?.primary ?? "#6366f1"}08` : "transparent" }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${theme?.primary ?? "#6366f1"}15`, color: theme?.primary ?? "#6366f1" }}>
                {iconMap[item.icon ?? "rocket"]}
              </div>
              <span className="font-semibold text-sm">{item.title}</span>
              <span className="text-xs opacity-60">{item.description}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
