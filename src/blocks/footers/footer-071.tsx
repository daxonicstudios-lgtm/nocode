import { Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer071(props: BlockProps) {
  const {
    theme,
    heading = "Tether",
    bodyText = "Remote work infrastructure.",
    navLinks = [
      { label: "Platform", url: "#" },
      { label: "Security", url: "#" },
      { label: "Pricing", url: "#" },
      { label: "Support", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-indigo-950 py-14 text-indigo-100"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 md:grid-cols-2 sm:px-6 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-indigo-400/20 font-bold text-indigo-200">
              T
            </div>
            <p className="text-xl font-semibold text-white">{heading}</p>
          </div>
          <p className="mt-3 max-w-sm text-sm text-indigo-200/80">{bodyText}</p>
          <a
            href="mailto:hello@tether.co"
            className="mt-4 inline-flex items-center gap-2 text-sm text-indigo-200 hover:text-white"
          >
            <Mail className="h-4 w-4" /> hello@{heading.toLowerCase()}.co
          </a>
        </div>
        <ul className="flex flex-col gap-2 md:items-end">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.url} className="text-sm text-indigo-200 hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-indigo-900 px-4 pt-4 text-xs text-indigo-300/70 sm:px-6 lg:px-8">
        © 2026 {heading} Technologies
      </div>
    </footer>
  );
}
