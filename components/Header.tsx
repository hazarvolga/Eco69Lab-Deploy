'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeToggle } from '@/components/ThemeToggle';

const YinYangIcon = ({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a5 5 0 0 0 0 10 5 5 0 0 1 0 10" />
    <circle cx="12" cy="7" r="1" fill="currentColor" />
    <circle cx="12" cy="17" r="1" fill="currentColor" />
  </svg>
);

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    closeMenu();
  };

  return (
    <header className="sticky top-0 z-[80] bg-background/80 backdrop-blur-md py-4 px-8 flex items-center justify-between border-b border-border transition-colors duration-500">
      <div className="flex items-center gap-2">
        {/* Logo */}
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent text-background shadow-lg shadow-accent/20">
          <YinYangIcon className="w-8 h-8" strokeWidth={1.5} />
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground">
        <a href="#map" onClick={(e) => handleScroll(e, '#map')} className="hover:text-accent transition-colors">Map</a>
        <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="hover:text-accent transition-colors">About</a>
        <a href="#services" onClick={(e) => handleScroll(e, '#services')} className="hover:text-accent transition-colors">Services</a>
        <a href="#why-us" onClick={(e) => handleScroll(e, '#why-us')} className="hover:text-accent transition-colors">Why Us</a>
        <a href="#approach" onClick={(e) => handleScroll(e, '#approach')} className="hover:text-accent transition-colors">Approach</a>
        <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="hover:text-accent transition-colors">Contact</a>
      </nav>

      <div className="flex items-center gap-4">
        {/* Theme Toggle integrated elegantly in Header */}
        <ThemeToggle />

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-surface shadow-lg border-t border-border md:hidden flex flex-col py-4 px-8 gap-4"
          >
            <a href="#map" onClick={(e) => handleScroll(e, '#map')} className="text-foreground hover:text-accent font-medium transition-colors py-2 border-b border-border/50">Map</a>
            <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="text-foreground hover:text-accent font-medium transition-colors py-2 border-b border-border/50">About</a>
            <a href="#services" onClick={(e) => handleScroll(e, '#services')} className="text-foreground hover:text-accent font-medium transition-colors py-2 border-b border-border/50">Services</a>
            <a href="#why-us" onClick={(e) => handleScroll(e, '#why-us')} className="text-foreground hover:text-accent font-medium transition-colors py-2 border-b border-border/50">Why Us</a>
            <a href="#approach" onClick={(e) => handleScroll(e, '#approach')} className="text-foreground hover:text-accent font-medium transition-colors py-2 border-b border-border/50">Approach</a>
            <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="text-foreground hover:text-accent font-medium transition-colors py-2">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
