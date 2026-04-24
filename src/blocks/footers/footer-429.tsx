import type { BlockProps } from "@/blocks/types";
import { Trophy, Award, Sparkles, BadgeCheck } from "lucide-react";

export default function Footer429(props: BlockProps) {
  const { theme, heading = "Lantern" } = props;
  const awards = [
    { icon: Trophy, text: "Best New Product", meta: "G2 Spring 2026" },
    { icon: Award, text: "Leader in SMB Analytics", meta: "G2 · 2025" },
    { icon: Sparkles, text: "Top 100 Fastest-Growing", meta: "Deloitte · 2025" },
    { icon: BadgeCheck, text: "Editor's Choice", meta: "PCMag · 2026" },
  ];
  return (
    <footer
      className="w-full border-t border-gray-200 bg-gradient-to-b from-white to-gray-50 py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-500">Recognized for the work</p>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {awards.map(({ icon: Icon, text, meta }) => (
            <div key={text} className="flex flex-col items-center rounded-xl border border-gray-200 bg-white px-4 py-5 text-center">
              <Icon className="h-6 w-6 text-amber-500" />
              <p className="mt-2 text-sm font-semibold text-gray-900">{text}</p>
              <p className="mt-1 text-[11px] text-gray-500">{meta}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="text-xl font-bold">{heading}</p>
            <p className="mt-2 text-sm text-gray-600">Analytics for humans, not dashboards.</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Use cases</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">For founders</a></li>
              <li><a href="#" className="hover:text-black">For PMs</a></li>
              <li><a href="#" className="hover:text-black">For growth</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">About</a></li>
              <li><a href="#" className="hover:text-black">Press</a></li>
              <li><a href="#" className="hover:text-black">Contact</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-xs text-gray-500">© 2026 {heading}</p>
      </div>
    </footer>
  );
}
