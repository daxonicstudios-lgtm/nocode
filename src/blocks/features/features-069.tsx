import type { BlockProps } from "@/blocks/types";
import { Compass, Map, Mountain, Anchor, Wind, Waves } from "lucide-react";

const icons = [Compass, Map, Mountain, Anchor, Wind, Waves];
const gradients = [
  "linear-gradient(135deg, #667eea, #764ba2)",
  "linear-gradient(135deg, #f093fb, #f5576c)",
  "linear-gradient(135deg, #4facfe, #00f2fe)",
  "linear-gradient(135deg, #43e97b, #38f9d7)",
  "linear-gradient(135deg, #fa709a, #fee140)",
  "linear-gradient(135deg, #a18cd1, #fbc2eb)",
];

export default function Features069(props: BlockProps) {
  const {
    theme,
    heading = "Explore Our Features",
    subheading = "Every tool you need for your next adventure",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Navigation", description: "Intuitive navigation tools that guide users through your content seamlessly." },
      { title: "Site Map", description: "Auto-generated site maps keep your pages organized and search-friendly." },
      { title: "Peak Performance", description: "Optimized for the highest Lighthouse scores right out of the box." },
      { title: "Stability", description: "Reliable hosting with automatic failover and disaster recovery built in." },
      { title: "Speed", description: "Edge caching and lazy loading ensure blazing fast page loads everywhere." },
      { title: "Flexibility", description: "Adapt your site to any screen, device, or browser without extra effort." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-2xl p-6 text-white" style={{ background: gradients[i % gradients.length] }}>
                <Icon size={28} className="mb-4 opacity-90" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{item.description}</p>
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
