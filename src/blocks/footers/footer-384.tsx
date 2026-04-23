import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer384(props: BlockProps) {
  const { theme, heading = "Aurora Photography" } = props;
  return (
    <footer
      className="w-full bg-black py-14 text-white"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-serif text-5xl font-light italic">{heading}</p>
          <p className="mt-3 font-serif text-sm tracking-widest text-neutral-400">WEDDING · PORTRAIT · STUDIO</p>
        </div>
        <div
          className="relative mx-auto mt-12 flex aspect-[16/5] max-w-4xl items-center justify-center overflow-hidden rounded-none border border-neutral-800"
          role="img"
          aria-label="Map"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.04),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_100%]" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="absolute -inset-10 rounded-full bg-white/5 blur-2xl" />
            <MapPin className="relative h-8 w-8 text-white" style={{ color: theme?.accent }} />
            <p className="relative mt-2 font-serif text-xs tracking-[0.3em] text-neutral-400">STUDIO · LAGOS</p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-8 border-y border-neutral-800 py-8 sm:grid-cols-4">
          <div className="text-center">
            <MapPin className="mx-auto h-4 w-4 text-neutral-500" />
            <p className="mt-2 font-serif text-xs tracking-widest text-neutral-500">ADDRESS</p>
            <p className="mt-1 text-sm">7B Glover Rd</p>
            <p className="text-sm text-neutral-400">Ikoyi, Lagos</p>
          </div>
          <div className="text-center">
            <Phone className="mx-auto h-4 w-4 text-neutral-500" />
            <p className="mt-2 font-serif text-xs tracking-widest text-neutral-500">PHONE</p>
            <p className="mt-1 font-mono text-sm">+234 1 555 0175</p>
          </div>
          <div className="text-center">
            <Mail className="mx-auto h-4 w-4 text-neutral-500" />
            <p className="mt-2 font-serif text-xs tracking-widest text-neutral-500">EMAIL</p>
            <p className="mt-1 text-sm">book@aurora.photo</p>
          </div>
          <div className="text-center">
            <Clock className="mx-auto h-4 w-4 text-neutral-500" />
            <p className="mt-2 font-serif text-xs tracking-widest text-neutral-500">STUDIO</p>
            <p className="mt-1 text-sm">By appointment</p>
          </div>
        </div>
        <p className="mt-8 text-center font-serif text-xs tracking-[0.3em] text-neutral-500">
          © 2026 {heading.toUpperCase()}
        </p>
      </div>
    </footer>
  );
}
