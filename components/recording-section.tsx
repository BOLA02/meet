"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function RecordingSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  // Hide overlay a few seconds after video starts playing
  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => setShowOverlay(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  // Show overlay again when video ends
  useEffect(() => {
    const video = videoRef.current;

    const handleEnded = () => {
      setIsPlaying(false);
      setShowOverlay(true);
    };

    if (video) {
      video.addEventListener("ended", handleEnded);
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", handleEnded);
      }
    };
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
      setShowOverlay(true);
    } else {
      video.pause();
      setIsPlaying(false);
      setShowOverlay(true);
    }
  };

  return (
    <section className="bg-dark-500 py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-600 to-dark-500"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl scroll-animate">
          Elevate your meetings with{" "}
          <span className="text-purple-400">AI powered</span> recording
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
              <h3 className="text-xl font-semibold text-white mb-4">
                Automatic Transcription
              </h3>
              <div className="relative h-60 rounded-lg overflow-hidden">
                <Image
                  src="/images/presentation.png"
                  alt="AI Transcription"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-600/70 to-transparent"></div>
              </div>
              <p className="mt-4 text-gray-300">
                AI-powered transcription converts speech to text in real-time
              </p>
            </div>
          </div>

          <div className="perspective-[1000px] scroll-animate">
            <div className="glass-card rounded-lg p-6 shadow-xl gradient-border glow transform-style-3d animate-rotate-3d animation-delay-500">
              <h3 className="text-xl font-semibold text-white mb-4">
                Smart Meeting Summaries
              </h3>
              <div className="relative h-60 rounded-lg overflow-hidden">
                <Image
                  src="/images/Team Meeting Discussion.png"
                  alt="AI Summaries"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-600/70 to-transparent"></div>
              </div>
              <p className="mt-4 text-gray-300">
                Get AI-generated summaries of your meetings with key points and
                action items
              </p>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="relative w-full max-w-3xl aspect-video mx-auto rounded-lg overflow-hidden shadow-xl gradient-border">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            playsInline
            controls={isPlaying}
          >
            <source src="/videos/meet.mp4" type="video/mp4" />
          </video>

          <AnimatePresence>
            {showOverlay && (
              <motion.button
                key="overlay"
                onClick={togglePlayPause}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-purple-700/40 hover:bg-purple-800/50 transition-colors"
              >
                {!isPlaying ? (
                  <svg
                    className="w-16 h-16 text-white bg-purple-600 rounded-full p-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                ) : (
                  <svg
                    className="w-16 h-16 text-white bg-purple-600 rounded-full p-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                  </svg>
                )}
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
