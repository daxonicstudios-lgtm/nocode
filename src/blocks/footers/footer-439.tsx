import type { BlockProps } from "@/blocks/types";
import { ShieldCheck } from "lucide-react";

export default function Footer439(props: BlockProps) {
  const { theme, heading = "Brickhouse" } = props;
  const badges = ["SOC 2 Type II", "ISO 27001", "GDPR Compliant", "HIPAA", "PCI DSS", "256-bit SSL"];
  return (
    <footer
      className="w-full bg-gray-50 py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
              <ShieldCheck className="h-3.5 w-3.5" /> Enterprise-ready
            </div>
            <p className="mt-3 text-2xl font-bold text-gray-900">{heading}</p>
            <p className="mt-2 text-sm text-gray-600">Built for the security teams who review security teams.</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Our certifications</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  {b}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Independently audited. Reports available under NDA via our <a href="#" className="underline hover:text-gray-900">Trust Center</a>.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row">
          <span>© 2026 {heading} Systems</span>
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
