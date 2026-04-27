import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ projectId: string }> }
) {
  const { projectId } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createAdminClient();

  const { data: project } = await admin
    .from("projects")
    .select("user_id, name, slug")
    .eq("id", projectId)
    .single();

  if (!project || project.user_id !== user.id) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  // Get all project files
  const { data: fileRows } = await admin
    .from("project_files")
    .select("path, content")
    .eq("project_id", projectId);

  if (!fileRows || fileRows.length === 0) {
    return NextResponse.json(
      { error: "No files to deploy" },
      { status: 400 }
    );
  }

  // Build deployment file structure for Vercel
  const files: Array<{ file: string; data: string }> = [];

  // Add user's source files
  for (const row of fileRows) {
    files.push({
      file: row.path,
      data: Buffer.from(row.content).toString("base64"),
    });
  }

  // Add package.json
  const packageJson = {
    name: project.slug || "xxel-app",
    private: true,
    version: "0.0.1",
    type: "module",
    scripts: {
      dev: "vite",
      build: "tsc && vite build",
      preview: "vite preview",
    },
    dependencies: {
      react: "^18.3.1",
      "react-dom": "^18.3.1",
      "lucide-react": "^0.400.0",
      "react-router-dom": "^6.26.0",
      "date-fns": "^3.6.0",
      recharts: "^2.12.0",
    },
    devDependencies: {
      "@types/react": "^18.3.5",
      "@types/react-dom": "^18.3.0",
      "@vitejs/plugin-react": "^4.3.0",
      typescript: "^5.5.0",
      vite: "^5.4.0",
    },
  };
  files.push({
    file: "package.json",
    data: Buffer.from(JSON.stringify(packageJson, null, 2)).toString("base64"),
  });

  // Add index.html
  const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${project.name || "XXEL App"}</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>`;
  files.push({
    file: "index.html",
    data: Buffer.from(indexHtml).toString("base64"),
  });

  // Add main.tsx entry point if not present
  const hasMain = fileRows.some(
    (f) => f.path === "src/main.tsx" || f.path === "src/index.tsx"
  );
  if (!hasMain) {
    const mainTsx = `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`;
    files.push({
      file: "src/main.tsx",
      data: Buffer.from(mainTsx).toString("base64"),
    });
  }

  // Add vite.config.ts
  const viteConfig = `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({ plugins: [react()] });`;
  files.push({
    file: "vite.config.ts",
    data: Buffer.from(viteConfig).toString("base64"),
  });

  // Add tsconfig.json
  const tsConfig = {
    compilerOptions: {
      target: "ES2020",
      useDefineForClassFields: true,
      lib: ["ES2020", "DOM", "DOM.Iterable"],
      module: "ESNext",
      skipLibCheck: true,
      moduleResolution: "bundler",
      allowImportingTsExtensions: true,
      resolveJsonModule: true,
      isolatedModules: true,
      noEmit: true,
      jsx: "react-jsx",
      strict: true,
    },
    include: ["src"],
  };
  files.push({
    file: "tsconfig.json",
    data: Buffer.from(JSON.stringify(tsConfig, null, 2)).toString("base64"),
  });

  // Deploy to Vercel
  const vercelToken = process.env.VERCEL_TOKEN;
  const vercelTeamId = process.env.VERCEL_TEAM_ID;

  if (!vercelToken) {
    return NextResponse.json(
      { error: "Vercel deployment not configured. Set VERCEL_TOKEN." },
      { status: 500 }
    );
  }

  try {
    const deployRes = await fetch("https://api.vercel.com/v13/deployments", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${vercelToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: project.slug || `xxel-${projectId.slice(0, 8)}`,
        files: files.map((f) => ({
          file: f.file,
          data: f.data,
          encoding: "base64",
        })),
        projectSettings: {
          framework: "vite",
          buildCommand: "npm run build",
          outputDirectory: "dist",
        },
        ...(vercelTeamId ? { teamId: vercelTeamId } : {}),
      }),
    });

    if (!deployRes.ok) {
      const errData = await deployRes.json();
      throw new Error(
        errData.error?.message || `Vercel API error: ${deployRes.status}`
      );
    }

    const deployData = await deployRes.json();
    const deployUrl = `https://${deployData.url}`;

    // Save deploy URL to project
    await admin
      .from("projects")
      .update({
        published_url: deployUrl,
        last_deploy_url: deployUrl,
        status: "published",
      })
      .eq("id", projectId);

    return NextResponse.json({ url: deployUrl, id: deployData.id });
  } catch (err) {
    return NextResponse.json(
      {
        error: err instanceof Error ? err.message : "Deploy failed",
      },
      { status: 500 }
    );
  }
}
