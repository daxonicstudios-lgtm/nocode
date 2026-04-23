import type { BlockProps } from "@/blocks/types";
import { MessageCircle, Briefcase, Code } from "lucide-react";

export default function Footer150(props: BlockProps) {
  const {
    theme,
    heading = "Meridian",
    bodyText = "Product consultancy for early-stage founders.",
  } = props;
  const cols = [
    { title: "Services", links: ["Strategy", "Design", "Development", "Research"] },
    { title: "Work", links: ["Case Studies", "Process", "Pricing"] },
  ];
  return (
    <footer className="w-full bg-[#fdfcfa] py-16" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <p className="font-serif text-4xl tracking-tight">{heading}</p>
            <p className="mt-3 max-w-xs text-sm text-neutral-600">{bodyText}</p>
            <div className="mt-5 flex gap-3 text-neutral-500">
              <a href="#" aria-label="Twitter"><MessageCircle className="h-4 w-4 hover:text-neutral-900" /></a>
              <a href="#" aria-label="LinkedIn"><Briefcase className="h-4 w-4 hover:text-neutral-900" /></a>
              <a href="#" aria-label="GitHub"><Code className="h-4 w-4 hover:text-neutral-900" /></a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-neutral-800 hover:text-neutral-500">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-1 border-t border-neutral-200 pt-5 text-xs text-neutral-500 md:flex-row md:justify-between">
          <span>© 2026 {heading} Partners</span>
          <span>hello@meridian.studio</span>
        </div>
      </div>
    </footer>
  );
}
