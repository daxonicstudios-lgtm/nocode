import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer360(props: BlockProps) {
  const { theme, heading = "Nile Florist" } = props;
  return (
    <footer
      className="w-full bg-emerald-50 py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-5 lg:gap-10 lg:px-8">
        <div
          className="relative aspect-[4/3] overflow-hidden rounded-2xl border-4 border-white shadow-lg lg:col-span-3 lg:aspect-auto"
          role="img"
          aria-label="Map"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-teal-100 to-emerald-200" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_70%_30%,rgba(5,150,105,0.15),transparent_40%)]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute -inset-4 animate-ping rounded-full bg-emerald-500/40" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-700 shadow-xl" style={{ backgroundColor: theme?.primary }}>
                <MapPin className="h-7 w-7 text-white" />
              </div>
            </div>
          </div>
          <a
            href="#"
            className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-emerald-900 shadow-md"
          >
            <Navigation className="h-4 w-4" /> Get directions
          </a>
        </div>
        <div className="lg:col-span-2">
          <p className="text-3xl font-bold text-emerald-950">{heading}</p>
          <p className="mt-2 text-sm text-emerald-900/70">Fresh blooms, delivered daily in Dakar.</p>
          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-emerald-200">
                <MapPin className="h-4 w-4 text-emerald-800" />
              </div>
              <div className="text-sm">
                <p className="font-semibold text-emerald-950">9 Rue Carnot</p>
                <p className="text-emerald-900/70">Dakar, Senegal</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-emerald-200">
                <Phone className="h-4 w-4 text-emerald-800" />
              </div>
              <p className="font-mono text-sm text-emerald-950">+221 33 555 0155</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-emerald-200">
                <Clock className="h-4 w-4 text-emerald-800" />
              </div>
              <p className="text-sm text-emerald-950">Mon–Sat · 8am–7pm</p>
            </div>
          </div>
          <p className="mt-10 text-xs text-emerald-900/60">© 2026 {heading}</p>
        </div>
      </div>
    </footer>
  );
}
