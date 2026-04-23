import { Home, MapPin, Phone, Mail, Briefcase, Camera } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer456(props: BlockProps) {
  const {
    theme,
    heading = "Meridian Properties",
    bodyText = "Helping families find home across Southern Africa since 2008.",
  } = props;
  return (
    <footer
      className="w-full bg-white py-16 text-slate-900"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <Home className="h-6 w-6 text-blue-900" style={{ color: theme?.primary }} />
              <p className="text-xl font-semibold tracking-tight">{heading}</p>
            </div>
            <p className="mt-4 max-w-sm text-sm text-slate-600">{bodyText}</p>
            <a
              href="#"
              className="mt-6 inline-block rounded-md bg-blue-900 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800"
              style={{ backgroundColor: theme?.primary }}
            >
              Find your home
            </a>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm font-semibold">Properties</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Buy</a></li>
              <li><a href="#" className="hover:text-slate-900">Rent</a></li>
              <li><a href="#" className="hover:text-slate-900">New developments</a></li>
              <li><a href="#" className="hover:text-slate-900">Commercial</a></li>
              <li><a href="#" className="hover:text-slate-900">Sell with us</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm font-semibold">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">About</a></li>
              <li><a href="#" className="hover:text-slate-900">Agents</a></li>
              <li><a href="#" className="hover:text-slate-900">Careers</a></li>
              <li><a href="#" className="hover:text-slate-900">Press</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="text-sm font-semibold">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" />12 Sandton Drive, Johannesburg</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4" />+27 11 555 0180</li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4" />hello@meridian.co.za</li>
            </ul>
            <div className="mt-4 flex gap-3 text-slate-500">
              <a href="#" aria-label="LinkedIn"><Briefcase className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram"><Camera className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row">
          <p>© 2026 {heading}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
