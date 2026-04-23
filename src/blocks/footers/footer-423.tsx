import type { BlockProps } from "@/blocks/types";
import { Trophy, Award, Sparkles } from "lucide-react";

export default function Footer423(props: BlockProps) {
  const { theme, heading = "Vantage" } = props;
  const awards = [
    { icon: Trophy, title: "Product of the Year", source: "SaaStr · 2025" },
    { icon: Award, title: "Best B2B Tool", source: "Product Hunt · 2025" },
    { icon: Sparkles, title: "Fast Company Innovation", source: "2026" },
  ];
  return (
    <footer
      className="w-full bg-gradient-to-b from-gray-50 to-white py-16"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">Recent recognition</p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {awards.map(({ icon: Icon, title, source }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <Icon className="mx-auto h-8 w-8 text-amber-500" />
              <p className="mt-3 text-sm font-semibold text-gray-900">{title}</p>
              <p className="mt-1 text-xs text-gray-500">{source}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-gray-200 pt-8 md:flex-row">
          <div>
            <p className="text-xl font-bold">{heading}</p>
            <p className="mt-1 text-sm text-gray-500">Software worth recommending.</p>
          </div>
          <nav className="flex flex-wrap gap-5 text-sm text-gray-700">
            <a href="#" className="hover:text-black">Product</a>
            <a href="#" className="hover:text-black">Customers</a>
            <a href="#" className="hover:text-black">About</a>
            <a href="#" className="hover:text-black">Contact</a>
          </nav>
          <p className="text-xs text-gray-500">© 2026 {heading}</p>
        </div>
      </div>
    </footer>
  );
}
