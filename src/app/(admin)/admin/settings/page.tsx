export default function AdminSettingsPage() {
  return (
    <div className="p-4 md:p-6">
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
            defaultValue="NoCode"
            className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm"
          />
        </div>

        <div className="rounded-lg border p-4">
          <h3 className="mb-2 text-sm font-semibold">Preview Domain</h3>
          <input
            type="text"
            defaultValue="nocode.app"
            className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm"
          />
          <p className="mt-1 text-xs text-muted-foreground">
            User preview links will be: preview.yourdomain.com/project-slug
          </p>
        </div>
      </div>
    </div>
  );
}
