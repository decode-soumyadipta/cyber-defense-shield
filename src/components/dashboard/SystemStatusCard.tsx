
import { CheckCircle, Activity, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface SystemStatus {
  name: string;
  status: "operational" | "degraded" | "outage";
  latency?: number;
}

const systems: SystemStatus[] = [
  { name: "Intrusion Detection", status: "operational", latency: 12 },
  { name: "Vulnerability Scanner", status: "operational", latency: 28 },
  { name: "Threat Intelligence", status: "degraded", latency: 145 },
  { name: "Firewall System", status: "operational", latency: 8 },
  { name: "Log Management", status: "operational", latency: 32 },
];

export default function SystemStatusCard() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="w-4 h-4 text-shield-green" />;
      case "degraded":
        return <Activity className="w-4 h-4 text-shield-yellow" />;
      case "outage":
        return <AlertCircle className="w-4 h-4 text-shield-red" />;
    }
  };

  const getLatencyColor = (latency: number) => {
    if (latency < 30) return "text-shield-green";
    if (latency < 100) return "text-shield-yellow";
    return "text-shield-red";
  };

  return (
    <div className="bg-shield-dark border border-shield-gray rounded-lg shadow-md">
      <div className="p-4 border-b border-shield-gray">
        <h3 className="text-md font-medium text-shield-light-gray">System Status</h3>
      </div>
      <div className="divide-y divide-shield-gray">
        {systems.map((system, index) => (
          <div key={index} className="flex justify-between items-center p-3 hover:bg-shield-gray/20">
            <div className="flex items-center">
              {getStatusIcon(system.status)}
              <span className="ml-2 text-sm">{system.name}</span>
            </div>
            {system.latency && (
              <div className={cn("text-sm flex items-center", getLatencyColor(system.latency))}>
                {system.latency} ms
                <Activity className="ml-1 w-3 h-3" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="p-3 text-center bg-shield-darker">
        <span className="text-xs text-shield-light-gray/70">Last updated: Just now</span>
      </div>
    </div>
  );
}
