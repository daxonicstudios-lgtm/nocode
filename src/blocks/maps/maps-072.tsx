import type { BlockProps } from "@/blocks/types";
import { MapPin, Navigation } from "lucide-react";
export default function Maps072(props: BlockProps) {
  const { theme, heading = "Dark map section with CTA", subheading = "Find us easily" } = props;
  return (
    <section className="px-4 py-20" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#e2e8f0" }}>
      <div className="max-w-4xl mx-auto text-center">
        <MapPin className="w-8 h-8 mx-auto mb-4 opacity-60" />
        <h2 className="text-3xl font-bold text-white">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <div className="mt-8 aspect-video rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
          <div className="w-full h-full flex items-center justify-center opacity-20">Map Placeholder</div>
        </div>
        <a href="#" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-white" style={{ color: theme?.primary ?? "#0f172a" }}>
          <Navigation className="w-4 h-4" /> Get Directions
        </a>
      </div>
    </section>
  );
}
