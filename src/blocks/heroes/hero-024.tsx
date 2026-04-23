import type { BlockProps } from "@/blocks/types";

export default function Hero024(props: BlockProps) {
  const {
    theme,
    heading = "Your AI Assistant is Thinking",
    subheading = "Describe your dream website and watch it come to life in real time.",
    buttonText = "Try It Now",
    buttonUrl = "#",
  } = props;

  return (
    <section
      className="px-4 py-16 sm:py-24"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <style>{`
        @keyframes hero024-bounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
        .hero024-dot { animation: hero024-bounce 1.4s infinite ease-in-out both; }
        .hero024-dot:nth-child(1) { animation-delay: -0.32s; }
        .hero024-dot:nth-child(2) { animation-delay: -0.16s; }
        .hero024-dot:nth-child(3) { animation-delay: 0s; }
      `}</style>

      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          {heading}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base opacity-70 sm:text-lg">
          {subheading}
        </p>

        <div className="mt-8 flex items-center justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="hero024-dot inline-block h-3 w-3 rounded-full sm:h-4 sm:w-4"
              style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
            />
          ))}
        </div>

        <a
          href={buttonUrl}
          className="mt-8 inline-block rounded-lg px-8 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90 sm:text-lg"
          style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}
