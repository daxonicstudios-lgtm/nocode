import { Camera, MessageCircle, Play } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer063(props: BlockProps) {
  const {
    theme,
    heading = "Marrow",
    bodyText = "Food stories from across the continent.",
    navLinks = [
      { label: "Recipes", url: "#" },
      { label: "Stories", url: "#" },
      { label: "Shop", url: "#" },
      { label: "Submit", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-[#0a0a0a] py-14 text-gray-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 md:grid-cols-2 sm:px-6 lg:px-8">
        <div>
          <p className="font-serif text-4xl font-light text-white">{heading}</p>
          <p className="mt-3 max-w-xs text-sm text-gray-400">{bodyText}</p>
          <div className="mt-4 flex gap-4 text-gray-400">
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <Camera className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-white">
              <Play className="h-4 w-4" />
            </a>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-3 md:text-right">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.url} className="text-sm hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
