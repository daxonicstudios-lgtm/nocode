import { Scale, Mail, Phone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer478(props: BlockProps) {
  const { theme, heading = "Okonkwo Ezra Law" } = props;
  return (
    <footer
      className="w-full bg-white py-16 text-slate-900"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="border-y border-slate-900 py-10 text-center">
          <p className="font-serif text-xs uppercase tracking-[0.3em] text-slate-500">
            Counsel you can trust
          </p>
          <p className="mt-3 font-serif text-5xl">{heading}</p>
          <a
            href="#"
            className="mt-6 inline-block rounded-none bg-slate-900 px-8 py-3 text-xs font-semibold uppercase tracking-widest text-white hover:bg-slate-800"
            style={{ backgroundColor: theme?.primary }}
          >
            Book a consultation
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-8 text-sm md:grid-cols-5">
          <div>
            <p className="font-serif uppercase tracking-widest text-slate-500">Practice</p>
            <ul className="mt-3 space-y-1.5 text-slate-700">
              <li><a href="#" className="hover:underline">Corporate</a></li>
              <li><a href="#" className="hover:underline">Banking</a></li>
              <li><a href="#" className="hover:underline">Energy</a></li>
              <li><a href="#" className="hover:underline">Arbitration</a></li>
            </ul>
          </div>
          <div>
            <p className="font-serif uppercase tracking-widest text-slate-500">Sectors</p>
            <ul className="mt-3 space-y-1.5 text-slate-700">
              <li><a href="#" className="hover:underline">Oil & gas</a></li>
              <li><a href="#" className="hover:underline">Financial services</a></li>
              <li><a href="#" className="hover:underline">Telecoms</a></li>
              <li><a href="#" className="hover:underline">Agriculture</a></li>
            </ul>
          </div>
          <div>
            <p className="font-serif uppercase tracking-widest text-slate-500">People</p>
            <ul className="mt-3 space-y-1.5 text-slate-700">
              <li><a href="#" className="hover:underline">Partners</a></li>
              <li><a href="#" className="hover:underline">Associates</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>
          <div>
            <p className="font-serif uppercase tracking-widest text-slate-500">Insights</p>
            <ul className="mt-3 space-y-1.5 text-slate-700">
              <li><a href="#" className="hover:underline">Publications</a></li>
              <li><a href="#" className="hover:underline">Newsletter</a></li>
              <li><a href="#" className="hover:underline">Events</a></li>
            </ul>
          </div>
          <div>
            <p className="font-serif uppercase tracking-widest text-slate-500">Contact</p>
            <ul className="mt-3 space-y-1.5 text-slate-700">
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4" />+234 1 555 0150</li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4" />info@okonkwoezra.law</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Scale className="h-4 w-4" />Member, Nigerian Bar Association
          </div>
          <p className="text-xs text-slate-500">© 2026 {heading}.</p>
        </div>
        <p className="mt-4 text-[11px] italic leading-relaxed text-slate-400">
          This website is for general information only. Nothing on it constitutes legal advice or creates an attorney-client relationship.
        </p>
      </div>
    </footer>
  );
}
