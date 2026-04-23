import { MessageCircle, Briefcase, Code, Apple, Play } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer217(props: BlockProps) {
  const { theme, heading = "Solstice", bodyText = "Banking and money tools for the African diaspora." } = props;
  const columns = [
    { title: "Products", links: [{ label: "Checking", url: "#" }, { label: "Savings", url: "#" }, { label: "Investing", url: "#" }, { label: "Send Money", url: "#" }, { label: "Cards", url: "#" }, { label: "Business", url: "#" }] },
    { title: "Learn", links: [{ label: "Help Center", url: "#" }, { label: "Blog", url: "#" }, { label: "Guides", url: "#" }, { label: "Financial Glossary", url: "#" }, { label: "Refer a Friend", url: "#" }] },
    { title: "Company", links: [{ label: "About us", url: "#" }, { label: "Careers", url: "#" }, { label: "Newsroom", url: "#" }, { label: "Investors", url: "#" }, { label: "Trust & Safety", url: "#" }] },
    { title: "Legal", links: [{ label: "Privacy Notice", url: "#" }, { label: "Terms of Use", url: "#" }, { label: "Cookie Settings", url: "#" }, { label: "Licenses", url: "#" }, { label: "Disclosures", url: "#" }, { label: "Contact", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-emerald-950 py-16 text-emerald-100" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-bold tracking-tight text-white">{heading}</p>
            <p className="mt-3 text-sm text-emerald-200/70">{bodyText}</p>
            <div className="mt-5 space-y-2">
              <a href="#" className="flex items-center gap-3 rounded-lg border border-emerald-800 bg-emerald-900/50 px-3 py-2 hover:bg-emerald-900">
                <Apple className="h-6 w-6 text-white" />
                <div className="text-left"><p className="text-[10px] text-emerald-300">Download on the</p><p className="text-sm font-semibold text-white">App Store</p></div>
              </a>
              <a href="#" className="flex items-center gap-3 rounded-lg border border-emerald-800 bg-emerald-900/50 px-3 py-2 hover:bg-emerald-900">
                <Play className="h-6 w-6 text-white" />
                <div className="text-left"><p className="text-[10px] text-emerald-300">GET IT ON</p><p className="text-sm font-semibold text-white">Google Play</p></div>
              </a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-emerald-100 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-emerald-900 pt-6 text-xs text-emerald-300/70">
          <p className="max-w-4xl">{heading} Financial Services is licensed and regulated in multiple jurisdictions. Banking services provided by member FDIC institutions. Investment products are not FDIC insured, may lose value, and are not bank guaranteed.</p>
          <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p>© 2026 {heading} Financial, Inc.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" className="hover:text-white"><Briefcase className="h-4 w-4" /></a>
              <a href="#" className="hover:text-white"><Code className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
