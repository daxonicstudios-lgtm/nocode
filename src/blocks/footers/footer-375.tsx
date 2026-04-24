import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer375(props: BlockProps) {
  const { theme, heading = "Arcadia Hotel" } = props;
  return (
    <footer
      className="w-full bg-neutral-900 py-16 text-neutral-100"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-serif text-4xl">{heading}</p>
            <p className="mt-3 max-w-sm text-sm text-neutral-400">
              A 1920s grand hotel, restored with restraint. 48 rooms overlooking the harbour.
            </p>
            <div className="mt-8 space-y-1 font-serif">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Address</p>
              <p className="text-xl">24 Somerset Road</p>
              <p className="text-xl text-neutral-400">Green Point, Cape Town 8005</p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Reservations</p>
                <p className="mt-1 font-mono">+27 21 555 0150</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Concierge</p>
                <p className="mt-1">stay@arcadia-hotel.com</p>
              </div>
            </div>
          </div>
          <div
            className="relative aspect-[4/5] overflow-hidden rounded-sm bg-neutral-950 ring-1 ring-neutral-800 lg:col-span-7 lg:aspect-auto"
            role="img"
            aria-label="Map"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(250,250,250,0.04),transparent_50%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(250,250,250,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(250,250,250,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 500" preserveAspectRatio="none">
              <path
                d="M100,0 L100,200 L250,200 L250,350 L400,350"
                stroke="rgba(250,250,250,0.15)"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M0,400 L150,400 L150,500"
                stroke="rgba(250,250,250,0.12)"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <div className="absolute left-[50%] top-[45%]">
              <div className="absolute -inset-4 rounded-full bg-white/10 blur-lg" />
              <MapPin className="relative h-8 w-8 text-white" style={{ color: theme?.accent }} />
            </div>
            <span className="absolute bottom-6 right-6 font-serif text-xs uppercase tracking-[0.3em] text-neutral-400">
              View on map
            </span>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-neutral-800 pt-6 text-xs text-neutral-500">
          <p>© 2026 {heading}</p>
          <p className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5" /> Check-in from 3pm
          </p>
        </div>
      </div>
    </footer>
  );
}
