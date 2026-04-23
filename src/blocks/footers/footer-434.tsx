import type { BlockProps } from "@/blocks/types";

export default function Footer434(props: BlockProps) {
  const { theme, heading = "Ingot" } = props;
  const logos = ["Bloomberg", "WSJ", "Reuters", "FT", "Axios"];
  return (
    <footer
      className="w-full bg-white py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-gray-200 bg-gray-50 p-6 md:flex-row md:items-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">As featured in</p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {logos.map((l) => (
              <span key={l} className="font-serif text-base italic text-gray-700">{l}</span>
            ))}
          </div>
          <a href="#" className="text-xs font-medium text-gray-900 hover:underline">Press kit →</a>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <p className="text-lg font-bold">{heading}</p>
            <p className="mt-1 text-sm text-gray-500">Metals-grade money management.</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Accounts</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Personal</a></li>
              <li><a href="#" className="hover:text-black">Business</a></li>
              <li><a href="#" className="hover:text-black">Treasury</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Resources</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Blog</a></li>
              <li><a href="#" className="hover:text-black">Research</a></li>
              <li><a href="#" className="hover:text-black">API</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Legal</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Terms</a></li>
              <li><a href="#" className="hover:text-black">Privacy</a></li>
              <li><a href="#" className="hover:text-black">Disclosures</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-gray-200 pt-5 text-xs text-gray-500">
          © 2026 {heading} Holdings. Banking services provided by partner institutions.
        </p>
      </div>
    </footer>
  );
}
