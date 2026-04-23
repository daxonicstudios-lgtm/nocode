"use client";

import { useState } from "react";
import { X, Rocket, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useEditorStore } from "@/stores/editor-store";
import { createNotification } from "@/lib/notifications";

interface PublishDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function PublishDialog({ open, onClose }: PublishDialogProps) {
  const { projectId, projectName, pages, blocks, publishProject } =
    useEditorStore();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (!open) return null;

  const handleConfirm = async () => {
    setStatus("loading");
    setErrorMessage("");

    try {
      await publishProject();

      // Create a notification for admins
      if (projectId) {
        await createNotification({
          projectId,
          projectName: projectName || "Untitled Project",
          pageCount: pages.length,
          blockCount: blocks.length,
        });
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  const handleClose = () => {
    setStatus("idle");
    setErrorMessage("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={status === "loading" ? undefined : handleClose}
      />

      {/* Dialog */}
      <div className="relative z-10 mx-4 w-full max-w-md rounded-lg border bg-background p-6 shadow-lg">
        {/* Close button */}
        <button
          onClick={handleClose}
          disabled={status === "loading"}
          className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 disabled:pointer-events-none"
        >
          <X className="h-4 w-4" />
        </button>

        {status === "success" ? (
          <div className="flex flex-col items-center py-4 text-center">
            <CheckCircle className="h-12 w-12 text-green-500" />
            <h2 className="mt-4 text-lg font-semibold">Publish Request Sent!</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Your project has been submitted for review. An admin will approve it
              shortly.
            </p>
            <button
              onClick={handleClose}
              className="mt-6 inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Done
            </button>
          </div>
        ) : status === "error" ? (
          <div className="flex flex-col items-center py-4 text-center">
            <AlertCircle className="h-12 w-12 text-red-500" />
            <h2 className="mt-4 text-lg font-semibold">Publish Failed</h2>
            <p className="mt-2 text-sm text-muted-foreground">{errorMessage}</p>
            <div className="mt-6 flex gap-2">
              <button
                onClick={handleClose}
                className="inline-flex h-9 items-center rounded-md border px-4 text-sm font-medium hover:bg-accent"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Retry
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Rocket className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Publish Project</h2>
                <p className="text-sm text-muted-foreground">
                  Submit for admin review
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-md border bg-muted/30 p-4">
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Project</dt>
                  <dd className="font-medium">
                    {projectName || "Untitled Project"}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Pages</dt>
                  <dd className="font-medium">{pages.length}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Blocks</dt>
                  <dd className="font-medium">{blocks.length}</dd>
                </div>
              </dl>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              Once submitted, an admin will review your project before it goes
              live. You&apos;ll be notified when it&apos;s approved.
            </p>

            <div className="mt-5 flex justify-end gap-2">
              <button
                onClick={handleClose}
                disabled={status === "loading"}
                className="inline-flex h-9 items-center rounded-md border px-4 text-sm font-medium hover:bg-accent disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                disabled={status === "loading"}
                className="inline-flex h-9 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Publishing...
                  </>
                ) : (
                  "Confirm & Publish"
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
