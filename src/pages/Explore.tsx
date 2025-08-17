import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProjectCard } from "@/components/ProjectCard"
import { CompatibilityScore } from "@/components/CompatibilityScore"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Filter, Sparkles, TrendingUp } from "lucide-react"

// Import logos
import arweaveLogo from "@/assets/arweave-logo.png"
import chainlinkLogo from "@/assets/chainlink-logo.png"
import polygonLogo from "@/assets/polygon-logo.png"
import uniswapLogo from "@/assets/uniswap-logo.png"

const mockProjects = [
  {
    id: "1",
    name: "Arweave",
    logo: arweaveLogo,
    description: "Permanent data storage protocol with pay-once, store-forever model. Building the foundation for a truly decentralized web.",
    blockchain: "Ethereum",
    integrations: ["Chainlink", "Uniswap", "MetaMask"],
    githubStats: { stars: 1247, forks: 342 },
    compatibilityScore: 87,
    compatibility: { tech: 92, marketing: 78, community: 91 }
  },
  {
    id: "2",
    name: "Chainlink",
    logo: chainlinkLogo,
    description: "Decentralized oracle network providing real-world data to smart contracts across multiple blockchains.",
    blockchain: "Ethereum",
    integrations: ["Uniswap", "MetaMask", "Polygon"],
    githubStats: { stars: 2156, forks: 891 },
    compatibilityScore: 95,
    compatibility: { tech: 96, marketing: 89, community: 98 }
  },
  {
    id: "3",
    name: "Polygon",
    logo: polygonLogo,
    description: "Layer 2 scaling solution for Ethereum providing faster and cheaper transactions for DeFi applications.",
    blockchain: "Polygon",
    integrations: ["Chainlink", "Uniswap", "MetaMask"],
    githubStats: { stars: 3421, forks: 1245 },
    compatibilityScore: 82,
    compatibility: { tech: 85, marketing: 76, community: 85 }
  },
  {
    id: "4",
    name: "Uniswap",
    logo: uniswapLogo,
    description: "Leading decentralized exchange protocol enabling automated token trading through liquidity pools.",
    blockchain: "Ethereum",
    integrations: ["Chainlink", "MetaMask", "Polygon"],
    githubStats: { stars: 4567, forks: 2134 },
    compatibilityScore: 78,
    compatibility: { tech: 81, marketing: 72, community: 82 }
  }
]

const suggestedMatches = [
  {
    project: "The Graph",
    score: 95,
    reason: "Strong tech alignment and overlapping DeFi communities.",
    avatar: chainlinkLogo
  },
  {
    project: "Polkadot",
    score: 87,
    reason: "Shared infrastructure focus and developer ecosystem.",
    avatar: polygonLogo
  }
]

