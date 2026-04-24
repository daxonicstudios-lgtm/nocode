import type { BlockProps } from "@/blocks/types";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer108(props: BlockProps) {
  const {
    theme,
    heading = "Harbor & Co.",
    bodyText = "Family-run since 1974.",
  } = props;
  const cols = [
    { title: "Menu", links: ["Home", "About", "Services", "Gallery"] },
    { title: "Contact", custom: true },
  ];
  return (
    <footer className="w-full bg-stone-100 py-14 text-stone-800" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl">{heading}</p>
            <p className="mt-2 text-sm italic text-stone-600">{bodyText}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">{cols[0].title}</p>
            <ul className="mt-3 space-y-2">
              {cols[0].links!.map((l) => (
                <li key={l}><a href="#" className="text-sm hover:text-stone-900">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">Contact</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" /> 23 Harbor Lane, Seattle</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4" /> (206) 555-0139</li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4" /> hello@harbor.co</li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-stone-300 pt-4 text-xs text-stone-500">© 2026 {heading}</p>
      </div>
    </footer>
  );
}
