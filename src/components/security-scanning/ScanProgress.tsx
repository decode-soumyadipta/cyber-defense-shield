
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Pause } from 'lucide-react';

interface ScanProgressProps {
  progress: number;
  scanType: string;
  onPauseScan: () => void;
}

export function ScanProgress({ progress, scanType, onPauseScan }: ScanProgressProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="text-sm font-medium">Scan Progress</div>
        <div className="text-sm text-muted-foreground">{progress}%</div>
      </div>
      <Progress value={progress} className="h-2" />
      
      <div className="flex justify-between">
        <div className="flex items-center text-sm text-muted-foreground">
          <LoadingSpinner className="mr-2 h-4 w-4" />
          Scanning {scanType} vulnerabilities...
        </div>
        <Button variant="outline" size="sm" onClick={onPauseScan}>
          <Pause className="mr-2 h-4 w-4" />
          Pause
        </Button>
      </div>
    </div>
  );
}
