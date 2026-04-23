import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer351(props: BlockProps) {
  const {
    theme,
    heading = "Harbor House",
    bodyText = "A harborside bistro serving seasonal plates on Long Street.",
  } = props;
  return (
    <footer
      className="w-full border-t border-gray-200 bg-white py-12"
      style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xl font-bold tracking-tight">{heading}</p>
            <p className="mt-2 text-sm text-gray-600">{bodyText}</p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 text-gray-500" />
                <span>215 Long Street, Cape Town 8001</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 text-gray-500" />
                <span>+27 21 555 0134</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 text-gray-500" />
                <span>hello@harborhouse.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 text-gray-500" />
                <span>Mon–Fri · 9am–6pm</span>
              </li>
            </ul>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-1.5 rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
              style={{ backgroundColor: theme?.primary }}
            >
              <Navigation className="h-4 w-4" /> Get directions
            </a>
          </div>
          <div
            className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100"
            role="img"
            aria-label="Map placeholder"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.06),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(0,0,0,0.06),transparent_40%)]" />
            <div className="relative flex flex-col items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md">
                <MapPin className="h-5 w-5 text-gray-900" style={{ color: theme?.primary }} />
              </div>
              <p className="text-xs font-medium text-gray-600">Cape Town</p>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6 text-xs text-gray-500">
          © 2026 {heading}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
