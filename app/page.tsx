'use client';

import { useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import HeroBackground from "@/components/HeroBackground";
import { motion, useScroll, useTransform } from "motion/react";

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

function ParallaxBackground({ src, alt, className }: { src: string, alt: string, className: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  // Smoothly transform y from -15% to 15% as the user scrolls past the container
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div style={{ y }} className="absolute inset-0 -top-[25%] -bottom-[25%] z-0">
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover ${className}`}
        />
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <svg style={{ width: 0, height: 0, position: 'absolute' }} aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="wave-clip-1" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 1,0 L 1,1 C 0.5,1 0.5,0.92 0,0.92 Z" />
          </clipPath>
          <clipPath id="wave-clip-2" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 1,0 L 1,0.92 C 0.5,0.92 0.5,1 0,1 Z" />
          </clipPath>
        </defs>
      </svg>
      <Header />
      <BackToTop />

      {/* Hero Section */}
      <section id="map" className="relative min-h-[800px] flex items-center overflow-hidden bg-[#0a1510] z-[60]" style={{ clipPath: 'url(#wave-clip-1)' }}>
        <div className="absolute inset-0 z-0">
          <HeroBackground />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="container relative z-10 px-8 md:px-16 mx-auto max-w-7xl mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-oswald uppercase leading-[1.1] tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
              Next Generation<br />in Laboratory<br />Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl drop-shadow-md font-medium">
              We serve science and technology with high-standard laboratory setups, ESD workspaces, and medical equipment.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#6b7558] hover:bg-[#5a6349] text-white px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2">
                Discover Products
              </button>
              <button className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2 backdrop-blur-sm">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative min-h-[800px] flex items-center bg-[#1a1c18] overflow-hidden z-50 -mt-24 pt-32 pb-16" style={{ clipPath: 'url(#wave-clip-2)' }}>
        <ParallaxBackground
          src="https://picsum.photos/seed/aboutbg/1920/1080"
          alt="About Eco69Lab"
          className="opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1c18] via-[#1a1c18]/90 to-[#1a1c18]/50 z-0 pointer-events-none" />

        <div className="container relative z-10 px-8 md:px-16 mx-auto max-w-7xl text-[#e8e6d9]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-oswald uppercase leading-tight mb-4 text-[#e8e6d9]">
              About Eco69Lab
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl font-medium leading-relaxed">
              Eco69Lab is dedicated to delivering tailored solutions for laboratory and medical tools, focusing on strategic partnerships that support business growth. Our B2B approach emphasizes collaboration and innovation, equipping organizations with the necessary tools and insights to excel in a competitive landscape.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold font-oswald uppercase mb-4 text-[#6b7558]">Innovation-Driven Solutions</h3>
              <p className="text-gray-300">We harness the latest technologies and industry trends to deliver innovative laboratory and medical equipment designed for superior performance and reliability.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold font-oswald uppercase mb-4 text-[#6b7558]">Strategic Partnerships</h3>
              <p className="text-gray-300">At Eco69Lab, we believe success is built through strong, long-term partnerships. We work closely with our clients to create customized solutions that meet evolving needs.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold font-oswald uppercase mb-4 text-[#6b7558]">Global Reach, Local Expertise</h3>
              <p className="text-gray-300">With a worldwide network and deep local market understanding, we bring the best products and services to support healthcare and research professionals across the globe.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="relative min-h-[800px] flex items-center bg-[#2a221b] overflow-hidden z-40 -mt-24 pt-32 pb-16" style={{ clipPath: 'url(#wave-clip-1)' }}>
        <ParallaxBackground
          src="https://picsum.photos/seed/whyus/1920/1080"
          alt="Why Choose Us"
          className="opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a221b] via-[#2a221b]/90 to-[#2a221b]/50 z-0 pointer-events-none" />

        <div className="container relative z-10 px-8 md:px-16 mx-auto max-w-7xl text-[#e8e6d9]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-oswald uppercase leading-tight mb-4 text-[#e8e6d9]">
              Why Choose Eco69Lab?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl font-medium leading-relaxed">
              At Eco69Lab, we are committed to delivering more than just products — we provide solutions that empower our clients to achieve excellence. Our approach is built on expertise, customization, quality, and continuous support, ensuring lasting value in every partnership.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black/40 p-8 rounded-2xl border-t-4 border-[#6b7558] backdrop-blur-sm">
              <h3 className="text-xl font-bold font-oswald uppercase mb-3">Expertise Across Industries</h3>
              <p className="text-gray-300 text-sm">Decades of experience serving laboratories, hospitals, and research centers worldwide.</p>
            </div>
            <div className="bg-black/40 p-8 rounded-2xl border-t-4 border-[#6b7558] backdrop-blur-sm">
              <h3 className="text-xl font-bold font-oswald uppercase mb-3">Tailored Solutions</h3>
              <p className="text-gray-300 text-sm">Customized services and equipment selections that align with each client's unique requirements.</p>
            </div>
            <div className="bg-black/40 p-8 rounded-2xl border-t-4 border-[#6b7558] backdrop-blur-sm">
              <h3 className="text-xl font-bold font-oswald uppercase mb-3">Commitment to Quality</h3>
              <p className="text-gray-300 text-sm">Strict adherence to international standards, ensuring reliable and high-performance tools.</p>
            </div>
            <div className="bg-black/40 p-8 rounded-2xl border-t-4 border-[#6b7558] backdrop-blur-sm">
              <h3 className="text-xl font-bold font-oswald uppercase mb-3">Ongoing Support</h3>
              <p className="text-gray-300 text-sm">Dedicated customer service and technical support to assist before, during, and after project completion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="relative min-h-[800px] flex items-center bg-[#3a2e25] overflow-hidden z-30 -mt-24 pt-32 pb-16" style={{ clipPath: 'url(#wave-clip-2)' }}>
        <ParallaxBackground
          src="https://picsum.photos/seed/servicesbg/1920/1080"
          alt="Our Services"
          className="opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#3a2e25] via-[#3a2e25]/90 to-[#3a2e25]/60 z-0 pointer-events-none" />

        <div className="container relative z-10 px-8 md:px-16 mx-auto max-w-7xl text-[#e8e6d9]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mb-12 text-right"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-oswald uppercase leading-tight mb-4 text-[#e8e6d9]">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl ml-auto font-medium leading-relaxed">
              Eco69Lab offers a full spectrum of services to meet the evolving needs of laboratories, healthcare providers, and research institutions. We facilitate global equipment sourcing, ensure smooth integration into operational workflows, and empower teams through specialized education and training programs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-bold font-oswald uppercase text-[#6b7558] mb-3">Import & Export</h3>
              <p className="text-gray-300 text-sm">We specialize in the import and export of laboratory and medical tools, ensuring access to the latest global technologies.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-bold font-oswald uppercase text-[#6b7558] mb-3">Implementation</h3>
              <p className="text-gray-300 text-sm">Our team provides expert guidance in the implementation of solutions, ensuring seamless integration into existing workflows.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-bold font-oswald uppercase text-[#6b7558] mb-3">Education & Training</h3>
              <p className="text-gray-300 text-sm">We offer comprehensive programs designed to educate users on the effective use of tools, enhancing operational efficiency and safety.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-bold font-oswald uppercase text-[#6b7558] mb-3">Consultancy</h3>
              <p className="text-gray-300 text-sm">Our consultancy helps organizations optimize lab operations, providing insights and strategies to improve performance and compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="relative min-h-[800px] flex items-center bg-[#252a22] overflow-hidden z-20 -mt-24 pt-32 pb-16" style={{ clipPath: 'url(#wave-clip-1)' }}>
        <ParallaxBackground
          src="https://picsum.photos/seed/approach/1920/1080"
          alt="Our Approach"
          className="opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#252a22] via-[#252a22]/90 to-[#252a22]/60 z-0 pointer-events-none" />

        <div className="container relative z-10 px-8 md:px-16 mx-auto max-w-7xl text-[#e8e6d9]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-oswald uppercase leading-tight mb-4 text-[#e8e6d9]">
              Our Approach
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl font-medium leading-relaxed">
              At Eco69Lab, we follow a client-centric approach that emphasizes collaboration, innovation, and quality at every stage. Our structured process ensures that every project is executed with precision and a deep understanding of our partners' unique needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-[2.5rem] left-8 right-8 h-0.5 bg-[#6b7558]/30 z-0" />

            <div className="relative z-10 flex flex-col pt-4">
              <div className="w-12 h-12 rounded-full bg-[#6b7558] text-white flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-[#6b7558]/30">1</div>
              <h3 className="text-xl font-bold font-oswald uppercase mb-3">Needs Assessment</h3>
              <p className="text-gray-300 text-sm">We begin by thoroughly analyzing client requirements to deliver customized solutions.</p>
            </div>
            <div className="relative z-10 flex flex-col pt-4">
              <div className="w-12 h-12 rounded-full bg-[#6b7558] text-white flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-[#6b7558]/30">2</div>
              <h3 className="text-xl font-bold font-oswald uppercase mb-3">Strategic Planning</h3>
              <p className="text-gray-300 text-sm">Every project is mapped out with clear milestones and aligned with industry best practices.</p>
            </div>
            <div className="relative z-10 flex flex-col pt-4">
              <div className="w-12 h-12 rounded-full bg-[#6b7558] text-white flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-[#6b7558]/30">3</div>
              <h3 className="text-xl font-bold font-oswald uppercase mb-3">Seamless Execution</h3>
              <p className="text-gray-300 text-sm">Our team ensures smooth delivery, integration, and support for all solutions provided.</p>
            </div>
            <div className="relative z-10 flex flex-col pt-4">
              <div className="w-12 h-12 rounded-full bg-[#6b7558] text-white flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-[#6b7558]/30">4</div>
              <h3 className="text-xl font-bold font-oswald uppercase mb-3">Continuous<br />Improvement</h3>
              <p className="text-gray-300 text-sm">We foster long-term relationships by consistently seeking feedback and enhancing our services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="relative min-h-[700px] flex items-center bg-[#151a17] overflow-hidden z-10 -mt-24 pt-32 pb-16" style={{ clipPath: 'url(#wave-clip-2)' }}>
        <ParallaxBackground
          src="https://picsum.photos/seed/globalbg/1920/1080"
          alt="Global Presence"
          className="opacity-20 mix-blend-overlay grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#151a17] via-[#151a17]/90 to-[#151a17]/60 z-0 pointer-events-none" />

        <div className="container relative z-10 px-8 md:px-16 mx-auto max-w-7xl text-[#e8e6d9]">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-oswald uppercase leading-tight mb-8">
              Global Presence, Local Expertise
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-white/5 to-transparent p-8 rounded-2xl border border-white/5">
                <h3 className="text-2xl font-bold font-oswald uppercase mb-4 text-[#6b7558]">Quality Standards</h3>
                <p className="text-gray-300 text-sm leading-relaxed">At Eco69Lab, we are dedicated to maintaining the highest quality standards in everything we do. From the selection of materials to the delivery of products, our processes ensure that every solution we provide meets international industry regulations and exceeds client expectations.</p>
              </div>
              <div className="bg-gradient-to-br from-white/5 to-transparent p-8 rounded-2xl border border-white/5">
                <h3 className="text-2xl font-bold font-oswald uppercase mb-4 text-[#6b7558]">Customer Commitment</h3>
                <p className="text-gray-300 text-sm leading-relaxed">We put our customers at the heart of everything we do. By understanding their unique needs and challenges, we are able to deliver personalized solutions, offer continuous support, and build long-lasting relationships based on trust and mutual growth.</p>
              </div>
              <div className="bg-gradient-to-br from-white/5 to-transparent p-8 rounded-2xl border border-white/5">
                <h3 className="text-2xl font-bold font-oswald uppercase mb-4 text-[#6b7558]">Our Core Values</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Integrity, innovation, and excellence are the core values that drive Eco69Lab forward. We uphold these principles in every aspect of our business, ensuring that our actions, products, and services reflect our commitment to improving the healthcare and laboratory sectors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative min-h-[700px] flex items-center bg-[#0a1510] overflow-hidden z-0 -mt-24 pt-32 pb-32" style={{ clipPath: 'url(#wave-clip-1)' }}>
        <ParallaxBackground
          src="https://picsum.photos/seed/testimonialsbg/1920/1080"
          alt="Testimonials"
          className="opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1510] via-[#0a1510]/80 to-[#0a1510]/40 z-0 pointer-events-none" />

        <div className="container relative z-10 px-8 md:px-16 text-[#e8e6d9] mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-oswald uppercase leading-tight mb-6">
              Keeping Customers Satisfied
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto font-medium leading-relaxed mb-12">
              At Eco69Lab, customer satisfaction is our top priority. We focus on delivering exceptional products and services, responding promptly to inquiries, and providing ongoing support to ensure that our customers' needs are always met. Our dedication to excellence drives us to continuously improve and adapt.
            </p>
            <h3 className="text-2xl font-bold font-oswald uppercase text-[#6b7558]">What People Think About Us</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/5 flex flex-col justify-between">
              <div>
                <div className="text-yellow-500 mb-4 tracking-widest text-lg">★★★★★</div>
                <p className="text-gray-300 italic mb-6 leading-relaxed text-sm">"Eco69Lab has been an invaluable partner in our laboratory operations. Their expertise in medical tools and equipment has greatly enhanced our capabilities!"</p>
              </div>
              <div className="mt-auto pt-4 border-t border-white/10">
                <p className="font-bold text-white">Paul M.</p>
                <p className="text-xs text-[#6b7558] uppercase font-oswald tracking-widest mt-1">Riu</p>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/5 flex flex-col justify-between">
              <div>
                <div className="text-yellow-500 mb-4 tracking-widest text-lg">★★★★★</div>
                <p className="text-gray-300 italic mb-6 leading-relaxed text-sm">"Working with Eco69Lab has transformed our laboratory's efficiency. Their knowledge of medical tools and commitment to quality have made a significant difference. We highly recommend their services!"</p>
              </div>
              <div className="mt-auto pt-4 border-t border-white/10">
                <p className="font-bold text-white">Carl T.</p>
                <p className="text-xs text-[#6b7558] uppercase font-oswald tracking-widest mt-1">Dordenelle</p>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/5 flex flex-col justify-between">
              <div>
                <div className="text-yellow-500 mb-4 tracking-widest text-lg">★★★★★</div>
                <p className="text-gray-300 italic mb-6 leading-relaxed text-sm">"Eco69Lab team has been great partner through our operations internationally. Their innovative and sustainable philosophy enabled our organization to leverage the latest technologies and best practices."</p>
              </div>
              <div className="mt-auto pt-4 border-t border-white/10">
                <p className="font-bold text-white">Dean H.</p>
                <p className="text-xs text-[#6b7558] uppercase font-oswald tracking-widest mt-1">Consortium</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="relative bg-[#0a1510] text-[#e8e6d9] pb-10 z-0">
        <div className="container relative z-10 px-8 md:px-16 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 pt-12 border-t border-white/10">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-[#0a1510]">
                  <YinYangIcon className="w-6 h-6" strokeWidth={2} />
                </div>
                <span className="font-oswald text-xl font-bold tracking-wide">GLOBAL ECO-TECH</span>
              </div>
              <p className="text-gray-400 max-w-sm mb-6 text-sm">
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
              <h4 className="font-oswald text-lg font-bold tracking-wide mb-6 uppercase text-white">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="#about" className="hover:text-[#6b7558] transition-colors">About Eco69Lab</Link></li>
                <li><Link href="#services" className="hover:text-[#6b7558] transition-colors">Our Services</Link></li>
                <li><Link href="#why-us" className="hover:text-[#6b7558] transition-colors">Why Choose Us</Link></li>
                <li><Link href="#approach" className="hover:text-[#6b7558] transition-colors">Our Approach</Link></li>
                <li><Link href="#contact" className="hover:text-[#6b7558] transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-oswald text-lg font-bold tracking-wide mb-6 uppercase text-white">Contact Us</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 text-[#6b7558]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span>Plovdiv 4000, Central District<br />BULGARIA</span>
                </li>
                <li className="flex items-center gap-3 w-max">
                  <svg className="w-4 h-4 text-[#6b7558]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <a href="mailto:info@eco69lab.com" className="hover:text-[#6b7558] transition-colors">info@eco69lab.com</a>
                </li>
                <li className="flex items-center gap-3 w-max">
                  <svg className="w-4 h-4 text-[#6b7558]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <a href="tel:+34610835592" className="hover:text-[#6b7558] transition-colors">+34 610 83 55 92</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 uppercase tracking-widest font-oswald">
            <p>&copy; {new Date().getFullYear()} Global Eco-Tech Network. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
