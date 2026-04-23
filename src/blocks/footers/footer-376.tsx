import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer376(props: BlockProps) {
  const { theme, heading = "Forge Coworking" } = props;
  return (
    <footer
      className="w-full bg-gray-50 py-12"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="p-6 md:col-span-2 md:p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                <span className="h-2 w-2 rounded-full bg-green-500" /> Open now
              </div>
              <p className="mt-4 text-2xl font-bold text-gray-900">{heading}</p>
              <p className="mt-1 text-sm text-gray-500">Coworking for makers in Kampala.</p>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900">Ntinda Complex, Block C</p>
                    <p className="text-gray-500">Kampala, Uganda</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="font-mono text-gray-900">+256 41 555 0139</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-900">work@forge.ug</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-900">24/7 for members</span>
                </div>
              </div>
            </div>
            <div
              className="relative min-h-[220px] bg-gray-100 md:col-span-3"
              role="img"
              aria-label="Map"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(107,114,128,0.15),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(107,114,128,0.15),transparent_40%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(107,114,128,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(107,114,128,0.08)_1px,transparent_1px)] bg-[size:32px_32px]" />
              <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 300 200" preserveAspectRatio="none">
                <path d="M0,100 L100,100 L100,50 L200,50 L200,150 L300,150" stroke="#6b7280" strokeWidth="1.5" fill="none" />
              </svg>
              <div className="absolute left-[45%] top-[45%]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 shadow-lg" style={{ backgroundColor: theme?.primary }}>
                  <MapPin className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-gray-500">© 2026 {heading}</p>
      </div>
    </footer>
  );
}
