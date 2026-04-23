import { Home, MapPin, Phone, Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer458(props: BlockProps) {
  const { theme, heading = "Kigali Key Realty" } = props;
  return (
    <footer
      className="w-full bg-[#f5f7fa] py-14 text-slate-800"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-2 text-slate-900">
                <Home className="h-6 w-6" style={{ color: theme?.primary }} />
                <p className="text-xl font-semibold">{heading}</p>
              </div>
              <p className="mt-2 max-w-md text-sm text-slate-600">
                Talk to a local expert. We'll match you with the right property in 48 hours.
              </p>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4">
              <div className="h-12 w-12 rounded-full bg-slate-200" />
              <div>
                <p className="text-sm font-semibold">Aline Uwase</p>
                <p className="text-xs text-slate-500">Senior Agent · Kigali</p>
                <a href="#" className="mt-1 inline-block text-xs font-semibold text-blue-700 hover:underline" style={{ color: theme?.primary }}>
                  Book a call →
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-8 text-sm md:grid-cols-4">
          <div>
            <p className="font-semibold">Search</p>
            <ul className="mt-3 space-y-1.5 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Buy</a></li>
              <li><a href="#" className="hover:text-slate-900">Rent</a></li>
              <li><a href="#" className="hover:text-slate-900">New developments</a></li>
              <li><a href="#" className="hover:text-slate-900">Map search</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Tools</p>
            <ul className="mt-3 space-y-1.5 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Mortgage calculator</a></li>
              <li><a href="#" className="hover:text-slate-900">Area guides</a></li>
              <li><a href="#" className="hover:text-slate-900">Market report</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Sell</p>
            <ul className="mt-3 space-y-1.5 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">List with us</a></li>
              <li><a href="#" className="hover:text-slate-900">Free valuation</a></li>
              <li><a href="#" className="hover:text-slate-900">Meet the team</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Office</p>
            <ul className="mt-3 space-y-1.5 text-slate-600">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" />KG 7 Ave, Kigali</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4" />+250 788 555 019</li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4" />hello@kigalikey.rw</li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-slate-500">© 2026 {heading}. Licensed REB broker.</p>
      </div>
    </footer>
  );
}
