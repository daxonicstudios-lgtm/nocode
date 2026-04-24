import type { BlockProps } from "@/blocks/types";
import { MessageCircle, Code, Briefcase } from "lucide-react";

export default function Footer102(props: BlockProps) {
  const {
    theme,
    heading = "Nebula",
    bodyText = "Cloud infrastructure, simplified.",
  } = props;
  const cols = [
    { title: "Platform", links: ["Overview", "Integrations", "Security", "Pricing"] },
    { title: "Developers", links: ["API Reference", "SDKs", "Status", "Changelog"] },
  ];
  return (
    <footer className="w-full bg-neutral-950 py-16 text-neutral-300" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm" style={{ backgroundColor: theme?.primary || "#a855f7" }} />
              <p className="text-xl font-semibold text-white">{heading}</p>
            </div>
            <p className="mt-4 text-sm text-neutral-400">{bodyText}</p>
            <div className="mt-6 flex gap-3">
              <a href="#" className="rounded-full border border-neutral-800 p-2 hover:border-neutral-600"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" className="rounded-full border border-neutral-800 p-2 hover:border-neutral-600"><Code className="h-4 w-4" /></a>
              <a href="#" className="rounded-full border border-neutral-800 p-2 hover:border-neutral-600"><Briefcase className="h-4 w-4" /></a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold text-white">{c.title}</p>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-neutral-400 hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 text-xs text-neutral-500">© 2026 {heading} Systems.</p>
      </div>
    </footer>
  );
}
