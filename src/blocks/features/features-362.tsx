import type { BlockProps } from "@/blocks/types";
import { Terminal, Code2, Braces, Hash } from "lucide-react";

const icons = [Terminal, Code2, Braces, Hash];

export default function Features362(props: BlockProps) {
  const {
    theme,
    heading = "SYSTEM_FEATURES",
    subheading = "// monospaced. minimal. mechanical.",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "EXEC", description: "Run commands across distributed nodes simultaneously." },
      { title: "PARSE", description: "Process any data format with zero configuration." },
      { title: "BUILD", description: "Compile and deploy in under 30 seconds flat." },
      { title: "INDEX", description: "Search billions of records in milliseconds." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#fff", color: theme?.foreground || "#000" }} className="py-16 px-4 sm:px-6 lg:px-8 font-mono">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tighter">{heading}</h2>
          <p className="text-sm mt-2 opacity-70">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ backgroundColor: theme?.foreground || "#000" }}>
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="p-6" style={{ backgroundColor: theme?.background || "#fff" }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs opacity-40">[{String(i).padStart(2, "0")}]</span>
                  <Icon size={16} strokeWidth={3} />
                  <h3 className="text-lg font-bold uppercase">{item.title}</h3>
                </div>
                <p className="text-xs leading-loose opacity-70">{item.description}</p>
                <div className="mt-3 text-xs opacity-30">{">"} status: active</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
