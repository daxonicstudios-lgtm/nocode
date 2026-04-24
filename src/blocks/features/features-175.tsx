import type { BlockProps } from "@/blocks/types";
import { Terminal, GitBranch, Package } from "lucide-react";

const icons = [Terminal, GitBranch, Package];

export default function Features175(props: BlockProps) {
  const {
    theme,
    heading = "Developer Experience",
    subheading = "Tools developers actually enjoy using",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "CLI Tools", description: "Manage your entire project from the command line." },
      { title: "Git Integration", description: "Preview branches and auto-deploy on merge." },
      { title: "Package Manager", description: "Install plugins and extensions with a single command." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: theme?.background || "#0a0a0a", color: theme?.foreground || "#fafafa" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-50 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: `1px solid ${primary}33` }}>
                <Icon size={24} className="mb-5" style={{ color: primary }} />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="opacity-50 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg font-bold" style={{ border: `1px solid ${primary}`, color: primary }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
