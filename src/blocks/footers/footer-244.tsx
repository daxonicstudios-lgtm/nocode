import { MessageCircle, Briefcase, Code, Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer244(props: BlockProps) {
  const { theme, heading = "Bedrock", bodyText = "The reliable database for ambitious applications." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Database", url: "#" }, { label: "Serverless", url: "#" }, { label: "Branching", url: "#" }, { label: "Vector Search", url: "#" }, { label: "Analytics", url: "#" }, { label: "Pricing", url: "#" }] },
    { title: "Solutions", links: [{ label: "Next.js", url: "#" }, { label: "SaaS", url: "#" }, { label: "E-commerce", url: "#" }, { label: "AI Apps", url: "#" }, { label: "Mobile", url: "#" }, { label: "Enterprise", url: "#" }] },
    { title: "Developers", links: [{ label: "Docs", url: "#" }, { label: "CLI", url: "#" }, { label: "SDKs", url: "#" }, { label: "Examples", url: "#" }, { label: "Community", url: "#" }, { label: "Discord", url: "#" }, { label: "GitHub", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Blog", url: "#" }, { label: "Customers", url: "#" }, { label: "Careers", url: "#" }, { label: "Security", url: "#" }, { label: "Legal", url: "#" }, { label: "Status", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-neutral-900 py-16 text-neutral-300" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="font-mono text-xl font-bold text-white">{"{"} {heading} {"}"}</p>
            <p className="mt-3 text-sm text-neutral-400">{bodyText}</p>
            <form className="mt-5">
              <label className="text-xs font-semibold text-neutral-400">Weekly changelog</label>
              <div className="mt-2 flex gap-2">
                <input type="email" placeholder="email@dev.com" className="min-w-0 flex-1 rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-white placeholder-neutral-500 outline-none focus:border-neutral-500" />
                <button type="submit" className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-100"><Mail className="h-4 w-4" /></button>
              </div>
            </form>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-neutral-300 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-neutral-800 pt-6 text-xs text-neutral-500 sm:flex-row">
          <p className="font-mono">© 2026 {heading}.db</p>
          <div className="flex items-center gap-2 rounded-full border border-neutral-800 px-3 py-1"><span className="h-2 w-2 rounded-full bg-emerald-500" /><span>All regions healthy</span></div>
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
