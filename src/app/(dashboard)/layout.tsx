import Link from "next/link";
import { UserMenu } from "@/components/shared/user-menu";
import { Footer } from "@/components/shared/footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <Link href="/projects" className="text-xl font-bold">
            NoCode
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="/projects"
              className="hidden text-sm font-medium text-muted-foreground hover:text-foreground sm:inline"
            >
              My Projects
            </Link>
            <UserMenu />
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
