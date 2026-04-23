import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer377(props: BlockProps) {
  const { theme, heading = "Pulse Cycling" } = props;
  return (
    <footer
      className="w-full bg-fuchsia-950 py-12 text-fuchsia-50"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-fuchsia-300">Ride with us</p>
            <p className="mt-2 text-5xl font-black tracking-tight">{heading}</p>
            <p className="mt-3 max-w-md text-sm text-fuchsia-200">
              Indoor cycling studio. Two floors. Loud music. Zero judgement.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 text-sm">
              <div>
                <MapPin className="h-5 w-5 text-fuchsia-300" />
                <p className="mt-2 font-semibold">19 Bree Street</p>
                <p className="text-fuchsia-300">Cape Town 8001</p>
              </div>
              <div>
                <Phone className="h-5 w-5 text-fuchsia-300" />
                <p className="mt-2 font-mono font-semibold">+27 21 555 0141</p>
                <p className="text-fuchsia-300">WhatsApp ok</p>
              </div>
              <div>
                <Mail className="h-5 w-5 text-fuchsia-300" />
                <p className="mt-2 font-semibold">ride@pulsecycle.co</p>
              </div>
              <div>
                <Clock className="h-5 w-5 text-fuchsia-300" />
                <p className="mt-2 font-semibold">Daily · 5:30am–9pm</p>
              </div>
            </div>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-fuchsia-400 px-6 py-3 text-sm font-bold text-fuchsia-950 hover:bg-fuchsia-300"
              style={{ backgroundColor: theme?.accent }}
            >
              <Navigation className="h-4 w-4" /> Get directions
            </a>
          </div>
          <div
            className="relative aspect-square overflow-hidden rounded-3xl bg-fuchsia-900 ring-2 ring-fuchsia-400"
            role="img"
            aria-label="Map"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(217,70,239,0.3),transparent_50%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(232,121,249,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(232,121,249,0.1)_1px,transparent_1px)] bg-[size:28px_28px]" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute -inset-10 animate-pulse rounded-full bg-fuchsia-400/30 blur-xl" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-fuchsia-400 shadow-2xl" style={{ backgroundColor: theme?.accent }}>
                <MapPin className="h-8 w-8 text-fuchsia-950" />
              </div>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-fuchsia-900 pt-6 text-center text-xs text-fuchsia-400">
          © 2026 {heading}
        </p>
      </div>
    </footer>
  );
}
