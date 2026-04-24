import type { BlockProps } from "@/blocks/types";
export default function Newsletter124(props: BlockProps) {
  const { theme, heading = "Dark newsletter section", subheading = "No spam. Unsubscribe anytime.", buttonText = "Subscribe" } = props;
  return (
    <section className="px-4 py-20" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#e2e8f0" }}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-xl text-sm bg-white/10 border border-white/10 text-white placeholder:text-white/40" />
          <button type="submit" className="px-6 py-3 rounded-xl font-semibold text-sm bg-white shrink-0" style={{ color: theme?.primary ?? "#0f172a" }}>{buttonText}</button>
        </form>
      </div>
    </section>
  );
}
