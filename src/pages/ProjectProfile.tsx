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
  MapPin,
  Verified,
  Plus,
  Twitter,
  MessageCircle,
  Facebook,
  Copy
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
      {/* Back Button */}
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={() => navigate(-1)}
        className="gap-2 mb-4"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </Button>

      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 border border-border/50">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
        
        <div className="relative p-8">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-6">
              <div className="relative">
                <img 
                  src={project.logo} 
                  alt={`${project.name} logo`}
                  className="w-20 h-20 rounded-2xl bg-card/50 object-cover border border-border/50"
                />
                <div className="absolute -top-1 -right-1 bg-success rounded-full p-1">
                  <Verified className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">{project.name}</h1>
                  <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{project.followers.total.toLocaleString()} followers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-success">+{project.followers.growth.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground max-w-2xl leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Request Type: {project.requestType}
                  </Badge>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="text-sm text-muted-foreground mb-1">Compatibility Score</div>
                <CompatibilityScore 
                  score={project.compatibilityScore} 
                  size="lg" 
                  showLabel={false}
                />
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="flex items-center gap-8 mt-8">
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">
                Total Partnership {project.totalPartnerships}
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Active Collabs {project.activeCollabs}
              </Badge>
            </div>
            
            <div className="flex items-center gap-4 ml-auto">
              <Button className="gap-2">
                Apply for Partnership
              </Button>
              <Button variant="outline" className="gap-2">
                Follow Profile
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Partners */}
          <div className="mt-6">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-sm text-muted-foreground">Partners</span>
              <div className="flex items-center gap-2">
                {project.partners.slice(0, 3).map((partner) => (
                  <Badge key={partner} variant="outline" className="text-xs">{partner}</Badge>
                ))}
                <Badge variant="outline" className="text-xs">+{project.partners.length - 3}</Badge>
              </div>
            </div>
          </div>

          {/* Token Info */}
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-border/50">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Copy className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Token Contract Address:</span>
                <code className="text-sm font-mono bg-muted/50 px-2 py-1 rounded">{project.tokenContract}</code>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline">Binance Smart Chain</Badge>
              <Button variant="ghost" size="sm" className="gap-2">
                <Globe className="w-4 h-4" />
                {project.website}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-card/50">
          <TabsTrigger value="overview" className="gap-2">
            <BarChart3 className="w-4 h-4" />
            General Analytics
          </TabsTrigger>
          <TabsTrigger value="social" className="gap-2">
            <MessageCircle className="w-4 h-4" />
            Social Media
          </TabsTrigger>
          <TabsTrigger value="compatibility" className="gap-2">
            <CheckCircle className="w-4 h-4" />
            Compatibility
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            {/* Left Section - Technology & Analytics */}
            <div className="xl:col-span-3 space-y-6">
              {/* Technology Compatibility */}
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Technology Compatibility
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Blockchain Match</span>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span className="text-sm text-success">Compatible</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-3">Shared Integrations</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techCompatibility.sharedIntegrations.map((integration) => (
                          <Badge key={integration} variant="secondary">{integration}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <Card className="bg-primary/5 border-primary/20">
                        <CardContent className="p-4 text-center">
                          <div className="text-2xl font-bold text-primary mb-1">{project.github.stars}</div>
                          <div className="text-xs text-muted-foreground">Github Stars</div>
                        </CardContent>
                      </Card>
                      <Card className="bg-primary/5 border-primary/20">
                        <CardContent className="p-4 text-center">
                          <div className="text-2xl font-bold text-primary mb-1">{project.github.forks}</div>
                          <div className="text-xs text-muted-foreground">Github Forks</div>
                        </CardContent>
                      </Card>
                      <Card className="bg-primary/5 border-primary/20">
                        <CardContent className="p-4 text-center">
                          <div className="text-2xl font-bold text-primary mb-1">{project.github.engagement}%</div>
                          <div className="text-xs text-muted-foreground">Engagement Rate</div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="text-center text-sm text-muted-foreground">
                      {project.github.avgPerPost} Avg. Per Post
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Tech Alignment Score</span>
                        <span className="font-medium">{project.techCompatibility.score}/100</span>
                      </div>
                      <div className="h-2 bg-border/50 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-success to-success/80 transition-all duration-1000"
                          style={{ width: `${project.techCompatibility.score}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Analytics */}
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Google Analytics</CardTitle>
                  <p className="text-sm text-muted-foreground">Linked website performance</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Chart Area */}
                    <div className="h-48 bg-muted/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
                      <p className="text-muted-foreground relative z-10">Analytics Chart Visualization</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-4">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Google Analytics</CardTitle>
                  <p className="text-sm text-muted-foreground">Linked website performance</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{project.analytics.visitors.value.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">Visitors</div>
                    </div>
                    <div className="text-success text-sm">↗ {(project.analytics.visitors.growth * 100).toFixed(0)}%</div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{project.analytics.activeVisitors.value.toLocaleString()} users</div>
                      <div className="text-xs text-muted-foreground">Active Visitors</div>
                    </div>
                    <div className="text-success text-sm">↗ {(project.analytics.activeVisitors.growth * 100).toFixed(0)}%</div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{project.analytics.avgEngagement.value}</div>
                      <div className="text-xs text-muted-foreground">Average Engagement time</div>
                    </div>
                    <div className="text-success text-sm">↗ {(project.analytics.avgEngagement.growth * 100).toFixed(0)}%</div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{project.analytics.topLocation.value}</div>
                      <div className="text-xs text-muted-foreground">Top Location</div>
                    </div>
                    <div className="text-destructive text-sm">↓ {Math.abs(project.analytics.topLocation.growth).toFixed(2)}%</div>
                  </div>
                </CardContent>
              </Card>

              {/* How to Apply */}
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">How to Apply for Partnership</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-medium">1</div>
                      <span>Apply to Collaborate Above</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-medium">2</div>
                      <span>Wait for an email if you match our preference</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-medium">3</div>
                      <span>Complete the onboarding</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-medium">4</div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">Join Team</Badge>
                        <span>and have fun!</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="social" className="space-y-6">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            {/* Main Social Media Performance */}
            <div className="xl:col-span-3">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Social Media Performance</CardTitle>
                  <p className="text-sm text-muted-foreground">Linked website performance</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Top Stats */}
                  <div className="grid grid-cols-4 gap-4">
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-primary mb-1">125K</div>
                        <div className="text-xs text-muted-foreground">Total Followers</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-primary mb-1">15.4K</div>
                        <div className="text-xs text-muted-foreground">Likes (30d)</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-primary mb-1">8.9K</div>
                        <div className="text-xs text-muted-foreground">Comments (30d)</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-primary mb-1">4.6K</div>
                        <div className="text-xs text-muted-foreground">Shares (30d)</div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Sentiment Score */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Sentiment Score</span>
                      <span className="font-medium">32%</span>
                    </div>
                    <div className="h-2 bg-border/50 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-success to-success/80 w-[32%] transition-all duration-1000" />
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="h-48 bg-muted/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
                    <p className="text-muted-foreground relative z-10">Social Media Analytics Chart</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Individual Analytics Sidebar */}
            <div className="space-y-4">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Individual Analytics</CardTitle>
                  <p className="text-sm text-muted-foreground">Linked website performance</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Twitter className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">18.2k</div>
                      <div className="text-xs text-muted-foreground">Twitter</div>
                    </div>
                    <div className="text-success text-sm">↗ 1.20%</div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">1430 users</div>
                      <div className="text-xs text-muted-foreground">Discord</div>
                    </div>
                    <div className="text-success text-sm">↗ 1.20%</div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">$240K</div>
                      <div className="text-xs text-muted-foreground">Token Performance</div>
                    </div>
                    <div className="text-success text-sm">↗ 1.20%</div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Facebook className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">25.4k</div>
                      <div className="text-xs text-muted-foreground">Facebook</div>
                    </div>
                    <div className="text-destructive text-sm">↓ 2.84%</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="compatibility" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                        <span className="font-medium">{value}%</span>
                      </div>
                      <div className="h-2 bg-border/50 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-1000"
                          style={{ width: `${value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Token Performance */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Token Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-4 text-center">
                      <div className="text-lg font-bold text-primary mb-1">{project.tokenPerformance.volume}</div>
                      <div className="text-xs text-muted-foreground">Volume (24h)</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-success/5 border-success/20">
                    <CardContent className="p-4 text-center">
                      <div className="text-lg font-bold text-success mb-1">{project.tokenPerformance.ath}</div>
                      <div className="text-xs text-muted-foreground">ATH</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-destructive/5 border-destructive/20">
                    <CardContent className="p-4 text-center">
                      <div className="text-lg font-bold text-destructive mb-1">{project.tokenPerformance.atl}</div>
                      <div className="text-xs text-muted-foreground">ATL</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-warning/5 border-warning/20">
                    <CardContent className="p-4 text-center">
                      <div className="text-lg font-bold text-warning mb-1">{project.tokenPerformance.currentPrice}</div>
                      <div className="text-xs text-muted-foreground">Current Price</div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-xl font-bold text-primary mb-1">{project.tokenPerformance.marketCap}</div>
                    <div className="text-xs text-muted-foreground">Market Cap</div>
                  </CardContent>
                </Card>

                {/* Active Collaborations */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">🤝 Active Collaborations:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.partners.map((partner, index) => (
                      <div key={partner} className="flex items-center gap-2 bg-muted/20 rounded-full px-3 py-1 text-xs">
                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                          {partner.charAt(0)}
                        </div>
                        <span>{partner}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <div className="space-y-3 pt-4 border-t border-border/50">
                  <div className="space-y-2">
                    <div className="text-sm font-medium">🚀 Call-to-Action (CTA)</div>
                    <p className="text-sm text-muted-foreground">
                      Partner with Mintrise & Shape the Future of Web3 Real Estate!
                    </p>
                  </div>
                  <Button className="w-full">
                    Apply for Partnership
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Not ready yet? Follow Mintrise for updates!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}