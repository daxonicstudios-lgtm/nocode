import { Heart, Calendar, Gift } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer490(props: BlockProps) {
  const {
    theme,
    heading = "Ayana Events",
    bodyText = "Bespoke weddings and celebrations across Southern Africa.",
  } = props;
  return (
    <footer
      className="w-full bg-white py-16 text-[#2e2824]"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-rose-400" style={{ color: theme?.primary }} />
              <p className="font-serif text-3xl italic">{heading}</p>
            </div>
            <p className="mt-3 max-w-sm text-sm text-[#2e2824]/70">{bodyText}</p>
            <a
              href="#"
              className="mt-5 inline-block rounded-full bg-rose-400 px-7 py-3 font-serif text-xs uppercase tracking-widest text-white hover:bg-rose-500"
              style={{ backgroundColor: theme?.primary }}
            >
              Plan your day
            </a>
          </div>
          <div className="md:col-span-2">
            <p className="font-serif text-sm uppercase tracking-widest text-rose-400" style={{ color: theme?.primary }}>
              Services
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-[#2e2824]/70">
              <li><a href="#" className="hover:text-[#2e2824]">Weddings</a></li>
              <li><a href="#" className="hover:text-[#2e2824]">Proposals</a></li>
              <li><a href="#" className="hover:text-[#2e2824]">Anniversaries</a></li>
              <li><a href="#" className="hover:text-[#2e2824]">Corporate</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="font-serif text-sm uppercase tracking-widest text-rose-400" style={{ color: theme?.primary }}>
              Experience
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-[#2e2824]/70">
              <li><a href="#" className="hover:text-[#2e2824]">Gallery</a></li>
              <li><a href="#" className="hover:text-[#2e2824]">Real weddings</a></li>
              <li><a href="#" className="hover:text-[#2e2824]">Press</a></li>
              <li><a href="#" className="hover:text-[#2e2824]">Journal</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="font-serif text-sm uppercase tracking-widest text-rose-400" style={{ color: theme?.primary }}>
              Couples
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-[#2e2824]/70">
              <li className="flex items-start gap-2"><Calendar className="mt-0.5 h-4 w-4" />Check our availability</li>
              <li className="flex items-start gap-2"><Gift className="mt-0.5 h-4 w-4" />Registry partners</li>
              <li><a href="#" className="hover:text-[#2e2824]">Vendor directory</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-[#2e2824]/10 pt-6 text-center font-serif text-xs italic text-[#2e2824]/60">
          © 2026 {heading}. Cape Town · Plettenberg Bay · Arniston.
        </p>
      </div>
    </footer>
  );
}
