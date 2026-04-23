"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, Layers, Users, Send, Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NotificationBell from "@/components/admin/NotificationBell";

const navLinks = [
  { href: "/admin/components", label: "Components", icon: Layers },
  { href: "/admin/users", label: "Users", icon: Users },
  { href: "/admin/publish-requests", label: "Publish Requests", icon: Send },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="flex min-h-screen">
      {/* Desktop sidebar */}
      <aside className="hidden w-60 flex-shrink-0 border-r bg-muted/30 md:block">
        <div className="flex h-14 items-center justify-between border-b px-4">
          <Link href="/admin/components" className="text-lg font-bold">
            NoCode Admin
          </Link>
          <NotificationBell />
        </div>
        <nav className="space-y-1 p-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="flex flex-1 flex-col">
        {/* Mobile header */}
        <header className="flex h-14 items-center justify-between border-b px-4 md:hidden">
          <Link href="/admin/components" className="text-lg font-bold">
            Admin
          </Link>
          <div className="flex items-center gap-2">
            <NotificationBell />
            <DropdownMenu>
              <DropdownMenuTrigger
                aria-label="Open navigation menu"
                className="flex h-9 w-9 items-center justify-center rounded-md hover:bg-muted"
              >
                <Menu className="h-5 w-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {navLinks.map(({ href, label, icon: Icon }) => (
                  <DropdownMenuItem
                    key={href}
                    onClick={() => router.push(href)}
                    className="gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
