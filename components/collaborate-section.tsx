import Image from "next/image"

export default function CollaborateSection() {
  return (
    <section className="bg-dark-600 py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-mesh-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl scroll-animate">
          Collaborate with <span className="text-teal-400">millions</span> of people worldwide
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="perspective-[1000px] scroll-animate">
            <div className="glass-card rounded-lg p-6 shadow-xl gradient-border glow transform-style-3d animate-rotate-3d">
              <h3 className="text-xl font-semibold text-white mb-4">Global Collaboration</h3>
              <div className="relative h-60 rounded-lg overflow-hidden">
                <Image src="/images/global-collab.png" alt="Global Collaboration" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-600/70 to-transparent"></div>
              </div>
              <p className="mt-4 text-gray-300">Connect with team members across different time zones and locations</p>
            </div>
          </div>

          <div className="perspective-[1000px] scroll-animate">
            <div className="glass-card rounded-lg p-6 shadow-xl gradient-border glow transform-style-3d animate-rotate-3d animation-delay-500">
              <h3 className="text-xl font-semibold text-white mb-4">Real-time Document Editing</h3>
              <div className="relative h-60 rounded-lg overflow-hidden">
                <Image src="/images/document-editing.png" alt="Document Collaboration" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-600/70 to-transparent"></div>
              </div>
              <p className="mt-4 text-gray-300">Edit documents together in real-time with multiple collaborators</p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl glass-card rounded-lg p-6 shadow-xl gradient-border glow scroll-animate">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Participants (15)</h3>
            <div className="rounded-full bg-dark-400/60 px-3 py-1 text-sm text-gray-300">Search</div>
          </div>
          <div className="space-y-3">
            {[
              "/images/user1.png",
              "/images/user2.png",
              "/images/user3.png",
              "/images/user4.png",
              "/images/user5.png",
            ].map((src, i) => (
              <div
                key={i}
                className={`flex items-center justify-between rounded-lg bg-dark-400/40 p-3 shadow-sm transform-style-3d animate-pulse-3d animation-delay-${i * 200}`}
              >
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-dark-300/60 border border-teal-500/30 animate-rotate-y animation-delay-500">
                    <Image
                      src={src || "/placeholder.svg"}
                      alt="User avatar"
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-white">User Name {i + 1}</p>
                    <p className="text-sm text-teal-300">user{i + 1}@example.com</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="rounded-full bg-teal-500/20 p-1">
                    <div className="h-4 w-4 rounded-full bg-teal-500 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
