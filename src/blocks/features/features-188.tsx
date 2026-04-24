import type { BlockProps } from "@/blocks/types";
import { Code2, Server, Bug } from "lucide-react";

const icons = [Code2, Server, Bug];

export default function Features188(props: BlockProps) {
  const {
    theme,
    heading = "Developer Toolkit",
    subheading = "Ship faster with integrated dev tools",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Code Editor", description: "Full-featured IDE with syntax highlighting and autocomplete." },
      { title: "Serverless Functions", description: "Deploy backend logic without managing infrastructure." },
      { title: "Error Tracking", description: "Catch and resolve bugs before your users notice them." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-60 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl p-8 border-2 border-dashed" style={{ borderColor: theme?.foreground ? `${theme.foreground}20` : "#d1d5db" }}>
                <Icon size={24} className="mb-4" style={{ color: primary }} />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
