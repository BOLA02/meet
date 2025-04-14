"use client"

import type React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ScrollAnimationProvider({ children }: { children: React.ReactNode }) {
  // Initialize the scroll animation hook
  useScrollAnimation()

  return <>{children}</>
}
