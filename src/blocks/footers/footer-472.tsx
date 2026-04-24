import { Dumbbell, Flame, Heart } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer472(props: BlockProps) {
  const { theme, heading = "Pulse Fitness Studio" } = props;
  const schedule = [
    { day: "MON", cls: "HIIT · 6am / 6pm" },
    { day: "TUE", cls: "Yoga · 7am / 7pm" },
    { day: "WED", cls: "Strength · 6am / 6pm" },
    { day: "THU", cls: "Spin · 6am / 7pm" },
    { day: "FRI", cls: "HIIT · 6am / 6pm" },
    { day: "SAT", cls: "Boot camp · 8am" },
  ];
  return (
    <footer
      className="w-full bg-[#0f1220] py-14 text-white"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <Dumbbell className="h-6 w-6 text-orange-400" style={{ color: theme?.accent }} />
              <p className="text-2xl font-bold">{heading}</p>
            </div>
            <p className="mt-3 max-w-sm text-sm text-white/60">
              Boutique studio classes designed to move you — literally.
            </p>
            <a
              href="#"
              className="mt-5 inline-block rounded-full bg-orange-400 px-6 py-3 text-sm font-bold text-[#0f1220] hover:bg-orange-300"
              style={{ backgroundColor: theme?.accent }}
            >
              Book first class free
            </a>
            <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
              <a href="#" className="hover:text-orange-300">Classes</a>
              <a href="#" className="hover:text-orange-300">Trainers</a>
              <a href="#" className="hover:text-orange-300">Membership</a>
              <a href="#" className="hover:text-orange-300">Locations</a>
              <a href="#" className="hover:text-orange-300">Shop</a>
              <a href="#" className="hover:text-orange-300">Blog</a>
            </div>
          </div>
          <div className="rounded-2xl bg-white/5 p-5">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-orange-300">
              <Flame className="h-4 w-4" />This week
            </p>
            <ul className="mt-3 divide-y divide-white/10 text-sm">
              {schedule.map((s) => (
                <li key={s.day} className="flex justify-between py-2">
                  <span className="font-mono text-xs text-white/50">{s.day}</span>
                  <span>{s.cls}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
          <p className="flex items-center gap-1"><Heart className="h-3.5 w-3.5 text-orange-400" />Nairobi · Kilimani</p>
          <p>© 2026 {heading}. Move daily.</p>
        </div>
      </div>
    </footer>
  );
}
