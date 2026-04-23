import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer366(props: BlockProps) {
  const { theme, heading = "Salt & Lime" } = props;
  return (
    <footer
      className="w-full bg-teal-900 py-12 text-teal-50"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-teal-950/60 p-8 ring-1 ring-teal-800 sm:p-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-center">
            <div className="md:col-span-1">
              <p className="text-3xl font-bold">{heading}</p>
              <p className="mt-2 text-sm text-teal-200">Seaside taqueria on Camps Bay beach.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 text-sm md:col-span-2 md:grid-cols-2">
              <div className="flex gap-3 rounded-xl bg-teal-900 p-4">
                <MapPin className="h-5 w-5 flex-shrink-0 text-teal-300" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-teal-400">Visit</p>
                  <p className="mt-1">Victoria Rd, Camps Bay</p>
                  <p>Cape Town 8005</p>
                </div>
              </div>
              <div className="flex gap-3 rounded-xl bg-teal-900 p-4">
                <Phone className="h-5 w-5 flex-shrink-0 text-teal-300" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-teal-400">Book</p>
                  <p className="mt-1 font-mono">+27 21 555 0176</p>
                </div>
              </div>
              <div className="flex gap-3 rounded-xl bg-teal-900 p-4">
                <Mail className="h-5 w-5 flex-shrink-0 text-teal-300" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-teal-400">Email</p>
                  <p className="mt-1">eat@saltandlime.co</p>
                </div>
              </div>
              <div className="flex gap-3 rounded-xl bg-teal-900 p-4">
                <Clock className="h-5 w-5 flex-shrink-0 text-teal-300" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-teal-400">Open</p>
                  <p className="mt-1">Wed–Sun · 12pm–late</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative mt-8 h-36 overflow-hidden rounded-xl bg-teal-950 ring-1 ring-teal-700"
            role="img"
            aria-label="Map strip"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(94,234,212,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(94,234,212,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-y-0 left-0 w-2/3 bg-[radial-gradient(ellipse_at_right,rgba(20,184,166,0.3),transparent_60%)]" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <MapPin className="mx-auto h-7 w-7 text-teal-300" style={{ color: theme?.accent }} />
              <p className="mt-1 text-xs font-medium text-teal-200">Get directions</p>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-teal-400">© 2026 {heading}</p>
      </div>
    </footer>
  );
}
