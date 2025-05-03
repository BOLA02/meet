import Image from "next/image"

export default function TestimonialsSection() {
  const testimonials = [
    {
      content:
        "Meet has transformed how our team collaborates. The video quality is exceptional and the interface is intuitive.",
      author: "Sarah Johnson",
      role: "Product Manager",
      avatar: "/images/user5.png",
      company: "TechCorp",
      companyLogo: "/images/Great Logo Design.png",
    },
    {
      content: "We've tried many video conferencing tools, but Meet stands out with its reliability and feature set.",
      author: "Michael Chen",
      role: "CTO, TechStart",
      avatar: "/assets/Ellipse 134.png",
      company: "TechStart",
      companyLogo: "/images/logo1.png",
    },
    {
      content: "The AI recording feature saves us hours of note-taking and helps us focus on the conversation instead.",
      author: "Jessica Brown",
      role: "Team Lead",
      avatar: "/assets/Ellipse 534.png",
      company: "InnovateCo",
      companyLogo: "/images/logo1.png",
    },
    {
      content: "Meet's 3D interface and immersive features make virtual meetings feel more engaging and productive.",
      author: "David Wilson",
      role: "Design Director",
      avatar: "/images/user5.png",
      company: "CreativeStudio",
      companyLogo: "/images/Great Logo Design.png",
    },
    {
      content: "The security features and encryption give us peace of mind when discussing sensitive information.",
      author: "Emily Rodriguez",
      role: "Security Officer",
      avatar: "/assets/Ellipse 538.png",
      company: "SecureTech",
      companyLogo: "/images/logo1.png",
    },
    {
      content:
        "Meet's integration capabilities with our existing tools made adoption across our organization seamless.",
      author: "Robert Kim",
      role: "IT Director",
      avatar: "/images/user5.png",
      company: "GlobalCorp",
      companyLogo: "/images/Great Logo Design.png",
    },
  ]

  return (
    <section className="bg-dark-500 py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-600 to-dark-500"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl scroll-animate">
          What People <span className="text-purple-400">Say</span> About Us
        </h2>
        <div className="grid gap-6 md:grid-cols-3 perspective-[1000px]">
          {testimonials.slice(0, 6).map((testimonial, index) => {
            return (
              <div
                key={index}
                className={`glass-card rounded-lg p-6 shadow-xl gradient-border transform-style-3d animate-rotate-3d scroll-animate animation-delay-${index * 200}`}
              >
                <div className="mb-2 flex justify-between items-center">
                  <div className="h-8 w-8 overflow-hidden animate-rotate-y">
                    <Image
                      src={testimonial.companyLogo || "/images/logo1"}
                      alt={testimonial.company}
                      width={32}
                      height={32}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 text-cyan-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="mb-4 text-gray-300">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-dark-300/60 border border-purple-500/30 animate-rotate-y animation-delay-500">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-white">{testimonial.author}</p>
                    <p className="text-sm text-cyan-300">{testimonial.role}</p>
                  </div>
                </div>

                {/* 3D floating elements */}
                <div
                  className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-cyan-500/10 animate-float-rotate"
                  style={{ animationDelay: `${index * 0.3}s` }}
                ></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
