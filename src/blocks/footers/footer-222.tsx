import { MessageCircle, Briefcase, Code } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer222(props: BlockProps) {
  const { theme, heading = "Bastion", bodyText = "Infrastructure as code, simplified for modern teams." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Workflows", url: "#" }, { label: "State Management", url: "#" }, { label: "Drift Detection", url: "#" }, { label: "Policy Engine", url: "#" }, { label: "Collaboration", url: "#" }, { label: "Modules", url: "#" }] },
    { title: "Integrations", links: [{ label: "AWS", url: "#" }, { label: "GCP", url: "#" }, { label: "Azure", url: "#" }, { label: "GitHub", url: "#" }, { label: "GitLab", url: "#" }, { label: "Bitbucket", url: "#" }, { label: "Slack", url: "#" }] },
    { title: "Resources", links: [{ label: "Docs", url: "#" }, { label: "Blog", url: "#" }, { label: "Webinars", url: "#" }, { label: "Tutorials", url: "#" }, { label: "Community", url: "#" }, { label: "Changelog", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Careers", url: "#" }, { label: "Customers", url: "#" }, { label: "Press", url: "#" }, { label: "Contact Sales", url: "#" }, { label: "Privacy", url: "#" }, { label: "Terms", url: "#" }] },
  ];
  return (
    <footer className="w-full border-t border-gray-200 bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="font-mono text-xl font-bold tracking-tight text-gray-900">$ {heading.toLowerCase()}</p>
            <p className="mt-2 text-sm text-gray-600">{bodyText}</p>
            <pre className="mt-4 rounded-md bg-gray-900 p-3 font-mono text-[11px] text-gray-100">{`$ ${heading.toLowerCase()} init\n$ ${heading.toLowerCase()} plan\n$ ${heading.toLowerCase()} apply`}</pre>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-gray-500">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-gray-700 hover:text-gray-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row">
          <p className="font-mono">© 2026 {heading}. Made in Berlin & Lagos.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" className="hover:text-gray-900"><Briefcase className="h-4 w-4" /></a>
            <a href="#" className="hover:text-gray-900"><Code className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
