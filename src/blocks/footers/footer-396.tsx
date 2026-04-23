import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer396(props: BlockProps) {
  const { theme, heading = "Everest Dental" } = props;
  return (
    <footer
      className="w-full bg-white py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-blue-50 p-8 ring-1 ring-blue-100 sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">Gentle · Modern · Local</p>
              <p className="mt-1 text-3xl font-bold text-blue-950">{heading}</p>
            </div>
            <span className="inline-flex w-max items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Accepting new patients
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div
              className="relative min-h-[280px] overflow-hidden rounded-2xl bg-white ring-1 ring-blue-100 lg:col-span-7"
              role="img"
              aria-label="Map"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-sky-50" />
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 280" preserveAspectRatio="none">
                <path d="M0,150 L500,150" stroke="#bfdbfe" strokeWidth="2" />
                <path d="M250,0 L250,280" stroke="#bfdbfe" strokeWidth="2" />
                <path d="M0,50 L120,50 L120,150" stroke="#93c5fd" strokeWidth="1.5" fill="none" />
                <path d="M380,280 L380,180 L500,180" stroke="#93c5fd" strokeWidth="1.5" fill="none" />
                <rect x="130" y="60" width="40" height="30" fill="#dbeafe" />
                <rect x="320" y="180" width="50" height="40" fill="#dbeafe" />
              </svg>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 shadow-xl ring-4 ring-white" style={{ backgroundColor: theme?.primary }}>
                  <MapPin className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            <div className="space-y-3 lg:col-span-5">
              <div className="rounded-2xl bg-white p-4 ring-1 ring-blue-100">
                <MapPin className="h-5 w-5 text-blue-500" />
                <p className="mt-2 text-sm font-bold text-blue-950">Practice location</p>
                <p className="mt-1 text-sm text-blue-900">Suite 3, Grove Medical Centre</p>
                <p className="text-sm text-blue-700">Claremont, Cape Town 7708</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white p-4 ring-1 ring-blue-100">
                  <Phone className="h-5 w-5 text-blue-500" />
                  <p className="mt-2 text-xs font-bold uppercase tracking-widest text-blue-600">Phone</p>
                  <p className="mt-1 font-mono text-sm text-blue-950">+27 21 555 0149</p>
                </div>
                <div className="rounded-2xl bg-white p-4 ring-1 ring-blue-100">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <p className="mt-2 text-xs font-bold uppercase tracking-widest text-blue-600">Hours</p>
                  <p className="mt-1 text-sm text-blue-950">Mon–Fri · 8–5</p>
                </div>
              </div>
              <div className="rounded-2xl bg-white p-4 ring-1 ring-blue-100">
                <Mail className="h-5 w-5 text-blue-500" />
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-blue-600">Email</p>
                <p className="mt-1 text-sm text-blue-950">smile@everestdental.co.za</p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-blue-700">© 2026 {heading}</p>
      </div>
    </footer>
  );
}
