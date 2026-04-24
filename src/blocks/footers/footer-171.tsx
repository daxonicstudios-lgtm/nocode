import { MessageCircle, Camera, Users, Briefcase } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer171(props: BlockProps) {
  const { theme, heading = "Terrace Realty", bodyText = "Find your next place to call home." } = props;
  const columns = [
    { title: "Buy", links: [{ label: "Listings", url: "#" }, { label: "New Developments", url: "#" }, { label: "Open Houses", url: "#" }, { label: "Mortgage", url: "#" }] },
    { title: "Sell", links: [{ label: "Home Value", url: "#" }, { label: "List with Us", url: "#" }, { label: "Seller Guide", url: "#" }, { label: "Market Report", url: "#" }] },
    { title: "About", links: [{ label: "Agents", url: "#" }, { label: "Offices", url: "#" }, { label: "Press", url: "#" }, { label: "Contact", url: "#" }] },
  ];
  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50 py-14" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="text-xl font-bold text-gray-900">{heading}</p>
            <p className="mt-2 text-sm text-gray-600">{bodyText}</p>
            <div className="mt-5 flex gap-2">
              {[MessageCircle, Camera, Users, Briefcase].map((Icon, i) => (
                <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm hover:bg-gray-900 hover:text-white"><Icon className="h-4 w-4" /></a>
              ))}
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-900">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-gray-600 hover:text-gray-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-gray-200 pt-6 text-xs text-gray-500">
          © 2026 {heading} LLC. Licensed Real Estate Broker. Equal Housing Opportunity.
        </div>
      </div>
    </footer>
  );
}
