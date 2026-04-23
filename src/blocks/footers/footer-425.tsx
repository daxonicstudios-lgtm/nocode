import type { BlockProps } from "@/blocks/types";
import { Award } from "lucide-react";

export default function Footer425(props: BlockProps) {
  const { theme, heading = "Halcyon" } = props;
  const awards = [
    { title: "Webby Award", year: "2026", category: "Apps & Software" },
    { title: "ADC Cube", year: "2025", category: "Digital Design" },
    { title: "D&AD Wood Pencil", year: "2025", category: "Product Design" },
    { title: "Fast Company Innovation", year: "2026", category: "Design" },
  ];
  return (
    <footer
      className="w-full bg-white py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-2xl font-bold tracking-tight">{heading}</p>
            <p className="mt-2 text-sm text-gray-600">A design-led studio shipping unusual work with unusual teams.</p>
            <div className="mt-6 flex gap-3 text-sm">
              <a href="#" className="rounded-md border border-gray-300 px-3 py-1.5 hover:border-gray-900">Portfolio</a>
              <a href="#" className="rounded-md border border-gray-300 px-3 py-1.5 hover:border-gray-900">Contact</a>
            </div>
          </div>
          <div className="md:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Awards & honors</p>
            <ul className="mt-4 divide-y divide-gray-200 border-y border-gray-200">
              {awards.map((a) => (
                <li key={a.title + a.year} className="flex items-center gap-4 py-3">
                  <Award className="h-5 w-5 flex-shrink-0 text-amber-500" />
                  <div className="flex flex-1 items-baseline justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{a.title}</p>
                      <p className="text-xs text-gray-500">{a.category}</p>
                    </div>
                    <span className="font-mono text-xs text-gray-500">{a.year}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 text-xs text-gray-500">© 2026 {heading} Creative Ltd.</div>
      </div>
    </footer>
  );
}
