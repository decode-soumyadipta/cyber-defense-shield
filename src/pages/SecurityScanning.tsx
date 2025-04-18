import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Form } from "@/components/ui/form";
import { RefreshCw, Play, XCircle, Settings, List, Grid } from 'lucide-react';
import { useForm } from "react-hook-form";

import { ScanTypeSelector } from "@/components/security-scanning/ScanTypeSelector";
import { ScanScope } from "@/components/security-scanning/ScanScope";
import { ScanConfiguration } from "@/components/security-scanning/ScanConfiguration";
import { ScanProgress } from "@/components/security-scanning/ScanProgress";
import { RecentScans } from "@/components/security-scanning/RecentScans";

const SecurityScanning: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanType, setScanType] = useState("vulnerability");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const form = useForm();
  
  const startScan = () => {
    setIsScanning(true);
    setScanProgress(0);
    
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          return 100;
        }
        return prev + 5;
      });
    }, 500);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Security Scanning</h1>
          <p className="text-muted-foreground">Configure and run security scans against your infrastructure</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button onClick={() => setViewMode('grid')} variant={viewMode === 'grid' ? 'default' : 'outline'} size="icon">
            <Grid className="h-4 w-4" />
          </Button>
          <Button onClick={() => setViewMode('list')} variant={viewMode === 'list' ? 'default' : 'outline'} size="icon">
            <List className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="gap-1">
            <Settings className="h-4 w-4 mr-1" />
            Settings
          </Button>
        </div>
      </div>
      
      <Separator />
      
      <Tabs defaultValue="new-scan" className="w-full">
        <TabsList>
          <TabsTrigger value="new-scan">New Scan</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled Scans</TabsTrigger>
          <TabsTrigger value="history">Scan History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="new-scan" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Start a New Security Scan</CardTitle>
              <CardDescription>Configure and launch a security scan against your infrastructure</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Form {...form}>
                  <div className="space-y-4">
                    <ScanTypeSelector scanType={scanType} onScanTypeChange={setScanType} />
                    <ScanScope />
                  </div>
                  <ScanConfiguration />
                </Form>
              </div>
              
              {isScanning && (
                <ScanProgress 
                  progress={scanProgress} 
                  scanType={scanType} 
                  onPauseScan={() => setIsScanning(false)} 
                />
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center text-sm text-muted-foreground">
                Estimated time: 10-15 minutes
              </div>
              {!isScanning ? (
                <Button onClick={startScan}>
                  <Play className="mr-2 h-4 w-4" />
                  Start Scan
                </Button>
              ) : (
                <Button variant="destructive" onClick={() => setIsScanning(false)}>
                  <XCircle className="mr-2 h-4 w-4" />
                  Cancel Scan
                </Button>
              )}
            </CardFooter>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <RecentScans />
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Recent Scan Results</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Web Security Scan</span>
                    <Badge variant="destructive">12 Issues</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>API Security Assessment</span>
                    <Badge variant="default">3 Issues</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Database Security Check</span>
                    <Badge variant="secondary">0 Issues</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Rescan
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Scan Templates</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>OWASP Top 10</span>
                    <Badge>Web</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>PCI Compliance</span>
                    <Badge>Compliance</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>CIS Benchmarks</span>
                    <Badge>Configuration</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  Manage Templates
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Security Tools</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>OWASP ZAP</span>
                    <Badge variant="outline">Active</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Metasploit Framework</span>
                    <Badge variant="outline">Ready</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>MITRE ATT&CK</span>
                    <Badge variant="outline">Integrated</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  Configure Tools
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="scheduled" className="space-y-4">
          <Card>
            <CardContent className="py-6">
              <div className="flex items-center justify-center flex-col py-8 text-center">
                <div className="rounded-full bg-muted p-6 mb-4">
                  <RefreshCw className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No Scheduled Scans</h3>
                <p className="text-muted-foreground mb-4">Schedule regular scans to monitor your security posture over time</p>
                <Button>Schedule a Scan</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-4">
                  <div>
                    <div className="font-medium">Full Vulnerability Scan</div>
                    <div className="text-sm text-muted-foreground">Completed 2025-04-16 14:32</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="destructive">8 Critical</Badge>
                    <Badge variant="default">15 High</Badge>
                    <Button size="sm" variant="outline">View Report</Button>
                  </div>
                </div>
                
                <div className="flex justify-between items-center border-b pb-4">
                  <div>
                    <div className="font-medium">Configuration Audit</div>
                    <div className="text-sm text-muted-foreground">Completed 2025-04-14 09:15</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="destructive">3 Critical</Badge>
                    <Badge variant="default">7 High</Badge>
                    <Button size="sm" variant="outline">View Report</Button>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pb-2">
                  <div>
                    <div className="font-medium">API Security Assessment</div>
                    <div className="text-sm text-muted-foreground">Completed 2025-04-12 16:45</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="destructive">2 Critical</Badge>
                    <Badge variant="default">5 High</Badge>
                    <Button size="sm" variant="outline">View Report</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SecurityScanning;
