export default function StatsSection() {
  return (
    <section className="bg-dark-600 py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-mesh-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
          There's lots to <span className="text-purple-400">love</span> about Meet
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-300">
          Meet has been helping teams connect and collaborate effectively for years. Our platform is trusted by
          thousands of organizations worldwide for their virtual meeting needs.
        </p>
        <div className="mb-12 grid gap-8 md:grid-cols-2 md:gap-12 perspective-[1000px]">
          <div
            className="flex flex-col items-center justify-center glass-card rounded-lg p-8 text-center shadow-xl gradient-border glow-cyan transform hover:scale-105 transition-transform duration-300"
            style={{ transform: "rotateY(10deg) translateZ(20px)" }}
          >
            <span className="mb-2 text-4xl font-bold text-cyan-400">2 years</span>
            <p className="text-gray-200">of connecting people worldwide</p>

            {/* 3D floating elements */}
            <div
              className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-cyan-500/20 animate-float"
              style={{ animationDelay: "0.3s" }}
            ></div>
            <div
              className="absolute -bottom-4 -left-4 w-10 h-10 rounded-full bg-cyan-500/10 animate-float"
              style={{ animationDelay: "0.7s" }}
            ></div>
          </div>
          <div
            className="flex flex-col items-center justify-center glass-card rounded-lg p-8 text-center shadow-xl gradient-border glow transform hover:scale-105 transition-transform duration-300"
            style={{ transform: "rotateY(-10deg) translateZ(20px)" }}
          >
            <span className="mb-2 text-4xl font-bold text-purple-400">2,000+</span>
            <p className="text-gray-200">organizations trust Meet</p>

            {/* 3D floating elements */}
            <div
              className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-purple-500/20 animate-float"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute -bottom-4 -right-4 w-10 h-10 rounded-full bg-purple-500/10 animate-float"
              style={{ animationDelay: "0.9s" }}
            ></div>
          </div>
        </div>
        <div className="text-center">
          <h3 className="mb-4 text-xl font-semibold text-white">Explore Meet's Features</h3>
          <div className="flex justify-center space-x-2">
            <div className="rounded-full bg-purple-500/20 p-1 animate-pulse-slow">
              <div className="h-4 w-4 rounded-full bg-purple-500"></div>
            </div>
            <div className="rounded-full bg-purple-500/20 p-1 animate-pulse-slow">
              <div className="h-4 w-4 rounded-full bg-purple-500"></div>
            </div>
            <div className="rounded-full bg-purple-500/20 p-1 animate-pulse-slow">
              <div className="h-4 w-4 rounded-full bg-purple-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
