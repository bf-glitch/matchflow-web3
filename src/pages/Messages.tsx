import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  Search, 
  Send, 
  Paperclip, 
  MoreHorizontal,
  CheckCircle,
  Clock,
  Users
} from "lucide-react"

const conversations = [
  {
    id: "1",
    partner: "Chainlink Protocol",
    logo: "/src/assets/chainlink-logo.png",
    status: "Partner",
    lastMessage: "Great! Let's schedule a technical review call next week.",
    timestamp: "2 hours ago",
    unread: 0,
    active: true
  },
  {
    id: "2", 
    partner: "Ocean Protocol",
    logo: "/src/assets/polygon-logo.png",
    status: "Requested",
    lastMessage: "We're interested in exploring data marketplace integration opportunities.",
    timestamp: "1 day ago", 
    unread: 2,
    active: false
  },
  {
    id: "3",
    partner: "Uniswap Labs",
    logo: "/src/assets/uniswap-logo.png", 
    status: "Partner",
    lastMessage: "The liquidity pool integration is working perfectly!",
    timestamp: "3 days ago",
    unread: 0, 
    active: false
  },
  {
    id: "4",
    partner: "Graph Protocol",
    logo: "/src/assets/arweave-logo.png",
    status: "Pending",
    lastMessage: "Thanks for your interest. We'll review your proposal and get back to you.",
    timestamp: "1 week ago",
    unread: 0,
    active: false
  }
]

const currentMessages = [
  {
    id: "1",
    sender: "Chainlink Protocol",
    content: "Hey! We're excited about the potential partnership. Our team has reviewed your oracle integration proposal and we're impressed with the technical approach.",
    timestamp: "10:30 AM",
    isOwn: false
  },
  {
    id: "2", 
    sender: "You",
    content: "Thank you! We believe Chainlink's oracle network would be perfect for our DeFi protocols. When would be a good time to discuss the technical implementation details?",
    timestamp: "10:45 AM", 
    isOwn: true
  },
  {
    id: "3",
    sender: "Chainlink Protocol", 
    content: "We have some availability next week. Would Tuesday or Wednesday work for a technical review call? Our lead engineer Sarah would love to dive into the specifics with your team.",
    timestamp: "11:15 AM",
    isOwn: false
  },
  {
    id: "4",
    sender: "You",
    content: "Wednesday works perfectly! Let me coordinate with our technical team. Should we send over our technical documentation beforehand?",
    timestamp: "11:30 AM",
    isOwn: true
  },
  {
    id: "5",
    sender: "Chainlink Protocol",
    content: "Great! Let's schedule a technical review call next week. Yes, please send the docs over - that would be very helpful for preparation.",
    timestamp: "2:15 PM",
    isOwn: false
  }
]

