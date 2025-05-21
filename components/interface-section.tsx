import Image from "next/image"
import React from 'react';

export default function InterfaceSection() {
  return (
    <section className="bg-dark-500 py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-600 to-dark-500"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
          Simple, <span className="text-purple-400">user friendly</span> interface
        </h2>
        <div className="mx-auto max-w-4xl">
          <div
            className="mb-8 overflow-hidden rounded-lg glass-card p-4 shadow-xl gradient-border glow perspective-[1000px]"
            style={{ transform: "rotateX(5deg)" }}
          >
            {/* First interface content */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="rounded-full bg-dark-400/60 px-4 py-1 text-sm text-gray-300">meet.com/meeting</div>
              <div className="w-24"></div>
            </div>
            <div className="grid grid-cols-4 gap-2 transform-style-3d">
              {/* Video grid */}
              {[
                "/images/black.png",
                "/images/businesswoman.png",
                "/images/portait.png",
                "/images/business.png",
                /* ... other images ... */
              ].map((src, i) => (
                <div
                  key={i}
                  className="aspect-video rounded bg-dark-300/60 overflow-hidden transform hover:scale-105 transition-transform duration-300"
                  style={{
                    transform: `translateZ(${(i % 4) * 5}px)`,
                    boxShadow: `0 ${(i % 4) * 2}px ${(i % 4) * 3}px rgba(0,0,0,0.2)`,
                  }}
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt="Video call participant"
                    width={120}
                    height={50}
                    className="h-full w-full rounded object-cover"
                  />
                </div>
              ))}
            </div>
            {/* Control buttons */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex space-x-2">
                <div className="rounded-full bg-dark-400/60 p-2">
                  <div className="h-5 w-5 rounded-full bg-purple-500/80"></div>
                </div>
                <div className="flex space-x-2">
                  <div className="rounded-full bg-dark-400/60 p-2">
                    <div className="h-5 w-5 rounded-full bg-purple-500/80"></div>
                  </div>
                  <div className="rounded-full bg-dark-400/60 p-2">
                    <div className="h-5 w-5 rounded-full bg-purple-500/80"></div>
                  </div>
                  <div className="rounded-full bg-dark-400/60 p-2">
                    <div className="h-5 w-5 rounded-full bg-purple-500/80"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Second interface card */}
            <div
              className="overflow-hidden rounded-lg glass-card p-4 shadow-xl gradient-border glow perspective-[1000px]"
              style={{ transform: "rotateX(-5deg)" }}
            >
              {/* Similar content for second card */}
              {/* ... */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}