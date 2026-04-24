import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Sign Up", description: "Create your free account in under a minute." },
  { title: "Describe Your Site", description: "Tell our AI what kind of website you want." },
  { title: "Customize & Launch", description: "Tweak the design and publish with one click." },
];

export default function Steps105(props: BlockProps) {
  const { theme, heading = "How It Works", subheading = "Get up and running in minutes.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.slice(0, 4).map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto text-lg font-bold text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
                {i + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm opacity-60">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
