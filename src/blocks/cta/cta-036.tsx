import type { BlockProps } from "@/blocks/types";
import { Quote } from "lucide-react";

export default function Cta036(props: BlockProps) {
  const {
    theme,
    heading = "Join thousands of happy customers",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    items = [
      { title: "Sarah Chen", description: "This tool saved our team 20 hours a week. Absolutely worth every penny.", label: "Head of Product, Acme Inc" },
    ],
  } = props;

  const testimonial = items[0];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <Quote className="w-8 h-8 mx-auto mb-4 opacity-20" />
        <blockquote className="text-xl sm:text-2xl font-medium italic leading-relaxed opacity-80">
          &ldquo;{testimonial?.description}&rdquo;
        </blockquote>
        <div className="mt-4">
          <p className="font-bold text-sm">{testimonial?.title}</p>
          <p className="text-xs opacity-50">{testimonial?.label}</p>
        </div>
        <div className="mt-8 pt-8 border-t" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
          <h3 className="text-lg font-bold">{heading}</h3>
          <a href={buttonUrl} className="mt-4 inline-block px-7 py-3 rounded-lg text-white font-semibold text-sm" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
