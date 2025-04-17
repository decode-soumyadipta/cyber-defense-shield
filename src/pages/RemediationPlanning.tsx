
import AppLayout from "@/components/layout/AppLayout";
import { Hammer, Shield, Clock, ArrowUpRight, ChevronRight, ChevronDown, CheckCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const remediationPlans = [
  {
    id: "RP-001",
    title: "Critical OpenSSL Vulnerabilities",
    description: "Remediation plan for recently discovered OpenSSL vulnerabilities affecting production servers.",
    status: "in_progress",
    progress: 65,
    priority: "critical",
    dueDate: "2025-04-25",
    assignee: "Security Team",
    vulnerabilitiesCount: 3,
    created: "2025-04-16",
  },
  {
    id: "RP-002",
    title: "Web Application Security Headers",
    description: "Implement missing security headers across all public-facing web applications.",
    status: "planned",
    progress: 0,
    priority: "medium",
    dueDate: "2025-05-05",
    assignee: "Web Development",
    vulnerabilitiesCount: 8,
    created: "2025-04-15",
  },
  {
    id: "RP-003",
    title: "Legacy Database Password Policy",
    description: "Update password policies and encrypt sensitive data in legacy database systems.",
    status: "completed",
    progress: 100,
    priority: "high",
    dueDate: "2025-04-10",
    assignee: "Database Admin",
    vulnerabilitiesCount: 4,
    created: "2025-04-03",
  },
  {
    id: "RP-004",
    title: "Cloud Infrastructure Access Controls",
    description: "Review and strengthen IAM policies for cloud infrastructure resources.",
    status: "in_progress",
    progress: 32,
    priority: "high",
    dueDate: "2025-04-30",
    assignee: "Cloud Team",
    vulnerabilitiesCount: 6,
    created: "2025-04-14",
  },
];

const steps = [
  {
    id: 1,
    title: "Update OpenSSL Packages",
    description: "Install the latest security patches for OpenSSL on all affected systems.",
    status: "completed",
    assignee: "System Admin",
    estimatedTime: "4 hours",
    commands: [
      "apt update",
      "apt upgrade openssl libssl-dev",
      "systemctl restart affected-services"
    ]
  },
  {
    id: 2,
    title: "Configure Security Options",
    description: "Update the OpenSSL configuration to disable vulnerable ciphers and protocols.",
    status: "in_progress",
    assignee: "Security Engineer",
    estimatedTime: "2 hours",
    commands: [
      "nano /etc/ssl/openssl.cnf",
      "# Disable SSLv3, TLSv1.0, TLSv1.1",
      "# Set minimum TLS version to 1.2",
      "# Remove weak cipher suites"
    ]
  },
  {
    id: 3,
    title: "Restart Services",
    description: "Restart all services that depend on OpenSSL to apply the new configurations.",
    status: "pending",
    assignee: "DevOps Team",
    estimatedTime: "1 hour",
    commands: [
      "systemctl restart nginx",
      "systemctl restart apache2",
      "systemctl restart postgresql",
      "docker-compose restart"
    ]
  },
  {
    id: 4,
    title: "Verify Patched Systems",
    description: "Run security scans to confirm that vulnerabilities have been successfully patched.",
    status: "pending",
    assignee: "Security Analyst",
    estimatedTime: "3 hours",
    commands: [
      "nmap --script ssl-enum-ciphers -p 443 example.com",
      "openssl s_client -connect example.com:443 -tls1_2",
      "testssl.sh --severity HIGH example.com"
    ]
  },
];

export default function RemediationPlanning() {
  const [expandedPlan, setExpandedPlan] = useState<string | null>("RP-001");
  const [filter, setFilter] = useState("all");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-shield-green";
      case "in_progress": return "bg-shield-blue";
      case "planned": return "bg-shield-yellow";
      default: return "bg-shield-gray";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed": return "Completed";
      case "in_progress": return "In Progress";
      case "planned": return "Planned";
      case "pending": return "Pending";
      default: return "Unknown";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "critical": return "text-shield-red";
      case "high": return "text-shield-yellow";
      case "medium": return "text-shield-blue";
      case "low": return "text-shield-green";
      default: return "text-shield-light-gray";
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "critical":
        return <span className="px-2 py-0.5 bg-shield-red/20 text-shield-red text-xs rounded-full">Critical</span>;
      case "high":
        return <span className="px-2 py-0.5 bg-shield-yellow/20 text-shield-yellow text-xs rounded-full">High</span>;
      case "medium":
        return <span className="px-2 py-0.5 bg-shield-blue/20 text-shield-blue text-xs rounded-full">Medium</span>;
      case "low":
        return <span className="px-2 py-0.5 bg-shield-green/20 text-shield-green text-xs rounded-full">Low</span>;
      default:
        return <span className="px-2 py-0.5 bg-shield-gray/20 text-shield-light-gray text-xs rounded-full">Unknown</span>;
    }
  };

  const filteredPlans = filter === "all"
    ? remediationPlans
    : remediationPlans.filter(plan => plan.status === filter);

  return (
    <AppLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-shield-light-gray">Remediation Planning</h1>
        <p className="text-shield-light-gray/70">Create and manage plans to address security vulnerabilities</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-shield-dark border border-shield-gray rounded-lg shadow-md">
            <div className="p-4 border-b border-shield-gray">
              <h2 className="text-lg font-medium text-shield-light-gray">Filters</h2>
            </div>
            
            <div className="p-4 space-y-2">
              <button
                onClick={() => setFilter("all")}
                className={cn(
                  "w-full p-2 rounded-md text-left transition-colors flex items-center",
                  filter === "all"
                    ? "bg-shield-gray/50"
                    : "hover:bg-shield-gray/30"
                )}
              >
                <Shield className="w-4 h-4 mr-2" />
                <span>All Plans</span>
                <span className="ml-auto bg-shield-gray/50 px-2 py-0.5 rounded-full text-xs">
                  {remediationPlans.length}
                </span>
              </button>
              
              <button
                onClick={() => setFilter("in_progress")}
                className={cn(
                  "w-full p-2 rounded-md text-left transition-colors flex items-center",
                  filter === "in_progress"
                    ? "bg-shield-gray/50"
                    : "hover:bg-shield-gray/30"
                )}
              >
                <div className="w-2 h-2 rounded-full bg-shield-blue mr-2"></div>
                <span>In Progress</span>
                <span className="ml-auto bg-shield-gray/50 px-2 py-0.5 rounded-full text-xs">
                  {remediationPlans.filter(p => p.status === "in_progress").length}
                </span>
              </button>
              
              <button
                onClick={() => setFilter("planned")}
                className={cn(
                  "w-full p-2 rounded-md text-left transition-colors flex items-center",
                  filter === "planned"
                    ? "bg-shield-gray/50"
                    : "hover:bg-shield-gray/30"
                )}
              >
                <div className="w-2 h-2 rounded-full bg-shield-yellow mr-2"></div>
                <span>Planned</span>
                <span className="ml-auto bg-shield-gray/50 px-2 py-0.5 rounded-full text-xs">
                  {remediationPlans.filter(p => p.status === "planned").length}
                </span>
              </button>
              
              <button
                onClick={() => setFilter("completed")}
                className={cn(
                  "w-full p-2 rounded-md text-left transition-colors flex items-center",
                  filter === "completed"
                    ? "bg-shield-gray/50"
                    : "hover:bg-shield-gray/30"
                )}
              >
                <div className="w-2 h-2 rounded-full bg-shield-green mr-2"></div>
                <span>Completed</span>
                <span className="ml-auto bg-shield-gray/50 px-2 py-0.5 rounded-full text-xs">
                  {remediationPlans.filter(p => p.status === "completed").length}
                </span>
              </button>
            </div>
            
            <div className="p-4 border-t border-shield-gray">
              <button className="w-full py-2 px-4 bg-shield-cyan text-shield-darker rounded-md hover:bg-shield-cyan/80 transition-colors">
                Create New Plan
              </button>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          <div className="space-y-4">
            {filteredPlans.map((plan) => (
              <div key={plan.id} className="bg-shield-dark border border-shield-gray rounded-lg shadow-md overflow-hidden">
                <div 
                  className="p-4 flex items-center justify-between cursor-pointer hover:bg-shield-gray/20"
                  onClick={() => setExpandedPlan(expandedPlan === plan.id ? null : plan.id)}
                >
                  <div className="flex items-center">
                    <div className={cn("w-2 h-12 rounded-sm mr-4", getStatusColor(plan.status))}></div>
                    <div>
                      <div className="flex items-center">
                        <span className="font-mono text-sm text-shield-cyan mr-2">{plan.id}</span>
                        <h3 className="font-medium">{plan.title}</h3>
                      </div>
                      <div className="text-xs text-shield-light-gray/70 mt-1">{plan.description}</div>
                    </div>
                  </div>
                  <div className="flex items-center ml-4">
                    {getPriorityBadge(plan.priority)}
                    <div className="ml-4">
                      {expandedPlan === plan.id ? (
                        <ChevronDown className="w-5 h-5" />
                      ) : (
                        <ChevronRight className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                </div>
                
                {expandedPlan === plan.id && (
                  <div className="border-t border-shield-gray">
                    <div className="p-4 bg-shield-darker/50">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="flex flex-col">
                          <span className="text-xs text-shield-light-gray/70">Status</span>
                          <span className="font-medium capitalize">{getStatusText(plan.status)}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-shield-light-gray/70">Due Date</span>
                          <span className="font-medium">{plan.dueDate}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-shield-light-gray/70">Assignee</span>
                          <span className="font-medium">{plan.assignee}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-shield-light-gray/70">Vulnerabilities</span>
                          <span className="font-medium">{plan.vulnerabilitiesCount}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <div className="flex justify-between mb-1 text-xs">
                          <span>Progress</span>
                          <span>{plan.progress}%</span>
                        </div>
                        <div className="w-full bg-shield-gray/30 rounded-full h-2">
                          <div
                            className={cn("h-2 rounded-full transition-all", getStatusColor(plan.status))}
                            style={{ width: `${plan.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-sm font-medium mb-3 flex items-center">
                        <Hammer className="w-4 h-4 mr-2" />
                        Remediation Steps
                      </h3>
                      
                      <div className="space-y-3">
                        {steps.map((step) => (
                          <div
                            key={step.id}
                            className="p-3 border border-shield-gray rounded-md bg-shield-darker/30 hover:bg-shield-darker/50"
                          >
                            <div className="flex items-start">
                              <div className={cn(
                                "w-6 h-6 rounded-full flex items-center justify-center text-xs mr-3 flex-shrink-0",
                                step.status === "completed" ? "bg-shield-green/20 text-shield-green" : 
                                step.status === "in_progress" ? "bg-shield-blue/20 text-shield-blue" : 
                                "bg-shield-gray/20 text-shield-light-gray"
                              )}>
                                {step.status === "completed" ? (
                                  <CheckCircle className="w-4 h-4" />
                                ) : (
                                  step.id
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between">
                                  <h4 className="font-medium text-sm">{step.title}</h4>
                                  <span className={cn(
                                    "text-xs px-2 py-0.5 rounded-full",
                                    step.status === "completed" ? "bg-shield-green/20 text-shield-green" : 
                                    step.status === "in_progress" ? "bg-shield-blue/20 text-shield-blue" : 
                                    "bg-shield-gray/20 text-shield-light-gray"
                                  )}>
                                    {getStatusText(step.status)}
                                  </span>
                                </div>
                                <p className="text-xs text-shield-light-gray/70 my-1">{step.description}</p>
                                
                                <div className="flex items-center text-xs mt-2 text-shield-light-gray/70 space-x-4">
                                  <div className="flex items-center">
                                    <Clock className="w-3 h-3 mr-1" />
                                    <span>{step.estimatedTime}</span>
                                  </div>
                                  <div>
                                    <span>Assignee: </span>
                                    <span className="text-shield-light-gray">{step.assignee}</span>
                                  </div>
                                </div>
                                
                                {step.commands && (
                                  <div className="mt-2 bg-shield-darkest rounded-md p-2 font-mono text-xs">
                                    {step.commands.map((cmd, i) => (
                                      <div key={i} className={cmd.startsWith("#") ? "text-shield-light-gray/50" : "text-shield-cyan"}>
                                        {cmd.startsWith("#") ? cmd : "$ " + cmd}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-4 border-t border-shield-gray flex justify-between bg-shield-darker/30">
                      <div className="text-xs text-shield-light-gray/70">
                        Created: {plan.created}
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 text-sm bg-shield-gray hover:bg-shield-gray/80 rounded-md transition-colors">
                          Edit Plan
                        </button>
                        <button className="px-3 py-1 text-sm bg-shield-blue text-white hover:bg-shield-blue/80 rounded-md transition-colors flex items-center">
                          <ArrowUpRight className="w-3 h-3 mr-1" />
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
