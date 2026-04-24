import type { BlockProps } from "@/blocks/types";

export default function Cta164(props: BlockProps) {
  const { theme, heading = "Supercharge your growth", subheading = "Free forever plan available.", buttonText = "Subscribe", buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-xl border text-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb", backgroundColor: theme?.background ?? "#fff" }} />
          <button type="submit" className="px-6 py-3 rounded-xl font-semibold text-sm text-white shrink-0" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
