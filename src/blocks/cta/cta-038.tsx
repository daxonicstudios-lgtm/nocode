import type { BlockProps } from "@/blocks/types";

export default function Cta038(props: BlockProps) {
  const {
    theme,
    heading = "Ready to transform your workflow?",
    buttonText = "Try It Free",
    buttonUrl = "#",
    items = [
      { title: "Jordan Lee", description: "We shipped our site in half the time. The drag-and-drop editor is next level.", label: "Founder, Pixel Labs" },
    ],
  } = props;

  const testimonial = items[0];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <a href={buttonUrl} className="mt-6 inline-block px-7 py-3 rounded-lg text-white font-semibold text-sm" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
            {buttonText}
          </a>
        </div>
        <div className="p-6 rounded-xl border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
          <p className="text-sm italic opacity-70 leading-relaxed">&ldquo;{testimonial?.description}&rdquo;</p>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
              {testimonial?.title?.charAt(0) ?? "J"}
            </div>
            <div>
              <p className="font-bold text-sm">{testimonial?.title}</p>
              <p className="text-xs opacity-40">{testimonial?.label}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
