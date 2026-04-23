import { MessageCircle, Camera, Code, Briefcase } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer045(props: BlockProps) {
  const { theme } = props;
  return (
    <footer className="w-full bg-white py-6" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-6 px-4 sm:px-6 lg:px-8">
        <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-black"><MessageCircle className="h-5 w-5" strokeWidth={1.25} /></a>
        <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-black"><Camera className="h-5 w-5" strokeWidth={1.25} /></a>
        <a href="#" aria-label="Github" className="text-gray-600 hover:text-black"><Code className="h-5 w-5" strokeWidth={1.25} /></a>
        <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-black"><Briefcase className="h-5 w-5" strokeWidth={1.25} /></a>
      </div>
      <p className="mt-3 text-center text-xs text-gray-400">© 2026 Ridge House</p>
    </footer>
  );
}
