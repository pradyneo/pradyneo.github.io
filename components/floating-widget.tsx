"use client"

import { cn } from "@/lib/utils"

interface FloatingWidgetProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function FloatingWidget({
  children,
  className,
  hover = true,
}: FloatingWidgetProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300",
        "shadow-[0_4px_32px_rgba(0,0,0,0.06),0_1px_4px_rgba(0,0,0,0.04)]",
        hover &&
          "hover:shadow-[0_8px_48px_rgba(0,0,0,0.1),0_2px_8px_rgba(0,0,0,0.06)] hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  )
}
