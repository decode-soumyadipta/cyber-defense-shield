
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '00:00', critical: 4, high: 12, medium: 24, low: 35 },
  { name: '04:00', critical: 3, high: 13, medium: 22, low: 31 },
  { name: '08:00', critical: 5, high: 15, medium: 25, low: 38 },
  { name: '12:00', critical: 7, high: 18, medium: 29, low: 42 },
  { name: '16:00', critical: 5, high: 16, medium: 23, low: 38 },
  { name: '20:00', critical: 6, high: 14, medium: 26, low: 36 },
  { name: '24:00', critical: 4, high: 11, medium: 22, low: 34 },
];

export default function ThreatActivityChart() {
  return (
    <div className="bg-shield-dark border border-shield-gray rounded-lg p-4 shadow-md">
      <h3 className="text-md font-medium mb-4 text-shield-light-gray">Threat Activity (24h)</h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorCritical" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF3D00" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FF3D00" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorHigh" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFD600" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FFD600" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorMedium" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0288D1" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#0288D1" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorLow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00C853" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#00C853" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#263238" />
            <XAxis dataKey="name" stroke="#E0E0E0" />
            <YAxis stroke="#E0E0E0" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#0A1929', 
                borderColor: '#263238', 
                color: '#E0E0E0' 
              }}
              labelStyle={{ color: '#E0E0E0' }}
            />
            <Area type="monotone" dataKey="critical" stroke="#FF3D00" fillOpacity={1} fill="url(#colorCritical)" />
            <Area type="monotone" dataKey="high" stroke="#FFD600" fillOpacity={1} fill="url(#colorHigh)" />
            <Area type="monotone" dataKey="medium" stroke="#0288D1" fillOpacity={1} fill="url(#colorMedium)" />
            <Area type="monotone" dataKey="low" stroke="#00C853" fillOpacity={1} fill="url(#colorLow)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center mt-2 space-x-6">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-shield-red rounded-full mr-2"></div>
          <span className="text-xs text-shield-light-gray">Critical</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-shield-yellow rounded-full mr-2"></div>
          <span className="text-xs text-shield-light-gray">High</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-shield-blue rounded-full mr-2"></div>
          <span className="text-xs text-shield-light-gray">Medium</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-shield-green rounded-full mr-2"></div>
          <span className="text-xs text-shield-light-gray">Low</span>
        </div>
      </div>
    </div>
  );
}
