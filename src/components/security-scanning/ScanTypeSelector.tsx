
import { Button } from "@/components/ui/button";
import { FormItem, FormLabel } from "@/components/ui/form";
import { Shield, Settings, CheckCircle, AlertTriangle } from 'lucide-react';

interface ScanTypeSelectorProps {
  scanType: string;
  onScanTypeChange: (type: string) => void;
}

export function ScanTypeSelector({ scanType, onScanTypeChange }: ScanTypeSelectorProps) {
  return (
    <FormItem>
      <FormLabel>Scan Type</FormLabel>
      <div className="grid grid-cols-2 gap-4 mt-2">
        <Button 
          variant={scanType === "vulnerability" ? "default" : "outline"} 
          onClick={() => onScanTypeChange("vulnerability")}
          className="h-20 flex flex-col items-center justify-center"
        >
          <Shield className="h-6 w-6 mb-2" />
          <span>Vulnerability Scan</span>
        </Button>
        <Button 
          variant={scanType === "configuration" ? "default" : "outline"} 
          onClick={() => onScanTypeChange("configuration")}
          className="h-20 flex flex-col items-center justify-center"
        >
          <Settings className="h-6 w-6 mb-2" />
          <span>Configuration Audit</span>
        </Button>
        <Button 
          variant={scanType === "compliance" ? "default" : "outline"} 
          onClick={() => onScanTypeChange("compliance")}
          className="h-20 flex flex-col items-center justify-center"
        >
          <CheckCircle className="h-6 w-6 mb-2" />
          <span>Compliance Check</span>
        </Button>
        <Button 
          variant={scanType === "penetration" ? "default" : "outline"} 
          onClick={() => onScanTypeChange("penetration")}
          className="h-20 flex flex-col items-center justify-center"
        >
          <AlertTriangle className="h-6 w-6 mb-2" />
          <span>Penetration Test</span>
        </Button>
      </div>
    </FormItem>
  );
}
