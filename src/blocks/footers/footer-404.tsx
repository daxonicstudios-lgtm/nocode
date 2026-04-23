import type { BlockProps } from "@/blocks/types";

export default function Footer404(props: BlockProps) {
  const { theme, heading = "Kindred", bodyText = "Tools for teams that ship." } = props;
  const posts = [
    { title: "Rethinking onboarding in 2026", date: "Apr 22, 2026" },
    { title: "From solo dev to team of ten", date: "Apr 10, 2026" },
    { title: "The hidden cost of notifications", date: "Apr 01, 2026" },
  ];
  return (
    <footer
      className="w-full bg-white py-16"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <p className="text-2xl font-bold">{heading}</p>
            <p className="mt-2 text-sm text-gray-500">{bodyText}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Product</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Features</a></li>
              <li><a href="#" className="hover:text-gray-900">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-900">Changelog</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">About</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">From the blog</p>
            <ul className="mt-3 space-y-3">
              {posts.map((p) => (
                <li key={p.title}>
                  <a href="#" className="text-sm text-gray-700 hover:text-gray-900 hover:underline">{p.title}</a>
                  <p className="text-xs text-gray-400">{p.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-6 text-xs text-gray-500">
          © 2026 {heading}. Made with care.
        </div>
      </div>
    </footer>
  );
}
