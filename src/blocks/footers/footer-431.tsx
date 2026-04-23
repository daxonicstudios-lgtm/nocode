import type { BlockProps } from "@/blocks/types";
import { Trophy } from "lucide-react";

export default function Footer431(props: BlockProps) {
  const { theme, heading = "Beacon" } = props;
  const awards = [
    { year: "2026", title: "SaaStr Product of the Year" },
    { year: "2025", title: "Forbes Cloud 100 Rising Star" },
    { year: "2025", title: "TechCrunch Disrupt Finalist" },
    { year: "2024", title: "Inc. 5000 Fastest-Growing" },
    { year: "2024", title: "G2 Best Software, Mid-Market" },
  ];
  return (
    <footer
      className="w-full bg-white py-16"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-2xl font-bold tracking-tight">{heading}</p>
            <p className="mt-2 max-w-sm text-sm text-gray-600">Enterprise tools built with a small-team sensibility.</p>
            <a href="#" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black">
              Read our press kit
            </a>
          </div>
          <div className="md:col-span-7">
            <div className="flex items-center gap-2 text-gray-500">
              <Trophy className="h-4 w-4 text-amber-500" />
              <p className="text-xs font-semibold uppercase tracking-widest">Awards timeline</p>
            </div>
            <ol className="mt-5 space-y-3">
              {awards.map((a) => (
                <li key={a.title} className="flex items-center gap-4 rounded-lg border border-gray-200 p-3">
                  <span className="rounded-md bg-amber-50 px-2.5 py-1 font-mono text-xs font-semibold text-amber-700">{a.year}</span>
                  <span className="text-sm text-gray-900">{a.title}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row">
          <span>© 2026 {heading}, Inc.</span>
          <nav className="flex gap-5">
            <a href="#" className="hover:text-gray-900">Customers</a>
            <a href="#" className="hover:text-gray-900">Press</a>
            <a href="#" className="hover:text-gray-900">Careers</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
