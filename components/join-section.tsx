import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function JoinSection() {
  return (
    <section className="bg-gradient-to-r from-cyan-500/80 to-cyan-600/80 py-12 md:py-16 relative">
      <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>

      {/* 3D floating elements */}
      <div className="absolute top-0 left-1/4 w-24 h-24 perspective-[1000px]">
        <div className="w-full h-full rounded-lg overflow-hidden shadow-lg transform-style-3d animate-rotate-3d">
          <Image
            src="/images/analytics.png"
            alt="3D Element"
            width={96}
            height={96}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="absolute bottom-0 right-1/4 w-20 h-20 perspective-[1000px]">
        <div className="w-full h-full rounded-lg overflow-hidden shadow-lg transform-style-3d animate-rotate-3d animation-delay-1000">
          <Image
            src="/images/collaboration.png"
            alt="3D Element"
            width={80}
            height={80}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="mb-6 text-3xl font-bold text-dark-600 md:text-4xl scroll-animate">
          Join Thousands of Meet users all over the world
        </h2>
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 scroll-animate">
          <Button className="rounded-full bg-dark-600 px-6 py-3 text-white hover:bg-dark-500 transition-colors shadow-lg hover:shadow-dark-600/30 font-medium">
            Sign Up For Free
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-dark-600 bg-transparent px-6 py-3 text-dark-600 hover:bg-dark-600/10 transition-colors shadow-lg font-medium"
          >
            Contact Sales Team
          </Button>
        </div>

        <div className="mt-8 flex justify-center space-x-4 scroll-animate">
          <div className="perspective-[1000px]">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-dark-600 shadow-lg transform-style-3d animate-rotate-y">
              <Image src="/images/user1.png" alt="User" width={64} height={64} className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="perspective-[1000px]">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-dark-600 shadow-lg transform-style-3d animate-rotate-y animation-delay-200">
              <Image src="/images/user2.png" alt="User" width={64} height={64} className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="perspective-[1000px]">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-dark-600 shadow-lg transform-style-3d animate-rotate-y animation-delay-400">
              <Image src="/images/user3.png" alt="User" width={64} height={64} className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="perspective-[1000px]">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-dark-600 shadow-lg transform-style-3d animate-rotate-y animation-delay-600">
              <Image src="/images/user4.png" alt="User" width={64} height={64} className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="perspective-[1000px]">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-dark-600 shadow-lg transform-style-3d animate-rotate-y animation-delay-800">
              <Image src="/images/user5.png" alt="User" width={64} height={64} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
