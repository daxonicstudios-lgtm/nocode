import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer361(props: BlockProps) {
  const { theme, heading = "The Reading Room" } = props;
  return (
    <footer
      className="w-full bg-[#f5f1ea] py-12 text-stone-900"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-stone-300 bg-white/60 p-8 shadow-sm backdrop-blur">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            <div className="md:col-span-2">
              <p className="font-serif text-3xl">{heading}</p>
              <p className="mt-2 text-sm italic text-stone-600">An independent bookshop & tea room.</p>
              <div className="mt-6 space-y-3 font-serif text-base leading-relaxed">
                <p>27 Carter Lane</p>
                <p>Observatory, Cape Town</p>
                <p className="font-mono text-sm">+27 21 555 0168</p>
                <p className="text-sm">hello@readingroom.co.za</p>
              </div>
            </div>
            <div className="md:col-span-3">
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-lg border border-stone-300 bg-[#e9e2d3]"
                role="img"
                aria-label="Map"
              >
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_18px,rgba(120,113,108,0.08)_18px,rgba(120,113,108,0.08)_19px),repeating-linear-gradient(90deg,transparent,transparent_18px,rgba(120,113,108,0.08)_18px,rgba(120,113,108,0.08)_19px)]" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <MapPin className="mx-auto h-8 w-8 text-stone-900" style={{ color: theme?.primary }} />
                  <p className="mt-2 font-serif text-xs italic text-stone-700">you are here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center font-serif text-xs italic text-stone-500">
          Open Tue–Sun · 10am–6pm. © 2026 {heading}.
        </p>
      </div>
    </footer>
  );
}
