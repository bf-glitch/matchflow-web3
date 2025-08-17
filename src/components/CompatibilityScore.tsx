import { cn } from "@/lib/utils"

interface CompatibilityScoreProps {
  score: number
  size?: "sm" | "md" | "lg"
  showLabel?: boolean
  className?: string
}

export function CompatibilityScore({ 
  score, 
  size = "md", 
  showLabel = true, 
  className 
}: CompatibilityScoreProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-success"
    if (score >= 60) return "text-warning"
    return "text-destructive"
  }

  const getGlowColor = (score: number) => {
    if (score >= 80) return "shadow-[0_0_40px_hsl(145_70%_55%_/_0.3)]"
    if (score >= 60) return "shadow-[0_0_40px_hsl(45_95%_65%_/_0.3)]"
    return "shadow-[0_0_40px_hsl(0_75%_60%_/_0.3)]"
  }

  const sizeClasses = {
    sm: "w-16 h-16 text-xs",
    md: "w-24 h-24 text-sm",
    lg: "w-32 h-32 text-lg"
  }

  const circumference = 2 * Math.PI * 45 // radius of 45
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (score / 100) * circumference

  return (
    <div className={cn("relative flex flex-col items-center gap-2", className)}>
      <div className={cn(
        "relative flex items-center justify-center rounded-full",
        sizeClasses[size],
        getGlowColor(score)
      )}>
        <svg 
          className="transform -rotate-90 w-full h-full" 
          viewBox="0 0 100 100"
        >
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="8"
            className="opacity-20"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className={cn(
              "transition-all duration-1000 ease-out",
              getScoreColor(score)
            )}
          />
        </svg>
        
        {/* Score text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={cn(
            "font-bold",
            getScoreColor(score),
            size === "sm" ? "text-xs" : size === "md" ? "text-sm" : "text-lg"
          )}>
            {score}%
          </span>
        </div>
      </div>

      {showLabel && (
        <span className="text-xs text-muted-foreground font-medium">
          Compatibility Score
        </span>
      )}
    </div>
  )
}