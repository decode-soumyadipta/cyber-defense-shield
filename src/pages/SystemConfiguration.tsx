
import AppLayout from "@/components/layout/AppLayout";
import { useState } from "react";
import { Settings, Lock, Bell, Cpu, Database, Globe, Shield, Users, Clock, Save } from "lucide-react";
import { cn } from "@/lib/utils";

interface ConfigSectionProps {
  title: string;
  description: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

const ConfigSection = ({ title, description, icon: Icon, children }: ConfigSectionProps) => {
  return (
    <div className="bg-shield-dark border border-shield-gray rounded-lg shadow-md mb-6">
      <div className="p-4 border-b border-shield-gray flex items-center">
        <div className="p-2 rounded-md bg-shield-darker mr-3">
          <Icon className="w-5 h-5 text-shield-cyan" />
        </div>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-xs text-shield-light-gray/70">{description}</p>
        </div>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

interface ToggleItemProps {
  title: string;
  description: string;
  enabled: boolean;
  onChange: () => void;
}

const ToggleItem = ({ title, description, enabled, onChange }: ToggleItemProps) => {
  return (
    <div className="flex items-center justify-between py-3 border-b border-shield-gray/30 last:border-0">
      <div>
        <h4 className="font-medium text-sm">{title}</h4>
        <p className="text-xs text-shield-light-gray/70">{description}</p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" checked={enabled} onChange={onChange} className="sr-only peer" />
        <div className="w-11 h-6 bg-shield-gray rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-shield-cyan"></div>
      </label>
    </div>
  );
};

export default function SystemConfiguration() {
  const [currentTab, setCurrentTab] = useState("general");
  const [settings, setSettings] = useState({
    // General settings
    darkMode: true,
    autoRefresh: true,
    refreshInterval: 5,
    telemetryEnabled: true,
    
    // Security settings
    twoFactorAuth: true,
    strictPasswordPolicy: true,
    sessionTimeout: 30,
    autoLogout: true,
    
    // Scan settings
    scanDepth: "standard",
    aggressiveScan: false,
    scanSchedule: "daily",
    scanNotifications: true,
    
    // Integration settings
    mispIntegration: false,
    mispApiKey: "",
    slackIntegration: true,
    slackWebhook: "https://hooks.slack.com/services/TXXXXXXXX/BXXXXXXXX/XXXXXXXXXXXXXXXXXXXXXXXX",
  });

  const handleChange = (key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleToggle = (key: string) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <AppLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-shield-light-gray">System Configuration</h1>
        <p className="text-shield-light-gray/70">Configure SHIELD's core settings and integrations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-shield-dark border border-shield-gray rounded-lg shadow-md sticky top-20">
            <div className="p-4 border-b border-shield-gray">
              <h2 className="text-lg font-medium text-shield-light-gray">Settings</h2>
            </div>
            
            <div className="p-2">
              <button
                onClick={() => setCurrentTab("general")}
                className={cn(
                  "w-full p-2 rounded-md text-left flex items-center mb-1",
                  currentTab === "general" ? "bg-shield-gray" : "hover:bg-shield-gray/30"
                )}
              >
                <Settings className="w-4 h-4 mr-3" />
                <span>General</span>
              </button>
              
              <button
                onClick={() => setCurrentTab("security")}
                className={cn(
                  "w-full p-2 rounded-md text-left flex items-center mb-1",
                  currentTab === "security" ? "bg-shield-gray" : "hover:bg-shield-gray/30"
                )}
              >
                <Lock className="w-4 h-4 mr-3" />
                <span>Security</span>
              </button>
              
              <button
                onClick={() => setCurrentTab("scanning")}
                className={cn(
                  "w-full p-2 rounded-md text-left flex items-center mb-1",
                  currentTab === "scanning" ? "bg-shield-gray" : "hover:bg-shield-gray/30"
                )}
              >
                <Shield className="w-4 h-4 mr-3" />
                <span>Scanning</span>
              </button>
              
              <button
                onClick={() => setCurrentTab("notifications")}
                className={cn(
                  "w-full p-2 rounded-md text-left flex items-center mb-1",
                  currentTab === "notifications" ? "bg-shield-gray" : "hover:bg-shield-gray/30"
                )}
              >
                <Bell className="w-4 h-4 mr-3" />
                <span>Notifications</span>
              </button>
              
              <button
                onClick={() => setCurrentTab("integrations")}
                className={cn(
                  "w-full p-2 rounded-md text-left flex items-center mb-1",
                  currentTab === "integrations" ? "bg-shield-gray" : "hover:bg-shield-gray/30"
                )}
              >
                <Globe className="w-4 h-4 mr-3" />
                <span>Integrations</span>
              </button>
            </div>
            
            <div className="p-4 border-t border-shield-gray">
              <button className="w-full py-2 px-4 bg-shield-cyan text-shield-darker rounded-md hover:bg-shield-cyan/80 transition-colors flex items-center justify-center">
                <Save className="w-4 h-4 mr-2" />
                Save Settings
              </button>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          {currentTab === "general" && (
            <>
              <ConfigSection 
                title="Display Settings" 
                description="Configure how SHIELD appears and behaves" 
                icon={Settings}
              >
                <ToggleItem
                  title="Dark Mode"
                  description="Use dark color scheme for the interface"
                  enabled={settings.darkMode}
                  onChange={() => handleToggle("darkMode")}
                />
                
                <ToggleItem
                  title="Auto-refresh Dashboard"
                  description="Automatically refresh dashboard data"
                  enabled={settings.autoRefresh}
                  onChange={() => handleToggle("autoRefresh")}
                />
                
                <div className="flex items-center justify-between py-3 border-b border-shield-gray/30">
                  <div>
                    <h4 className="font-medium text-sm">Refresh Interval</h4>
                    <p className="text-xs text-shield-light-gray/70">Time between automatic data refreshes</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <select 
                      value={settings.refreshInterval}
                      onChange={(e) => handleChange("refreshInterval", parseInt(e.target.value))}
                      className="bg-shield-gray border border-shield-gray/50 rounded-md px-3 py-1 text-sm"
                      disabled={!settings.autoRefresh}
                    >
                      <option value={1}>1 minute</option>
                      <option value={5}>5 minutes</option>
                      <option value={10}>10 minutes</option>
                      <option value={30}>30 minutes</option>
                    </select>
                  </div>
                </div>
              </ConfigSection>
              
              <ConfigSection 
                title="System Performance" 
                description="Configure system resource usage and performance" 
                icon={Cpu}
              >
                <ToggleItem
                  title="Send Telemetry Data"
                  description="Send anonymous usage data to help improve SHIELD"
                  enabled={settings.telemetryEnabled}
                  onChange={() => handleToggle("telemetryEnabled")}
                />
                
                <div className="flex items-center justify-between py-3">
                  <div>
                    <h4 className="font-medium text-sm">Database Optimization</h4>
                    <p className="text-xs text-shield-light-gray/70">Optimize database performance</p>
                  </div>
                  <button className="bg-shield-gray hover:bg-shield-gray/80 py-1 px-3 rounded-md text-sm">
                    Optimize Now
                  </button>
                </div>
              </ConfigSection>
            </>
          )}
          
          {currentTab === "security" && (
            <>
              <ConfigSection 
                title="Authentication" 
                description="Configure authentication and access control settings" 
                icon={Lock}
              >
                <ToggleItem
                  title="Two-Factor Authentication"
                  description="Require 2FA for all users"
                  enabled={settings.twoFactorAuth}
                  onChange={() => handleToggle("twoFactorAuth")}
                />
                
                <ToggleItem
                  title="Strict Password Policy"
                  description="Enforce complex password requirements"
                  enabled={settings.strictPasswordPolicy}
                  onChange={() => handleToggle("strictPasswordPolicy")}
                />
                
                <div className="flex items-center justify-between py-3 border-b border-shield-gray/30">
                  <div>
                    <h4 className="font-medium text-sm">Session Timeout</h4>
                    <p className="text-xs text-shield-light-gray/70">Minutes before an inactive session expires</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <select 
                      value={settings.sessionTimeout}
                      onChange={(e) => handleChange("sessionTimeout", parseInt(e.target.value))}
                      className="bg-shield-gray border border-shield-gray/50 rounded-md px-3 py-1 text-sm"
                    >
                      <option value={15}>15 minutes</option>
                      <option value={30}>30 minutes</option>
                      <option value={60}>60 minutes</option>
                      <option value={120}>2 hours</option>
                    </select>
                  </div>
                </div>
                
                <ToggleItem
                  title="Auto Logout on Inactivity"
                  description="Automatically log out inactive users"
                  enabled={settings.autoLogout}
                  onChange={() => handleToggle("autoLogout")}
                />
              </ConfigSection>
              
              <ConfigSection 
                title="Access Control" 
                description="Configure role-based access control" 
                icon={Users}
              >
                <div className="bg-shield-darker/50 p-4 rounded-md border border-dashed border-shield-gray mb-4">
                  <p className="text-sm text-shield-light-gray/70">
                    Access control settings are managed through the User Management console. 
                    <button className="text-shield-cyan ml-2 hover:underline">
                      Open User Management
                    </button>
                  </p>
                </div>
              </ConfigSection>
            </>
          )}
          
          {currentTab === "scanning" && (
            <ConfigSection 
              title="Security Scanning" 
              description="Configure how security scans are performed" 
              icon={Shield}
            >
              <div className="flex items-center justify-between py-3 border-b border-shield-gray/30">
                <div>
                  <h4 className="font-medium text-sm">Default Scan Depth</h4>
                  <p className="text-xs text-shield-light-gray/70">Default thoroughness level for security scans</p>
                </div>
                <div className="flex items-center space-x-2">
                  <select 
                    value={settings.scanDepth}
                    onChange={(e) => handleChange("scanDepth", e.target.value)}
                    className="bg-shield-gray border border-shield-gray/50 rounded-md px-3 py-1 text-sm"
                  >
                    <option value="quick">Quick Scan</option>
                    <option value="standard">Standard Scan</option>
                    <option value="deep">Deep Scan</option>
                  </select>
                </div>
              </div>
              
              <ToggleItem
                title="Aggressive Scanning Techniques"
                description="Use more intrusive scanning methods that may affect system performance"
                enabled={settings.aggressiveScan}
                onChange={() => handleToggle("aggressiveScan")}
              />
              
              <div className="flex items-center justify-between py-3 border-b border-shield-gray/30">
                <div>
                  <h4 className="font-medium text-sm">Scan Schedule</h4>
                  <p className="text-xs text-shield-light-gray/70">Default frequency for automated scans</p>
                </div>
                <div className="flex items-center space-x-2">
                  <select 
                    value={settings.scanSchedule}
                    onChange={(e) => handleChange("scanSchedule", e.target.value)}
                    className="bg-shield-gray border border-shield-gray/50 rounded-md px-3 py-1 text-sm"
                  >
                    <option value="hourly">Hourly</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
              </div>
              
              <div className="flex items-center justify-between py-3">
                <div>
                  <h4 className="font-medium text-sm">Schedule Manager</h4>
                  <p className="text-xs text-shield-light-gray/70">Configure custom scan schedules</p>
                </div>
                <button className="bg-shield-gray hover:bg-shield-gray/80 py-1 px-3 rounded-md text-sm flex items-center">
                  <Clock className="w-3 h-3 mr-1" /> Configure
                </button>
              </div>
            </ConfigSection>
          )}
          
          {currentTab === "notifications" && (
            <ConfigSection 
              title="Notifications" 
              description="Configure how alerts and notifications are delivered" 
              icon={Bell}
            >
              <ToggleItem
                title="Scan Completion Notifications"
                description="Notify when security scans are completed"
                enabled={settings.scanNotifications}
                onChange={() => handleToggle("scanNotifications")}
              />
              
              <div className="mt-4">
                <h4 className="font-medium text-sm mb-2">Notification Channels</h4>
                
                <div className="space-y-2">
                  <div className="flex items-center p-3 bg-shield-darker/50 rounded-md border border-shield-gray/50">
                    <input 
                      type="checkbox" 
                      id="email-notify" 
                      className="w-4 h-4 mr-3 rounded bg-shield-gray border-shield-gray text-shield-cyan focus:ring-shield-cyan/30"
                      checked 
                    />
                    <div className="flex-1">
                      <label htmlFor="email-notify" className="font-medium text-sm cursor-pointer">
                        Email Notifications
                      </label>
                      <p className="text-xs text-shield-light-gray/70">
                        Send notifications to admin@example.com
                      </p>
                    </div>
                    <button className="text-shield-cyan text-sm">Configure</button>
                  </div>
                  
                  <div className="flex items-center p-3 bg-shield-darker/50 rounded-md border border-shield-gray/50">
                    <input 
                      type="checkbox" 
                      id="slack-notify" 
                      className="w-4 h-4 mr-3 rounded bg-shield-gray border-shield-gray text-shield-cyan focus:ring-shield-cyan/30"
                      checked 
                    />
                    <div className="flex-1">
                      <label htmlFor="slack-notify" className="font-medium text-sm cursor-pointer">
                        Slack Notifications
                      </label>
                      <p className="text-xs text-shield-light-gray/70">
                        Send notifications to #security-alerts
                      </p>
                    </div>
                    <button className="text-shield-cyan text-sm">Configure</button>
                  </div>
                  
                  <div className="flex items-center p-3 bg-shield-darker/50 rounded-md border border-shield-gray/50">
                    <input 
                      type="checkbox" 
                      id="sms-notify" 
                      className="w-4 h-4 mr-3 rounded bg-shield-gray border-shield-gray text-shield-cyan focus:ring-shield-cyan/30"
                    />
                    <div className="flex-1">
                      <label htmlFor="sms-notify" className="font-medium text-sm cursor-pointer">
                        SMS Notifications
                      </label>
                      <p className="text-xs text-shield-light-gray/70">
                        Not configured
                      </p>
                    </div>
                    <button className="text-shield-cyan text-sm">Configure</button>
                  </div>
                </div>
              </div>
            </ConfigSection>
          )}
          
          {currentTab === "integrations" && (
            <>
              <ConfigSection 
                title="Threat Intelligence" 
                description="Integrate with external threat intelligence platforms" 
                icon={Globe}
              >
                <div className="flex items-center justify-between py-3 border-b border-shield-gray/30">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="misp-integration" 
                      className="w-4 h-4 mr-3 rounded bg-shield-gray border-shield-gray text-shield-cyan focus:ring-shield-cyan/30"
                      checked={settings.mispIntegration}
                      onChange={() => handleToggle("mispIntegration")}
                    />
                    <div>
                      <label htmlFor="misp-integration" className="font-medium text-sm cursor-pointer">
                        MISP Integration
                      </label>
                      <p className="text-xs text-shield-light-gray/70">
                        Connect to MISP threat intelligence platform
                      </p>
                    </div>
                  </div>
                </div>
                
                {settings.mispIntegration && (
                  <div className="mt-3 ml-7 mb-3">
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs text-shield-light-gray/70 mb-1">MISP URL</label>
                        <input
                          type="text"
                          value="https://misp.example.com"
                          className="w-full p-2 rounded-md bg-shield-gray text-shield-light-gray border border-shield-gray focus:outline-none focus:ring-1 focus:ring-shield-cyan"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-shield-light-gray/70 mb-1">API Key</label>
                        <input
                          type="password"
                          value={settings.mispApiKey}
                          placeholder="Enter API Key"
                          onChange={(e) => handleChange("mispApiKey", e.target.value)}
                          className="w-full p-2 rounded-md bg-shield-gray text-shield-light-gray border border-shield-gray focus:outline-none focus:ring-1 focus:ring-shield-cyan"
                        />
                      </div>
                      <button className="bg-shield-gray hover:bg-shield-gray/80 py-1 px-3 rounded-md text-sm">
                        Test Connection
                      </button>
                    </div>
                  </div>
                )}
              </ConfigSection>
              
              <ConfigSection 
                title="Communication Integrations" 
                description="Connect SHIELD to external communication platforms" 
                icon={Database}
              >
                <div className="flex items-center justify-between py-3 border-b border-shield-gray/30">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="slack-integration" 
                      className="w-4 h-4 mr-3 rounded bg-shield-gray border-shield-gray text-shield-cyan focus:ring-shield-cyan/30"
                      checked={settings.slackIntegration}
                      onChange={() => handleToggle("slackIntegration")}
                    />
                    <div>
                      <label htmlFor="slack-integration" className="font-medium text-sm cursor-pointer">
                        Slack Integration
                      </label>
                      <p className="text-xs text-shield-light-gray/70">
                        Send alerts and reports to Slack channels
                      </p>
                    </div>
                  </div>
                </div>
                
                {settings.slackIntegration && (
                  <div className="mt-3 ml-7 mb-3">
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs text-shield-light-gray/70 mb-1">Webhook URL</label>
                        <input
                          type="text"
                          value={settings.slackWebhook}
                          onChange={(e) => handleChange("slackWebhook", e.target.value)}
                          className="w-full p-2 rounded-md bg-shield-gray text-shield-light-gray border border-shield-gray focus:outline-none focus:ring-1 focus:ring-shield-cyan"
                        />
                      </div>
                      <div className="flex space-x-2">
                        <button className="bg-shield-gray hover:bg-shield-gray/80 py-1 px-3 rounded-md text-sm">
                          Test Webhook
                        </button>
                        <button className="bg-shield-cyan text-shield-darker py-1 px-3 rounded-md text-sm">
                          Save Settings
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </ConfigSection>
            </>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
