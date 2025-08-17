import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  CheckCircle, 
  Calendar, 
  TrendingUp,
  Users,
  MessageSquare,
  ExternalLink
} from "lucide-react"

const approvedPartnerships = [
  {
    id: "1",
    name: "Chainlink Protocol",
    logo: "/src/assets/chainlink-logo.png",
    description: "Oracle network integration for real-world data",
    approvedAt: "2 days ago",
    status: "Active",
    partnership: "Technical Integration",
    value: "$2.4M TVL"
  },
  {
    id: "2",
    name: "Uniswap Labs", 
    logo: "/src/assets/uniswap-logo.png",
    description: "DEX integration for token swapping",
    approvedAt: "1 week ago",
    status: "Active",
    partnership: "Liquidity Provider",
    value: "$1.8M Volume"
  },
  {
    id: "3",
    name: "Polygon Network",
    logo: "/src/assets/polygon-logo.png", 
    description: "Layer 2 scaling solution partnership",
    approvedAt: "2 weeks ago",
    status: "In Progress",
    partnership: "Infrastructure",
    value: "50K+ Users"
  }
]

const recentEcosystemApprovals = [
  {
    id: "1",
    projectA: "Aave Protocol",
    projectB: "Compound Finance",
    summary: "Aave and Compound have formed a strategic partnership to create cross-protocol yield farming opportunities. This collaboration enables users to leverage assets across both platforms, significantly increasing capital efficiency in the DeFi ecosystem.",
    approvedAt: "3 hours ago",
    category: "DeFi",
    impact: "High"
  },
  {
    id: "2", 
    projectA: "The Graph",
    projectB: "Ocean Protocol",
    summary: "The Graph Protocol partners with Ocean Protocol to create decentralized data indexing marketplace. This partnership combines The Graph's indexing capabilities with Ocean's data marketplace, creating new opportunities for data monetization.",
    approvedAt: "1 day ago",
    category: "Infrastructure", 
    impact: "Medium"
  },
  {
    id: "3",
    projectA: "Arbitrum",
    projectB: "Optimism",
    summary: "Major Layer 2 networks Arbitrum and Optimism announce joint research initiative for Ethereum scaling solutions. This collaboration focuses on improving cross-chain interoperability and reducing transaction costs for users.",
    approvedAt: "2 days ago", 
    category: "Layer 2",
    impact: "High"
  }
]

export default function Approvals() {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High": return "destructive"
      case "Medium": return "warning"
      default: return "secondary"
    }
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Partnership Approvals</h1>
          <p className="text-muted-foreground mt-1">Manage approved partnerships and ecosystem updates</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1">
            <CheckCircle className="w-3 h-3" />
            {approvedPartnerships.length} Active Partnerships
          </Badge>
        </div>
      </div>

      <div className="grid gap-6">
        {/* Your Approved Partnerships */}
        <Card className="bg-card/50 backdrop-blur-sm border border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              Your Approved Partnerships
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {approvedPartnerships.map((partnership) => (
                <div key={partnership.id} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg border border-border">
                  <div className="flex items-center gap-4">
                    <img 
                      src={partnership.logo}
                      alt={`${partnership.name} logo`}
                      className="w-10 h-10 rounded-lg bg-muted object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-foreground">{partnership.name}</h3>
                      <p className="text-sm text-muted-foreground">{partnership.description}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">{partnership.partnership}</Badge>
                        <Badge variant="secondary" className="text-xs bg-success/10 text-success border-success/20">{partnership.status}</Badge>
                        <span className="text-xs text-muted-foreground">Approved {partnership.approvedAt}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-semibold text-primary">{partnership.value}</p>
                      <p className="text-xs text-muted-foreground">Partnership Value</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="gap-1">
                        <MessageSquare className="w-3 h-3" />
                        Message
                      </Button>
                      <Button size="sm" variant="outline" className="gap-1">
                        <ExternalLink className="w-3 h-3" />
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Ecosystem Approvals */}
        <Card className="bg-card/50 backdrop-blur-sm border border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Recent Ecosystem Approvals
            </CardTitle>
            <p className="text-sm text-muted-foreground">Latest partnership announcements across the ecosystem</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentEcosystemApprovals.map((approval) => (
                <div key={approval.id} className="space-y-3 p-4 bg-muted/20 rounded-lg border border-border">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {approval.projectA} × {approval.projectB}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">{approval.category}</Badge>
                        <Badge variant={getImpactColor(approval.impact) as any} className="text-xs">
                          {approval.impact} Impact
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {approval.approvedAt}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {approval.summary}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Users className="w-3 h-3" />
                      Partnership announced {approval.approvedAt}
                    </div>
                    <Button size="sm" variant="outline" className="gap-1">
                      <ExternalLink className="w-3 h-3" />
                      Read More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}