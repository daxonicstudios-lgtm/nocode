export default function AdminPublishRequestsPage() {
  return (
    <div className="p-4 md:p-6">
      <div className="mb-6 space-y-1">
        <h1 className="text-2xl font-bold">Publish Requests</h1>
        <p className="text-sm text-muted-foreground">
          Review and manage site publish requests from users.
        </p>
      </div>

      <div className="rounded-lg border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="px-4 py-3 text-left font-medium">Project</th>
              <th className="px-4 py-3 text-left font-medium">User</th>
              <th className="px-4 py-3 text-left font-medium">Status</th>
              <th className="px-4 py-3 text-left font-medium">Requested</th>
              <th className="px-4 py-3 text-left font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                No publish requests yet.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
