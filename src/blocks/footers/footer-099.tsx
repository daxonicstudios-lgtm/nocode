import type { BlockProps } from "@/blocks/types";

export default function Footer099(props: BlockProps) {
  const {
    theme,
    heading = "Quartz",
    bodyText = "Precision timekeeping since 2018.",
    navLinks = [
      { label: "Watches", url: "#" },
      { label: "Story", url: "#" },
      { label: "Warranty", url: "#" },
      { label: "Boutiques", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-black py-16"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <p className="font-serif text-5xl font-thin tracking-wide text-white">{heading}</p>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-neutral-500">
              {bodyText}
            </p>
          </div>
          <ul className="flex flex-col gap-3 md:items-end">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.url}
                  className="text-sm uppercase tracking-[0.25em] text-neutral-300 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-neutral-900 pt-6 text-[11px] uppercase tracking-[0.3em] text-neutral-600 sm:flex-row sm:justify-between">
          <p>© MMXXVI {heading}</p>
          <p>Swiss made</p>
        </div>
      </div>
    </footer>
  );
}
