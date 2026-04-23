import { MessageCircle, Briefcase, Code, ArrowRight } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer235(props: BlockProps) {
  const { theme, heading = "Capstone", bodyText = "Product management software for winning teams." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Roadmaps", url: "#" }, { label: "Backlogs", url: "#" }, { label: "Ideas Portal", url: "#" }, { label: "Dashboards", url: "#" }, { label: "Objectives", url: "#" }, { label: "AI Assistant", url: "#" }] },
    { title: "Solutions", links: [{ label: "Product Teams", url: "#" }, { label: "Engineering", url: "#" }, { label: "Design", url: "#" }, { label: "Leadership", url: "#" }, { label: "Customer Success", url: "#" }] },
    { title: "Learn", links: [{ label: "Docs", url: "#" }, { label: "PM Academy", url: "#" }, { label: "Templates", url: "#" }, { label: "Blog", url: "#" }, { label: "Podcast", url: "#" }, { label: "Events", url: "#" }, { label: "Community", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Careers", url: "#" }, { label: "Customers", url: "#" }, { label: "Newsroom", url: "#" }, { label: "Security", url: "#" }, { label: "Privacy", url: "#" }, { label: "Terms", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-gray-900 p-12 text-center" style={{ backgroundColor: theme?.primary }}>
          <p className="text-3xl font-bold text-white sm:text-4xl">Build what matters.</p>
          <p className="mx-auto mt-3 max-w-xl text-gray-300">Join 25,000 product teams building better software with {heading}.</p>
          <a href="#" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100">Start a free trial <ArrowRight className="h-4 w-4" /></a>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-bold tracking-tight text-gray-900">{heading}</p>
            <p className="mt-3 text-sm text-gray-600">{bodyText}</p>
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
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gray-200 pb-10 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© 2026 {heading} Software Inc.</p>
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
