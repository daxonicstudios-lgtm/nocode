import type { BlockProps } from "@/blocks/types";
import { Trophy } from "lucide-react";

export default function Footer427(props: BlockProps) {
  const { theme, heading = "Sable" } = props;
  const awards = [
    "Forbes 30 Under 30 · 2025",
    "TechCrunch Disrupt Winner · 2024",
    "a16z Open Source · 2025",
    "Fast Company Innovation · 2026",
    "Product Hunt Golden Kitty · 2025",
  ];
  return (
    <footer
      className="w-full bg-black py-16 text-white"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Trophy className="h-5 w-5 text-amber-400" />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">A few nice things people have said</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {awards.map((a) => (
            <span
              key={a}
              className="rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-2 text-xs font-medium text-neutral-200"
            >
              {a}
            </span>
          ))}
        </div>
        <div className="my-12 h-px w-full bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900" />
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-3xl font-bold">{heading}</p>
            <p className="mt-2 max-w-md text-sm text-neutral-400">Uncompromising tools for uncompromising teams.</p>
          </div>
          <nav className="flex flex-wrap gap-5 text-sm text-neutral-300">
            <a href="#" className="hover:text-white">Product</a>
            <a href="#" className="hover:text-white">Customers</a>
            <a href="#" className="hover:text-white">Press</a>
            <a href="#" className="hover:text-white">Careers</a>
          </nav>
        </div>
        <p className="mt-10 text-xs text-neutral-500">© 2026 {heading} Technologies</p>
      </div>
    </footer>
  );
}
