import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer390(props: BlockProps) {
  const { theme, heading = "Blue Horizon Marina" } = props;
  return (
    <footer
      className="w-full bg-sky-950 py-14 text-sky-50"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-stretch">
          <div className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-sky-900 to-sky-800 p-8 ring-1 ring-sky-700">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">Harbourside</p>
              <p className="mt-2 text-4xl font-bold">{heading}</p>
              <p className="mt-2 text-sm text-sky-300">Yacht charters, sailing school & marina berthing.</p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
              <div>
                <p className="flex items-center gap-2 text-sky-300">
                  <MapPin className="h-4 w-4" /> Harbour
                </p>
                <p className="mt-1 font-semibold">Quay 5, V&A Waterfront</p>
                <p className="text-sky-200">Cape Town 8002</p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-sky-300">
                  <Phone className="h-4 w-4" /> Dockmaster
                </p>
                <p className="mt-1 font-mono font-semibold">+27 21 555 0191</p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-sky-300">
                  <Mail className="h-4 w-4" /> Bookings
                </p>
                <p className="mt-1 font-semibold">sail@bluehorizon.marina</p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-sky-300">
                  <Clock className="h-4 w-4" /> Open
                </p>
                <p className="mt-1 font-semibold">Daily · 7am–sunset</p>
              </div>
            </div>
            <a
              href="#"
              className="mt-6 inline-flex w-max items-center gap-2 rounded-full bg-sky-50 px-5 py-2.5 text-sm font-semibold text-sky-950 hover:bg-white"
            >
              <Navigation className="h-4 w-4" /> Directions
            </a>
          </div>
          <div
            className="relative min-h-[360px] overflow-hidden rounded-2xl bg-gradient-to-b from-sky-800 to-sky-950"
            role="img"
            aria-label="Map"
          >
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 360" preserveAspectRatio="none">
              <path d="M0,180 Q100,160 180,180 T400,170 L400,360 L0,360 Z" fill="rgba(2,132,199,0.4)" />
              <path d="M0,180 Q100,160 180,180 T400,170" stroke="#7dd3fc" strokeWidth="1.5" fill="none" />
              <path d="M150,120 L165,180 L135,180 Z" fill="#fef3c7" opacity="0.8" />
              <rect x="145" y="80" width="2" height="40" fill="#fef3c7" />
            </svg>
            <div className="absolute left-[40%] top-[45%]">
              <div className="absolute -inset-4 animate-pulse rounded-full bg-sky-300/30 blur-lg" />
              <MapPin className="relative h-8 w-8 text-sky-200" style={{ color: theme?.accent }} />
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-sky-300">© 2026 {heading}</p>
      </div>
    </footer>
  );
}
