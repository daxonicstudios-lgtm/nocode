"use client";

import { useRef, useState, useCallback, type ReactNode } from "react";
import { GripVertical } from "lucide-react";
import { useEditorStore } from "@/stores/editor-store";

interface DragDropWrapperProps {
  index: number;
  blockId: string;
  children: ReactNode;
}

export default function DragDropWrapper({
  index,
  blockId,
  children,
}: DragDropWrapperProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [dropPosition, setDropPosition] = useState<"above" | "below" | null>(
    null
  );
  const wrapperRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef<number>(0);
  const touchCurrentIndex = useRef<number>(index);

  const { reorderBlocks, saveBlocks, selectBlock, selectedBlockId } =
    useEditorStore();

  // --- Desktop: HTML5 Drag and Drop ---

  const handleDragStart = useCallback(
    (e: React.DragEvent) => {
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", String(index));
      setIsDragging(true);
    },
    [index]
  );

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    setDropPosition(null);
  }, []);

  const handleDragOver = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";

      const rect = wrapperRef.current?.getBoundingClientRect();
      if (!rect) return;

      const midY = rect.top + rect.height / 2;
      setDropPosition(e.clientY < midY ? "above" : "below");
    },
    []
  );

  const handleDragLeave = useCallback(() => {
    setDropPosition(null);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const fromIndex = Number(e.dataTransfer.getData("text/plain"));
      if (Number.isNaN(fromIndex)) return;

      let toIndex = index;
      if (dropPosition === "below") {
        toIndex = fromIndex < index ? index : index + 1;
      } else {
        toIndex = fromIndex > index ? index : index - 1;
      }

      if (fromIndex !== toIndex && toIndex >= 0) {
        reorderBlocks(fromIndex, toIndex);
        saveBlocks();
      }

      setDropPosition(null);
    },
    [index, dropPosition, reorderBlocks, saveBlocks]
  );

  // --- Mobile: Touch-based drag ---

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
      touchCurrentIndex.current = index;
      setIsDragging(true);
    },
    [index]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      const currentY = e.touches[0].clientY;
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const parent = wrapper.parentElement;
      if (!parent) return;

      const siblings = Array.from(parent.children) as HTMLElement[];
      for (let i = 0; i < siblings.length; i++) {
        const rect = siblings[i].getBoundingClientRect();
        const midY = rect.top + rect.height / 2;
        if (currentY < midY) {
          if (i !== touchCurrentIndex.current) {
            reorderBlocks(touchCurrentIndex.current, i);
            touchCurrentIndex.current = i;
          }
          return;
        }
      }
      // If past all elements, move to end
      const lastIndex = siblings.length - 1;
      if (lastIndex !== touchCurrentIndex.current) {
        reorderBlocks(touchCurrentIndex.current, lastIndex);
        touchCurrentIndex.current = lastIndex;
      }
    },
    [reorderBlocks]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    saveBlocks();
  }, [saveBlocks]);

  const isSelected = selectedBlockId === blockId;

  return (
    <div
      ref={wrapperRef}
      className="group relative"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {/* Drop indicator — above */}
      {dropPosition === "above" && (
        <div className="absolute -top-0.5 left-0 right-0 z-20 h-1 rounded-full bg-blue-500" />
      )}

      {/* Drag handle */}
      <div
        className={`absolute -left-0 top-1/2 z-10 -translate-y-1/2 cursor-grab rounded-r-md bg-primary/80 p-1 text-primary-foreground opacity-0 shadow transition-opacity active:cursor-grabbing group-hover:opacity-100 ${
          isSelected ? "opacity-100" : ""
        }`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={(e) => e.stopPropagation()}
      >
        <GripVertical className="h-4 w-4" />
      </div>

      {/* Block content */}
      <div onClick={() => selectBlock(blockId)}>{children}</div>

      {/* Drop indicator — below */}
      {dropPosition === "below" && (
        <div className="absolute -bottom-0.5 left-0 right-0 z-20 h-1 rounded-full bg-blue-500" />
      )}
    </div>
  );
}
