import type { BlockProps } from "@/blocks/types";
import { UserPlus, Palette, Rocket } from "lucide-react";

const icons = [UserPlus, Palette, Rocket];

const DEFAULT_ITEMS = [
  { title: "Register", description: "Create your account and verify your email." },
  { title: "Design", description: "Pick a template and customize it to perfection." },
  { title: "Launch", description: "Hit publish and share your creation with the world." },
];

export default function Steps129(props: BlockProps) {
  const { theme, heading = "From Start to Finish", subheading = "No technical skills required.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.slice(0, 3).map((step, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto" style={{ backgroundColor: theme?.accent ?? "#ede9fe" }}>
                  <Icon className="w-6 h-6" style={{ color: theme?.primary ?? "#6366f1" }} />
                </div>
                <h3 className="mt-4 font-semibold text-lg">{step.title}</h3>
                <p className="mt-2 text-sm opacity-60">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
