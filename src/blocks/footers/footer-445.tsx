import type { BlockProps } from "@/blocks/types";
import { ShieldCheck, BadgeCheck, Star } from "lucide-react";

export default function Footer445(props: BlockProps) {
  const { theme, heading = "Bluestone" } = props;
  return (
    <footer
      className="w-full bg-white py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xl font-bold">{heading}</p>
            <p className="mt-2 text-sm text-gray-600">Fintech infrastructure, audited end-to-end.</p>
            <div className="mt-5 flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
              </div>
              <span className="text-sm font-semibold text-gray-900">4.9 / 5</span>
              <span className="text-xs text-gray-500">· 2,413 reviews on G2</span>
            </div>
          </div>
          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Security</p>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                "SOC 2 Type II audited",
                "ISO 27001 certified",
                "GDPR & CCPA compliant",
                "PCI DSS Level 1",
              ].map((b) => (
                <li key={b} className="flex items-center gap-2 text-gray-700">
                  <ShieldCheck className="h-4 w-4 flex-shrink-0 text-emerald-600" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Payments</p>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                "Visa, Mastercard, Amex",
                "Apple Pay & Google Pay",
                "SEPA, ACH, Wire",
                "Bank-grade 256-bit SSL",
              ].map((p) => (
                <li key={p} className="flex items-center gap-2 text-gray-700">
                  <BadgeCheck className="h-4 w-4 flex-shrink-0 text-sky-600" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-gray-200 pt-5 text-xs text-gray-500 sm:flex-row">
          <span>© 2026 {heading} Financial Technologies</span>
          <nav className="flex gap-5">
            <a href="#" className="hover:text-gray-900">Licenses</a>
            <a href="#" className="hover:text-gray-900">Disclosures</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
