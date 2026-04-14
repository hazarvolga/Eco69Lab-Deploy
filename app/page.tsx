'use client';

import { useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
              <Link href="/products" className="bg-accent hover:bg-accent-hover text-background px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2 shadow-lg shadow-accent/20">
                Discover Products
              </Link>
              <Link href="#contact" className="bg-transparent hover:bg-foreground/5 border border-border text-foreground px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2 backdrop-blur-sm">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative min-h-[800px] flex items-center bg-surface overflow-hidden z-50 -mt-24 pt-32 pb-16" style={{ clipPath: 'url(#wave-clip-2)' }}>
        <ParallaxBackground
          src="/about_gaia_lab.png"
          alt="About Eco69Lab"
          className="opacity-40 mix-blend-luminosity dark:opacity-40 light:opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-surface/40 z-0 pointer-events-none" />

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
          src="/why_us_organic_tech.png"
          alt="Why Choose Us"
          className="opacity-30 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-surface-hover via-surface-hover/90 to-surface-hover/70 z-0 pointer-events-none" />

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
          src="/services_eco_network.png"
          alt="Our Services"
          className="opacity-35 mix-blend-color-dodge"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-surface via-surface/80 to-surface/30 z-0 pointer-events-none" />

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
          src="/global_presence_globe.png"
          alt="Global Presence"
          className="opacity-40 mix-blend-screen"
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
              At Eco69Lab, customer satisfaction is our top priority. We focus on delivering exceptional products and services, responding promptly to inquiries, and providing ongoing support to ensure that our customers&apos; needs are always met.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-hover/50 border border-border p-10 rounded-[2.5rem] flex flex-col justify-between">
              <div>
                <div className="text-accent mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>)}
                </div>
                <p className="text-muted font-light italic mb-8 leading-relaxed">&quot;Eco69Lab has been an invaluable partner in our laboratory operations. Their expertise in medical tools and equipment has greatly enhanced our capabilities!&quot;</p>
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
                <p className="text-muted font-light italic mb-8 leading-relaxed">&quot;Working with Eco69Lab has transformed our laboratory&apos;s efficiency. Their knowledge of medical tools and commitment to quality have made a significant difference. We highly recommend their services!&quot;</p>
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
                <p className="text-background/80 font-medium italic mb-8 leading-relaxed">&quot;Eco69Lab team has been great partner through our operations internationally. Their innovative and sustainable philosophy enabled our organization to leverage the latest technologies and best practices.&quot;</p>
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

      <Footer />
    </div>
  );
}
