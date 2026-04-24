import type { BlockProps } from "@/blocks/types";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
export default function Maps023(props: BlockProps) {
  const { theme, heading = "Map with contact info sidebar", subheading = "Come visit us" } = props;
  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <h2 className="text-3xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-sm"><MapPin className="w-5 h-5 shrink-0" style={{ color: theme?.primary }} /> 123 Main Street, Suite 100, Lagos, Nigeria</div>
            <div className="flex items-center gap-3 text-sm"><Phone className="w-5 h-5 shrink-0" style={{ color: theme?.primary }} /> +234 800 123 4567</div>
            <div className="flex items-center gap-3 text-sm"><Mail className="w-5 h-5 shrink-0" style={{ color: theme?.primary }} /> hello@example.com</div>
            <div className="flex items-center gap-3 text-sm"><Clock className="w-5 h-5 shrink-0" style={{ color: theme?.primary }} /> Mon-Fri: 9am - 6pm</div>
          </div>
        </div>
        <div className="flex-1 aspect-video rounded-2xl" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }}>
          <div className="w-full h-full rounded-2xl flex items-center justify-center text-sm opacity-30">Map Placeholder</div>
        </div>
      </div>
    </section>
  );
}
