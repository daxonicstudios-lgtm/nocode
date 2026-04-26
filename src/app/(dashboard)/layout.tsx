import Link from "next/link";
import { UserMenu } from "@/components/shared/user-menu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF7F4]">
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100/80">
        <div className="mx-auto max-w-6xl flex h-16 items-center justify-between px-5">
          <Link href="/projects" className="text-xl font-bold text-[#1A1A1A]">
            Xxel
          </Link>
          <nav className="flex items-center gap-5">
            <Link
              href="/projects"
              className="hidden text-sm text-gray-500 hover:text-gray-900 transition-colors sm:inline"
            >
              My Projects
            </Link>
            <UserMenu />
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-gray-100 bg-white py-6">
        <div className="mx-auto max-w-6xl px-5 flex items-center justify-between">
          <span className="text-sm font-bold text-[#1A1A1A]">Xxel</span>
          <p className="text-xs text-gray-400">© 2026 Xxel. Built for creators.</p>
        </div>
      </footer>
    </div>
  );
}
