
import AppLayout from "@/components/layout/AppLayout";
import ThreatStatusCard from "@/components/dashboard/ThreatStatusCard";
import ThreatActivityChart from "@/components/dashboard/ThreatActivityChart";
import SecurityScoreCard from "@/components/dashboard/SecurityScoreCard";
import RecentAttacksTable from "@/components/dashboard/RecentAttacksTable";
import SystemStatusCard from "@/components/dashboard/SystemStatusCard";
import GraphicalEditor from "@/components/editor/GraphicalEditor";

export default function Dashboard() {
  return (
    <AppLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-shield-light-gray editable">Executive Dashboard</h1>
        <p className="text-shield-light-gray/70 editable">Real-time security overview and threat intelligence</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="editable">
          <ThreatStatusCard title="Critical Threats" count={5} change={2} type="critical" />
        </div>
        <div className="editable">
          <ThreatStatusCard title="High Risk Vulnerabilities" count={18} change={-5} type="high" />
        </div>
        <div className="editable">
          <ThreatStatusCard title="Medium Risk Issues" count={42} change={0} type="medium" />
        </div>
        <div className="editable">
          <ThreatStatusCard title="Low Risk Findings" count={67} change={-12} type="low" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 editable">
          <ThreatActivityChart />
        </div>
        <div className="editable">
          <SecurityScoreCard score={72} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="md:col-span-2 editable">
          <RecentAttacksTable />
        </div>
        <div className="editable">
          <SystemStatusCard />
        </div>
      </div>
      
      <GraphicalEditor />
    </AppLayout>
  );
}
