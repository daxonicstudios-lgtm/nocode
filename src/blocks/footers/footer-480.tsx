import { Gavel, Phone, Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer480(props: BlockProps) {
  const { theme, heading = "Van der Merwe Attorneys" } = props;
  return (
    <footer
      className="w-full bg-[#f7f4ec] py-14 text-[#1f1a12]"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <Gavel className="h-6 w-6" style={{ color: theme?.primary }} />
          <p className="mt-3 font-serif text-3xl italic">{heading}</p>
          <p className="mt-2 max-w-md text-sm text-[#1f1a12]/70">
            Estate planning, family law, and civil litigation for the people of Stellenbosch.
          </p>
          <a
            href="#"
            className="mt-5 inline-block border border-[#1f1a12] px-6 py-2.5 font-serif text-xs uppercase tracking-widest hover:bg-[#1f1a12] hover:text-[#f7f4ec]"
            style={{ borderColor: theme?.primary }}
          >
            Request a consultation
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 text-sm md:grid-cols-4">
          <div>
            <p className="font-serif italic">Practice</p>
            <ul className="mt-2 space-y-1 text-[#1f1a12]/70">
              <li><a href="#" className="hover:underline">Wills & estates</a></li>
              <li><a href="#" className="hover:underline">Family law</a></li>
              <li><a href="#" className="hover:underline">Conveyancing</a></li>
              <li><a href="#" className="hover:underline">Civil litigation</a></li>
            </ul>
          </div>
          <div>
            <p className="font-serif italic">Firm</p>
            <ul className="mt-2 space-y-1 text-[#1f1a12]/70">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Our attorneys</a></li>
              <li><a href="#" className="hover:underline">Fees</a></li>
            </ul>
          </div>
          <div>
            <p className="font-serif italic">Resources</p>
            <ul className="mt-2 space-y-1 text-[#1f1a12]/70">
              <li><a href="#" className="hover:underline">Articles</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Client area</a></li>
            </ul>
          </div>
          <div>
            <p className="font-serif italic">Reach us</p>
            <ul className="mt-2 space-y-1 text-[#1f1a12]/70">
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4" />+27 21 555 0136</li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4" />admin@vdm-law.co.za</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-[#1f1a12]/15 pt-6 text-center text-[11px] italic text-[#1f1a12]/60">
          <p>{heading} is a member of the Cape Law Society. Nothing on this site constitutes legal advice.</p>
          <p className="mt-1">© 2026 {heading}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
