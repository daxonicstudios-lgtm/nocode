import type { BlockProps } from "@/blocks/types";
import { Star, BadgeCheck } from "lucide-react";

export default function Footer443(props: BlockProps) {
  const { theme, heading = "Gather", bodyText = "Loved by customers, trusted by their IT teams." } = props;
  return (
    <footer
      className="w-full bg-white py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { src: "G2", rating: "4.9", reviews: "1,204" },
            { src: "Capterra", rating: "4.8", reviews: "842" },
            { src: "Trustpilot", rating: "4.9", reviews: "367" },
          ].map((r) => (
            <div key={r.src} className="flex items-center gap-4 rounded-2xl border border-gray-200 p-5">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-amber-50">
                <Star className="h-7 w-7 fill-amber-400 text-amber-400" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">{r.src}</p>
                <p className="mt-0.5 text-xl font-bold text-gray-900">{r.rating} / 5</p>
                <p className="text-xs text-gray-500">{r.reviews} reviews</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-2xl font-bold">{heading}</p>
            <p className="mt-2 text-sm text-gray-600">{bodyText}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-700">
              <BadgeCheck className="h-4 w-4" /> SOC 2 Type II · ISO 27001 · GDPR
            </div>
          </div>
          <div className="md:col-span-7 md:grid md:grid-cols-3 md:gap-6 text-sm">
            <div>
              <p className="font-semibold text-gray-900">Product</p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black">Overview</a></li>
                <li><a href="#" className="hover:text-black">Pricing</a></li>
              </ul>
            </div>
            <div className="mt-6 md:mt-0">
              <p className="font-semibold text-gray-900">Customers</p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black">Reviews</a></li>
                <li><a href="#" className="hover:text-black">Case studies</a></li>
              </ul>
            </div>
            <div className="mt-6 md:mt-0">
              <p className="font-semibold text-gray-900">Trust</p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black">Security</a></li>
                <li><a href="#" className="hover:text-black">Privacy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-gray-200 pt-5 text-xs text-gray-500">© 2026 {heading}</p>
      </div>
    </footer>
  );
}
