import { Heart, Gift, MapPin } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer489(props: BlockProps) {
  const { theme, heading = "Amara & Kwame" } = props;
  return (
    <footer
      className="w-full bg-[#2b1d22] py-16 text-[#f3e7e1]"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-serif text-xs uppercase tracking-[0.4em] text-[#e2b4a3]">Join our celebration</p>
        <p className="mt-3 font-serif text-6xl italic" style={{ color: theme?.accent }}>{heading}</p>
        <div className="mx-auto mt-4 h-px w-24 bg-[#e2b4a3]/60" />
        <p className="mt-4 text-sm text-[#f3e7e1]/80">Saturday, the twenty-eighth of March · Two thousand twenty-seven</p>
        <p className="text-sm text-[#f3e7e1]/60">Accra · Ghana</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#"
            className="rounded-full bg-[#e2b4a3] px-7 py-3 font-serif text-xs uppercase tracking-widest text-[#2b1d22] hover:bg-[#f3d1c3]"
            style={{ backgroundColor: theme?.accent }}
          >
            RSVP
          </a>
          <a href="#" className="rounded-full border border-[#e2b4a3] px-7 py-3 font-serif text-xs uppercase tracking-widest text-[#e2b4a3] hover:bg-[#e2b4a3]/10">
            View gallery
          </a>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-6 text-sm md:grid-cols-4">
          <div>
            <Heart className="mx-auto h-4 w-4 text-[#e2b4a3]" />
            <p className="mt-2 font-serif italic">Our Story</p>
            <a href="#" className="mt-1 block text-xs text-[#f3e7e1]/60 hover:underline">Read more</a>
          </div>
          <div>
            <MapPin className="mx-auto h-4 w-4 text-[#e2b4a3]" />
            <p className="mt-2 font-serif italic">Travel</p>
            <a href="#" className="mt-1 block text-xs text-[#f3e7e1]/60 hover:underline">Getting here</a>
          </div>
          <div>
            <Gift className="mx-auto h-4 w-4 text-[#e2b4a3]" />
            <p className="mt-2 font-serif italic">Registry</p>
            <a href="#" className="mt-1 block text-xs text-[#f3e7e1]/60 hover:underline">Gifts</a>
          </div>
          <div>
            <Heart className="mx-auto h-4 w-4 text-[#e2b4a3]" />
            <p className="mt-2 font-serif italic">Wedding party</p>
            <a href="#" className="mt-1 block text-xs text-[#f3e7e1]/60 hover:underline">Meet them</a>
          </div>
        </div>
        <p className="mt-12 font-serif text-xs italic text-[#f3e7e1]/50">
          Two hearts. One journey. #{heading.replace(/\s|&/g, "")}27
        </p>
      </div>
    </footer>
  );
}
