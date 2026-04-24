import type { BlockProps } from "@/blocks/types";
import { Download, Star } from "lucide-react";

export default function Download077(props: BlockProps) {
  const { theme, heading = "Start on Mobile", subheading = "Build on the go from your phone." } = props;

  return (
    <section className="px-4 py-24" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#fff" }}>
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center gap-1 mb-4">
          {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold">{heading}</h2>
        <p className="mt-4 opacity-60">{subheading}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-sm">
            <Download className="w-4 h-4" /> Download for iOS
          </a>
          <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border border-white/30 text-white">
            <Download className="w-4 h-4" /> Download for Android
          </a>
        </div>
        <p className="mt-6 text-xs opacity-40">4.9 rating · 10K+ downloads</p>
      </div>
    </section>
  );
}
