import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Discovery", description: "We learn about your business goals and requirements." },
  { title: "Design", description: "Our team creates mockups and prototypes for your review." },
  { title: "Development", description: "We build your solution using modern technologies." },
  { title: "Launch", description: "Your project goes live with full support." },
];

export default function Steps121(props: BlockProps) {
  const { theme, heading = "Getting Started", subheading = "A simple process designed for everyone.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="space-y-0">
          {items.slice(0, 5).map((step, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>{i + 1}</div>
                {i < items.length - 1 && <div className="w-0.5 flex-1 my-2" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />}
              </div>
              <div className="pb-8">
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="mt-1 text-sm opacity-60">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
