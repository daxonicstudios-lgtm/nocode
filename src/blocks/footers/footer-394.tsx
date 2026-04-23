import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer394(props: BlockProps) {
  const { theme, heading = "Hearth & Loaf" } = props;
  return (
    <footer
      className="w-full bg-white py-12"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-8 sm:flex-row sm:items-start">
          <div
            className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-2xl bg-gray-100 ring-1 ring-gray-200"
            role="img"
            aria-label="Map"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.08),transparent_50%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <MapPin className="h-7 w-7 text-gray-900" style={{ color: theme?.primary }} />
            </div>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="text-2xl font-bold text-gray-900">{heading}</p>
            <p className="mt-1 text-sm text-gray-500">Artisan bakery & café.</p>
            <div className="mt-4 grid grid-cols-1 gap-2 text-sm">
              <p className="flex items-center gap-2 text-gray-900 sm:justify-start">
                <MapPin className="h-4 w-4 text-gray-400" /> 12 Airport Rd, Kimihurura, Kigali
              </p>
              <p className="flex items-center gap-2 text-gray-900 sm:justify-start">
                <Phone className="h-4 w-4 text-gray-400" /> +27 78 555 0182 (WhatsApp ok)
              </p>
              <p className="flex items-center gap-2 text-gray-900 sm:justify-start">
                <Mail className="h-4 w-4 text-gray-400" /> hello@hearthloaf.rw
              </p>
              <p className="flex items-center gap-2 text-gray-900 sm:justify-start">
                <Clock className="h-4 w-4 text-gray-400" /> Tue–Sun · 7am–4pm
              </p>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white hover:bg-green-600"
              >
                WhatsApp
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white hover:bg-gray-800"
              >
                Directions
              </a>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-gray-500">© 2026 {heading}</p>
      </div>
    </footer>
  );
}
