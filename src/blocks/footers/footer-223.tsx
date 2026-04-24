import { MessageCircle, Briefcase, Code, Camera, Apple, Play } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer223(props: BlockProps) {
  const { theme, heading = "Voyager", bodyText = "The travel app trusted by millions of explorers." } = props;
  const columns = [
    { title: "Explore", links: [{ label: "Destinations", url: "#" }, { label: "Experiences", url: "#" }, { label: "Flights", url: "#" }, { label: "Hotels", url: "#" }, { label: "Car Rentals", url: "#" }, { label: "Deals", url: "#" }] },
    { title: "Support", links: [{ label: "Help Center", url: "#" }, { label: "Safety Info", url: "#" }, { label: "Cancellation Options", url: "#" }, { label: "Report a Concern", url: "#" }, { label: "Accessibility", url: "#" }] },
    { title: "Hosting", links: [{ label: "List your Space", url: "#" }, { label: "Host Resources", url: "#" }, { label: "Community Forum", url: "#" }, { label: "Responsible Hosting", url: "#" }, { label: "Host Insurance", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Newsroom", url: "#" }, { label: "Careers", url: "#" }, { label: "Investors", url: "#" }, { label: "Gift Cards", url: "#" }, { label: "Contact", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-sky-50 py-16" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-bold tracking-tight text-sky-950">{heading}</p>
            <p className="mt-2 text-sm text-sky-900/70">{bodyText}</p>
            <div className="mt-5 space-y-2">
              <a href="#" className="flex items-center gap-3 rounded-lg bg-sky-950 px-3 py-2 text-white hover:bg-sky-900">
                <Apple className="h-6 w-6" />
                <div className="text-left"><p className="text-[10px] text-sky-200">Download on the</p><p className="text-sm font-semibold">App Store</p></div>
              </a>
              <a href="#" className="flex items-center gap-3 rounded-lg bg-sky-950 px-3 py-2 text-white hover:bg-sky-900">
                <Play className="h-6 w-6" />
                <div className="text-left"><p className="text-[10px] text-sky-200">GET IT ON</p><p className="text-sm font-semibold">Google Play</p></div>
              </a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-sky-950/80 hover:text-sky-950">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-sky-200 pt-6 text-xs text-sky-900/70 sm:flex-row">
          <p>© 2026 {heading} Travel, Inc.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-sky-950"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" className="hover:text-sky-950"><Briefcase className="h-4 w-4" /></a>
            <a href="#" className="hover:text-sky-950"><Code className="h-4 w-4" /></a>
            <a href="#" className="hover:text-sky-950"><Camera className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
