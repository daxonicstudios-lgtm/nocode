"use client";

import { useState } from "react";
import { BLOCK_CATEGORIES } from "@/types";

export default function AdminComponentsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filterPro, setFilterPro] = useState<"all" | "free" | "pro">("all");
  const [searchQuery, setSearchQuery] = useState("");

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
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search components..."
          className="h-9 rounded-md border border-input bg-background px-3 text-sm sm:w-64"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="h-9 rounded-md border border-input bg-background px-3 text-sm"
        >
          <option value="all">All Categories</option>
          {BLOCK_CATEGORIES.map((cat) => (
            <option key={cat.slug} value={cat.slug}>
              {cat.name}
            </option>
          ))}
        </select>

        <select
          value={filterPro}
          onChange={(e) =>
            setFilterPro(e.target.value as "all" | "free" | "pro")
          }
          className="h-9 rounded-md border border-input bg-background px-3 text-sm"
        >
          <option value="all">All Plans</option>
          <option value="free">Free Only</option>
          <option value="pro">Pro Only</option>
        </select>
      </div>

      {/* Components Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Empty state */}
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center sm:col-span-2 lg:col-span-3 xl:col-span-4">
          <p className="text-sm text-muted-foreground">
            No components found. Start building block components to see them
            here.
          </p>
        </div>
      </div>
    </div>
  );
}
