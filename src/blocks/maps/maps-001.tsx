import type { BlockProps } from "@/blocks/types";
import { MapPin } from "lucide-react";

export default function Maps001(props: BlockProps) {
  const { theme, heading = "Find us", bodyText = "14 Admiralty Way, Lekki Phase 1, Lagos, Nigeria" } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{heading}</h2>
          <p className="mt-2 text-base opacity-70">{bodyText}</p>
        </div>
        <div className="aspect-[16/9] rounded-2xl relative overflow-hidden border" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb", borderColor: theme?.secondary ?? "#d1d5db" }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <MapPin className="w-10 h-10" style={{ color: theme?.primary ?? "#dc2626" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
