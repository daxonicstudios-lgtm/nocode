import { Coffee, MapPin, Clock } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer454(props: BlockProps) {
  const { theme, heading = "Morning Glory Café" } = props;
  return (
    <footer
      className="w-full bg-[#fdf6ed] py-14 text-[#3b2f20]"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Coffee className="h-6 w-6" />
            <p className="mt-3 font-serif text-3xl">{heading}</p>
            <p className="mt-3 max-w-xs text-sm text-[#3b2f20]/70">
              Single-origin espresso, sourdough, and slow mornings. Corner of Kloof & Long.
            </p>
            <a
              href="#"
              className="mt-6 inline-block rounded-full border border-[#3b2f20] px-5 py-2 text-xs font-semibold uppercase tracking-widest hover:bg-[#3b2f20] hover:text-[#fdf6ed]"
              style={{ borderColor: theme?.primary }}
            >
              View menu
            </a>
          </div>
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-widest text-[#8a7356]">Opening hours</p>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li className="flex justify-between"><span>Mon – Fri</span><span>7am – 5pm</span></li>
              <li className="flex justify-between"><span>Saturday</span><span>8am – 4pm</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>8am – 2pm</span></li>
            </ul>
            <p className="mt-4 flex items-center gap-2 text-xs text-[#3b2f20]/60"><Clock className="h-3.5 w-3.5" />Kitchen closes 30 min before.</p>
          </div>
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-[#8a7356]">Links</p>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li><a href="#" className="hover:underline">Menu</a></li>
              <li><a href="#" className="hover:underline">Beans</a></li>
              <li><a href="#" className="hover:underline">Reservations</a></li>
              <li><a href="#" className="hover:underline">Gift cards</a></li>
              <li><a href="#" className="hover:underline">Catering</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[#3b2f20]/15 pt-6 text-xs md:flex-row">
          <p className="flex items-center gap-2"><MapPin className="h-4 w-4" />44 Kloof Street, Cape Town</p>
          <p className="text-[#3b2f20]/60">© 2026 {heading}. Brewed slow.</p>
        </div>
      </div>
    </footer>
  );
}
