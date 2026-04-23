import { GraduationCap, Calendar, Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer468(props: BlockProps) {
  const { theme, heading = "University of Maseru" } = props;
  return (
    <footer
      className="w-full bg-white py-16 text-slate-800"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 p-8 text-white md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-amber-400" style={{ color: theme?.accent }}>
                Admissions open · Fall 2026
              </p>
              <p className="mt-2 font-serif text-3xl">Start your application today</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="rounded-md bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-300" style={{ backgroundColor: theme?.accent }}>
                Apply now
              </a>
              <a href="#" className="rounded-md border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-slate-900">
                Visit campus
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6" style={{ color: theme?.primary }} />
              <p className="font-serif text-xl">{heading}</p>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              A public research university in Maseru, Lesotho. Over 18,000 students across 9 faculties.
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-slate-700">
              <Mail className="h-4 w-4" />admissions@uom.ac.ls
            </p>
          </div>
          <div>
            <p className="font-serif text-sm uppercase tracking-wider">Academics</p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Undergraduate</a></li>
              <li><a href="#" className="hover:text-slate-900">Graduate</a></li>
              <li><a href="#" className="hover:text-slate-900">Online courses</a></li>
              <li><a href="#" className="hover:text-slate-900">Faculties</a></li>
            </ul>
          </div>
          <div>
            <p className="font-serif text-sm uppercase tracking-wider">Students</p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Student portal</a></li>
              <li><a href="#" className="hover:text-slate-900">Library</a></li>
              <li><a href="#" className="hover:text-slate-900">Financial aid</a></li>
              <li><a href="#" className="hover:text-slate-900">Housing</a></li>
            </ul>
          </div>
          <div>
            <p className="font-serif text-sm uppercase tracking-wider">University</p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">About</a></li>
              <li><a href="#" className="hover:text-slate-900">Research</a></li>
              <li><a href="#" className="hover:text-slate-900">Alumni</a></li>
              <li><a href="#" className="hover:text-slate-900">Give</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row">
          <div className="flex items-center gap-2"><Calendar className="h-4 w-4" />Application deadline: 31 July 2026</div>
          <p>© 2026 {heading}. An equal opportunity institution.</p>
        </div>
      </div>
    </footer>
  );
}
