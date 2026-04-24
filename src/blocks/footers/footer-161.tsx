import { MessageCircle, Briefcase, Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer161(props: BlockProps) {
  const { theme, heading = "Keystone Advisors", bodyText = "Independent wealth management since 1998." } = props;
  const columns = [
    { title: "Services", links: [{ label: "Financial Planning", url: "#" }, { label: "Investment", url: "#" }, { label: "Tax Strategy", url: "#" }, { label: "Estate", url: "#" }] },
    { title: "About", links: [{ label: "Our Team", url: "#" }, { label: "Philosophy", url: "#" }, { label: "Press", url: "#" }, { label: "Community", url: "#" }] },
    { title: "Contact", links: [{ label: "Schedule Call", url: "#" }, { label: "Locations", url: "#" }, { label: "Client Login", url: "#" }, { label: "Careers", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-white py-16" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <p className="font-serif text-xl font-bold text-gray-900">{heading}</p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">{bodyText}</p>
            <div className="mt-5 flex gap-4 text-gray-500">
              <a href="#" className="hover:text-gray-900"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="hover:text-gray-900"><Briefcase className="h-5 w-5" /></a>
              <a href="#" className="hover:text-gray-900"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="font-serif text-base font-semibold text-gray-900">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-gray-600 hover:text-gray-900 hover:underline">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 border-t border-gray-200 pt-6 text-xs leading-relaxed text-gray-500">
          <p>© 2026 {heading}, Inc. Securities offered through a registered broker-dealer. Member FINRA/SIPC.</p>
        </div>
      </div>
    </footer>
  );
}
