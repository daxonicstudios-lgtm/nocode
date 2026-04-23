import { MessageCircle, Briefcase, Code, Camera, Users, Play } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer229(props: BlockProps) {
  const { theme, heading = "Horizon", bodyText = "News and insights from the world that matters to you." } = props;
  const columns = [
    { title: "News", links: [{ label: "World", url: "#" }, { label: "Politics", url: "#" }, { label: "Business", url: "#" }, { label: "Tech", url: "#" }, { label: "Science", url: "#" }, { label: "Health", url: "#" }, { label: "Sports", url: "#" }] },
    { title: "Opinion", links: [{ label: "Columnists", url: "#" }, { label: "Editorials", url: "#" }, { label: "Guest Essays", url: "#" }, { label: "Letters", url: "#" }, { label: "Videos", url: "#" }, { label: "Newsletters", url: "#" }] },
    { title: "More", links: [{ label: "Podcasts", url: "#" }, { label: "Magazine", url: "#" }, { label: "Events", url: "#" }, { label: "Puzzles", url: "#" }, { label: "Cooking", url: "#" }, { label: "Wirecutter", url: "#" }, { label: "The Athletic", url: "#" }] },
    { title: "Subscribe", links: [{ label: "Home Delivery", url: "#" }, { label: "Digital", url: "#" }, { label: "Games", url: "#" }, { label: "Gift Subscriptions", url: "#" }, { label: "Education Rate", url: "#" }, { label: "Corporate", url: "#" }] },
  ];
  return (
    <footer className="w-full border-t-2 border-gray-900 bg-white py-14" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-3xl font-bold tracking-tight text-gray-900">The {heading}</p>
            <p className="mt-2 text-sm text-gray-600">{bodyText}</p>
            <p className="mt-4 font-serif text-xs italic text-gray-500">Published since 1967</p>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="font-serif text-sm font-bold text-gray-900">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="font-serif text-sm text-gray-700 hover:underline">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-gray-300 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-gray-600 sm:flex-row">
            <div className="flex flex-wrap items-center gap-4">
              <p>© 2026 The {heading} Company</p>
              <a href="#" className="hover:text-gray-900">Contact Us</a>
              <a href="#" className="hover:text-gray-900">Advertise</a>
              <a href="#" className="hover:text-gray-900">Terms of Sale</a>
              <a href="#" className="hover:text-gray-900">Privacy</a>
              <a href="#" className="hover:text-gray-900">Terms of Service</a>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-gray-900"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" className="hover:text-gray-900"><Briefcase className="h-4 w-4" /></a>
              <a href="#" className="hover:text-gray-900"><Code className="h-4 w-4" /></a>
              <a href="#" className="hover:text-gray-900"><Camera className="h-4 w-4" /></a>
              <a href="#" className="hover:text-gray-900"><Users className="h-4 w-4" /></a>
              <a href="#" className="hover:text-gray-900"><Play className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
