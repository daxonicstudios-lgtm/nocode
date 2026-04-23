import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer357(props: BlockProps) {
  const { theme, heading = "Oak & Iron" } = props;
  return (
    <footer
      className="w-full bg-white py-12"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative h-56 w-full overflow-hidden rounded-t-2xl border border-b-0 border-gray-200 bg-gray-50 sm:h-72"
          role="img"
          aria-label="Map strip"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,0,0,0.06),transparent_45%),radial-gradient(circle_at_80%_40%,rgba(0,0,0,0.06),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(0,0,0,0.05),transparent_45%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute left-1/3 top-1/2 -translate-y-1/2">
            <MapPin className="h-8 w-8 text-gray-900" style={{ color: theme?.primary }} />
          </div>
          <div className="absolute right-1/3 top-1/3">
            <MapPin className="h-7 w-7 text-gray-700" />
          </div>
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-1.5 text-xs font-medium text-gray-700 backdrop-blur">
            View on map
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 rounded-b-2xl border border-gray-200 bg-gray-50 p-6 sm:grid-cols-4 sm:gap-6">
          <div>
            <p className="text-xl font-bold">{heading}</p>
            <p className="mt-1 text-xs text-gray-500">Woodwork & fabrication studio.</p>
          </div>
          <div className="text-sm">
            <p className="flex items-center gap-2 text-gray-900">
              <MapPin className="h-4 w-4 text-gray-500" /> Address
            </p>
            <p className="mt-1 text-gray-600">7 Kinondoni Rd, Dar es Salaam</p>
          </div>
          <div className="text-sm">
            <p className="flex items-center gap-2 text-gray-900">
              <Phone className="h-4 w-4 text-gray-500" /> Phone
            </p>
            <p className="mt-1 font-mono text-gray-600">+255 22 555 0144</p>
          </div>
          <div className="text-sm">
            <p className="flex items-center gap-2 text-gray-900">
              <Clock className="h-4 w-4 text-gray-500" /> Hours
            </p>
            <p className="mt-1 text-gray-600">Mon–Sat · 8–5</p>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-gray-500">© 2026 {heading} — crafted in Tanzania.</p>
      </div>
    </footer>
  );
}
