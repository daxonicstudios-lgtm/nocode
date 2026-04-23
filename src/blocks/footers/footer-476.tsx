import { Scale, Phone, Mail, MapPin } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer476(props: BlockProps) {
  const {
    theme,
    heading = "Adebayo & Partners",
    bodyText = "Corporate, commercial, and dispute resolution counsel since 1987.",
  } = props;
  return (
    <footer
      className="w-full bg-[#121212] py-16 text-stone-200"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2">
              <Scale className="h-6 w-6 text-amber-400" style={{ color: theme?.accent }} />
              <p className="font-serif text-2xl">{heading}</p>
            </div>
            <p className="mt-3 text-sm text-stone-400">{bodyText}</p>
            <a
              href="#"
              className="mt-5 inline-block border border-amber-400 px-6 py-3 font-serif text-xs uppercase tracking-widest text-amber-400 hover:bg-amber-400 hover:text-[#121212]"
              style={{ borderColor: theme?.accent, color: theme?.accent }}
            >
              Schedule a consultation
            </a>
          </div>
          <div className="md:col-span-2">
            <p className="font-serif text-sm uppercase tracking-widest text-amber-400" style={{ color: theme?.accent }}>
              Practice
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-stone-400">
              <li><a href="#" className="hover:text-white">Corporate</a></li>
              <li><a href="#" className="hover:text-white">M&A</a></li>
              <li><a href="#" className="hover:text-white">Litigation</a></li>
              <li><a href="#" className="hover:text-white">Tax</a></li>
              <li><a href="#" className="hover:text-white">Real estate</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="font-serif text-sm uppercase tracking-widest text-amber-400" style={{ color: theme?.accent }}>
              Firm
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-stone-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Attorneys</a></li>
              <li><a href="#" className="hover:text-white">Recognition</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="font-serif text-sm uppercase tracking-widest text-amber-400" style={{ color: theme?.accent }}>
              Contact
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-stone-400">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" />12 Broad Street, Marina, Lagos</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4" />+234 1 555 0160</li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4" />counsel@adebayolaw.ng</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="font-serif text-xs italic text-stone-500">
            The material on this website is for informational purposes only and does not constitute legal advice.
            No attorney-client relationship is formed by use of this site. {heading} is a member of the Nigerian Bar Association.
          </p>
          <p className="mt-3 text-xs text-stone-500">© 2026 {heading}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
