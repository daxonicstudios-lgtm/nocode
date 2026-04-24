import type { BlockProps } from "@/blocks/types";
import { Circle, CheckCircle } from "lucide-react";

export default function Cta183(props: BlockProps) {
  const {
    theme,
    heading = "Three steps to your dream website",
    subheading = "Simple, fast, and no technical skills required.",
    buttonText = "Start Step 1",
    buttonUrl = "#",
  } = props;

  const steps = [
    { title: "Describe your vision", desc: "Tell our AI what you want to build", done: false },
    { title: "Customize the design", desc: "Drag, drop, and tweak until it is perfect", done: false },
    { title: "Publish and grow", desc: "Go live with one click and start earning", done: false },
  ];

  return (
    <section className="px-5 py-24" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#fff" }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-70">{subheading}</p>
        <div className="mt-10 space-y-4 text-left">
          {steps.map((s, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5">
              {s.done ? <CheckCircle className="w-6 h-6 shrink-0 mt-0.5 text-green-400" /> : <Circle className="w-6 h-6 shrink-0 mt-0.5 opacity-40" />}
              <div>
                <p className="font-semibold">{s.title}</p>
                <p className="text-sm opacity-60">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <a href={buttonUrl} className="mt-8 inline-block px-8 py-3 rounded-lg bg-white font-semibold text-sm hover:opacity-90 transition" style={{ color: theme?.primary ?? "#0f172a" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
