import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer397(props: BlockProps) {
  const { theme, heading = "Gramercy Accountants" } = props;
  return (
    <footer
      className="w-full bg-slate-100 py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
              <Building2 className="h-3.5 w-3.5" /> Our office
            </div>
            <p className="mt-4 text-4xl font-bold text-slate-900">{heading}</p>
            <p className="mt-2 text-base text-slate-600">Tax, audit & advisory for mid-market African firms.</p>
            <div className="mt-8 border-l-4 border-slate-900 pl-5" style={{ borderColor: theme?.primary }}>
              <p className="text-sm font-semibold text-slate-500">Address</p>
              <p className="mt-1 text-xl font-bold text-slate-900">Office 304, Embassy Towers</p>
              <p className="text-slate-700">18 Hass Tower Rd, Westlands, Nairobi</p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg bg-white p-3 ring-1 ring-slate-200">
                <Phone className="h-4 w-4 text-slate-500" />
                <p className="mt-1 text-xs text-slate-500">Direct</p>
                <p className="font-mono font-semibold text-slate-900">+254 20 555 0108</p>
              </div>
              <div className="rounded-lg bg-white p-3 ring-1 ring-slate-200">
                <Mail className="h-4 w-4 text-slate-500" />
                <p className="mt-1 text-xs text-slate-500">General</p>
                <p className="font-semibold text-slate-900">hello@gramercy.africa</p>
              </div>
              <div className="rounded-lg bg-white p-3 ring-1 ring-slate-200">
                <Clock className="h-4 w-4 text-slate-500" />
                <p className="mt-1 text-xs text-slate-500">Hours</p>
                <p className="font-semibold text-slate-900">Mon–Fri · 8am–5pm</p>
              </div>
              <div className="rounded-lg bg-white p-3 ring-1 ring-slate-200">
                <MapPin className="h-4 w-4 text-slate-500" />
                <p className="mt-1 text-xs text-slate-500">Parking</p>
                <p className="font-semibold text-slate-900">Basement levels B1–B3</p>
              </div>
            </div>
          </div>
          <div
            className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 shadow-inner"
            role="img"
            aria-label="Map"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300" />
            <svg className="absolute inset-0 h-full w-full opacity-50" viewBox="0 0 400 300" preserveAspectRatio="none">
              <rect x="50" y="50" width="80" height="60" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
              <rect x="170" y="30" width="60" height="100" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
              <rect x="260" y="80" width="100" height="80" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
              <rect x="80" y="160" width="120" height="90" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
              <rect x="230" y="200" width="130" height="60" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
              <path d="M0,140 L400,140 M150,0 L150,300 M300,0 L300,300" stroke="#94a3b8" strokeWidth="1.5" />
            </svg>
            <div className="absolute left-[55%] top-[50%]">
              <div className="absolute -inset-4 rounded-full bg-slate-900/10 blur-md" />
              <MapPin className="relative h-9 w-9 text-slate-900" style={{ color: theme?.primary }} />
            </div>
          </div>
        </div>
        <p className="mt-10 text-xs text-slate-600">© 2026 {heading}. All rights reserved.</p>
      </div>
    </footer>
  );
}
