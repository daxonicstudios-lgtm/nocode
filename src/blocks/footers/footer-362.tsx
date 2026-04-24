import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer362(props: BlockProps) {
  const { theme, heading = "Vault Gym" } = props;
  return (
    <footer
      className="w-full bg-black py-12 text-white"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-lime-400" style={{ color: theme?.accent }}>
              Find us
            </p>
            <p className="mt-2 text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl">{heading}</p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="flex items-center gap-2 text-neutral-400">
                  <MapPin className="h-4 w-4" /> Address
                </p>
                <p className="mt-1">71 Rivonia Rd, Sandton</p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-neutral-400">
                  <Phone className="h-4 w-4" /> Phone
                </p>
                <p className="mt-1 font-mono">+27 11 555 0132</p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-neutral-400">
                  <Clock className="h-4 w-4" /> Hours
                </p>
                <p className="mt-1">24/7</p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-neutral-400">
                  <Mail className="h-4 w-4" /> Email
                </p>
                <p className="mt-1">train@vaultgym.co.za</p>
              </div>
            </div>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 bg-lime-400 px-6 py-3 text-sm font-bold uppercase tracking-widest text-black hover:bg-lime-300"
              style={{ backgroundColor: theme?.accent }}
            >
              <Navigation className="h-4 w-4" /> Directions
            </a>
          </div>
          <div
            className="relative aspect-video overflow-hidden border-2 border-lime-400 bg-neutral-950"
            role="img"
            aria-label="Map"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(163,230,53,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(163,230,53,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute -inset-6 rounded-full bg-lime-400/30 blur-xl" />
              <MapPin className="relative h-10 w-10 text-lime-400" style={{ color: theme?.accent }} />
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-neutral-800 pt-6 text-xs text-neutral-500">
          © 2026 {heading}. No excuses.
        </p>
      </div>
    </footer>
  );
}
