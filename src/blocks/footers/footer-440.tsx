import type { BlockProps } from "@/blocks/types";
import { ShieldCheck, Lock, BadgeCheck } from "lucide-react";

export default function Footer440(props: BlockProps) {
  const { theme, heading = "Paystream" } = props;
  const payments = ["Visa", "Mastercard", "Amex", "Apple Pay", "Google Pay", "PayPal"];
  return (
    <footer
      className="w-full border-t border-gray-200 bg-white py-12"
      style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <p className="text-xl font-bold">{heading}</p>
            <p className="mt-2 text-sm text-gray-500">Checkout without compromise.</p>
            <div className="mt-4 flex gap-3 text-xs text-gray-600">
              <span className="inline-flex items-center gap-1"><Lock className="h-3.5 w-3.5" /> 256-bit SSL</span>
              <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5" /> PCI DSS</span>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold">Shop</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">New arrivals</a></li>
              <li><a href="#" className="hover:text-black">Best sellers</a></li>
              <li><a href="#" className="hover:text-black">Gift cards</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Help</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Shipping</a></li>
              <li><a href="#" className="hover:text-black">Returns</a></li>
              <li><a href="#" className="hover:text-black">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Accepted payments</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {payments.map((p) => (
                <span key={p} className="rounded-md border border-gray-300 bg-gray-50 px-2 py-1 font-mono text-[11px] font-semibold text-gray-700">
                  {p}
                </span>
              ))}
            </div>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-emerald-700">
              <BadgeCheck className="h-4 w-4" /> Buyer protection included
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6 text-xs text-gray-500">
          © 2026 {heading}. VAT GB-123456789 · Secured checkout powered by Stripe.
        </div>
      </div>
    </footer>
  );
}
