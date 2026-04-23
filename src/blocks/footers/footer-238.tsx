import { MessageCircle, Briefcase, Code, Apple, Play } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer238(props: BlockProps) {
  const { theme, heading = "Haven", bodyText = "Mental health support that meets you where you are." } = props;
  const columns = [
    { title: "Services", links: [{ label: "Therapy", url: "#" }, { label: "Psychiatry", url: "#" }, { label: "Coaching", url: "#" }, { label: "Self-guided Care", url: "#" }, { label: "Group Sessions", url: "#" }, { label: "For Couples", url: "#" }] },
    { title: "Resources", links: [{ label: "Articles", url: "#" }, { label: "Guided Meditations", url: "#" }, { label: "Self-assessments", url: "#" }, { label: "Crisis Resources", url: "#" }, { label: "Find a Therapist", url: "#" }] },
    { title: "About", links: [{ label: "Our Mission", url: "#" }, { label: "Clinical Team", url: "#" }, { label: "Research", url: "#" }, { label: "Careers", url: "#" }, { label: "Press", url: "#" }, { label: "Contact", url: "#" }] },
    { title: "Legal", links: [{ label: "Privacy & HIPAA", url: "#" }, { label: "Terms of Service", url: "#" }, { label: "Notice of Privacy", url: "#" }, { label: "Accessibility", url: "#" }, { label: "Licensing", url: "#" }, { label: "Do Not Sell Info", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-teal-50 py-16" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-bold tracking-tight text-teal-950">{heading}</p>
            <p className="mt-2 text-sm text-teal-900/70">{bodyText}</p>
            <div className="mt-5 space-y-2">
              <a href="#" className="flex items-center gap-3 rounded-xl bg-white px-3 py-2 shadow-sm hover:shadow">
                <Apple className="h-6 w-6 text-teal-900" />
                <div className="text-left"><p className="text-[10px] text-teal-700">Download on the</p><p className="text-sm font-semibold text-teal-950">App Store</p></div>
              </a>
              <a href="#" className="flex items-center gap-3 rounded-xl bg-white px-3 py-2 shadow-sm hover:shadow">
                <Play className="h-6 w-6 text-teal-900" />
                <div className="text-left"><p className="text-[10px] text-teal-700">GET IT ON</p><p className="text-sm font-semibold text-teal-950">Google Play</p></div>
              </a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-teal-900/80 hover:text-teal-950">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-teal-200 pt-6 text-xs text-teal-900/70">
          <p>If you or someone you know is in crisis, please contact your local emergency services. {heading} is not a substitute for emergency care.</p>
          <div className="mt-4 flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p>© 2026 {heading} Health. HIPAA compliant.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-teal-950"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" className="hover:text-teal-950"><Briefcase className="h-4 w-4" /></a>
              <a href="#" className="hover:text-teal-950"><Code className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
