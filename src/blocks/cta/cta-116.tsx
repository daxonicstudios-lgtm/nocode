import type { BlockProps } from "@/blocks/types";

export default function Cta116(props: BlockProps) {
  const {
    theme,
    heading = "Get Started in 3 Simple Steps",
    buttonText = "Begin Now",
    buttonUrl = "#",
    items = [
      { title: "Sign Up", description: "Create your free account in seconds." },
      { title: "Customize", description: "Pick a template and make it yours." },
      { title: "Launch", description: "Go live with one click." },
    ],
  } = props;

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {items.slice(0, 3).map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
                {i + 1}
              </div>
              <h3 className="font-bold mb-1">{item.title}</h3>
              <p className="text-sm opacity-70">{item.description}</p>
            </div>
          ))}
        </div>
        <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
