import { UtensilsCrossed, Clock, Phone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer452(props: BlockProps) {
  const { theme, heading = "Ember & Oak" } = props;
  const hours = [
    { d: "Monday", h: "Closed" },
    { d: "Tuesday – Thursday", h: "5pm – 10pm" },
    { d: "Friday – Saturday", h: "5pm – 11pm" },
    { d: "Sunday Brunch", h: "10am – 3pm" },
  ];
  return (
    <footer
      className="w-full bg-[#f5ede1] py-16 text-stone-800"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <UtensilsCrossed className="mx-auto h-6 w-6 text-stone-700" />
          <p className="mt-3 font-serif text-3xl italic" style={{ color: theme?.primary }}>{heading}</p>
          <p className="mt-2 text-sm tracking-[0.3em] uppercase text-stone-500">Kitchen & Cellar</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <p className="flex items-center gap-2 font-serif text-sm uppercase tracking-widest"><Clock className="h-4 w-4" />Hours</p>
            <ul className="mt-4 space-y-2 text-sm">
              {hours.map((row) => (
                <li key={row.d} className="flex justify-between border-b border-stone-300/60 pb-2">
                  <span>{row.d}</span>
                  <span className="text-stone-600">{row.h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-serif text-sm uppercase tracking-widest">Reservations</p>
            <p className="mt-4 text-sm text-stone-600">Book online or by phone. Walk-ins welcome at the bar.</p>
            <a
              href="#"
              className="mt-4 inline-block border border-stone-800 px-6 py-2.5 text-xs font-semibold uppercase tracking-widest hover:bg-stone-800 hover:text-[#f5ede1]"
              style={{ borderColor: theme?.primary }}
            >
              Book a table
            </a>
            <p className="mt-5 flex items-center gap-2 text-sm"><Phone className="h-4 w-4" />+234 1 555 0199 · Lagos</p>
            <a href="#" className="mt-2 block text-sm underline">Order for delivery</a>
          </div>
        </div>
        <p className="mt-12 text-center font-serif text-xs italic text-stone-500">© 2026 {heading} · Est. 2019</p>
      </div>
    </footer>
  );
}
