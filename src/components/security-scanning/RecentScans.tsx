
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RefreshCw } from 'lucide-react';

export function RecentScans() {
  return (
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
  );
}
