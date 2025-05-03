"use client"
import React, { useState } from 'react';
import { Phone, Mail, HelpCircle } from 'lucide-react';

const pages: React.FC = () => {
  // State for FAQ accordion
  const [openFAQ, setOpenFAQ] = useState<number | null>(1);
  
  // FAQ data
  const faqData = [
    {
      id: 1,
      question: "How do I share my screen?",
      answer: ""
    },
    {
      id: 2,
      question: "How many participants can join a meeting?",
      answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."
    },
    {
      id: 3,
      question: "Why can't I turn on my camera when I start a meeting?",
      answer: ""
    },
    {
      id: 4,
      question: "What is the difference between the free and paid packages?",
      answer: ""
    },
    {
      id: 5,
      question: "What package will be good for businesses?",
      answer: ""
    },
    {
      id: 6,
      question: "How do I join Meetio?",
      answer: ""
    },
    {
      id: 7,
      question: "Why can't I be heard when I speak even when my mic is on?",
      answer: ""
    }
  ];

  // Toggle FAQ accordion
  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  // Common questions data
  const commonQuestions = [
    "How many participants can join a meeting?",
    "How do I join Meetio?",
    "How many participants can join a meeting?",
    "How many participants can join a meeting?",
    "How many participants can join a meeting?"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      

      {/* Hero Section */}
      <div className="relative h-57 bg-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img 
          src="/images/meeting.png" 
          alt="Team collaborating" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Contact Our Friendly Team</h2>
          <p className="max-w-lg">Let us know how we can help. Our customer service will provide quick and easy response.</p>
        </div>
      </div>

      {/* Contact Options */}
      <div className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Chat with Sales */}
          <div className="border  gradient-border  rounded-lg p-6 flex flex-col items-center md:items-start">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <HelpCircle size={24} className="text-white-700" />
            </div>
            <h3 className="text-lg font-medium mb-1">Chat with sales</h3>
            <p className="text-purple-600 text-sm mb-4">Talk to our friendly sales team</p>
            <a href="mailto:Sales@meetio.com" className="text-purple-600 font-medium">Sales@meetio.com</a>
          </div>

          {/* Chat with Support */}
          <div className="border   gradient-border  rounded-lg p-6 flex flex-col items-center md:items-start">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <Mail size={24} className="text-white-700" />
            </div>
            <h3 className="text-lg font-medium mb-1">Chat with Support</h3>
            <p className="text-purple-600 text-sm mb-4">We're here to help</p>
            <a href="mailto:Support@meetio.com" className="text-purple-600 font-medium">Support@meetio.com</a>
          </div>

          {/* Call us */}
          <div className="border  shadow-xl gradient-border  rounded-lg p-6 flex flex-col items-center md:items-start">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <Phone size={24} className="text-white-700" />
            </div>
            <h3 className="text-lg font-medium mb-1">Call us</h3>
            <p className="text-purple-600 text-sm mb-4">Mon - Fri from 8:00am - 4:00 pm</p>
            <a href="tel:555-456-456" className="text-purple-600 font-medium">555-456-456</a>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="py-8 px-4 md:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">How can we help you?</h3>
          
          {/* Common Questions */}
          <div className="mb-12">
            <p className="text-white mb-4">How...</p>
            <ul className="space-y-2">
              {commonQuestions.map((question, index) => (
                <li key={index} className="text-purple-700">
                  <strong className="text-white">How</strong> {question.substring(3)}
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
            
            <div className="mb-4 flex items-center">
              <button className="text-purple-600 font-medium mr-4">Expand all</button>
              <span className="text-gray-300 mx-1">|</span>
              <button className="text-white-600 font-medium ml-4">Collapse all</button>
            </div>

            <div className="space-y-4">
              {faqData.map((faq) => (
                <div 
                  key={faq.id}
                  className={`border rounded-lg overflow-hidden ${openFAQ === faq.id ? 'bg-purple-500' : 'bg-purple'}`}
                >
                  <button 
                    className="w-full text-left px-6 py-4 flex justify-between items-center"
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <span className="font-medium">{faq.id}. {faq.question}</span>
                    <span className="text-2xl">{openFAQ === faq.id ? '–' : '+'}</span>
                  </button>
                  
                  {openFAQ === faq.id && (
                    <div className="px-6 py-4 text-white-700">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-full">
                Load more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-purple-400 py-12 px-4 text-center">
        <h3 className="text-2xl font-bold mb-2">Ready to level up your online meetings?</h3>
        <p className="mb-6">Get started with Meetio today</p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-full">
          See Our Pricing Plans
        </button>
      </div>

      
    </div>
  );
};

export default pages