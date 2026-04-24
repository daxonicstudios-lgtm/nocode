import { Heart, MapPin, Phone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer464(props: BlockProps) {
  const { theme, heading = "Lumina Dental & Aesthetics" } = props;
  return (
    <footer
      className="w-full bg-[#f0f9f7] py-14 text-slate-800"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Heart className="h-6 w-6 text-emerald-700" style={{ color: theme?.primary }} />
            <p className="mt-3 text-2xl font-semibold tracking-tight">{heading}</p>
            <p className="mt-2 max-w-sm text-sm text-slate-600">
              Gentle dentistry and skin care, one smile at a time.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800"
                style={{ backgroundColor: theme?.primary }}
              >
                Book appointment
              </a>
              <a href="#" className="rounded-full border border-emerald-700 px-5 py-2.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-700/10">
                Patient portal
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm font-semibold">Services</p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
              <li><a href="#" className="hover:text-emerald-700">General</a></li>
              <li><a href="#" className="hover:text-emerald-700">Cosmetic</a></li>
              <li><a href="#" className="hover:text-emerald-700">Orthodontics</a></li>
              <li><a href="#" className="hover:text-emerald-700">Skincare</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm font-semibold">Patients</p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
              <li><a href="#" className="hover:text-emerald-700">Our doctors</a></li>
              <li><a href="#" className="hover:text-emerald-700">New patient forms</a></li>
              <li><a href="#" className="hover:text-emerald-700">Insurance</a></li>
              <li><a href="#" className="hover:text-emerald-700">Reviews</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="text-sm font-semibold">Visit us</p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" />Plot 28, Ikoyi, Lagos</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4" />+234 1 555 0190</li>
            </ul>
            <div className="mt-4 rounded-xl border border-emerald-200 bg-white p-3 text-xs text-slate-600">
              <p className="font-semibold text-slate-800">Hours</p>
              <p className="mt-1">Mon–Fri 9am–6pm · Sat 10am–2pm</p>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-slate-500">© 2026 {heading}. Registered with MDCN.</p>
      </div>
    </footer>
  );
}
