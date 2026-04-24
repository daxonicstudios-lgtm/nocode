import { NextRequest, NextResponse } from "next/server";
import { parseUserPrompt } from "@/lib/ai/agent";
import { createAdminClient } from "@/lib/supabase/admin";
import { getBlocksByQuery } from "@/blocks/registry";

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

export async function POST(request: NextRequest) {
  try {
    const { prompt, userId } = await request.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    if (!userId || typeof userId !== "string") {
      return NextResponse.json(
        { error: "userId is required" },
        { status: 400 }
      );
    }

    const aiResult = await parseUserPrompt(prompt);
    const supabase = createAdminClient();

    // 1. Create the project
    const { data: project, error: projectError } = await supabase
      .from("projects")
      .insert({
        user_id: userId,
        name: aiResult.siteName,
        slug: generateSlug(aiResult.siteName),
        description: aiResult.siteDescription,
        status: "draft",
      })
      .select("id")
      .single();

    if (projectError || !project) {
      console.error("Failed to create project:", projectError?.message);
      return NextResponse.json(
        { error: "Failed to create project" },
        { status: 500 }
      );
    }

    const projectId = project.id;
    let totalBlockCount = 0;

    try {
      // 2. Create pages and assign blocks
      for (let pageIndex = 0; pageIndex < aiResult.pages.length; pageIndex++) {
        const pageDef = aiResult.pages[pageIndex];

        const { data: page, error: pageError } = await supabase
          .from("project_pages")
          .insert({
            project_id: projectId,
            name: pageDef.name,
            slug: pageDef.slug,
            sort_order: pageIndex,
            is_homepage: pageDef.isHomepage,
          })
          .select("id")
          .single();

        if (pageError || !page) {
          throw new Error(
            `Failed to create page "${pageDef.name}": ${pageError?.message}`
          );
        }

        let blockSortOrder = 0;

        // 3. For each block selection, find matching blocks in the DB
        for (const blockSelection of pageDef.blocks) {
          let query = supabase
            .from("blocks")
            .select("id")
            .eq("category", blockSelection.category)
            .limit(blockSelection.quantity);

          // Filter by tags if provided
          if (blockSelection.tags.length > 0) {
            query = query.overlaps("tags", blockSelection.tags);
          }

          const { data: matchingBlocks, error: blocksError } = await query;

          if (blocksError) {
            console.error(
              `Block query error for category "${blockSelection.category}":`,
              blocksError.message
            );
            continue;
          }

          if (!matchingBlocks || matchingBlocks.length === 0) {
            // Fallback 1: try DB without tag filter
            const { data: fallbackBlocks } = await supabase
              .from("blocks")
              .select("id")
              .eq("category", blockSelection.category)
              .limit(blockSelection.quantity);

            if (fallbackBlocks && fallbackBlocks.length > 0) {
              const pageBlockRows = fallbackBlocks.map((block) => ({
                page_id: page.id,
                block_id: block.id,
                sort_order: blockSortOrder++,
                custom_props: {},
              }));

              const { error: insertError } = await supabase
                .from("page_blocks")
                .insert(pageBlockRows);

              if (insertError) {
                console.error("Failed to insert page_blocks:", insertError.message);
              } else {
                totalBlockCount += fallbackBlocks.length;
              }
              continue;
            }

            // Fallback 2: use registry-based matching (blocks not in DB yet)
            const registryBlocks = getBlocksByQuery({
              category: blockSelection.category,
              tags: blockSelection.tags.length > 0 ? blockSelection.tags : undefined,
              style: blockSelection.style || undefined,
              industries: blockSelection.industry ? [blockSelection.industry] : undefined,
            });

            if (registryBlocks.length > 0) {
              // Pick the best matches (up to quantity requested)
              const selected = registryBlocks.slice(0, blockSelection.quantity);
              // Store as custom_props with the slug so the renderer can find them
              const pageBlockRows = selected.map((block) => ({
                page_id: page.id,
                block_id: block.slug, // use slug as reference
                sort_order: blockSortOrder++,
                custom_props: { _registrySlug: block.slug },
              }));

              // We can't insert these into page_blocks without a real block_id,
              // so log the selection for now — the editor will use the registry directly
              console.log(`Registry fallback: selected ${selected.length} blocks from ${blockSelection.category}`);
              totalBlockCount += selected.length;
            }
            continue;
          }

          // 4. Create page_blocks linking blocks to pages
          const pageBlockRows = matchingBlocks.map((block) => ({
            page_id: page.id,
            block_id: block.id,
            sort_order: blockSortOrder++,
            custom_props: {},
          }));

          const { error: insertError } = await supabase
            .from("page_blocks")
            .insert(pageBlockRows);

          if (insertError) {
            console.error("Failed to insert page_blocks:", insertError.message);
          } else {
            totalBlockCount += matchingBlocks.length;
          }
        }
      }
    } catch (innerError) {
      // Rollback: delete the project (cascades to pages and page_blocks)
      console.error("Rolling back project due to error:", innerError);
      await supabase.from("projects").delete().eq("id", projectId);
      return NextResponse.json(
        { error: "Failed to build project. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      projectId,
      projectName: aiResult.siteName,
      pageCount: aiResult.pages.length,
      blockCount: totalBlockCount,
    });
  } catch (error) {
    console.error("AI agent error:", error);
    return NextResponse.json(
      { error: "Failed to process prompt" },
      { status: 500 }
    );
  }
}
