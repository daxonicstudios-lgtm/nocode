import type { BlockProps } from "@/blocks/types";

export default function Footer097(props: BlockProps) {
  const {
    theme,
    heading = "Gable",
    bodyText = "Property listings with soul.",
    navLinks = [
      { label: "Buy", url: "#" },
      { label: "Rent", url: "#" },
      { label: "Sell", url: "#" },
      { label: "Agents", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-neutral-100 py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 pb-10 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="font-serif text-4xl text-neutral-900">{heading}</p>
            <p className="mt-2 max-w-sm text-sm text-neutral-700">{bodyText}</p>
            <address className="mt-4 not-italic text-xs leading-relaxed text-neutral-600">
              221 Park Avenue, Suite 4B<br />
              Nairobi, 00100 · Kenya
            </address>
          </div>
          <ul className="grid grid-cols-2 gap-3 md:justify-self-end md:text-right">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.url} className="text-base text-neutral-800 hover:text-neutral-950">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-neutral-300 pt-4 text-xs text-neutral-500">
          © 2026 {heading} Realty · Licensed brokerage
        </div>
      </div>
    </footer>
  );
}
