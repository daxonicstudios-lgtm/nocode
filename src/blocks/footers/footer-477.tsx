import { Gavel, Phone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer477(props: BlockProps) {
  const { theme, heading = "Mokoena Legal Chambers" } = props;
  const practice = [
    { t: "Family Law", d: "Divorce, custody, maintenance." },
    { t: "Criminal Defense", d: "Trial and appellate representation." },
    { t: "Labour & Employment", d: "CCMA, dismissal, contracts." },
    { t: "Personal Injury", d: "RAF claims and settlements." },
  ];
  return (
    <footer
      className="w-full bg-stone-50 py-16 text-stone-900"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Gavel className="h-6 w-6" style={{ color: theme?.primary }} />
              <p className="font-serif text-3xl">{heading}</p>
            </div>
            <p className="mt-2 max-w-md text-sm text-stone-600">
              A boutique litigation firm in Pretoria. Discreet. Tenacious. Respected by the bench.
            </p>
          </div>
          <a
            href="#"
            className="rounded-none bg-stone-900 px-8 py-3 font-serif text-xs uppercase tracking-widest text-white hover:bg-stone-800"
            style={{ backgroundColor: theme?.primary }}
          >
            Request consultation
          </a>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4">
          {practice.map((p) => (
            <div key={p.t} className="rounded-lg border border-stone-200 bg-white p-5">
              <p className="font-serif text-base">{p.t}</p>
              <p className="mt-1 text-xs text-stone-500">{p.d}</p>
              <a href="#" className="mt-3 inline-block text-xs font-semibold uppercase tracking-widest text-stone-900 hover:underline">
                Learn more
              </a>
            </div>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 text-sm md:grid-cols-3">
          <div>
            <p className="font-serif uppercase tracking-widest text-stone-500">Firm</p>
            <ul className="mt-3 space-y-1.5 text-stone-700">
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Attorneys</a></li>
              <li><a href="#" className="hover:underline">News</a></li>
            </ul>
          </div>
          <div>
            <p className="font-serif uppercase tracking-widest text-stone-500">Resources</p>
            <ul className="mt-3 space-y-1.5 text-stone-700">
              <li><a href="#" className="hover:underline">Articles</a></li>
              <li><a href="#" className="hover:underline">Client portal</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="font-serif uppercase tracking-widest text-stone-500">Contact</p>
            <p className="mt-3 flex items-start gap-2 text-stone-700"><Phone className="mt-0.5 h-4 w-4" />+27 12 555 0190 · Pretoria</p>
          </div>
        </div>
        <div className="mt-10 border-t border-stone-200 pt-6 text-[11px] italic text-stone-500">
          <p>Attorney advertising. Prior results do not guarantee a similar outcome. {heading} is admitted to the Johannesburg Society of Advocates and the Pretoria Bar.</p>
          <p className="mt-2">© 2026 {heading}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
