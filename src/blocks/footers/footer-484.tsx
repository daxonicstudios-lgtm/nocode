import { Car, Phone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer484(props: BlockProps) {
  const { theme, heading = "Mitchell's Classic Cars" } = props;
  return (
    <footer
      className="w-full bg-[#1a1614] py-16 text-stone-200"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Car className="mx-auto h-8 w-8 text-amber-400" style={{ color: theme?.accent }} />
          <p className="mt-3 font-serif text-4xl">{heading}</p>
          <p className="mt-2 text-sm italic text-stone-400">
            Est. 1978 · Specialists in classic & vintage motorcars · Johannesburg
          </p>
          <a
            href="#"
            className="mt-5 inline-block border border-amber-400 px-7 py-3 font-serif text-xs uppercase tracking-widest text-amber-400 hover:bg-amber-400 hover:text-[#1a1614]"
            style={{ borderColor: theme?.accent, color: theme?.accent }}
          >
            Browse inventory
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 text-sm md:grid-cols-4">
          <div>
            <p className="font-serif text-amber-400">Inventory</p>
            <ul className="mt-3 space-y-1 text-stone-400">
              <li><a href="#" className="hover:text-white">Sports cars</a></li>
              <li><a href="#" className="hover:text-white">Saloons</a></li>
              <li><a href="#" className="hover:text-white">Convertibles</a></li>
              <li><a href="#" className="hover:text-white">Coming soon</a></li>
            </ul>
          </div>
          <div>
            <p className="font-serif text-amber-400">Services</p>
            <ul className="mt-3 space-y-1 text-stone-400">
              <li><a href="#" className="hover:text-white">Restoration</a></li>
              <li><a href="#" className="hover:text-white">Appraisal</a></li>
              <li><a href="#" className="hover:text-white">Consignment</a></li>
              <li><a href="#" className="hover:text-white">Storage</a></li>
            </ul>
          </div>
          <div>
            <p className="font-serif text-amber-400">Workshop</p>
            <ul className="mt-3 space-y-1 text-stone-400">
              <li><a href="#" className="hover:text-white">Service booking</a></li>
              <li><a href="#" className="hover:text-white">Parts sourcing</a></li>
              <li><a href="#" className="hover:text-white">Transport</a></li>
            </ul>
          </div>
          <div>
            <p className="font-serif text-amber-400">Contact</p>
            <ul className="mt-3 space-y-1 text-stone-400">
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4" />+27 11 555 0118</li>
              <li>Kramerville, JHB</li>
              <li><a href="#" className="hover:text-white">Newsletter</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-6 text-center font-serif text-xs italic text-stone-500">
          © 2026 {heading}. Keepers of automotive history.
        </p>
      </div>
    </footer>
  );
}
