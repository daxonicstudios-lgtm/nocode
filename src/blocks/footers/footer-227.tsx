import { MessageCircle, Briefcase, Code } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer227(props: BlockProps) {
  const { theme, heading = "Aperture", bodyText = "AI-powered design tools for creative professionals." } = props;
  const columns = [
    { title: "Product", links: [{ label: "AI Studio", url: "#" }, { label: "Image Generation", url: "#" }, { label: "Video Tools", url: "#" }, { label: "Upscaler", url: "#" }, { label: "Templates", url: "#" }, { label: "API", url: "#" }] },
    { title: "Use Cases", links: [{ label: "Marketing", url: "#" }, { label: "Social Media", url: "#" }, { label: "E-commerce", url: "#" }, { label: "Agencies", url: "#" }, { label: "Photographers", url: "#" }, { label: "Filmmakers", url: "#" }] },
    { title: "Learn", links: [{ label: "Tutorials", url: "#" }, { label: "YouTube", url: "#" }, { label: "Community", url: "#" }, { label: "Blog", url: "#" }, { label: "Prompt Library", url: "#" }, { label: "Changelog", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Pricing", url: "#" }, { label: "Careers", url: "#" }, { label: "Ethics", url: "#" }, { label: "Press", url: "#" }, { label: "Contact", url: "#" }, { label: "Legal", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-black py-16 text-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-3xl font-bold tracking-tight text-transparent">{heading}</p>
            <p className="mt-3 text-sm text-gray-400">{bodyText}</p>
            <div className="mt-5 flex gap-3">
              <a href="#" className="rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" className="rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10"><Briefcase className="h-4 w-4" /></a>
              <a href="#" className="rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10"><Code className="h-4 w-4" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-gray-300 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© 2026 {heading} AI Labs</p>
          <p>Generated responsibly</p>
        </div>
      </div>
    </footer>
  );
}
