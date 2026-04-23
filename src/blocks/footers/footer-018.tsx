import { MessageCircle, Camera, Users, Play, Briefcase } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer018(props: BlockProps) {
  const { theme } = props;
  const socials = [MessageCircle, Camera, Users, Play, Briefcase];
  return (
    <footer className="w-full bg-[#0a0a0a] py-8 text-gray-400" style={{ backgroundColor: theme?.background || "#0a0a0a", color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <div className="flex justify-center gap-6">
          {socials.map((Icon, i) => (
            <a key={i} href="#" className="hover:text-white"><Icon className="h-5 w-5" /></a>
          ))}
        </div>
        <p className="mt-4 text-xs tracking-widest uppercase">© 2026 Midnight Group</p>
      </div>
    </footer>
  );
}
