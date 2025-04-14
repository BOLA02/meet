export default function ControlSection() {
  return (
    <section className="bg-dark-600 py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-mesh-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
          Take <span className="text-purple-400">control</span> of your meetings with our services
        </h2>
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="glass-card rounded-lg p-6 shadow-xl gradient-border transform hover:scale-105 transition-transform duration-300">
            <h3 className="mb-4 text-xl font-semibold text-white">Scheduling Tool</h3>
            <p className="mb-4 text-gray-300">Easily schedule meetings with our intuitive calendar integration</p>
            <div className="flex space-x-2">
              <div className="rounded-full bg-blue-500 p-1 animate-pulse-slow">
                <div className="h-4 w-4 rounded-full bg-white"></div>
              </div>
              <div className="rounded-full bg-green-500 p-1 animate-pulse-slow">
                <div className="h-4 w-4 rounded-full bg-white"></div>
              </div>
              <div className="rounded-full bg-yellow-500 p-1 animate-pulse-slow">
                <div className="h-4 w-4 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
          <div className="glass-card rounded-lg p-6 shadow-xl gradient-border transform hover:scale-105 transition-transform duration-300">
            <h3 className="mb-4 text-xl font-semibold text-white">Focus on Connections</h3>
            <p className="mb-4 text-gray-300">Build stronger relationships with high-quality video and audio</p>
            <div className="flex space-x-2">
              <div className="rounded-full bg-red-500 p-1 animate-pulse-slow">
                <div className="h-4 w-4 rounded-full bg-white"></div>
              </div>
              <div className="rounded-full bg-purple-500 p-1 animate-pulse-slow">
                <div className="h-4 w-4 rounded-full bg-white"></div>
              </div>
              <div className="rounded-full bg-purple-500 p-1 animate-pulse-slow">
                <div className="h-4 w-4 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
