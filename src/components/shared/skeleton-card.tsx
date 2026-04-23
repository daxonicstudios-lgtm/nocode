import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>
      </CardHeader>
      <CardContent className="flex-1 space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-2/3" />
        <Skeleton className="h-3 w-1/3 mt-2" />
      </CardContent>
      <CardFooter className="gap-2">
        <Skeleton className="h-3 w-8" />
        <Skeleton className="h-3 w-12" />
      </CardFooter>
    </Card>
  )
}
