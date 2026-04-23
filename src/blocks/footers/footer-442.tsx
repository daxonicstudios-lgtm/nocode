import type { BlockProps } from "@/blocks/types";
import { ShieldCheck } from "lucide-react";

export default function Footer442(props: BlockProps) {
  const { theme, heading = "Silvergate" } = props;
  const badges = [
    { tag: "SOC 2", detail: "Type II" },
    { tag: "ISO", detail: "27001:2022" },
    { tag: "GDPR", detail: "EU/UK" },
    { tag: "CCPA", detail: "California" },
    { tag: "PCI", detail: "DSS v4.0" },
    { tag: "SSL", detail: "TLS 1.3" },
  ];
  return (
    <footer
      className="w-full bg-[#101418] py-16 text-gray-200"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <ShieldCheck className="h-3.5 w-3.5" /> Trust & compliance
            </div>
            <p className="mt-3 text-3xl font-bold text-white">{heading}</p>
            <p className="mt-2 max-w-md text-sm text-gray-400">
              We publish a complete list of our controls, sub-processors, and audit history.
            </p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 rounded-md border border-gray-700 px-4 py-2 text-sm text-gray-200 hover:border-gray-400">
            Request SOC 2 report →
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {badges.map((b) => (
            <div
              key={b.tag}
              className="rounded-md border border-gray-800 bg-gray-900/60 p-4 text-center"
            >
              <p className="font-mono text-xs text-emerald-400">{b.tag}</p>
              <p className="mt-1 text-sm font-semibold text-white">{b.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-gray-800 pt-6 text-xs text-gray-500 sm:flex-row">
          <span>© 2026 {heading} Technologies, Inc.</span>
          <nav className="flex gap-5">
            <a href="#" className="hover:text-white">Trust center</a>
            <a href="#" className="hover:text-white">DPA</a>
            <a href="#" className="hover:text-white">Sub-processors</a>
            <a href="#" className="hover:text-white">Status</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
