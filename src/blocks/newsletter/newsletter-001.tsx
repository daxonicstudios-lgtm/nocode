import type { BlockProps } from "@/blocks/types";

export default function Newsletter001(props: BlockProps) {
  const { theme, heading = "Stay in the loop", subheading = "Occasional, well-considered emails. Unsubscribe any time.", buttonText = "Subscribe" } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{heading}</h2>
        <p className="mt-3 text-sm opacity-70">{subheading}</p>
        <form className="mt-8 flex flex-col sm:flex-row gap-3">
          <input type="email" placeholder="you@example.com" className="flex-1 px-4 py-3 rounded-full border text-sm bg-transparent" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} />
          <button type="button" className="px-6 py-3 rounded-full text-white text-sm font-medium" style={{ backgroundColor: theme?.primary ?? "#000" }}>{buttonText}</button>
        </form>
      </div>
    </section>
  );
}
