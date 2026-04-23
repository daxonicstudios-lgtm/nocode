import { Home, MapPin, Phone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer460(props: BlockProps) {
  const { theme, heading = "Atlas & Co. Realty" } = props;
  return (
    <footer
      className="w-full bg-[#0a1a2f] py-20 text-white"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/15 pb-10 md:flex-row md:items-end">
          <div>
            <Home className="h-7 w-7 text-white/80" />
            <p className="mt-3 text-4xl font-semibold tracking-tight">{heading}</p>
            <p className="mt-2 max-w-lg text-sm text-white/60">
              Boutique real estate advisory. Quietly confident in Cape Town, Joburg, and Durban.
            </p>
          </div>
          <a
            href="#"
            className="rounded-none border border-white px-7 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-white hover:text-[#0a1a2f]"
            style={{ borderColor: theme?.primary }}
          >
            Schedule a viewing
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-8 text-sm md:grid-cols-5">
          <div>
            <p className="text-white/50">Buy</p>
            <ul className="mt-3 space-y-1.5">
              <li><a href="#" className="hover:text-white/80">Homes</a></li>
              <li><a href="#" className="hover:text-white/80">Estates</a></li>
              <li><a href="#" className="hover:text-white/80">Land</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white/50">Rent</p>
            <ul className="mt-3 space-y-1.5">
              <li><a href="#" className="hover:text-white/80">Apartments</a></li>
              <li><a href="#" className="hover:text-white/80">Villas</a></li>
              <li><a href="#" className="hover:text-white/80">Holiday</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white/50">Tools</p>
            <ul className="mt-3 space-y-1.5">
              <li><a href="#" className="hover:text-white/80">Mortgage calculator</a></li>
              <li><a href="#" className="hover:text-white/80">Area guides</a></li>
              <li><a href="#" className="hover:text-white/80">Valuations</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white/50">Firm</p>
            <ul className="mt-3 space-y-1.5">
              <li><a href="#" className="hover:text-white/80">About</a></li>
              <li><a href="#" className="hover:text-white/80">Agents</a></li>
              <li><a href="#" className="hover:text-white/80">Press</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white/50">Contact</p>
            <ul className="mt-3 space-y-1.5 text-white/80">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" />Camps Bay, Cape Town</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4" />+27 21 555 0107</li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-white/40">© 2026 {heading}. Each office independently owned.</p>
      </div>
    </footer>
  );
}
