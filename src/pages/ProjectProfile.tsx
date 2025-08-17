import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CompatibilityScore } from "@/components/CompatibilityScore"
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  Github, 
  Globe, 
  BarChart3,
  Clock,
  MapPin
} from "lucide-react"

// Mock project data - in real app this would come from API
const getProjectData = (id: string) => ({
  id,
  name: "We3oost",
  logo: "/src/assets/arweave-logo.png",
  description: "Arweave is a decentralized storage protocol that offers permanent and tamper-proof data storage on the blockchain. Unlike traditional cloud services, Arweave enables users to store information permanently with a single upfront payment, ensuring data persistence, security, and accessibility over time.",
  blockchain: "Arweave",
  website: "https://www.we3oost.org",
  followers: { total: 61200, growth: 13300 },
  requestType: "Partnership",
  totalPartnerships: 180,
  activeCollabs: 180,
  partners: ["Chainlink", "Uniswap", "MetaMask", "Polygon"],
  tokenContract: "0xKdRbbb...nm33kK3",
  binanceSmartChain: true,
  compatibilityScore: 46,
  compatibility: {
    tech: 87,
    marketing: 65,
    community: 42,
    performance: 78
  },
  analytics: {
    visitors: { value: 18200, growth: 1.2 },
    activeVisitors: { value: 1430, growth: 1.2 },
    avgEngagement: { value: "12M 12S", growth: 1.2 },
    topLocation: { value: "USA", growth: -2.84 }
  },
  github: {
    stars: 1247,
    forks: 342,
    engagement: 4.2,
    avgPerPost: 234
  },
  tokenPerformance: {
    volume: "$12.5M",
    ath: "$4.2",
    atl: "$0.15",
    currentPrice: "$2.45",
    marketCap: "$950M"
  },
  techCompatibility: {
    blockchainMatch: true,
    sharedIntegrations: ["Chainlink", "Uniswap", "MetaMask"],
    score: 87
  }
})

