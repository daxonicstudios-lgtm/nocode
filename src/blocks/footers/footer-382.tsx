import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer382(props: BlockProps) {
  const { theme, heading = "Olive Branch Deli" } = props;
  return (
    <footer
      className="w-full bg-[#f4f1ea] py-12 text-stone-900"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 h-px w-16 bg-stone-400" />
          <p className="font-serif text-xs uppercase tracking-[0.4em] text-stone-500">Since 2019</p>
          <p className="mt-3 font-serif text-4xl text-stone-900">{heading}</p>
          <p className="mt-3 max-w-md font-serif text-sm italic text-stone-600">
            Imported oils, hand-cut charcuterie, cheese the old-fashioned way.
          </p>
          <div className="mb-10 mt-6 h-px w-16 bg-stone-400" />
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div
            className="relative aspect-[5/4] overflow-hidden rounded-sm border border-stone-300 bg-[#ede7d8]"
            role="img"
            aria-label="Map"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(68,64,60,0.12)_80%)]" />
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_16px,rgba(120,113,108,0.04)_16px,rgba(120,113,108,0.04)_17px)]" />
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <MapPin className="h-9 w-9 text-stone-800" style={{ color: theme?.primary }} />
              <p className="mt-2 font-serif text-xs italic text-stone-700">Rosebank Village</p>
            </div>
          </div>
          <div className="space-y-6 font-serif">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Address</p>
              <p className="mt-2 text-xl text-stone-900">12 Tyrwhitt Ave</p>
              <p className="text-xl text-stone-600">Rosebank, Johannesburg</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Phone</p>
                <p className="mt-2 font-mono text-lg text-stone-900">+27 11 555 0198</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Hours</p>
                <p className="mt-2 text-lg text-stone-900">Tue–Sat · 8am–6pm</p>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Email</p>
              <p className="mt-2 text-lg text-stone-900">hello@olivebranchdeli.co.za</p>
            </div>
          </div>
        </div>
        <p className="mt-12 text-center font-serif text-xs italic text-stone-500">
          © 2026 {heading}
        </p>
      </div>
    </footer>
  );
}
