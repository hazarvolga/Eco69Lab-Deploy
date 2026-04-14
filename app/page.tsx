'use client';

import { useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import HeroBackground from "@/components/HeroBackground";
import { motion, useScroll, useTransform } from "motion/react";

const LeafIcon = ({ className, strokeWidth = 1.5 }: { className?: string, strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

function ParallaxBackground({ src, alt, className }: { src: string, alt: string, className: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  // Slower, breathing parallax for a natural feel
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div style={{ y }} className="absolute inset-0 -top-[15%] -bottom-[15%] z-0" transition={{ ease: "linear" }}>
        <Image
          src={src}
          alt={alt}
          fill
          quality={85}
          className={`object-cover ${className}`}
        />
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen font-outfit selection:bg-[#D4B872] selection:text-[#08120D]">
      <svg style={{ width: 0, height: 0, position: 'absolute' }} aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="wave-clip-1" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 1,0 L 1,1 C 0.5,1 0.45,0.96 0,0.96 Z" />
          </clipPath>
          <clipPath id="wave-clip-2" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 1,0 L 1,0.96 C 0.5,0.96 0.45,1 0,1 Z" />
          </clipPath>
        </defs>
      </svg>
      {/* <Header /> -> assuming Header relies on standard colors, we leave it as is or it adapts if it has transparent modes */}
      <Header />
      <BackToTop />

      {/* Hero Section */}
      <section id="map" className="relative min-h-[850px] flex items-center overflow-hidden bg-[#08120D] z-[60]" style={{ clipPath: 'url(#wave-clip-1)' }}>
        <div className="absolute inset-0 z-0">
          <HeroBackground />
          <div className="absolute inset-0 bg-gradient-to-br from-[#08120D]/90 via-[#08120D]/50 to-transparent" />
        </div>

        <div className="container relative z-10 px-8 md:px-16 mx-auto max-w-7xl mt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-lora leading-[1.05] tracking-tight mb-8 text-[#F7F5F0]">
              Ecology meets<br /><span className="italic text-[#D4B872]">Precision Lab</span><br />Solutions.
            </h1>
            <p className="text-xl md:text-2xl text-[#d0d3cd] mb-10 max-w-2xl font-light leading-relaxed">
              We serve science and technology with high-standard laboratory setups, ESD workspaces, and medical equipment designed for a sustainable future.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#D4B872] hover:bg-[#bfa360] text-[#08120D] px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2 shadow-lg shadow-[#D4B872]/20">
                Discover Products
              </button>
              <button className="bg-transparent hover:bg-white/5 border border-white/30 text-white px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2 backdrop-blur-sm">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative min-h-[800px] flex items-center bg-[#0E1A14] overflow-hidden z-50 -mt-24 pt-32 pb-16" style={{ clipPath: 'url(#wave-clip-2)' }}>
        <ParallaxBackground
          src="https://picsum.photos/seed/bio1/1920/1080"
          alt="About Eco69Lab"
          className="opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E1A14] via-[#0E1A14]/90 to-[#0E1A14]/60 z-0 pointer-events-none" />

        <div className="container relative z-10 px-8 md:px-16 mx-auto max-w-7xl text-[#F7F5F0]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-lora mb-6 text-[#D4B872]">
              About Eco69Lab
            </h2>
            <p className="text-lg md:text-2xl text-[#d0d3cd] mb-8 max-w-4xl font-light leading-relaxed">
              Eco69Lab is dedicated to delivering tailored solutions for laboratory and medical tools, focusing on strategic partnerships that support business growth. Our B2B approach emphasizes collaboration and sustainable innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="bg-white/[0.03] border border-white/5 p-10 rounded-[2.5rem] backdrop-blur-md">
              <h3 className="text-2xl font-lora mb-4 text-[#F7F5F0]">Innovation-Driven</h3>
              <p className="text-[#a4a9a3] font-light leading-relaxed">We harness the latest technologies and industry trends to deliver innovative laboratory and medical equipment designed for superior performance and reliability.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-[#D4B872] p-10 rounded-[2.5rem] text-[#08120D] shadow-xl shadow-[#D4B872]/10">
              <h3 className="text-2xl font-lora mb-4 text-[#08120D]">Strategic Partnerships</h3>
              <p className="text-[#3b473b] font-medium leading-relaxed">At Eco69Lab, we believe success is built through strong, long-term partnerships. We work closely with our clients to create customized solutions that meet evolving needs.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="bg-white/[0.03] border border-white/5 p-10 rounded-[2.5rem] backdrop-blur-md">
              <h3 className="text-2xl font-lora mb-4 text-[#F7F5F0]">Global Reach, Local Expertise</h3>
              <p className="text-[#a4a9a3] font-light leading-relaxed">With a worldwide network and deep local market understanding, we bring the best products and services to support healthcare and research professionals across the globe.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="relative min-h-[800px] flex items-center bg-[#14231b] overflow-hidden z-40 -mt-24 pt-32 pb-16" style={{ clipPath: 'url(#wave-clip-1)' }}>
        <ParallaxBackground
          src="https://picsum.photos/seed/bio2/1920/1080"
          alt="Why Choose Us"
          className="opacity-10 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#14231b] via-[#14231b]/95 to-[#14231b]/80 z-0 pointer-events-none" />

        <div className="container relative z-10 px-8 md:px-16 mx-auto max-w-7xl text-[#F7F5F0]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-lora mb-6 text-[#D4B872]">
              Why Choose Eco69Lab?
            </h2>
            <p className="text-lg md:text-2xl text-[#d0d3cd] mb-8 max-w-4xl mx-auto font-light leading-relaxed">
              We are committed to delivering more than just products — we provide solutions that empower our clients to achieve excellence built on expertise, customization, quality, and continuous support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#0b1510] p-8 rounded-[2rem] border-t-2 border-[#D4B872]/50 shadow-lg">
              <div className="w-12 h-12 bg-[#D4B872]/10 rounded-full flex items-center justify-center mb-6">
                <LeafIcon className="w-6 h-6 text-[#D4B872]" />
              </div>
              <h3 className="text-xl font-lora mb-3 text-[#F7F5F0]">Expertise Across Industries</h3>
              <p className="text-[#a4a9a3] font-light text-sm leading-relaxed">Decades of experience serving laboratories, hospitals, and research centers worldwide.</p>
            </div>
            <div className="bg-[#0b1510] p-8 rounded-[2rem] border-t-2 border-[#D4B872]/50 shadow-lg">
              <div className="w-12 h-12 bg-[#D4B872]/10 rounded-full flex items-center justify-center mb-6">
                <LeafIcon className="w-6 h-6 text-[#D4B872]" />
              </div>
              <h3 className="text-xl font-lora mb-3 text-[#F7F5F0]">Tailored Solutions</h3>
              <p className="text-[#a4a9a3] font-light text-sm leading-relaxed">Customized services and equipment selections that align with each client's unique requirements.</p>
            </div>
            <div className="bg-[#0b1510] p-8 rounded-[2rem] border-t-2 border-[#D4B872]/50 shadow-lg">
              <div className="w-12 h-12 bg-[#D4B872]/10 rounded-full flex items-center justify-center mb-6">
                <LeafIcon className="w-6 h-6 text-[#D4B872]" />
              </div>
              <h3 className="text-xl font-lora mb-3 text-[#F7F5F0]">Commitment to Quality</h3>
              <p className="text-[#a4a9a3] font-light text-sm leading-relaxed">Strict adherence to international standards, ensuring reliable and high-performance tools.</p>
            </div>
            <div className="bg-[#0b1510] p-8 rounded-[2rem] border-t-2 border-[#D4B872]/50 shadow-lg">
              <div className="w-12 h-12 bg-[#D4B872]/10 rounded-full flex items-center justify-center mb-6">
                <LeafIcon className="w-6 h-6 text-[#D4B872]" />
              </div>
              <h3 className="text-xl font-lora mb-3 text-[#F7F5F0]">Ongoing Support</h3>
              <p className="text-[#a4a9a3] font-light text-sm leading-relaxed">Dedicated customer service and technical support to assist before, during, and after project completion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="relative min-h-[800px] flex items-center bg-[#0E1A14] overflow-hidden z-30 -mt-24 pt-32 pb-16" style={{ clipPath: 'url(#wave-clip-2)' }}>
        <ParallaxBackground
          src="https://picsum.photos/seed/bio3/1920/1080"
          alt="Our Services"
          className="opacity-15 mix-blend-color-dodge grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0E1A14] via-[#0E1A14]/90 to-[#0E1A14]/60 z-0 pointer-events-none" />

        <div className="container relative z-10 px-8 md:px-16 mx-auto max-w-7xl text-[#F7F5F0]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:w-2/3"
          >
            <h2 className="text-4xl md:text-6xl font-lora mb-6 text-[#D4B872]">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-[#d0d3cd] font-light leading-relaxed">
              We facilitate global equipment sourcing, ensure smooth integration into operational workflows, and empower teams through specialized education and training programs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-6 bg-white/[0.02] hover:bg-white/[0.04] transition-colors border border-white/5 p-8 rounded-[2rem] backdrop-blur-md">
              <div className="text-4xl font-lora text-[#D4B872]/50 italic">01</div>
              <div>
                <h3 className="text-2xl font-medium text-[#F7F5F0] mb-3">Import & Export</h3>
                <p className="text-[#a4a9a3] font-light leading-relaxed">We specialize in the import and export of laboratory and medical tools, ensuring access to the latest global technologies.</p>
              </div>
            </div>
            <div className="flex gap-6 bg-white/[0.02] hover:bg-white/[0.04] transition-colors border border-white/5 p-8 rounded-[2rem] backdrop-blur-md">
              <div className="text-4xl font-lora text-[#D4B872]/50 italic">02</div>
              <div>
                <h3 className="text-2xl font-medium text-[#F7F5F0] mb-3">Implementation</h3>
                <p className="text-[#a4a9a3] font-light leading-relaxed">Our team provides expert guidance in the implementation of solutions, ensuring seamless integration into existing workflows.</p>
              </div>
            </div>
            <div className="flex gap-6 bg-white/[0.02] hover:bg-white/[0.04] transition-colors border border-white/5 p-8 rounded-[2rem] backdrop-blur-md">
              <div className="text-4xl font-lora text-[#D4B872]/50 italic">03</div>
              <div>
                <h3 className="text-2xl font-medium text-[#F7F5F0] mb-3">Education & Training</h3>
                <p className="text-[#a4a9a3] font-light leading-relaxed">We offer comprehensive programs designed to educate users on the effective use of tools, enhancing operational efficiency and safety.</p>
              </div>
            </div>
            <div className="flex gap-6 bg-white/[0.02] hover:bg-white/[0.04] transition-colors border border-white/5 p-8 rounded-[2rem] backdrop-blur-md">
              <div className="text-4xl font-lora text-[#D4B872]/50 italic">04</div>
              <div>
                <h3 className="text-2xl font-medium text-[#F7F5F0] mb-3">Consultancy</h3>
                <p className="text-[#a4a9a3] font-light leading-relaxed">Our consultancy helps organizations optimize lab operations, providing insights and strategies to improve performance and compliance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="relative min-h-[800px] flex items-center bg-[#F7F5F0] overflow-hidden z-20 -mt-24 pt-32 pb-16" style={{ clipPath: 'url(#wave-clip-1)' }}>
        <div className="container relative z-10 px-8 md:px-16 mx-auto max-w-7xl text-[#08120D]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-lora mb-6 text-[#294235]">
              Our Approach
            </h2>
            <p className="text-lg md:text-xl text-[#5a6b61] mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              At Eco69Lab, we follow a client-centric approach that emphasizes collaboration, innovation, and quality at every stage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-[2rem] left-[12%] right-[12%] h-[1px] bg-[#294235]/20 z-0" />

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-[#FFFFFF] border border-[#294235]/20 text-[#294235] flex items-center justify-center font-lora text-2xl mb-6 shadow-xl transition-transform group-hover:scale-110">1</div>
              <h3 className="text-xl font-medium mb-3 text-[#14231b]">Needs Assessment</h3>
              <p className="text-[#5a6b61] font-light text-sm leading-relaxed px-4">We begin by thoroughly analyzing client requirements to deliver customized solutions.</p>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-[#FFFFFF] border border-[#294235]/20 text-[#294235] flex items-center justify-center font-lora text-2xl mb-6 shadow-xl transition-transform group-hover:scale-110">2</div>
              <h3 className="text-xl font-medium mb-3 text-[#14231b]">Strategic Planning</h3>
              <p className="text-[#5a6b61] font-light text-sm leading-relaxed px-4">Every project is mapped out with clear milestones and aligned with industry best practices.</p>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-[#FFFFFF] border border-[#294235]/20 text-[#294235] flex items-center justify-center font-lora text-2xl mb-6 shadow-xl transition-transform group-hover:scale-110">3</div>
              <h3 className="text-xl font-medium mb-3 text-[#14231b]">Seamless Execution</h3>
              <p className="text-[#5a6b61] font-light text-sm leading-relaxed px-4">Our team ensures smooth delivery, integration, and support for all solutions provided.</p>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-[#FFFFFF] border border-[#294235]/20 text-[#294235] flex items-center justify-center font-lora text-2xl mb-6 shadow-xl transition-transform group-hover:scale-110">4</div>
              <h3 className="text-xl font-medium mb-3 text-[#14231b]">Continuous Improvement</h3>
              <p className="text-[#5a6b61] font-light text-sm leading-relaxed px-4">We foster long-term relationships by consistently seeking feedback and enhancing our services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="relative min-h-[700px] flex items-center bg-[#0A110D] overflow-hidden z-10 -mt-24 pt-32 pb-16" style={{ clipPath: 'url(#wave-clip-2)' }}>
        <ParallaxBackground
          src="https://picsum.photos/seed/bio4/1920/1080"
          alt="Global Presence"
          className="opacity-[0.07] mix-blend-screen"
        />

        <div className="container relative z-10 px-8 md:px-16 mx-auto max-w-7xl text-[#F7F5F0]">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-lora mb-8 text-[#D4B872]">
              Global Presence, Local Expertise
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-[#14231b] to-transparent p-10 rounded-[2.5rem] border border-white/5 text-center">
              <div className="w-12 h-12 bg-white/5 rounded-full mx-auto mb-6 flex items-center justify-center">
                <LeafIcon className="w-6 h-6 text-[#D4B872]" />
              </div>
              <h3 className="text-2xl font-lora mb-4 text-[#F7F5F0]">Quality Standards</h3>
              <p className="text-[#a4a9a3] font-light text-sm leading-relaxed">From the selection of materials to the delivery of products, our processes ensure that every solution we provide meets international industry regulations and exceeds client expectations.</p>
            </div>
            <div className="bg-gradient-to-b from-[#14231b] to-transparent p-10 rounded-[2.5rem] border border-white/5 text-center">
              <div className="w-12 h-12 bg-white/5 rounded-full mx-auto mb-6 flex items-center justify-center">
                <LeafIcon className="w-6 h-6 text-[#D4B872]" />
              </div>
              <h3 className="text-2xl font-lora mb-4 text-[#F7F5F0]">Customer Commitment</h3>
              <p className="text-[#a4a9a3] font-light text-sm leading-relaxed">By understanding their unique needs and challenges, we deliver personalized solutions, offer continuous support, and build long-lasting relationships based on trust and mutual growth.</p>
            </div>
            <div className="bg-gradient-to-b from-[#14231b] to-transparent p-10 rounded-[2.5rem] border border-white/5 text-center">
              <div className="w-12 h-12 bg-white/5 rounded-full mx-auto mb-6 flex items-center justify-center">
                <LeafIcon className="w-6 h-6 text-[#D4B872]" />
              </div>
              <h3 className="text-2xl font-lora mb-4 text-[#F7F5F0]">Our Core Values</h3>
              <p className="text-[#a4a9a3] font-light text-sm leading-relaxed">Integrity, innovation, and excellence are the core values that drive Eco69Lab forward, ensuring that our actions reflect our commitment to improving healthcare and laboratory sectors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative min-h-[700px] flex items-center bg-[#050A07] overflow-hidden z-0 -mt-24 pt-32 pb-32" style={{ clipPath: 'url(#wave-clip-1)' }}>
        <div className="container relative z-10 px-8 md:px-16 text-[#F7F5F0] mx-auto max-w-7xl">
          <div className="text-center mb-20 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-lora mb-6 text-[#D4B872]">
              Keeping Customers Satisfied
            </h2>
            <p className="text-lg md:text-xl text-[#a4a9a3] max-w-3xl font-light leading-relaxed mb-6">
              At Eco69Lab, customer satisfaction is our top priority. We focus on delivering exceptional products and services, responding promptly to inquiries, and providing ongoing support to ensure that our customers' needs are always met.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/[0.02] border border-white/5 p-10 rounded-[2.5rem] flex flex-col justify-between">
              <div>
                <div className="text-[#D4B872] mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>)}
                </div>
                <p className="text-[#d0d3cd] font-light italic mb-8 leading-relaxed">"Eco69Lab has been an invaluable partner in our laboratory operations. Their expertise in medical tools and equipment has greatly enhanced our capabilities!"</p>
              </div>
              <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#14231b] flex items-center justify-center font-lora text-[#D4B872]">P</div>
                <div>
                  <p className="font-medium text-white">Paul M.</p>
                  <p className="text-xs text-[#a4a9a3] tracking-wide mt-0.5">RIU</p>
                </div>
              </div>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-10 rounded-[2.5rem] flex flex-col justify-between">
              <div>
                <div className="text-[#D4B872] mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>)}
                </div>
                <p className="text-[#d0d3cd] font-light italic mb-8 leading-relaxed">"Working with Eco69Lab has transformed our laboratory's efficiency. Their knowledge of medical tools and commitment to quality have made a significant difference. We highly recommend their services!"</p>
              </div>
              <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#14231b] flex items-center justify-center font-lora text-[#D4B872]">C</div>
                <div>
                  <p className="font-medium text-white">Carl T.</p>
                  <p className="text-xs text-[#a4a9a3] tracking-wide mt-0.5">DORDENELLE</p>
                </div>
              </div>
            </div>
            <div className="bg-[#D4B872] p-10 rounded-[2.5rem] flex flex-col justify-between shadow-xl shadow-[#D4B872]/10">
              <div>
                <div className="text-[#08120D] mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>)}
                </div>
                <p className="text-[#294235] font-medium italic mb-8 leading-relaxed">"Eco69Lab team has been great partner through our operations internationally. Their innovative and sustainable philosophy enabled our organization to leverage the latest technologies and best practices."</p>
              </div>
              <div className="pt-6 border-t border-[#08120D]/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#08120D] flex items-center justify-center font-lora text-[#D4B872]">D</div>
                <div>
                  <p className="font-medium text-[#08120D]">Dean H.</p>
                  <p className="text-xs text-[#5a6b61] tracking-wide mt-0.5">CONSORTIUM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="relative bg-[#08120D] text-[#F7F5F0] pb-10 z-0">
        <div className="container relative z-10 px-8 md:px-16 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 pt-12 border-t border-white/5">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#D4B872] text-[#08120D]">
                  <LeafIcon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <span className="font-lora text-xl font-medium tracking-wide">GLOBAL ECO-TECH</span>
              </div>
              <p className="text-[#a4a9a3] max-w-sm mb-8 font-light text-sm leading-relaxed">
                Validating planetary health through IoT-enabled solutions, sustainable human-tech collaboration, and transparent marketplaces.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4B872] hover:text-[#08120D] transition-colors border border-white/5">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4B872] hover:text-[#08120D] transition-colors border border-white/5">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-lora text-lg font-medium mb-6 text-[#D4B872]">Quick Links</h4>
              <ul className="space-y-4 text-sm font-light text-[#a4a9a3]">
                <li><Link href="#about" className="hover:text-[#D4B872] transition-colors">About Eco69Lab</Link></li>
                <li><Link href="#services" className="hover:text-[#D4B872] transition-colors">Our Services</Link></li>
                <li><Link href="#why-us" className="hover:text-[#D4B872] transition-colors">Why Choose Us</Link></li>
                <li><Link href="#approach" className="hover:text-[#D4B872] transition-colors">Our Approach</Link></li>
                <li><Link href="#contact" className="hover:text-[#D4B872] transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-lora text-lg font-medium mb-6 text-[#D4B872]">Contact Us</h4>
              <ul className="space-y-4 text-sm font-light text-[#a4a9a3]">
                <li className="flex items-start gap-4">
                  <svg className="w-5 h-5 mt-0.5 text-[#D4B872] opacity-70 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span>Plovdiv 4000, Central District<br />BULGARIA</span>
                </li>
                <li className="flex items-center gap-4 w-max">
                  <svg className="w-5 h-5 text-[#D4B872] opacity-70 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <a href="mailto:info@eco69lab.com" className="hover:text-[#D4B872] transition-colors">info@eco69lab.com</a>
                </li>
                <li className="flex items-center gap-4 w-max">
                  <svg className="w-5 h-5 text-[#D4B872] opacity-70 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <a href="tel:+34610835592" className="hover:text-[#D4B872] transition-colors">+34 610 83 55 92</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#a4a9a3] font-light tracking-wide">
            <p>&copy; {new Date().getFullYear()} Global Eco-Tech Network. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-[#D4B872] transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-[#D4B872] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
