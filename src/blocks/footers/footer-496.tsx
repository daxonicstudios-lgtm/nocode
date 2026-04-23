import { Camera, Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer496(props: BlockProps) {
  const {
    theme,
    heading = "Studio Noir",
    bodyText = "Editorial portrait & wedding photography. Available worldwide.",
  } = props;
  return (
    <footer
      className="w-full bg-white py-20 text-[#111]"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-1.5 md:grid-cols-6">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="aspect-square bg-neutral-100" />
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="flex items-center gap-2">
              <Camera className="h-5 w-5" style={{ color: theme?.primary }} />
              <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">Photography</p>
            </div>
            <p className="mt-3 font-serif text-5xl">{heading}</p>
            <p className="mt-3 max-w-md text-sm text-neutral-600">{bodyText}</p>
            <a
              href="#"
              className="mt-6 inline-block rounded-none bg-black px-8 py-3 text-xs font-semibold uppercase tracking-widest text-white hover:bg-neutral-800"
              style={{ backgroundColor: theme?.primary }}
            >
              Book a session
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm md:col-span-6 md:grid-cols-3">
            <div>
              <p className="font-serif text-neutral-500">Work</p>
              <ul className="mt-3 space-y-1.5">
                <li><a href="#" className="hover:underline">Portfolio</a></li>
                <li><a href="#" className="hover:underline">Weddings</a></li>
                <li><a href="#" className="hover:underline">Portraits</a></li>
                <li><a href="#" className="hover:underline">Editorial</a></li>
              </ul>
            </div>
            <div>
              <p className="font-serif text-neutral-500">Studio</p>
              <ul className="mt-3 space-y-1.5">
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">Pricing</a></li>
                <li><a href="#" className="hover:underline">Journal</a></li>
              </ul>
            </div>
            <div>
              <p className="font-serif text-neutral-500">Contact</p>
              <ul className="mt-3 space-y-1.5">
                <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4" />hello@studionoir.co</li>
                <li className="flex items-start gap-2"><Camera className="mt-0.5 h-4 w-4" />@studionoir</li>
                <li>Cape Town · Paris · Tokyo</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-neutral-200 pt-6 text-center font-serif text-xs italic text-neutral-500">
          © 2026 {heading}. All images copyright of their respective clients.
        </p>
      </div>
    </footer>
  );
}
