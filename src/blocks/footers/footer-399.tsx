import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer399(props: BlockProps) {
  const { theme, heading = "Jacaranda Pediatrics" } = props;
  return (
    <footer
      className="w-full bg-violet-50 py-12"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-lg ring-1 ring-violet-100">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="p-8 lg:col-span-2 lg:p-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-700">
                <span className="h-2 w-2 rounded-full bg-violet-500" /> Open today
              </div>
              <p className="mt-4 text-3xl font-bold text-violet-950">{heading}</p>
              <p className="mt-2 text-sm text-violet-700">Pediatric care · Vaccines · Development checks.</p>
              <div className="mt-6 space-y-4">
                <div>
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-violet-500">
                    <MapPin className="h-3.5 w-3.5" /> Clinic
                  </p>
                  <p className="mt-1 text-sm font-semibold text-violet-950">19 Jan Smuts Ave</p>
                  <p className="text-sm text-violet-700">Parktown, Johannesburg</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-violet-500">
                      <Phone className="h-3.5 w-3.5" /> Call
                    </p>
                    <p className="mt-1 font-mono text-sm font-semibold text-violet-950">+27 11 555 0101</p>
                  </div>
                  <div>
                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-violet-500">
                      <Clock className="h-3.5 w-3.5" /> Hours
                    </p>
                    <p className="mt-1 text-sm font-semibold text-violet-950">Mon–Fri · 8–5</p>
                  </div>
                </div>
                <div>
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-violet-500">
                    <Mail className="h-3.5 w-3.5" /> Email
                  </p>
                  <p className="mt-1 text-sm font-semibold text-violet-950">care@jacarandakids.co.za</p>
                </div>
              </div>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-violet-700"
                style={{ backgroundColor: theme?.primary }}
              >
                <Navigation className="h-4 w-4" /> Get directions
              </a>
            </div>
            <div
              className="relative min-h-[320px] bg-violet-100 lg:col-span-3"
              role="img"
              aria-label="Map"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-100 via-purple-50 to-violet-200" />
              <svg className="absolute inset-0 h-full w-full opacity-50" viewBox="0 0 500 400" preserveAspectRatio="none">
                <path d="M0,200 C100,150 200,250 300,180 C400,110 500,220 500,220" stroke="#8b5cf6" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                <circle cx="100" cy="180" r="20" fill="#ddd6fe" />
                <circle cx="350" cy="280" r="30" fill="#ddd6fe" />
                <rect x="200" y="100" width="60" height="50" fill="#ddd6fe" />
              </svg>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="absolute -inset-6 animate-pulse rounded-full bg-violet-400/40 blur-xl" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 shadow-xl ring-4 ring-white" style={{ backgroundColor: theme?.primary }}>
                  <MapPin className="h-7 w-7 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-violet-700">© 2026 {heading}</p>
      </div>
    </footer>
  );
}
