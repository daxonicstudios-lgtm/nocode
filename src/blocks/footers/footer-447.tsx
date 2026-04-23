import type { BlockProps } from "@/blocks/types";
import { Star } from "lucide-react";

export default function Footer447(props: BlockProps) {
  const { theme, heading = "Riverbed" } = props;
  return (
    <footer
      className="w-full bg-[#fff9f0] py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-md ring-1 ring-amber-100 md:p-10">
          <div className="flex flex-col items-center text-center">
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-8 w-8 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="mt-4 text-5xl font-black text-gray-900">4.9 / 5</p>
            <p className="mt-1 text-sm text-gray-600">Based on <span className="font-semibold">2,413 verified reviews</span></p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-gray-700">
              <span className="rounded-full bg-amber-50 px-3 py-1">G2 · 4.9</span>
              <span className="rounded-full bg-amber-50 px-3 py-1">Capterra · 4.8</span>
              <span className="rounded-full bg-amber-50 px-3 py-1">Trustpilot · 4.9</span>
              <span className="rounded-full bg-amber-50 px-3 py-1">Product Hunt · #1</span>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="font-serif text-3xl text-gray-900">{heading}</p>
            <p className="mt-1 text-sm text-gray-600">Software worth a five-star review.</p>
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
