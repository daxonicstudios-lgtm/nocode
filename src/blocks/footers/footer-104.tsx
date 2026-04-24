import type { BlockProps } from "@/blocks/types";
import { Mail } from "lucide-react";

export default function Footer104(props: BlockProps) {
  const {
    theme,
    heading = "Loophole",
    bodyText = "Automation tools for small teams.",
  } = props;
  const cols = [
    { title: "Product", links: ["Workflows", "Templates", "Integrations", "API"] },
    { title: "Company", links: ["About", "Blog", "Jobs"] },
  ];
  return (
    <footer className="w-full border-t-2 border-black bg-white py-14" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.primary }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="text-2xl font-black tracking-tight">{heading}</p>
            <p className="mt-2 text-sm text-neutral-600">{bodyText}</p>
            <a href="mailto:hi@example.com" className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
              <Mail className="h-4 w-4" /> hi@loophole.io
            </a>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-bold uppercase">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-neutral-700 hover:underline">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-neutral-500">© 2026 {heading}. Made remotely.</p>
      </div>
    </footer>
  );
}
