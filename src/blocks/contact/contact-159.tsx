import type { BlockProps } from "@/blocks/types";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact159(props: BlockProps) {
  const { theme, heading = "Drop Us a Line", subheading = "We typically respond within 24 hours.", buttonText = "Send Message" } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-sm"><Mail className="w-5 h-5" style={{ color: theme?.primary }} /> hello@example.com</div>
            <div className="flex items-center gap-3 text-sm"><Phone className="w-5 h-5" style={{ color: theme?.primary }} /> +1 (555) 123-4567</div>
            <div className="flex items-center gap-3 text-sm"><MapPin className="w-5 h-5" style={{ color: theme?.primary }} /> 123 Business Ave, Suite 100</div>
          </div>
        </div>
        <div className="flex-1">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border text-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} />
            <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border text-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} />
            <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 rounded-xl border text-sm resize-none" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} />
            <button type="submit" className="w-full py-3 rounded-xl font-semibold text-sm text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>{buttonText}</button>
          </form>
        </div>
      </div>
    </section>
  );
}
