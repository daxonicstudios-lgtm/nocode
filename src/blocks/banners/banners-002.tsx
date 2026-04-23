import type { BlockProps } from "@/blocks/types";

export default function Banners002(props: BlockProps) {
  const { theme, heading = "Only 48 hours left", subheading = "Annual plans 40% off. Ends Sunday midnight.", buttonText = "Upgrade now", buttonUrl = "#" } = props;
  const hours = 23, mins = 14, secs = 38;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#fbbf24" }} className="px-5 py-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-bold text-lg">{heading}</p>
          <p className="text-sm opacity-90">{subheading}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-white">
            {[[hours, "h"], [mins, "m"], [secs, "s"]].map(([n, l], i) => (
              <div key={i} className="bg-black/80 rounded px-3 py-1.5 min-w-[48px] text-center">
                <span className="font-bold">{n}</span><span className="text-xs opacity-70">{l}</span>
              </div>
            ))}
          </div>
          <a href={buttonUrl} className="px-5 py-2.5 rounded-full bg-black text-white text-sm font-semibold">{buttonText}</a>
        </div>
      </div>
    </section>
  );
}
