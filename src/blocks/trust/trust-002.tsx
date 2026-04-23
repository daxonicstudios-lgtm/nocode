import type { BlockProps } from "@/blocks/types";

export default function Trust002(props: BlockProps) {
  const { theme, heading = "As featured in", items = [{ title: "TechCrunch" }, { title: "Forbes" }, { title: "Wired" }, { title: "The Verge" }, { title: "Fast Co" }] } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-14">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-xs font-semibold uppercase tracking-widest opacity-50 mb-6">{heading}</p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 items-center">
          {items.slice(0, 5).map((p, i) => (
            <span key={i} className="text-lg font-semibold opacity-60 italic tracking-tight">{p.title}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
