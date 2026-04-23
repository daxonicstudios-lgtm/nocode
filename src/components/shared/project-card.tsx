import Link from "next/link"
import { formatDistanceToNow } from "date-fns"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/types"

const statusVariant: Record<string, "default" | "secondary" | "outline"> = {
  published: "default",
  pending: "secondary",
  draft: "outline",
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="line-clamp-1">{project.name}</CardTitle>
          <Badge variant={statusVariant[project.status] ?? "outline"}>
            {project.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        {project.description && (
          <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
        )}
        <p className="text-xs text-muted-foreground mt-2">
          Updated {formatDistanceToNow(new Date(project.updated_at), { addSuffix: true })}
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Link
          href={`/editor/${project.id}`}
          className="text-xs font-medium text-primary hover:underline"
        >
          Edit
        </Link>
        <span className="text-muted-foreground">·</span>
        <Link
          href={`/preview/${project.id}`}
          className="text-xs font-medium text-muted-foreground hover:text-foreground hover:underline"
        >
          Preview
        </Link>
      </CardFooter>
    </Card>
  )
}
