
import { Bell, Search, Menu } from "lucide-react";

interface TopBarProps {
  onMenuClick: () => void;
}

export default function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <div className="sticky top-0 z-40 flex items-center justify-between h-16 px-4 border-b bg-shield-dark border-shield-gray">
      <div className="flex items-center">
        <button
          onClick={onMenuClick}
          className="p-2 mr-2 rounded-md text-shield-light-gray hover:bg-shield-gray"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-shield-light-gray opacity-50" />
          <input
            type="text"
            placeholder="Search threats, assets, vulnerabilities..."
            className="pl-10 pr-4 py-2 w-64 md:w-80 rounded-md bg-shield-gray text-shield-light-gray focus:outline-none focus:ring-1 focus:ring-shield-cyan"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <Bell className="w-6 h-6 text-shield-light-gray hover:text-shield-cyan cursor-pointer" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-shield-red rounded-full"></span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-sm text-shield-light-gray">Admin</span>
          <div className="w-8 h-8 rounded-full bg-shield-gray flex items-center justify-center text-shield-cyan font-medium">
            A
          </div>
        </div>
      </div>
    </div>
  );
}
