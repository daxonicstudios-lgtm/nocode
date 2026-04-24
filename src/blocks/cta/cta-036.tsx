import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "10K+", description: "Active Users" },
  { title: "99.9%", description: "Uptime" },
  { title: "4.9/5", description: "Rating" },
];

export default function Cta036(props: BlockProps) {
  const { theme, heading = "Unlock your potential", subheading = "Trusted by industry leaders worldwide.", buttonText = "Start Building", buttonUrl = "#", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {items.slice(0, 3).map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-black" style={{ color: theme?.primary }}>{stat.title}</div>
              <div className="text-sm opacity-50 mt-1">{stat.description}</div>
            </div>
          ))}
        </div>
        <a href={buttonUrl} className="mt-10 inline-block px-8 py-3.5 rounded-full font-bold text-white text-sm" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
