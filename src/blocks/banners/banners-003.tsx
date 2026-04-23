"use client";
import { useState } from "react";
import type { BlockProps } from "@/blocks/types";
import { Cookie, X } from "lucide-react";

export default function Banners003(props: BlockProps) {
  const { theme, heading = "We use cookies", bodyText = "We use cookies to improve your experience. Read our privacy policy for details.", buttonText = "Accept", secondaryButtonText = "Decline" } = props;
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm p-5 rounded-xl shadow-xl border" style={{ backgroundColor: theme?.background ?? "#fff", color: theme?.foreground, borderColor: theme?.secondary ?? "#e5e7eb" }}>
      <div className="flex items-start gap-3">
        <Cookie className="w-5 h-5 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <p className="font-semibold text-sm">{heading}</p>
          <p className="mt-1 text-xs opacity-70">{bodyText}</p>
          <div className="mt-4 flex gap-2">
            <button onClick={() => setOpen(false)} className="px-4 py-1.5 rounded-full text-white text-xs font-medium" style={{ backgroundColor: theme?.primary ?? "#000" }}>{buttonText}</button>
            <button onClick={() => setOpen(false)} className="px-4 py-1.5 rounded-full border text-xs" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>{secondaryButtonText}</button>
          </div>
        </div>
        <button onClick={() => setOpen(false)} aria-label="Close"><X className="w-4 h-4 opacity-50" /></button>
      </div>
    </div>
  );
}
