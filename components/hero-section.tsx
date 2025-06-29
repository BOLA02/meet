import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Users, Video, Shield } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="bg-dark-600 py-16 md:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-dark-500 to-dark-600 opacity-60"></div>
      <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full animate-float blur-xl"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-cyan-500/10 rounded-full animate-float animation-delay-1000 blur-xl"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-purple-400/10 rounded-full animate-float animation-delay-2000 blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center scroll-animate space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 text-sm text-purple-400 animate-pulse-slow">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                Live Now - Join 10,000+ users worldwide
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Your ultimate platform for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  virtual
                </span>{" "}
                and{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  hybrid events
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
                Host, connect, and engage seamlessly with our powerful platform designed for modern teams and organizations.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Users className="h-4 w-4 text-purple-400" />
                <span>Up to 1000 participants</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Video className="h-4 w-4 text-cyan-400" />
                <span>HD video & audio</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Shield className="h-4 w-4 text-green-400" />
                <span>Enterprise security</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="group rounded-full bg-purple-500 px-8 py-4 text-dark-600 hover:bg-purple-400 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 font-medium text-base">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button
                variant="outline"
                className="group rounded-full border-purple-500 px-8 py-4 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 shadow-lg font-medium text-base"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-dark-600 bg-gradient-to-br from-purple-400 to-cyan-400 flex items-center justify-center text-xs font-bold text-white">
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-purple-400 font-semibold">4.9/5</span> rating from 2,000+ reviews
              </div>
            </div>
          </div>

          {/* Right Column - 3D Visual */}
          <div className="relative perspective-[1000px] scroll-animate">
            <div className="grid grid-cols-3 gap-3 transform-style-3d">
              {[
                "/assets/Ellipse 567.png",
                "/assets/Ellipse 554.png",
                "/assets/Ellipse 555.png",
                "/assets/Ellipse 564.png",
                "/assets/user3.png",
                "/assets/Ellipse 566.png",
              ].map((src, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-full glass-card overflow-hidden shadow-lg transform-style-3d animate-rotate-3d animation-delay-${i * 100} hover:scale-110 transition-transform duration-300`}
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt="Video call participant"
                    width={80}
                    height={80}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Floating 3D elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 perspective-[1000px] animate-float-rotate">
              <div className="w-full h-full rounded-lg glass-card overflow-hidden shadow-lg transform-style-3d animate-rotate-y">
                <div className="h-full w-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                  <Video className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 w-32 h-32 perspective-[1000px] animate-float-rotate animation-delay-1000">
              <div className="w-full h-full rounded-lg glass-card overflow-hidden shadow-lg transform-style-3d animate-rotate-x">
                <div className="h-full w-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            {/* Connection Lines */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 300 300">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <path
                  d="M50 50 Q150 25 250 50 M50 150 Q150 125 250 150 M50 250 Q150 225 250 250"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse-slow"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
