import Link from "next/link";
import NotificationBell from "@/components/admin/NotificationBell";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Admin Sidebar */}
      <aside className="hidden w-60 flex-shrink-0 border-r bg-muted/30 md:block">
        <div className="flex h-14 items-center justify-between border-b px-4">
          <Link href="/admin/components" className="text-lg font-bold">
            NoCode Admin
          </Link>
          <NotificationBell />
        </div>
        <nav className="space-y-1 p-4">
          <Link
            href="/admin/components"
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
          >
            Components
          </Link>
          <Link
            href="/admin/users"
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
          >
            Users
          </Link>
          <Link
            href="/admin/publish-requests"
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
          >
            Publish Requests
          </Link>
          <Link
            href="/admin/settings"
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
          >
            Settings
          </Link>
        </nav>
      </aside>

      {/* Mobile admin nav */}
      <div className="flex flex-1 flex-col">
        <header className="flex h-14 items-center justify-between border-b px-4 md:hidden">
          <Link href="/admin/components" className="text-lg font-bold">
            Admin
          </Link>
          <div className="flex items-center gap-2">
            <NotificationBell />
            {/* TODO: Mobile hamburger menu */}
          </div>
        </header>
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
