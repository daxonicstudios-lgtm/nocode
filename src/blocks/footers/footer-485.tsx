import { Car, Wrench, Battery } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer485(props: BlockProps) {
  const { theme, heading = "EcoDrive Motors" } = props;
  return (
    <footer
      className="w-full bg-white py-16 text-slate-900"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { icon: Car, t: "Shop EVs", d: "Browse our electric & hybrid lineup." },
            { icon: Battery, t: "Charging network", d: "300+ stations across East Africa." },
            { icon: Wrench, t: "EV service", d: "Certified technicians, OEM parts." },
          ].map((c, i) => (
            <a key={i} href="#" className="group rounded-2xl border border-slate-200 p-6 hover:border-emerald-500">
              <c.icon className="h-6 w-6 text-emerald-600" style={{ color: theme?.primary }} />
              <p className="mt-3 text-lg font-semibold">{c.t}</p>
              <p className="mt-1 text-sm text-slate-600">{c.d}</p>
              <span className="mt-3 inline-block text-xs font-semibold text-emerald-600 group-hover:underline" style={{ color: theme?.primary }}>
                Learn more →
              </span>
            </a>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <Car className="h-6 w-6 text-emerald-600" style={{ color: theme?.primary }} />
              <p className="text-xl font-semibold">{heading}</p>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              East Africa's first all-electric dealership. Dar es Salaam, Arusha, Nairobi.
            </p>
            <a
              href="#"
              className="mt-4 inline-block rounded-md bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
              style={{ backgroundColor: theme?.primary }}
            >
              Book test drive
            </a>
          </div>
          <div>
            <p className="font-semibold">Vehicles</p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">SUVs</a></li>
              <li><a href="#" className="hover:text-slate-900">Sedans</a></li>
              <li><a href="#" className="hover:text-slate-900">Pre-owned EV</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Ownership</p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Financing</a></li>
              <li><a href="#" className="hover:text-slate-900">Home charger</a></li>
              <li><a href="#" className="hover:text-slate-900">Warranty</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Company</p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">About</a></li>
              <li><a href="#" className="hover:text-slate-900">Locations</a></li>
              <li><a href="#" className="hover:text-slate-900">Careers</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-slate-500">© 2026 {heading}. Charge forward.</p>
      </div>
    </footer>
  );
}
