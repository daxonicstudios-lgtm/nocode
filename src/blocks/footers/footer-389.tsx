import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer389(props: BlockProps) {
  const { theme, heading = "Clayworks Studio" } = props;
  const hours = [
    { d: "Monday", h: "Closed" },
    { d: "Tuesday", h: "10 – 6" },
    { d: "Wednesday", h: "10 – 6" },
    { d: "Thursday", h: "10 – 8" },
    { d: "Friday", h: "10 – 6" },
    { d: "Saturday", h: "9 – 4" },
    { d: "Sunday", h: "Closed" },
  ];
  return (
    <footer
      className="w-full bg-orange-50 py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div>
            <p className="font-serif text-3xl text-orange-950">{heading}</p>
            <p className="mt-2 text-sm text-orange-900/70">Ceramic workshops & wheel-throwing classes.</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-orange-950">
                <MapPin className="mt-0.5 h-4 w-4 text-orange-600" />
                <span>18 Searle St, Woodstock, Cape Town</span>
              </li>
              <li className="flex items-center gap-2.5 text-orange-950">
                <Phone className="h-4 w-4 text-orange-600" />
                <span className="font-mono">+27 21 555 0131</span>
              </li>
              <li className="flex items-center gap-2.5 text-orange-950">
                <Mail className="h-4 w-4 text-orange-600" />
                <span>throw@clayworks.studio</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-orange-700">
              <Clock className="h-3.5 w-3.5" /> Hours
            </p>
            <div className="mt-4 rounded-2xl bg-white p-4 ring-1 ring-orange-200">
              <table className="w-full text-sm">
                <tbody>
                  {hours.map((r) => (
                    <tr key={r.d} className="border-b border-orange-100 last:border-0">
                      <td className="py-1.5 text-orange-900">{r.d}</td>
                      <td className="py-1.5 text-right font-mono text-orange-950">{r.h}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div
            className="relative aspect-square overflow-hidden rounded-2xl bg-orange-100 ring-1 ring-orange-200"
            role="img"
            aria-label="Map"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,88,12,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(194,65,12,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(194,65,12,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <MapPin className="h-9 w-9 text-orange-800" style={{ color: theme?.primary }} />
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-orange-800">View on map</p>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-orange-900/60">© 2026 {heading}</p>
      </div>
    </footer>
  );
}
