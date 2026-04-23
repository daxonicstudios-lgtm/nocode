import { Church, Heart, MapPin } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer495(props: BlockProps) {
  const { theme, heading = "St. Andrew's Parish" } = props;
  return (
    <footer
      className="w-full bg-[#eee4d4] py-14 text-[#3d2b17]"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Church className="h-7 w-7" style={{ color: theme?.primary }} />
            <p className="mt-3 font-serif text-3xl">{heading}</p>
            <p className="mt-2 text-sm italic text-[#3d2b17]/70">
              A parish of the Anglican Church. Serving our community since 1894.
            </p>
            <p className="mt-4 flex items-start gap-2 text-sm"><MapPin className="mt-0.5 h-4 w-4" />Cathedral Road, Windhoek</p>
          </div>
          <div className="md:col-span-7">
            <div className="rounded-2xl bg-white p-6">
              <p className="font-serif uppercase tracking-widest text-[#3d2b17]/60">Service schedule</p>
              <ul className="mt-3 space-y-1 text-sm">
                <li className="flex justify-between border-b border-[#3d2b17]/15 py-1"><span>Sunday Eucharist</span><span>8am & 10am</span></li>
                <li className="flex justify-between border-b border-[#3d2b17]/15 py-1"><span>Evensong</span><span>Sun · 5pm</span></li>
                <li className="flex justify-between border-b border-[#3d2b17]/15 py-1"><span>Morning Prayer</span><span>Mon–Fri · 7am</span></li>
                <li className="flex justify-between py-1"><span>Confession</span><span>Sat · 4pm</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 text-sm md:grid-cols-5">
          {[
            "Worship",
            "Sermons",
            "Events",
            "Give",
            "Prayer",
          ].map((l) => (
            <a key={l} href="#" className="font-serif italic hover:underline">
              {l}
            </a>
          ))}
        </div>
        <p className="mt-10 flex items-center justify-center gap-2 font-serif text-xs italic text-[#3d2b17]/60">
          <Heart className="h-3.5 w-3.5" />© 2026 {heading}. All are welcome.
        </p>
      </div>
    </footer>
  );
}
