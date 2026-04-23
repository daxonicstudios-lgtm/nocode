import { BookOpen, Heart, Phone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer493(props: BlockProps) {
  const { theme, heading = "Cornerstone Fellowship" } = props;
  return (
    <footer
      className="w-full bg-white py-14 text-slate-800"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6" style={{ color: theme?.primary }} />
              <p className="font-serif text-2xl">{heading}</p>
            </div>
            <p className="mt-2 max-w-md text-sm text-slate-600">
              Making disciples. Loving our city. Serving the nations.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            <a href="#" className="rounded-xl border border-slate-200 px-4 py-3 text-xs font-semibold hover:border-slate-900">Give</a>
            <a href="#" className="rounded-xl border border-slate-200 px-4 py-3 text-xs font-semibold hover:border-slate-900">Listen</a>
            <a href="#" className="rounded-xl border border-slate-200 px-4 py-3 text-xs font-semibold hover:border-slate-900">Prayer</a>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-8 text-sm md:grid-cols-4">
          <div>
            <p className="font-semibold">About</p>
            <ul className="mt-3 space-y-1.5 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">What we believe</a></li>
              <li><a href="#" className="hover:text-slate-900">Our leaders</a></li>
              <li><a href="#" className="hover:text-slate-900">Locations</a></li>
              <li><a href="#" className="hover:text-slate-900">Baptism</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Sermons</p>
            <ul className="mt-3 space-y-1.5 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Latest</a></li>
              <li><a href="#" className="hover:text-slate-900">Series</a></li>
              <li><a href="#" className="hover:text-slate-900">Podcast</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Connect</p>
            <ul className="mt-3 space-y-1.5 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Small groups</a></li>
              <li><a href="#" className="hover:text-slate-900">Serve teams</a></li>
              <li><a href="#" className="hover:text-slate-900">Events</a></li>
              <li><a href="#" className="hover:text-slate-900">Kids & youth</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Visit</p>
            <ul className="mt-3 space-y-1.5 text-slate-600">
              <li>Sundays · 9am & 11am</li>
              <li>112 Samora Machel Ave, Harare</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4" />+263 4 555 0130</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center gap-2 border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
          <p className="flex items-center gap-1"><Heart className="h-3.5 w-3.5" />Loved · Sent · Returning</p>
          <p>© 2026 {heading}.</p>
        </div>
      </div>
    </footer>
  );
}
