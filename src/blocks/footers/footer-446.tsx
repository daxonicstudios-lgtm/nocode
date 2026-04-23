import type { BlockProps } from "@/blocks/types";
import { ShieldCheck, BadgeCheck, Lock } from "lucide-react";

export default function Footer446(props: BlockProps) {
  const { theme, heading = "Trailhead" } = props;
  return (
    <footer
      className="w-full bg-gray-900 py-14 text-gray-100"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-emerald-500 p-5 text-emerald-950">
            <ShieldCheck className="h-8 w-8" />
            <p className="mt-3 text-sm font-bold uppercase tracking-wide">SOC 2 Type II</p>
            <p className="text-xs">Audited annually by Prescient Assurance</p>
          </div>
          <div className="rounded-2xl bg-sky-400 p-5 text-sky-950">
            <BadgeCheck className="h-8 w-8" />
            <p className="mt-3 text-sm font-bold uppercase tracking-wide">GDPR Ready</p>
            <p className="text-xs">EU data residency options available</p>
          </div>
          <div className="rounded-2xl bg-amber-400 p-5 text-amber-950">
            <Lock className="h-8 w-8" />
            <p className="mt-3 text-sm font-bold uppercase tracking-wide">256-bit SSL</p>
            <p className="text-xs">AES-256 at rest, TLS 1.3 in transit</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-2xl font-bold">{heading}</p>
            <p className="mt-1 text-sm text-gray-400">A safer way to move customer data between the tools you already use.</p>
          </div>
          <nav className="flex flex-wrap gap-5 text-sm text-gray-300">
            <a href="#" className="hover:text-white">Trust</a>
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">Contact</a>
          </nav>
        </div>
        <p className="mt-10 border-t border-gray-800 pt-5 text-xs text-gray-500">© 2026 {heading}</p>
      </div>
    </footer>
  );
}
