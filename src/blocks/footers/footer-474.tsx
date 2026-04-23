import { Dumbbell, Heart } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer474(props: BlockProps) {
  const { theme, heading = "Flow Yoga Collective" } = props;
  return (
    <footer
      className="w-full bg-[#f5f1ea] py-14 text-[#2b241b]"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Heart className="mx-auto h-6 w-6" style={{ color: theme?.primary }} />
          <p className="mt-3 font-serif text-3xl italic">{heading}</p>
          <p className="mt-2 text-sm text-[#2b241b]/70">
            Breathe. Move. Return to yourself. Lagos · Ikoyi.
          </p>
          <a
            href="#"
            className="mt-5 inline-block rounded-full border border-[#2b241b] px-6 py-2.5 text-xs font-semibold uppercase tracking-widest hover:bg-[#2b241b] hover:text-[#f5f1ea]"
            style={{ borderColor: theme?.primary }}
          >
            Start free trial
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-8 text-sm md:grid-cols-4">
          <div>
            <p className="font-serif uppercase tracking-widest text-[#2b241b]/50">Classes</p>
            <ul className="mt-3 space-y-1.5">
              <li><a href="#" className="hover:underline">Vinyasa</a></li>
              <li><a href="#" className="hover:underline">Yin</a></li>
              <li><a href="#" className="hover:underline">Pilates</a></li>
              <li><a href="#" className="hover:underline">Prenatal</a></li>
            </ul>
          </div>
          <div>
            <p className="font-serif uppercase tracking-widest text-[#2b241b]/50">Teachers</p>
            <ul className="mt-3 space-y-1.5">
              <li><a href="#" className="hover:underline">Meet the team</a></li>
              <li><a href="#" className="hover:underline">Workshops</a></li>
              <li><a href="#" className="hover:underline">Retreats</a></li>
            </ul>
          </div>
          <div>
            <p className="font-serif uppercase tracking-widest text-[#2b241b]/50">Join</p>
            <ul className="mt-3 space-y-1.5">
              <li><a href="#" className="hover:underline">Membership</a></li>
              <li><a href="#" className="hover:underline">Class pack</a></li>
              <li><a href="#" className="hover:underline">Schedule</a></li>
            </ul>
          </div>
          <div>
            <p className="font-serif uppercase tracking-widest text-[#2b241b]/50">Studio</p>
            <ul className="mt-3 space-y-1.5">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Locations</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-2 border-t border-[#2b241b]/15 pt-6 text-xs text-[#2b241b]/60">
          <div className="flex items-center gap-2"><Dumbbell className="h-3.5 w-3.5" />Studios at Ikoyi & Lekki</div>
          <p className="font-serif italic">© 2026 {heading}. Namaste.</p>
        </div>
      </div>
    </footer>
  );
}
