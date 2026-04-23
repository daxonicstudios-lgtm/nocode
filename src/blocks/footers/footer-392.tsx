import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer392(props: BlockProps) {
  const { theme, heading = "Veld Physio" } = props;
  return (
    <footer
      className="w-full bg-emerald-50 py-12"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-emerald-200">
          <div
            className="relative h-40 bg-emerald-100 sm:h-56"
            role="img"
            aria-label="Map"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-emerald-50 to-teal-100" />
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 200" preserveAspectRatio="none">
              <path d="M0,100 C200,80 400,120 600,90 S800,110 800,110" stroke="#059669" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
              <path d="M0,140 C200,130 400,150 600,130 S800,140 800,140" stroke="#10b981" strokeWidth="1" fill="none" opacity="0.5" />
            </svg>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
                <MapPin className="h-6 w-6 text-emerald-600" style={{ color: theme?.primary }} />
              </div>
            </div>
          </div>
          <div className="p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-2xl font-bold text-emerald-950">{heading}</p>
                <p className="text-sm text-emerald-700">Sports & rehab physiotherapy.</p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
                style={{ backgroundColor: theme?.primary }}
              >
                <Navigation className="h-4 w-4" /> Get directions
              </a>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-5 border-t border-emerald-100 pt-6 sm:grid-cols-4">
              <div>
                <MapPin className="h-4 w-4 text-emerald-500" />
                <p className="mt-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-600">Clinic</p>
                <p className="mt-1 text-sm font-semibold text-emerald-950">4 Roeland Sq</p>
                <p className="text-xs text-emerald-700">Gardens, Cape Town</p>
              </div>
              <div>
                <Phone className="h-4 w-4 text-emerald-500" />
                <p className="mt-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-600">Book</p>
                <p className="mt-1 font-mono text-sm text-emerald-950">+27 21 555 0143</p>
              </div>
              <div>
                <Mail className="h-4 w-4 text-emerald-500" />
                <p className="mt-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-600">Email</p>
                <p className="mt-1 text-sm text-emerald-950">move@veldphysio.co</p>
              </div>
              <div>
                <Clock className="h-4 w-4 text-emerald-500" />
                <p className="mt-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-600">Hours</p>
                <p className="mt-1 text-sm text-emerald-950">Mon–Fri · 7–7</p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-emerald-700">© 2026 {heading}</p>
      </div>
    </footer>
  );
}