export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState("1")
  const [searchTerm, setSearchTerm] = useState("")
  const [messageInput, setMessageInput] = useState("")

  const activeConversation = conversations.find(c => c.id === selectedConversation)
  const filteredConversations = conversations.filter(conv => 
    conv.partner.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Partner": return "success"
      case "Requested": return "warning"
      case "Pending": return "secondary"
      default: return "outline"
    }
  }

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // In a real app, this would send the message to the backend
      console.log("Sending message:", messageInput)
      setMessageInput("")
    }
  }

  return (
    <div className="h-[calc(100vh-8rem)] animate-fade-in">
      <div className="flex h-full gap-6">
        {/* Left Sidebar - Conversations List */}
        <Card className="w-80 bg-card/50 backdrop-blur-sm border border-border">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Messages</h2>
              <Badge variant="outline" className="gap-1">
                <Users className="w-3 h-3" />
                {conversations.length}
              </Badge>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[calc(100vh-16rem)]">
              <div className="space-y-1 p-4">
                {filteredConversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation.id)}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      conversation.id === selectedConversation 
                        ? "bg-primary/10 border border-primary/20" 
                        : "hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative">
                        <img 
                          src={conversation.logo}
                          alt={`${conversation.partner} logo`}
                          className="w-10 h-10 rounded-lg bg-muted object-cover"
                        />
                        {conversation.unread > 0 && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-xs text-primary-foreground font-bold">
                              {conversation.unread}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-medium text-sm truncate">{conversation.partner}</h3>
                          <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge 
                            variant={getStatusColor(conversation.status) as any} 
                            className="text-xs"
                          >
                            {conversation.status}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {conversation.lastMessage}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Center - Chat Area */}
        <Card className="flex-1 bg-card/50 backdrop-blur-sm border border-border flex flex-col">
          {activeConversation ? (
            <>
              {/* Chat Header */}
              <CardHeader className="border-b border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={activeConversation.logo}
                      alt={`${activeConversation.partner} logo`}
                      className="w-10 h-10 rounded-lg bg-muted object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{activeConversation.partner}</h3>
                      <div className="flex items-center gap-2">
                        <Badge variant={getStatusColor(activeConversation.status) as any} className="text-xs">
                          {activeConversation.status}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {activeConversation.status === "Partner" ? "Active partnership" : "Partnership discussion"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 p-0">
                <ScrollArea className="h-[calc(100vh-20rem)] p-4">
                  <div className="space-y-4">
                    {currentMessages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}
                      >
                        <div className={`max-w-[70%] ${
                          message.isOwn
                            ? "bg-primary text-primary-foreground" 
                            : "bg-muted"
                        } rounded-lg p-3`}>
                          <p className="text-sm">{message.content}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <span className={`text-xs ${
                              message.isOwn ? "text-primary-foreground/70" : "text-muted-foreground"
                            }`}>
                              {message.timestamp}
                            </span>
                            {message.isOwn && (
                              <CheckCircle className="w-3 h-3 text-primary-foreground/70" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>

              {/* Message Input */}
              <div className="border-t border-border p-4">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Paperclip className="w-4 h-4" />
                  </Button>
                  <Input 
                    placeholder="Type your message..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} disabled={!messageInput.trim()}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-muted-foreground">Select a conversation</h3>
                <p className="text-sm text-muted-foreground">Choose a partner to start messaging</p>
              </div>
            </div>
          )}
        </Card>

        {/* Right Sidebar - Partner Info */}
        <Card className="w-80 bg-card/50 backdrop-blur-sm border border-border">
          <CardHeader>
            <h3 className="font-semibold">Partner Information</h3>
          </CardHeader>
          <CardContent>
            {activeConversation ? (
              <div className="space-y-4">
                <div className="text-center">
                  <img 
                    src={activeConversation.logo}
                    alt={`${activeConversation.partner} logo`}
                    className="w-16 h-16 rounded-xl bg-muted object-cover mx-auto mb-3"
                  />
                  <h4 className="font-semibold">{activeConversation.partner}</h4>
                  <Badge variant={getStatusColor(activeConversation.status) as any} className="mt-1">
                    {activeConversation.status}
                  </Badge>
                </div>

                <div className="space-y-3 pt-4 border-t border-border">
                  <div>
                    <p className="text-sm font-medium">Partnership Status</p>
                    <div className="flex items-center gap-1 mt-1">
                      {activeConversation.status === "Partner" ? (
                        <CheckCircle className="w-4 h-4 text-success" />
                      ) : (
                        <Clock className="w-4 h-4 text-warning" />
                      )}
                      <span className="text-sm text-muted-foreground">
                        {activeConversation.status === "Partner" ? "Active Partnership" : "In Discussion"}
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium">Last Active</p>
                    <p className="text-sm text-muted-foreground">{activeConversation.timestamp}</p>
                  </div>

                  <Button variant="outline" className="w-full gap-2 mt-4">
                    View Profile
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center text-muted-foreground">
                <p className="text-sm">Select a conversation to view partner details</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}