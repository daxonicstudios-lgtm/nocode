import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer391(props: BlockProps) {
  const { theme, heading = "Redwood Barbershop" } = props;
  return (
    <footer
      className="w-full bg-red-950 py-12 text-red-50"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center border-y border-red-800 py-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-red-300">Est. 2012</p>
          <p className="mt-3 font-serif text-5xl italic">{heading}</p>
          <p className="mt-2 text-sm text-red-200">Traditional cuts. Hot towel shaves. Great conversation.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div
            className="relative aspect-[3/2] overflow-hidden rounded-lg border border-red-800 bg-red-900"
            role="img"
            aria-label="Map"
          >
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(153,27,27,0.4),rgba(153,27,27,0.4)_12px,rgba(127,29,29,0.4)_12px,rgba(127,29,29,0.4)_24px)]" />
            <div className="absolute inset-3 rounded-md bg-red-950/80 ring-1 ring-red-800">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(254,202,202,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(254,202,202,0.08)_1px,transparent_1px)] bg-[size:26px_26px]" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <MapPin className="h-8 w-8 text-red-200" style={{ color: theme?.accent }} />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-red-300">Shop</p>
              <p className="mt-1 text-lg font-semibold">99 Kloof St, Gardens</p>
              <p className="text-red-200">Cape Town</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-red-300">Book an appointment</p>
              <p className="mt-1 font-mono text-lg">+27 21 555 0126</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-red-300">Email</p>
              <p className="mt-1 text-lg">cuts@redwoodbarber.co.za</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-red-200">
              <Clock className="h-4 w-4" /> Tue–Sat · 9am–7pm
            </div>
          </div>
        </div>
        <p className="mt-10 text-center text-xs uppercase tracking-widest text-red-300">
          © 2026 {heading}
        </p>
      </div>
    </footer>
  );
}
