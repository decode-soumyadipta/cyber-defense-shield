
import { Shield, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const attacks = [
  { id: 1, type: "SQL Injection", source: "45.33.21.18", timestamp: "2025-04-17 10:23:45", status: "blocked", severity: "high" },
  { id: 2, type: "Brute Force", source: "118.24.57.92", timestamp: "2025-04-17 09:48:12", status: "blocked", severity: "medium" },
  { id: 3, type: "XSS Attack", source: "209.58.128.43", timestamp: "2025-04-17 09:15:33", status: "detected", severity: "high" },
  { id: 4, type: "DDoS Attempt", source: "Multiple", timestamp: "2025-04-17 08:32:17", status: "mitigated", severity: "critical" },
  { id: 5, type: "File Inclusion", source: "87.36.12.204", timestamp: "2025-04-17 07:55:02", status: "blocked", severity: "medium" },
];

export default function RecentAttacksTable() {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "bg-shield-red text-white";
      case "high": return "bg-shield-yellow text-black";
      case "medium": return "bg-shield-blue text-white";
      case "low": return "bg-shield-green text-white";
      default: return "bg-shield-gray text-white";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "blocked": return "bg-shield-green/20 text-shield-green";
      case "mitigated": return "bg-shield-blue/20 text-shield-blue";
      case "detected": return "bg-shield-red/20 text-shield-red";
      default: return "bg-shield-gray/20 text-shield-light-gray";
    }
  };

  return (
    <div className="bg-shield-dark border border-shield-gray rounded-lg shadow-md">
      <div className="flex justify-between items-center p-4 border-b border-shield-gray">
        <h3 className="text-md font-medium text-shield-light-gray">Recent Attack Attempts</h3>
        <button className="text-shield-cyan text-sm hover:underline flex items-center">
          View All <ExternalLink className="ml-1 w-3 h-3" />
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs font-medium text-shield-light-gray uppercase tracking-wider">
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Source</th>
              <th className="px-4 py-3">Time</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Severity</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-shield-gray">
            {attacks.map((attack) => (
              <tr key={attack.id} className="hover:bg-shield-gray/20 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-shield-cyan" />
                    <span>{attack.type}</span>
                  </div>
                </td>
                <td className="px-4 py-3 font-mono text-sm">{attack.source}</td>
                <td className="px-4 py-3 text-sm text-shield-light-gray/70">{attack.timestamp}</td>
                <td className="px-4 py-3">
                  <span className={cn(
                    "px-2 py-1 text-xs rounded-full",
                    getStatusColor(attack.status)
                  )}>
                    {attack.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={cn(
                    "px-2 py-1 text-xs rounded-full",
                    getSeverityColor(attack.severity)
                  )}>
                    {attack.severity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
