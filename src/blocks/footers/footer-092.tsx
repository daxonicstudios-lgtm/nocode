import { Users, Camera, MessageCircle } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer092(props: BlockProps) {
  const {
    theme,
    heading = "Kite",
    bodyText = "Events and ticketing made breezy.",
    navLinks = [
      { label: "Browse", url: "#" },
      { label: "Host", url: "#" },
      { label: "Promote", url: "#" },
      { label: "Help", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-sky-600 py-12 text-sky-50"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 md:grid-cols-2 sm:px-6 lg:px-8">
        <div>
          <p className="text-3xl font-extrabold tracking-tight text-white">{heading}</p>
          <p className="mt-2 max-w-sm text-sm text-sky-100">{bodyText}</p>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
              <Users className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
              <Camera className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Twitter" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-2 md:text-right">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.url} className="text-sm font-medium text-sky-50 hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-4 text-xs text-sky-200 sm:px-6 lg:px-8">
        © 2026 {heading} Events
      </p>
    </footer>
  );
}
