import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer378(props: BlockProps) {
  const { theme, heading = "Coastal Vet" } = props;
  return (
    <footer
      className="w-full bg-cyan-50 py-12"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex items-start gap-3 rounded-2xl bg-white p-5 ring-1 ring-cyan-200">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100">
              <MapPin className="h-5 w-5 text-cyan-700" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-700">Visit</p>
              <p className="mt-1 text-base font-semibold text-cyan-950">3 Beach Rd</p>
              <p className="text-sm text-cyan-900/70">Muizenberg, Cape Town</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl bg-white p-5 ring-1 ring-cyan-200">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100">
              <Phone className="h-5 w-5 text-cyan-700" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-700">Call</p>
              <p className="mt-1 font-mono text-base font-semibold text-cyan-950">+27 21 555 0163</p>
              <p className="text-sm text-cyan-900/70">24-hour emergency</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl bg-white p-5 ring-1 ring-cyan-200">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100">
              <Clock className="h-5 w-5 text-cyan-700" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-700">Hours</p>
              <p className="mt-1 text-base font-semibold text-cyan-950">Mon–Sat</p>
              <p className="text-sm text-cyan-900/70">8am–7pm</p>
            </div>
          </div>
        </div>
        <div
          className="relative mt-6 h-44 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-100 via-sky-100 to-cyan-100 ring-1 ring-cyan-200 sm:h-56"
          role="img"
          aria-label="Map"
        >
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 200" preserveAspectRatio="none">
            <path d="M0,140 Q200,120 400,140 T800,130 L800,200 L0,200 Z" fill="rgba(8,145,178,0.2)" />
            <path d="M0,140 Q200,120 400,140 T800,130" stroke="#0891b2" strokeWidth="2" fill="none" />
          </svg>
          <div className="absolute left-1/2 top-[35%] -translate-x-1/2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-700 shadow-xl" style={{ backgroundColor: theme?.primary }}>
              <MapPin className="h-6 w-6 text-white" />
            </div>
          </div>
          <p className="absolute left-1/2 top-[65%] -translate-x-1/2 text-xs font-semibold text-cyan-900">
            Beachfront clinic
          </p>
        </div>
        <div className="mt-6 text-center">
          <p className="text-lg font-bold text-cyan-950">{heading}</p>
          <p className="mt-1 text-xs text-cyan-700">
            care@coastalvet.co.za · © 2026 all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
