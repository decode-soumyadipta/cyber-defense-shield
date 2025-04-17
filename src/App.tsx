
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ThreatIntelligence from "./pages/ThreatIntelligence";
import VulnerabilityManagement from "./pages/VulnerabilityManagement";
import SecurityScanning from "./pages/SecurityScanning";
import RemediationPlanning from "./pages/RemediationPlanning";
import SystemConfiguration from "./pages/SystemConfiguration";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/threats" element={<ThreatIntelligence />} />
          <Route path="/vulnerabilities" element={<VulnerabilityManagement />} />
          <Route path="/scanning" element={<SecurityScanning />} />
          <Route path="/remediation" element={<RemediationPlanning />} />
          <Route path="/settings" element={<SystemConfiguration />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
