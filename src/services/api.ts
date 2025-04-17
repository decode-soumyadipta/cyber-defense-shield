
// This is a mock API service to simulate backend interactions
// In a real implementation, this would connect to your FastAPI backend

export interface Threat {
  id: string;
  name: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  source: string;
  timestamp: string;
  description: string;
  affectedSystems: string[];
  status: 'active' | 'mitigated' | 'resolved';
}

export interface Vulnerability {
  id: string;
  name: string;
  cveId?: string;
  cvssScore: number;
  description: string;
  affectedSystems: string[];
  detectedAt: string;
  status: 'open' | 'in_remediation' | 'resolved';
  remediation?: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
}

export interface SecurityMetric {
  name: string;
  value: number;
  change: number;
  status: 'improved' | 'degraded' | 'stable';
}

export interface SystemStatus {
  id: string;
  name: string;
  status: 'healthy' | 'warning' | 'critical' | 'unknown';
  lastChecked: string;
  metrics: {
    uptime: number;
    loadAverage: number;
    vulnerabilities: number;
  };
}

export interface RecentAttack {
  id: string;
  timestamp: string;
  attackVector: string;
  source: string;
  target: string;
  status: 'blocked' | 'detected' | 'investigating';
  severity: 'low' | 'medium' | 'high' | 'critical';
}

// Mock data for threats
export const getRecentThreats = async (): Promise<Threat[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return [
    {
      id: '1',
      name: 'Ransomware Campaign',
      severity: 'critical',
      source: 'Dark Web Intelligence',
      timestamp: '2025-04-16T14:22:30Z',
      description: 'New ransomware strain targeting financial institutions',
      affectedSystems: ['Windows Server', 'Exchange'],
      status: 'active'
    },
    {
      id: '2',
      name: 'DDoS Attack',
      severity: 'high',
      source: 'Threat Intelligence Feed',
      timestamp: '2025-04-16T08:12:45Z',
      description: 'Coordinated DDoS attack targeting cloud infrastructure',
      affectedSystems: ['Network Infrastructure', 'API Gateway'],
      status: 'mitigated'
    },
    {
      id: '3',
      name: 'SQL Injection Campaign',
      severity: 'medium',
      source: 'Security Operations Center',
      timestamp: '2025-04-15T22:45:12Z',
      description: 'Automated SQL injection attempts against public endpoints',
      affectedSystems: ['Web Applications', 'Databases'],
      status: 'active'
    }
  ];
};

// Mock data for vulnerabilities
export const getTopVulnerabilities = async (): Promise<Vulnerability[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 700));
  
  return [
    {
      id: '1',
      name: 'Critical Auth Bypass',
      cveId: 'CVE-2025-1234',
      cvssScore: 9.8,
      description: 'Authentication bypass vulnerability in admin portal',
      affectedSystems: ['Admin Portal', 'User Management System'],
      detectedAt: '2025-04-14T10:35:20Z',
      status: 'open',
      remediation: 'Apply security patch ABC-123',
      priority: 'critical'
    },
    {
      id: '2',
      name: 'Data Exposure Risk',
      cveId: 'CVE-2025-5678',
      cvssScore: 7.5,
      description: 'Unencrypted data storage in cloud environment',
      affectedSystems: ['Cloud Storage', 'Data Warehouse'],
      detectedAt: '2025-04-15T14:22:10Z',
      status: 'in_remediation',
      remediation: 'Implement encryption for data at rest',
      priority: 'high'
    },
    {
      id: '3',
      name: 'Outdated TLS',
      cvssScore: 6.2,
      description: 'Legacy TLS version in use on public endpoints',
      affectedSystems: ['API Gateway', 'Load Balancer'],
      detectedAt: '2025-04-13T09:15:40Z',
      status: 'open',
      remediation: 'Upgrade to TLS 1.3',
      priority: 'medium'
    }
  ];
};

