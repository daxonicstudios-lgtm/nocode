import { MessageCircle, Camera, Users, Briefcase } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer181(props: BlockProps) {
  const { theme, heading = "Basket", bodyText = "Grocery delivery in under an hour." } = props;
  const columns = [
    { title: "Shop", links: [{ label: "Produce", url: "#" }, { label: "Meat & Seafood", url: "#" }, { label: "Pantry", url: "#" }, { label: "Household", url: "#" }] },
    { title: "Account", links: [{ label: "Sign In", url: "#" }, { label: "Orders", url: "#" }, { label: "Gift Cards", url: "#" }, { label: "Help Center", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Shoppers", url: "#" }, { label: "Partners", url: "#" }, { label: "Careers", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-lime-50 py-14 text-lime-950" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-extrabold text-lime-700">{heading}</p>
            <p className="mt-2 text-sm text-lime-900/70">{bodyText}</p>
            <div className="mt-5 flex gap-2">
              {[MessageCircle, Camera, Users, Briefcase].map((Icon, i) => (
                <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-600 text-white hover:bg-lime-700" style={{ backgroundColor: theme?.primary }}><Icon className="h-4 w-4" /></a>
              ))}
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-bold text-lime-900">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-lime-900/70 hover:text-lime-950">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-lime-200 pt-6 text-xs text-lime-800/70">
          <span>© 2026 {heading}</span>
          <span>·</span>
          <div className="flex gap-1.5">
            <span className="rounded bg-white px-2 py-1">Visa</span>
            <span className="rounded bg-white px-2 py-1">Mastercard</span>
            <span className="rounded bg-white px-2 py-1">Apple Pay</span>
            <span className="rounded bg-white px-2 py-1">M-Pesa</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
