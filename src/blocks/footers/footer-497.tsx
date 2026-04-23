import { Camera, Image as ImageIcon } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer497(props: BlockProps) {
  const { theme, heading = "Aderinsola Photography" } = props;
  return (
    <footer
      className="w-full bg-[#111] py-16 text-white"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Camera className="h-6 w-6" style={{ color: theme?.accent }} />
            <p className="mt-3 font-serif text-4xl italic">{heading}</p>
            <p className="mt-2 max-w-sm text-sm text-white/60">
              Documenting love, lineage, and the in-between moments.
            </p>
          </div>
          <a
            href="#"
            className="rounded-full bg-white px-7 py-3 font-serif text-xs uppercase tracking-widest text-black hover:bg-neutral-200"
            style={{ backgroundColor: theme?.accent, color: theme?.primary }}
          >
            Book a session
          </a>
        </div>
        <div className="mt-10">
          <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/50">
            <Camera className="h-4 w-4" />@aderinsola · Latest
          </p>
          <div className="mt-3 grid grid-cols-4 gap-1 md:grid-cols-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-square bg-white/10" />
            ))}
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 text-sm md:grid-cols-4">
          <div>
            <p className="font-serif uppercase tracking-widest text-white/40">Portfolio</p>
            <ul className="mt-3 space-y-1.5">
              <li><a href="#" className="hover:underline">Weddings</a></li>
              <li><a href="#" className="hover:underline">Engagements</a></li>
              <li><a href="#" className="hover:underline">Families</a></li>
              <li><a href="#" className="hover:underline">Brands</a></li>
            </ul>
          </div>
          <div>
            <p className="font-serif uppercase tracking-widest text-white/40">Info</p>
            <ul className="mt-3 space-y-1.5">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Investment</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Journal</a></li>
            </ul>
          </div>
          <div>
            <p className="font-serif uppercase tracking-widest text-white/40">Services</p>
            <ul className="mt-3 space-y-1.5">
              <li><a href="#" className="hover:underline">Destination</a></li>
              <li><a href="#" className="hover:underline">Elopement</a></li>
              <li><a href="#" className="hover:underline">Commercial</a></li>
            </ul>
          </div>
          <div>
            <p className="font-serif uppercase tracking-widest text-white/40">Contact</p>
            <ul className="mt-3 space-y-1.5">
              <li>hello@aderinsola.co</li>
              <li>Lagos · Accra</li>
              <li><a href="#" className="hover:underline">Client portal</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-10 flex items-center justify-center gap-2 font-serif text-xs italic text-white/40">
          <ImageIcon className="h-3.5 w-3.5" />© 2026 {heading}.
        </p>
      </div>
    </footer>
  );
}
