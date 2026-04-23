import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer386(props: BlockProps) {
  const { theme, heading = "Canopy Gardens" } = props;
  return (
    <footer
      className="w-full bg-green-900 py-14 text-green-50"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
          <div className="rounded-t-3xl bg-green-800/60 p-8 lg:rounded-l-3xl lg:rounded-tr-none">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green-300">Visit the nursery</p>
            <p className="mt-2 font-serif text-4xl">{heading}</p>
            <p className="mt-2 text-sm text-green-200">Indoor plants, outdoor dreams. 3,000+ species in stock.</p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-green-300" />
                <div>
                  <p className="font-semibold">88 Rietvlei Rd</p>
                  <p className="text-green-200">Honeydew, Johannesburg</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-green-300" />
                <span className="font-mono">+27 11 555 0128</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-green-300" />
                <span>plants@canopygardens.co.za</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-green-300" />
                <span>Daily · 8am–5pm</span>
              </li>
            </ul>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-50 px-5 py-2.5 text-sm font-bold text-green-900 hover:bg-white"
            >
              <Navigation className="h-4 w-4" /> Get directions
            </a>
          </div>
          <div
            className="relative min-h-[400px] overflow-hidden rounded-b-3xl bg-green-950 lg:rounded-r-3xl lg:rounded-bl-none"
            role="img"
            aria-label="Map"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.15),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(134,239,172,0.1),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(34,197,94,0.1),transparent_40%)]" />
            <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M20,20 Q50,40 80,20" stroke="rgba(134,239,172,0.5)" strokeWidth="0.3" fill="none" />
              <path d="M20,40 Q50,60 80,40" stroke="rgba(134,239,172,0.5)" strokeWidth="0.3" fill="none" />
              <path d="M20,60 Q50,80 80,60" stroke="rgba(134,239,172,0.5)" strokeWidth="0.3" fill="none" />
            </svg>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute -inset-8 animate-pulse rounded-full bg-green-400/20 blur-xl" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-400 shadow-2xl" style={{ backgroundColor: theme?.accent }}>
                <MapPin className="h-7 w-7 text-green-950" />
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-green-300">© 2026 {heading}</p>
      </div>
    </footer>
  );
}
