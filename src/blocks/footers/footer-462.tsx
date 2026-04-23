import { Heart, Phone, Clock } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer462(props: BlockProps) {
  const { theme, heading = "Harmony Health Centre" } = props;
  const insurers = ["Discovery", "Momentum", "Bonitas", "GEMS", "Medshield", "AAR"];
  return (
    <footer
      className="w-full bg-gradient-to-br from-sky-50 to-white py-14 text-slate-800"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Heart className="mx-auto h-7 w-7 text-sky-600" style={{ color: theme?.primary }} />
          <p className="mt-3 text-3xl font-semibold tracking-tight">{heading}</p>
          <p className="mt-2 text-sm text-slate-600">Compassionate care, close to home.</p>
          <a
            href="#"
            className="mt-5 inline-block rounded-full bg-sky-600 px-7 py-3 text-sm font-semibold text-white hover:bg-sky-700"
            style={{ backgroundColor: theme?.primary }}
          >
            Book an appointment
          </a>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-sky-100 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">Hours</p>
            <ul className="mt-3 space-y-1 text-sm text-slate-700">
              <li className="flex justify-between"><span>Mon – Fri</span><span>7am–7pm</span></li>
              <li className="flex justify-between"><span>Saturday</span><span>8am–2pm</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>Closed</span></li>
            </ul>
            <p className="mt-3 flex items-center gap-2 text-xs text-slate-500"><Clock className="h-3.5 w-3.5" />Walk-ins welcome</p>
          </div>
          <div className="rounded-2xl border border-sky-100 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">Emergency</p>
            <p className="mt-3 flex items-center gap-2 text-lg font-semibold text-slate-900">
              <Phone className="h-5 w-5 text-red-500" /> +254 20 555 9111
            </p>
            <p className="mt-1 text-sm text-slate-600">Available 24 hours a day.</p>
            <a href="#" className="mt-3 inline-block text-sm font-semibold text-sky-700 hover:underline">Find nearest ER</a>
          </div>
          <div className="rounded-2xl border border-sky-100 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">Services</p>
            <ul className="mt-3 space-y-1 text-sm text-slate-700">
              <li><a href="#" className="hover:text-sky-700">General consult</a></li>
              <li><a href="#" className="hover:text-sky-700">Dental</a></li>
              <li><a href="#" className="hover:text-sky-700">Lab & imaging</a></li>
              <li><a href="#" className="hover:text-sky-700">Pharmacy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 rounded-2xl bg-slate-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Insurance accepted</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            {insurers.map((i) => (
              <span key={i} className="rounded-full border border-slate-200 bg-white px-3 py-1">{i}</span>
            ))}
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-slate-500">© 2026 {heading}. Nairobi · Mombasa.</p>
      </div>
    </footer>
  );
}
