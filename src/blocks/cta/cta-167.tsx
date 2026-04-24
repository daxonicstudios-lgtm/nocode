import type { BlockProps } from "@/blocks/types";
import { Star } from "lucide-react";

export default function Cta167(props: BlockProps) {
  const {
    theme,
    heading = "Join the highest-rated platform",
    subheading = "Over 5,000 five-star reviews from real users.",
    buttonText = "Get Started",
    buttonUrl = "#",
  } = props;

  return (
    <section className="px-5 py-24" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#fff" }}>
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 text-lg opacity-70">{subheading}</p>
          <a href={buttonUrl} className="mt-6 inline-block px-8 py-3 rounded-lg bg-white font-semibold text-sm hover:opacity-90 transition" style={{ color: theme?.primary ?? "#0f172a" }}>
            {buttonText}
          </a>
        </div>
        <div className="text-center shrink-0">
          <div className="text-6xl font-black">4.9</div>
          <div className="flex gap-1 mt-2 justify-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="mt-1 text-sm opacity-60">5,247 reviews</p>
        </div>
      </div>
    </section>
  );
}
