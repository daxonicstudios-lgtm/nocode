import { BookOpen, Phone, MapPin } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer469(props: BlockProps) {
  const { theme, heading = "Bright Star Montessori" } = props;
  return (
    <footer
      className="w-full bg-[#fff8ea] py-14 text-[#2a1f12]"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <BookOpen className="mx-auto h-7 w-7" style={{ color: theme?.primary }} />
          <p className="mt-3 font-serif text-3xl">{heading}</p>
          <p className="mt-2 text-sm text-[#2a1f12]/70">Warm, curious, prepared. Ages 2–12.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-[#2a1f12]/15 bg-white p-6">
            <p className="font-serif text-base">Programs</p>
            <ul className="mt-3 space-y-1.5 text-sm text-[#2a1f12]/70">
              <li><a href="#" className="hover:text-[#2a1f12]">Toddler</a></li>
              <li><a href="#" className="hover:text-[#2a1f12]">Primary</a></li>
              <li><a href="#" className="hover:text-[#2a1f12]">Lower elementary</a></li>
              <li><a href="#" className="hover:text-[#2a1f12]">Holiday camps</a></li>
            </ul>
          </div>
          <div className="rounded-2xl border border-[#2a1f12]/15 bg-white p-6">
            <p className="font-serif text-base">Admissions</p>
            <p className="mt-2 text-sm text-[#2a1f12]/70">Rolling admissions with two intakes per year.</p>
            <a
              href="#"
              className="mt-4 inline-block rounded-full bg-[#2a1f12] px-5 py-2 text-sm font-semibold text-[#fff8ea] hover:opacity-90"
              style={{ backgroundColor: theme?.primary }}
            >
              Schedule a tour
            </a>
          </div>
          <div className="rounded-2xl border border-[#2a1f12]/15 bg-white p-6">
            <p className="font-serif text-base">Visit</p>
            <ul className="mt-3 space-y-1.5 text-sm text-[#2a1f12]/70">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" />34 Acacia Avenue, Kigali</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4" />+250 788 555 022</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 text-sm md:grid-cols-4">
          <div>
            <p className="font-semibold">Families</p>
            <ul className="mt-2 space-y-1 text-[#2a1f12]/70">
              <li><a href="#">Parent portal</a></li>
              <li><a href="#">Calendar</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">School</p>
            <ul className="mt-2 space-y-1 text-[#2a1f12]/70">
              <li><a href="#">About</a></li>
              <li><a href="#">Our teachers</a></li>
              <li><a href="#">News</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Resources</p>
            <ul className="mt-2 space-y-1 text-[#2a1f12]/70">
              <li><a href="#">Library</a></li>
              <li><a href="#">Reading lists</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Support</p>
            <ul className="mt-2 space-y-1 text-[#2a1f12]/70">
              <li><a href="#">Give</a></li>
              <li><a href="#">Volunteer</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-center font-serif text-xs italic text-[#2a1f12]/60">© 2026 {heading}. Follow the child.</p>
      </div>
    </footer>
  );
}
