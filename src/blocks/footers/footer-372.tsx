import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer372(props: BlockProps) {
  const { theme, heading = "Mango Preschool" } = props;
  return (
    <footer
      className="w-full bg-yellow-50 py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div
            className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-yellow-200 shadow-lg"
            role="img"
            aria-label="Map"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(253,224,71,0.8),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(250,204,21,0.8),transparent_40%)]" />
            <div className="absolute inset-4 rounded-[2rem] border-2 border-dashed border-yellow-700/30" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-600 shadow-xl" style={{ backgroundColor: theme?.primary }}>
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <p className="mt-3 text-sm font-bold text-yellow-900">Come visit us!</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-4xl font-bold text-yellow-900">{heading}</p>
            <p className="mt-2 text-base text-yellow-800">Where tiny humans learn big things.</p>
            <ul className="mt-6 space-y-4 text-base">
              <li className="flex items-start gap-3 rounded-2xl bg-white p-3 shadow-sm">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
                <div>
                  <p className="font-semibold text-yellow-900">21 Baobab Lane</p>
                  <p className="text-sm text-yellow-700">Gigiri, Nairobi</p>
                </div>
              </li>
              <li className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
                <Phone className="h-5 w-5 flex-shrink-0 text-yellow-600" />
                <span className="font-mono font-semibold text-yellow-900">+254 20 555 0177</span>
              </li>
              <li className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
                <Mail className="h-5 w-5 flex-shrink-0 text-yellow-600" />
                <span className="font-semibold text-yellow-900">hello@mangoschool.ke</span>
              </li>
              <li className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
                <Clock className="h-5 w-5 flex-shrink-0 text-yellow-600" />
                <span className="font-semibold text-yellow-900">Mon–Fri · 7:30am–4pm</span>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-yellow-800">© 2026 {heading}</p>
      </div>
    </footer>
  );
}
