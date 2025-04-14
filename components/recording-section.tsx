import Image from "next/image"
import { Button } from "@/components/ui/button"
import React from 'react';

export default function RecordingSection() {
  return (
    <section className="bg-dark-500 py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-600 to-dark-500"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl scroll-animate">
          Elevate your meetings with <span className="text-purple-400">AI powered</span> recording
        </h2>
        <div className="mb-8 flex justify-center space-x-4 scroll-animate">
          <Button className="rounded-full bg-purple-500 px-6 py-3 text-dark-600 hover:bg-purple-400 transition-colors shadow-lg hover:shadow-purple-500/30 font-medium">
            Learn More
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-purple-500 px-6 py-3 text-purple-400 hover:bg-purple-500/10 transition-colors shadow-lg"
          >
            Watch Demo Video
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="perspective-[1000px] scroll-animate">
            <div className="glass-card rounded-lg p-6 shadow-xl gradient-border glow transform-style-3d animate-rotate-3d">
              <h3 className="text-xl font-semibold text-white mb-4">Automatic Transcription</h3>
              <div className="relative h-60 rounded-lg overflow-hidden">
                <Image src="/images/ai-transcription.png" alt="AI Transcription" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-600/70 to-transparent"></div>
              </div>
              <p className="mt-4 text-gray-300">AI-powered transcription converts speech to text in real-time</p>
            </div>
          </div>

          <div className="perspective-[1000px] scroll-animate">
            <div className="glass-card rounded-lg p-6 shadow-xl gradient-border glow transform-style-3d animate-rotate-3d animation-delay-500">
              <h3 className="text-xl font-semibold text-white mb-4">Smart Meeting Summaries</h3>
              <div className="relative h-60 rounded-lg overflow-hidden">
                <Image src="/images/ai-summaries.png" alt="AI Summaries" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-600/70 to-transparent"></div>
              </div>
              <p className="mt-4 text-gray-300">
                Get AI-generated summaries of your meetings with key points and action items
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl overflow-hidden rounded-lg glass-card shadow-xl gradient-border glow perspective-[1000px] scroll-animate">
          <div className="relative aspect-video transform-style-3d animate-rotate-x">
            <Image src="/images/video-demo.png" alt="3D Video recording demo" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-600 to-transparent opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/80 text-white shadow-lg hover:bg-purple-400/80  cursor-pointer transform hover:scale-110 transition-transform duration-300 animate-pulse-3d">
                <div className="h-0 w-0 border-y-8 border-y-transparent border-l-12 border-l-white translate-x-1"></div>
              </div>
            </div>

            {/* 3D floating elements */}
            <div
              className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-purple-500/20 animate-float-rotate"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute bottom-1/3 right-1/4 w-12 h-12 rounded-full bg-cyan-500/20 animate-float-rotate"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/3 right-1/3 w-8 h-8 rounded-full bg-cyan-500/20 animate-float-rotate"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
