"use client"

import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function AboutPage() {
    const router = useRouter()
    const [showAllTeam, setShowAllTeam] = useState(false)
    const [expandedMember, setExpandedMember] = useState<number | null>(null)

    const teamMembers = [
        {
            id: 1,
            name: "William Lewis",
            role: "CEO & Founder",
            image: "/assets/Rectangle 544.svg",
            description: `As CEO & Founder, William leads the company's strategic vision and growth initiatives. 
                    He oversees all departments and makes key decisions about product direction and market positioning. 
                    With over 15 years in the tech industry, he brings valuable experience in scaling SaaS businesses.`,
        },
        {
            id: 2,
            name: "Carlos Martinez",
            role: "Product Manager",
            image: "/assets/Rectangle 545.svg",
            description: `Carlos translates customer needs into product features and improvements. 
                    He works closely with development and design teams to ensure timely delivery of high-quality features. 
                    He conducts market research and competitive analysis to keep our product ahead of the curve.`,
        },
        {
            id: 3,
            name: "Jamal Wilson",
            role: "Lead Developer",
            image: "/assets/Rectangle 546.svg",
            description: `Jamal oversees the technical architecture and implementation of our platform. 
                    He manages the development team and ensures code quality and performance standards. 
                    His expertise in WebRTC and real-time communication technologies is crucial to our video conferencing capabilities.`,
        },
        {
            id: 4,
            name: "Sophia Chen",
            role: "UX Designer",
            image: "/assets/Rectangle 547.svg",
            description: `Sophia creates intuitive and accessible user experiences across our platform. 
                    She conducts user research and testing to inform design decisions and improve usability. 
                    Her work ensures our product is easy to use for customers of all technical abilities.`,
        },
        {
            id: 5,
            name: "Daniel Foster",
            role: "Marketing Director",
            image: "/assets/Rectangle 548.svg",
            description: `Daniel develops and executes our marketing strategy to drive brand awareness and user acquisition. 
                    He oversees digital marketing campaigns, content creation, and social media presence. 
                    His data-driven approach helps optimize our marketing spend and reach target audiences effectively.`,
        },
        {
            id: 6,
            name: "Omar Jackson",
            role: "Customer Support",
            image: "/assets/Rectangle 549.svg",
            description: `Omar leads our customer support team, ensuring users receive timely and helpful assistance. 
                    He develops support documentation and training materials for common user questions. 
                    His team maintains our high customer satisfaction ratings and collects valuable product feedback.`,
        },
        {
            id: 7,
            name: "Michael Tran",
            role: "Software Engineer",
            image: "/assets/Rectangle 551.svg",
            description: `Michael specializes in backend development and API architecture for our platform. 
                    He implements security features and ensures our infrastructure can scale with growing user demand. 
                    His work on performance optimization keeps our video conferencing smooth even under heavy load.`,
        },
        {
            id: 8,
            name: "Zoe Johnson",
            role: "Content Strategist",
            image: "/assets/Rectangle 550.svg",
            description: `Zoe develops our content strategy across marketing, product, and support materials. 
                    She ensures consistent brand voice and creates compelling narratives about our product benefits. 
                    Her work helps educate users and communicate our value proposition to potential customers.`,
        },
    ]

    const displayedTeam = showAllTeam ? teamMembers : teamMembers.slice(0, 4)

    const toggleMemberDetails = (id: number) => {
        setExpandedMember(expandedMember === id ? null : id)
    }

    return (
        <div className="bg-black text-white">
            <div className="py-12 px-12 mx-auto">
                <section className="mb-12 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
                </section>

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <div className="bg-purple-400 p-6 rounded-lg lg:col-span-2 flex items-center gap-3">
                        <h2 className="text-lg sm:text-xl font-bold mb-3 text-gray-100">Mission Statement</h2>
                        <p className="text-gray-200 text-sm sm:text-base text-justify">
                            Our mission is to revolutionize the way people connect and collaborate by providing accessible, high-quality tools
                            that empower organizations of all sizes. We are committed to breaking down communication barriers, enabling seamless
                            interaction regardless of location, and supporting productivity in hybrid and remote work environments. We believe
                            in building technology that is both powerful and easy to use, allowing businesses to thrive through better engagement
                            and connection with their teams, clients, and stakeholders.
                        </p>
                    </div>
                    <div className="bg-purple-800 p-6 rounded-lg lg:col-span-1">
                        <h2 className="text-lg sm:text-xl font-bold mb-3 text-gray-100">Vision Statement</h2>
                        <p className="text-gray-200 text-sm sm:text-base text-justify">
                            We envision a future where geography no longer limits collaboration. Our goal is to provide intuitive, reliable video
                            tools that make virtual interactions feel natural and human. We aim to become a global leader in digital communication,
                            driving innovation in how teams share ideas, solve problems, and achieve goals. By continuously refining our platform,
                            we strive to make real-time connection as immersive and impactful as face-to-face meetings—across borders, industries,
                            and time zones.
                        </p>
                    </div>
                    <div className="bg-purple-900 p-6 rounded-lg lg:col-span-1">
                        <h2 className="text-lg sm:text-xl font-bold mb-3 text-black">Core values</h2>
                        <p className="text-gray-800 text-sm sm:text-base text-justify">
                            Our core values are rooted in reliability, innovation, inclusivity, and simplicity. We believe in building dependable
                            systems that users can trust every day. Innovation drives our features and functionality, while inclusivity ensures
                            our tools are accessible to everyone, regardless of background or ability. Simplicity is key to delivering seamless
                            user experiences. These values guide every decision we make—from product development to customer engagement—helping
                            us create a platform that truly empowers people and organizations around the world.
                        </p>
                    </div>
                    <div className="bg-purple-700 p-6 rounded-lg lg:col-span-2 flex items-center gap-3">
                        <h2 className="text-lg sm:text-xl font-bold mb-3 text-gray-100">Target market summary</h2>
                        <p className="text-gray-200 text-sm sm:text-base text-justify">
                            Our platform serves a diverse target market, including distributed teams, educational institutions, healthcare
                            providers, and remote-friendly companies. These organizations rely on secure, high-performance communication tools
                            to operate efficiently across time zones and geographies. We offer scalable solutions that meet the needs of startups,
                            enterprises, and nonprofits alike. Whether it's virtual classrooms, telehealth consultations, or remote workspaces,
                            our tools are designed to foster collaboration, boost engagement, and enhance productivity in any professional
                            setting.
                        </p>
                    </div>
                </section>



                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-center mb-4">Meet our team</h2>
                    <p className="text-center text-gray-400 mb-8">
                        Meetio's driven team of product-centric creators, designers and engineers.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {displayedTeam.map((member) => (
                            <div key={member.id} className="text-center bg-gray-900 rounded-lg shadow-lg">
                                <Image
                                    src={member.image || "/placeholder.svg"}
                                    alt={member.name}
                                    width={200}
                                    height={200}
                                    className="mx-auto w-full max-w-[180px] sm:max-w-[400px] rounded-lg object-cover shadow-md mb-3"
                                />
                                <h3 className="text-lg font-semibold mt-2 text-white">{member.name}</h3>
                                <p className="text-purple-600 text-sm mb-2">{member.role}</p>

                                <div className="text-sm text-gray-300 mt-3 mb-3 px-2">
                                    {expandedMember === member.id ? (
                                        <>
                                            <p className="text-justify px-3">{member.description}</p>
                                            <button
                                                onClick={() => toggleMemberDetails(member.id)}
                                                className="flex items-center justify-center w-full mt-3 text-purple-400 hover:text-purple-600 transition"
                                            >
                                                Read less <ChevronUp size={16} className="ml-1" />
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <p className="text-left line-clamp-3">{member.description}</p>
                                            <button
                                                onClick={() => toggleMemberDetails(member.id)}
                                                className="flex items-center justify-center w-full mt-3 text-purple-400 hover:text-purple-600 transition"
                                            >
                                                Read more <ChevronDown size={16} className="ml-1" />
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <button
                            className="bg-purple-400 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition"
                            onClick={() => setShowAllTeam(!showAllTeam)}
                        >
                            {showAllTeam ? "Show Less" : "Meet the Entire Team"}
                        </button>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg shadow">
                        <h2 className="text-xl font-bold mb-4 text-purple-600">Partner with us</h2>
                        <p className="text-gray-300 mb-4">
                            We are looking for strategic partnerships with organizations that share our values. Whether you’re a tech company,
                            nonprofit, or educational institution, we welcome collaboration opportunities that drive innovation and promote
                            meaningful solutions. Let’s build something impactful together.
                        </p>
                        <button className="bg-purple-400 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition">
                            Partner with us
                        </button>
                    </div>

                    <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg shadow">
                        <h2 className="text-xl font-bold mb-4 text-purple-600">Support us</h2>
                        <p className="text-gray-300 mb-4">
                            Get in touch with our support team when needed! Our experts are ready to help. From onboarding assistance to
                            troubleshooting technical issues, we’re committed to providing prompt, reliable, and friendly service. Your success
                            is our priority, and we're here to ensure you have the best experience possible.
                        </p>
                        <button className="bg-purple-400 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition">
                            Contact Team
                        </button>
                    </div>
                </section>


                <section className="bg-purple-600 text-white py-16 rounded-t-xl text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6">Start taking advantage of our powerful video conferencing tools</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
                            Sign up for free
                        </button>
                        <button className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600">
                            See Our Pricing Plans
                        </button>
                    </div>
                </section>
            </div>
        </div>
    )
}
