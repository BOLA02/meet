"use client"
import React, { useState } from 'react';
import { Phone, Mail, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const pages: React.FC = () => {
  // State for FAQ accordion
  const [openFAQ, setOpenFAQ] = useState<number | null>(1);
  
  // FAQ data with comprehensive answers
  const faqData = [
    {
      id: 1,
      question: "How do I share my screen during a meeting?",
      answer: "Screen sharing in Meet is simple and intuitive. During a meeting, look for the 'Share Screen' button in the meeting controls (usually in the bottom toolbar). Click it to see options for sharing your entire screen, a specific application window, or just a browser tab. You can also choose to share audio from your computer. Once you select what to share, other participants will see your screen. To stop sharing, click the 'Stop Sharing' button. Pro tip: Make sure to close any sensitive applications or browser tabs before sharing your screen."
    },
    {
      id: 2,
      question: "How many participants can join a meeting?",
      answer: "Meet offers flexible participant limits based on your plan. Our Basic plan supports up to 100 participants, Pro plan supports up to 500 participants, and Enterprise plan supports up to 1,000 participants. For larger events, we offer custom solutions that can accommodate thousands of attendees. All participants can actively engage with video, audio, chat, and interactive features. We recommend testing your internet connection before hosting large meetings to ensure smooth performance."
    },
    {
      id: 3,
      question: "Why can't I turn on my camera when I start a meeting?",
      answer: "If you're having trouble with your camera, try these troubleshooting steps: 1) Check if your camera is being used by another application and close it, 2) Ensure your browser has permission to access your camera (look for the camera icon in your browser's address bar), 3) Try refreshing the page or restarting your browser, 4) Check your device's privacy settings to ensure camera access is enabled, 5) If using a laptop, make sure the camera isn't physically covered. If the issue persists, try joining from a different browser or device. Our support team is always available to help with technical issues."
    },
    {
      id: 4,
      question: "What is the difference between the free and paid packages?",
      answer: "Our free plan includes basic meeting features with a 40-minute time limit and up to 100 participants. Paid plans offer significant upgrades: Pro ($49/month) includes unlimited meeting duration, up to 500 participants, advanced AI features, custom branding, recording capabilities, and priority support. Enterprise ($99/month) adds unlimited participants, enterprise-grade security, dedicated account management, custom integrations, and 24/7 phone support. All paid plans include a 14-day free trial, so you can test the features before committing."
    },
    {
      id: 5,
      question: "What package will be good for businesses?",
      answer: "For small businesses (1-50 employees), our Pro plan is ideal as it offers unlimited meetings, advanced collaboration tools, and professional features like custom branding and analytics. For growing companies (50-200 employees), Pro provides the scalability and features needed for team collaboration. Large enterprises (200+ employees) should consider our Enterprise plan for unlimited participants, advanced security compliance, dedicated support, and custom integrations. We also offer custom enterprise solutions for organizations with specific needs. Contact our sales team for a personalized consultation."
    },
    {
      id: 6,
      question: "How do I join Meet?",
      answer: "Joining Meet is easy! Simply visit our website and click 'Sign Up For Free' to create your account. You can sign up using your email address or connect with Google. Once registered, you can immediately start hosting or joining meetings. To join a meeting, you'll need the meeting link or ID provided by the host. You can join from any device - desktop, laptop, tablet, or smartphone - using our web app or mobile app. No downloads required for basic features, though we recommend our desktop app for the best experience with advanced features."
    },
    {
      id: 7,
      question: "Why can't I be heard when I speak even when my mic is on?",
      answer: "If others can't hear you despite having your microphone on, try these solutions: 1) Check if your microphone is muted in the meeting controls (look for the microphone icon), 2) Ensure your browser has permission to access your microphone, 3) Check your device's audio settings and make sure the correct microphone is selected, 4) Try speaking louder or moving closer to your microphone, 5) Check if your microphone is working in other applications, 6) If using headphones, ensure they're properly connected and the microphone isn't muted on the headset. You can also use the audio test feature before joining meetings to verify your setup."
    },
    {
      id: 8,
      question: "How secure are my meetings?",
      answer: "Security is our top priority. All meetings are encrypted end-to-end, meaning your conversations are protected from unauthorized access. We offer multiple security features including meeting passwords, waiting rooms, host controls, and the ability to lock meetings once all participants have joined. Enterprise plans include additional security features like SSO integration, advanced admin controls, and compliance certifications (SOC 2, GDPR, HIPAA). We never record or store your meeting content without explicit permission, and all data is processed according to strict privacy standards."
    },
    {
      id: 9,
      question: "Can I record my meetings?",
      answer: "Yes! Meeting recording is available on Pro and Enterprise plans. Hosts can record meetings to their local device or to the cloud (Enterprise only). Recordings include video, audio, and screen sharing content. You can choose to record the entire meeting or start/stop recording as needed. Recorded meetings can be shared with participants or downloaded for later use. Cloud recordings are automatically transcribed and can be searched for specific content. Note that all participants are notified when recording begins, and you must have their consent to record."
    },
    {
      id: 10,
      question: "What devices and browsers are supported?",
      answer: "Meet works on virtually any device and browser. For desktop, we support Chrome, Firefox, Safari, and Edge. For mobile, our apps are available on iOS and Android devices. You can also join meetings directly from your browser without downloading anything. We recommend using the latest version of your browser for the best experience. For optimal performance, ensure you have a stable internet connection (minimum 1 Mbps for video calls). Our platform automatically adjusts video quality based on your connection speed."
    },
    {
      id: 11,
      question: "How do I schedule recurring meetings?",
      answer: "Scheduling recurring meetings is easy with our calendar integration. When creating a new meeting, you'll see options to make it recurring - daily, weekly, monthly, or custom intervals. You can set the meeting to repeat indefinitely or for a specific number of occurrences. Recurring meetings use the same link, making it convenient for regular team meetings, classes, or client calls. You can also set different settings for each occurrence if needed. Our AI assistant can help optimize meeting times based on participant availability."
    },
    {
      id: 12,
      question: "What collaboration features are available?",
      answer: "Meet offers comprehensive collaboration tools including: real-time chat with file sharing, virtual whiteboards for brainstorming, breakout rooms for group discussions, polls and surveys for engagement, hand raising and reactions for interaction, and live document collaboration. Enterprise users get additional features like advanced analytics, custom integrations, and team management tools. All features are designed to make remote collaboration as effective as in-person meetings, with intuitive controls that work across all devices."
    }
  ];

  // Toggle FAQ accordion
  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  // Expand/Collapse all FAQs
  const expandAll = () => {
    setOpenFAQ(1); // This will show the first FAQ, you can modify to show all
  };

  const collapseAll = () => {
    setOpenFAQ(null);
  };

  // Common questions data
  const commonQuestions = [
    "How many participants can join a meeting?",
    "How do I join Meet?",
    "What's the difference between free and paid plans?",
    "How secure are my meetings?",
    "Can I record my meetings?"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-dark-600">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-purple-900 to-dark-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <img 
          src="/images/meeting.png" 
          alt="Team collaborating" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Our Friendly Team</h2>
          <p className="max-w-2xl text-lg text-gray-200">Let us know how we can help. Our customer service team provides quick and easy responses to all your questions.</p>
        </div>
      </div>

      {/* Contact Options */}
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Chat with Sales */}
          <div className="bg-dark-500/50 backdrop-blur-sm border border-dark-300/20 rounded-xl p-8 hover:bg-dark-500/70 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
              <HelpCircle size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Chat with Sales</h3>
            <p className="text-gray-300 mb-6">Talk to our friendly sales team about pricing and features</p>
            <a href="mailto:sales@meet.com" className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200">sales@meet.com</a>
          </div>

          {/* Chat with Support */}
          <div className="bg-dark-500/50 backdrop-blur-sm border border-dark-300/20 rounded-xl p-8 hover:bg-dark-500/70 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
              <Mail size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Chat with Support</h3>
            <p className="text-gray-300 mb-6">We're here to help with any technical issues</p>
            <a href="mailto:support@meet.com" className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200">support@meet.com</a>
          </div>

          {/* Call us */}
          <div className="bg-dark-500/50 backdrop-blur-sm border border-dark-300/20 rounded-xl p-8 hover:bg-dark-500/70 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
              <Phone size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Call us</h3>
            <p className="text-gray-300 mb-6">Mon - Fri from 8:00am - 6:00pm EST</p>
            <a href="tel:+1-555-123-4567" className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200">+1 (555) 123-4567</a>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="py-16 px-4 md:px-8 bg-dark-700">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">How can we help you?</h3>
          
          {/* Common Questions */}
          <div className="mb-12">
            <p className="text-white mb-6 text-lg">Quick answers to common questions:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {commonQuestions.map((question, index) => (
                <div key={index} className="bg-dark-600/50 rounded-lg p-4 hover:bg-dark-600/70 transition-colors duration-200">
                  <p className="text-purple-400 font-medium">{question}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8 text-white">Frequently Asked Questions</h3>
            
            <div className="mb-6 flex items-center justify-center gap-4">
              <button 
                onClick={expandAll}
                className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200"
              >
                Expand all
              </button>
              <span className="text-gray-400">|</span>
              <button 
                onClick={collapseAll}
                className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200"
              >
                Collapse all
              </button>
            </div>

            <div className="space-y-4">
              {faqData.map((faq) => (
                <div 
                  key={faq.id}
                  className={`border border-dark-300/20 rounded-xl overflow-hidden transition-all duration-300 ${
                    openFAQ === faq.id 
                      ? 'bg-dark-500/50 border-purple-500/30 shadow-lg shadow-purple-500/10' 
                      : 'bg-dark-600/30 hover:bg-dark-600/50'
                  }`}
                >
                  <button 
                    className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-dark-500/30 transition-colors duration-200"
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <span className="font-medium text-white text-lg">{faq.question}</span>
                    <span className="text-purple-400">
                      {openFAQ === faq.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </span>
                  </button>
                  
                  {openFAQ === faq.id && (
                    <div className="px-6 pb-5 text-gray-300 leading-relaxed">
                      <p className="text-base">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/30">
                Still have questions? Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-16 px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to level up your online meetings?</h3>
        <p className="text-xl mb-8 text-purple-100">Get started with Meet today and experience the future of virtual collaboration</p>
        <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
          See Our Pricing Plans
        </button>
      </div>
    </div>
  );
};

export default pages