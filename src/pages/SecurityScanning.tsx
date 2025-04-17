
import AppLayout from "@/components/layout/AppLayout";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Search, Play, AlertTriangle, Shield, Server, Database, Globe, Laptop, Smartphone, Cloud } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Mock scan types
const scanTypes = [
  { id: "network", name: "Network Scan", icon: Server, description: "Scan for network vulnerabilities and open ports" },
  { id: "web", name: "Web Application", icon: Globe, description: "Scan for web application vulnerabilities" },
  { id: "database", name: "Database", icon: Database, description: "Scan database systems for security issues" },
  { id: "endpoint", name: "Endpoint", icon: Laptop, description: "Scan endpoint devices and workstations" },
  { id: "mobile", name: "Mobile Apps", icon: Smartphone, description: "Scan mobile applications for security flaws" },
  { id: "cloud", name: "Cloud Infrastructure", icon: Cloud, description: "Scan cloud resources and configurations" },
];

export default function SecurityScanning() {
  const [selectedScan, setSelectedScan] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanComplete, setScanComplete] = useState(false);

  const handleStartScan = () => {
    if (!selectedScan) return;
    
    setIsScanning(true);
    setScanProgress(0);
    setScanComplete(false);
    
    // Simulate scan progress
    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          setScanComplete(true);
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 300);
  };

  return (
    <AppLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-shield-light-gray">Security Scanning</h1>
        <p className="text-shield-light-gray/70">Scan your infrastructure for vulnerabilities and security issues</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-shield-dark border border-shield-gray rounded-lg shadow-md">
          <div className="p-4 border-b border-shield-gray">
            <h2 className="text-lg font-medium text-shield-light-gray">Scan Types</h2>
          </div>
          
          <div className="p-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-shield-light-gray/50" />
              <input
                type="text"
                placeholder="Search scan types..."
                className="w-full pl-10 pr-4 py-2 rounded-md bg-shield-gray text-shield-light-gray focus:outline-none focus:ring-1 focus:ring-shield-cyan"
              />
            </div>
            
            <div className="space-y-2">
              {scanTypes.map((scan) => (
                <button
                  key={scan.id}
                  onClick={() => setSelectedScan(scan.id)}
                  className={cn(
                    "w-full p-3 rounded-md text-left flex items-center transition-colors",
                    selectedScan === scan.id
                      ? "bg-shield-gray/50 border border-shield-cyan"
                      : "hover:bg-shield-gray/30 border border-transparent"
                  )}
                >
                  <div className="bg-shield-darker p-2 rounded-md mr-3">
                    <scan.icon className="w-5 h-5 text-shield-cyan" />
                  </div>
                  <div>
                    <div className="font-medium">{scan.name}</div>
                    <div className="text-xs text-shield-light-gray/70">{scan.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-shield-dark border border-shield-gray rounded-lg shadow-md p-6">
            <h2 className="text-xl font-medium mb-6 text-shield-light-gray flex items-center">
              <Shield className="w-5 h-5 mr-2 text-shield-cyan" />
              SHIELD Security Scanner
            </h2>
            
            {!selectedScan ? (
              <div className="text-center py-12 bg-shield-darker/50 rounded-lg border border-dashed border-shield-gray">
                <AlertTriangle className="w-12 h-12 text-shield-yellow mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No Scan Selected</h3>
                <p className="text-shield-light-gray/70 max-w-md mx-auto">
                  Select a scan type from the left panel to configure and run a security scan on your infrastructure.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="bg-shield-darker p-4 rounded-lg border border-shield-gray">
                  <h3 className="text-lg font-medium mb-2">
                    {scanTypes.find(s => s.id === selectedScan)?.name} Configuration
                  </h3>
                  
                  <div className="space-y-4 mt-4">
                    <div>
                      <label className="block text-sm mb-1 text-shield-light-gray/70">Scan Depth</label>
                      <select className="w-full p-2 rounded-md bg-shield-gray text-shield-light-gray border border-shield-gray focus:outline-none focus:ring-1 focus:ring-shield-cyan">
                        <option>Quick Scan</option>
                        <option>Standard Scan</option>
                        <option>Deep Scan</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm mb-1 text-shield-light-gray/70">Target Scope</label>
                      <input
                        type="text"
                        placeholder="IP, hostname, or URL"
                        className="w-full p-2 rounded-md bg-shield-gray text-shield-light-gray border border-shield-gray focus:outline-none focus:ring-1 focus:ring-shield-cyan"
                      />
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="scan-aggressive"
                        className="rounded bg-shield-gray border-shield-gray text-shield-cyan focus:ring-shield-cyan/30"
                      />
                      <label htmlFor="scan-aggressive" className="ml-2 text-sm">
                        Enable aggressive scanning techniques
                      </label>
                    </div>
                  </div>
                </div>
                
                {isScanning ? (
                  <div className="bg-shield-darker p-6 rounded-lg border border-shield-blue/50 text-center">
                    <LoadingSpinner className="mx-auto mb-4" size="lg" color="cyan" />
                    <h3 className="text-lg font-medium mb-2">Scan in Progress</h3>
                    <p className="text-shield-light-gray/70 mb-4">
                      {scanTypes.find(s => s.id === selectedScan)?.name} scan is running...
                    </p>
                    <div className="w-full bg-shield-gray/30 rounded-full h-2 mb-2">
                      <div
                        className="bg-shield-cyan h-2 rounded-full transition-all duration-300"
                        style={{ width: `${scanProgress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-shield-light-gray/70">{scanProgress}% complete</p>
                  </div>
                ) : scanComplete ? (
                  <div className="bg-shield-darker p-6 rounded-lg border border-shield-green/50 text-center">
                    <div className="bg-shield-dark/50 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Shield className="w-8 h-8 text-shield-green" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Scan Complete</h3>
                    <p className="text-shield-light-gray/70 mb-6">
                      {scanTypes.find(s => s.id === selectedScan)?.name} scan has been completed successfully.
                    </p>
                    <div className="flex justify-center space-x-3">
                      <button className="px-4 py-2 bg-shield-blue text-white rounded-md hover:bg-shield-blue/80 transition-colors">
                        View Results
                      </button>
                      <button 
                        className="px-4 py-2 bg-shield-gray hover:bg-shield-gray/80 rounded-md transition-colors"
                        onClick={() => {
                          setSelectedScan(null);
                          setScanComplete(false);
                        }}
                      >
                        New Scan
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={handleStartScan}
                    className="w-full py-3 px-4 bg-shield-cyan text-shield-darker rounded-md hover:bg-shield-cyan/80 transition-colors flex items-center justify-center"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Start {scanTypes.find(s => s.id === selectedScan)?.name}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
