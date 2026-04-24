import { MapPin } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer056(props: BlockProps) {
  const {
    theme,
    heading = "Harbor",
    bodyText = "Your business, simplified.",
    navLinks = [
      { label: "Solutions", url: "#" },
      { label: "Customers", url: "#" },
      { label: "Pricing", url: "#" },
      { label: "Contact sales", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full border-t-2 border-gray-900 bg-[#f5f1ea] py-10"
      style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.primary }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-start md:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-serif text-3xl text-gray-900">{heading}</p>
          <p className="mt-2 max-w-sm text-sm text-gray-700">{bodyText}</p>
          <p className="mt-3 flex items-center gap-2 text-xs text-gray-600">
            <MapPin className="h-3 w-3" /> Lagos · Nairobi · Cape Town
          </p>
        </div>
        <ul className="flex flex-col gap-2 md:items-end">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.url} className="text-sm text-gray-800 underline-offset-4 hover:underline">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
