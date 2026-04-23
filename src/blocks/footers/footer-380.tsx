import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer380(props: BlockProps) {
  const { theme, heading = "Sage & Stone Yoga" } = props;
  return (
    <footer
      className="w-full bg-lime-50 py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[3rem] bg-gradient-to-br from-lime-100 to-emerald-100 p-8 shadow-sm">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="font-serif text-3xl text-lime-950">{heading}</p>
              <p className="mt-2 text-sm italic text-lime-900/70">A quiet studio tucked between the oaks.</p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                    <MapPin className="h-4 w-4 text-lime-800" />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-lime-950">11 Deneys Reitz Rd</p>
                    <p className="text-lime-900/70">Rondebosch, Cape Town</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                    <Phone className="h-4 w-4 text-lime-800" />
                  </div>
                  <span className="font-mono text-sm text-lime-950">+27 21 555 0148</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                    <Mail className="h-4 w-4 text-lime-800" />
                  </div>
                  <span className="text-sm text-lime-950">breathe@sagestone.yoga</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                    <Clock className="h-4 w-4 text-lime-800" />
                  </div>
                  <span className="text-sm text-lime-950">Mon–Sun · 6am–8pm</span>
                </div>
              </div>
            </div>
            <div
              className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-white/50 shadow-inner"
              role="img"
              aria-label="Map"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(101,163,13,0.15),transparent_50%)]" />
              <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
                <circle cx="50" cy="50" r="30" stroke="#4d7c0f" strokeWidth="0.3" fill="none" />
                <circle cx="50" cy="50" r="20" stroke="#4d7c0f" strokeWidth="0.3" fill="none" />
                <circle cx="50" cy="50" r="10" stroke="#4d7c0f" strokeWidth="0.3" fill="none" />
              </svg>
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <MapPin className="h-8 w-8 text-lime-900" style={{ color: theme?.primary }} />
                <p className="mt-2 font-serif text-xs italic text-lime-900">find your center</p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center font-serif text-xs italic text-lime-900/60">
          © 2026 {heading}
        </p>
      </div>
    </footer>
  );
}
