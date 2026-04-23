import { MessageCircle, Briefcase, Code, Globe } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer230(props: BlockProps) {
  const { theme, heading = "Sovereign", bodyText = "Decentralized finance for a new economic era." } = props;
  const columns = [
    { title: "Products", links: [{ label: "Exchange", url: "#" }, { label: "Wallet", url: "#" }, { label: "Staking", url: "#" }, { label: "Lending", url: "#" }, { label: "Derivatives", url: "#" }, { label: "NFT Marketplace", url: "#" }] },
    { title: "Services", links: [{ label: "OTC Desk", url: "#" }, { label: "Institutional", url: "#" }, { label: "Custody", url: "#" }, { label: "Prime Brokerage", url: "#" }, { label: "Listing Application", url: "#" }] },
    { title: "Resources", links: [{ label: "Learn", url: "#" }, { label: "Research", url: "#" }, { label: "Blog", url: "#" }, { label: "Fees", url: "#" }, { label: "API Docs", url: "#" }, { label: "Status", url: "#" }, { label: "Proof of Reserves", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Careers", url: "#" }, { label: "Security", url: "#" }, { label: "Legal", url: "#" }, { label: "Community", url: "#" }, { label: "Support Center", url: "#" }, { label: "Contact", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-[#0b0b0f] py-16 text-gray-300" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-bold tracking-tight text-white">{heading}</p>
            <p className="mt-3 text-sm text-gray-400">{bodyText}</p>
            <div className="mt-5 rounded-lg border border-yellow-900/50 bg-yellow-950/30 p-3 text-[11px] text-yellow-200">
              Digital assets carry risk. Please invest responsibly.
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
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gray-900 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© 2026 {heading} Digital Assets Ltd.</p>
          <div className="flex items-center gap-4">
            <button className="inline-flex items-center gap-1 hover:text-white"><Globe className="h-3.5 w-3.5" /> Region: Africa</button>
            <a href="#" className="hover:text-white"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" className="hover:text-white"><Briefcase className="h-4 w-4" /></a>
            <a href="#" className="hover:text-white"><Code className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
