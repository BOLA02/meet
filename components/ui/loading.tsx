import { Loader2 } from "lucide-react"

interface LoadingProps {
  size?: "sm" | "md" | "lg"
  text?: string
  className?: string
}

export function Loading({ size = "md", text, className = "" }: LoadingProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8"
  }

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <Loader2 className={`${sizeClasses[size]} animate-spin text-purple-400`} />
      {text && <span className="text-sm text-gray-400">{text}</span>}
    </div>
  )
}

export function LoadingSpinner({ size = "md", className = "" }: Omit<LoadingProps, "text">) {
  return <Loading size={size} className={className} />
}

export function LoadingPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-dark-600">
      <div className="text-center">
        <div className="mb-4">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-purple-500 border-t-transparent mx-auto"></div>
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading Meet</h2>
        <p className="text-gray-400">Please wait while we prepare your experience...</p>
      </div>
    </div>
  )
}

export function LoadingCard() {
  return (
    <div className="rounded-lg bg-dark-500/50 p-6 animate-pulse">
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 bg-gray-600 rounded-full"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-600 rounded w-3/4"></div>
          <div className="h-3 bg-gray-600 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  )
} 