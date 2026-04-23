import { Car, Wrench, Phone, MapPin } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer481(props: BlockProps) {
  const {
    theme,
    heading = "Savanna Motors",
    bodyText = "Authorized dealer · Toyota · Hyundai · Suzuki.",
  } = props;
  return (
    <footer
      className="w-full bg-slate-950 py-16 text-white"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-red-600 to-red-700 p-6 md:p-8" style={{ backgroundColor: theme?.primary }}>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-red-200">Ready to drive?</p>
              <p className="mt-1 text-2xl font-bold">Schedule your test drive today</p>
            </div>
            <a href="#" className="rounded-md bg-white px-6 py-3 text-sm font-bold text-red-700 hover:bg-red-50">
              Book test drive
            </a>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2">
              <Car className="h-6 w-6 text-red-400" style={{ color: theme?.accent }} />
              <p className="text-xl font-bold">{heading}</p>
            </div>
            <p className="mt-2 text-sm text-slate-400">{bodyText}</p>
            <div className="mt-4 space-y-1 text-sm text-slate-300">
              <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" />Mombasa Road, Nairobi</p>
              <p className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4" />+254 20 555 0170</p>
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm font-bold">Shop</p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white">New vehicles</a></li>
              <li><a href="#" className="hover:text-white">Pre-owned</a></li>
              <li><a href="#" className="hover:text-white">Trucks & SUVs</a></li>
              <li><a href="#" className="hover:text-white">Specials</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm font-bold">Service</p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white">Book service</a></li>
              <li><a href="#" className="hover:text-white">Genuine parts</a></li>
              <li><a href="#" className="hover:text-white">Recalls</a></li>
              <li><a href="#" className="hover:text-white">Tyres</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm font-bold">Finance</p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white">Apply online</a></li>
              <li><a href="#" className="hover:text-white">Trade-in</a></li>
              <li><a href="#" className="hover:text-white">Calculator</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm font-bold">Dealer</p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 md:flex-row">
          <div className="flex items-center gap-2"><Wrench className="h-3.5 w-3.5" />Certified service centre</div>
          <p>© 2026 {heading}. Authorized dealer.</p>
        </div>
      </div>
    </footer>
  );
}
