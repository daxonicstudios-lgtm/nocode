import type { BlockProps } from "@/blocks/types";
import { Mail } from "lucide-react";

export default function Contact101(props: BlockProps) {
  const { theme, heading = "Have Questions?", subheading = "Our team is here to help.", buttonText = "Get in Touch" } = props;

  return (
    <section className="px-4 py-24" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#e2e8f0" }}>
      <div className="max-w-lg mx-auto text-center">
        <Mail className="w-10 h-10 mx-auto mb-4 opacity-60" />
        <h2 className="text-3xl sm:text-4xl font-bold text-white">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <form className="mt-8 space-y-3" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Your email" className="w-full px-4 py-3 rounded-xl text-sm bg-white/10 border border-white/10 text-white placeholder:text-white/40" />
          <textarea placeholder="Your message" rows={3} className="w-full px-4 py-3 rounded-xl text-sm bg-white/10 border border-white/10 text-white placeholder:text-white/40 resize-none" />
          <button type="submit" className="w-full py-3 rounded-xl font-semibold text-sm bg-white" style={{ color: theme?.primary ?? "#0f172a" }}>{buttonText}</button>
        </form>
      </div>
    </section>
  );
}
