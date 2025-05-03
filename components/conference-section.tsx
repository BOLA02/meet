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
                  src="https://cdn.pixabay.com/photo/2017/12/10/17/00/robot-3010309_1280.jpg"
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
                src="https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_1280.png"
                alt="3D Video conference"
                width={300}
                height={150}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div className="rounded-lg glass-card overflow-hidden shadow-xl gradient-border animate-rotate-y animation-delay-300">
              <Image
                src="https://cdn.pixabay.com/photo/2017/01/29/13/21/mobile-devices-2017980_1280.png"
                alt="3D Participant"
                width={150}
                height={100}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div className="rounded-lg glass-card overflow-hidden shadow-xl gradient-border animate-rotate-y animation-delay-600">
              <Image
                src="https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png"
                alt="3D Participant"
                width={150}
                height={100}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>

            {/* Additional 3D images */}
            <div className="rounded-lg glass-card overflow-hidden shadow-xl gradient-border animate-rotate-x animation-delay-900">
              <Image
                src="https://cdn.pixabay.com/photo/2018/05/18/15/30/webdesign-3411373_1280.jpg"
                alt="3D Screen Sharing"
                width={150}
                height={100}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div className="rounded-lg glass-card overflow-hidden shadow-xl gradient-border animate-rotate-x animation-delay-1200">
              <Image
                src="https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg"
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
