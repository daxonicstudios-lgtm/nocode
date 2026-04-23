import type { BlockProps } from "@/blocks/types";

export default function Contact001(props: BlockProps) {
  const { theme, heading = "Get in touch", subheading = "We reply within one business day.", buttonText = "Send message" } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{heading}</h2>
          <p className="mt-3 text-sm opacity-70">{subheading}</p>
        </div>
        <form className="space-y-4">
          <input placeholder="Your name" className="w-full px-4 py-3 rounded-lg border text-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb", backgroundColor: "transparent" }} />
          <input placeholder="Email" type="email" className="w-full px-4 py-3 rounded-lg border text-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb", backgroundColor: "transparent" }} />
          <textarea placeholder="How can we help?" rows={5} className="w-full px-4 py-3 rounded-lg border text-sm resize-none" style={{ borderColor: theme?.secondary ?? "#e5e7eb", backgroundColor: "transparent" }} />
          <button type="button" className="w-full py-3 rounded-full text-white font-medium text-sm" style={{ backgroundColor: theme?.primary ?? "#000" }}>{buttonText}</button>
        </form>
      </div>
    </section>
  );
}
