import { UtensilsCrossed, Phone, Clock, Camera } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer455(props: BlockProps) {
  const { theme, heading = "The Copper Spoon" } = props;
  return (
    <footer
      className="w-full bg-[#1a0f0a] py-16 text-amber-100"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="h-px w-16 bg-amber-400/60" />
          <p className="mt-4 text-xs uppercase tracking-[0.4em] text-amber-400">Table for two?</p>
          <p className="mt-4 font-serif text-5xl italic">{heading}</p>
          <a
            href="#"
            className="mt-8 rounded-full bg-amber-400 px-8 py-3 text-sm font-semibold text-[#1a0f0a] hover:bg-amber-300"
            style={{ backgroundColor: theme?.primary }}
          >
            Reserve your table
          </a>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-8 text-sm md:grid-cols-4">
          <div>
            <p className="font-serif text-amber-400">Menu</p>
            <ul className="mt-3 space-y-1.5 text-amber-100/80">
              <li><a href="#" className="hover:text-amber-200">À la carte</a></li>
              <li><a href="#" className="hover:text-amber-200">Tasting menu</a></li>
              <li><a href="#" className="hover:text-amber-200">Wine pairing</a></li>
              <li><a href="#" className="hover:text-amber-200">Download PDF</a></li>
            </ul>
          </div>
          <div>
            <p className="font-serif text-amber-400">Experience</p>
            <ul className="mt-3 space-y-1.5 text-amber-100/80">
              <li><a href="#" className="hover:text-amber-200">Private dining</a></li>
              <li><a href="#" className="hover:text-amber-200">Chef's table</a></li>
              <li><a href="#" className="hover:text-amber-200">Events</a></li>
              <li><a href="#" className="hover:text-amber-200">Gift cards</a></li>
            </ul>
          </div>
          <div>
            <p className="font-serif text-amber-400">Contact</p>
            <ul className="mt-3 space-y-1.5 text-amber-100/80">
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4" />+233 30 555 0144</li>
              <li className="flex items-start gap-2"><UtensilsCrossed className="mt-0.5 h-4 w-4" />Osu, Accra</li>
            </ul>
          </div>
          <div>
            <p className="font-serif text-amber-400">Hours</p>
            <ul className="mt-3 space-y-1.5 text-amber-100/80">
              <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4" />Wed–Sun · 6pm–late</li>
              <li><a href="#" className="inline-flex items-center gap-2 hover:text-amber-200"><Camera className="h-4 w-4" />@copperspoon</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-12 text-center text-xs text-amber-100/40">© 2026 {heading}. A quiet fire. A warm table.</p>
      </div>
    </footer>
  );
}
