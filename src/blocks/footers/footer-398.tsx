import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer398(props: BlockProps) {
  const { theme, heading = "Cedar Wine Bar" } = props;
  return (
    <footer
      className="w-full bg-rose-950 py-14 text-rose-50"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5 md:items-start">
          <div className="md:col-span-3">
            <p className="font-serif text-5xl italic text-rose-50">{heading}</p>
            <p className="mt-3 font-serif text-sm italic text-rose-200">
              A small wine bar with a big list. Walk-ins welcome.
            </p>
            <div className="mt-10 font-serif">
              <p className="text-xs uppercase tracking-[0.4em] text-rose-300">Find us</p>
              <p className="mt-3 text-2xl">14A Loop Street</p>
              <p className="text-xl text-rose-200">Cape Town 8001</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <p className="flex items-center gap-2 font-mono">
                <Phone className="h-4 w-4 text-rose-300" /> +27 21 555 0174
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-rose-300" /> pour@cedarwine.co
              </p>
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-rose-300" /> Tue–Sat · 5pm–midnight
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <div
              className="relative aspect-[3/4] overflow-hidden rounded-sm border border-rose-800 bg-rose-900"
              role="img"
              aria-label="Map"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(244,63,94,0.25),transparent_55%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(254,205,211,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(254,205,211,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
              <div className="absolute left-1/2 top-[30%] -translate-x-1/2">
                <div className="absolute -inset-6 animate-pulse rounded-full bg-rose-300/30 blur-lg" />
                <MapPin className="relative h-8 w-8 text-rose-200" style={{ color: theme?.accent }} />
              </div>
              <div className="absolute inset-x-4 bottom-4 rounded-md bg-rose-950/80 p-3 backdrop-blur">
                <p className="font-serif text-xs uppercase tracking-widest text-rose-300">Next to</p>
                <p className="font-serif text-sm text-rose-50">The Castle of Good Hope</p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center font-serif text-xs italic text-rose-300">© 2026 {heading}</p>
      </div>
    </footer>
  );
}
