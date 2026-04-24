import type { BlockProps } from "@/blocks/types";
import { CheckCircle, Rocket, Lock, BarChart3 } from "lucide-react";

const icons = [Rocket, Lock, BarChart3, CheckCircle];

export default function Features053(props: BlockProps) {
  const {
    theme,
    heading = "Everything You Need",
    subheading = "Powerful tools designed for results",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl = "https://placehold.co/520x380",
    items = [
      { title: "Launch Faster", description: "Pre-built templates and smart defaults get you from idea to live site in minutes, not weeks." },
      { title: "Stay Protected", description: "Automatic backups, SSL certificates, and DDoS protection included with every plan." },
      { title: "Understand Your Data", description: "Visual dashboards show traffic, engagement, and conversion metrics at a glance." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="space-y-20">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const isEven = i % 2 === 0;
            return (
              <div key={i} className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-10 items-center`}>
                <div className="w-full md:w-1/2">
                  <img src={imageUrl} alt={item.title || ""} className="w-full rounded-2xl object-cover" />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <ul className="space-y-3">
                    {(item.description || "").split(". ").filter(Boolean).map((point, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle size={18} className="mt-1 shrink-0" style={{ color: theme?.primary || "#6366f1" }} />
                        <span className="opacity-70">{point.replace(/\.$/, "")}.</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
