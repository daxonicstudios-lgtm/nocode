import { MessageCircle, Briefcase, Code, Apple, Play } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer210(props: BlockProps) {
  const { theme, heading = "Vertex", bodyText = "Creative tools built for the mobile-first generation." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Mobile App", url: "#" }, { label: "Desktop App", url: "#" }, { label: "Web Editor", url: "#" }, { label: "Templates", url: "#" }, { label: "Pricing", url: "#" }] },
    { title: "Learn", links: [{ label: "Tutorials", url: "#" }, { label: "Courses", url: "#" }, { label: "Webinars", url: "#" }, { label: "Community", url: "#" }, { label: "YouTube", url: "#" }, { label: "Podcast", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Careers", url: "#" }, { label: "Press", url: "#" }, { label: "Blog", url: "#" }, { label: "Contact", url: "#" }] },
    { title: "Legal", links: [{ label: "Privacy", url: "#" }, { label: "Terms", url: "#" }, { label: "Licenses", url: "#" }, { label: "Copyright", url: "#" }, { label: "Cookies", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-black py-16 text-gray-300" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-3xl font-bold tracking-tight text-white">{heading}</p>
            <p className="mt-3 text-sm text-gray-400">{bodyText}</p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <a href="#" className="flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 hover:bg-gray-800">
                <Apple className="h-5 w-5" />
                <div className="text-left"><p className="text-[9px] text-gray-400">Download on</p><p className="text-xs font-semibold text-white">App Store</p></div>
              </a>
              <a href="#" className="flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 hover:bg-gray-800">
                <Play className="h-5 w-5" />
                <div className="text-left"><p className="text-[9px] text-gray-400">GET IT ON</p><p className="text-xs font-semibold text-white">Google Play</p></div>
              </a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-gray-300 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-gray-900 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© 2026 {heading} Studios.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" className="hover:text-white"><Briefcase className="h-4 w-4" /></a>
            <a href="#" className="hover:text-white"><Code className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
