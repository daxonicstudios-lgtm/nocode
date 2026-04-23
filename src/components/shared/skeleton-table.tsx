import { Skeleton } from "@/components/ui/skeleton"

interface SkeletonTableProps {
  rows?: number
  columns?: number
}

export function SkeletonTable({ rows = 5, columns = 4 }: SkeletonTableProps) {
  return (
    <div className="w-full overflow-hidden rounded-lg border">
      <div className="border-b bg-muted/50 px-4 py-3 flex gap-4">
        {Array.from({ length: columns }).map((_, i) => (
          <Skeleton key={i} className="h-3 flex-1" />
        ))}
      </div>
      {Array.from({ length: rows }).map((_, rowIdx) => (
        <div
          key={rowIdx}
          className="flex gap-4 px-4 py-3 border-b last:border-0 items-center"
        >
          {Array.from({ length: columns }).map((_, colIdx) => (
            <Skeleton
              key={colIdx}
              className={`h-3 flex-1 ${colIdx === 0 ? "max-w-[140px]" : ""}`}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
