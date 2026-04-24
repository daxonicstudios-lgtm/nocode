import type { BlockProps } from "@/blocks/types";
export default function Newsletter043(props: BlockProps) {
  const { theme, heading = "Inline newsletter signup", subheading = "Get the latest updates delivered to your inbox.", buttonText = "Subscribe" } = props;
  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="you@example.com" className="flex-1 px-4 py-3 rounded-xl border text-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} />
          <button type="submit" className="px-6 py-3 rounded-xl font-semibold text-sm text-white shrink-0" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>{buttonText}</button>
        </form>
      </div>
    </section>
  );
}
