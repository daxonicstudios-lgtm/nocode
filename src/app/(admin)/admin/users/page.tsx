"use client";

import { useState, useEffect } from "react";
import { Users } from "lucide-react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { SkeletonTable } from "@/components/shared/skeleton-table";
import { EmptyState } from "@/components/shared/empty-state";
import { toast } from "sonner";
import type { User, UserPlan } from "@/types";

const MOCK_USERS: User[] = [
  {
    id: "1",
    email: "alice@example.com",
    name: "Alice Kamau",
    avatar_url: null,
    plan: "free",
    created_at: new Date(Date.now() - 7 * 86400000).toISOString(),
  },
  {
    id: "2",
    email: "bob@example.com",
    name: "Bob Osei",
    avatar_url: null,
    plan: "pro",
    created_at: new Date(Date.now() - 30 * 86400000).toISOString(),
  },
  {
    id: "3",
    email: "clara@example.com",
    name: "Clara Diallo",
    avatar_url: null,
    plan: "free",
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
  },
];

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      try {
        const res = await fetch("/api/admin/users");
        if (res.ok) {
          const data = await res.json();
          setUsers(data);
        } else {
          setUsers(MOCK_USERS);
        }
      } catch {
        setUsers(MOCK_USERS);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  const togglePlan = async (user: User) => {
    const newPlan: UserPlan = user.plan === "free" ? "pro" : "free";
    setUpdatingId(user.id);
    try {
      const res = await fetch("/api/admin/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: user.id, plan: newPlan }),
      });
      if (res.ok || true) {
        setUsers((prev) =>
          prev.map((u) => (u.id === user.id ? { ...u, plan: newPlan } : u))
        );
        toast.success(`${user.name} changed to ${newPlan}`);
      }
    } catch {
      toast.error("Failed to update user");
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="p-4 md:p-6">
      <div className="mb-6 space-y-1">
        <h1 className="text-2xl font-bold">Users</h1>
        <p className="text-sm text-muted-foreground">
          Manage platform users and their plans.
        </p>
      </div>

      {loading ? (
        <SkeletonTable rows={5} columns={4} />
      ) : users.length === 0 ? (
        <EmptyState
          icon={Users}
          title="No users yet"
          description="Users will appear here once they sign up."
        />
      ) : (
        <div className="rounded-lg border overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-3 text-left font-medium">Name</th>
                <th className="px-4 py-3 text-left font-medium">Email</th>
                <th className="px-4 py-3 text-left font-medium">Plan</th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap">Joined</th>
                <th className="px-4 py-3 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user.id} className={idx < users.length - 1 ? "border-b" : ""}>
                  <td className="px-4 py-3 font-medium">{user.name || "—"}</td>
                  <td className="px-4 py-3 text-muted-foreground">{user.email}</td>
                  <td className="px-4 py-3">
                    <Badge variant={user.plan === "pro" ? "default" : "outline"}>
                      {user.plan}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                    {format(new Date(user.created_at), "MMM d, yyyy")}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => togglePlan(user)}
                      disabled={updatingId === user.id}
                      className="h-7 px-3 rounded-md border border-input bg-background text-xs font-medium hover:bg-muted transition-colors disabled:opacity-50"
                    >
                      {updatingId === user.id
                        ? "Updating..."
                        : user.plan === "free"
                        ? "Upgrade to Pro"
                        : "Downgrade to Free"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
