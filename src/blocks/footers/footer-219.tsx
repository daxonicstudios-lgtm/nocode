import { MessageCircle, Briefcase, Code, Camera } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer219(props: BlockProps) {
  const { theme, heading = "Everest", bodyText = "Reach new heights. The creator economy platform." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Creator Studio", url: "#" }, { label: "Analytics", url: "#" }, { label: "Monetization", url: "#" }, { label: "Memberships", url: "#" }, { label: "Commerce", url: "#" }, { label: "Livestream", url: "#" }] },
    { title: "For You", links: [{ label: "Musicians", url: "#" }, { label: "Writers", url: "#" }, { label: "Video Creators", url: "#" }, { label: "Podcasters", url: "#" }, { label: "Educators", url: "#" }, { label: "Artists", url: "#" }] },
    { title: "Resources", links: [{ label: "Creator Academy", url: "#" }, { label: "Blog", url: "#" }, { label: "Podcast", url: "#" }, { label: "Newsletter", url: "#" }, { label: "Help Center", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Team", url: "#" }, { label: "Careers", url: "#" }, { label: "Press Kit", url: "#" }, { label: "Contact", url: "#" }, { label: "Legal", url: "#" }, { label: "Privacy", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-rose-50 py-16" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-3xl font-bold tracking-tight text-rose-950">{heading}</p>
            <p className="mt-2 text-sm text-rose-900/70">{bodyText}</p>
            <div className="mt-5 flex gap-3">
              <a href="#" className="rounded-full bg-white p-2 text-rose-900 shadow-sm hover:bg-rose-100"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" className="rounded-full bg-white p-2 text-rose-900 shadow-sm hover:bg-rose-100"><Briefcase className="h-4 w-4" /></a>
              <a href="#" className="rounded-full bg-white p-2 text-rose-900 shadow-sm hover:bg-rose-100"><Code className="h-4 w-4" /></a>
              <a href="#" className="rounded-full bg-white p-2 text-rose-900 shadow-sm hover:bg-rose-100"><Camera className="h-4 w-4" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-rose-700">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-rose-950/80 hover:text-rose-950">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-rose-200 pt-6 text-xs text-rose-900/70 sm:flex-row">
          <p>© 2026 {heading} Creator Inc.</p>
          <p>Empowering 100,000+ creators worldwide</p>
        </div>
      </div>
    </footer>
  );
}
