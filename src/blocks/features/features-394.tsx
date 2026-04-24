import type { BlockProps } from "@/blocks/types";
import { Folder, FolderOpen, FileCode, FileCog } from "lucide-react";

const icons = [Folder, FolderOpen, FileCode, FileCog];

export default function Features394(props: BlockProps) {
  const {
    theme,
    heading = "Feature Library",
    subheading = "Organized and ready to deploy",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Templates", description: "Pre-built layouts for every industry and use case." },
      { title: "Components", description: "Reusable building blocks that maintain consistency." },
      { title: "Code Export", description: "Download clean, production-ready source code." },
      { title: "Config Files", description: "Environment settings that deploy in one click." },
    ],
  } = props;

  const accent = theme?.primary || "#3b82f6";

  return (
    <section style={{ backgroundColor: theme?.background || "#f8fafc", color: theme?.foreground || "#1e293b" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60">{subheading}</p>
        </div>
        <div className="space-y-0">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const isActive = i === 1;
            return (
              <div key={i}>
                <div className="inline-block px-5 py-2 rounded-t-lg text-sm font-medium -mb-px relative z-10" style={{ backgroundColor: isActive ? accent : `${accent}15`, color: isActive ? "#fff" : accent }}>
                  <div className="flex items-center gap-2">
                    <Icon size={14} />
                    <span>{item.title}</span>
                  </div>
                </div>
                {isActive && (
                  <div className="rounded-lg rounded-tl-none p-6 border-2" style={{ borderColor: accent }}>
                    <p className="text-sm opacity-70 leading-relaxed">{item.description}</p>
                    {buttonText && (
                      <a href={buttonUrl} className="inline-block mt-3 text-sm font-medium" style={{ color: accent }}>{buttonText} &rarr;</a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
