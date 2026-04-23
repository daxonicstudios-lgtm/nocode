import type { BlockProps } from "@/blocks/types";
import { ShieldCheck, Lock, BadgeCheck } from "lucide-react";

export default function Footer436(props: BlockProps) {
  const { theme, heading = "Palisade", bodyText = "Security you can audit." } = props;
  const badges = [
    { icon: ShieldCheck, label: "SOC 2 Type II" },
    { icon: Lock, label: "256-bit SSL" },
    { icon: BadgeCheck, label: "GDPR Compliant" },
    { icon: ShieldCheck, label: "ISO 27001" },
  ];
  return (
    <footer
      className="w-full border-t border-gray-200 bg-white py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <p className="text-2xl font-bold">{heading}</p>
            <p className="mt-2 max-w-sm text-sm text-gray-600">{bodyText}</p>
            <a href="#" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:underline">
              View our Trust Center →
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Compliance & security</p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {badges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-50 px-3 py-4 text-center">
                  <Icon className="h-6 w-6 text-emerald-600" />
                  <span className="mt-2 text-[11px] font-semibold text-gray-700">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row">
          <span>© 2026 {heading}, Inc.</span>
          <nav className="flex gap-5">
            <a href="#" className="hover:text-gray-900">Security</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Status</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
