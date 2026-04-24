import type { BlockProps } from "@/blocks/types";
import { Shield, ShieldCheck, Lock, BadgeCheck } from "lucide-react";

export default function Footer449(props: BlockProps) {
  const { theme, heading = "Pinnacle" } = props;
  const shields = [
    { icon: Shield, label: "SOC 2", sub: "Type II" },
    { icon: ShieldCheck, label: "ISO", sub: "27001" },
    { icon: BadgeCheck, label: "GDPR", sub: "Compliant" },
    { icon: Lock, label: "SSL", sub: "256-bit" },
  ];
  return (
    <footer
      className="w-full bg-gradient-to-tr from-violet-950 via-indigo-950 to-slate-950 py-16 text-violet-50"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-300">Certified & audited</p>
            <p className="mt-3 text-3xl font-bold text-white">{heading}</p>
            <p className="mt-2 max-w-sm text-sm text-violet-200">
              Security isn't a feature, it's the floor. Review our controls, then read the audit.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {shields.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="flex flex-col items-center rounded-xl bg-white/5 px-3 py-4 text-center ring-1 ring-white/10 backdrop-blur"
              >
                <Icon className="h-6 w-6 text-violet-200" />
                <p className="mt-2 text-xs font-bold text-white">{label}</p>
                <p className="text-[10px] text-violet-300">{sub}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-sm text-violet-200">Serving 4,700+ enterprise customers across 62 countries.</p>
          </div>
          <nav className="flex flex-col gap-2 text-sm text-violet-200">
            <a href="#" className="hover:text-white">Trust center</a>
            <a href="#" className="hover:text-white">Security whitepaper</a>
            <a href="#" className="hover:text-white">Bug bounty</a>
          </nav>
          <nav className="flex flex-col gap-2 text-sm text-violet-200">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Status</a>
          </nav>
        </div>
        <p className="mt-10 text-xs text-violet-400">© 2026 {heading} Holdings</p>
      </div>
    </footer>
  );
}
