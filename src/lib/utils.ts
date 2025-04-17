
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
}

export function getSeverityColor(severity: 'low' | 'medium' | 'high' | 'critical'): string {
  switch (severity) {
    case 'critical':
      return 'bg-red-500';
    case 'high':
      return 'bg-orange-500';
    case 'medium':
      return 'bg-yellow-500';
    case 'low':
      return 'bg-blue-500';
    default:
      return 'bg-gray-500';
  }
}

export function getStatusColor(status: string): string {
  switch (status) {
    case 'healthy':
    case 'resolved':
    case 'blocked':
      return 'bg-green-500';
    case 'warning':
    case 'in_remediation':
    case 'detected':
      return 'bg-yellow-500';
    case 'critical':
    case 'active':
    case 'investigating':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
}
