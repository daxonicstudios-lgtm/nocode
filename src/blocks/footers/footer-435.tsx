import type { BlockProps } from "@/blocks/types";
import { Trophy, Award, Sparkles } from "lucide-react";

export default function Footer435(props: BlockProps) {
  const { theme, heading = "Koda" } = props;
  const awards = [
    { icon: Trophy, title: "Apple Design Award", year: "2025" },
    { icon: Award, title: "Google Play Best Of", year: "2025" },
    { icon: Sparkles, title: "App Store Editors' Choice", year: "2026" },
  ];
  return (
    <footer
      className="w-full bg-gradient-to-br from-rose-50 via-white to-sky-50 py-16"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-600">Celebrated by the industry</p>
          <p className="mt-3 font-serif text-4xl italic text-gray-900">{heading}</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {awards.map(({ icon: Icon, title, year }) => (
            <div
              key={title}
              className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white/80 p-5 backdrop-blur"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-rose-200 to-sky-200">
                <Icon className="h-5 w-5 text-gray-900" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{title}</p>
                <p className="text-xs text-gray-500">{year}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row">
          <span>© 2026 {heading}. Made for mobile.</span>
          <nav className="flex gap-5">
            <a href="#" className="hover:text-black">iOS</a>
            <a href="#" className="hover:text-black">Android</a>
            <a href="#" className="hover:text-black">Web</a>
            <a href="#" className="hover:text-black">Support</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
