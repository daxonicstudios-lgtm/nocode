import { MessageCircle, Briefcase, Code, Play, Apple } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer205(props: BlockProps) {
  const { theme, heading = "Pinnacle", bodyText = "The marketplace for ambitious creators and makers worldwide." } = props;
  const columns = [
    { title: "Marketplace", links: [{ label: "Browse", url: "#" }, { label: "Featured", url: "#" }, { label: "New Arrivals", url: "#" }, { label: "Deals", url: "#" }, { label: "Collections", url: "#" }] },
    { title: "Sell", links: [{ label: "Open a Shop", url: "#" }, { label: "Seller Handbook", url: "#" }, { label: "Pricing", url: "#" }, { label: "Seller Forum", url: "#" }, { label: "Tools", url: "#" }] },
    { title: "About", links: [{ label: "Our Story", url: "#" }, { label: "Careers", url: "#" }, { label: "Press", url: "#" }, { label: "Blog", url: "#" }, { label: "Impact", url: "#" }, { label: "Affiliates", url: "#" }] },
    { title: "Help", links: [{ label: "Help Center", url: "#" }, { label: "Privacy", url: "#" }, { label: "Terms", url: "#" }, { label: "Cookies", url: "#" }, { label: "Contact", url: "#" }] },
  ];
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-14" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-bold tracking-tight">{heading}</p>
            <p className="mt-2 text-sm text-gray-600">{bodyText}</p>
            <div className="mt-5 space-y-2">
              <a href="#" className="flex items-center gap-3 rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 hover:bg-gray-50">
                <Apple className="h-6 w-6" />
                <div className="text-left"><p className="text-[10px] text-gray-500">Download on the</p><p className="text-sm font-semibold leading-tight">App Store</p></div>
              </a>
              <a href="#" className="flex items-center gap-3 rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 hover:bg-gray-50">
                <Play className="h-6 w-6" />
                <div className="text-left"><p className="text-[10px] text-gray-500">GET IT ON</p><p className="text-sm font-semibold leading-tight">Google Play</p></div>
              </a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-gray-700 hover:text-gray-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© 2026 {heading} Marketplace.</p>
          <div className="flex items-center gap-4 text-gray-500">
            <a href="#" className="hover:text-gray-900"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" className="hover:text-gray-900"><Briefcase className="h-4 w-4" /></a>
            <a href="#" className="hover:text-gray-900"><Code className="h-4 w-4" /></a>
            <a href="#" className="hover:text-gray-900"><Play className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
