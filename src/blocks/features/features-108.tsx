import type { BlockProps } from "@/blocks/types";

export default function Features108(props: BlockProps) {
  const {
    theme,
    heading = "Release History",
    subheading = "A compact view of our latest updates",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Version 4.0", description: "Complete redesign with dark mode support and new dashboard.", label: "Latest" },
      { title: "Version 3.5", description: "Added team workspaces and role-based permissions." },
      { title: "Version 3.0", description: "Introduced AI-powered content suggestions." },
      { title: "Version 2.0", description: "Launched the visual editor with drag-and-drop blocks." },
      { title: "Version 1.0", description: "Initial release with basic page builder." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="relative border-l-2 pl-6 ml-3 space-y-8" style={{ borderColor: theme?.primary || "#6366f1" }}>
          {items.map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[33px] top-1 w-3 h-3 rounded-full" style={{ backgroundColor: theme?.primary || "#6366f1" }} />
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                {item.label && (
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: theme?.accent || "#8b5cf6" }}>{item.label}</span>
                )}
              </div>
              <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
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
