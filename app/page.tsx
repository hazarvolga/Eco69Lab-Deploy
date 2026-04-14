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
  // Increased parallax intensity
  const y = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

  return (
    <div ref={ref} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div style={{ y }} className="absolute inset-0 -top-[30%] -bottom-[30%] z-0">
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

const YinYangIcon = ({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a5 5 0 0 0 0 10 5 5 0 0 1 0 10" />
    <circle cx="12" cy="7" r="1" fill="currentColor" />
    <circle cx="12" cy="17" r="1" fill="currentColor" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-outfit selection:bg-accent selection:text-background transition-colors duration-500">
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
      <Header />
      <BackToTop />

      {/* Hero Section */}
      <section id="map" className="relative min-h-[850px] flex items-center overflow-hidden bg-background z-[60]" style={{ clipPath: 'url(#wave-clip-1)' }}>
        <div className="absolute inset-0 z-0">
          <HeroBackground />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/50 to-transparent" />
        </div>

        <div className="container relative z-10 px-8 md:px-16 mx-auto max-w-7xl mt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-lora leading-[1.05] tracking-tight mb-8 text-foreground">
              Ecology meets<br /><span className="italic text-accent">Precision Lab</span><br />Solutions.
            </h1>
            <p className="text-xl md:text-2xl text-muted mb-10 max-w-2xl font-light leading-relaxed">
              We serve science and technology with high-standard laboratory setups, ESD workspaces, and medical equipment designed for a sustainable future.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-accent hover:bg-accent-hover text-background px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2 shadow-lg shadow-accent/20">
                Discover Products
              </button>
              <button className="bg-transparent hover:bg-foreground/5 border border-border text-foreground px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2 backdrop-blur-sm">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative min-h-[800px] flex items-center bg-surface overflow-hidden z-50 -mt-24 pt-32 pb-16" style={{ clipPath: 'url(#wave-clip-2)' }}>
        <ParallaxBackground
          src="https://picsum.photos/seed/bio1/1920/1080"
          alt="About Eco69Lab"
          className="opacity-20 mix-blend-luminosity dark:opacity-20 light:opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-surface/60 z-0 pointer-events-none" />

        <div className="container relative z-10 px-8 md:px-16 mx-auto max-w-7xl text-foreground">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-lora mb-6 text-accent">
              About Eco69Lab
            </h2>
            <p className="text-lg md:text-2xl text-muted mb-8 max-w-4xl font-light leading-relaxed">
              Eco69Lab is dedicated to delivering tailored solutions for laboratory and medical tools, focusing on strategic partnerships that support business growth. Our B2B approach emphasizes collaboration and sustainable innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="bg-surface-hover/80 border border-border p-10 rounded-[2.5rem] backdrop-blur-md">
              <h3 className="text-2xl font-lora mb-4 text-foreground">Innovation-Driven</h3>
              <p className="text-muted font-light leading-relaxed">We harness the latest technologies and industry trends to deliver innovative laboratory and medical equipment designed for superior performance and reliability.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-accent p-10 rounded-[2.5rem] text-background shadow-xl shadow-accent/10">
              <h3 className="text-2xl font-lora mb-4 text-background">Strategic Partnerships</h3>
              <p className="text-background/80 font-medium leading-relaxed">At Eco69Lab, we believe success is built through strong, long-term partnerships. We work closely with our clients to create customized solutions that meet evolving needs.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="bg-surface-hover/80 border border-border p-10 rounded-[2.5rem] backdrop-blur-md">
              <h3 className="text-2xl font-lora mb-4 text-foreground">Global Reach, Local Expertise</h3>
              <p className="text-muted font-light leading-relaxed">With a worldwide network and deep local market understanding, we bring the best products and services to support healthcare and research professionals across the globe.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="relative min-h-[800px] flex items-center bg-surface-hover overflow-hidden z-40 -mt-24 pt-32 pb-16" style={{ clipPath: 'url(#wave-clip-1)' }}>
        <ParallaxBackground
          src="https://picsum.photos/seed/bio2/1920/1080"
          alt="Why Choose Us"
          className="opacity-10 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-surface-hover via-surface-hover/95 to-surface-hover/80 z-0 pointer-events-none" />

        <div className="container relative z-10 px-8 md:px-16 mx-auto max-w-7xl text-foreground">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-lora mb-6 text-accent">
              Why Choose Eco69Lab?
            </h2>
            <p className="text-lg md:text-2xl text-muted mb-8 max-w-4xl mx-auto font-light leading-relaxed">
              We are committed to delivering more than just products — we provide solutions that empower our clients to achieve excellence built on expertise, customization, quality, and continuous support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Expertise Across Industries", text: "Decades of experience serving laboratories, hospitals, and research centers worldwide." },
              { title: "Tailored Solutions", text: "Customized services and equipment selections that align with each client's unique requirements." },
              { title: "Commitment to Quality", text: "Strict adherence to international standards, ensuring reliable and high-performance tools." },
              { title: "Ongoing Support", text: "Dedicated customer service and technical support to assist before, during, and after project completion." }
            ].map((item, idx) => (
              <div key={idx} className="bg-background p-8 rounded-[2rem] border-t-2 border-accent/50 shadow-lg group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <LeafIcon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-lora mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted font-light text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="relative min-h-[800px] flex items-center bg-surface overflow-hidden z-30 -mt-24 pt-32 pb-16" style={{ clipPath: 'url(#wave-clip-2)' }}>
        <ParallaxBackground
          src="https://picsum.photos/seed/bio3/1920/1080"
          alt="Our Services"
          className="opacity-15 mix-blend-color-dodge grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-surface via-surface/90 to-surface/60 z-0 pointer-events-none" />

        <div className="container relative z-10 px-8 md:px-16 mx-auto max-w-7xl text-foreground">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:w-2/3"
          >
            <h2 className="text-4xl md:text-6xl font-lora mb-6 text-accent">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-muted font-light leading-relaxed">
              We facilitate global equipment sourcing, ensure smooth integration into operational workflows, and empower teams through specialized education and training programs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { num: "01", title: "Import & Export", text: "We specialize in the import and export of laboratory and medical tools, ensuring access to the latest global technologies." },
              { num: "02", title: "Implementation", text: "Our team provides expert guidance in the implementation of solutions, ensuring seamless integration into existing workflows." },
              { num: "03", title: "Education & Training", text: "We offer comprehensive programs designed to educate users on the effective use of tools, enhancing operational efficiency and safety." },
              { num: "04", title: "Consultancy", text: "Our consultancy helps organizations optimize lab operations, providing insights and strategies to improve performance and compliance." }
            ].map((service, idx) => (
              <div key={idx} className="flex gap-6 bg-surface-hover/50 hover:bg-surface-hover transition-colors border border-border p-8 rounded-[2rem] backdrop-blur-md">
                <div className="text-4xl font-lora text-accent/50 italic">{service.num}</div>
                <div>
                  <h3 className="text-2xl font-medium text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted font-light leading-relaxed">{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="relative min-h-[800px] flex items-center bg-foreground text-background overflow-hidden z-20 -mt-24 pt-32 pb-16" style={{ clipPath: 'url(#wave-clip-1)' }}>
        <div className="container relative z-10 px-8 md:px-16 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-lora mb-6 text-background">
              Our Approach
            </h2>
            <p className="text-lg md:text-xl text-background/80 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              At Eco69Lab, we follow a client-centric approach that emphasizes collaboration, innovation, and quality at every stage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-[2rem] left-[12%] right-[12%] h-[1px] bg-background/20 z-0" />

            {[
              { num: 1, title: "Needs Assessment", text: "We begin by thoroughly analyzing client requirements to deliver customized solutions." },
              { num: 2, title: "Strategic Planning", text: "Every project is mapped out with clear milestones and aligned with industry best practices." },
              { num: 3, title: "Seamless Execution", text: "Our team ensures smooth delivery, integration, and support for all solutions provided." },
              { num: 4, title: "Continuous Improvement", text: "We foster long-term relationships by consistently seeking feedback and enhancing our services." }
            ].map((step) => (
              <div key={step.num} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-background text-foreground flex items-center justify-center font-lora text-2xl mb-6 shadow-xl transition-transform group-hover:scale-110">{step.num}</div>
                <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                <p className="text-background/70 font-light text-sm leading-relaxed px-4">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="relative min-h-[700px] flex items-center bg-background overflow-hidden z-10 -mt-24 pt-32 pb-16" style={{ clipPath: 'url(#wave-clip-2)' }}>
        <ParallaxBackground
          src="https://picsum.photos/seed/bio4/1920/1080"
          alt="Global Presence"
          className="opacity-[0.05] mix-blend-screen"
        />

        <div className="container relative z-10 px-8 md:px-16 mx-auto max-w-7xl text-foreground">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-lora mb-8 text-accent">
              Global Presence, Local Expertise
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Quality Standards", text: "From the selection of materials to the delivery of products, our processes ensure that every solution we provide meets international industry regulations and exceeds client expectations." },
              { title: "Customer Commitment", text: "By understanding their unique needs and challenges, we deliver personalized solutions, offer continuous support, and build long-lasting relationships based on trust and mutual growth." },
              { title: "Our Core Values", text: "Integrity, innovation, and excellence are the core values that drive Eco69Lab forward, ensuring that our actions reflect our commitment to improving healthcare and laboratory sectors." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-b from-surface-hover to-transparent p-10 rounded-[2.5rem] border border-border text-center">
                <div className="w-12 h-12 bg-border rounded-full mx-auto mb-6 flex items-center justify-center">
                  <LeafIcon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-lora mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted font-light text-sm leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative min-h-[700px] flex items-center bg-surface overflow-hidden z-0 -mt-24 pt-32 pb-32" style={{ clipPath: 'url(#wave-clip-1)' }}>
        <div className="container relative z-10 px-8 md:px-16 text-foreground mx-auto max-w-7xl">
          <div className="text-center mb-20 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-lora mb-6 text-accent">
              Keeping Customers Satisfied
            </h2>
            <p className="text-lg md:text-xl text-muted max-w-3xl font-light leading-relaxed mb-6">
              At Eco69Lab, customer satisfaction is our top priority. We focus on delivering exceptional products and services, responding promptly to inquiries, and providing ongoing support to ensure that our customers' needs are always met.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-hover/50 border border-border p-10 rounded-[2.5rem] flex flex-col justify-between">
              <div>
                <div className="text-accent mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>)}
                </div>
                <p className="text-muted font-light italic mb-8 leading-relaxed">"Eco69Lab has been an invaluable partner in our laboratory operations. Their expertise in medical tools and equipment has greatly enhanced our capabilities!"</p>
              </div>
              <div className="pt-6 border-t border-border flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center font-lora text-accent">P</div>
                <div>
                  <p className="font-medium text-foreground">Paul M.</p>
                  <p className="text-xs text-muted tracking-wide mt-0.5">RIU</p>
                </div>
              </div>
            </div>
            <div className="bg-surface-hover/50 border border-border p-10 rounded-[2.5rem] flex flex-col justify-between">
              <div>
                <div className="text-accent mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>)}
                </div>
                <p className="text-muted font-light italic mb-8 leading-relaxed">"Working with Eco69Lab has transformed our laboratory's efficiency. Their knowledge of medical tools and commitment to quality have made a significant difference. We highly recommend their services!"</p>
              </div>
              <div className="pt-6 border-t border-border flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center font-lora text-accent">C</div>
                <div>
                  <p className="font-medium text-foreground">Carl T.</p>
                  <p className="text-xs text-muted tracking-wide mt-0.5">DORDENELLE</p>
                </div>
              </div>
            </div>
            <div className="bg-accent p-10 rounded-[2.5rem] flex flex-col justify-between shadow-xl shadow-accent/10">
              <div>
                <div className="text-background mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>)}
                </div>
                <p className="text-background/80 font-medium italic mb-8 leading-relaxed">"Eco69Lab team has been great partner through our operations internationally. Their innovative and sustainable philosophy enabled our organization to leverage the latest technologies and best practices."</p>
              </div>
              <div className="pt-6 border-t border-background/20 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center font-lora text-accent">D</div>
                <div>
                  <p className="font-medium text-background">Dean H.</p>
                  <p className="text-xs text-background/60 tracking-wide mt-0.5">CONSORTIUM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="relative bg-background text-foreground pb-10 z-0">
        <div className="container relative z-10 px-8 md:px-16 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 pt-12 border-t border-border">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-accent text-background">
                  <YinYangIcon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <span className="font-lora text-xl font-medium tracking-wide">GLOBAL ECO-TECH</span>
              </div>
              <p className="text-muted max-w-sm mb-8 font-light text-sm leading-relaxed">
                Validating planetary health through IoT-enabled solutions, sustainable human-tech collaboration, and transparent marketplaces.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center hover:bg-accent hover:text-background transition-colors border border-border">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center hover:bg-accent hover:text-background transition-colors border border-border">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-lora text-lg font-medium mb-6 text-accent">Quick Links</h4>
              <ul className="space-y-4 text-sm font-light text-muted">
                <li><Link href="#about" className="hover:text-accent transition-colors">About Eco69Lab</Link></li>
                <li><Link href="#services" className="hover:text-accent transition-colors">Our Services</Link></li>
                <li><Link href="#why-us" className="hover:text-accent transition-colors">Why Choose Us</Link></li>
                <li><Link href="#approach" className="hover:text-accent transition-colors">Our Approach</Link></li>
                <li><Link href="#contact" className="hover:text-accent transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-lora text-lg font-medium mb-6 text-accent">Contact Us</h4>
              <ul className="space-y-4 text-sm font-light text-muted">
                <li className="flex items-start gap-4">
                  <svg className="w-5 h-5 mt-0.5 text-accent opacity-70 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span>Plovdiv 4000, Central District<br />BULGARIA</span>
                </li>
                <li className="flex items-center gap-4 w-max">
                  <svg className="w-5 h-5 text-accent opacity-70 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <a href="mailto:info@eco69lab.com" className="hover:text-accent transition-colors">info@eco69lab.com</a>
                </li>
                <li className="flex items-center gap-4 w-max">
                  <svg className="w-5 h-5 text-accent opacity-70 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <a href="tel:+34610835592" className="hover:text-accent transition-colors">+34 610 83 55 92</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted font-light tracking-wide">
            <p>&copy; {new Date().getFullYear()} Global Eco-Tech Network. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
