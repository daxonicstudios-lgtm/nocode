import { Church, Heart, BookOpen } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer494(props: BlockProps) {
  const { theme, heading = "Hope City Church" } = props;
  return (
    <footer
      className="w-full bg-[#0b0f1a] py-16 text-slate-100"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 p-8 text-center md:p-12">
          <Church className="mx-auto h-8 w-8" />
          <p className="mt-3 font-serif text-4xl">{heading}</p>
          <p className="mt-2 text-white/80">One church. Three cities. Every tribe.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="#" className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-indigo-700 hover:bg-white/90">
              Plan a visit
            </a>
            <a href="#" className="rounded-full border border-white px-7 py-3 text-sm font-semibold text-white hover:bg-white/10">
              Give online
            </a>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-8 text-sm md:grid-cols-5">
          <div>
            <p className="font-semibold text-indigo-300">New</p>
            <ul className="mt-3 space-y-1.5 text-slate-300">
              <li><a href="#" className="hover:text-white">I'm new here</a></li>
              <li><a href="#" className="hover:text-white">Our beliefs</a></li>
              <li><a href="#" className="hover:text-white">Baptism</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-indigo-300">Watch</p>
            <ul className="mt-3 space-y-1.5 text-slate-300">
              <li><a href="#" className="hover:text-white">Sermons</a></li>
              <li><a href="#" className="hover:text-white">Live</a></li>
              <li><a href="#" className="hover:text-white">Worship</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-indigo-300">Connect</p>
            <ul className="mt-3 space-y-1.5 text-slate-300">
              <li><a href="#" className="hover:text-white">Groups</a></li>
              <li><a href="#" className="hover:text-white">Events</a></li>
              <li><a href="#" className="hover:text-white">Serve</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-indigo-300">Care</p>
            <ul className="mt-3 space-y-1.5 text-slate-300">
              <li><a href="#" className="hover:text-white">Prayer</a></li>
              <li><a href="#" className="hover:text-white">Counselling</a></li>
              <li><a href="#" className="hover:text-white">Outreach</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-indigo-300">Locations</p>
            <ul className="mt-3 space-y-1.5 text-slate-300">
              <li>Lagos · Ikeja</li>
              <li>Abuja · Jabi</li>
              <li>Ibadan · Bodija</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center gap-2 border-t border-white/10 pt-6 text-center text-xs text-slate-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><BookOpen className="h-3.5 w-3.5" />Read the Word</span>
            <span className="flex items-center gap-1"><Heart className="h-3.5 w-3.5" />Live it out</span>
          </div>
          <p>© 2026 {heading}.</p>
        </div>
      </div>
    </footer>
  );
}
