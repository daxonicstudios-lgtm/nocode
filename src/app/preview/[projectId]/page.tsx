import { notFound } from "next/navigation";

interface PreviewPageProps {
  params: Promise<{ projectId: string }>;
}

export default async function PreviewPage({ params }: PreviewPageProps) {
  const { projectId } = await params;

  // TODO: Fetch project data from Supabase
  // const supabase = await createClient();
  // const { data: project } = await supabase.from("projects").select("*").eq("id", projectId).single();
  // if (!project) notFound();

  return (
    <div className="relative min-h-screen">
      {/* Watermark */}
      <div className="fixed bottom-4 right-4 z-50 rounded-full bg-black/80 px-4 py-2 text-xs font-medium text-white shadow-lg">
        Built with NoCode
      </div>

      {/* Preview Content */}
      <main>
        <div className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
          <h1 className="text-2xl font-bold">Preview: {projectId}</h1>
          <p className="mt-2 text-muted-foreground">
            This is where the assembled blocks will render.
          </p>
        </div>
      </main>
    </div>
  );
}
