import type { BlockProps } from "@/blocks/types";
import { Star } from "lucide-react";

export default function Footer438(props: BlockProps) {
  const { theme, heading = "Clearwater" } = props;
  return (
    <footer
      className="w-full bg-white py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 p-8 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">4.9 / 5</p>
              <p className="text-xs text-gray-600">2,413 verified reviews</p>
            </div>
          </div>
          <div className="border-x border-amber-200/60 px-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">Trusted on</p>
            <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-800">
              <span className="rounded-md bg-white px-2 py-1 font-semibold">G2</span>
              <span className="rounded-md bg-white px-2 py-1 font-semibold">Capterra</span>
              <span className="rounded-md bg-white px-2 py-1 font-semibold">Trustpilot</span>
              <span className="rounded-md bg-white px-2 py-1 font-semibold">Product Hunt</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-700">
              "The most dependable tool we use. Full stop." — <span className="font-semibold">Meera I., Head of Ops</span>
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-xl font-bold">{heading}</p>
            <p className="mt-1 text-sm text-gray-500">Software people actually recommend.</p>
          </div>
          <nav className="flex flex-wrap gap-5 text-sm text-gray-700">
            <a href="#" className="hover:text-black">Reviews</a>
            <a href="#" className="hover:text-black">Customers</a>
            <a href="#" className="hover:text-black">Pricing</a>
            <a href="#" className="hover:text-black">Contact</a>
          </nav>
          <p className="text-xs text-gray-500">© 2026 {heading}</p>
        </div>
      </div>
    </footer>
  );
}
