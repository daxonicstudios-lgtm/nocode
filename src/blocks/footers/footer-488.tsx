import { Heart, Camera } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer488(props: BlockProps) {
  const { theme, heading = "Lerato & Thabo" } = props;
  return (
    <footer
      className="w-full bg-[#eae2dc] py-16 text-[#3e2f2a]"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-serif text-xs uppercase tracking-[0.3em] text-[#a67c5a]">She said yes</p>
            <p className="mt-3 font-serif text-5xl italic">{heading}</p>
            <p className="mt-4 max-w-sm text-sm text-[#3e2f2a]/70">
              You are warmly invited to share in our joy as we say "I do" under the Drakensberg stars.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-full bg-[#3e2f2a] px-7 py-2.5 font-serif text-xs uppercase tracking-widest text-[#eae2dc] hover:opacity-90"
                style={{ backgroundColor: theme?.primary }}
              >
                RSVP by 1 Oct
              </a>
              <a href="#" className="rounded-full border border-[#3e2f2a] px-7 py-2.5 font-serif text-xs uppercase tracking-widest hover:bg-white">
                Registry
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="aspect-square rounded-sm bg-[#d6c8be]" />
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center gap-3 border-t border-[#3e2f2a]/20 pt-6">
          <div className="flex gap-6 text-sm">
            {["The Story", "Gallery", "Travel", "Registry", "FAQ"].map((l) => (
              <a key={l} href="#" className="font-serif italic hover:underline">
                {l}
              </a>
            ))}
          </div>
          <p className="flex items-center gap-2 font-serif text-xs italic text-[#3e2f2a]/60">
            <Heart className="h-3.5 w-3.5" style={{ color: theme?.primary }} />
            <Camera className="h-3.5 w-3.5" />Photography by Soul & Sand · 20 Dec 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
