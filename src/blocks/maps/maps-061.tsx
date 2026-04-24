import type { BlockProps } from "@/blocks/types";
import { MapPin } from "lucide-react";
export default function Maps061(props: BlockProps) {
  const { theme, heading = "Full-width map with info card" } = props;
  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="aspect-[21/9] w-full relative" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }}>
        <div className="absolute inset-0 flex items-center justify-center opacity-30">Map Placeholder</div>
        <div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-80">
          <div className="rounded-xl p-5 shadow-lg" style={{ backgroundColor: theme?.background ?? "#fff", color: theme?.foreground }}>
            <div className="flex items-center gap-2 font-semibold"><MapPin className="w-4 h-4" style={{ color: theme?.primary }} /> {heading}</div>
            <p className="mt-2 text-sm opacity-60">123 Business Ave, Lagos, Nigeria</p>
          </div>
        </div>
      </div>
    </section>
  );
}
