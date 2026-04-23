import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer381(props: BlockProps) {
  const { theme, heading = "Iron & Anvil" } = props;
  return (
    <footer
      className="w-full bg-zinc-800 py-14 text-zinc-100"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col justify-between rounded-xl border border-zinc-700 bg-zinc-900 p-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-orange-400" style={{ color: theme?.accent }}>
                The workshop
              </p>
              <p className="mt-2 text-3xl font-bold">{heading}</p>
              <p className="mt-2 text-sm text-zinc-400">Metalwork, welding & bespoke fabrication.</p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-3 text-sm">
              <div className="flex items-start gap-3 border-l-2 border-orange-400 pl-3" style={{ borderColor: theme?.accent }}>
                <MapPin className="mt-0.5 h-4 w-4 text-zinc-500" />
                <span>Unit 7, Industria Park, Epping, Cape Town</span>
              </div>
              <div className="flex items-start gap-3 border-l-2 border-orange-400 pl-3" style={{ borderColor: theme?.accent }}>
                <Phone className="mt-0.5 h-4 w-4 text-zinc-500" />
                <span className="font-mono">+27 21 555 0137</span>
              </div>
              <div className="flex items-start gap-3 border-l-2 border-orange-400 pl-3" style={{ borderColor: theme?.accent }}>
                <Mail className="mt-0.5 h-4 w-4 text-zinc-500" />
                <span>forge@ironanvil.co.za</span>
              </div>
              <div className="flex items-start gap-3 border-l-2 border-orange-400 pl-3" style={{ borderColor: theme?.accent }}>
                <Clock className="mt-0.5 h-4 w-4 text-zinc-500" />
                <span>Mon–Fri · 7am–5pm · Sat by appointment</span>
              </div>
            </div>
          </div>
          <div
            className="relative min-h-[320px] overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950"
            role="img"
            aria-label="Map"
          >
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(251,146,60,0.03)_10px,rgba(251,146,60,0.03)_11px)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute -inset-8 rounded-full bg-orange-500/20 blur-xl" style={{ backgroundColor: theme?.accent }} />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-sm bg-orange-500 shadow-xl" style={{ backgroundColor: theme?.accent }}>
                <MapPin className="h-7 w-7 text-zinc-950" />
              </div>
            </div>
            <a
              href="#"
              className="absolute bottom-5 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-none bg-orange-500 px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-zinc-950 hover:bg-orange-400"
              style={{ backgroundColor: theme?.accent }}
            >
              <Navigation className="h-4 w-4" /> Directions
            </a>
          </div>
        </div>
        <p className="mt-10 text-center text-xs uppercase tracking-widest text-zinc-500">
          © 2026 {heading}
        </p>
      </div>
    </footer>
  );
}
