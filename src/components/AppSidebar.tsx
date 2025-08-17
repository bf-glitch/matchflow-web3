import { useState } from "react"
import { 
  Search, 
  Users, 
  CheckCircle, 
  MessageSquare, 
  CreditCard,
  Infinity,
  Settings
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"

const navigationItems = [
  { title: "Explore", url: "/", icon: Search },
  { title: "Matchmaking & Requests", url: "/matchmaking", icon: Users },
  { title: "Partnership Approvals", url: "/approvals", icon: CheckCircle },
  { title: "Messages", url: "/messages", icon: MessageSquare },
  { title: "Pricing & Plan", url: "/pricing", icon: CreditCard, badge: "6D left" },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const collapsed = state === "collapsed"

  const isActive = (path: string) => currentPath === path
  const getNavClasses = (path: string) =>
    isActive(path) 
      ? "bg-gradient-primary text-primary-foreground font-medium shadow-glow" 
      : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-72"} border-r border-border bg-sidebar`}>
      <SidebarHeader className="p-6">
        {!collapsed && (
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                <Infinity className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-success rounded-full border-2 border-sidebar" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">Synqit</h1>
              <p className="text-sm text-muted-foreground">Verifying</p>
            </div>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent className="px-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-12 transition-all duration-300">
                    <NavLink 
                      to={item.url} 
                      end 
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl ${getNavClasses(item.url)}`}
                    >
                      <item.icon className="w-5 h-5" />
                      {!collapsed && (
                        <div className="flex items-center justify-between w-full">
                          <span className="text-sm font-medium">{item.title}</span>
                          {item.badge && (
                            <Badge 
                              variant="secondary" 
                              className="ml-auto text-xs bg-primary/10 text-primary border-primary/20"
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <div className="mt-auto p-4">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border">
              <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                <Settings className="w-4 h-4 text-accent-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">Logout Synqit</p>
                <p className="text-xs text-muted-foreground truncate">Settings & Profile</p>
              </div>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  )
}