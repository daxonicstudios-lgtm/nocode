import type { BlockProps } from "@/blocks/types";

export default function Contact286(props: BlockProps) {
  const { theme, heading = "We'd Love to Hear From You", subheading = "Fill out the form and we'll get back to you.", buttonText = "Send" } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-3xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <form className="mt-8 space-y-3 text-left" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-xl border text-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb", backgroundColor: theme?.background ?? "#fff" }} />
          <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border text-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb", backgroundColor: theme?.background ?? "#fff" }} />
          <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 rounded-xl border text-sm resize-none" style={{ borderColor: theme?.secondary ?? "#e5e7eb", backgroundColor: theme?.background ?? "#fff" }} />
          <button type="submit" className="w-full py-3 rounded-xl font-semibold text-sm text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>{buttonText}</button>
        </form>
      </div>
    </section>
  );
}
