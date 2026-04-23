import type { BlockProps } from "@/blocks/types";
import { Award } from "lucide-react";

export default function Footer433(props: BlockProps) {
  const { theme, heading = "Pinegrove" } = props;
  const awards = [
    "Forbes 30 Under 30 · 2025",
    "TechCrunch Disrupt Winner · 2024",
    "Fast Company Innovation · 2026",
  ];
  return (
    <footer
      className="w-full bg-[#0d1b12] py-16 text-emerald-50"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <p className="text-4xl font-bold">{heading}</p>
            <p className="mt-3 max-w-sm text-sm text-emerald-200">
              Trusted by more than <span className="font-semibold text-white">12,000 teams</span> and recognized by the folks who get it.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-emerald-900">Start free</a>
              <a href="#" className="text-sm text-emerald-200 hover:text-white">Book a demo →</a>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 text-emerald-300">
              <Award className="h-4 w-4" />
              <p className="text-xs font-semibold uppercase tracking-widest">Awards</p>
            </div>
            <ul className="mt-4 space-y-3">
              {awards.map((a) => (
                <li
                  key={a}
                  className="flex items-center justify-between rounded-xl border border-emerald-900/60 bg-emerald-950/40 px-4 py-3 text-sm"
                >
                  <span className="text-emerald-50">{a}</span>
                  <Award className="h-4 w-4 text-amber-300" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-emerald-900 pt-6 text-xs text-emerald-300 sm:flex-row">
          <span>© 2026 {heading} Labs</span>
          <nav className="flex gap-5">
            <a href="#" className="hover:text-white">Customers</a>
            <a href="#" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
