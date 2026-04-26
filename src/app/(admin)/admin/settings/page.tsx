"use client";

import { useEffect, useState } from "react";

interface PlatformSettings {
  platform_name: string;
  allow_signups: boolean;
  max_projects_free: number;
  max_projects_pro: number;
  maintenance_mode: boolean;
}

const defaults: PlatformSettings = {
  platform_name: "Xxel",
  allow_signups: true,
  max_projects_free: 3,
  max_projects_pro: 50,
  maintenance_mode: false,
};

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<PlatformSettings>(defaults);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  useEffect(() => {
    fetch("/api/admin/settings")
      .then((res) => res.json())
      .then((data) => setSettings({ ...defaults, ...data }))
      .catch(() => setToast({ message: "Failed to load settings", type: "error" }))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(t);
  }, [toast]);

  async function handleSave() {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      if (!res.ok) throw new Error("Save failed");
      setToast({ message: "Settings saved successfully", type: "success" });
    } catch {
      setToast({ message: "Failed to save settings", type: "error" });
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="p-4 md:p-6">
        <div className="mb-6 space-y-1">
          <div className="h-8 w-40 animate-pulse rounded bg-muted" />
          <div className="h-4 w-64 animate-pulse rounded bg-muted" />
        </div>
        <div className="max-w-lg space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg border p-4">
              <div className="mb-2 h-4 w-32 animate-pulse rounded bg-muted" />
              <div className="h-9 w-full animate-pulse rounded bg-muted" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6">
      {toast && (
        <div
          className={`fixed right-4 top-4 z-50 rounded-md px-4 py-3 text-sm font-medium shadow-lg ${
            toast.type === "success"
              ? "bg-green-600 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {toast.message}
        </div>
      )}

      <div className="mb-6 space-y-1">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-sm text-muted-foreground">
          Platform settings and configuration.
        </p>
      </div>

      <div className="max-w-lg space-y-6">
        <div className="rounded-lg border p-4">
          <h3 className="mb-2 text-sm font-semibold">Platform Name</h3>
          <input
            type="text"
            value={settings.platform_name}
            onChange={(e) =>
              setSettings((s) => ({ ...s, platform_name: e.target.value }))
            }
            className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm"
          />
        </div>

        <div className="rounded-lg border p-4">
          <h3 className="mb-2 text-sm font-semibold">Max Projects (Free Plan)</h3>
          <input
            type="number"
            min={1}
            value={settings.max_projects_free}
            onChange={(e) =>
              setSettings((s) => ({
                ...s,
                max_projects_free: Number(e.target.value),
              }))
            }
            className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm"
          />
        </div>

        <div className="rounded-lg border p-4">
          <h3 className="mb-2 text-sm font-semibold">Max Projects (Pro Plan)</h3>
          <input
            type="number"
            min={1}
            value={settings.max_projects_pro}
            onChange={(e) =>
              setSettings((s) => ({
                ...s,
                max_projects_pro: Number(e.target.value),
              }))
            }
            className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm"
          />
        </div>

        <div className="rounded-lg border p-4">
          <label className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold">Allow Signups</h3>
              <p className="text-xs text-muted-foreground">
                Enable or disable new user registrations
              </p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={settings.allow_signups}
              onClick={() =>
                setSettings((s) => ({ ...s, allow_signups: !s.allow_signups }))
              }
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${
                settings.allow_signups ? "bg-green-600" : "bg-muted"
              }`}
            >
              <span
                className={`pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg transition-transform ${
                  settings.allow_signups ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </label>
        </div>

        <div className="rounded-lg border p-4">
          <label className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold">Maintenance Mode</h3>
              <p className="text-xs text-muted-foreground">
                When enabled, users see a maintenance page
              </p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={settings.maintenance_mode}
              onClick={() =>
                setSettings((s) => ({
                  ...s,
                  maintenance_mode: !s.maintenance_mode,
                }))
              }
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${
                settings.maintenance_mode ? "bg-red-600" : "bg-muted"
              }`}
            >
              <span
                className={`pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg transition-transform ${
                  settings.maintenance_mode ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </label>
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Settings"}
        </button>
      </div>
    </div>
  );
}
