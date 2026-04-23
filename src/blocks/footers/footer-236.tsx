import { MessageCircle, Briefcase, Code, Play } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer236(props: BlockProps) {
  const { theme, heading = "Vantage", bodyText = "Cloud cost optimization and FinOps for engineering teams." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Cost Explorer", url: "#" }, { label: "Reports", url: "#" }, { label: "Kubernetes", url: "#" }, { label: "Budgets", url: "#" }, { label: "Anomalies", url: "#" }, { label: "Resource Usage", url: "#" }, { label: "Savings Plans", url: "#" }] },
    { title: "Integrations", links: [{ label: "AWS", url: "#" }, { label: "Azure", url: "#" }, { label: "Google Cloud", url: "#" }, { label: "Snowflake", url: "#" }, { label: "Databricks", url: "#" }, { label: "MongoDB", url: "#" }, { label: "View all", url: "#" }] },
    { title: "Resources", links: [{ label: "Docs", url: "#" }, { label: "Blog", url: "#" }, { label: "Benchmarks", url: "#" }, { label: "Newsletter", url: "#" }, { label: "Podcast", url: "#" }, { label: "Case Studies", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Careers", url: "#" }, { label: "Customers", url: "#" }, { label: "Partners", url: "#" }, { label: "Contact Sales", url: "#" }, { label: "Privacy", url: "#" }, { label: "Terms", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-gray-50 py-14" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-bold tracking-tight text-gray-900">{heading}</p>
            <p className="mt-2 text-sm text-gray-600">{bodyText}</p>
            <div className="mt-5 rounded-lg border border-gray-200 bg-white p-3">
              <p className="text-xs font-semibold text-gray-700">Average customer savings</p>
              <p className="text-2xl font-bold text-emerald-600">32%</p>
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
          <p>© 2026 {heading} FinOps Inc. · SOC 2 Type II</p>
          <div className="flex items-center gap-4">
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
