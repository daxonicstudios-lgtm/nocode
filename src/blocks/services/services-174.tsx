import type { BlockProps } from "@/blocks/types";
import { Code, Palette, Rocket, Headphones } from "lucide-react";

const icons = [Code, Palette, Rocket, Headphones];
const DEFAULT_ITEMS = [
  { title: "Web Development", description: "Custom websites built with modern technologies." },
  { title: "UI/UX Design", description: "Beautiful, user-centered designs that convert." },
  { title: "Digital Marketing", description: "Grow your online presence and reach more customers." },
  { title: "24/7 Support", description: "Round-the-clock assistance whenever you need it." },
];

export default function Services174(props: BlockProps) {
  const { theme, heading = "Expertise", subheading = "Professional solutions tailored to your needs.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.slice(0, 4).map((svc, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-2xl p-6 border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                <Icon className="w-8 h-8 mb-4" style={{ color: theme?.primary }} />
                <h3 className="font-semibold text-lg">{svc.title}</h3>
                <p className="mt-2 text-sm opacity-60">{svc.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
