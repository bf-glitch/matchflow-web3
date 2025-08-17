import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Explore from "./pages/Explore";
import ProjectProfile from "./pages/ProjectProfile";
import Matchmaking from "./pages/Matchmaking";
import Approvals from "./pages/Approvals";
import Messages from "./pages/Messages";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Explore />} />
            <Route path="/project/:id" element={<ProjectProfile />} />
            <Route path="/matchmaking" element={<Matchmaking />} />
            <Route path="/approvals" element={<Approvals />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/pricing" element={<div className="p-8 text-center text-muted-foreground">Pricing & Plan - Coming Soon</div>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
