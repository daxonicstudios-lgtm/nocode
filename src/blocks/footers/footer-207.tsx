import { MessageCircle, Briefcase, Users, Camera, Globe } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer207(props: BlockProps) {
  const { theme, heading = "Anchor", bodyText = "Commerce infrastructure for the next generation of brands." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Point of Sale", url: "#" }, { label: "Payments", url: "#" }, { label: "Inventory", url: "#" }, { label: "Analytics", url: "#" }, { label: "Shipping", url: "#" }, { label: "Marketing", url: "#" }] },
    { title: "Solutions", links: [{ label: "Retail", url: "#" }, { label: "Restaurants", url: "#" }, { label: "Beauty", url: "#" }, { label: "Services", url: "#" }, { label: "E-commerce", url: "#" }] },
    { title: "Developers", links: [{ label: "Docs", url: "#" }, { label: "API Reference", url: "#" }, { label: "Webhooks", url: "#" }, { label: "Libraries", url: "#" }, { label: "Changelog", url: "#" }, { label: "Status", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Careers", url: "#" }, { label: "Press", url: "#" }, { label: "Blog", url: "#" }, { label: "Partners", url: "#" }, { label: "Contact", url: "#" }] },
  ];
  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50 py-16" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-xl font-bold tracking-tight">{heading}</p>
            <p className="mt-2 text-sm text-gray-600">{bodyText}</p>
            <div className="mt-5 grid grid-cols-3 gap-2">
              <div className="rounded-md border border-gray-300 bg-white px-2 py-1.5 text-center text-[10px] font-semibold text-gray-700">VISA</div>
              <div className="rounded-md border border-gray-300 bg-white px-2 py-1.5 text-center text-[10px] font-semibold text-gray-700">Mastercard</div>
              <div className="rounded-md border border-gray-300 bg-white px-2 py-1.5 text-center text-[10px] font-semibold text-gray-700">AMEX</div>
              <div className="rounded-md border border-gray-300 bg-white px-2 py-1.5 text-center text-[10px] font-semibold text-gray-700">Stripe</div>
              <div className="rounded-md border border-gray-300 bg-white px-2 py-1.5 text-center text-[10px] font-semibold text-gray-700">PayPal</div>
              <div className="rounded-md border border-gray-300 bg-white px-2 py-1.5 text-center text-[10px] font-semibold text-gray-700">M-Pesa</div>
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
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-xs text-gray-600 sm:flex-row">
          <div className="flex items-center gap-4">
            <p>© 2026 {heading}, Inc.</p>
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Cookies</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="inline-flex items-center gap-1 hover:text-gray-900"><Globe className="h-3.5 w-3.5" /> English</button>
            <a href="#" className="hover:text-gray-900"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" className="hover:text-gray-900"><Briefcase className="h-4 w-4" /></a>
            <a href="#" className="hover:text-gray-900"><Users className="h-4 w-4" /></a>
            <a href="#" className="hover:text-gray-900"><Camera className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
