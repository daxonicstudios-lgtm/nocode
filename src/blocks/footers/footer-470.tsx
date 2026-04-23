import { GraduationCap, Users, Library, Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer470(props: BlockProps) {
  const { theme, heading = "Kente Coding Academy" } = props;
  return (
    <footer
      className="w-full bg-[#06131f] py-16 text-slate-100"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="md:max-w-sm">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-lime-400" style={{ color: theme?.accent }} />
              <p className="text-xl font-semibold">{heading}</p>
            </div>
            <p className="mt-3 text-sm text-slate-400">
              Full-stack developer bootcamp. 16 weeks. Lagos & online. 92% hire rate.
            </p>
            <a
              href="#"
              className="mt-5 inline-block rounded-md bg-lime-400 px-6 py-3 text-sm font-semibold text-[#06131f] hover:bg-lime-300"
              style={{ backgroundColor: theme?.accent }}
            >
              Apply for Cohort 14
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-4">
            <div>
              <p className="font-semibold">Courses</p>
              <ul className="mt-3 space-y-1.5 text-slate-400">
                <li><a href="#" className="hover:text-white">Full-stack</a></li>
                <li><a href="#" className="hover:text-white">Data</a></li>
                <li><a href="#" className="hover:text-white">Product design</a></li>
                <li><a href="#" className="hover:text-white">Kids code</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Students</p>
              <ul className="mt-3 space-y-1.5 text-slate-400">
                <li><a href="#" className="hover:text-white">Admissions</a></li>
                <li><a href="#" className="hover:text-white">Student portal</a></li>
                <li><a href="#" className="hover:text-white">Financial aid</a></li>
                <li><a href="#" className="hover:text-white">Alumni</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Learn</p>
              <ul className="mt-3 space-y-1.5 text-slate-400">
                <li><a href="#" className="hover:text-white">Library</a></li>
                <li><a href="#" className="hover:text-white">Free lessons</a></li>
                <li><a href="#" className="hover:text-white">Events</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Company</p>
              <ul className="mt-3 space-y-1.5 text-slate-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Hire grads</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          {[
            { icon: Users, k: "1,400+", v: "Graduates" },
            { icon: GraduationCap, k: "92%", v: "Hired in 6mo" },
            { icon: Library, k: "200+", v: "Hiring partners" },
          ].map((s, i) => (
            <div key={i} className="rounded-xl border border-white/10 p-4">
              <s.icon className="mx-auto h-5 w-5 text-lime-400" style={{ color: theme?.accent }} />
              <p className="mt-2 text-2xl font-semibold">{s.k}</p>
              <p className="text-xs text-slate-400">{s.v}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 md:flex-row">
          <div className="flex items-center gap-2"><Mail className="h-4 w-4" />admissions@kente.academy</div>
          <p>© 2026 {heading}. Lagos · Remote.</p>
        </div>
      </div>
    </footer>
  );
}
