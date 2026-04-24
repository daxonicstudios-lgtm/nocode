import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer370(props: BlockProps) {
  const { theme, heading = "Pebble Spa" } = props;
  return (
    <footer
      className="w-full bg-stone-50 py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-serif text-4xl font-light tracking-tight text-stone-900">{heading}</p>
          <p className="mt-3 text-sm italic text-stone-500">Massage. Breathe. Reset.</p>
        </div>
        <div className="relative mx-auto mt-10 aspect-[3/1] max-w-4xl overflow-hidden rounded-full bg-stone-100 ring-1 ring-stone-200">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,162,158,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,113,108,0.1),transparent_25%),radial-gradient(circle_at_80%_50%,rgba(120,113,108,0.1),transparent_25%)]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <MapPin className="mx-auto h-8 w-8 text-stone-700" style={{ color: theme?.primary }} />
            <p className="mt-1 text-xs font-medium uppercase tracking-widest text-stone-600">view on map</p>
          </div>
        </div>
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-8 text-center sm:grid-cols-4">
          <div>
            <MapPin className="mx-auto h-4 w-4 text-stone-400" />
            <p className="mt-2 text-xs uppercase tracking-widest text-stone-400">Address</p>
            <p className="mt-1 font-serif text-sm text-stone-800">14 Milnerton Dr</p>
            <p className="font-serif text-sm text-stone-800">Cape Town</p>
          </div>
          <div>
            <Phone className="mx-auto h-4 w-4 text-stone-400" />
            <p className="mt-2 text-xs uppercase tracking-widest text-stone-400">Phone</p>
            <p className="mt-1 font-mono text-sm text-stone-800">+27 21 555 0112</p>
          </div>
          <div>
            <Mail className="mx-auto h-4 w-4 text-stone-400" />
            <p className="mt-2 text-xs uppercase tracking-widest text-stone-400">Email</p>
            <p className="mt-1 font-serif text-sm text-stone-800">book@pebblespa.co</p>
          </div>
          <div>
            <Clock className="mx-auto h-4 w-4 text-stone-400" />
            <p className="mt-2 text-xs uppercase tracking-widest text-stone-400">Hours</p>
            <p className="mt-1 font-serif text-sm text-stone-800">Daily 9–8</p>
          </div>
        </div>
        <p className="mt-12 text-center text-xs italic text-stone-400">© 2026 {heading}</p>
      </div>
    </footer>
  );
}
