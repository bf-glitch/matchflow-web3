import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CompatibilityScore } from "./CompatibilityScore"
import { Star, GitFork, Eye, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  project: {
    id: string
    name: string
    logo: string
    description: string
    blockchain: string
    integrations: string[]
    githubStats: {
      stars: number
      forks: number
    }
    compatibilityScore: number
    compatibility: {
      tech: number
      marketing: number
      community: number
    }
  }
  onViewDetails: (projectId: string) => void
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  return (
    <Card className="group relative bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 hover:shadow-glow transition-all duration-300 hover:scale-[1.02] animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src={project.logo} 
                alt={`${project.name} logo`}
                className="w-10 h-10 rounded-lg bg-muted object-cover"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full border-2 border-card" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <Badge variant="secondary" className="text-xs">
                {project.blockchain}
              </Badge>
            </div>
          </div>
          
          <CompatibilityScore 
            score={project.compatibilityScore} 
            size="sm" 
            showLabel={false}
          />
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {project.description}
        </p>

        {/* Compatibility Breakdown */}
        <div className="space-y-2">
          <div className="text-xs font-medium text-muted-foreground">Technology Compatibility</div>
          <div className="flex items-center gap-2">
            <div className="h-1 bg-border rounded-full flex-1 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-1000"
                style={{ width: `${project.compatibility.tech}%` }}
              />
            </div>
            <span className="text-xs text-muted-foreground">{project.compatibility.tech}%</span>
          </div>
        </div>

        {/* Shared Integrations */}
        <div className="space-y-2">
          <div className="text-xs font-medium text-muted-foreground">Shared Integrations</div>
          <div className="flex flex-wrap gap-1">
            {project.integrations.slice(0, 3).map((integration) => (
              <Badge key={integration} variant="outline" className="text-xs">
                {integration}
              </Badge>
            ))}
            {project.integrations.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{project.integrations.length - 3}
              </Badge>
            )}
          </div>
        </div>

        {/* GitHub Stats */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3" />
            <span>{project.githubStats.stars.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <GitFork className="w-3 h-3" />
            <span>{project.githubStats.forks.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            <span>GitHub Stats</span>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button 
          variant="outline" 
          className="w-full gap-2" 
          onClick={() => onViewDetails(project.id)}
        >
          <ExternalLink className="w-4 h-4" />
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}