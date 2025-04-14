"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Check } from "lucide-react"

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <header className="border-b border-dark-300/20 bg-dark-600/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center">
            <span className="text-xl font-bold text-purple-400">Meet</span>
          </Link>
          <nav className="hidden md:flex" ref={dropdownRef}>
            <ul className="flex space-x-8">
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("features")}
                  className="flex items-center text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Features
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === "features" ? "rotate-180" : ""}`}
                  />
                </button>

                {activeDropdown === "features" && (
                  <div className="absolute top-full left-0 mt-2 w-[600px] rounded-lg glass-card shadow-xl gradient-border glow p-6 grid grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-10 duration-300">
                    <div>
                      <h3 className="text-purple-400 font-medium mb-3">Meet's Features</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="mr-2 rounded-full bg-purple-500/20 p-1">
                            <Check className="h-3 w-3 text-purple-400" />
                          </div>
                          <span className="text-gray-200 text-sm">High-Quality Video & Audio</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 rounded-full bg-purple-500/20 p-1">
                            <Check className="h-3 w-3 text-purple-400" />
                          </div>
                          <span className="text-gray-200 text-sm">Virtual Backgrounds & Blur Effects</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 rounded-full bg-purple-500/20 p-1">
                            <Check className="h-3 w-3 text-purple-400" />
                          </div>
                          <span className="text-gray-200 text-sm">Recording & Cloud Storage</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 rounded-full bg-purple-500/20 p-1">
                            <Check className="h-3 w-3 text-purple-400" />
                          </div>
                          <span className="text-gray-200 text-sm">AI-Powered Meeting Insights</span>
                        </li>
                      </ul>

                      <h3 className="text-purple-400 font-medium mt-6 mb-3">Collaboration Tools</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="mr-2 rounded-full bg-purple-500/20 p-1">
                            <Check className="h-3 w-3 text-purple-400" />
                          </div>
                          <span className="text-gray-200 text-sm">Whiteboard & Annotation</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 rounded-full bg-purple-500/20 p-1">
                            <Check className="h-3 w-3 text-purple-400" />
                          </div>
                          <span className="text-gray-200 text-sm">Document Sharing & Live Editing</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 rounded-full bg-purple-500/20 p-1">
                            <Check className="h-3 w-3 text-purple-400" />
                          </div>
                          <span className="text-gray-200 text-sm">Polls & Surveys</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-cyan-400 font-medium mb-3">User Experience & Interaction</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="mr-2 rounded-full bg-cyan-500/20 p-1">
                            <Check className="h-3 w-3 text-cyan-400" />
                          </div>
                          <span className="text-gray-200 text-sm">Chat & Messaging</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 rounded-full bg-cyan-500/20 p-1">
                            <Check className="h-3 w-3 text-cyan-400" />
                          </div>
                          <span className="text-gray-200 text-sm">Reactions & Emojis</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 rounded-full bg-cyan-500/20 p-1">
                            <Check className="h-3 w-3 text-cyan-400" />
                          </div>
                          <span className="text-gray-200 text-sm">Hand Raise & Speaking Queue</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 rounded-full bg-cyan-500/20 p-1">
                            <Check className="h-3 w-3 text-cyan-400" />
                          </div>
                          <span className="text-gray-200 text-sm">Breakout Rooms</span>
                        </li>
                      </ul>

                      <h3 className="text-cyan-400 font-medium mt-6 mb-3">Security & Privacy</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="mr-2 rounded-full bg-cyan-500/20 p-1">
                            <Check className="h-3 w-3 text-cyan-400" />
                          </div>
                          <span className="text-gray-200 text-sm">End-to-End Encryption</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 rounded-full bg-cyan-500/20 p-1">
                            <Check className="h-3 w-3 text-cyan-400" />
                          </div>
                          <span className="text-gray-200 text-sm">Meeting Lock & Waiting Room</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 rounded-full bg-cyan-500/20 p-1">
                            <Check className="h-3 w-3 text-cyan-400" />
                          </div>
                          <span className="text-gray-200 text-sm">User Authentication & Role Management</span>
                        </li>
                      </ul>
                    </div>

                    <div className="col-span-2 mt-4 grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="aspect-video rounded-lg overflow-hidden">
                          <Image
                            src={`/images/user${i}.png`}
                            alt="Video call participant"
                            width={160}
                            height={90}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("solutions")}
                  className="flex items-center text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Solutions
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === "solutions" ? "rotate-180" : ""}`}
                  />
                </button>

                {activeDropdown === "solutions" && (
                  <div className="absolute top-full left-0 mt-2 w-[600px] rounded-lg glass-card shadow-xl gradient-border glow p-6 grid grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-10 duration-300">
                    <div>
                      <h3 className="text-purple-400 font-medium mb-3">By Industry</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="mr-2 rounded-full bg-purple-500/20 p-1">
                            <Check className="h-3 w-3 text-purple-400" />
                          </div>
                          <span className="text-gray-200 text-sm">Enterprise & Business</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 rounded-full bg-purple-500/20 p-1">
                            <Check className="h-3 w-3 text-purple-400" />
                          </div>
                          <span className="text-gray-200 text-sm">Education & Learning</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 rounded-full bg-purple-500/20 p-1">
                            <Check className="h-3 w-3 text-purple-400" />
                          </div>
                          <span className="text-gray-200 text-sm">Healthcare & Telemedicine</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 rounded-full bg-purple-500/20 p-1">
                            <Check className="h-3 w-3 text-purple-400" />
                          </div>
                          <span className="text-gray-200 text-sm">Government & Public Sector</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-cyan-400 font-medium mb-3">By Use Case</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="mr-2 rounded-full bg-cyan-500/20 p-1">
                            <Check className="h-3 w-3 text-cyan-400" />
                          </div>
                          <span className="text-gray-200 text-sm">Virtual Events & Webinars</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 rounded-full bg-cyan-500/20 p-1">
                            <Check className="h-3 w-3 text-cyan-400" />
                          </div>
                          <span className="text-gray-200 text-sm">Remote Team Collaboration</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 rounded-full bg-cyan-500/20 p-1">
                            <Check className="h-3 w-3 text-cyan-400" />
                          </div>
                          <span className="text-gray-200 text-sm">Online Training & Workshops</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 rounded-full bg-cyan-500/20 p-1">
                            <Check className="h-3 w-3 text-cyan-400" />
                          </div>
                          <span className="text-gray-200 text-sm">Customer Support & Engagement</span>
                        </li>
                      </ul>
                    </div>

                    <div className="col-span-2 mt-4 grid grid-cols-3 gap-2">
                      {[4, 5, 6].map((i) => (
                        <div key={i} className="aspect-video rounded-lg overflow-hidden">
                          <Image
                            src={`/images/user${i}.png`}
                            alt="Video call participant"
                            width={160}
                            height={90}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
              <li>
                <Link href="#" className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="#"
            className="hidden text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors md:block"
          >
            Log in
          </Link>
          <Button className="rounded-full bg-purple-500 px-4 py-2 text-dark-600 hover:bg-purple-400 transition-colors shadow-md hover:shadow-purple-500/20">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  )
}
