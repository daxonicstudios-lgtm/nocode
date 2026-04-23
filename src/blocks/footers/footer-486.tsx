import { Heart, Calendar, MapPin } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer486(props: BlockProps) {
  const { theme, heading = "Zara & Kofi" } = props;
  return (
    <footer
      className="w-full bg-[#fbf3ee] py-16 text-[#5b3b2c]"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Heart className="mx-auto h-6 w-6" style={{ color: theme?.primary }} />
          <p className="mt-4 font-serif text-xs uppercase tracking-[0.4em] text-[#5b3b2c]/60">Forever begins</p>
          <p className="mt-3 font-serif text-5xl italic md:text-6xl">{heading}</p>
          <div className="mx-auto mt-4 h-px w-16 bg-[#5b3b2c]/30" />
          <p className="mt-4 flex items-center justify-center gap-2 text-sm text-[#5b3b2c]/70">
            <Calendar className="h-4 w-4" />Saturday, 14 November 2026
          </p>
          <p className="mt-1 flex items-center justify-center gap-2 text-sm text-[#5b3b2c]/70">
            <MapPin className="h-4 w-4" />Babylonstoren Estate, Paarl
          </p>
          <a
            href="#"
            className="mt-6 inline-block rounded-full border border-[#5b3b2c] px-8 py-3 font-serif text-xs uppercase tracking-widest hover:bg-[#5b3b2c] hover:text-[#fbf3ee]"
            style={{ borderColor: theme?.primary }}
          >
            RSVP
          </a>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-6 text-center text-sm md:grid-cols-5">
          {["Our Story", "Gallery", "Travel", "Registry", "FAQ"].map((l) => (
            <a key={l} href="#" className="font-serif italic hover:underline">
              {l}
            </a>
          ))}
        </div>
        <p className="mt-10 text-center font-serif text-xs italic text-[#5b3b2c]/60">
          #{heading.replace(/\s|&/g, "")}Wedding · with love
        </p>
      </div>
    </footer>
  );
}
