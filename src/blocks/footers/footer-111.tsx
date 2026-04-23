import type { BlockProps } from "@/blocks/types";
import { Camera, Users, Play } from "lucide-react";

export default function Footer111(props: BlockProps) {
  const {
    theme,
    heading = "Casa Verde",
    bodyText = "Plant shop & care guides.",
  } = props;
  const cols = [
    { title: "Shop", links: ["Plants", "Pots", "Accessories", "Gift Cards"] },
    { title: "Care", links: ["Watering Guide", "Light", "Repotting", "Troubleshoot"] },
  ];
  return (
    <footer className="w-full bg-[#eef3ea] py-14 text-green-950" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-3xl">{heading}</p>
            <p className="mt-2 text-sm text-green-900/70">{bodyText}</p>
            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="Instagram"><Camera className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook"><Users className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube"><Play className="h-5 w-5" /></a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="font-serif text-lg">{c.title}</p>
              <ul className="mt-3 space-y-1.5">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-green-900/80 hover:text-green-950">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-green-900/60">© 2026 {heading} · Growing since 2019</p>
      </div>
    </footer>
  );
}
