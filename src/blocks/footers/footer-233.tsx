import { MessageCircle, Briefcase, Code, Camera, Globe } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer233(props: BlockProps) {
  const { theme, heading = "Ember", bodyText = "Sustainable fashion for the conscious consumer." } = props;
  const columns = [
    { title: "Shop", links: [{ label: "Women", url: "#" }, { label: "Men", url: "#" }, { label: "Accessories", url: "#" }, { label: "New Arrivals", url: "#" }, { label: "Bestsellers", url: "#" }, { label: "Sale", url: "#" }, { label: "Gift Cards", url: "#" }] },
    { title: "Help", links: [{ label: "Size Guide", url: "#" }, { label: "Shipping & Returns", url: "#" }, { label: "FAQs", url: "#" }, { label: "Contact Us", url: "#" }, { label: "Order Tracking", url: "#" }, { label: "Gift Wrap", url: "#" }] },
    { title: "About", links: [{ label: "Our Story", url: "#" }, { label: "Sustainability", url: "#" }, { label: "Ethical Sourcing", url: "#" }, { label: "Ambassadors", url: "#" }, { label: "Press", url: "#" }, { label: "Journal", url: "#" }] },
    { title: "Info", links: [{ label: "Privacy Policy", url: "#" }, { label: "Terms", url: "#" }, { label: "Accessibility", url: "#" }, { label: "Careers", url: "#" }, { label: "Wholesale", url: "#" }, { label: "Affiliates", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-[#efece3] py-16" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-3xl tracking-tight text-stone-900">{heading}</p>
            <p className="mt-2 text-sm text-stone-700">{bodyText}</p>
            <div className="mt-5 flex gap-2">
              <div className="rounded-md bg-white px-2 py-1 text-[10px] font-semibold text-stone-700">GOTS Certified</div>
              <div className="rounded-md bg-white px-2 py-1 text-[10px] font-semibold text-stone-700">Fair Trade</div>
              <div className="rounded-md bg-white px-2 py-1 text-[10px] font-semibold text-stone-700">B Corp</div>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="font-serif text-sm text-stone-900">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-stone-700 hover:text-stone-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-stone-300 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-stone-600 sm:flex-row">
            <div className="flex items-center gap-4">
              <p>© 2026 {heading} Co.</p>
              <button className="inline-flex items-center gap-1 hover:text-stone-900"><Globe className="h-3.5 w-3.5" /> Ship to: Africa · EUR</button>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-stone-900"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" className="hover:text-stone-900"><Briefcase className="h-4 w-4" /></a>
              <a href="#" className="hover:text-stone-900"><Code className="h-4 w-4" /></a>
              <a href="#" className="hover:text-stone-900"><Camera className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
