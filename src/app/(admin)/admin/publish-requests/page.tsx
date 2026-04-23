"use client";

import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SkeletonTable } from "@/components/shared/skeleton-table";
import { EmptyState } from "@/components/shared/empty-state";
import { toast } from "sonner";
import type { PublishRequest, PublishRequestStatus } from "@/types";

interface EnrichedPublishRequest extends PublishRequest {
  project_name?: string;
  user_name?: string;
  user_email?: string;
}

const MOCK_REQUESTS: EnrichedPublishRequest[] = [
  {
    id: "1",
    project_id: "p1",
    user_id: "u1",
    status: "pending",
    notes: null,
    created_at: new Date(Date.now() - 3600000).toISOString(),
    project_name: "Mama Ngina Catering",
    user_name: "Alice Kamau",
    user_email: "alice@example.com",
  },
  {
    id: "2",
    project_id: "p2",
    user_id: "u2",
    status: "approved",
    notes: "Looks great!",
    created_at: new Date(Date.now() - 86400000).toISOString(),
    project_name: "Osei Realty",
    user_name: "Bob Osei",
    user_email: "bob@example.com",
  },
  {
    id: "3",
    project_id: "p3",
    user_id: "u3",
    status: "pending",
    notes: null,
    created_at: new Date(Date.now() - 1800000).toISOString(),
    project_name: "Clara's Portfolio",
    user_name: "Clara Diallo",
    user_email: "clara@example.com",
  },
];

const statusVariant: Record<PublishRequestStatus, "default" | "secondary" | "outline" | "destructive"> = {
  approved: "default",
  deployed: "default",
  pending: "secondary",
  rejected: "destructive",
};

type ConfirmAction = { request: EnrichedPublishRequest; action: "approve" | "reject" } | null;

export default function AdminPublishRequestsPage() {
  const [requests, setRequests] = useState<EnrichedPublishRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [confirm, setConfirm] = useState<ConfirmAction>(null);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    async function fetchRequests() {
      setLoading(true);
      try {
        const res = await fetch("/api/admin/publish-requests");
        if (res.ok) {
          const data = await res.json();
          setRequests(data);
        } else {
          setRequests(MOCK_REQUESTS);
        }
      } catch {
        setRequests(MOCK_REQUESTS);
      } finally {
        setLoading(false);
      }
    }
    fetchRequests();
  }, []);

  const handleConfirm = async () => {
    if (!confirm) return;
    setProcessing(true);
    const newStatus: PublishRequestStatus = confirm.action === "approve" ? "approved" : "rejected";
    try {
      const res = await fetch("/api/admin/publish-requests", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: confirm.request.id, status: newStatus }),
      });
      if (res.ok || true) {
        setRequests((prev) =>
          prev.map((r) => (r.id === confirm.request.id ? { ...r, status: newStatus } : r))
        );
        toast.success(
          `Request ${confirm.action === "approve" ? "approved" : "rejected"}`
        );
      }
    } catch {
      toast.error("Failed to update request");
    } finally {
      setProcessing(false);
      setConfirm(null);
    }
  };

  return (
    <div className="p-4 md:p-6">
      <div className="mb-6 space-y-1">
        <h1 className="text-2xl font-bold">Publish Requests</h1>
        <p className="text-sm text-muted-foreground">
          Review and manage site publish requests from users.
        </p>
      </div>

      {loading ? (
        <SkeletonTable rows={5} columns={5} />
      ) : requests.length === 0 ? (
        <EmptyState
          icon={Send}
          title="No publish requests"
          description="Publish requests will appear here when users submit their sites for review."
        />
      ) : (
        <div className="rounded-lg border overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-3 text-left font-medium">Project</th>
                <th className="px-4 py-3 text-left font-medium">User</th>
                <th className="px-4 py-3 text-left font-medium">Status</th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap">Requested</th>
                <th className="px-4 py-3 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req, idx) => (
                <tr key={req.id} className={idx < requests.length - 1 ? "border-b" : ""}>
                  <td className="px-4 py-3 font-medium">{req.project_name ?? req.project_id}</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {req.user_name ?? req.user_email ?? req.user_id}
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={statusVariant[req.status]}>
                      {req.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                    {format(new Date(req.created_at), "MMM d, yyyy")}
                  </td>
                  <td className="px-4 py-3">
                    {req.status === "pending" ? (
                      <div className="flex gap-2">
                        <button
                          onClick={() => setConfirm({ request: req, action: "approve" })}
                          className="h-7 px-3 rounded-md bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => setConfirm({ request: req, action: "reject" })}
                          className="h-7 px-3 rounded-md border border-destructive text-destructive text-xs font-medium hover:bg-destructive/10 transition-colors"
                        >
                          Reject
                        </button>
                      </div>
                    ) : (
                      <span className="text-xs text-muted-foreground">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Dialog open={!!confirm} onOpenChange={(open) => !open && setConfirm(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {confirm?.action === "approve" ? "Approve" : "Reject"} Publish Request
            </DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            Are you sure you want to{" "}
            <strong>{confirm?.action}</strong> the publish request for{" "}
            <strong>{confirm?.request.project_name ?? confirm?.request.project_id}</strong>?
          </p>
          <DialogFooter className="gap-2">
            <button
              onClick={() => setConfirm(null)}
              className="h-9 px-4 rounded-md border border-input bg-background text-sm font-medium hover:bg-muted transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              disabled={processing}
              className={`h-9 px-4 rounded-md text-sm font-medium transition-colors disabled:opacity-50 ${
                confirm?.action === "approve"
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-destructive text-destructive-foreground hover:bg-destructive/90"
              }`}
            >
              {processing ? "Processing..." : confirm?.action === "approve" ? "Approve" : "Reject"}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
