import { MapPin, Phone, Mail, Clock, Navigation, Building2 } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer371(props: BlockProps) {
  const { theme, heading = "Tala Consulting" } = props;
  return (
    <footer
      className="w-full bg-zinc-900 py-14 text-zinc-100"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Building2 className="h-6 w-6 text-zinc-400" />
            <p className="mt-3 text-xl font-semibold text-white">{heading}</p>
            <p className="mt-1 text-sm text-zinc-400">Strategy & research for growth-stage teams.</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 lg:col-span-2">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-zinc-500">HQ · Nairobi</p>
                <p className="mt-1 text-lg font-semibold text-white">Ground Floor, Sarit Centre</p>
                <p className="text-sm text-zinc-400">Westlands, Nairobi 00100</p>
              </div>
              <a
                href="#"
                className="inline-flex w-max items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-200"
              >
                <Navigation className="h-4 w-4" /> Get directions
              </a>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 border-t border-zinc-800 pt-6 text-sm sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-zinc-500" />
                <span className="font-mono text-zinc-200">+254 20 555 0135</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-zinc-500" />
                <span className="text-zinc-200">office@tala.work</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-zinc-500" />
                <span className="text-zinc-200">Mon–Fri · 9–6</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative mt-8 h-32 overflow-hidden rounded-xl bg-zinc-950 ring-1 ring-zinc-800"
          role="img"
          aria-label="Map"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(161,161,170,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(161,161,170,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-y-0 left-[30%]">
            <div className="flex h-full items-center">
              <MapPin className="h-6 w-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" style={{ color: theme?.accent }} />
            </div>
          </div>
          <div className="absolute inset-y-0 right-[20%]">
            <div className="flex h-full items-center">
              <MapPin className="h-5 w-5 text-zinc-400" />
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-zinc-500">© 2026 {heading}</p>
      </div>
    </footer>
  );
}
