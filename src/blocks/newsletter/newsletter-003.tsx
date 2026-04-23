import type { BlockProps } from "@/blocks/types";

export default function Newsletter003(props: BlockProps) {
  const { theme, heading = "Get the guide: Web design for SMEs", bodyText = "A 40-page PDF with layouts, fonts, and image guides. Free when you subscribe.", buttonText = "Send me the guide" } = props;

  return (
    <section style={{ backgroundColor: theme?.primary ?? "#111827", color: "#fff" }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{heading}</h2>
        <p className="mt-4 text-base opacity-80">{bodyText}</p>
        <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" placeholder="email address" className="flex-1 px-5 py-3 rounded-full bg-white/10 text-sm placeholder:text-white/50 border border-white/10" />
          <button type="button" className="px-6 py-3 rounded-full bg-white text-sm font-semibold" style={{ color: theme?.primary ?? "#111827" }}>{buttonText}</button>
        </form>
      </div>
    </section>
  );
}