export default function ProjectProfile() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("overview")
  
  const project = getProjectData(id || "we3oost")

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate(-1)}
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <h1 className="text-2xl font-bold text-foreground">Project Profile</h1>
      </div>

      {/* Project Summary Card */}
      <Card className="bg-card/50 backdrop-blur-sm border border-border">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img 
                  src={project.logo} 
                  alt={`${project.name} logo`}
                  className="w-16 h-16 rounded-xl bg-muted object-cover"
                />
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-success rounded-full border-2 border-card" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl font-bold text-foreground">{project.name}</h2>
                  <Badge variant="secondary">{project.blockchain}</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{project.followers.total.toLocaleString()} followers</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>{project.followers.growth.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Globe className="w-4 h-4" />
                    Website
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <CompatibilityScore 
                score={project.compatibilityScore} 
                size="lg" 
                showLabel={true}
              />
              <Button className="gap-2">
                Apply for Partnership
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="gap-1">
                <CheckCircle className="w-3 h-3" />
                Request Type: {project.requestType}
              </Badge>
            </div>
            <div className="flex gap-2">
              <Badge variant="secondary">Total Partnership {project.totalPartnerships}</Badge>
              <Badge variant="secondary">Active Collabs {project.activeCollabs}</Badge>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm text-muted-foreground mb-2">Partners</p>
            <div className="flex gap-2">
              {project.partners.map((partner) => (
                <Badge key={partner} variant="outline">{partner}</Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4 p-4 bg-muted/20 rounded-lg">
            <div>
              <p className="text-sm text-muted-foreground">Token Contract Address</p>
              <p className="font-mono text-sm">{project.tokenContract}</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Binance Smart Chain</Badge>
              <Badge variant="secondary">{project.website}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Analytics Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">General Analytics</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="compatibility">Compatibility</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Google Analytics */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <BarChart3 className="w-5 h-5" />
                  Google Analytics
                </CardTitle>
                <p className="text-sm text-muted-foreground">Linked website performance</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Users className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-lg font-bold">{project.analytics.visitors.value.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">Visitors</p>
                      </div>
                      <div className="ml-auto text-success text-sm">↗ {(project.analytics.visitors.growth * 100).toFixed(0)}%</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Users className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-lg font-bold">{project.analytics.activeVisitors.value.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">Active Visitors</p>
                      </div>
                      <div className="ml-auto text-success text-sm">↗ {(project.analytics.activeVisitors.growth * 100).toFixed(0)}%</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Clock className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-lg font-bold">{project.analytics.avgEngagement.value}</p>
                        <p className="text-xs text-muted-foreground">Average Engagement time</p>
                      </div>
                      <div className="ml-auto text-success text-sm">↗ {(project.analytics.avgEngagement.growth * 100).toFixed(0)}%</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-lg font-bold">{project.analytics.topLocation.value}</p>
                        <p className="text-xs text-muted-foreground">Top Location</p>
                      </div>
                      <div className="ml-auto text-destructive text-sm">↓ {Math.abs(project.analytics.topLocation.growth).toFixed(2)}%</div>
                    </div>
                  </div>
                </div>

                {/* Mock chart area */}
                <div className="h-40 bg-muted/30 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Analytics Chart Visualization</p>
                </div>
              </CardContent>
            </Card>

            {/* Token Performance */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrendingUp className="w-5 h-5" />
                  Token Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <p className="text-lg font-bold text-primary">{project.tokenPerformance.volume}</p>
                    <p className="text-xs text-muted-foreground">Volume (24h)</p>
                  </div>
                  <div className="p-3 bg-success/10 rounded-lg">
                    <p className="text-lg font-bold text-success">{project.tokenPerformance.ath}</p>
                    <p className="text-xs text-muted-foreground">ATH</p>
                  </div>
                  <div className="p-3 bg-destructive/10 rounded-lg">
                    <p className="text-lg font-bold text-destructive">{project.tokenPerformance.atl}</p>
                    <p className="text-xs text-muted-foreground">ATL</p>
                  </div>
                  <div className="p-3 bg-warning/10 rounded-lg">
                    <p className="text-lg font-bold text-warning">{project.tokenPerformance.currentPrice}</p>
                    <p className="text-xs text-muted-foreground">Current Price</p>
                  </div>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg">
                  <p className="text-xl font-bold text-primary">{project.tokenPerformance.marketCap}</p>
                  <p className="text-xs text-muted-foreground">Market Cap</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="social" className="space-y-6">
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Social Media Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center p-8 text-muted-foreground">
                Social media analytics coming soon...
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compatibility" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Technology Compatibility */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Technology Compatibility
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Blockchain Match</span>
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Shared Integrations</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techCompatibility.sharedIntegrations.map((integration) => (
                      <Badge key={integration} variant="outline">{integration}</Badge>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-center">
                    <p className="text-lg font-bold text-primary">{project.github.stars}</p>
                    <p className="text-xs text-muted-foreground">Github Stars</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-lg text-center">
                    <p className="text-lg font-bold text-primary">{project.github.forks}</p>
                    <p className="text-xs text-muted-foreground">Github Forks</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-lg text-center">
                    <p className="text-lg font-bold text-primary">{project.github.engagement}%</p>
                    <p className="text-xs text-muted-foreground">Engagement Rate</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Tech Alignment Score</span>
                    <span>{project.techCompatibility.score}/100</span>
                  </div>
                  <div className="h-2 bg-border rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-success to-success-glow transition-all duration-1000"
                      style={{ width: `${project.techCompatibility.score}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Compatibility Scorecard */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Compatibility Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-center">
                  <CompatibilityScore 
                    score={project.compatibilityScore} 
                    size="lg" 
                    showLabel={true}
                  />
                </div>

                <div className="space-y-4">
                  {Object.entries(project.compatibility).map(([key, value]) => (
                    <div key={key} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="capitalize">{key} Compatibility</span>
                        <span>{value}%</span>
                      </div>
                      <div className="h-2 bg-border rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-1000"
                          style={{ width: `${value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-muted/20 rounded-lg">
                  <h4 className="font-medium mb-2">How to Apply for Partnership</h4>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li>1. Apply to Collaborate Above</li>
                    <li>2. Wait for an email if you match our preference</li>
                    <li>3. Complete the onboarding</li>
                    <li>4. <Badge variant="secondary">Join Team</Badge> and have fun!</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}