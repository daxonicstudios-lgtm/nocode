import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer387(props: BlockProps) {
  const { theme, heading = "Tembo Safari Co." } = props;
  return (
    <footer
      className="w-full bg-[#faf7f0] py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-2">
            <p className="font-serif text-4xl text-amber-950">{heading}</p>
            <p className="mt-2 font-serif text-sm italic text-amber-900/70">
              Private safaris in the Maasai Mara since 2001.
            </p>
            <div className="mt-8 space-y-5 font-serif">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-amber-700">Booking office</p>
                <p className="mt-1 text-lg text-amber-950">Ngong Rd, Nairobi 00509</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-amber-700">Speak to us</p>
                <p className="mt-1 font-mono text-lg text-amber-950">+254 20 555 0122</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-amber-700">Write</p>
                <p className="mt-1 text-lg text-amber-950">safari@tembo.co.ke</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-amber-700">Reception</p>
                <p className="mt-1 text-lg text-amber-950">Mon–Sat · 8am–6pm</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-lg border border-amber-200 bg-[#f3ebd5] shadow-sm"
              role="img"
              aria-label="Map"
            >
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_28px,rgba(180,83,9,0.06)_28px,rgba(180,83,9,0.06)_29px),repeating-linear-gradient(90deg,transparent,transparent_28px,rgba(180,83,9,0.06)_28px,rgba(180,83,9,0.06)_29px)]" />
              <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 400 300" preserveAspectRatio="none">
                <path d="M50,50 Q150,100 200,80 T350,120 L370,200 Q250,220 150,200 T40,180 Z" stroke="rgba(120,53,15,0.3)" strokeWidth="1.5" fill="rgba(120,53,15,0.04)" />
              </svg>
              <div className="absolute left-[45%] top-[50%]">
                <MapPin className="h-7 w-7 text-amber-900" style={{ color: theme?.primary }} />
              </div>
              <div className="absolute bottom-4 right-4 rounded-sm border border-amber-900/40 bg-white/80 px-3 py-1.5 font-serif text-xs italic text-amber-900">
                Maasai Mara
              </div>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center font-serif text-xs italic text-amber-800">
          © 2026 {heading} · Licensed tour operator
        </p>
      </div>
    </footer>
  );
}
