
import { Button } from "@/components/ui/button";
import { FormItem, FormLabel } from "@/components/ui/form";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

export function ScanScope() {
  return (
    <FormItem>
      <FormLabel>Scan Scope</FormLabel>
      <div className="grid grid-cols-1 gap-2 mt-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full justify-start">
              <span>Select Target Systems</span>
              <ChevronDown className="ml-auto h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem>Web Application Servers</DropdownMenuItem>
            <DropdownMenuItem>Database Cluster</DropdownMenuItem>
            <DropdownMenuItem>Authentication Services</DropdownMenuItem>
            <DropdownMenuItem>Storage Infrastructure</DropdownMenuItem>
            <DropdownMenuItem>API Gateway</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </FormItem>
  );
}
