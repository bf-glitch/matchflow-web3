import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Explore from "./pages/Explore";
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
            <Route path="/matchmaking" element={<div className="p-8 text-center text-muted-foreground">Matchmaking & Requests - Coming Soon</div>} />
            <Route path="/approvals" element={<div className="p-8 text-center text-muted-foreground">Partnership Approvals - Coming Soon</div>} />
            <Route path="/messages" element={<div className="p-8 text-center text-muted-foreground">Messages - Coming Soon</div>} />
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
