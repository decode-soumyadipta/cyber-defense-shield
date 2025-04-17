
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import ThreatIntelligence from "./pages/ThreatIntelligence";
import VulnerabilityManagement from "./pages/VulnerabilityManagement";
import RemediationPlanning from "./pages/RemediationPlanning";
import SystemConfiguration from "./pages/SystemConfiguration";
import SecurityScanning from "./pages/SecurityScanning";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/threat-intelligence" element={<ThreatIntelligence />} />
          <Route path="/vulnerability-management" element={<VulnerabilityManagement />} />
          <Route path="/remediation-planning" element={<RemediationPlanning />} />
          <Route path="/system-configuration" element={<SystemConfiguration />} />
          <Route path="/security-scanning" element={<SecurityScanning />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
