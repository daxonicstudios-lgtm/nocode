import type { BlockProps } from "@/blocks/types";
import { Play } from "lucide-react";

export default function Cta074(props: BlockProps) {
  const {
    theme,
    heading = "Hear from our customers",
    subheading = "Real stories from teams who transformed their workflows with our platform.",
    buttonText = "Watch Testimonial",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60 max-w-lg mx-auto">{subheading}</p>
        </div>
        <a href={buttonUrl} className="block relative w-full aspect-[16/7] rounded-2xl overflow-hidden group" style={{ backgroundColor: theme?.muted ?? "#1e293b" }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: theme?.primary ?? "#ef4444" }}>
              <Play className="w-7 h-7 text-white ml-0.5" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
