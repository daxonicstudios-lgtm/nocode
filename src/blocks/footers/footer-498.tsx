import { Camera } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer498(props: BlockProps) {
  const { theme, heading = "Kofi Mensah · Photographer" } = props;
  return (
    <footer
      className="w-full bg-white py-20 text-[#222]"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="h-px w-12 bg-[#222]" />
          <p className="mt-4 text-xs uppercase tracking-[0.5em] text-neutral-500">Travel & lifestyle</p>
          <p className="mt-3 font-serif text-5xl">{heading}</p>
          <p className="mt-3 max-w-md text-sm text-neutral-500">
            Making photographs across West Africa since 2015. Available for editorial, travel, and private commissions.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-[3/4] bg-neutral-100" />
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm">
          {["Portfolio", "Services", "About", "Journal", "Shop Prints", "Contact"].map((l) => (
            <a key={l} href="#" className="font-serif italic hover:underline">
              {l}
            </a>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-2 text-xs text-neutral-500">
          <a
            href="#"
            className="rounded-none border border-[#222] px-8 py-3 font-serif text-xs uppercase tracking-widest text-[#222] hover:bg-[#222] hover:text-white"
            style={{ borderColor: theme?.primary }}
          >
            Book a session
          </a>
          <p className="mt-6 flex items-center gap-2 font-serif italic">
            <Camera className="h-3.5 w-3.5" />© 2026 {heading}. Based in Accra.
          </p>
        </div>
      </div>
    </footer>
  );
}
