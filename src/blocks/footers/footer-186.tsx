import { MessageCircle, Users, Briefcase, Camera } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer186(props: BlockProps) {
  const { theme, heading = "Harvest Bank", bodyText = "Banking built for farmers and growers." } = props;
  const columns = [
    { title: "Personal", links: [{ label: "Checking", url: "#" }, { label: "Savings", url: "#" }, { label: "Loans", url: "#" }, { label: "Credit Cards", url: "#" }] },
    { title: "Business", links: [{ label: "Farm Loans", url: "#" }, { label: "Equipment", url: "#" }, { label: "Operating Lines", url: "#" }, { label: "Insurance", url: "#" }] },
    { title: "Support", links: [{ label: "Branches", url: "#" }, { label: "Contact", url: "#" }, { label: "Security", url: "#" }, { label: "FAQ", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-[#f8f4ed] py-16 text-stone-900" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-2xl">{heading}</p>
            <p className="mt-2 text-sm text-stone-600">{bodyText}</p>
            <div className="mt-5 flex gap-3 text-stone-500">
              <a href="#" className="hover:text-stone-900"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="hover:text-stone-900"><Users className="h-5 w-5" /></a>
              <a href="#" className="hover:text-stone-900"><Briefcase className="h-5 w-5" /></a>
              <a href="#" className="hover:text-stone-900"><Camera className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="font-serif text-base">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-stone-600 hover:text-stone-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 border-t border-stone-300 pt-6 text-xs text-stone-500">
          <p>© 2026 {heading}. Member FDIC. Equal Housing Lender. NMLS #483215</p>
        </div>
      </div>
    </footer>
  );
}
