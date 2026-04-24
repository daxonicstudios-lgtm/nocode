import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer364(props: BlockProps) {
  const { theme, heading = "Table Mountain Tours" } = props;
  return (
    <footer
      className="w-full bg-orange-50 py-12"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-stretch">
          <div
            className="relative min-h-[280px] overflow-hidden rounded-xl bg-gradient-to-br from-orange-100 to-amber-200"
            role="img"
            aria-label="Map"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.4),transparent)]" />
            <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,70 Q30,50 50,65 T100,55" stroke="rgba(180,83,9,0.5)" strokeWidth="0.5" fill="none" />
              <path d="M0,40 Q25,30 55,38 T100,30" stroke="rgba(180,83,9,0.4)" strokeWidth="0.5" fill="none" />
              <circle cx="60" cy="50" r="1.5" fill="rgba(180,83,9,0.7)" />
              <circle cx="30" cy="70" r="1" fill="rgba(180,83,9,0.5)" />
            </svg>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 shadow-xl" style={{ backgroundColor: theme?.primary }}>
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-orange-900">Tafelberg Rd</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-700">Pickup point</p>
            <p className="mt-1 text-3xl font-bold text-orange-950">{heading}</p>
            <p className="mt-2 text-sm text-orange-900/70">Daily guided hikes and cable car tours.</p>
            <div className="mt-6 space-y-3 text-sm text-orange-950">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-orange-600" /> Tafelberg Rd, Cape Town 8001
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-orange-600" /> +27 21 555 0165
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-orange-600" /> trek@tablemtn.tours
              </p>
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-orange-600" /> Daily · 6am–6pm
              </p>
            </div>
            <a
              href="#"
              className="mt-6 inline-flex w-max items-center gap-2 rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-orange-700"
              style={{ backgroundColor: theme?.primary }}
            >
              <Navigation className="h-4 w-4" /> Get directions
            </a>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-orange-900/60">© 2026 {heading}</p>
      </div>
    </footer>
  );
}