// Mock data for security metrics
export const getSecurityMetrics = async (): Promise<SecurityMetric[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 600));
  
  return [
    {
      name: 'Security Score',
      value: 78,
      change: 5,
      status: 'improved'
    },
    {
      name: 'Unpatched Systems',
      value: 12,
      change: -3,
      status: 'improved'
    },
    {
      name: 'Attack Surface',
      value: 65,
      change: 2,
      status: 'degraded'
    },
    {
      name: 'Mean Time to Remediate',
      value: 4.2,
      change: -0.8,
      status: 'improved'
    }
  ];
};

// Mock data for system status
export const getSystemStatuses = async (): Promise<SystemStatus[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return [
    {
      id: '1',
      name: 'Web Application Servers',
      status: 'healthy',
      lastChecked: '2025-04-17T08:45:12Z',
      metrics: {
        uptime: 99.98,
        loadAverage: 0.65,
        vulnerabilities: 2
      }
    },
    {
      id: '2',
      name: 'Database Cluster',
      status: 'warning',
      lastChecked: '2025-04-17T08:40:22Z',
      metrics: {
        uptime: 99.95,
        loadAverage: 0.82,
        vulnerabilities: 5
      }
    },
    {
      id: '3',
      name: 'Authentication Services',
      status: 'healthy',
      lastChecked: '2025-04-17T08:42:18Z',
      metrics: {
        uptime: 99.99,
        loadAverage: 0.42,
        vulnerabilities: 1
      }
    },
    {
      id: '4',
      name: 'Storage Infrastructure',
      status: 'critical',
      lastChecked: '2025-04-17T08:39:45Z',
      metrics: {
        uptime: 98.45,
        loadAverage: 0.91,
        vulnerabilities: 8
      }
    }
  ];
};

// Mock data for recent attacks
export const getRecentAttacks = async (): Promise<RecentAttack[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 550));
  
  return [
    {
      id: '1',
      timestamp: '2025-04-16T23:42:12Z',
      attackVector: 'Brute Force',
      source: '185.22.67.123',
      target: 'Authentication API',
      status: 'blocked',
      severity: 'medium'
    },
    {
      id: '2',
      timestamp: '2025-04-16T22:15:38Z',
      attackVector: 'XSS',
      source: '103.45.78.211',
      target: 'Customer Portal',
      status: 'detected',
      severity: 'high'
    },
    {
      id: '3',
      timestamp: '2025-04-16T21:08:54Z',
      attackVector: 'SQL Injection',
      source: '72.14.192.45',
      target: 'Product Database',
      status: 'investigating',
      severity: 'critical'
    },
    {
      id: '4',
      timestamp: '2025-04-16T20:22:31Z',
      attackVector: 'CSRF',
      source: '91.234.55.112',
      target: 'Admin Dashboard',
      status: 'blocked',
      severity: 'medium'
    },
    {
      id: '5',
      timestamp: '2025-04-16T18:47:22Z',
      attackVector: 'Path Traversal',
      source: '209.58.183.2',
      target: 'File Storage API',
      status: 'blocked',
      severity: 'high'
    }
  ];
};

// Mock data for threat activity over time
export const getThreatActivityData = async (): Promise<{date: string; attacks: number; blocks: number; alerts: number}[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 650));
  
  return [
    { date: '2025-04-10', attacks: 145, blocks: 142, alerts: 15 },
    { date: '2025-04-11', attacks: 132, blocks: 130, alerts: 12 },
    { date: '2025-04-12', attacks: 156, blocks: 151, alerts: 18 },
    { date: '2025-04-13', attacks: 124, blocks: 120, alerts: 10 },
    { date: '2025-04-14', attacks: 178, blocks: 170, alerts: 22 },
    { date: '2025-04-15', attacks: 186, blocks: 179, alerts: 25 },
    { date: '2025-04-16', attacks: 204, blocks: 195, alerts: 30 }
  ];
};
