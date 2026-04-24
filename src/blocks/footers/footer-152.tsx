import { Code, MessageCircle, Play, Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer152(props: BlockProps) {
  const { theme, heading = "Nimbus Cloud", bodyText = "Infrastructure that scales with your imagination." } = props;
  const columns = [
    { title: "Platform", links: [{ label: "Compute", url: "#" }, { label: "Storage", url: "#" }, { label: "Networking", url: "#" }, { label: "Databases", url: "#" }] },
    { title: "Developers", links: [{ label: "API Reference", url: "#" }, { label: "SDKs", url: "#" }, { label: "Tutorials", url: "#" }, { label: "Status", url: "#" }] },
    { title: "Legal", links: [{ label: "Privacy", url: "#" }, { label: "Terms", url: "#" }, { label: "Security", url: "#" }, { label: "Cookies", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-slate-950 py-16 text-slate-300" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <p className="text-xl font-semibold text-white">{heading}</p>
            <p className="mt-3 max-w-xs text-sm text-slate-400">{bodyText}</p>
            <div className="mt-6 flex gap-2">
              {[Code, MessageCircle, Play, Mail].map((Icon, i) => (
                <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"><Icon className="h-4 w-4" /></a>
              ))}
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold text-white">{c.title}</p>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-slate-400 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-slate-800 pt-8 text-xs text-slate-500 sm:flex-row sm:justify-between">
          <span>© 2026 {heading}, Inc.</span>
          <span>Built with care in Lagos and Berlin.</span>
        </div>
      </div>
    </footer>
  );
}
