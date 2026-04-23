import { Stethoscope, Phone, Clock, MapPin, Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer461(props: BlockProps) {
  const {
    theme,
    heading = "Northlake Medical Clinic",
    bodyText = "Caring for families across Cape Town for 15+ years.",
  } = props;
  return (
    <footer
      className="w-full bg-white py-14 text-slate-800"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-teal-50 p-6 md:p-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">24/7 Emergency</p>
              <p className="mt-1 text-2xl font-semibold text-teal-900">+27 21 555 9111</p>
            </div>
            <a
              href="#"
              className="rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-800"
              style={{ backgroundColor: theme?.primary }}
            >
              Book appointment
            </a>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-teal-700" style={{ color: theme?.primary }} />
              <p className="font-semibold">{heading}</p>
            </div>
            <p className="mt-3 text-sm text-slate-600">{bodyText}</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Patients</p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
              <li><a href="#" className="hover:text-teal-700">Book appointment</a></li>
              <li><a href="#" className="hover:text-teal-700">Patient portal</a></li>
              <li><a href="#" className="hover:text-teal-700">Insurance accepted</a></li>
              <li><a href="#" className="hover:text-teal-700">New patient forms</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Services</p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
              <li><a href="#" className="hover:text-teal-700">Family medicine</a></li>
              <li><a href="#" className="hover:text-teal-700">Pediatrics</a></li>
              <li><a href="#" className="hover:text-teal-700">Women's health</a></li>
              <li><a href="#" className="hover:text-teal-700">Travel clinic</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Visit</p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" />88 Main Road, Rondebosch</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4" />+27 21 555 0140</li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4" />care@northlakemed.co.za</li>
              <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4" />Mon–Fri · 8am–6pm</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row md:justify-between">
          <p>© 2026 {heading}. HPCSA registered.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-900">Privacy (POPIA)</a>
            <a href="#" className="hover:text-slate-900">Patient rights</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
