import * as React from "react";
import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value: number;
    max?: number;
    color?: "default" | "emerald" | "violet";
  }
>(({ className, value, max = 100, color = "default", ...props }, ref) => {
  const percentage = (value / max) * 100;
  
  const colorClasses = {
    default: "bg-primary",
    emerald: "bg-emerald-500",
    violet: "bg-violet-500",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2",
        className
      )}
      {...props}
    >
      <div
        className={`${colorClasses[color]} h-full rounded-full transition-all duration-300 ease-in-out`}
        style={{ width: `${percentage}%` }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      />
    </div>
  );
});

Progress.displayName = "Progress";

export { Progress };
