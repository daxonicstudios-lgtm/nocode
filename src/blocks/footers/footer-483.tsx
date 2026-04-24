import { Car, Wrench, Fuel } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer483(props: BlockProps) {
  const { theme, heading = "Lagos Auto Hub" } = props;
  const locations = [
    { city: "Lagos", area: "Lekki Phase 1" },
    { city: "Abuja", area: "Wuse II" },
    { city: "Port Harcourt", area: "GRA Phase 2" },
  ];
  return (
    <footer
      className="w-full bg-[#0c1117] py-16 text-white"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Car className="h-7 w-7 text-sky-400" style={{ color: theme?.accent }} />
              <p className="text-3xl font-bold tracking-tight">{heading}</p>
            </div>
            <p className="mt-2 max-w-md text-sm text-white/60">
              New. Pre-owned. Service. Parts. Financing. All under one roof.
            </p>
          </div>
          <a
            href="#"
            className="rounded-full bg-sky-400 px-8 py-3 text-sm font-bold text-[#0c1117] hover:bg-sky-300"
            style={{ backgroundColor: theme?.accent }}
          >
            Schedule test drive
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 text-sm md:grid-cols-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40">Vehicles</p>
            <ul className="mt-3 space-y-1.5">
              <li><a href="#" className="hover:text-sky-300">New</a></li>
              <li><a href="#" className="hover:text-sky-300">Pre-owned</a></li>
              <li><a href="#" className="hover:text-sky-300">Commercial</a></li>
              <li><a href="#" className="hover:text-sky-300">EVs</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40">Service</p>
            <ul className="mt-3 space-y-1.5">
              <li><a href="#" className="hover:text-sky-300">Book service</a></li>
              <li><a href="#" className="hover:text-sky-300">Parts</a></li>
              <li><a href="#" className="hover:text-sky-300">Body shop</a></li>
              <li><a href="#" className="hover:text-sky-300">Tyres</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40">Finance</p>
            <ul className="mt-3 space-y-1.5">
              <li><a href="#" className="hover:text-sky-300">Apply</a></li>
              <li><a href="#" className="hover:text-sky-300">Trade-in</a></li>
              <li><a href="#" className="hover:text-sky-300">Calculator</a></li>
              <li><a href="#" className="hover:text-sky-300">Insurance</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40">About</p>
            <ul className="mt-3 space-y-1.5">
              <li><a href="#" className="hover:text-sky-300">Story</a></li>
              <li><a href="#" className="hover:text-sky-300">Careers</a></li>
              <li><a href="#" className="hover:text-sky-300">Reviews</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40">Locations</p>
            <ul className="mt-3 space-y-1.5 text-white/70">
              {locations.map((l) => (
                <li key={l.city}>{l.city} · <span className="text-white/50">{l.area}</span></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Wrench className="h-3.5 w-3.5" />Certified service</span>
            <span className="flex items-center gap-1"><Fuel className="h-3.5 w-3.5" />OEM parts</span>
          </div>
          <p>© 2026 {heading}.</p>
        </div>
      </div>
    </footer>
  );
}
