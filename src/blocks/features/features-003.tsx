import type { BlockProps } from "@/blocks/types";
import { Layers, Rocket, Database, Settings } from "lucide-react";

const icons = [Layers, Rocket, Database, Settings];

export default function Features003(props: BlockProps) {
  const {
    theme,
    heading = "Built for Scale",
    subheading = "Infrastructure that grows with your ambition",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Modular Architecture", description: "Compose your stack from independent, reusable modules that slot together cleanly." },
      { title: "Zero-Downtime Deploys", description: "Ship updates any time without interrupting your users or your revenue." },
      { title: "Managed Database", description: "Automatic backups, point-in-time recovery, and read replicas out of the box." },
      { title: "Configurable Pipelines", description: "Build, test, and deploy pipelines tailored to your workflow in minutes." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#0f172a", color: theme?.foreground || "#f1f5f9" }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">{heading}</h2>
          <p className="text-lg opacity-60 max-w-lg mx-auto">{subheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex gap-5">
                <div className="shrink-0">
                  <Icon size={40} style={{ color: theme?.primary || "#818cf8" }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="opacity-50 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-7 py-3 rounded-lg font-semibold" style={{ backgroundColor: theme?.primary || "#818cf8", color: "#fff" }}>
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
