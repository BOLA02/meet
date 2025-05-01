"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AboutPage() {
    const router = useRouter();
    const [showAllTeam, setShowAllTeam] = useState(false);

    const teamMembers = [
        { id: 1, name: "William Lewis", role: "CEO & Founder", image: "/team/william.jpg" },
        { id: 2, name: "Carlos Martinez", role: "Product Manager", image: "/team/carlos.jpg" },
        { id: 3, name: "Jamal Wilson", role: "Lead Developer", image: "/team/jamal.jpg" },
        { id: 4, name: "Sophia Chen", role: "UX Designer", image: "/team/sophia.jpg" },
        { id: 5, name: "Daniel Foster", role: "Marketing Director", image: "/team/daniel.jpg" },
        { id: 6, name: "Omar Jackson", role: "Customer Support", image: "/team/omar.jpg" },
        { id: 7, name: "Michael Tran", role: "Software Engineer", image: "/team/michael.jpg" },
        { id: 8, name: "Zoe Johnson", role: "Content Strategist", image: "/team/zoe.jpg" },
    ];

    const displayedTeam = showAllTeam ? teamMembers : teamMembers.slice(0, 8);

    return (
        <div className="bg-white text-black">
            <div className="py-12 px-6 max-w-7xl mx-auto">
                <section className="mb-12 text-center">
                    <h1 className="text-4xl font-bold mb-4">About Us</h1>
                </section>

                <section className="grid md:grid-cols-2 gap-6 mb-12">
                    <div className="bg-[#10A5A5] p-6 rounded-lg">
                        <h2 className="text-xl font-bold mb-3 text-white">Mission Statement</h2>
                        <p className="text-white">
                            To transform work through accessible tools that empower organizations of all sizes to communicate effectively.
                        </p>
                    </div>
                    <div className="bg-[#10A5A5] p-6 rounded-lg">
                        <h2 className="text-xl font-bold mb-3 text-white">Vision Statement</h2>
                        <p className="text-white">
                            A world where geography doesn’t limit collaboration. Intuitive video tools that feel natural.
                        </p>
                    </div>
                    <div className="bg-[#CDE7E7] p-6 rounded-lg">
                        <h2 className="text-xl font-bold mb-3 text-black">Core values</h2>
                        <p className="text-black">
                            Reliability, innovation, inclusivity, and simplicity. Tools that empower users.
                        </p>
                    </div>
                    <div className="bg-[#10A5A5] p-6 rounded-lg">
                        <h2 className="text-xl font-bold mb-3 text-white">Target market summary</h2>
                        <p className="text-white">
                            Distributed teams, educational institutions, healthcare, and remote-friendly companies.
                        </p>
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-center mb-4">Meet our team</h2>
                    <p className="text-center text-gray-600 mb-8">
                        Meetio's driven team of product-centric creators, designers and engineers.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                        {displayedTeam.map(member => (
                            <div key={member.id} className="text-center">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={200}
                                    height={200}
                                    className="mx-auto rounded-lg object-cover shadow-md"
                                />
                                <h3 className="text-lg font-semibold mt-2 text-black">{member.name}</h3>
                                <p className="text-gray-700 text-sm">{member.role}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <button
                            className="bg-[#10A5A5] text-white px-6 py-2 rounded-full hover:bg-[#0e8f8f] transition"
                            onClick={() => setShowAllTeam(!showAllTeam)}
                        >
                            {showAllTeam ? "Show Less" : "Meet the Entire Team"}
                        </button>
                    </div>
                </section>

                <section className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white border border-gray-300 p-6 rounded-lg shadow">
                        <h2 className="text-xl font-bold mb-4 text-[#10A5A5]">Partner with us</h2>
                        <p className="text-gray-700 mb-4">
                            We are looking for strategic partnerships with organizations that share our values. Whether you're a technology provider, independent organization, or service company, partnering with us opens up exciting opportunities for both parties to gain insights in digital event solutions.
                        </p>
                        <button className="bg-[#10A5A5] text-white px-6 py-2 rounded-full hover:bg-[#0e8f8f] transition">
                            Partner with us
                        </button>
                    </div>

                    <div className="bg-white border border-gray-300 p-6 rounded-lg shadow">
                        <h2 className="text-xl font-bold mb-4 text-[#10A5A5]">Support us</h2>
                        <p className="text-gray-700 mb-4">
                            Get in touch with our support team when needed! Our experts are ready to help with technical difficulties, account management, and integration services. We're committed to providing your organization excellent geographical coverage and speedy issue resolution.
                        </p>
                        <button className="bg-[#10A5A5] text-white px-6 py-2 rounded-full hover:bg-[#0e8f8f] transition">
                            Contact Team
                        </button>
                    </div>
                </section>

                <section className="bg-[#10A5A5] text-white py-16 rounded-t-xl text-center">
                    <h2 className="text-2xl font-bold mb-6">Start taking advantage of our powerful video conferencing tools</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-[#10A5A5] px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
                            Sign up for free
                        </button>
                        <button className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#10A5A5]">
                            See Our Pricing Plans
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}

