import type { BlockProps } from "@/blocks/types";

export default function Footer428(props: BlockProps) {
  const { theme, heading = "Greyline", bodyText = "Trusted by the world's curious companies." } = props;
  const logos = ["TechCrunch", "Forbes", "Wired", "The Verge", "Bloomberg"];
  return (
    <footer
      className="w-full bg-white py-16"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-3xl font-bold tracking-tight">{heading}</p>
            <p className="mt-3 max-w-md text-base text-gray-600">{bodyText}</p>
            <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.3em] text-gray-400">As seen in</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3">
              {logos.map((l) => (
                <span key={l} className="font-serif text-base italic text-gray-600">{l}</span>
              ))}
            </div>
          </div>
          <div className="md:col-span-7 md:grid md:grid-cols-3 md:gap-8">
            <div>
              <p className="text-sm font-semibold text-gray-900">Platform</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">Overview</a></li>
                <li><a href="#" className="hover:text-black">Features</a></li>
                <li><a href="#" className="hover:text-black">Integrations</a></li>
                <li><a href="#" className="hover:text-black">Security</a></li>
              </ul>
            </div>
            <div className="mt-8 md:mt-0">
              <p className="text-sm font-semibold text-gray-900">Company</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">About</a></li>
                <li><a href="#" className="hover:text-black">Careers</a></li>
                <li><a href="#" className="hover:text-black">Press</a></li>
                <li><a href="#" className="hover:text-black">Contact</a></li>
              </ul>
            </div>
            <div className="mt-8 md:mt-0">
              <p className="text-sm font-semibold text-gray-900">Legal</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">Terms</a></li>
                <li><a href="#" className="hover:text-black">Privacy</a></li>
                <li><a href="#" className="hover:text-black">DPA</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-14 border-t border-gray-200 pt-6 text-xs text-gray-500">
          © 2026 {heading}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
