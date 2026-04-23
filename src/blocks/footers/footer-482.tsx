import { Car, Phone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer482(props: BlockProps) {
  const { theme, heading = "Cape Auto Luxury" } = props;
  return (
    <footer
      className="w-full bg-white py-16 text-slate-900"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-6 border-b border-slate-200 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Car className="h-7 w-7" style={{ color: theme?.primary }} />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Premium pre-owned</p>
            </div>
            <p className="mt-3 text-4xl font-bold tracking-tight">{heading}</p>
            <p className="mt-2 max-w-md text-sm text-slate-600">
              Curated selection of luxury European marques, inspected to 140 points.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800" style={{ backgroundColor: theme?.primary }}>
              Browse inventory
            </a>
            <a href="#" className="rounded-md border border-slate-900 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">
              Sell us your car
            </a>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-8 text-sm md:grid-cols-5">
          <div>
            <p className="font-semibold">Inventory</p>
            <ul className="mt-3 space-y-1.5 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">BMW</a></li>
              <li><a href="#" className="hover:text-slate-900">Mercedes-Benz</a></li>
              <li><a href="#" className="hover:text-slate-900">Audi</a></li>
              <li><a href="#" className="hover:text-slate-900">Porsche</a></li>
              <li><a href="#" className="hover:text-slate-900">Range Rover</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Services</p>
            <ul className="mt-3 space-y-1.5 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Finance</a></li>
              <li><a href="#" className="hover:text-slate-900">Trade-in</a></li>
              <li><a href="#" className="hover:text-slate-900">Extended warranty</a></li>
              <li><a href="#" className="hover:text-slate-900">Delivery</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Service centre</p>
            <ul className="mt-3 space-y-1.5 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Book service</a></li>
              <li><a href="#" className="hover:text-slate-900">Parts</a></li>
              <li><a href="#" className="hover:text-slate-900">Detailing</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">About</p>
            <ul className="mt-3 space-y-1.5 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Our story</a></li>
              <li><a href="#" className="hover:text-slate-900">Reviews</a></li>
              <li><a href="#" className="hover:text-slate-900">Press</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Visit</p>
            <ul className="mt-3 space-y-1.5 text-slate-600">
              <li>12 Beach Road, Cape Town</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4" />+27 21 555 0162</li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-slate-500">© 2026 {heading}. DMS-registered dealer 18293.</p>
      </div>
    </footer>
  );
}
