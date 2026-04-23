import { Code, MessageCircle, Briefcase, Rss } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer079(props: BlockProps) {
  const {
    theme,
    heading = "Mosaic",
    bodyText = "Design and development, in concert.",
    navLinks = [
      { label: "Work", url: "#" },
      { label: "Team", url: "#" },
      { label: "Writing", url: "#" },
      { label: "Contact", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full border-t border-gray-200 bg-white py-10"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-lg font-bold">{heading}</p>
          <p className="mt-1 text-sm text-gray-600">{bodyText}</p>
          <div className="mt-3 flex gap-3 text-gray-500">
            <a href="#" aria-label="GitHub" className="hover:text-gray-900"><Code className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-900"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-900"><Briefcase className="h-4 w-4" /></a>
            <a href="#" aria-label="RSS" className="hover:text-gray-900"><Rss className="h-4 w-4" /></a>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((l) => (
            <a key={l.label} href={l.url} className="text-sm text-gray-700 hover:text-gray-900">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
