import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer358(props: BlockProps) {
  const { theme, heading = "Ridge Architects" } = props;
  return (
    <footer
      className="w-full bg-neutral-100 py-14 text-neutral-900"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <p className="text-2xl font-bold">{heading}</p>
            <p className="mt-2 text-sm text-neutral-600">Studio practice in Kigali.</p>
          </div>
          <div className="rounded-xl border border-neutral-300 bg-white p-6 shadow-sm md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Studio</p>
            <p className="mt-2 text-lg font-semibold">Nyarutarama, KG 9 Ave</p>
            <p className="text-sm text-neutral-500">Kigali, Rwanda</p>
            <div className="mt-5 grid grid-cols-1 gap-4 text-sm sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-neutral-500" />
                <span className="font-mono">+250 78 555 0102</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-neutral-500" />
                <span>studio@ridge.rw</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-neutral-500" />
                <span>Mon–Fri · 9–6</span>
              </div>
            </div>
            <div
              className="relative mt-6 h-40 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50"
              role="img"
              aria-label="Map"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <MapPin className="h-7 w-7 text-neutral-900" style={{ color: theme?.primary }} />
              </div>
              <a
                href="#"
                className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-md bg-neutral-900 px-3 py-1.5 text-xs font-semibold text-white"
                style={{ backgroundColor: theme?.primary }}
              >
                <Navigation className="h-3 w-3" /> Directions
              </a>
            </div>
          </div>
        </div>
        <p className="mt-10 text-xs text-neutral-500">© 2026 {heading}. All rights reserved.</p>
      </div>
    </footer>
  );
}
