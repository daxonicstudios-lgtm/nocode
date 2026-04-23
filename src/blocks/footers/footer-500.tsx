import { Camera, Image as ImageIcon } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer500(props: BlockProps) {
  const {
    theme,
    heading = "Obsidian Creative",
    bodyText = "A creative studio working in photography, film, and moving image.",
  } = props;
  return (
    <footer
      className="w-full bg-white py-20 text-[#0a0a0a]"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-b border-[#0a0a0a] py-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Est. 2019 · Cape Town</p>
              <p className="mt-2 font-serif text-6xl tracking-tight">{heading}</p>
              <p className="mt-3 max-w-lg text-sm text-neutral-600">{bodyText}</p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <a
                href="#"
                className="inline-block rounded-none bg-[#0a0a0a] px-8 py-3 text-xs font-semibold uppercase tracking-widest text-white hover:bg-neutral-800"
                style={{ backgroundColor: theme?.primary }}
              >
                Start a project
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="aspect-[4/5] bg-neutral-100" />
          ))}
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 text-sm md:grid-cols-5">
          <div>
            <p className="font-serif text-neutral-500">Work</p>
            <ul className="mt-3 space-y-1.5">
              <li><a href="#" className="hover:underline">Portfolio</a></li>
              <li><a href="#" className="hover:underline">Film</a></li>
              <li><a href="#" className="hover:underline">Stills</a></li>
            </ul>
          </div>
          <div>
            <p className="font-serif text-neutral-500">Services</p>
            <ul className="mt-3 space-y-1.5">
              <li><a href="#" className="hover:underline">Commercial</a></li>
              <li><a href="#" className="hover:underline">Editorial</a></li>
              <li><a href="#" className="hover:underline">Personal</a></li>
            </ul>
          </div>
          <div>
            <p className="font-serif text-neutral-500">Studio</p>
            <ul className="mt-3 space-y-1.5">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Journal</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
            </ul>
          </div>
          <div>
            <p className="font-serif text-neutral-500">Connect</p>
            <ul className="mt-3 space-y-1.5">
              <li className="flex items-start gap-2"><Camera className="mt-0.5 h-4 w-4" />@obsidiancreative</li>
              <li>studio@obsidian.co</li>
            </ul>
          </div>
          <div>
            <p className="font-serif text-neutral-500">Based</p>
            <ul className="mt-3 space-y-1.5">
              <li>Cape Town</li>
              <li>Available worldwide</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-neutral-200 pt-6 text-xs text-neutral-500">
          <div className="flex items-center gap-2"><Camera className="h-3.5 w-3.5" /><ImageIcon className="h-3.5 w-3.5" /></div>
          <p className="font-serif italic">© 2026 {heading}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
