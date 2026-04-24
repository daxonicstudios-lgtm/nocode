import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer355(props: BlockProps) {
  const { theme, heading = "Bloom Salon" } = props;
  const hours = [
    { d: "Monday", h: "Closed" },
    { d: "Tue – Fri", h: "9am – 7pm" },
    { d: "Saturday", h: "9am – 5pm" },
    { d: "Sunday", h: "10am – 3pm" },
  ];
  return (
    <footer
      className="w-full bg-rose-50 py-14 text-rose-950"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div>
            <p className="font-serif text-2xl">{heading}</p>
            <p className="mt-2 text-sm text-rose-900/70">Hair, skin, and quiet afternoons.</p>
            <ul className="mt-6 space-y-2.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4" /> 88 Kloof Street, Gardens, Cape Town
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4" /> +27 21 555 0199
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4" /> book@bloomsalon.co.za
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-rose-900/60">Hours</p>
            <table className="mt-4 w-full text-sm">
              <tbody>
                {hours.map((r) => (
                  <tr key={r.d} className="border-b border-rose-200 last:border-0">
                    <td className="py-2 font-medium">{r.d}</td>
                    <td className="py-2 text-right text-rose-900/80">{r.h}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            className="relative aspect-square overflow-hidden rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-100 to-rose-200"
            role="img"
            aria-label="Map"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.6),transparent_40%)]" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg">
                <MapPin className="h-7 w-7 text-rose-700" style={{ color: theme?.primary }} />
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-rose-900">View on map</p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-rose-200 pt-6 text-xs text-rose-900/60">
          <p>© 2026 {heading}</p>
          <p className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5" /> Walk-ins welcome
          </p>
        </div>
      </div>
    </footer>
  );
}
