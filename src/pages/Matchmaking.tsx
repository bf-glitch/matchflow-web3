import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CompatibilityScore } from "@/components/CompatibilityScore"
import { 
  Users, 
  Clock, 
  CheckCircle, 
  X, 
  MessageSquare, 
  TrendingUp,
  ArrowUpRight
} from "lucide-react"

const aiSuggestedMatches = [
  {
    id: "1",
    name: "ChainLink Protocol",
    logo: "/src/assets/chainlink-logo.png",
    description: "Decentralized oracle network providing real-world data to smart contracts",
    compatibilityScore: 94,
    reason: "Strong tech alignment and overlapping DeFi communities",
    blockchain: "Ethereum",
    matchType: "High Priority",
    sharedIntegrations: ["Uniswap", "Compound", "AAVE"]
  },
  {
    id: "2", 
    name: "Polygon Network",
    logo: "/src/assets/polygon-logo.png",
    description: "Layer 2 scaling solution for Ethereum with faster transactions",
    compatibilityScore: 87,
    reason: "Complementary scaling infrastructure and shared developer base",
    blockchain: "Polygon",
    matchType: "Medium Priority",
    sharedIntegrations: ["MetaMask", "OpenSea", "QuickSwap"]
  },
  {
    id: "3",
    name: "Uniswap Labs",
    logo: "/src/assets/uniswap-logo.png", 
    description: "Leading decentralized exchange protocol on Ethereum",
    compatibilityScore: 82,
    reason: "Strong DeFi focus and liquidity partnership potential",
    blockchain: "Ethereum",
    matchType: "Medium Priority",
    sharedIntegrations: ["1inch", "Balancer", "Curve"]
  }
]

const incomingRequests = [
  {
    id: "1",
    name: "Ocean Protocol",
    logo: "/src/assets/chainlink-logo.png",
    description: "Data marketplace protocol for AI and data sharing",
    requestedAt: "2 hours ago",
    status: "pending",
    compatibilityScore: 76
  },
  {
    id: "2",
    name: "Graph Protocol", 
    logo: "/src/assets/polygon-logo.png",
    description: "Indexing protocol for querying blockchain data",
    requestedAt: "1 day ago",
    status: "pending",
    compatibilityScore: 89
  }
]

const outgoingRequests = [
  {
    id: "1",
    name: "Compound Finance",
    logo: "/src/assets/uniswap-logo.png",
    description: "Algorithmic money market protocol",
    requestedAt: "3 days ago", 
    status: "approved",
    compatibilityScore: 91
  },
  {
    id: "2",
    name: "Synthetix",
    logo: "/src/assets/arweave-logo.png",
    description: "Synthetic asset protocol on Ethereum",
    requestedAt: "5 days ago",
    status: "rejected", 
    compatibilityScore: 67
  }
]

export default function Matchmaking() {
  const [activeTab, setActiveTab] = useState("suggestions")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved": return "success"
      case "rejected": return "destructive"
      default: return "warning"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved": return <CheckCircle className="w-4 h-4" />
      case "rejected": return <X className="w-4 h-4" />
      default: return <Clock className="w-4 h-4" />
    }
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Matchmaking & Requests</h1>
          <p className="text-muted-foreground mt-1">Discover and manage partnership opportunities</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1">
            <TrendingUp className="w-3 h-3" />
            12 Active Matches
          </Badge>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="suggestions">AI Suggestions</TabsTrigger>
          <TabsTrigger value="incoming">Incoming Requests</TabsTrigger>
          <TabsTrigger value="outgoing">Outgoing Requests</TabsTrigger>
        </TabsList>

        <TabsContent value="suggestions" className="space-y-6">
          <div className="grid gap-6">
            {aiSuggestedMatches.map((match) => (
              <Card key={match.id} className="group bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <img 
                        src={match.logo}
                        alt={`${match.name} logo`}
                        className="w-12 h-12 rounded-lg bg-muted object-cover"
                      />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold text-foreground">{match.name}</h3>
                          <Badge variant={match.matchType === "High Priority" ? "default" : "secondary"}>
                            {match.matchType}
                          </Badge>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {match.blockchain}
                        </Badge>
                      </div>
                    </div>
                    
                    <CompatibilityScore 
                      score={match.compatibilityScore} 
                      size="md" 
                      showLabel={false}
                    />
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{match.description}</p>
                  
                  <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                    <p className="text-sm text-primary font-medium">
                      {match.reason}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-2">Shared Integrations</p>
                    <div className="flex flex-wrap gap-1">
                      {match.sharedIntegrations.map((integration) => (
                        <Badge key={integration} variant="outline" className="text-xs">
                          {integration}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button className="flex-1 gap-2">
                      <Users className="w-4 h-4" />
                      Request Partnership
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <ArrowUpRight className="w-4 h-4" />
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="incoming" className="space-y-6">
          <div className="grid gap-4">
            {incomingRequests.map((request) => (
              <Card key={request.id} className="bg-card/50 backdrop-blur-sm border border-border">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <img 
                        src={request.logo}
                        alt={`${request.name} logo`}
                        className="w-10 h-10 rounded-lg bg-muted object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-foreground">{request.name}</h3>
                        <p className="text-sm text-muted-foreground">{request.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">Requested {request.requestedAt}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <CompatibilityScore 
                        score={request.compatibilityScore} 
                        size="sm" 
                        showLabel={false}
                      />
                      <div className="flex gap-2">
                        <Button size="sm" className="gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Accept
                        </Button>
                        <Button size="sm" variant="outline" className="gap-1">
                          <X className="w-3 h-3" />
                          Decline
                        </Button>
                        <Button size="sm" variant="outline" className="gap-1">
                          <MessageSquare className="w-3 h-3" />
                          Message
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="outgoing" className="space-y-6">
          <div className="grid gap-4">
            {outgoingRequests.map((request) => (
              <Card key={request.id} className="bg-card/50 backdrop-blur-sm border border-border">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <img 
                        src={request.logo}
                        alt={`${request.name} logo`}
                        className="w-10 h-10 rounded-lg bg-muted object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-foreground">{request.name}</h3>
                        <p className="text-sm text-muted-foreground">{request.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">Requested {request.requestedAt}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <CompatibilityScore 
                        score={request.compatibilityScore} 
                        size="sm" 
                        showLabel={false}
                      />
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={getStatusColor(request.status) as any}
                          className="gap-1 capitalize"
                        >
                          {getStatusIcon(request.status)}
                          {request.status}
                        </Badge>
                        <Button size="sm" variant="outline" className="gap-1">
                          <MessageSquare className="w-3 h-3" />
                          Message
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}