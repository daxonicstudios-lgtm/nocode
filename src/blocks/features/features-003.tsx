import type { BlockProps } from "@/blocks/types";
import { CheckCircle2 } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Drag-and-drop editor", description: "Rearrange your entire site with your thumb. Works on any phone." },
  { title: "AI that understands you", description: "Describe your business. We build the site. Edit anything you want." },
  { title: "One-tap publishing", description: "Go live in seconds. Custom domains, SSL, and CDN included." },
];

export default function Features003(props: BlockProps) {
  const { theme, heading = "Why thousands switched", subheading = "Real reasons real people chose this platform.", imageUrl, items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{heading}</h2>
          <p className="mt-3 text-base opacity-70">{subheading}</p>
          <ul className="mt-8 space-y-5">
            {items.slice(0, 3).map((it, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: theme?.primary ?? "#16a34a" }} />
                <div>
                  <h3 className="font-semibold">{it.title}</h3>
                  <p className="mt-1 text-sm opacity-70">{it.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl overflow-hidden aspect-[4/3]" style={{ backgroundColor: theme?.secondary ?? "#f3f4f6" }}>
          {imageUrl ? <img src={imageUrl} alt="" className="w-full h-full object-cover" /> : null}
        </div>
      </div>
    </section>
  );
}
