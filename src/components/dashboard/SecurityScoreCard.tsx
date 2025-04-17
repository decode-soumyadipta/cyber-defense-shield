
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface SecurityScoreCardProps {
  score: number;
}

export default function SecurityScoreCard({ score }: SecurityScoreCardProps) {
  const getScoreColor = () => {
    if (score >= 80) return "text-shield-green";
    if (score >= 60) return "text-shield-blue";
    if (score >= 40) return "text-shield-yellow";
    return "text-shield-red";
  };

  const getProgressColor = () => {
    if (score >= 80) return "bg-shield-green";
    if (score >= 60) return "bg-shield-blue";
    if (score >= 40) return "bg-shield-yellow";
    return "bg-shield-red";
  };

  const getGradientBg = () => {
    if (score >= 80) return "from-shield-green/20 to-transparent";
    if (score >= 60) return "from-shield-blue/20 to-transparent";
    if (score >= 40) return "from-shield-yellow/20 to-transparent";
    return "from-shield-red/20 to-transparent";
  };

  return (
    <div className={cn(
      "bg-shield-dark border border-shield-gray rounded-lg p-6 shadow-md",
      "bg-gradient-to-b", getGradientBg()
    )}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-shield-light-gray">Security Score</h2>
        <div className={cn("text-2xl font-bold", getScoreColor())}>{score}/100</div>
      </div>
      
      <div className="mb-6">
        <Progress value={score} className="h-2" indicatorClassName={getProgressColor()} />
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-sm text-shield-light-gray">Network Security</span>
          <span className="text-sm font-medium">85/100</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-shield-light-gray">Application Security</span>
          <span className="text-sm font-medium">76/100</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-shield-light-gray">Data Protection</span>
          <span className="text-sm font-medium">82/100</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-shield-light-gray">Endpoint Security</span>
          <span className="text-sm font-medium">59/100</span>
        </div>
      </div>
    </div>
  );
}
