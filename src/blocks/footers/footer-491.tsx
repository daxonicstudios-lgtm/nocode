import { Church, BookOpen, Heart, MapPin, Phone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer491(props: BlockProps) {
  const {
    theme,
    heading = "Grace Community Church",
    bodyText = "A family of believers in the heart of Nairobi.",
  } = props;
  return (
    <footer
      className="w-full bg-[#2f2217] py-16 text-[#f0e6d2]"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#1e1610] p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
                <Church className="h-4 w-4" />Service times
              </p>
              <p className="mt-2 font-serif text-xl">Sundays · 8am & 10:30am · Wednesdays · 6:30pm</p>
            </div>
            <a
              href="#"
              className="rounded-full bg-amber-400 px-7 py-3 font-serif text-xs uppercase tracking-widest text-[#2f2217] hover:bg-amber-300"
              style={{ backgroundColor: theme?.accent }}
            >
              Plan a visit
            </a>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-serif text-2xl">{heading}</p>
            <p className="mt-2 text-sm text-[#f0e6d2]/70">{bodyText}</p>
            <p className="mt-4 flex items-start gap-2 text-sm text-[#f0e6d2]/80"><MapPin className="mt-0.5 h-4 w-4" />Ngong Road, Nairobi</p>
            <p className="mt-1 flex items-start gap-2 text-sm text-[#f0e6d2]/80"><Phone className="mt-0.5 h-4 w-4" />+254 20 555 0188</p>
          </div>
          <div className="md:col-span-2">
            <p className="font-serif text-amber-400">Visit</p>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li><a href="#" className="hover:underline">I'm new</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Events</a></li>
              <li><a href="#" className="hover:underline">Locations</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="font-serif text-amber-400">Grow</p>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li><a href="#" className="hover:underline">Sermons</a></li>
              <li><a href="#" className="hover:underline">Bible studies</a></li>
              <li><a href="#" className="hover:underline">Small groups</a></li>
              <li><a href="#" className="hover:underline">Kids & youth</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="font-serif text-amber-400">Serve</p>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li><a href="#" className="hover:underline">Volunteer</a></li>
              <li><a href="#" className="hover:underline">Missions</a></li>
              <li><a href="#" className="hover:underline">Prayer request</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="font-serif text-amber-400">Give</p>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li><a href="#" className="hover:underline">Tithes</a></li>
              <li><a href="#" className="hover:underline">Building fund</a></li>
              <li><a href="#" className="hover:underline">Monthly partner</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-center">
          <div className="flex items-center gap-4 text-sm text-[#f0e6d2]/70">
            <span className="flex items-center gap-1"><BookOpen className="h-4 w-4" />Listen to sermons</span>
            <span className="flex items-center gap-1"><Heart className="h-4 w-4" />Give online</span>
          </div>
          <p className="font-serif text-xs italic text-[#f0e6d2]/50">© 2026 {heading}. Soli Deo Gloria.</p>
        </div>
      </div>
    </footer>
  );
}
