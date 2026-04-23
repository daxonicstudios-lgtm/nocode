import { MessageCircle, Briefcase, Code, Play, Globe } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer226(props: BlockProps) {
  const { theme, heading = "Summit", bodyText = "Reach the top. HR and payroll that just works." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Payroll", url: "#" }, { label: "Benefits", url: "#" }, { label: "Onboarding", url: "#" }, { label: "Time Tracking", url: "#" }, { label: "Performance", url: "#" }, { label: "Expenses", url: "#" }] },
    { title: "Who we serve", links: [{ label: "1-50 employees", url: "#" }, { label: "50-500 employees", url: "#" }, { label: "500+ employees", url: "#" }, { label: "Nonprofits", url: "#" }, { label: "Contractors", url: "#" }] },
    { title: "Resources", links: [{ label: "Help Center", url: "#" }, { label: "Payroll Guides", url: "#" }, { label: "Tax Calendar", url: "#" }, { label: "Blog", url: "#" }, { label: "Webinars", url: "#" }, { label: "Templates", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Our Story", url: "#" }, { label: "Press", url: "#" }, { label: "Careers", url: "#" }, { label: "Contact", url: "#" }, { label: "Refer a Friend", url: "#" }, { label: "Partners", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-[#f7f5f0] py-16" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-bold tracking-tight text-gray-900">{heading}</p>
            <p className="mt-2 text-sm text-gray-600">{bodyText}</p>
            <div className="mt-5 flex gap-3">
              <a href="#" className="text-gray-500 hover:text-gray-900"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="text-gray-500 hover:text-gray-900"><Briefcase className="h-5 w-5" /></a>
              <a href="#" className="text-gray-500 hover:text-gray-900"><Code className="h-5 w-5" /></a>
              <a href="#" className="text-gray-500 hover:text-gray-900"><Play className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-700">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-gray-600 hover:text-gray-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-gray-300 pt-6">
          <div className="flex flex-col items-start justify-between gap-4 text-xs text-gray-600 sm:flex-row sm:items-center">
            <div className="flex flex-wrap items-center gap-4">
              <p>© 2026 {heading} Payroll, Inc.</p>
              <a href="#" className="hover:text-gray-900">Privacy</a>
              <a href="#" className="hover:text-gray-900">Terms</a>
              <a href="#" className="hover:text-gray-900">Licenses</a>
            </div>
            <button className="inline-flex items-center gap-1 rounded-full border border-gray-300 bg-white px-3 py-1 hover:bg-gray-50"><Globe className="h-3.5 w-3.5" /> English · USD</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
