import { Home, Search, Calculator, ArrowRight } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer457(props: BlockProps) {
  const { theme, heading = "Anchor Realty" } = props;
  return (
    <footer
      className="w-full bg-slate-950 py-16 text-slate-100"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-900 p-8">
            <Search className="h-6 w-6 text-amber-400" style={{ color: theme?.accent }} />
            <p className="mt-3 text-xl font-semibold">Start your property search</p>
            <p className="mt-2 text-sm text-slate-400">Over 4,200 active listings across Kenya and Uganda.</p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-300"
              style={{ backgroundColor: theme?.accent }}
            >
              Browse listings <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="rounded-2xl bg-slate-900 p-8">
            <Calculator className="h-6 w-6 text-amber-400" style={{ color: theme?.accent }} />
            <p className="mt-3 text-xl font-semibold">Mortgage calculator</p>
            <p className="mt-2 text-sm text-slate-400">See what you can afford in under a minute.</p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold hover:border-slate-500"
            >
              Calculate now <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 text-sm md:grid-cols-4">
          <div>
            <p className="font-semibold">Buy</p>
            <ul className="mt-3 space-y-1.5 text-slate-400">
              <li><a href="#" className="hover:text-slate-100">Houses</a></li>
              <li><a href="#" className="hover:text-slate-100">Apartments</a></li>
              <li><a href="#" className="hover:text-slate-100">Land</a></li>
              <li><a href="#" className="hover:text-slate-100">Luxury</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Rent</p>
            <ul className="mt-3 space-y-1.5 text-slate-400">
              <li><a href="#" className="hover:text-slate-100">Short stay</a></li>
              <li><a href="#" className="hover:text-slate-100">Long term</a></li>
              <li><a href="#" className="hover:text-slate-100">Office space</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Services</p>
            <ul className="mt-3 space-y-1.5 text-slate-400">
              <li><a href="#" className="hover:text-slate-100">Agents</a></li>
              <li><a href="#" className="hover:text-slate-100">Valuations</a></li>
              <li><a href="#" className="hover:text-slate-100">Property management</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Company</p>
            <ul className="mt-3 space-y-1.5 text-slate-400">
              <li><a href="#" className="hover:text-slate-100">About</a></li>
              <li><a href="#" className="hover:text-slate-100">Careers</a></li>
              <li><a href="#" className="hover:text-slate-100">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 md:flex-row">
          <div className="flex items-center gap-2"><Home className="h-4 w-4" />{heading} · Nairobi · Kampala</div>
          <p>© 2026 {heading}. Licensed real estate broker.</p>
        </div>
      </div>
    </footer>
  );
}
