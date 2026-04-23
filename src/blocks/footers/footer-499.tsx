import { Camera, Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer499(props: BlockProps) {
  const { theme, heading = "North Light Studio" } = props;
  return (
    <footer
      className="w-full bg-[#f4f2ee] py-16 text-[#1a1a1a]"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Camera className="h-5 w-5" style={{ color: theme?.primary }} />
            <p className="mt-3 font-serif text-3xl">{heading}</p>
            <p className="mt-3 max-w-xs text-sm text-neutral-600">
              Fine art wedding & family photography. Based in Nairobi, available globally.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="rounded-full bg-[#1a1a1a] px-6 py-2.5 font-serif text-xs uppercase tracking-widest text-[#f4f2ee] hover:opacity-90"
                style={{ backgroundColor: theme?.primary }}
              >
                Book a session
              </a>
              <a href="#" className="rounded-full border border-[#1a1a1a] px-6 py-2.5 font-serif text-xs uppercase tracking-widest hover:bg-white">
                Client area
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500">
              <Camera className="h-4 w-4" />Recent work
            </p>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-square bg-neutral-200" />
              ))}
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="font-serif uppercase tracking-widest text-neutral-500">Menu</p>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li><a href="#" className="hover:underline">Portfolio</a></li>
              <li><a href="#" className="hover:underline">Weddings</a></li>
              <li><a href="#" className="hover:underline">Families</a></li>
              <li><a href="#" className="hover:underline">Prints</a></li>
              <li><a href="#" className="hover:underline">Journal</a></li>
            </ul>
            <p className="mt-4 flex items-center gap-2 text-sm"><Mail className="h-4 w-4" />hello@northlight.co</p>
          </div>
        </div>
        <p className="mt-10 border-t border-[#1a1a1a]/15 pt-6 text-center font-serif text-xs italic text-neutral-500">
          © 2026 {heading}. Light, always.
        </p>
      </div>
    </footer>
  );
}
