import type { BlockProps } from "@/blocks/types";
import { Star } from "lucide-react";

export default function Cta018(props: BlockProps) {
  const {
    theme,
    heading = "Loved by 50,000+ users",
    subheading = "See why teams around the world choose us to build their digital presence.",
    buttonText = "Join Them",
    buttonUrl = "#",
  } = props;

  return (
    <section
      className="px-5 py-24"
      style={{
        background: `linear-gradient(to right, ${theme?.primary ?? "#dc2626"}, ${theme?.accent ?? "#f97316"})`,
        color: "#fff",
      }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center gap-1 mb-5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-white text-white" />
          ))}
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-80">{subheading}</p>
        <a href={buttonUrl} className="mt-8 inline-block px-8 py-3.5 rounded-full bg-white font-bold text-sm hover:bg-gray-100 transition-colors" style={{ color: theme?.primary ?? "#dc2626" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
