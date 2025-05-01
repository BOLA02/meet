import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-dark-700 px-8 relative">
      <div className="absolute inset-0 bg-mesh-pattern opacity-5"></div>

      {/* 3D floating elements */}
      <div className="absolute bottom-10 left-10 w-16 h-16 perspective-[1000px] hidden md:block">
        <div className="w-full h-full rounded-lg overflow-hidden shadow-lg transform-style-3d animate-rotate-3d">
          {/* <Image
            src="/images/analytics.png"
            alt="3D Element"
            width={64}
            height={64}
            className="h-full w-full object-cover"
          /> */}
        </div>
      </div>

      <div className="absolute top-10 right-10 w-12 h-12 perspective-[1000px] hidden md:block">
        <div className="w-full h-full rounded-lg overflow-hidden shadow-lg transform-style-3d animate-rotate-3d animation-delay-500">
          {/* <Image
            src="/images/collaboration.png"
            alt="3D Element"
            width={48}
            height={48}
            className="h-full w-full object-cover"
          /> */}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-8 flex flex-col items-start justify-between space-y-8 md:flex-row md:space-y-0">
          <div className="max-w-xs">
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-bold text-purple-400">Meet</h3>
              <div className="ml-2 w-8 h-8 perspective-[1000px]">
                {/* <div className="w-full h-full rounded-lg overflow-hidden shadow-lg transform-style-3d animate-rotate-y">
                  <Image
                    src="/images/logo.png"
                    alt="3D Logo"
                    width={32}
                    height={32}
                    className="h-full w-full object-contain"
                  />
                </div> */}
              </div>
            </div>
            <p className="text-sm text-gray-300">
              Virtual meeting platform for teams and organizations to connect and collaborate effectively.
            </p>
            <Button className="mt-4 rounded-full bg-purple-500 px-4 py-2 text-dark-600 hover:bg-purple-400 transition-colors shadow-md hover:shadow-purple-500/20">
              Sign Up
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
            <div>
              <h4 className="mb-3 font-semibold text-white">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-white">Products</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                    Meetings
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                    Webinars
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-white">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-white">Connect</h4>
              <div className="flex space-x-3">
                {["Twitter", "LinkedIn", "Facebook", "Instagram"].map((social, i) => (
                  <div key={i} className="perspective-[1000px]">
                    <div
                      className="w-8 h-8 rounded-full bg-dark-500 flex items-center justify-center transform-style-3d animate-rotate-y animation-delay-300"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      <span className="text-purple-400 text-xs">{social.charAt(0)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-dark-500 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Meet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
