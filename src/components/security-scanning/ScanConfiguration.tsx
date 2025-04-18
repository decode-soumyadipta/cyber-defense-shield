
import { Button } from "@/components/ui/button";
import { FormItem, FormLabel } from "@/components/ui/form";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { Settings } from 'lucide-react';

export function ScanConfiguration() {
  return (
    <div className="space-y-4">
      <FormItem>
        <FormLabel>Scan Configuration</FormLabel>
        <div className="grid grid-cols-1 gap-2 mt-2">
          <Command>
            <CommandInput placeholder="Search configuration templates..." />
            <CommandList>
              <CommandEmpty>No templates found.</CommandEmpty>
              <CommandGroup>
                <CommandItem>Standard Web Application Scan</CommandItem>
                <CommandItem>Database Security Assessment</CommandItem>
                <CommandItem>API Security Testing</CommandItem>
                <CommandItem>Network Infrastructure Audit</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </FormItem>
      
      <FormItem>
        <FormLabel>Advanced Options</FormLabel>
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" className="justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Scan Depth
          </Button>
          <Button variant="outline" className="justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Authentication
          </Button>
        </div>
      </FormItem>
    </div>
  );
}
