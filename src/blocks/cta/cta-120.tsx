import type { BlockProps } from "@/blocks/types";
import { ArrowDown } from "lucide-react";

export default function Cta120(props: BlockProps) {
  const {
    theme,
    heading = "From Zero to Launch in 3 Steps",
    buttonText = "Get Started Free",
    buttonUrl = "#",
    items = [
      { title: "Pick a Template", description: "Choose from 100+ designs." },
      { title: "Make It Yours", description: "Customize colors, text, and layout." },
      { title: "Hit Publish", description: "Your site is live in seconds." },
    ],
  } = props;

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.accent || "#faf5ff", color: theme?.foreground }}>
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">{heading}</h2>
        {items.slice(0, 3).map((item, i) => (
          <div key={i}>
            <div className="p-4 rounded-xl border bg-white/50 mb-2">
              <span className="text-xs font-bold uppercase" style={{ color: theme?.primary || "#7c3aed" }}>Step {i + 1}</span>
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-sm opacity-70">{item.description}</p>
            </div>
            {i < 2 && <ArrowDown className="w-5 h-5 mx-auto my-2 opacity-30" />}
          </div>
        ))}
        <a href={buttonUrl} className="inline-block mt-6 px-8 py-3 rounded-full text-white font-semibold hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#7c3aed" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
