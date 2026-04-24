import type { BlockProps } from "@/blocks/types";

export default function Events002(props: BlockProps) {
  const { theme, heading = "Summit 2026", subheading = "Two days. 40 speakers. 1,200 builders.", bodyText = "October 14-15, 2026 · Landmark Centre, Lagos", buttonText = "Get your ticket", buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#fff" }} className="px-5 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-widest opacity-70">Featured event</p>
        <h2 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight">{heading}</h2>
        <p className="mt-4 text-xl opacity-80">{subheading}</p>
        <p className="mt-8 text-sm opacity-70">{bodyText}</p>
        <a href={buttonUrl} className="mt-10 inline-block px-8 py-3.5 rounded-full bg-white text-sm font-semibold" style={{ color: theme?.primary ?? "#0f172a" }}>{buttonText}</a>
      </div>
    </section>
  );
}
