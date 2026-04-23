import { MessageCircle, Briefcase, Users, Play } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer184(props: BlockProps) {
  const { theme, heading = "MedBridge", bodyText = "Connecting patients with specialist care." } = props;
  const columns = [
    { title: "Patients", links: [{ label: "Find a Doctor", url: "#" }, { label: "Book Visit", url: "#" }, { label: "Insurance", url: "#" }, { label: "Prescriptions", url: "#" }] },
    { title: "Providers", links: [{ label: "Join Network", url: "#" }, { label: "EHR Integration", url: "#" }, { label: "Billing", url: "#" }, { label: "Telehealth", url: "#" }] },
    { title: "Resources", links: [{ label: "Health Library", url: "#" }, { label: "Help Center", url: "#" }, { label: "Contact", url: "#" }, { label: "Careers", url: "#" }] },
  ];
  return (
    <footer className="w-full border-t-2 border-teal-500 bg-white py-14" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.primary }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-500 text-xl font-bold text-white" style={{ backgroundColor: theme?.primary }}>+</span>
              <p className="text-lg font-semibold text-gray-900">{heading}</p>
            </div>
            <p className="mt-3 text-sm text-gray-600">{bodyText}</p>
            <div className="mt-5 flex gap-3 text-gray-500">
              <a href="#" className="hover:text-teal-600"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="hover:text-teal-600"><Briefcase className="h-5 w-5" /></a>
              <a href="#" className="hover:text-teal-600"><Users className="h-5 w-5" /></a>
              <a href="#" className="hover:text-teal-600"><Play className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold text-gray-900">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-gray-600 hover:text-teal-600">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-gray-200 pt-6 text-xs text-gray-500">
          © 2026 {heading}, Inc. HIPAA-compliant. Not a substitute for professional medical advice.
        </div>
      </div>
    </footer>
  );
}
