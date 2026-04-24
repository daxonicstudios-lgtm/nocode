import type { BlockProps } from "@/blocks/types";

export default function Footer082(props: BlockProps) {
  const {
    theme,
    heading = "Tango",
    bodyText = "Team dance class schedules, made effortless.",
    navLinks = [
      { label: "Studios", url: "#" },
      { label: "Classes", url: "#" },
      { label: "Pricing", url: "#" },
      { label: "App", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-rose-600 py-12 text-white"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2 sm:px-6 lg:px-8">
        <div>
          <p className="text-4xl font-black tracking-tight">{heading}.</p>
          <p className="mt-2 max-w-sm text-sm text-rose-100">{bodyText}</p>
        </div>
        <ul className="grid grid-cols-2 gap-3 md:text-right">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.url} className="text-sm font-semibold hover:underline">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-4 text-xs text-rose-200 sm:px-6 lg:px-8">
        © 2026 {heading}. Dance on.
      </p>
    </footer>
  );
}
