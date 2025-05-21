import Image from "next/image"
import { Users, Calendar, MapPin } from "lucide-react"

export default function EventsSection() {
  const events = [
    {
      title: "Corporate-wide team building event",
      image: "/images/wideteam.png",
      attendees: 120,
      date: "Nov 15, 2023",
      location: "Virtual",
    },
    {
      title: "Online meetup with developers",
      image: "/images/meeting 2.png",
      attendees: 85,
      date: "Nov 22, 2023",
      location: "Virtual",
    },
    {
      title: "Weekly team standup",
      image: "/images/team.png",
      attendees: 12,
      date: "Nov 10, 2023",
      location: "Virtual",
    },
    {
      title: "Product launch webinar",
      image: "/images/delegation.png",
      attendees: 250,
      date: "Dec 5, 2023",
      location: "Virtual",
    },
    {
      title: "Annual company conference",
      image: "/images/Diverse Teams.png",
      attendees: 500,
      date: "Dec 15, 2023",
      location: "Hybrid",
    },
    {
      title: "UX/UI design workshop",
      image: "/images/uiux.png",
      attendees: 45,
      date: "Nov 28, 2023",
      location: "Virtual",
    },
  ]

  return (
    <section className="bg-dark-500 py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-600 to-dark-500"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl scroll-animate">
          Upcoming <span className="text-purple-400">online events</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-3 perspective-[1000px]">
          {events.map((event, index) => (
            <div
              key={index}
              className={`glass-card rounded-lg shadow-xl overflow-hidden gradient-border transform-style-3d animate-rotate-3d scroll-animate animation-delay-${index * 200}`}
            >
              <div className="relative h-48">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-600 to-transparent opacity-70"></div>
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-white">{event.title}</h3>
                <div className="flex items-center text-sm text-purple-300 mb-2">
                  <Users className="mr-1 h-4 w-4" />
                  <span>{event.attendees} attendees</span>
                </div>
                <div className="flex items-center text-sm text-purple-300 mb-2">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-sm text-purple-300">
                  <MapPin className="mr-1 h-4 w-4" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
