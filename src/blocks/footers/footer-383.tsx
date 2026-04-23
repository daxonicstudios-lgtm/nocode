import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer383(props: BlockProps) {
  const { theme, heading = "Bunsen & Beaker" } = props;
  return (
    <footer
      className="w-full bg-indigo-50 py-12"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-3xl font-bold text-indigo-950">{heading}</p>
            <p className="mt-1 text-sm text-indigo-700">Science labs & STEM workshops for kids.</p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
            style={{ backgroundColor: theme?.primary }}
          >
            <Navigation className="h-4 w-4" /> Get directions
          </a>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div
              className="relative h-full min-h-[260px] overflow-hidden rounded-xl bg-white ring-1 ring-indigo-200"
              role="img"
              aria-label="Map"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(79,70,229,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,70,229,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 260" preserveAspectRatio="none">
                <path d="M0,80 L180,80 L180,180 L340,180 L340,60 L500,60" stroke="#6366f1" strokeWidth="2" fill="none" />
                <path d="M0,200 L500,200" stroke="#c7d2fe" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
              </svg>
              <div className="absolute left-[60%] top-[30%]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 shadow-xl ring-4 ring-white" style={{ backgroundColor: theme?.primary }}>
                  <MapPin className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="rounded-xl bg-white p-4 ring-1 ring-indigo-200">
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Campus</p>
              <p className="mt-1 flex items-start gap-2 text-sm text-indigo-950">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-400" /> 42 Oxford Rd, Rosebank, JHB
              </p>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-indigo-200">
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Contact</p>
              <p className="mt-1 flex items-center gap-2 font-mono text-sm text-indigo-950">
                <Phone className="h-4 w-4 text-indigo-400" /> +27 11 555 0113
              </p>
              <p className="mt-1 flex items-center gap-2 text-sm text-indigo-950">
                <Mail className="h-4 w-4 text-indigo-400" /> learn@bunsenbeaker.co
              </p>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-indigo-200">
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Hours</p>
              <p className="mt-1 flex items-center gap-2 text-sm text-indigo-950">
                <Clock className="h-4 w-4 text-indigo-400" /> Sat · 9am–1pm
              </p>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-indigo-700">© 2026 {heading}</p>
      </div>
    </footer>
  );
}
