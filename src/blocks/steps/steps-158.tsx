import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Create Account", description: "Sign up with email or social login in seconds." },
  { title: "Set Up Your Project", description: "Tell us about your business and choose your style." },
  { title: "Build & Customize", description: "Use our drag-and-drop editor to make it yours." },
  { title: "Publish & Grow", description: "Launch your site and track your progress." },
];

export default function Steps158(props: BlockProps) {
  const { theme, heading = "Step by Step", subheading = "We make it easy to build something great.", items = DEFAULT_ITEMS } = props;

  return (
    <section className="px-4 py-24" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#e2e8f0" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">{heading}</h2>
          <p className="mt-4 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.slice(0, 4).map((step, i) => (
            <div key={i} className="rounded-2xl p-6" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
              <div className="text-3xl font-black opacity-20">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-3 font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm opacity-50">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
