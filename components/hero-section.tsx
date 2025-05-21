import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="bg-dark-600 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-dark-500 to-dark-600 opacity-60"></div>
      <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center scroll-animate">
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Your ultimate platform for <span className="text-purple-400">virtual</span> and{" "}
              <span className="text-purple-400">hybrid events</span>
            </h1>
            <p className="mb-8 text-lg text-gray-300">Host, Connect, & Engage Seamlessly...</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button className="rounded-full bg-purple-500 px-6 py-3 text-dark-600 hover:bg-purple-400 transition-colors shadow-lg hover:shadow-purple-500/30 font-medium">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-purple-500 px-6 py-3 text-purple-400  hover:shadow-purple-500/30 transition-colors shadow-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
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
                  className={`aspect-square rounded-full glass-card overflow-hidden shadow-lg transform-style-3d animate-rotate-3d animation-delay-${i * 100}`}
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt="Video call participant"
                    width={35}
                    height={40}
                    className="h-full w-full rounded-full object-fit"
                  />
                </div>
              ))}
            </div>

            {/* Additional floating 3D elements
            <div className="absolute -top-10 -right-10 w-40 h-40 perspective-[1000px]">
              <div className="w-full h-full rounded-lg glass-card overflow-hidden shadow-lg transform-style-3d animate-rotate-y animation-delay-500">
                <Image
                  src="/images/analytics.png"
                  alt="3D Analytics Dashboard"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 w-32 h-32 perspective-[1000px]">
              <div className="w-full h-full rounded-lg glass-card overflow-hidden shadow-lg transform-style-3d animate-rotate-x animation-delay-1000">
                <Image
                  src="/images/devices.png"
                  alt="3D Devices"
                  width={120}
                  height={120}
                  className="h-full w-full object-cover"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
