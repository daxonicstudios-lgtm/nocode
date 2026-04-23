import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer369(props: BlockProps) {
  const { theme, heading = "North Star Realty" } = props;
  return (
    <footer
      className="w-full bg-slate-50 py-12"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div
            className="relative min-h-[300px] overflow-hidden rounded-2xl bg-slate-200 lg:col-span-7"
            role="img"
            aria-label="Map"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(71,85,105,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(71,85,105,0.1)_1px,transparent_1px)] bg-[size:36px_36px]" />
            <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 100 60" preserveAspectRatio="none">
              <path d="M10,30 L30,30 L30,10 L70,10 L70,50 L90,50" stroke="rgba(71,85,105,0.5)" strokeWidth="1.5" fill="none" />
              <path d="M0,45 L100,45" stroke="rgba(71,85,105,0.3)" strokeWidth="1" fill="none" strokeDasharray="2 2" />
            </svg>
            <div className="absolute left-[40%] top-[30%]">
              <MapPin className="h-8 w-8 text-slate-900 drop-shadow-lg" style={{ color: theme?.primary }} />
            </div>
            <a
              href="#"
              className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-md hover:shadow-lg"
            >
              <Navigation className="h-4 w-4" /> Get directions
            </a>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-5">
            <p className="text-2xl font-bold text-slate-900">{heading}</p>
            <p className="mt-1 text-sm text-slate-500">Premium properties in Johannesburg.</p>
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Office</p>
                <p className="mt-1 text-sm font-medium text-slate-900">135 West St, Sandton</p>
                <p className="text-sm text-slate-500">Johannesburg 2031</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Call</p>
                  <p className="mt-1 font-mono text-sm text-slate-900">+27 11 555 0124</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Email</p>
                  <p className="mt-1 text-sm text-slate-900">hi@northstar.co.za</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Hours</p>
                <p className="mt-1 flex items-center gap-2 text-sm text-slate-900">
                  <Clock className="h-4 w-4 text-slate-400" /> Mon–Sat · 9am–6pm
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-slate-500">© 2026 {heading}. All rights reserved.</p>
      </div>
    </footer>
  );
}
