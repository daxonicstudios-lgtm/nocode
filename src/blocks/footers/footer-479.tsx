import { Scale, Phone, Briefcase } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer479(props: BlockProps) {
  const { theme, heading = "Harbour Law Group" } = props;
  return (
    <footer
      className="w-full bg-[#0a1e2a] py-16 text-slate-100"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Scale className="h-7 w-7 text-amber-300" style={{ color: theme?.accent }} />
            <p className="mt-3 font-serif text-3xl">{heading}</p>
            <p className="mt-3 max-w-sm text-sm text-slate-300">
              Full-service law firm serving East Africa with depth in infrastructure, fintech, and dispute resolution.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="rounded-md bg-amber-300 px-5 py-2.5 text-sm font-semibold text-[#0a1e2a] hover:bg-amber-200"
                style={{ backgroundColor: theme?.accent }}
              >
                Schedule consultation
              </a>
              <a href="#" className="rounded-md border border-slate-500 px-5 py-2.5 text-sm font-semibold hover:border-slate-300">
                Client portal
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm md:col-span-7 md:grid-cols-3">
            <div>
              <p className="font-serif text-xs uppercase tracking-widest text-amber-300">Practice</p>
              <ul className="mt-3 space-y-1.5 text-slate-300">
                <li><a href="#" className="hover:text-white">Corporate</a></li>
                <li><a href="#" className="hover:text-white">Dispute resolution</a></li>
                <li><a href="#" className="hover:text-white">IP & tech</a></li>
                <li><a href="#" className="hover:text-white">Employment</a></li>
                <li><a href="#" className="hover:text-white">Regulatory</a></li>
              </ul>
            </div>
            <div>
              <p className="font-serif text-xs uppercase tracking-widest text-amber-300">Firm</p>
              <ul className="mt-3 space-y-1.5 text-slate-300">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">People</a></li>
                <li><a href="#" className="hover:text-white">Offices</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <p className="font-serif text-xs uppercase tracking-widest text-amber-300">Offices</p>
              <ul className="mt-3 space-y-1.5 text-slate-300">
                <li>Nairobi · Westlands</li>
                <li>Dar es Salaam</li>
                <li>Kigali</li>
                <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" />+254 20 555 0165</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 md:flex-row">
          <p className="italic">
            Regulated by the Law Society of Kenya. The content of this site is for general information and is not legal advice.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="LinkedIn"><Briefcase className="h-4 w-4" /></a>
            <p>© 2026 {heading}.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
