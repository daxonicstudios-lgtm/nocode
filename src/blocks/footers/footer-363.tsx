import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer363(props: BlockProps) {
  const { theme, heading = "Baobab Pediatrics" } = props;
  return (
    <footer
      className="w-full bg-sky-50 py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-800">
          <MapPin className="h-3.5 w-3.5" /> Clinic location
        </div>
        <p className="mt-4 text-3xl font-bold text-sky-950">{heading}</p>
        <p className="mt-2 text-sink-900/70 text-sky-900/70">Gentle care for growing kids.</p>
        <div className="relative mx-auto mt-8 aspect-[16/7] max-w-3xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-sky-200">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-sky-100" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(14,165,233,0.1),transparent_35%),radial-gradient(circle_at_75%_50%,rgba(14,165,233,0.1),transparent_35%)]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-600 shadow-lg" style={{ backgroundColor: theme?.primary }}>
              <MapPin className="h-7 w-7 text-white" />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-4 text-left ring-1 ring-sky-200">
            <MapPin className="h-4 w-4 text-sky-600" />
            <p className="mt-2 text-sm font-semibold text-sky-950">Parklands</p>
            <p className="text-xs text-sky-800/70">Limuru Rd, Nairobi</p>
          </div>
          <div className="rounded-2xl bg-white p-4 text-left ring-1 ring-sky-200">
            <Phone className="h-4 w-4 text-sky-600" />
            <p className="mt-2 font-mono text-sm font-semibold text-sky-950">+254 20 555 0117</p>
            <p className="text-xs text-sky-800/70">24/7 helpline</p>
          </div>
          <div className="rounded-2xl bg-white p-4 text-left ring-1 ring-sky-200">
            <Clock className="h-4 w-4 text-sky-600" />
            <p className="mt-2 text-sm font-semibold text-sky-950">Mon–Sat</p>
            <p className="text-xs text-sky-800/70">8am–7pm</p>
          </div>
        </div>
        <p className="mt-10 text-xs text-sky-900/60">
          © 2026 {heading} · <Mail className="inline h-3 w-3" /> care@baobabkids.health
        </p>
      </div>
    </footer>
  );
}
