import { UtensilsCrossed, MapPin, Camera } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer453(props: BlockProps) {
  const { theme, heading = "Nyama Bistro" } = props;
  return (
    <footer
      className="w-full bg-orange-950 py-14 text-orange-50"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-orange-900/40 p-8 md:p-12">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-serif text-xs uppercase tracking-[0.3em] text-orange-300">Grill · Bar · Garden</p>
              <p className="mt-2 font-serif text-4xl">{heading}</p>
            </div>
            <a
              href="#"
              className="rounded-full bg-orange-50 px-7 py-3 text-sm font-semibold text-orange-950 hover:bg-orange-100"
              style={{ backgroundColor: theme?.primary }}
            >
              Order online
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 text-sm md:grid-cols-4">
            <div>
              <p className="mb-3 text-xs uppercase tracking-widest text-orange-300">Menu</p>
              <ul className="space-y-1.5">
                <li><a href="#" className="hover:underline">Starters</a></li>
                <li><a href="#" className="hover:underline">Grills</a></li>
                <li><a href="#" className="hover:underline">Vegetarian</a></li>
                <li><a href="#" className="hover:underline">Desserts</a></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs uppercase tracking-widest text-orange-300">Visit</p>
              <ul className="space-y-1.5">
                <li><a href="#" className="hover:underline">Reservations</a></li>
                <li><a href="#" className="hover:underline">Private events</a></li>
                <li><a href="#" className="hover:underline">Gift cards</a></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs uppercase tracking-widest text-orange-300">About</p>
              <ul className="space-y-1.5">
                <li><a href="#" className="hover:underline">Our story</a></li>
                <li><a href="#" className="hover:underline">Chef</a></li>
                <li><a href="#" className="hover:underline">Press</a></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs uppercase tracking-widest text-orange-300">Find us</p>
              <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" />Westlands Mall, Nairobi</p>
              <a href="#" className="mt-3 inline-block" aria-label="Instagram"><Camera className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-xs text-orange-200/70 md:flex-row">
          <div className="flex items-center gap-2"><UtensilsCrossed className="h-4 w-4" />Fresh, seasonal, local.</div>
          <p>© 2026 {heading}. Tasty by nature.</p>
        </div>
      </div>
    </footer>
  );
}
