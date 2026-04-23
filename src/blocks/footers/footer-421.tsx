import type { BlockProps } from "@/blocks/types";
import { Trophy } from "lucide-react";

export default function Footer421(props: BlockProps) {
  const { theme, heading = "Spindle", bodyText = "Recognized work, quietly done." } = props;
  const awards = [
    "Forbes 30 Under 30 · 2025",
    "TechCrunch Disrupt Winner · 2024",
    "Fast Company Innovation · 2026",
    "Webby Honoree · 2025",
  ];
  return (
    <footer
      className="w-full border-t border-gray-200 bg-white py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <Trophy className="h-6 w-6 text-amber-500" />
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">Recognition</p>
          <p className="mt-4 text-2xl font-bold tracking-tight">{heading}</p>
          <p className="mt-2 max-w-md text-sm text-gray-600">{bodyText}</p>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {awards.map((a) => (
            <span key={a} className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-xs font-medium text-gray-700">
              {a}
            </span>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row">
          <span>© 2026 {heading}. Every kind word, appreciated.</span>
          <nav className="flex gap-5">
            <a href="#" className="hover:text-gray-900">Work</a>
            <a href="#" className="hover:text-gray-900">Press</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
