import { Dumbbell, Camera, Zap, MapPin } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer471(props: BlockProps) {
  const {
    theme,
    heading = "IRON FORGE GYM",
    bodyText = "Strength. Speed. Community. Open 24/7 in Johannesburg.",
  } = props;
  return (
    <footer
      className="w-full bg-black py-16 text-white"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Dumbbell className="h-6 w-6 text-lime-400" style={{ color: theme?.accent }} />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-lime-400" style={{ color: theme?.accent }}>
                Train hard. Live harder.
              </p>
            </div>
            <p className="mt-3 text-5xl font-black tracking-tighter">{heading}</p>
            <p className="mt-2 max-w-md text-sm text-white/60">{bodyText}</p>
          </div>
          <a
            href="#"
            className="rounded-none bg-lime-400 px-8 py-4 text-sm font-black uppercase tracking-widest text-black hover:bg-lime-300"
            style={{ backgroundColor: theme?.accent }}
          >
            Start free 7-day trial
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-8 text-sm md:grid-cols-5">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40">Train</p>
            <ul className="mt-3 space-y-1.5">
              <li><a href="#" className="hover:text-lime-400">Classes</a></li>
              <li><a href="#" className="hover:text-lime-400">Personal training</a></li>
              <li><a href="#" className="hover:text-lime-400">Open gym</a></li>
              <li><a href="#" className="hover:text-lime-400">Nutrition coaching</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40">Join</p>
            <ul className="mt-3 space-y-1.5">
              <li><a href="#" className="hover:text-lime-400">Membership</a></li>
              <li><a href="#" className="hover:text-lime-400">Student rates</a></li>
              <li><a href="#" className="hover:text-lime-400">Corporate</a></li>
              <li><a href="#" className="hover:text-lime-400">Day pass</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40">Team</p>
            <ul className="mt-3 space-y-1.5">
              <li><a href="#" className="hover:text-lime-400">Trainers</a></li>
              <li><a href="#" className="hover:text-lime-400">Schedule</a></li>
              <li><a href="#" className="hover:text-lime-400">Results</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40">Locations</p>
            <ul className="mt-3 space-y-1.5">
              <li>Sandton</li>
              <li>Rosebank</li>
              <li>Pretoria East</li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40">Follow</p>
            <a href="#" aria-label="Instagram" className="mt-3 inline-flex items-center gap-2 hover:text-lime-400">
              <Camera className="h-4 w-4" />@ironforge
            </a>
            <p className="mt-3 flex items-start gap-2 text-xs text-white/50"><MapPin className="mt-0.5 h-4 w-4" />Since 2014</p>
          </div>
        </div>
        <p className="mt-10 flex items-center gap-2 text-xs text-white/40">
          <Zap className="h-3.5 w-3.5 text-lime-400" />© 2026 {heading}. Earn every rep.
        </p>
      </div>
    </footer>
  );
}
