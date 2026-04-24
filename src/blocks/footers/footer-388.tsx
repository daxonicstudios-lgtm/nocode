import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer388(props: BlockProps) {
  const { theme, heading = "Electric Avenue Repairs" } = props;
  return (
    <footer
      className="w-full bg-yellow-400 py-10"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border-2 border-black bg-white p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-yellow-500">Drop by!</p>
              <p className="mt-1 text-3xl font-black tracking-tight">{heading}</p>
              <p className="mt-1 text-sm font-medium text-neutral-700">
                Phone, laptop & device repair. Same-day service.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-black px-6 py-3 text-sm font-black text-white hover:bg-neutral-800"
            >
              <Navigation className="h-4 w-4" /> Find us
            </a>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 border-t-2 border-black pt-6 sm:grid-cols-4">
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-5 w-5" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">Shop</p>
                <p className="font-bold">33 Smal St, JHB CBD</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="mt-0.5 h-5 w-5" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">Call</p>
                <p className="font-mono font-bold">+27 11 555 0185</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Mail className="mt-0.5 h-5 w-5" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">Email</p>
                <p className="font-bold">fix@electricave.co.za</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="mt-0.5 h-5 w-5" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">Open</p>
                <p className="font-bold">Mon–Sat · 9–6</p>
              </div>
            </div>
          </div>
          <div
            className="relative mt-6 h-28 overflow-hidden rounded-xl border-2 border-black bg-yellow-100"
            role="img"
            aria-label="Map"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_2px,transparent_2px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_2px,transparent_2px)] bg-[size:30px_30px]" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <MapPin className="h-8 w-8" />
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-xs font-bold uppercase tracking-widest">© 2026 {heading}</p>
      </div>
    </footer>
  );
}
