import { Stethoscope, AlertCircle, Calendar, Users } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer463(props: BlockProps) {
  const { theme, heading = "Accra Wellness Hospital" } = props;
  return (
    <footer
      className="w-full bg-[#0d3b4f] py-16 text-teal-50"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 rounded-2xl border border-red-400/40 bg-red-500/10 p-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 text-red-300" />
            <div>
              <p className="font-semibold text-red-200">Emergency line</p>
              <p className="text-sm text-red-100/80">For life-threatening emergencies, call immediately.</p>
            </div>
          </div>
          <a href="tel:+233302555911" className="rounded-full bg-red-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-red-600">
            Call +233 30 255 5911
          </a>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5" style={{ color: theme?.primary }} />
              <p className="text-lg font-semibold">{heading}</p>
            </div>
            <p className="mt-3 text-sm text-teal-100/70">Multi-specialty hospital in East Legon, Accra.</p>
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-teal-400 px-5 py-2.5 text-sm font-semibold text-[#0d3b4f] hover:bg-teal-300"
              style={{ backgroundColor: theme?.accent }}
            >
              <Calendar className="h-4 w-4" /> Book appointment
            </a>
          </div>
          <div>
            <p className="font-semibold">Care</p>
            <ul className="mt-3 space-y-1.5 text-sm text-teal-100/70">
              <li><a href="#" className="hover:text-white">Outpatient</a></li>
              <li><a href="#" className="hover:text-white">Maternity</a></li>
              <li><a href="#" className="hover:text-white">Surgery</a></li>
              <li><a href="#" className="hover:text-white">Pediatrics</a></li>
              <li><a href="#" className="hover:text-white">Diagnostics</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Patients</p>
            <ul className="mt-3 space-y-1.5 text-sm text-teal-100/70">
              <li><a href="#" className="hover:text-white">Patient portal</a></li>
              <li><a href="#" className="hover:text-white">Our doctors</a></li>
              <li><a href="#" className="hover:text-white">Insurance</a></li>
              <li><a href="#" className="hover:text-white">Billing & payments</a></li>
              <li><a href="#" className="hover:text-white">Visitor info</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">About</p>
            <ul className="mt-3 space-y-1.5 text-sm text-teal-100/70">
              <li><a href="#" className="hover:text-white">Our mission</a></li>
              <li><a href="#" className="hover:text-white">News</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
            <p className="mt-4 flex items-center gap-2 text-sm text-teal-100/70">
              <Users className="h-4 w-4" />280+ clinicians
            </p>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-teal-100/40">© 2026 {heading}. Accredited by COHSASA.</p>
      </div>
    </footer>
  );
}
