import { MessageCircle, Briefcase, Code, Globe } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer204(props: BlockProps) {
  const { theme, heading = "Cascade", bodyText = "Cloud infrastructure that scales with your ambition." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Platform", url: "#" }, { label: "Compute", url: "#" }, { label: "Storage", url: "#" }, { label: "Networking", url: "#" }, { label: "Databases", url: "#" }, { label: "Edge", url: "#" }] },
    { title: "Solutions", links: [{ label: "Startups", url: "#" }, { label: "Enterprise", url: "#" }, { label: "Agencies", url: "#" }, { label: "E-commerce", url: "#" }, { label: "Media", url: "#" }] },
    { title: "Resources", links: [{ label: "Docs", url: "#" }, { label: "Blog", url: "#" }, { label: "Tutorials", url: "#" }, { label: "Customer Stories", url: "#" }, { label: "Events", url: "#" }, { label: "Changelog", url: "#" }, { label: "Status", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Careers", url: "#" }, { label: "Contact", url: "#" }, { label: "Privacy", url: "#" }, { label: "Terms", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-[#faf7f2] py-16 text-gray-800" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-3xl font-bold italic tracking-tight">{heading}</p>
            <p className="mt-3 text-sm text-gray-600">{bodyText}</p>
            <div className="mt-5 flex gap-4">
              <a href="#" className="text-gray-500 hover:text-gray-900"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="text-gray-500 hover:text-gray-900"><Briefcase className="h-5 w-5" /></a>
              <a href="#" className="text-gray-500 hover:text-gray-900"><Code className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="font-serif text-base font-semibold">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-gray-700 hover:text-gray-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gray-300 pt-6 text-xs text-gray-600 sm:flex-row">
          <p>© 2026 {heading} Cloud Ltd.</p>
          <button className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-3 py-1 hover:bg-gray-100"><Globe className="h-3.5 w-3.5" /> Region: Africa</button>
        </div>
      </div>
    </footer>
  );
}
