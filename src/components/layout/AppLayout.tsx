
import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { cn } from "@/lib/utils";
import { Outlet } from "react-router-dom";  // Import Outlet for nested routing

interface AppLayoutProps {
  children?: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-shield-darkest text-shield-light-gray">
      <Sidebar open={sidebarOpen} />
      <div className="flex flex-col flex-1 w-full overflow-hidden">
        <TopBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className={cn("flex-1 overflow-y-auto p-4 transition-all duration-200", 
          sidebarOpen ? "md:ml-64" : "")}>
          {children || <Outlet />}  {/* Support both direct children and nested routes */}
        </main>
      </div>
    </div>
  );
}
