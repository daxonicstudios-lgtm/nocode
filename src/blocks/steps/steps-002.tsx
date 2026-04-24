import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Sign up", description: "No credit card required." },
  { title: "Import your content", description: "Or start fresh — both work." },
  { title: "Customize the look", description: "Theme, fonts, colors, layout." },
  { title: "Go live", description: "On your domain, instantly." },
];

export default function Steps002(props: BlockProps) {
  const { theme, heading = "Four steps to a live site", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-12">{heading}</h2>
        <ol className="relative border-l-2 ml-4 space-y-10" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
          {items.slice(0, 4).map((s, i) => (
            <li key={i} className="pl-6 relative">
              <div className="absolute -left-[13px] top-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold text-white" style={{ backgroundColor: theme?.primary ?? "#000" }}>
                {i + 1}
              </div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm opacity-70">{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
