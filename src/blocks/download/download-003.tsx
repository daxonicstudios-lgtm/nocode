import type { BlockProps } from "@/blocks/types";
import { Star } from "lucide-react";

export default function Download003(props: BlockProps) {
  const { theme, heading = "4.9 on the App Store", subheading = "2.8 million downloads · Featured by Apple", bodyText = "The most-loved way to build on the go." } = props;

  return (
    <section style={{ backgroundColor: theme?.foreground ?? "#0a0a0a", color: theme?.background ?? "#fff" }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-1 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" style={{ color: theme?.accent ?? "#fbbf24" }} />
          ))}
        </div>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">{heading}</h2>
        <p className="mt-3 text-base opacity-70">{subheading}</p>
        <p className="mt-8 text-xl opacity-90 max-w-xl mx-auto">{bodyText}</p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <button className="px-6 py-3 rounded-xl bg-white text-black text-sm font-semibold">Download for iOS</button>
          <button className="px-6 py-3 rounded-xl bg-white text-black text-sm font-semibold">Download for Android</button>
        </div>
      </div>
    </section>
  );
}
