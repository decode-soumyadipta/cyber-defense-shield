
import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { cn } from "@/lib/utils";
import { Outlet } from "react-router-dom";

interface AppLayoutProps {
  children?: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen w-full bg-shield-darkest text-shield-light-gray">
      <Sidebar open={sidebarOpen} />
      <div className="flex flex-col flex-1 w-full overflow-hidden">
        <TopBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className={cn(
          "flex-1 w-full overflow-y-auto transition-all duration-200",
          "px-4 py-6 md:px-6 lg:px-8",
          sidebarOpen ? "md:ml-64" : ""
        )}>
          <div className="w-full max-w-[1400px] mx-auto">
            {children || <Outlet />}
          </div>
        </main>
      </div>
    </div>
  );
}
