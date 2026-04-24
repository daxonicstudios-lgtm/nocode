import type { BlockProps } from "@/blocks/types";

const noteColors = ["#fef08a", "#bbf7d0", "#bfdbfe", "#fecaca", "#e9d5ff", "#fed7aa"];
const rotations = ["-2deg", "1deg", "-1deg", "2deg", "-1.5deg", "1.5deg"];

export default function Features245(props: BlockProps) {
  const {
    theme,
    heading = "Feature Notes",
    subheading = "Fresh ideas pinned to the board",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Quick Search", description: "Find anything across your workspace in milliseconds." },
      { title: "Drag & Drop", description: "Rearrange elements with intuitive gestures." },
      { title: "Smart Tags", description: "Auto-categorize content with AI-powered labels." },
      { title: "Live Collab", description: "See teammates editing in real time with cursors." },
      { title: "Version History", description: "Roll back to any previous state with one click." },
      { title: "Export PDF", description: "Generate polished documents from any view." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background || "#f5f5f4", color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-base opacity-70 max-w-lg mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="p-6 rounded-sm shadow-md" style={{
              backgroundColor: noteColors[i % noteColors.length],
              transform: `rotate(${rotations[i % rotations.length]})`,
              color: "#1c1917",
            }}>
              <h3 className="font-bold text-base mb-2 underline decoration-2" style={{ textDecorationColor: `${primary}80` }}>{item.title}</h3>
              <p className="text-sm leading-relaxed opacity-80" style={{ fontFamily: "'Georgia', serif" }}>{item.description}</p>
            </div>
          ))}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
