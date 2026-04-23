import type { BlockProps } from "@/blocks/types";
import { Shield, Lock, ShieldCheck, BadgeCheck } from "lucide-react";

export default function Footer437(props: BlockProps) {
  const { theme, heading = "Vaultline" } = props;
  const badges = [
    { icon: Shield, label: "SOC 2 Type II", color: "text-indigo-500", bg: "bg-indigo-500/10" },
    { icon: ShieldCheck, label: "ISO 27001", color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { icon: BadgeCheck, label: "GDPR", color: "text-amber-500", bg: "bg-amber-500/10" },
    { icon: Lock, label: "PCI DSS", color: "text-rose-500", bg: "bg-rose-500/10" },
    { icon: Lock, label: "HIPAA", color: "text-sky-500", bg: "bg-sky-500/10" },
  ];
  return (
    <footer
      className="w-full bg-neutral-950 py-16 text-neutral-100"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">Certified, audited, maintained</p>
          <p className="mt-3 text-3xl font-bold">{heading}</p>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {badges.map(({ icon: Icon, label, color, bg }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2"
            >
              <span className={`flex h-7 w-7 items-center justify-center rounded-full ${bg}`}>
                <Icon className={`h-4 w-4 ${color}`} />
              </span>
              <span className="text-xs font-semibold text-neutral-100">{label}</span>
            </div>
          ))}
        </div>
        <div className="mt-14 grid grid-cols-1 gap-8 border-t border-neutral-900 pt-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-sm text-neutral-400">
              {heading} is trusted with the data of <span className="font-semibold text-white">900+ enterprise customers</span> across finance, healthcare, and government.
            </p>
          </div>
          <nav className="flex flex-col gap-2 text-sm text-neutral-300">
            <a href="#" className="hover:text-white">Trust center</a>
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </nav>
          <nav className="flex flex-col gap-2 text-sm text-neutral-300">
            <a href="#" className="hover:text-white">Status</a>
            <a href="#" className="hover:text-white">Sub-processors</a>
            <a href="#" className="hover:text-white">DPA</a>
          </nav>
        </div>
        <p className="mt-10 text-xs text-neutral-500">© 2026 {heading}. Audited annually.</p>
      </div>
    </footer>
  );
}