export default function Explore() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState({
    projectType: "",
    projectStage: "",
    blockchain: "",
    tokenAvailability: "",
    rewardModel: "",
    developmentFocus: ""
  })

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFilters({
      projectType: "",
      projectStage: "",
      blockchain: "",
      tokenAvailability: "",
      rewardModel: "",
      developmentFocus: ""
    })
  }

  const handleViewDetails = (projectId: string) => {
    navigate(`/project/${projectId}`)
  }

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Explore Web3 Partnerships Tailored to Your Vision
        </h1>
        <p className="text-muted-foreground text-lg">
          Discover, Connect, Collaborate – Find the Perfect Web3 Partnership!
        </p>
      </div>

      {/* AI Suggestions Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* AI Suggested Matches */}
          <Card className="bg-gradient-to-r from-card/50 to-primary/5 border-primary/20 shadow-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                AI-Suggested Partnerships
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {suggestedMatches.map((match, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-card/50 rounded-xl border border-border">
                    <div className="flex items-center gap-4">
                      <img src={match.avatar} alt={match.project} className="w-10 h-10 rounded-lg" />
                      <div>
                        <h4 className="font-semibold text-foreground">{match.project}</h4>
                        <p className="text-sm text-muted-foreground">{match.reason}</p>
                      </div>
                    </div>
                    <CompatibilityScore score={match.score} size="sm" showLabel={false} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Compatibility Score Widget */}
        <Card className="bg-card/50 border-primary/20">
          <CardHeader>
            <CardTitle className="text-center">Compatibility Score</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <CompatibilityScore score={95} size="lg" showLabel={false} />
            <div className="text-center">
              <p className="text-sm font-medium text-success">Based on profile Match</p>
              <p className="text-xs text-muted-foreground mt-1">
                Strong tech alignment and overlapping DeFi communities.
              </p>
            </div>
            <Button variant="hero" className="w-full">
              Finish Profile Setup
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="bg-card/50 border border-border">
        <CardContent className="p-6">
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search projects by name, technology, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background/50 border-border"
              />
            </div>

            {/* Filter Controls */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="space-y-2">
                <Label htmlFor="projectType">Project Type</Label>
                <Select value={filters.projectType} onValueChange={(value) => handleFilterChange("projectType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Metaverse" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="metaverse">Metaverse</SelectItem>
                    <SelectItem value="defi">DeFi</SelectItem>
                    <SelectItem value="nft">NFT</SelectItem>
                    <SelectItem value="gaming">Gaming</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectStage">Project Stage</Label>
                <Select value={filters.projectStage} onValueChange={(value) => handleFilterChange("projectStage", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Idea Stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="idea">Idea Stage</SelectItem>
                    <SelectItem value="development">Development</SelectItem>
                    <SelectItem value="launch">Launch</SelectItem>
                    <SelectItem value="growth">Growth</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="blockchain">Blockchain Network</Label>
                <Select value={filters.blockchain} onValueChange={(value) => handleFilterChange("blockchain", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Ethereum" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ethereum">Ethereum</SelectItem>
                    <SelectItem value="polygon">Polygon</SelectItem>
                    <SelectItem value="arbitrum">Arbitrum</SelectItem>
                    <SelectItem value="optimism">Optimism</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tokenAvailability">Token Availability</Label>
                <Select value={filters.tokenAvailability} onValueChange={(value) => handleFilterChange("tokenAvailability", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="No Token Yet" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No Token Yet</SelectItem>
                    <SelectItem value="planning">Planning Token</SelectItem>
                    <SelectItem value="live">Live Token</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="rewardModel">Reward Model</Label>
                <Select value={filters.rewardModel} onValueChange={(value) => handleFilterChange("rewardModel", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Airdrops" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="airdrops">Airdrops</SelectItem>
                    <SelectItem value="revenue-share">Revenue Share</SelectItem>
                    <SelectItem value="equity">Equity</SelectItem>
                    <SelectItem value="tokens">Tokens</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="developmentFocus">Development Focus</Label>
                <Select value={filters.developmentFocus} onValueChange={(value) => handleFilterChange("developmentFocus", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Web3 Infrastructure" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="infrastructure">Web3 Infrastructure</SelectItem>
                    <SelectItem value="frontend">Frontend</SelectItem>
                    <SelectItem value="backend">Backend</SelectItem>
                    <SelectItem value="fullstack">Full Stack</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Filter Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="hero" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Apply Filter
                </Button>
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear Filter
                </Button>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Refining Results...</span>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>Partners that Match your Profile (Community)</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filter Tags */}
      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
          Trending Now
        </Badge>
        <Badge variant="outline">Recent Partnership</Badge>
        <Badge variant="outline">Socials</Badge>
        <Badge variant="outline">New Projects</Badge>
        <Badge variant="outline">RWA Projects</Badge>
        <Badge variant="outline">Web3 projects</Badge>
        <Badge variant="outline">VCs</Badge>
        <Badge variant="outline">Builders</Badge>
      </div>

      {/* Projects Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            Tech Fit <Badge variant="secondary" className="ml-2">Performance</Badge> <Badge variant="outline" className="ml-1">Marketing</Badge> <Badge variant="outline" className="ml-1">Token Performance</Badge>
          </h2>
          <p className="text-sm text-muted-foreground">1-50 of 1250</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {mockProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="flex justify-center">
        <Button variant="outline" size="lg">
          Load More Projects
        </Button>
      </div>
    </div>
  )
}