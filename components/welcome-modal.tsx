"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show modal after a short delay when the page loads
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md transform overflow-hidden rounded-2xl bg-dark-500 p-6 shadow-xl transition-all animate-in fade-in slide-in-from-bottom-10 duration-300 glass-card gradient-border">
        <button
          title='close'
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-full p-1 text-gray-400 hover:bg-dark-400 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Live indicator */}
        <div className="mb-4 flex items-center">
          <div className="mr-2 h-3 w-3 rounded-full bg-red-500 animate-pulse"></div>
          <span className="text-sm font-medium text-gray-300">LIVE NOW</span>
        </div>

        <h2 className="mb-2 text-2xl font-bold text-white">
          Welcome to <span className="text-purple-400">Meet</span>
        </h2>

        <p className="mb-4 text-gray-300">
          We're excited to announce that Meet is now live! Experience the future of virtual 
          meetings with our powerful platform.
        </p>

        <div className="mb-6 perspective-[1000px]">
          <div className="transform-style-3d animate-rotate-3d">
            <div className="relative h-40 w-full overflow-hidden rounded-lg">
              <Image src="/images/meeting.png" alt="Meet platform preview" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-600/70 to-transparent"></div>
            </div>
          </div>

          {/* 3D floating elements */}
          <div className="absolute -top-2 -right-2 h-10 w-10 rounded-full bg-purple-500/20 animate-float-rotate"></div>
          <div
            className="absolute -bottom-2 -left-2 h-8 w-8 rounded-full bg-cyan-500/20 animate-float-rotate"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        <div className="flex space-x-3">
          <Button
            className="flex-1 rounded-full bg-purple-500 px-4 py-2 text-dark-600 hover:bg-purple-400 transition-colors shadow-lg hover:shadow-purple-500/30"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Button>
          <Button
            variant="outline"
            className="flex-1 rounded-full border-cyan-500 px-4 py-2 text-cyan-400 hover:bg-cyan-500/10 hover:text-white transition-colors shadow-lg"
            onClick={() => setIsOpen(false)}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}
