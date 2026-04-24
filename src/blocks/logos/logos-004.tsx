import type { BlockProps } from "@/blocks/types";
const DEFAULT_ITEMS = [
  { title: "Company A" }, { title: "Company B" }, { title: "Company C" },
  { title: "Company D" }, { title: "Company E" }, { title: "Company F" },
];
export default function Logos004(props: BlockProps) {
  const { theme, heading = "Logo row — trusted by", items = DEFAULT_ITEMS } = props;
  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-sm font-medium opacity-40 mb-8">{heading}</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {items.slice(0, 6).map((logo, i) => (
            <div key={i} className="w-24 h-10 rounded flex items-center justify-center text-xs font-bold opacity-30" style={{ backgroundColor: theme?.accent ?? "#f1f5f9" }}>{logo.title}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
