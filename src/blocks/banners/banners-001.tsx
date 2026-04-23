"use client";
import { useState } from "react";
import type { BlockProps } from "@/blocks/types";
import { X } from "lucide-react";

export default function Banners001(props: BlockProps) {
  const { theme, heading = "✨ Spring sale — 40% off all annual plans", buttonText = "Claim offer", buttonUrl = "#" } = props;
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="w-full px-5 py-3" style={{ backgroundColor: theme?.primary ?? "#111827", color: "#fff" }}>
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <p className="text-sm flex-1">
          <span className="font-medium">{heading}</span>{" "}
          <a href={buttonUrl} className="underline font-semibold">{buttonText} →</a>
        </p>
        <button onClick={() => setOpen(false)} aria-label="Dismiss">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
