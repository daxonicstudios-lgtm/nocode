import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer466(props: BlockProps) {
  const {
    theme,
    heading = "Saint Michael's College",
    bodyText = "Educating the next generation of African leaders since 1952.",
  } = props;
  return (
    <footer
      className="w-full bg-[#0b1f3a] py-16 text-slate-100"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-7 w-7 text-amber-400" style={{ color: theme?.accent }} />
              <p className="font-serif text-2xl">{heading}</p>
            </div>
            <p className="mt-3 text-sm text-slate-400">{bodyText}</p>
            <a
              href="#"
              className="mt-5 inline-block rounded-md bg-amber-400 px-6 py-3 font-serif text-sm font-semibold text-[#0b1f3a] hover:bg-amber-300"
              style={{ backgroundColor: theme?.accent }}
            >
              Apply now
            </a>
          </div>
          <div className="md:col-span-2">
            <p className="font-serif text-sm uppercase tracking-widest text-amber-400">Academics</p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white">Programs</a></li>
              <li><a href="#" className="hover:text-white">Faculty</a></li>
              <li><a href="#" className="hover:text-white">Calendar</a></li>
              <li><a href="#" className="hover:text-white">Library</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="font-serif text-sm uppercase tracking-widest text-amber-400">Students</p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white">Admissions</a></li>
              <li><a href="#" className="hover:text-white">Student portal</a></li>
              <li><a href="#" className="hover:text-white">Student life</a></li>
              <li><a href="#" className="hover:text-white">Athletics</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="font-serif text-sm uppercase tracking-widest text-amber-400">Community</p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white">Parents</a></li>
              <li><a href="#" className="hover:text-white">Alumni</a></li>
              <li><a href="#" className="hover:text-white">Give</a></li>
              <li><a href="#" className="hover:text-white">News</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="font-serif text-sm uppercase tracking-widest text-amber-400">Admissions</p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" />Enterprise Rd, Harare</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4" />+263 4 555 0120</li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4" />admissions@stm.ac.zw</li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-6 text-center font-serif text-xs italic text-slate-400">
          © 2026 {heading}. Veritas et Virtus.
        </p>
      </div>
    </footer>
  );
}
