import { MessageCircle, Code, Briefcase } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer054(props: BlockProps) {
  const {
    theme,
    heading = "Vault",
    bodyText = "Security that works while you sleep.",
    navLinks = [
      { label: "Platform", url: "#" },
      { label: "Trust", url: "#" },
      { label: "Compliance", url: "#" },
      { label: "Log in", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-black py-12 text-gray-400"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 md:grid-cols-2 sm:px-6 lg:px-8">
        <div>
          <p className="text-2xl font-bold tracking-tight text-white">{heading}</p>
          <p className="mt-3 max-w-sm text-sm">{bodyText}</p>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Twitter" className="rounded-md border border-white/10 p-2 hover:border-white/30">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href="#" aria-label="GitHub" className="rounded-md border border-white/10 p-2 hover:border-white/30">
              <Code className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="rounded-md border border-white/10 p-2 hover:border-white/30">
              <Briefcase className="h-4 w-4" />
            </a>
          </div>
        </div>
        <ul className="flex flex-col gap-3 md:items-end">
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
