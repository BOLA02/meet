import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function PlatformSection() {
  return (
    <section className="bg-dark-600 py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-mesh-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl scroll-animate">
          The platform for all your <span className="text-purple-400">meeting needs</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-6 scroll-animate">
            <div className="flex items-start space-x-3 glass-card p-4 rounded-lg transform-style-3d animate-pulse-3d">
              <CheckCircle className="h-6 w-6 flex-shrink-0 text-purple-400" />
              <div>
                <h3 className="text-lg font-semibold text-white">Meet</h3>
                <p className="text-gray-300">Connect with your team or clients in high-quality video meetings</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 glass-card p-4 rounded-lg transform-style-3d animate-pulse-3d animation-delay-200">
              <CheckCircle className="h-6 w-6 flex-shrink-0 text-purple-400" />
              <div>
                <h3 className="text-lg font-semibold text-white">Collaborate</h3>
                <p className="text-gray-300">Work together on documents, share screens, and brainstorm ideas</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 glass-card p-4 rounded-lg transform-style-3d animate-pulse-3d animation-delay-400">
              <CheckCircle className="h-6 w-6 flex-shrink-0 text-purple-400" />
              <div>
                <h3 className="text-lg font-semibold text-white">Chat</h3>
                <p className="text-gray-300">Send messages, share files, and keep conversations organized</p>
              </div>
            </div>

            {/* Additional feature with image */}
            <div className="flex items-start space-x-3 glass-card p-4 rounded-lg transform-style-3d animate-pulse-3d animation-delay-600">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 animate-rotate-y">
                <Image
                  src="/images/ai-assistant.png"
                  alt="AI Assistant"
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">AI Assistant</h3>
                <p className="text-gray-300">Get smart suggestions and automated meeting summaries</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 perspective-[1000px] scroll-animate">
            <div className="aspect-video rounded-lg glass-card overflow-hidden shadow-lg col-span-2 animate-rotate-3d">
              <Image
                src="/images/meeting.png"
                alt="3D Virtual Meeting Space"
                width={400}
                height={240}
                className="h-full w-full rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-600/70 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white font-medium">Virtual Meeting Space</div>
            </div>
            <div className="aspect-video rounded-lg glass-card overflow-hidden shadow-lg animate-rotate-y animation-delay-300">
              <Image
                src="/images/collaboration.png"
                alt="3D Collaboration Tools"
                width={200}
                height={120}
                className="h-full w-full rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-600/70 to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-white text-sm font-medium">Collaboration</div>
            </div>
            <div className="aspect-video rounded-lg glass-card overflow-hidden shadow-lg animate-rotate-y animation-delay-600">
              <Image
                src="/images/analytics.png"
                alt="3D Analytics Dashboard"
                width={200}
                height={120}
                className="h-full w-full rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-600/70 to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-white text-sm font-medium">Analytics</div>
            </div>

            {/* Additional 3D images */}
            <div className="aspect-video rounded-lg glass-card overflow-hidden shadow-lg animate-rotate-x animation-delay-900">
              <Image
                src="/images/ai-features.png"
                alt="3D AI Features"
                width={200}
                height={120}
                className="h-full w-full rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-600/70 to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-white text-sm font-medium">AI Features</div>
            </div>
            <div className="aspect-video rounded-lg glass-card overflow-hidden shadow-lg animate-rotate-x animation-delay-1200">
              <Image
                src="/images/security.png"
                alt="3D Security"
                width={200}
                height={120}
                className="h-full w-full rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-600/70 to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-white text-sm font-medium">Security</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
