import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer374(props: BlockProps) {
  const { theme, heading = "Loaf Bakery" } = props;
  return (
    <footer
      className="w-full bg-amber-100 py-12 text-amber-950"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-serif text-5xl italic">{heading}</p>
        <p className="mt-2 font-serif text-sm italic text-amber-800">Sourdough baked fresh at 4am.</p>
        <div
          className="relative mx-auto mt-8 flex aspect-[2/1] max-w-2xl items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 to-amber-200 shadow-inner"
          role="img"
          aria-label="Map"
        >
          <div className="absolute inset-0 bg-[repeating-radial-gradient(circle_at_50%_50%,transparent_0,transparent_20px,rgba(146,64,14,0.08)_20px,rgba(146,64,14,0.08)_21px)]" />
          <div className="relative text-center">
            <MapPin className="mx-auto h-10 w-10 text-amber-900" style={{ color: theme?.primary }} />
            <p className="mt-2 font-serif text-sm italic text-amber-900">you'll smell us before you see us</p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-lg space-y-3 font-serif">
          <p className="flex items-center justify-center gap-3 text-lg">
            <MapPin className="h-4 w-4 text-amber-700" /> 6 Waterkant St, De Waterkant
          </p>
          <p className="flex items-center justify-center gap-3 text-lg">
            <Phone className="h-4 w-4 text-amber-700" /> <span className="font-mono">+27 21 555 0107</span>
          </p>
          <p className="flex items-center justify-center gap-3 text-lg">
            <Mail className="h-4 w-4 text-amber-700" /> hello@loafbakery.co.za
          </p>
          <p className="flex items-center justify-center gap-3 text-lg">
            <Clock className="h-4 w-4 text-amber-700" /> Daily · 6am–2pm (or until we sell out)
          </p>
        </div>
        <a
          href="#"
          className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-amber-900 bg-transparent px-6 py-2.5 font-serif text-sm font-semibold text-amber-900 hover:bg-amber-900 hover:text-amber-50"
        >
          <Navigation className="h-4 w-4" /> Get directions
        </a>
        <p className="mt-10 font-serif text-xs italic text-amber-700">© 2026 {heading}</p>
      </div>
    </footer>
  );
}
