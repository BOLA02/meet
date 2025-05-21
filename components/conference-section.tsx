import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function ConferenceSection() {
  const features = [
    "HD video quality",
    "Screen sharing",
    "Recording capabilities",
    "Virtual backgrounds",
    "Breakout rooms",
    "Live captions",
  ]

  return (
    <section className="bg-dark-500 py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-600 to-dark-500"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl scroll-animate">
          <span className="text-purple-400">Powerful</span> Virtual Video Conferencing Platform
        </h2>
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-4 scroll-animate">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 glass-card p-3 rounded-lg transform-style-3d animate-pulse-3d animation-delay-${index * 100}`}
              >
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-purple-400" />
                <span className="text-gray-200">{feature}</span>
              </div>
            ))}

            {/* Additional features with images */}
            <div className="flex items-center space-x-3 glass-card p-3 rounded-lg transform-style-3d animate-pulse-3d animation-delay-1000">
            
              <CheckCircle className="h-5 w-5 flex-shrink-0 text-purple-400" />
              
              <span className="text-gray-200">AI Noise Suppression</span>
            </div>

            <div className="flex items-center space-x-3 glass-card p-3 rounded-lg transform-style-3d animate-pulse-3d animation-delay-1200">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 animate-rotate-y animation-delay-200">
                <Image
                  src="/images/robot.png"
                  alt="Smart Meeting Assistant"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-gray-200">Smart Meeting Assistant</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 perspective-[1000px] scroll-animate">
            <div className="col-span-2 rounded-lg glass-card overflow-hidden shadow-xl gradient-border glow animate-rotate-3d">
              <Image
                src="/images/socila.png"
                alt="3D Video conference"
                width={300}
                height={150}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div className="rounded-lg glass-card overflow-hidden shadow-xl gradient-border animate-rotate-y animation-delay-300">
              <Image
                src="/images/record.png"
                alt="3D Participant"
                width={150}
                height={100}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div className="rounded-lg glass-card overflow-hidden shadow-xl gradient-border animate-rotate-y animation-delay-600">
              <Image
                src="/images/professional.png"
                alt="3D Participant"
                width={150}
                height={100}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>

            {/* Additional 3D images */}
            <div className="rounded-lg glass-card overflow-hidden shadow-xl gradient-border animate-rotate-x animation-delay-900">
              <Image
                src="/images/breakout.png"
                alt="3D Screen Sharing"
                width={150}
                height={100}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div className="rounded-lg glass-card overflow-hidden shadow-xl gradient-border animate-rotate-x animation-delay-1200">
              <Image
                src="images/smart.png"
                alt="3D AI Features"
                width={150}
                height={100}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
