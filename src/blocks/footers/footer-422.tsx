import type { BlockProps } from "@/blocks/types";

export default function Footer422(props: BlockProps) {
  const { theme, heading = "Cairn" } = props;
  const logos = ["TechCrunch", "Forbes", "Wired", "The Verge", "Bloomberg"];
  return (
    <footer
      className="w-full bg-white py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">As featured in</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
          {logos.map((l) => (
            <span key={l} className="font-serif text-xl italic text-gray-700">{l}</span>
          ))}
        </div>
        <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2">
            <p className="text-xl font-bold">{heading}</p>
            <p className="mt-2 text-sm text-gray-600">A studio building tools for the curious.</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Studio</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Work</a></li>
              <li><a href="#" className="hover:text-black">Writing</a></li>
              <li><a href="#" className="hover:text-black">About</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Elsewhere</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Instagram</a></li>
              <li><a href="#" className="hover:text-black">Dribbble</a></li>
              <li><a href="#" className="hover:text-black">Email</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-xs text-gray-500">© 2026 {heading} Studio</p>
      </div>
    </footer>
  );
}
