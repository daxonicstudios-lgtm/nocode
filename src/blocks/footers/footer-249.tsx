import { MessageCircle, Briefcase, Code } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer249(props: BlockProps) {
  const { theme, heading = "Drift", bodyText = "The conversational revenue platform." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Conversational AI", url: "#" }, { label: "Live Chat", url: "#" }, { label: "Chatbots", url: "#" }, { label: "Video", url: "#" }, { label: "Email", url: "#" }, { label: "Meetings", url: "#" }, { label: "Pricing", url: "#" }] },
    { title: "Solutions", links: [{ label: "Marketing", url: "#" }, { label: "Sales", url: "#" }, { label: "Customer Service", url: "#" }, { label: "Mid-Market", url: "#" }, { label: "Enterprise", url: "#" }, { label: "Startups", url: "#" }] },
    { title: "Learn", links: [{ label: "Drift Insider", url: "#" }, { label: "Books", url: "#" }, { label: "Podcast", url: "#" }, { label: "YouTube", url: "#" }, { label: "Events", url: "#" }, { label: "Research", url: "#" }, { label: "Blog", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Customers", url: "#" }, { label: "Careers", url: "#" }, { label: "Partners", url: "#" }, { label: "News", url: "#" }, { label: "Legal", url: "#" }, { label: "Contact", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-16 text-blue-50" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-3xl font-bold tracking-tight text-white">{heading}</p>
            <p className="mt-3 text-sm text-blue-100">{bodyText}</p>
            <div className="mt-5 flex gap-3">
              <a href="#" className="rounded-full bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" className="rounded-full bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20"><Briefcase className="h-4 w-4" /></a>
              <a href="#" className="rounded-full bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20"><Code className="h-4 w-4" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-blue-50 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/20 pt-6 text-xs text-blue-200 sm:flex-row">
          <p>© 2026 {heading} Conversational Inc.</p>
          <p>SOC 2 · GDPR · CCPA compliant</p>
        </div>
      </div>
    </footer>
  );
}
