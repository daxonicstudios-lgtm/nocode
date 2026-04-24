import { Stethoscope, Phone, Clock, MapPin } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer465(props: BlockProps) {
  const { theme, heading = "Riverside Pediatrics" } = props;
  return (
    <footer
      className="w-full bg-white py-14 text-slate-800"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <Stethoscope className="h-8 w-8 text-sky-600" style={{ color: theme?.primary }} />
          <p className="text-2xl font-semibold tracking-tight">{heading}</p>
          <p className="max-w-md text-sm text-slate-600">
            Friendly care from birth to eighteen, in the heart of Kampala.
          </p>
          <a
            href="#"
            className="mt-2 rounded-md bg-sky-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-sky-700"
            style={{ backgroundColor: theme?.primary }}
          >
            Book a visit
          </a>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-6 text-sm md:grid-cols-4">
          <div>
            <p className="font-semibold">Care</p>
            <ul className="mt-3 space-y-1.5 text-slate-600">
              <li><a href="#" className="hover:text-sky-700">Well-child visits</a></li>
              <li><a href="#" className="hover:text-sky-700">Vaccinations</a></li>
              <li><a href="#" className="hover:text-sky-700">Sick visits</a></li>
              <li><a href="#" className="hover:text-sky-700">Teen health</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Families</p>
            <ul className="mt-3 space-y-1.5 text-slate-600">
              <li><a href="#" className="hover:text-sky-700">Patient portal</a></li>
              <li><a href="#" className="hover:text-sky-700">New patients</a></li>
              <li><a href="#" className="hover:text-sky-700">Insurance</a></li>
              <li><a href="#" className="hover:text-sky-700">Forms</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">About</p>
            <ul className="mt-3 space-y-1.5 text-slate-600">
              <li><a href="#" className="hover:text-sky-700">Our doctors</a></li>
              <li><a href="#" className="hover:text-sky-700">Clinic tour</a></li>
              <li><a href="#" className="hover:text-sky-700">Blog</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Visit</p>
            <ul className="mt-3 space-y-1.5 text-slate-600">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" />Plot 12, Kololo, Kampala</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4" />+256 414 555 017</li>
              <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4" />Mon–Sat 8am–5pm</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 rounded-xl bg-red-50 p-4 text-center text-sm text-red-800">
          <span className="font-semibold">After-hours nurse line:</span> +256 414 555 0199 · Available 24/7
        </div>
        <p className="mt-8 text-center text-xs text-slate-500">© 2026 {heading}. Licensed by UMDPC.</p>
      </div>
    </footer>
  );
}
