import { Camera, MessageCircle } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer013(props: BlockProps) {
  const { theme, heading = "Saffron" } = props;
  return (
    <footer className="w-full bg-[#fafafa] py-6" style={{ backgroundColor: theme?.background || "#fafafa", color: theme?.foreground }}>
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p className="text-sm text-gray-500">© 2026 {heading}.</p>
        <div className="flex items-center gap-1">
          <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-md bg-gray-900 text-white hover:bg-black">
            <Camera className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Twitter" className="flex h-9 w-9 items-center justify-center rounded-md bg-gray-900 text-white hover:bg-black">
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
