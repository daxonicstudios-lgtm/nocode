import type { BlockProps } from "@/blocks/types";

export default function FormContact030(props: BlockProps) {
  const { theme, heading = "Contact form", subheading = "Contact form", buttonText = "Submit" } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">{heading}</h2>
          <p className="mt-2 text-sm opacity-60">{subheading}</p>
        </div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Full name" className="w-full px-4 py-3 rounded-xl border text-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} />
          <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-xl border text-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} />
          <input type="text" placeholder="Additional info" className="w-full px-4 py-3 rounded-xl border text-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} />
          <button type="submit" className="w-full py-3 rounded-xl font-semibold text-sm text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>{buttonText}</button>
        </form>
      </div>
    </section>
  );
}
