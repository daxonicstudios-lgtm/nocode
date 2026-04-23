"use client";

import { useState, useEffect, useCallback } from "react";
import { Layers } from "lucide-react";
import { BLOCK_CATEGORIES } from "@/types";
import type { Block } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/shared/empty-state";
import { toast } from "sonner";

const MOCK_BLOCKS: Block[] = [
  {
    id: "1",
    category: "heroes",
    name: "Hero 001",
    slug: "hero-001",
    description: "Centered hero with CTA",
    thumbnail_url: null,
    is_pro: false,
    tags: ["centered", "cta"],
    html_preview: null,
    component_path: "src/blocks/heroes/hero-001.tsx",
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    category: "navbars",
    name: "Navbar 001",
    slug: "navbar-001",
    description: "Simple top navbar",
    thumbnail_url: null,
    is_pro: false,
    tags: ["simple", "top"],
    html_preview: null,
    component_path: "src/blocks/navbars/navbar-001.tsx",
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    category: "pricing",
    name: "Pricing 001",
    slug: "pricing-001",
    description: "3-tier pricing table",
    thumbnail_url: null,
    is_pro: true,
    tags: ["3-tier", "table"],
    html_preview: null,
    component_path: "src/blocks/pricing/pricing-001.tsx",
    created_at: new Date().toISOString(),
  },
  {
    id: "4",
    category: "footers",
    name: "Footer 001",
    slug: "footer-001",
    description: "Multi-column footer",
    thumbnail_url: null,
    is_pro: false,
    tags: ["multi-column"],
    html_preview: null,
    component_path: "src/blocks/footers/footer-001.tsx",
    created_at: new Date().toISOString(),
  },
  {
    id: "5",
    category: "testimonials",
    name: "Testimonials 001",
    slug: "testimonials-001",
    description: "Grid of customer reviews",
    thumbnail_url: null,
    is_pro: true,
    tags: ["grid", "reviews"],
    html_preview: null,
    component_path: "src/blocks/testimonials/testimonials-001.tsx",
    created_at: new Date().toISOString(),
  },
];

function BlockCardSkeleton() {
  return (
    <Card>
      <div className="aspect-video bg-muted rounded-t-xl" />
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-5 w-12 rounded-full" />
        </div>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-3 w-full mb-1" />
        <Skeleton className="h-3 w-2/3 mb-3" />
        <Skeleton className="h-8 w-full rounded-md" />
      </CardContent>
    </Card>
  );
}

export default function AdminComponentsPage() {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [loading, setLoading] = useState(true);
  const [toggling, setToggling] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filterPro, setFilterPro] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchBlocks = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (selectedCategory !== "all") params.set("category", selectedCategory);
      if (filterPro !== "all") params.set("is_pro", filterPro === "pro" ? "true" : "false");
      if (searchQuery) params.set("search", searchQuery);

      const res = await fetch(`/api/admin/blocks?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setBlocks(data);
      } else {
        // API not ready yet — use mock data
        setBlocks(MOCK_BLOCKS);
      }
    } catch {
      setBlocks(MOCK_BLOCKS);
    } finally {
      setLoading(false);
    }
  }, [selectedCategory, filterPro, searchQuery]);

  useEffect(() => {
    fetchBlocks();
  }, [fetchBlocks]);

  const filteredBlocks = blocks.filter((b) => {
    const matchesSearch =
      !searchQuery ||
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || b.category === selectedCategory;
    const matchesPro =
      filterPro === "all" ||
      (filterPro === "pro" && b.is_pro) ||
      (filterPro === "free" && !b.is_pro);
    return matchesSearch && matchesCategory && matchesPro;
  });

  const togglePro = async (block: Block) => {
    setToggling(block.id);
    try {
      const res = await fetch(`/api/admin/blocks`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: block.id, is_pro: !block.is_pro }),
      });
      if (res.ok) {
        setBlocks((prev) =>
          prev.map((b) => (b.id === block.id ? { ...b, is_pro: !b.is_pro } : b))
        );
        toast.success(`${block.name} is now ${block.is_pro ? "free" : "pro"}`);
      } else {
        // Mock toggle while API isn't live
        setBlocks((prev) =>
          prev.map((b) => (b.id === block.id ? { ...b, is_pro: !b.is_pro } : b))
        );
        toast.success(`${block.name} toggled (mock)`);
      }
    } catch {
      toast.error("Failed to update block");
    } finally {
      setToggling(null);
    }
  };

  return (
    <div className="p-4 md:p-6">
      <div className="mb-6 space-y-1">
        <h1 className="text-2xl font-bold">Components</h1>
        <p className="text-sm text-muted-foreground">
          Manage all block components. Toggle pro status, edit, or remove.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search components..."
          className="sm:w-64"
        />

        <Select value={selectedCategory} onValueChange={(v) => setSelectedCategory(v ?? "all")}>
          <SelectTrigger className="sm:w-48">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {BLOCK_CATEGORIES.map((cat) => (
              <SelectItem key={cat.slug} value={cat.slug}>
                {cat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filterPro} onValueChange={(v) => setFilterPro(v ?? "all")}>
          <SelectTrigger className="sm:w-36">
            <SelectValue placeholder="All Plans" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Plans</SelectItem>
            <SelectItem value="free">Free Only</SelectItem>
            <SelectItem value="pro">Pro Only</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Components Grid */}
      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <BlockCardSkeleton key={i} />
          ))}
        </div>
      ) : filteredBlocks.length === 0 ? (
        <EmptyState
          icon={Layers}
          title="No components found"
          description="Start building block components to see them here, or adjust your filters."
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredBlocks.map((block) => (
            <Card key={block.id} className="flex flex-col">
              <div className="aspect-video rounded-t-xl bg-muted flex items-center justify-center">
                <span className="text-xs text-muted-foreground font-mono">{block.slug}</span>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-sm line-clamp-1">{block.name}</CardTitle>
                  <Badge variant={block.is_pro ? "default" : "outline"}>
                    {block.is_pro ? "Pro" : "Free"}
                  </Badge>
                </div>
                <Badge variant="secondary" className="w-fit text-xs">
                  {block.category}
                </Badge>
              </CardHeader>
              <CardContent className="flex-1 pb-4">
                {block.description && (
                  <p className="text-xs text-muted-foreground mb-3">{block.description}</p>
                )}
                <button
                  onClick={() => togglePro(block)}
                  disabled={toggling === block.id}
                  className="w-full h-8 rounded-md border border-input bg-background text-xs font-medium hover:bg-muted transition-colors disabled:opacity-50"
                >
                  {toggling === block.id
                    ? "Updating..."
                    : block.is_pro
                    ? "Make Free"
                    : "Make Pro"}
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
