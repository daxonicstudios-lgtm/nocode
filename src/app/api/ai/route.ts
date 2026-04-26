import { NextRequest, NextResponse } from "next/server";
import { parseUserPrompt } from "@/lib/ai/agent";
import { createAdminClient } from "@/lib/supabase/admin";
import { BLOCK_METADATA, type BlockMetaLite } from "@/blocks/metadata";

function generateSlug(name: string): string {
  const base = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 50);
  const suffix = Math.random().toString(36).slice(2, 8);
  return `${base}-${suffix}`;
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Smart block selection with cascading fallback.
 * Tries industry-specific → tag-matched → style-matched → any.
 */
function selectBlocks(
  category: string,
  tags: string[],
  industry: string,
  style: string,
  quantity: number
): string[] {
  const byCategory = BLOCK_METADATA.filter((b) => b.category === category);
  if (byCategory.length === 0) return [];

  // 1. Exact: category + industry match
  if (industry) {
    const industryMatches = byCategory.filter(
      (b) => b.industries.length > 0 && b.industries.some((ind) => ind === industry || industry.includes(ind) || ind.includes(industry))
    );
    if (industryMatches.length >= quantity) {
      return shuffle(industryMatches).slice(0, quantity).map((b) => b.slug);
    }
    if (industryMatches.length > 0) {
      // Partial match — use what we have + fill from tag matches
      const slugs = industryMatches.map((b) => b.slug);
      const remaining = quantity - slugs.length;
      const tagMatches = byCategory.filter(
        (b) => !slugs.includes(b.slug) && tags.length > 0 && b.tags.some((t) => tags.includes(t))
      );
      slugs.push(...shuffle(tagMatches).slice(0, remaining).map((b) => b.slug));
      if (slugs.length >= quantity) return slugs.slice(0, quantity);
    }
  }

  // 2. Tag match: category + any tag overlap
  if (tags.length > 0) {
    const tagMatches = byCategory.filter(
      (b) => b.tags.some((t) => tags.some((qt) => t.includes(qt) || qt.includes(t)))
    );
    if (tagMatches.length >= quantity) {
      return shuffle(tagMatches).slice(0, quantity).map((b) => b.slug);
    }
  }

  // 3. Style match
  if (style) {
    const styleMatches = byCategory.filter((b) => b.style === style);
    if (styleMatches.length >= quantity) {
      return shuffle(styleMatches).slice(0, quantity).map((b) => b.slug);
    }
  }

  // 4. Last resort: random from category
  return shuffle(byCategory).slice(0, quantity).map((b) => b.slug);
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export async function POST(request: NextRequest) {
  try {
    const { prompt, userId } = await request.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }
    if (!userId || typeof userId !== "string") {
      return NextResponse.json({ error: "userId is required" }, { status: 400 });
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
      return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
    }

    const projectId = project.id;
    let totalBlockCount = 0;

    try {
      // 2. Create pages and assign blocks using METADATA (not Supabase blocks table)
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
          throw new Error(`Failed to create page "${pageDef.name}": ${pageError?.message}`);
        }

        let blockSortOrder = 0;

        for (const blockSelection of pageDef.blocks) {
          // Use metadata-based smart selection
          const selectedSlugs = selectBlocks(
            blockSelection.category,
            blockSelection.tags,
            blockSelection.industry || aiResult.industry,
            blockSelection.style || aiResult.style,
            blockSelection.quantity
          );

          if (selectedSlugs.length === 0) {
            console.warn(`No blocks found for category "${blockSelection.category}"`);
            continue;
          }

          // Look up UUIDs from Supabase blocks table by slug
          const { data: dbBlocks } = await supabase
            .from("blocks")
            .select("id, slug")
            .in("slug", selectedSlugs);

          const slugToId = new Map<string, string>();
          if (dbBlocks) {
            for (const b of dbBlocks) {
              slugToId.set(b.slug, b.id);
            }
          }

          for (const slug of selectedSlugs) {
            const blockId = slugToId.get(slug);
            if (!blockId) {
              console.warn(`Block ${slug} not found in DB, skipping`);
              continue;
            }

            const { error: insertError } = await supabase
              .from("page_blocks")
              .insert({
                page_id: page.id,
                block_id: blockId,
                sort_order: blockSortOrder++,
                custom_props: { _registrySlug: slug },
              });

            if (insertError) {
              console.error(`Failed to insert page_block ${slug}:`, insertError.message);
            } else {
              totalBlockCount++;
            }
          }
        }
      }
    } catch (innerError) {
      console.error("Rolling back project due to error:", innerError);
      await supabase.from("projects").delete().eq("id", projectId);
      return NextResponse.json({ error: "Failed to build project. Please try again." }, { status: 500 });
    }

    return NextResponse.json({
      projectId,
      projectName: aiResult.siteName,
      pageCount: aiResult.pages.length,
      blockCount: totalBlockCount,
    });
  } catch (error) {
    console.error("AI agent error:", error);
    return NextResponse.json({ error: "Failed to process prompt" }, { status: 500 });
  }
}
