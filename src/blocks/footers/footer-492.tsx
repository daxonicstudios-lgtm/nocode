import { Church, Heart } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer492(props: BlockProps) {
  const { theme, heading = "Redeemer's Chapel" } = props;
  return (
    <footer
      className="w-full bg-[#f5efdf] py-14 text-[#3a2a17]"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Church className="mx-auto h-8 w-8" style={{ color: theme?.primary }} />
          <p className="mt-3 font-serif text-4xl italic">{heading}</p>
          <p className="mt-2 text-sm text-[#3a2a17]/70">"Come as you are. Leave changed."</p>
          <div className="mx-auto mt-4 h-px w-16 bg-[#3a2a17]/30" />
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[#3a2a17]/15 bg-white p-6 text-center">
            <p className="font-serif uppercase tracking-widest text-[#3a2a17]/60">Sunday</p>
            <p className="mt-2 font-serif text-3xl">9am & 11am</p>
            <p className="mt-1 text-sm text-[#3a2a17]/70">In person & online</p>
          </div>
          <div className="rounded-2xl border border-[#3a2a17]/15 bg-white p-6 text-center">
            <p className="font-serif uppercase tracking-widest text-[#3a2a17]/60">Midweek</p>
            <p className="mt-2 font-serif text-3xl">Wed · 6pm</p>
            <p className="mt-1 text-sm text-[#3a2a17]/70">Prayer & teaching</p>
          </div>
          <div className="rounded-2xl border border-[#3a2a17]/15 bg-white p-6 text-center">
            <p className="font-serif uppercase tracking-widest text-[#3a2a17]/60">Youth</p>
            <p className="mt-2 font-serif text-3xl">Fri · 5pm</p>
            <p className="mt-1 text-sm text-[#3a2a17]/70">Teens & young adults</p>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 text-center text-sm md:grid-cols-5">
          {["Sermons", "Events", "Small Groups", "Give", "Prayer"].map((l) => (
            <a key={l} href="#" className="font-serif italic hover:underline">
              {l}
            </a>
          ))}
        </div>
        <div className="mt-10 rounded-xl bg-white p-5 text-center">
          <p className="font-serif text-lg">Need prayer?</p>
          <p className="mt-1 text-sm text-[#3a2a17]/70">Our prayer team is standing by.</p>
          <a
            href="#"
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#3a2a17] px-6 py-2.5 font-serif text-xs uppercase tracking-widest text-[#f5efdf] hover:opacity-90"
            style={{ backgroundColor: theme?.primary }}
          >
            <Heart className="h-4 w-4" />Submit request
          </a>
        </div>
        <p className="mt-10 text-center font-serif text-xs italic text-[#3a2a17]/60">© 2026 {heading}. Kampala, Uganda.</p>
      </div>
    </footer>
  );
}
