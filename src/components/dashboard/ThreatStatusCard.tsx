
import { cn } from "@/lib/utils";
import { Shield, ShieldAlert, ShieldCheck, AlertTriangle } from "lucide-react";

interface ThreatStatusCardProps {
  title: string;
  count: number;
  change: number;
  type: "critical" | "high" | "medium" | "low";
}

export default function ThreatStatusCard({ title, count, change, type }: ThreatStatusCardProps) {
  const getIcon = () => {
    switch (type) {
      case "critical":
        return <ShieldAlert className="w-6 h-6 text-shield-red" />;
      case "high":
        return <AlertTriangle className="w-6 h-6 text-shield-yellow" />;
      case "medium":
        return <Shield className="w-6 h-6 text-shield-yellow" />;
      case "low":
        return <ShieldCheck className="w-6 h-6 text-shield-green" />;
    }
  };

  const getBackgroundColor = () => {
    switch (type) {
      case "critical":
        return "bg-gradient-to-br from-shield-dark to-shield-darker border-l-4 border-shield-red";
      case "high":
        return "bg-gradient-to-br from-shield-dark to-shield-darker border-l-4 border-shield-yellow";
      case "medium":
        return "bg-gradient-to-br from-shield-dark to-shield-darker border-l-4 border-shield-yellow";
      case "low":
        return "bg-gradient-to-br from-shield-dark to-shield-darker border-l-4 border-shield-green";
    }
  };

  return (
    <div className={cn("rounded-lg p-4 shadow-md", getBackgroundColor())}>
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-medium text-shield-light-gray opacity-80">{title}</p>
          <p className="text-3xl font-bold mt-1">{count}</p>
        </div>
        <div className="p-2 rounded-full bg-shield-darker/50">{getIcon()}</div>
      </div>
      <div className="mt-2">
        <p className={cn("text-sm", change > 0 ? "text-shield-red" : "text-shield-green")}>
          {change > 0 ? `+${change}% ↑` : `${change}% ↓`}{" "}
          <span className="text-shield-light-gray opacity-70">since last scan</span>
        </p>
      </div>
    </div>
  );
}
