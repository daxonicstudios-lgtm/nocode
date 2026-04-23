import { Home, Building2, Key, Landmark } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer459(props: BlockProps) {
  const { theme, heading = "Westward Estates" } = props;
  const tiles = [
    { icon: Home, label: "Residential" },
    { icon: Building2, label: "Commercial" },
    { icon: Key, label: "Rentals" },
    { icon: Landmark, label: "Investment" },
  ];
  return (
    <footer
      className="w-full bg-white py-16 text-slate-900"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-slate-500">
          Find. Finance. Feel at home.
        </p>
        <p className="mt-3 text-center text-3xl font-semibold tracking-tight">{heading}</p>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {tiles.map((t) => (
            <a
              key={t.label}
              href="#"
              className="group rounded-2xl border border-slate-200 p-6 text-center transition hover:border-slate-900"
            >
              <t.icon className="mx-auto h-7 w-7 text-slate-700 group-hover:text-slate-900" style={{ color: theme?.primary }} />
              <p className="mt-3 text-sm font-semibold">{t.label}</p>
            </a>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-slate-200 pt-10 text-sm md:grid-cols-4">
          <div>
            <p className="font-semibold">Company</p>
            <ul className="mt-3 space-y-1.5 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">About us</a></li>
              <li><a href="#" className="hover:text-slate-900">Our agents</a></li>
              <li><a href="#" className="hover:text-slate-900">Careers</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Buy & sell</p>
            <ul className="mt-3 space-y-1.5 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Search listings</a></li>
              <li><a href="#" className="hover:text-slate-900">Sell your property</a></li>
              <li><a href="#" className="hover:text-slate-900">Mortgage tools</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Resources</p>
            <ul className="mt-3 space-y-1.5 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Buyer's guide</a></li>
              <li><a href="#" className="hover:text-slate-900">Seller's guide</a></li>
              <li><a href="#" className="hover:text-slate-900">Market trends</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Offices</p>
            <ul className="mt-3 space-y-1.5 text-slate-600">
              <li>Lagos · VI</li>
              <li>Abuja · Maitama</li>
              <li>Port Harcourt · GRA</li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-slate-500">© 2026 {heading}. RC 1234567. Licensed estate professionals.</p>
      </div>
    </footer>
  );
}
