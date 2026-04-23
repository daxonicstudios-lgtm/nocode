import { MessageCircle, Users, Camera, Play, Briefcase } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer174(props: BlockProps) {
  const { theme, heading = "Ascend University", bodyText = "Online degrees for the working world." } = props;
  const columns = [
    { title: "Programs", links: [{ label: "Bachelors", url: "#" }, { label: "Masters", url: "#" }, { label: "Certificates", url: "#" }, { label: "Continuing Ed", url: "#" }] },
    { title: "Students", links: [{ label: "Admissions", url: "#" }, { label: "Financial Aid", url: "#" }, { label: "Portal", url: "#" }, { label: "Library", url: "#" }] },
    { title: "About", links: [{ label: "Accreditation", url: "#" }, { label: "Faculty", url: "#" }, { label: "Research", url: "#" }, { label: "News", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-blue-900 py-14 text-blue-50" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-2xl text-white">{heading}</p>
            <p className="mt-2 text-sm text-blue-200">{bodyText}</p>
            <div className="mt-5 flex gap-3">
              {[MessageCircle, Users, Camera, Play, Briefcase].map((Icon, i) => (
                <a key={i} href="#" className="text-blue-200 hover:text-white"><Icon className="h-5 w-5" /></a>
              ))}
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="font-serif text-base text-white">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-blue-200 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-blue-800 pt-6 text-xs text-blue-300">
          © 2026 {heading}. Accredited by the Higher Learning Commission. Equal Opportunity Institution.
        </div>
      </div>
    </footer>
  );
}
