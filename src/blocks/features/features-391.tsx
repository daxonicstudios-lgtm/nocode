import type { BlockProps } from "@/blocks/types";

const emojis = ["🚀", "🎯", "💡", "🔥", "⚡", "🛡️"];

export default function Features391(props: BlockProps) {
  const {
    theme,
    heading = "Features That Pop",
    subheading = "Fun meets functional in every detail",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Launch Fast", description: "Go from idea to live website in under five minutes." },
      { title: "Stay On Target", description: "Goal tracking keeps your team aligned and focused." },
      { title: "Bright Ideas", description: "AI suggestions spark creativity when you need it most." },
      { title: "Hot Streak", description: "Momentum tools that reward consistent engagement." },
      { title: "Instant Power", description: "One-click automations that save hours every week." },
      { title: "Safe Space", description: "Enterprise security that protects without slowing down." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#fefefe", color: theme?.foreground || "#1f2937" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="rounded-xl p-6 border" style={{ borderColor: `${theme?.primary || "#6366f1"}22` }}>
              <div className="text-4xl mb-3">{emojis[i % emojis.length]}</div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
