import { Users, MessageCircle, Camera, Play } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer006(props: BlockProps) {
  const { theme, bodyText = "© 2026 Kindred Co." } = props;
  return (
    <footer className="w-full border-t-2 border-black bg-white py-6" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.primary }}>
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="text-sm font-medium text-black">{bodyText}</p>
        <div className="flex items-center gap-2">
          {[Users, MessageCircle, Camera, Play].map((Icon, i) => (
            <a key={i} href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:border-black hover:text-black">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
