import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer352(props: BlockProps) {
  const { theme, heading = "The Grove", bodyText = "A neighborhood coffee bar in Yaba." } = props;
  return (
    <footer
      className="w-full bg-stone-100 py-14 text-stone-900"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-2">
            <p className="font-serif text-3xl">{heading}</p>
            <p className="mt-3 text-sm text-stone-600">{bodyText}</p>
            <div className="mt-6 space-y-4 text-sm">
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-500">Visit</p>
                <p className="mt-1 font-serif text-base">12 Herbert Macaulay Way, Yaba, Lagos</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-500">Call</p>
                <p className="mt-1 font-mono text-base">+234 1 555 0142</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-500">Email</p>
                <p className="mt-1 font-serif text-base">hello@thegrove.co</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div
              className="relative aspect-[16/9] overflow-hidden rounded-none border border-stone-300 bg-amber-50"
              role="img"
              aria-label="Map"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(120,113,108,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,113,108,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute -inset-6 animate-pulse rounded-full bg-stone-900/10" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-stone-900 text-white shadow-xl">
                    <MapPin className="h-6 w-6" style={{ color: theme?.accent }} />
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-stone-900 shadow-md"
              >
                <Navigation className="h-3.5 w-3.5" /> Get directions
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-stone-300 pt-6 text-xs text-stone-500 sm:flex-row">
          <p>© 2026 {heading}. Handmade in Lagos.</p>
          <p className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5" /> Mon–Sat · 7am–7pm
          </p>
        </div>
      </div>
    </footer>
  );
}
