
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Shield, 
  AlertTriangle, 
  FileSearch, 
  Hammer, 
  Settings,
  Terminal,
  Database,
  Users,
  BarChart3
} from "lucide-react";

interface SidebarProps {
  open: boolean;
}

const navItems = [
  { to: "/", icon: LayoutDashboard, label: "Executive Dashboard" },
  { to: "/threats", icon: Shield, label: "Threat Intelligence" },
  { to: "/vulnerabilities", icon: AlertTriangle, label: "Vulnerability Management" },
  { to: "/scanning", icon: FileSearch, label: "Security Scanning" },
  { to: "/remediation", icon: Hammer, label: "Remediation Planning" },
  { to: "/assets", icon: Database, label: "Asset Inventory" },
  { to: "/analytics", icon: BarChart3, label: "Security Analytics" },
  { to: "/users", icon: Users, label: "User Management" },
  { to: "/console", icon: Terminal, label: "Command Console" },
  { to: "/settings", icon: Settings, label: "System Configuration" },
];

export default function Sidebar({ open }: SidebarProps) {
  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-shield-dark border-r border-shield-gray transition-transform duration-300 ease-in-out",
        open ? "translate-x-0" : "-translate-x-full md:translate-x-0 md:w-16"
      )}
    >
      <div className="flex items-center justify-center h-16 px-4 border-b border-shield-gray">
        <div className={cn("flex items-center space-x-2", !open && "md:justify-center")}>
          <Shield className="w-8 h-8 text-shield-cyan" />
          <span className={cn("text-xl font-bold text-shield-cyan", !open && "md:hidden")}>
            SHIELD
          </span>
        </div>
      </div>

      <nav className="mt-5 px-2">
        <div className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-all",
                  isActive
                    ? "bg-shield-gray text-shield-cyan"
                    : "text-shield-light-gray hover:bg-shield-gray hover:text-shield-cyan",
                  !open && "md:justify-center md:px-0"
                )
              }
            >
              <item.icon className={cn("w-5 h-5 mr-3", !open && "md:mr-0")} />
              <span className={cn("truncate", !open && "md:hidden")}>{item.label}</span>
              {!open && (
                <span className="md:absolute md:left-full md:ml-2 md:px-2 md:py-1 md:text-xs md:font-medium md:bg-shield-dark md:rounded-md md:whitespace-nowrap md:opacity-0 md:group-hover:opacity-100 md:transition-opacity">
                  {item.label}
                </span>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
