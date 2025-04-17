
import AppLayout from "@/components/layout/AppLayout";
import { Search, Filter, RefreshCw, Download } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock threat intelligence data
const threats = [
  {
    id: "CVE-2025-1234",
    name: "Apache Log4j Remote Code Execution",
    severity: "critical",
    type: "Remote Code Execution",
    source: "NVD",
    affected: "Log4j 2.0-2.14.1",
    description: "A remote attacker can exploit this vulnerability to execute arbitrary code on affected systems.",
    published: "2025-04-10T14:23:00Z",
    updated: "2025-04-15T09:12:00Z"
  },
  {
    id: "CVE-2025-3456",
    name: "Microsoft Exchange Server Privilege Escalation",
    severity: "high",
    type: "Privilege Escalation",
    source: "Microsoft",
    affected: "Exchange Server 2019, 2016",
    description: "Allows an authenticated attacker to escalate privileges on affected Exchange Server installations.",
    published: "2025-04-08T16:45:00Z",
    updated: "2025-04-14T11:33:00Z"
  },
  {
    id: "CVE-2025-7890",
    name: "OpenSSL TLS Certificate Verification Bypass",
    severity: "high",
    type: "Security Bypass",
    source: "OpenSSL",
    affected: "OpenSSL 3.2.0-3.2.3",
    description: "A vulnerability in the TLS certificate verification can allow an attacker to bypass certificate validation.",
    published: "2025-04-05T08:12:00Z",
    updated: "2025-04-12T15:47:00Z"
  },
  {
    id: "CVE-2025-5678",
    name: "Docker Container Escape Vulnerability",
    severity: "critical",
    type: "Container Escape",
    source: "Docker",
    affected: "Docker CE 24.0.0-24.2.1",
    description: "Allows attackers to escape container isolation and potentially gain access to the host system.",
    published: "2025-04-01T10:35:00Z",
    updated: "2025-04-11T08:22:00Z"
  },
  {
    id: "CVE-2025-9012",
    name: "WordPress Plugin SQL Injection",
    severity: "medium",
    type: "SQL Injection",
    source: "WPScan",
    affected: "Contact Form 7 v5.8.2 and below",
    description: "Unauthenticated SQL injection vulnerability in a popular WordPress plugin.",
    published: "2025-03-28T13:11:00Z",
    updated: "2025-04-09T16:05:00Z"
  }
];

export default function ThreatIntelligence() {
  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "critical":
        return <span className="px-2 py-0.5 bg-shield-red text-white text-xs rounded-full">Critical</span>;
      case "high":
        return <span className="px-2 py-0.5 bg-shield-yellow text-black text-xs rounded-full">High</span>;
      case "medium":
        return <span className="px-2 py-0.5 bg-shield-blue text-white text-xs rounded-full">Medium</span>;
      case "low":
        return <span className="px-2 py-0.5 bg-shield-green text-white text-xs rounded-full">Low</span>;
      default:
        return <span className="px-2 py-0.5 bg-shield-gray text-white text-xs rounded-full">Unknown</span>;
    }
  };

  return (
    <AppLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-shield-light-gray">Threat Intelligence</h1>
        <p className="text-shield-light-gray/70">Monitor and analyze emerging cybersecurity threats</p>
      </div>

      <div className="bg-shield-dark border border-shield-gray rounded-lg shadow-md mb-6">
        <div className="p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-2/3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-shield-light-gray opacity-50" />
            <input
              type="text"
              placeholder="Search CVEs, vulnerabilities, exploits..."
              className="pl-10 pr-4 py-2 w-full rounded-md bg-shield-gray text-shield-light-gray focus:outline-none focus:ring-1 focus:ring-shield-cyan"
            />
          </div>

          <div className="flex space-x-2 w-full md:w-auto">
            <button className="flex items-center px-4 py-2 bg-shield-gray hover:bg-shield-gray/80 rounded-md">
              <Filter className="w-4 h-4 mr-2" />
              <span>Filters</span>
            </button>
            <button className="flex items-center px-4 py-2 bg-shield-gray hover:bg-shield-gray/80 rounded-md">
              <RefreshCw className="w-4 h-4 mr-2" />
              <span>Refresh</span>
            </button>
            <button className="flex items-center px-4 py-2 bg-shield-cyan text-shield-darker hover:bg-shield-cyan/80 rounded-md">
              <Download className="w-4 h-4 mr-2" />
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-shield-dark border border-shield-gray rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-xs font-medium text-shield-light-gray uppercase tracking-wider border-b border-shield-gray">
                <th className="px-4 py-3">CVE ID</th>
                <th className="px-4 py-3">Vulnerability</th>
                <th className="px-4 py-3">Severity</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Affected Systems</th>
                <th className="px-4 py-3">Published</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-shield-gray">
              {threats.map((threat) => (
                <tr key={threat.id} className="hover:bg-shield-gray/20 transition-colors">
                  <td className="px-4 py-3 font-mono text-sm text-shield-cyan">{threat.id}</td>
                  <td className="px-4 py-3">
                    <div>
                      <div className="font-medium">{threat.name}</div>
                      <div className="text-xs text-shield-light-gray/70 mt-1 max-w-sm truncate">{threat.description}</div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    {getSeverityBadge(threat.severity)}
                  </td>
                  <td className="px-4 py-3 text-sm">{threat.type}</td>
                  <td className="px-4 py-3 text-sm font-mono">{threat.affected}</td>
                  <td className="px-4 py-3 text-sm text-shield-light-gray/70">
                    {new Date(threat.published).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex space-x-2">
                      <button className="p-1 rounded-full hover:bg-shield-gray/40">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-shield-cyan">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                      </button>
                      <button className="p-1 rounded-full hover:bg-shield-gray/40">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-shield-light-gray">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 8v8"></path>
                          <path d="M8 12h8"></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppLayout>
  );
}
