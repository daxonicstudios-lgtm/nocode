import { Heart, Calendar } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer487(props: BlockProps) {
  const { theme, heading = "Chioma & Tunde" } = props;
  const timeline = [
    { t: "2pm", e: "Ceremony · Chapel on the Hill" },
    { t: "3pm", e: "Cocktails · Rose Garden" },
    { t: "5pm", e: "Dinner · The Long Barn" },
    { t: "8pm", e: "Dancing · till late" },
  ];
  return (
    <footer
      className="w-full bg-white py-16 text-[#3a2f24]"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="h-16 w-px bg-[#c9a974]" />
          <p className="mt-4 font-serif text-xs uppercase tracking-[0.3em] text-[#c9a974]">The big day</p>
          <p className="mt-2 font-serif text-4xl italic">{heading}</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <p className="font-serif text-lg">Timeline</p>
            <ul className="mt-4 space-y-3">
              {timeline.map((row) => (
                <li key={row.t} className="flex items-center gap-4 border-b border-[#c9a974]/30 pb-3">
                  <span className="font-serif italic text-[#c9a974]">{row.t}</span>
                  <span className="text-sm">{row.e}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-serif text-lg">With love</p>
            <p className="mt-3 text-sm text-[#3a2f24]/70">
              We're so happy to celebrate with you. Use the links below for everything you need.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {["The Story", "Gallery", "RSVP", "Registry", "Travel & Stay", "Dress Code"].map((l) => (
                <a key={l} href="#" className="rounded border border-[#c9a974]/40 px-3 py-2 text-center font-serif italic hover:bg-[#fdf7ec]">
                  {l}
                </a>
              ))}
            </div>
            <a
              href="#"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#3a2f24] px-6 py-3 font-serif text-xs uppercase tracking-widest text-white hover:opacity-90"
              style={{ backgroundColor: theme?.primary }}
            >
              <Calendar className="h-4 w-4" />Add to calendar
            </a>
          </div>
        </div>
        <p className="mt-12 flex items-center justify-center gap-2 font-serif text-xs italic text-[#3a2f24]/60">
          <Heart className="h-3.5 w-3.5" style={{ color: theme?.primary }} />14 November 2026 · Lagos
        </p>
      </div>
    </footer>
  );
}
