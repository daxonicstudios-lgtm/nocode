import { BookOpen, GraduationCap, Users, Library } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer467(props: BlockProps) {
  const { theme, heading = "Accra International Academy" } = props;
  return (
    <footer
      className="w-full bg-amber-50 py-16 text-[#2b1b08]"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <GraduationCap className="h-10 w-10" style={{ color: theme?.primary }} />
          <p className="mt-3 font-serif text-4xl">{heading}</p>
          <p className="mt-2 max-w-md text-sm text-[#2b1b08]/70">
            A British-curriculum day school for students aged 3 to 18 in East Legon, Accra.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { icon: BookOpen, label: "Programs" },
            { icon: GraduationCap, label: "Admissions" },
            { icon: Users, label: "Student life" },
            { icon: Library, label: "Library" },
          ].map((t) => (
            <a
              key={t.label}
              href="#"
              className="group rounded-2xl border border-[#2b1b08]/15 bg-white p-6 text-center transition hover:border-[#2b1b08]"
            >
              <t.icon className="mx-auto h-6 w-6" style={{ color: theme?.primary }} />
              <p className="mt-3 font-serif text-base">{t.label}</p>
            </a>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-[#2b1b08]/15 pt-10 text-sm md:grid-cols-4">
          <div>
            <p className="font-serif text-base">Academics</p>
            <ul className="mt-3 space-y-1.5 text-[#2b1b08]/70">
              <li><a href="#" className="hover:text-[#2b1b08]">Early years</a></li>
              <li><a href="#" className="hover:text-[#2b1b08]">Primary</a></li>
              <li><a href="#" className="hover:text-[#2b1b08]">Secondary</a></li>
              <li><a href="#" className="hover:text-[#2b1b08]">Sixth Form</a></li>
            </ul>
          </div>
          <div>
            <p className="font-serif text-base">Admissions</p>
            <ul className="mt-3 space-y-1.5 text-[#2b1b08]/70">
              <li><a href="#" className="hover:text-[#2b1b08]">Apply</a></li>
              <li><a href="#" className="hover:text-[#2b1b08]">Tuition & fees</a></li>
              <li><a href="#" className="hover:text-[#2b1b08]">Open day</a></li>
              <li><a href="#" className="hover:text-[#2b1b08]">Scholarships</a></li>
            </ul>
          </div>
          <div>
            <p className="font-serif text-base">Community</p>
            <ul className="mt-3 space-y-1.5 text-[#2b1b08]/70">
              <li><a href="#" className="hover:text-[#2b1b08]">Parent portal</a></li>
              <li><a href="#" className="hover:text-[#2b1b08]">Alumni</a></li>
              <li><a href="#" className="hover:text-[#2b1b08]">Careers</a></li>
              <li><a href="#" className="hover:text-[#2b1b08]">News</a></li>
            </ul>
          </div>
          <div>
            <p className="font-serif text-base">Contact</p>
            <ul className="mt-3 space-y-1.5 text-[#2b1b08]/70">
              <li>+233 30 555 0175</li>
              <li>admissions@aia.edu.gh</li>
              <li>East Legon, Accra</li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-center font-serif text-xs italic text-[#2b1b08]/60">
          © 2026 {heading}. Accredited by COBIS & CIS.
        </p>
      </div>
    </footer>
  );
}
