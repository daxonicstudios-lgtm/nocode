import type { BlockProps } from "@/blocks/types";
import { ShieldCheck, Lock } from "lucide-react";

export default function Footer444(props: BlockProps) {
  const { theme, heading = "Ironhold" } = props;
  return (
    <footer
      className="w-full bg-slate-900 py-14 text-slate-100"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/15 ring-1 ring-emerald-400/40">
            <ShieldCheck className="h-7 w-7 text-emerald-400" />
          </div>
          <p className="text-sm text-slate-400">Trusted with the data of</p>
          <p className="text-4xl font-bold text-white">
            <span className="text-emerald-300">12,400+</span> companies worldwide
          </p>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {[
            "SOC 2 Type II",
            "ISO 27001",
            "ISO 27018",
            "GDPR Compliant",
            "HIPAA BAA",
            "PCI DSS",
            "256-bit SSL",
          ].map((b) => (
            <span
              key={b}
              className="rounded-full border border-slate-700 bg-slate-800/60 px-4 py-1.5 text-xs font-medium text-slate-100"
            >
              {b}
            </span>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-slate-800 pt-10 md:grid-cols-3">
          <div>
            <p className="text-xl font-bold">{heading}</p>
            <p className="mt-1 text-sm text-slate-400">Security-first from day one.</p>
          </div>
          <nav className="flex flex-col gap-2 text-sm text-slate-300">
            <a href="#" className="hover:text-white">Trust center</a>
            <a href="#" className="hover:text-white">Sub-processors</a>
            <a href="#" className="hover:text-white">DPA & SCCs</a>
          </nav>
          <div className="flex items-start gap-2 text-sm text-slate-300">
            <Lock className="mt-0.5 h-4 w-4 text-emerald-300" />
            <p>Data encrypted at rest with AES-256. Keys managed with HSMs.</p>
          </div>
        </div>
        <p className="mt-10 text-xs text-slate-500">© 2026 {heading}, Inc.</p>
      </div>
    </footer>
  );
}
