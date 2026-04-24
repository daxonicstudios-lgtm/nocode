import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer367(props: BlockProps) {
  const { theme, heading = "Lumen Optometrists" } = props;
  return (
    <footer
      className="w-full bg-white py-16"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-gray-200">
          <div
            className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-50 sm:h-64"
            role="img"
            aria-label="Map"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 240" preserveAspectRatio="none">
              <path d="M0,180 C100,120 200,200 300,140 C400,80 500,160 600,100" stroke="#9ca3af" strokeWidth="2" fill="none" strokeDasharray="4 4" />
            </svg>
            <div className="absolute left-[60%] top-[40%]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl ring-4 ring-gray-900">
                <MapPin className="h-6 w-6 text-gray-900" style={{ color: theme?.primary }} />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 sm:p-8">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-2xl font-bold tracking-tight">{heading}</p>
                <p className="text-sm text-gray-500">See clearly. Live brighter.</p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-800"
                style={{ backgroundColor: theme?.primary }}
              >
                <Navigation className="h-4 w-4" /> Directions
              </a>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 border-t border-gray-100 pt-6 sm:grid-cols-4">
              <div>
                <MapPin className="h-4 w-4 text-gray-400" />
                <p className="mt-1.5 text-sm font-medium text-gray-900">Shop 4, V&A Waterfront</p>
                <p className="text-xs text-gray-500">Cape Town 8002</p>
              </div>
              <div>
                <Phone className="h-4 w-4 text-gray-400" />
                <p className="mt-1.5 font-mono text-sm text-gray-900">+27 21 555 0193</p>
              </div>
              <div>
                <Mail className="h-4 w-4 text-gray-400" />
                <p className="mt-1.5 text-sm text-gray-900">visit@lumeneyes.co</p>
              </div>
              <div>
                <Clock className="h-4 w-4 text-gray-400" />
                <p className="mt-1.5 text-sm text-gray-900">Mon–Sat · 9am–7pm</p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-gray-500">© 2026 {heading}</p>
      </div>
    </footer>
  );
}
