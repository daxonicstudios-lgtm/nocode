import type { BlockProps } from "@/blocks/types";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function Cta221(props: BlockProps) {
  const {
    theme,
    heading = "Have questions? Let's chat",
    subheading = "Our team typically replies in under 5 minutes during business hours.",
    buttonText = "Start Chat",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-lg mx-auto text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6" style={{ backgroundColor: theme?.primary ?? "#3b82f6", color: "#fff" }}>
          <MessageCircle className="w-7 h-7" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60 text-sm">{subheading}</p>
        <div className="mt-6 flex items-center justify-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
          <span className="text-sm text-green-600 font-medium">Online now</span>
        </div>
        <a href={buttonUrl} className="inline-flex items-center gap-2 mt-5 px-6 py-3 rounded-full text-white font-medium text-sm" style={{ backgroundColor: theme?.primary ?? "#3b82f6" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
