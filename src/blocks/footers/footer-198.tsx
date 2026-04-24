import { MessageCircle, Briefcase } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer198(props: BlockProps) {
  const { theme, heading = "Minimal", bodyText = "Less, but better." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Overview", url: "#" }, { label: "Pricing", url: "#" }, { label: "Changelog", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Blog", url: "#" }, { label: "Contact", url: "#" }] },
    { title: "Legal", links: [{ label: "Terms", url: "#" }, { label: "Privacy", url: "#" }, { label: "Cookies", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-white py-20" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="text-base font-medium text-gray-900">{heading}.</p>
            <p className="mt-1 text-sm text-gray-500">{bodyText}</p>
            <div className="mt-4 flex gap-3 text-gray-400">
              <a href="#" className="hover:text-gray-900"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" className="hover:text-gray-900"><Briefcase className="h-4 w-4" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-medium text-gray-900">{c.title}</p>
              <ul className="mt-3 space-y-1.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-gray-500 hover:text-gray-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 text-xs text-gray-400">© 2026</div>
      </div>
    </footer>
  );
}
