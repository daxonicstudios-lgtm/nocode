import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer395(props: BlockProps) {
  const { theme, heading = "The Standard Music Bar" } = props;
  return (
    <footer
      className="w-full bg-purple-950 py-12 text-purple-50"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative flex h-32 items-center justify-center overflow-hidden rounded-t-2xl border-x border-t border-purple-800 bg-purple-900"
          role="img"
          aria-label="Map strip"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.3),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(216,180,254,0.08)_1px,transparent_1px)] bg-[size:60px_100%]" />
          <div className="relative flex items-center gap-3">
            <div className="absolute -inset-4 animate-pulse rounded-full bg-purple-400/30 blur-lg" />
            <MapPin className="relative h-7 w-7 text-purple-200" style={{ color: theme?.accent }} />
            <span className="relative text-sm font-semibold tracking-widest text-purple-100">FIND THE DOOR</span>
          </div>
        </div>
        <div className="rounded-b-2xl border-x border-b border-purple-800 bg-purple-900/60 p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-purple-300">Live music nightly</p>
              <p className="mt-2 font-serif text-3xl">{heading}</p>
              <p className="mt-2 text-sm text-purple-300">Jazz, soul & funk in a basement room.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm md:col-span-2">
              <div>
                <p className="flex items-center gap-2 text-purple-300">
                  <MapPin className="h-4 w-4" /> Address
                </p>
                <p className="mt-1">Basement, 4 Central Square</p>
                <p className="text-purple-200">Pinelands, Cape Town</p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-purple-300">
                  <Clock className="h-4 w-4" /> Doors
                </p>
                <p className="mt-1">Thu–Sat · 7pm–late</p>
                <p className="text-purple-200">Sets at 8 & 10</p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-purple-300">
                  <Phone className="h-4 w-4" /> Reservations
                </p>
                <p className="mt-1 font-mono">+27 21 555 0169</p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-purple-300">
                  <Mail className="h-4 w-4" /> Bookings
                </p>
                <p className="mt-1">book@thestandard.bar</p>
              </div>
            </div>
          </div>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-purple-400 px-6 py-2.5 text-sm font-bold text-purple-950 hover:bg-purple-300"
            style={{ backgroundColor: theme?.accent }}
          >
            <Navigation className="h-4 w-4" /> Get directions
          </a>
        </div>
        <p className="mt-6 text-center text-xs text-purple-300">© 2026 {heading}</p>
      </div>
    </footer>
  );
}
