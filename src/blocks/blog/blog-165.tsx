import type { BlockProps } from "@/blocks/types";
import { Terminal } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "SHIPPING DAILY", description: "Our commitment to continuous deployment and what it taught us.", label: "234 words", value: ">" },
  { title: "KILL YOUR DARLINGS", description: "Deleting 10,000 lines of code made our product better.", label: "412 words", value: ">" },
  { title: "OFFLINE FIRST", description: "Building for the 3 billion people with unreliable connections.", label: "567 words", value: ">" },
  { title: "MONOREPO TRUTHS", description: "One repo to rule them all, and the pain that comes with it.", label: "389 words", value: ">" },
  { title: "TESTING IS DESIGN", description: "Tests are not overhead. They are a design tool.", label: "298 words", value: ">" },
];

export default function Blog165(props: BlockProps) {
  const { theme, heading = "// LOG", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#1a1a1a", color: theme?.foreground ?? "#e0e0e0" }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-10">
          <Terminal className="w-5 h-5" style={{ color: theme?.primary ?? "#00ff88" }} />
          <h2 className="text-2xl font-black uppercase" style={{ fontFamily: "monospace" }}>{heading}</h2>
        </div>
        {items.slice(0, 5).map((item, i) => (
          <a key={i} href={buttonUrl} className="block border-b border-gray-700 py-4 group" style={{ fontFamily: "monospace" }}>
            <div className="flex items-start gap-3">
              <span className="text-sm font-bold" style={{ color: theme?.primary ?? "#00ff88" }}>{item.value}</span>
              <div className="flex-1">
                <h3 className="text-sm font-bold uppercase group-hover:underline">{item.title}</h3>
                <p className="text-xs opacity-50 mt-1">{item.description}</p>
              </div>
              <span className="text-xs opacity-30 shrink-0">{item.label}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
