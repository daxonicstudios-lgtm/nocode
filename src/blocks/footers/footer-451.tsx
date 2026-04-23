import { UtensilsCrossed, MapPin, Phone, Clock, Camera, Users } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer451(props: BlockProps) {
  const {
    theme,
    heading = "Harbor House",
    bodyText = "Modern African cuisine on Long Street — wood-fired, seasonal, honest.",
  } = props;
  return (
    <footer
      className="w-full bg-amber-50 py-14 text-amber-950"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="h-5 w-5" />
              <p className="font-serif text-2xl italic">{heading}</p>
            </div>
            <p className="mt-3 text-sm text-amber-900/70">{bodyText}</p>
            <a
              href="#"
              className="mt-5 inline-block rounded-full bg-amber-950 px-6 py-2.5 text-sm font-semibold text-amber-50 hover:opacity-90"
              style={{ backgroundColor: theme?.primary }}
            >
              Reserve a table
            </a>
          </div>
          <div>
            <p className="font-serif text-sm uppercase tracking-wider">Menu</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Lunch</a></li>
              <li><a href="#" className="hover:underline">Dinner</a></li>
              <li><a href="#" className="hover:underline">Wine list</a></li>
              <li><a href="#" className="hover:underline">Download menu (PDF)</a></li>
              <li><a href="#" className="hover:underline">Private events</a></li>
            </ul>
          </div>
          <div>
            <p className="font-serif text-sm uppercase tracking-wider">Visit</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4" />215 Long Street, Cape Town</li>
              <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4" />+27 21 555 0134</li>
              <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4" />Tue–Sat · 12pm–10pm</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="Instagram"><Camera className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook"><Users className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-amber-900/20 pt-6 font-serif text-xs italic text-amber-900/60">
          © 2026 {heading}. Crafted with care.
        </div>
      </div>
    </footer>
  );
}
