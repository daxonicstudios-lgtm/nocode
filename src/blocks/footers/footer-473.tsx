import { Dumbbell, Users, MapPin } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer473(props: BlockProps) {
  const { theme, heading = "RISE Athletic Club" } = props;
  return (
    <footer
      className="w-full bg-white py-16 text-slate-900"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 p-8 text-white md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-orange-400" style={{ color: theme?.accent }}>
                Memberships from R 599 / month
              </p>
              <p className="mt-2 text-3xl font-bold">Train with the best in Cape Town</p>
            </div>
            <a
              href="#"
              className="rounded-full bg-orange-400 px-7 py-3 text-sm font-bold text-slate-900 hover:bg-orange-300"
              style={{ backgroundColor: theme?.accent }}
            >
              Start your trial
            </a>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <Dumbbell className="h-5 w-5" style={{ color: theme?.primary }} />
              <p className="text-lg font-bold">{heading}</p>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Three locations. Unlimited classes. World-class coaches.
            </p>
          </div>
          <div>
            <p className="font-semibold">Training</p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Classes</a></li>
              <li><a href="#" className="hover:text-slate-900">Personal training</a></li>
              <li><a href="#" className="hover:text-slate-900">Small group</a></li>
              <li><a href="#" className="hover:text-slate-900">Kids</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Club</p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Memberships</a></li>
              <li><a href="#" className="hover:text-slate-900">Trainers</a></li>
              <li><a href="#" className="hover:text-slate-900">Schedule</a></li>
              <li><a href="#" className="hover:text-slate-900">Locations</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Community</p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Events</a></li>
              <li><a href="#" className="hover:text-slate-900">Challenges</a></li>
              <li><a href="#" className="hover:text-slate-900">Blog</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />Sea Point</span>
            <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />Claremont</span>
            <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />V&A Waterfront</span>
          </div>
          <p className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />© 2026 {heading}. 12,000+ members strong.</p>
        </div>
      </div>
    </footer>
  );
}
