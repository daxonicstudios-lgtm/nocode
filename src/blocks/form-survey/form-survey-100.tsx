import type { BlockProps } from "@/blocks/types";

export default function FormSurvey100(props: BlockProps) {
  const { theme, heading = "Card-style survey or quiz form", subheading = "Survey or quiz form", buttonText = "Submit" } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-md mx-auto rounded-2xl p-8 shadow-sm" style={{ backgroundColor: theme?.background ?? "#fff" }}>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">{heading}</h2>
          <p className="mt-2 text-sm opacity-60">{subheading}</p>
        </div>
        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Full name" className="w-full px-4 py-3 rounded-xl border text-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} />
          <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-xl border text-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} />
          <button type="submit" className="w-full py-3 rounded-xl font-semibold text-sm text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>{buttonText}</button>
        </form>
      </div>
    </section>
  );
}
