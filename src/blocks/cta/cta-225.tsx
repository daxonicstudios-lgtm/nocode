import type { BlockProps } from "@/blocks/types";
import { MessageCircleMore, Phone, Mail } from "lucide-react";

export default function Cta225(props: BlockProps) {
  const {
    theme,
    heading = "We are here to help",
    subheading = "Choose your preferred way to reach us. Average response time: 2 minutes.",
    buttonText = "Live Chat",
    buttonUrl = "#",
    secondaryButtonText = "Call Us",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60 text-sm">{subheading}</p>
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <a href={buttonUrl} className="flex flex-col items-center gap-3 p-5 rounded-xl border" style={{ borderColor: theme?.primary ?? "#8b5cf6", backgroundColor: `${theme?.primary ?? "#8b5cf6"}08` }}>
            <MessageCircleMore className="w-6 h-6" style={{ color: theme?.primary ?? "#8b5cf6" }} />
            <span className="font-medium text-sm">{buttonText}</span>
          </a>
          <a href={secondaryButtonUrl} className="flex flex-col items-center gap-3 p-5 rounded-xl border" style={{ borderColor: theme?.border ?? "#e5e7eb" }}>
            <Phone className="w-6 h-6 opacity-60" />
            <span className="font-medium text-sm">{secondaryButtonText}</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-3 p-5 rounded-xl border" style={{ borderColor: theme?.border ?? "#e5e7eb" }}>
            <Mail className="w-6 h-6 opacity-60" />
            <span className="font-medium text-sm">Email Us</span>
          </a>
        </div>
      </div>
    </section>
  );
}
