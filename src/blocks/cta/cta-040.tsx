import type { BlockProps } from "@/blocks/types";

export default function Cta040(props: BlockProps) {
  const {
    theme,
    heading = "Do not just take our word for it",
    buttonText = "Start Your Journey",
    buttonUrl = "#",
    items = [
      { title: "Rachel Torres", description: "I was skeptical at first, but the results blew me away. Our conversion rate doubled in 3 months.", label: "Growth Lead, Apex Digital" },
    ],
  } = props;

  const testimonial = items[0];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-black">{heading}</h2>
        <div className="mt-10 p-8 rounded-2xl" style={{ backgroundColor: theme?.accent ?? "#f1f5f9" }}>
          <p className="text-lg italic leading-relaxed opacity-80">&ldquo;{testimonial?.description}&rdquo;</p>
          <div className="mt-5">
            <p className="font-bold">{testimonial?.title}</p>
            <p className="text-sm opacity-50">{testimonial?.label}</p>
          </div>
        </div>
        <a href={buttonUrl} className="mt-8 inline-block px-8 py-3.5 rounded-full text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#10b981" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
