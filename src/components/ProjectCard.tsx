import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CompatibilityScore } from "./CompatibilityScore"
import { ExternalLink } from "lucide-react"

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
    socialMedia?: {
      totalFollowers: string
      likes: string
      comments: string
      shares: string
      sentimentScore: number
    }
    marketing?: {
      audienceOverlap: number
      sharedChannels: string[]
      brandToneSimilarity: number
      marketingScore: number
    }
    tokenPerformance?: {
      currentPrice: string
      marketCap: string
      volume24h: string
      ath: string
      atl: string
      compatibilityScore: number
    }
  }
  activeTab?: string
  onViewDetails: (projectId: string) => void
}

export function ProjectCard({ project, activeTab = "tech-fit", onViewDetails }: ProjectCardProps) {
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

        {activeTab === "tech-fit" && (
          <>
            {/* Technology Compatibility */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <span>⚡ Technology Compatibility</span>
              </div>
              
              {/* Blockchain Match */}
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Blockchain Match</span>
                <div className="w-4 h-4 bg-success rounded-full flex items-center justify-center">
                  <span className="text-xs text-success-foreground">✓</span>
                </div>
              </div>

              {/* Shared Integrations */}
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground">Shared Integrations</div>
                <div className="flex flex-wrap gap-1">
                  {project.integrations.slice(0, 3).map((integration) => (
                    <Badge key={integration} variant="outline" className="text-xs">
                      {integration}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* GitHub Stats */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-muted/50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-foreground">{project.githubStats.stars.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">Github Stars</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-foreground">{project.githubStats.forks}</div>
                  <div className="text-xs text-muted-foreground">Github Forks</div>
                </div>
              </div>

              {/* Tech Alignment Score */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Tech Alignment Score</span>
                <span className="text-sm font-medium">{project.compatibility.tech}/100</span>
              </div>
              <div className="h-1 bg-border rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-success to-success transition-all duration-1000"
                  style={{ width: `${project.compatibility.tech}%` }}
                />
              </div>
            </div>
          </>
        )}

        {activeTab === "performance" && project.socialMedia && (
          <>
            {/* Social Media Performance */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <span>⚡ Social Media Performance</span>
              </div>
              
              {/* Total Followers */}
              <div className="bg-muted/50 rounded-lg p-3 text-center mb-3">
                <div className="text-2xl font-bold text-foreground">{project.socialMedia.totalFollowers}</div>
                <div className="text-xs text-muted-foreground">Total Followers</div>
              </div>

              {/* Engagement Stats */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-muted/50 rounded-lg p-2 text-center">
                  <div className="text-sm font-bold text-foreground">{project.socialMedia.likes}</div>
                  <div className="text-xs text-muted-foreground">Likes (30d)</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-2 text-center">
                  <div className="text-sm font-bold text-foreground">{project.socialMedia.comments}</div>
                  <div className="text-xs text-muted-foreground">Comments (30d)</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-2 text-center">
                  <div className="text-sm font-bold text-foreground">{project.socialMedia.shares}</div>
                  <div className="text-xs text-muted-foreground">Shares (30d)</div>
                </div>
              </div>

              {/* Sentiment Score */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Sentiment Score</span>
                <span className="text-sm font-medium">{project.socialMedia.sentimentScore}%</span>
              </div>
              <div className="h-1 bg-border rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-success to-success transition-all duration-1000"
                  style={{ width: `${project.socialMedia.sentimentScore}%` }}
                />
              </div>
            </div>
          </>
        )}

        {activeTab === "marketing" && project.marketing && (
          <>
            {/* Marketing Compatibility */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <span>⚡ Marketing Compatibility</span>
              </div>
              
              {/* Audience Overlap */}
              <div className="bg-muted/50 rounded-lg p-3 text-center mb-3">
                <div className="text-2xl font-bold text-foreground">{project.marketing.audienceOverlap}%</div>
                <div className="text-xs text-muted-foreground">Audience Overlap</div>
              </div>

              {/* Shared Channels */}
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground">Shared Channels</div>
                <div className="flex flex-wrap gap-1">
                  {project.marketing.sharedChannels.map((channel) => (
                    <Badge key={channel} variant="outline" className="text-xs">
                      {channel}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Brand Tone Similarity */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Brand Tone Similarity</span>
                <span className="text-sm font-medium">{project.marketing.brandToneSimilarity}%</span>
              </div>
              <div className="h-1 bg-border rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-success to-success transition-all duration-1000"
                  style={{ width: `${project.marketing.brandToneSimilarity}%` }}
                />
              </div>

              {/* Marketing Score */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Marketing Score</span>
                <span className="text-sm font-medium">{project.marketing.marketingScore}/100</span>
              </div>
              <div className="h-1 bg-border rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-success to-success transition-all duration-1000"
                  style={{ width: `${project.marketing.marketingScore}%` }}
                />
              </div>
            </div>
          </>
        )}

        {activeTab === "token-performance" && project.tokenPerformance && (
          <>
            {/* Token Performance */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <span>📈 Token Performance</span>
              </div>
              
              {/* Price Stats */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-muted/50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-warning">{project.tokenPerformance.currentPrice}</div>
                  <div className="text-xs text-muted-foreground">Current Price</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-foreground">{project.tokenPerformance.marketCap}</div>
                  <div className="text-xs text-muted-foreground">Market Cap</div>
                </div>
              </div>

              {/* Volume and Limits */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-muted/50 rounded-lg p-2 text-center">
                  <div className="text-sm font-bold text-foreground">{project.tokenPerformance.volume24h}</div>
                  <div className="text-xs text-muted-foreground">Volume (24h)</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-2 text-center">
                  <div className="text-sm font-bold text-success">{project.tokenPerformance.ath}</div>
                  <div className="text-xs text-muted-foreground">ATH</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-2 text-center">
                  <div className="text-sm font-bold text-destructive">{project.tokenPerformance.atl}</div>
                  <div className="text-xs text-muted-foreground">ATL</div>
                </div>
              </div>

              {/* Compatibility Score */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-sm text-muted-foreground">Compatibility Score</span>
                </div>
                <span className="text-sm font-medium">{project.tokenPerformance.compatibilityScore}/100</span>
              </div>
            </div>
          </>
        )}
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