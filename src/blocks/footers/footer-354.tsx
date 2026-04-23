import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer354(props: BlockProps) {
  const { theme, heading = "Copper Kitchen" } = props;
  return (
    <footer
      className="w-full bg-amber-50 py-12 text-stone-900"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative mb-10 aspect-[21/9] overflow-hidden rounded-2xl border-2 border-stone-900/10 bg-[linear-gradient(135deg,#fef3c7,#fde68a)]"
          role="img"
          aria-label="Map"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(120,53,15,0.08))]" />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(120,53,15,0.04)_20px,rgba(120,53,15,0.04)_21px)]" />
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
            <MapPin className="h-10 w-10 text-amber-900" style={{ color: theme?.primary }} />
            <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-amber-900">Accra</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <p className="text-xs uppercase tracking-widest text-stone-500">Visit us</p>
            <p className="mt-2 text-base font-semibold">42 Oxford Street</p>
            <p className="text-sm text-stone-600">Osu, Accra, Ghana</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-stone-500">Reservations</p>
            <p className="mt-2 font-mono text-base">+233 30 555 0178</p>
            <p className="text-sm text-stone-600">book@copperkitchen.gh</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-stone-500">Hours</p>
            <p className="mt-2 text-base font-semibold">Tue–Sun</p>
            <p className="text-sm text-stone-600">6pm–11pm · closed Mon</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-stone-300 pt-6 sm:flex-row">
          <p className="text-xs text-stone-500">© 2026 {heading}</p>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 rounded-full bg-amber-900 px-5 py-2 text-sm font-semibold text-amber-50 hover:bg-amber-800"
            style={{ backgroundColor: theme?.primary }}
          >
            <Navigation className="h-4 w-4" /> Get directions
          </a>
        </div>
      </div>
    </footer>
  );
}
