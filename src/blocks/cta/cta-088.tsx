import type { BlockProps } from "@/blocks/types";

export default function Cta088(props: BlockProps) {
  const { theme, heading = "See it in action", subheading = "Sign up today and see results tomorrow.", buttonText = "Try It Free", buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-2xl mx-auto">
        <div className="rounded-3xl p-10 sm:p-14 text-center" style={{ backgroundColor: theme?.accent ?? "#f1f5f9" }}>
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-4 opacity-60">{subheading}</p>
          <a href={buttonUrl} className="mt-8 inline-block px-8 py-3.5 rounded-full font-bold text-white text-sm" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
