import type { BlockProps } from "@/blocks/types";
import { ShieldCheck, Star, BadgeCheck, Lock } from "lucide-react";

export default function Footer450(props: BlockProps) {
  const { theme, heading = "Keystone", bodyText = "Serious tools for serious operators." } = props;
  const payments = ["Visa", "Mastercard", "Amex", "Apple Pay", "Google Pay", "ACH"];
  return (
    <footer
      className="w-full border-t border-gray-200 bg-white py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-2xl font-bold">{heading}</p>
            <p className="mt-2 max-w-xs text-sm text-gray-600">{bodyText}</p>
            <div className="mt-5 flex items-center gap-2">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
              </div>
              <span className="text-sm font-semibold text-gray-900">4.9 / 5</span>
              <span className="text-xs text-gray-500">· 2,413 reviews</span>
            </div>
          </div>
          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Compliance</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                { icon: ShieldCheck, label: "SOC 2 Type II" },
                { icon: ShieldCheck, label: "ISO 27001" },
                { icon: BadgeCheck, label: "GDPR" },
                { icon: Lock, label: "256-bit SSL" },
                { icon: ShieldCheck, label: "PCI DSS" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-md border border-gray-300 bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-gray-700"
                >
                  <Icon className="h-3.5 w-3.5 text-emerald-600" />
                  {label}
                </span>
              ))}
            </div>
            <p className="mt-3 text-xs text-gray-500">
              Trusted by <span className="font-semibold text-gray-800">8,300+ companies</span> across 48 countries.
            </p>
          </div>
          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Payments accepted</p>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {payments.map((p) => (
                <div key={p} className="flex items-center justify-center rounded-md border border-gray-200 bg-white px-2 py-2 font-mono text-[11px] font-semibold text-gray-700">
                  {p}
                </div>
              ))}
            </div>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-emerald-700">
              <BadgeCheck className="h-4 w-4" /> Secure checkout guaranteed
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-gray-200 pt-5 text-xs text-gray-500 sm:flex-row">
          <span>© 2026 {heading}, Inc. All rights reserved.</span>
          <nav className="flex gap-5">
            <a href="#" className="hover:text-gray-900">Trust</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Status</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
