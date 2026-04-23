import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer356(props: BlockProps) {
  const { theme, heading = "Anchor Legal" } = props;
  return (
    <footer
      className="w-full bg-slate-950 py-16 text-slate-100"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-400" style={{ color: theme?.accent }}>
          Our office
        </p>
        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{heading}</p>
        <p className="mx-auto mt-4 max-w-xl text-base text-slate-400">
          Corporate and commercial counsel for African businesses.
        </p>
        <div className="relative mx-auto mt-10 aspect-[3/2] max-w-3xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute -inset-8 rounded-full bg-sky-400/20 blur-xl" style={{ backgroundColor: theme?.accent }} />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-sky-400 shadow-2xl" style={{ backgroundColor: theme?.accent }}>
              <MapPin className="h-8 w-8 text-slate-950" />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-300">
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-slate-500" /> 19 Fricker Road, Sandton
          </span>
          <span className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-slate-500" /> +27 11 555 0187
          </span>
          <span className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-slate-500" /> counsel@anchor.legal
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-slate-500" /> Mon–Fri · 8am–6pm
          </span>
        </div>
        <a
          href="#"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200"
        >
          <Navigation className="h-4 w-4" /> Get directions
        </a>
        <p className="mt-12 text-xs text-slate-600">© 2026 {heading}. All rights reserved.</p>
      </div>
    </footer>
  );
}
