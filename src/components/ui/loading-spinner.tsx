
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
  color?: "default" | "primary" | "secondary" | "cyan" | "red";
}

export function LoadingSpinner({ className, size = "md", color = "default" }: LoadingSpinnerProps) {
  const sizeClasses = {
    xs: "w-3 h-3 border-[2px]",
    sm: "w-5 h-5 border-2",
    md: "w-8 h-8 border-2",
    lg: "w-12 h-12 border-3",
  };

  const colorClasses = {
    default: "border-t-shield-light-gray",
    primary: "border-t-primary",
    secondary: "border-t-secondary",
    cyan: "border-t-shield-cyan",
    red: "border-t-shield-red",
  };

  return (
    <div className={cn("animate-spin rounded-full border-transparent", sizeClasses[size], colorClasses[color], className)} />
  );
}
