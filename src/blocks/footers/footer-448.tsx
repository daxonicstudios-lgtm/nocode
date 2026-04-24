import type { BlockProps } from "@/blocks/types";
import { ShieldCheck, BadgeCheck } from "lucide-react";

export default function Footer448(props: BlockProps) {
  const { theme, heading = "Constant" } = props;
  return (
    <footer
      className="w-full border-t border-gray-200 bg-white py-12"
      style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xl font-bold">{heading}</p>
            <p className="mt-2 text-sm text-gray-600">Billing infrastructure for modern SaaS.</p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
              <BadgeCheck className="h-3.5 w-3.5" /> 99.99% uptime over 12 months
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm font-semibold text-gray-900">Product</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Billing</a></li>
              <li><a href="#" className="hover:text-black">Invoicing</a></li>
              <li><a href="#" className="hover:text-black">Tax</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm font-semibold text-gray-900">Developers</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">API</a></li>
              <li><a href="#" className="hover:text-black">Docs</a></li>
              <li><a href="#" className="hover:text-black">Status</a></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="text-sm font-semibold text-gray-900">Security & compliance</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <span className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-xs text-gray-700">
                <ShieldCheck className="h-4 w-4 text-emerald-600" /> SOC 2 Type II · ISO 27001
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-xs text-gray-700">
                <BadgeCheck className="h-4 w-4 text-sky-600" /> GDPR · CCPA · HIPAA BAA
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-xs text-gray-700">
                <ShieldCheck className="h-4 w-4 text-violet-600" /> PCI DSS Level 1 · 256-bit SSL
              </span>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-gray-200 pt-5 text-xs text-gray-500 sm:flex-row">
          <span>© 2026 {heading} Inc. Serving 9,800+ SaaS companies.</span>
          <nav className="flex gap-5">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">DPA</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
