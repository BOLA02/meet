"use client"

import { useState, useEffect } from "react"
import { X, Sparkles, ArrowRight, Users, Video, Shield } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show modal after a short delay when the page loads
    const timer = setTimeout(() => {
      setIsOpen(true)
      // Add a small delay for the animation to trigger
      setTimeout(() => setIsVisible(true), 100)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
        onClick={() => setIsOpen(false)} 
      />

      {/* Modal */}
      <div className={`relative z-10 w-full max-w-lg transform overflow-hidden rounded-2xl bg-dark-500/95 backdrop-blur-md p-8 shadow-2xl transition-all duration-500 glass-card gradient-border ${
        isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
      }`}>
        <button
          title='close'
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-full p-2 text-gray-400 hover:bg-dark-400 hover:text-white transition-all duration-200 hover:scale-110"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Live indicator */}
        <div className="mb-6 flex items-center justify-center">
          <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
            <span className="text-sm font-medium text-red-400">LIVE NOW</span>
            <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
          </div>
        </div>

        <div className="text-center mb-6">
          <h2 className="mb-3 text-3xl font-bold text-white">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Meet</span>
          </h2>

          <p className="text-gray-300 leading-relaxed">
            We're excited to announce that Meet is now live! Experience the future of virtual 
            meetings with our powerful platform designed for modern teams.
          </p>
        </div>

        {/* Feature highlights */}
        <div className="mb-6 space-y-3">
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20">
              <Users className="h-4 w-4 text-purple-400" />
            </div>
            <span>Connect with up to 1000 participants</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20">
              <Video className="h-4 w-4 text-cyan-400" />
            </div>
            <span>HD video & crystal clear audio</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
              <Shield className="h-4 w-4 text-green-400" />
            </div>
            <span>Enterprise-grade security</span>
          </div>
        </div>

        <div className="mb-6 perspective-[1000px]">
          <div className="transform-style-3d animate-rotate-3d">
            <div className="relative h-48 w-full overflow-hidden rounded-xl">
              <Image 
                src="/images/meeting.png" 
                alt="Meet platform preview" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-600/80 via-dark-600/20 to-transparent"></div>
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-purple-400 to-cyan-400"></div>
                ))}
              </div>
            </div>
          </div>

          {/* 3D floating elements */}
          <div className="absolute -top-2 -right-2 h-12 w-12 rounded-full bg-purple-500/30 animate-float-rotate blur-sm"></div>
          <div
            className="absolute -bottom-2 -left-2 h-10 w-10 rounded-full bg-cyan-500/30 animate-float-rotate blur-sm"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            className="group flex-1 rounded-full bg-purple-500 px-6 py-3 text-dark-600 hover:bg-purple-400 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Get Started Free
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
          <Button
            variant="outline"
            className="flex-1 rounded-full border-cyan-500 px-6 py-3 text-cyan-400 hover:bg-cyan-500/10 hover:text-white transition-all duration-300 shadow-lg"
            onClick={() => setIsOpen(false)}
          >
            Learn More
          </Button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-400">
            Join <span className="text-purple-400 font-semibold">10,000+</span> users already using Meet
          </p>
        </div>
      </div>
    </div>
  )
}
