'use client';

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import HeroBackground from "@/components/HeroBackground";
import { motion } from "motion/react";

const YinYangIcon = ({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth={strokeWidth} 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a5 5 0 0 0 0 10 5 5 0 0 1 0 10" />
    <circle cx="12" cy="7" r="1" fill="currentColor" />
    <circle cx="12" cy="17" r="1" fill="currentColor" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header />
      <BackToTop />

      {/* Hero Section */}
      <section id="map" className="relative h-[800px] flex items-center overflow-hidden bg-[#0a1510]">
        <div className="absolute inset-0 z-0">
          <HeroBackground />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        
        <div className="container relative z-10 px-8 md:px-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-oswald uppercase leading-[1.1] tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
              Global Eco-Tech<br />Network. Validating<br />Planetary Health.
            </h1>
            <button className="bg-[#6b7558] hover:bg-[#5a6349] text-white px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2">
              Explore Our Global Reach
            </button>
          </motion.div>
        </div>

        {/* Wave Divider 1 (High to Low) */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1440 100" className="w-full h-[60px] md:h-[100px] block" preserveAspectRatio="none">
            <path d="M0,0 C720,0 720,100 1440,100 L1440,120 L0,120 Z" fill="#1a1c18" />
          </svg>
        </div>
      </section>

      {/* Lab Tools Section */}
      <section id="lab-tools" className="relative h-[700px] flex items-center bg-[#1a1c18] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/seed/labtools/1920/1080" 
            alt="Lab Tools" 
            fill 
            className="object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1c18] via-[#1a1c18]/80 to-transparent" />
        </div>

        <div className="container relative z-10 px-8 md:px-16">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-oswald uppercase leading-tight mb-4 text-[#e8e6d9]">
              Lab Tools &<br />Technologies
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              IoT enabled solutions, human-tech collaboration for precise data analysis.
            </p>
            <button className="bg-[#6b7558] hover:bg-[#5a6349] text-white px-8 py-4 rounded-full font-medium transition-all">
              Learn More
            </button>
          </motion.div>
        </div>

        {/* Wave Divider 2 (Low to High) */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1440 100" className="w-full h-[60px] md:h-[100px] block" preserveAspectRatio="none">
            <path d="M0,100 C720,100 720,0 1440,0 L1440,120 L0,120 Z" fill="#2a221b" />
          </svg>
        </div>
      </section>

      {/* Eco Projects Section */}
      <section id="eco-projects" className="relative h-[700px] flex items-center bg-[#2a221b] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/seed/ecoprojects/1920/1080" 
            alt="Eco Projects" 
            fill 
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a221b] via-[#2a221b]/80 to-transparent" />
        </div>

        <div className="container relative z-10 px-8 md:px-16">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-oswald uppercase leading-tight mb-4 text-[#e8e6d9]">
              Eco Projects
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              S1S Soil Enrichment & Regeneration Cycles. Tech-enabled restoration.
            </p>
            <button className="bg-[#6b7558] hover:bg-[#5a6349] text-white px-8 py-4 rounded-full font-medium transition-all">
              View Our Impact
            </button>
          </motion.div>
        </div>

        {/* Wave Divider 3 (High to Low) */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1440 100" className="w-full h-[60px] md:h-[100px] block" preserveAspectRatio="none">
            <path d="M0,0 C720,0 720,100 1440,100 L1440,120 L0,120 Z" fill="#3a2e25" />
          </svg>
        </div>
      </section>

      {/* ECO69HUB Section */}
      <section id="hub" className="relative h-[700px] flex items-center bg-[#3a2e25] overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 z-0 opacity-30 md:opacity-100 flex flex-col"
        >
          <div className="h-1/2 relative w-full">
             <Image src="https://picsum.photos/seed/community1/800/600" alt="Community" fill className="object-cover" />
          </div>
          <div className="h-1/2 relative w-full">
             <Image src="https://picsum.photos/seed/community2/800/600" alt="Community" fill className="object-cover" />
          </div>
        </motion.div>

        <div className="container relative z-10 px-8 md:px-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-oswald uppercase leading-tight mb-4 text-[#e8e6d9]">
              ECO69HUB
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-md">
              Collective Action.<br />
              Bringing hands together for a shared future.<br />
              Podcast, events, community.
            </p>
            <button className="bg-[#6b7558] hover:bg-[#5a6349] text-white px-8 py-4 rounded-full font-medium transition-all">
              Join the Hub
            </button>
          </motion.div>
        </div>

        {/* Wave Divider 4 (Low to High) */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1440 100" className="w-full h-[60px] md:h-[100px] block" preserveAspectRatio="none">
            <path d="M0,100 C720,100 720,0 1440,0 L1440,120 L0,120 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* The Alliance & VRM Platform Section */}
      <section id="alliance-vrm" className="relative py-24 bg-white text-black">
        <div className="container px-8 md:px-16 mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-oswald uppercase leading-tight mb-8">
              THE ALLIANCE &<br />VRM PLATFORM
            </h2>
            <div className="flex flex-wrap items-center gap-8 text-xl font-bold text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-800/20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-green-800" />
                </div> 
                Earthy
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-gray-500" />
                </div> 
                Logistics
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-800/20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-green-800" />
                </div> 
                Dev
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#f4f1e1] rounded-full w-[120%] h-[120%] -left-[10%] -top-[10%] -z-10" />
              <div className="relative aspect-[4/3] w-full">
                <Image src="https://picsum.photos/seed/dashboard/800/600" alt="Dashboard" fill className="object-contain drop-shadow-2xl" />
              </div>
              <div className="absolute -bottom-12 -right-12 aspect-[4/3] w-3/4">
                <Image src="https://picsum.photos/seed/dashboard2/800/600" alt="Dashboard Mobile" fill className="object-contain drop-shadow-2xl" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-16 md:pl-12"
            >
              <div>
                <h3 className="text-3xl font-bold font-oswald uppercase mb-2">VRM PLATFORM</h3>
                <p className="text-lg text-gray-600 mb-6">Proprietary Verification for<br />high-integrity credits.</p>
                <button className="bg-[#6b7558] hover:bg-[#5a6349] text-white px-8 py-4 rounded-full font-medium transition-all">
                  Explore VRM Platform
                </button>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold font-oswald uppercase mb-2">FUNDING THE RIGHT<br />PROJECTS</h3>
                <p className="text-lg text-gray-600 mb-6">Transparent marketplace for<br />impactful investment.</p>
                <button className="bg-[#6b7558] hover:bg-[#5a6349] text-white px-8 py-4 rounded-full font-medium transition-all">
                  Explore VRM Platform
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="bg-[#0a1510] text-white pt-20 pb-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="container px-8 md:px-16 mx-auto max-w-6xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-[#0a1510]">
                  <YinYangIcon className="w-6 h-6" strokeWidth={2} />
                </div>
                <span className="font-oswald text-xl font-bold tracking-wide">GLOBAL ECO-TECH</span>
              </div>
              <p className="text-gray-400 max-w-sm mb-6">
                Validating planetary health through IoT-enabled solutions, human-tech collaboration, and transparent marketplaces.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#6b7558] transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#6b7558] transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-oswald text-lg font-bold tracking-wide mb-6 uppercase">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="#map" className="hover:text-white transition-colors">Map</Link></li>
                <li><Link href="#lab-tools" className="hover:text-white transition-colors">Lab Tools</Link></li>
                <li><Link href="#eco-projects" className="hover:text-white transition-colors">Eco Projects</Link></li>
                <li><Link href="#hub" className="hover:text-white transition-colors">Hub</Link></li>
                <li><Link href="#alliance-vrm" className="hover:text-white transition-colors">Alliance/VRM</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-oswald text-lg font-bold tracking-wide mb-6 uppercase">Contact Us</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 text-[#6b7558]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span>123 Eco Valley Road<br />Green City, Earth 10001</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#6b7558]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <span>hello@globalecotech.net</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Global Eco-Tech Network. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
