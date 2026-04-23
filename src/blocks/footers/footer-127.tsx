import type { BlockProps } from "@/blocks/types";
import { Globe } from "lucide-react";

export default function Footer127(props: BlockProps) {
  const {
    theme,
    heading = "Passage",
    bodyText = "Book flights worldwide.",
  } = props;
  const cols = [
    { title: "Fly", links: ["Search", "Deals", "Destinations", "Check In"] },
    { title: "About", links: ["Company", "Careers", "Press"] },
  ];
  return (
    <footer className="w-full bg-blue-900 py-14 text-blue-50" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="text-2xl font-bold">{heading}</p>
            <p className="mt-2 text-sm text-blue-200">{bodyText}</p>
            <button className="mt-4 inline-flex items-center gap-2 rounded-full border border-blue-400/40 px-3 py-1.5 text-xs hover:bg-blue-800">
              <Globe className="h-3.5 w-3.5" /> English · USD
            </button>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold text-blue-200">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-blue-100 hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 text-xs text-blue-300">© 2026 {heading} Airlines</p>
      </div>
    </footer>
  );
}
