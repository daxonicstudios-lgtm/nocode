import { NextRequest } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";
import {
  streamGeneration,
  extractChatText,
  estimateCreditCost,
} from "@/lib/ai/code-agent";
import type { FileChange } from "@/types/builder";

export const maxDuration = 120; // 2 min timeout for streaming

export async function POST(request: NextRequest) {
  try {
    const { projectId, message } = await request.json();

    if (!projectId || !message) {
      return new Response(
        JSON.stringify({ error: "projectId and message are required" }),
        { status: 400 }
      );
    }

    // Auth check
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    const admin = createAdminClient();

    // Verify project ownership
    const { data: project, error: projectErr } = await admin
      .from("projects")
      .select("id, user_id, knowledge")
      .eq("id", projectId)
      .single();

    if (projectErr || !project || project.user_id !== user.id) {
      return new Response(JSON.stringify({ error: "Project not found" }), {
        status: 404,
      });
    }

    // Load conversation history
    const { data: history } = await admin
      .from("messages")
      .select("role, content")
      .eq("project_id", projectId)
      .order("created_at", { ascending: true })
      .limit(20);

    // Load current project files
    const { data: fileRows } = await admin
      .from("project_files")
      .select("path, content")
      .eq("project_id", projectId);

    const files: Record<string, string> = {};
    for (const row of fileRows || []) {
      files[row.path] = row.content;
    }

    // Save user message to DB
    await admin.from("messages").insert({
      project_id: projectId,
      role: "user",
      content: message,
      file_changes: [],
    });

    // Check for BYOK key
    const { data: profile } = await admin
      .from("profiles")
      .select("anthropic_api_key")
      .eq("id", user.id)
      .single();

    // Stream response via SSE
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const send = (event: string, data: unknown) => {
          controller.enqueue(
            encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`)
          );
        };

        try {
          let fullResponse = "";
          const generatedFiles: Array<{ path: string; content: string }> = [];

          const generator = streamGeneration(
            message,
            files,
            history || [],
            project.knowledge || undefined,
            profile?.anthropic_api_key || undefined
          );

          for await (const event of generator) {
            switch (event.type) {
              case "token":
                send("token", { content: event.content });
                break;

              case "file":
                generatedFiles.push({
                  path: event.path,
                  content: event.content,
                });
                send("file", { path: event.path, content: event.content });
                break;

              case "done":
                fullResponse = event.fullResponse;
                break;

              case "error":
                send("error", { message: event.message });
                controller.close();
                return;
            }
          }

          // Persist generated files to DB
          const fileChanges: FileChange[] = [];
          for (const file of generatedFiles) {
            const existed = files[file.path];
            fileChanges.push({
              path: file.path,
              action: existed ? "update" : "create",
            });

            await admin.from("project_files").upsert(
              {
                project_id: projectId,
                path: file.path,
                content: file.content,
                version: (existed ? 1 : 0) + 1,
                updated_at: new Date().toISOString(),
              },
              { onConflict: "project_id,path" }
            );
          }

          // Create version snapshot
          const snapshotFiles = { ...files };
          for (const file of generatedFiles) {
            snapshotFiles[file.path] = file.content;
          }

          const chatText = extractChatText(fullResponse);
          const creditsUsed = estimateCreditCost(generatedFiles.length);

          const { data: versionRow } = await admin
            .from("project_versions")
            .insert({
              project_id: projectId,
              snapshot: snapshotFiles,
              description:
                chatText.slice(0, 200) ||
                `Generated ${generatedFiles.length} files`,
            })
            .select("id")
            .single();

          // Save assistant message
          await admin.from("messages").insert({
            project_id: projectId,
            role: "assistant",
            content: chatText || `Generated ${generatedFiles.length} files`,
            file_changes: fileChanges,
            credits_used: creditsUsed,
          });

          // Deduct credits (skip for BYOK users)
          if (!profile?.anthropic_api_key) {
            await admin.rpc("deduct_credits", {
              p_user_id: user.id,
              p_amount: creditsUsed,
            });
          }

          send("done", {
            creditsUsed,
            versionId: versionRow?.id || null,
            filesChanged: generatedFiles.map((f) => f.path),
          });
        } catch (err) {
          send("error", {
            message:
              err instanceof Error ? err.message : "Generation failed",
          });
        }

        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: err instanceof Error ? err.message : "Server error",
      }),
      { status: 500 }
    );
  }
}
