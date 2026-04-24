import { MessageCircle, Briefcase, Code, Camera, Users } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer247(props: BlockProps) {
  const { theme, heading = "Lumen", bodyText = "Smart home and lighting for the connected generation." } = props;
  const columns = [
    { title: "Products", links: [{ label: "Smart Bulbs", url: "#" }, { label: "Light Strips", url: "#" }, { label: "Outdoor Lights", url: "#" }, { label: "Switches", url: "#" }, { label: "Cameras", url: "#" }, { label: "Thermostats", url: "#" }, { label: "Bundles", url: "#" }] },
    { title: "App", links: [{ label: "iOS App", url: "#" }, { label: "Android App", url: "#" }, { label: "Widgets", url: "#" }, { label: "Voice Control", url: "#" }, { label: "Automations", url: "#" }, { label: "Routines", url: "#" }] },
    { title: "Support", links: [{ label: "Help Center", url: "#" }, { label: "Setup Guides", url: "#" }, { label: "Community Forum", url: "#" }, { label: "Warranty", url: "#" }, { label: "Returns", url: "#" }, { label: "Contact Us", url: "#" }] },
    { title: "Company", links: [{ label: "About us", url: "#" }, { label: "Sustainability", url: "#" }, { label: "Newsroom", url: "#" }, { label: "Careers", url: "#" }, { label: "Press Kit", url: "#" }, { label: "Partners", url: "#" }, { label: "Affiliate Program", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-yellow-50 py-16" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-bold tracking-tight text-yellow-950">{heading}</p>
            <p className="mt-2 text-sm text-yellow-900/70">{bodyText}</p>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-yellow-700">Works with</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <span className="rounded-md bg-white px-2 py-1 text-[10px] font-semibold text-yellow-900">Alexa</span>
              <span className="rounded-md bg-white px-2 py-1 text-[10px] font-semibold text-yellow-900">Google Home</span>
              <span className="rounded-md bg-white px-2 py-1 text-[10px] font-semibold text-yellow-900">HomeKit</span>
              <span className="rounded-md bg-white px-2 py-1 text-[10px] font-semibold text-yellow-900">Matter</span>
              <span className="rounded-md bg-white px-2 py-1 text-[10px] font-semibold text-yellow-900">SmartThings</span>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-yellow-700">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-yellow-900/80 hover:text-yellow-950">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-yellow-200 pt-6 text-xs text-yellow-900/70 sm:flex-row">
          <p>© 2026 {heading} Smart Living Inc.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-yellow-950"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" className="hover:text-yellow-950"><Briefcase className="h-4 w-4" /></a>
            <a href="#" className="hover:text-yellow-950"><Code className="h-4 w-4" /></a>
            <a href="#" className="hover:text-yellow-950"><Camera className="h-4 w-4" /></a>
            <a href="#" className="hover:text-yellow-950"><Users className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
