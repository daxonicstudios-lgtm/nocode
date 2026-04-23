import { Dumbbell, Zap, MapPin } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer475(props: BlockProps) {
  const { theme, heading = "APEX CROSSFIT" } = props;
  return (
    <footer
      className="w-full bg-zinc-900 py-14 text-white"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border-2 border-red-500 bg-zinc-950 p-5" style={{ borderColor: theme?.accent }}>
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-red-500" style={{ color: theme?.accent }}>
                <Zap className="h-4 w-4" />WOD of the day
              </p>
              <p className="mt-1 font-mono text-lg">5 rounds for time: 21 thrusters, 15 pull-ups, 9 burpees.</p>
            </div>
            <a
              href="#"
              className="rounded-none bg-red-500 px-7 py-3 text-sm font-black uppercase tracking-widest hover:bg-red-600"
              style={{ backgroundColor: theme?.accent }}
            >
              Book free intro
            </a>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2">
              <Dumbbell className="h-6 w-6 text-red-500" style={{ color: theme?.accent }} />
              <p className="text-2xl font-black">{heading}</p>
            </div>
            <p className="mt-2 text-sm text-white/60">
              CrossFit affiliate gym in Kigali. Coaches. Community. Measurable progress.
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-bold uppercase tracking-widest text-white/40">Train</p>
            <ul className="mt-3 space-y-1 text-sm">
              <li><a href="#" className="hover:text-red-400">Classes</a></li>
              <li><a href="#" className="hover:text-red-400">Schedule</a></li>
              <li><a href="#" className="hover:text-red-400">Open gym</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-bold uppercase tracking-widest text-white/40">Team</p>
            <ul className="mt-3 space-y-1 text-sm">
              <li><a href="#" className="hover:text-red-400">Coaches</a></li>
              <li><a href="#" className="hover:text-red-400">Athletes</a></li>
              <li><a href="#" className="hover:text-red-400">Results</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-bold uppercase tracking-widest text-white/40">Join</p>
            <ul className="mt-3 space-y-1 text-sm">
              <li><a href="#" className="hover:text-red-400">Membership</a></li>
              <li><a href="#" className="hover:text-red-400">Drop-in</a></li>
              <li><a href="#" className="hover:text-red-400">Nutrition</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-bold uppercase tracking-widest text-white/40">Visit</p>
            <ul className="mt-3 space-y-1 text-sm">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" />Kicukiro, Kigali</li>
              <li>Open 5am – 9pm</li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-center text-xs font-mono uppercase tracking-widest text-white/30">
          © 2026 {heading} — GO HARDER.
        </p>
      </div>
    </footer>
  );
}
