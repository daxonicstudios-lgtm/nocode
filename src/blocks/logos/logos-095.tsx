import type { BlockProps } from "@/blocks/types";
const DEFAULT_ITEMS = [
  { title: "Acme Inc" }, { title: "Globex" }, { title: "Initech" },
  { title: "Umbrella" }, { title: "Stark" }, { title: "Wayne" },
  { title: "Oscorp" }, { title: "Cyberdyne" },
];
export default function Logos095(props: BlockProps) {
  const { theme, heading = "Logo grid with heading", subheading = "Powering the best teams", items = DEFAULT_ITEMS } = props;
  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">{heading}</h2>
          <p className="mt-2 text-sm opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {items.slice(0, 8).map((logo, i) => (
            <div key={i} className="h-16 rounded-xl flex items-center justify-center text-sm font-semibold opacity-40" style={{ backgroundColor: theme?.background ?? "#fff" }}>{logo.title}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
