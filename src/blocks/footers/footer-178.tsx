import { MessageCircle, Briefcase, Camera } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer178(props: BlockProps) {
  const { theme, heading = "Brightline", bodyText = "Mental health care that meets you where you are." } = props;
  const columns = [
    { title: "Care", links: [{ label: "Therapy", url: "#" }, { label: "Psychiatry", url: "#" }, { label: "Coaching", url: "#" }, { label: "Groups", url: "#" }] },
    { title: "Get Started", links: [{ label: "Insurance", url: "#" }, { label: "Pricing", url: "#" }, { label: "Book Now", url: "#" }, { label: "FAQ", url: "#" }] },
    { title: "Company", links: [{ label: "Clinicians", url: "#" }, { label: "For Employers", url: "#" }, { label: "Careers", url: "#" }, { label: "Press", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-[#eef3ff] py-16 text-slate-800" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="text-xl font-semibold text-slate-900">{heading}</p>
            <p className="mt-2 text-sm text-slate-600">{bodyText}</p>
            <div className="mt-5 flex gap-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm hover:text-slate-900"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm hover:text-slate-900"><Briefcase className="h-4 w-4" /></a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm hover:text-slate-900"><Camera className="h-4 w-4" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold text-slate-900">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-slate-600 hover:text-slate-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-slate-200 pt-6 text-xs leading-relaxed text-slate-500">
          <p>© 2026 {heading} Health. If you are in crisis, please call your local emergency number or a crisis hotline.</p>
        </div>
      </div>
    </footer>
  );
}
