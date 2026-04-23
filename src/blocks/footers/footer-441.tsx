import type { BlockProps } from "@/blocks/types";
import { Shield, ShieldCheck, Lock, BadgeCheck, Star } from "lucide-react";

export default function Footer441(props: BlockProps) {
  const { theme, heading = "Harbour" } = props;
  return (
    <footer
      className="w-full bg-gradient-to-b from-sky-50 to-white py-16"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          <div className="flex flex-col items-center rounded-xl bg-white p-5 text-center shadow-sm ring-1 ring-sky-100">
            <Shield className="h-7 w-7 text-sky-600" />
            <p className="mt-2 text-xs font-semibold text-gray-900">SOC 2 Type II</p>
            <p className="text-[10px] text-gray-500">Audited 2026</p>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-white p-5 text-center shadow-sm ring-1 ring-sky-100">
            <ShieldCheck className="h-7 w-7 text-emerald-600" />
            <p className="mt-2 text-xs font-semibold text-gray-900">ISO 27001</p>
            <p className="text-[10px] text-gray-500">Certified</p>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-white p-5 text-center shadow-sm ring-1 ring-sky-100">
            <BadgeCheck className="h-7 w-7 text-violet-600" />
            <p className="mt-2 text-xs font-semibold text-gray-900">GDPR</p>
            <p className="text-[10px] text-gray-500">Compliant</p>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-white p-5 text-center shadow-sm ring-1 ring-sky-100">
            <Lock className="h-7 w-7 text-rose-600" />
            <p className="mt-2 text-xs font-semibold text-gray-900">256-bit SSL</p>
            <p className="text-[10px] text-gray-500">End-to-end</p>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-white p-5 text-center shadow-sm ring-1 ring-sky-100">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
            </div>
            <p className="mt-2 text-xs font-semibold text-gray-900">4.9 / 5</p>
            <p className="text-[10px] text-gray-500">2,413 reviews</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xl font-bold">{heading}</p>
            <p className="mt-1 text-sm text-gray-600">Trusted by 6,200+ teams worldwide.</p>
          </div>
          <nav className="flex flex-wrap gap-5 text-sm text-gray-700">
            <a href="#" className="hover:text-black">Trust</a>
            <a href="#" className="hover:text-black">Security</a>
            <a href="#" className="hover:text-black">Customers</a>
            <a href="#" className="hover:text-black">Contact</a>
          </nav>
          <p className="text-xs text-gray-500">© 2026 {heading}</p>
        </div>
      </div>
    </footer>
  );
}
