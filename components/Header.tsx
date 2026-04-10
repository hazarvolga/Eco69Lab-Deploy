'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white py-4 px-8 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-2">
        {/* Logo */}
        <div className="w-12 h-12 rounded-full overflow-hidden relative border border-gray-200">
          <Image src="https://picsum.photos/seed/yinyang/100/100" alt="Logo" fill className="object-cover" />
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800">
        <Link href="#map" className="hover:text-[#6b7558] transition-colors">Map</Link>
        <Link href="#lab-tools" className="hover:text-[#6b7558] transition-colors">Lab Tools</Link>
        <Link href="#eco-projects" className="hover:text-[#6b7558] transition-colors">Eco Projects</Link>
        <Link href="#hub" className="hover:text-[#6b7558] transition-colors">Hub</Link>
        <Link href="#alliance-vrm" className="hover:text-[#6b7558] transition-colors">Alliance/VRM</Link>
        <Link href="#contact" className="hover:text-[#6b7558] transition-colors">Contact</Link>
      </nav>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden p-2 text-gray-800 hover:text-[#6b7558] transition-colors"
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

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 md:hidden flex flex-col py-4 px-8 gap-4"
          >
            <Link href="#map" onClick={closeMenu} className="text-gray-800 hover:text-[#6b7558] font-medium transition-colors py-2 border-b border-gray-50">Map</Link>
            <Link href="#lab-tools" onClick={closeMenu} className="text-gray-800 hover:text-[#6b7558] font-medium transition-colors py-2 border-b border-gray-50">Lab Tools</Link>
            <Link href="#eco-projects" onClick={closeMenu} className="text-gray-800 hover:text-[#6b7558] font-medium transition-colors py-2 border-b border-gray-50">Eco Projects</Link>
            <Link href="#hub" onClick={closeMenu} className="text-gray-800 hover:text-[#6b7558] font-medium transition-colors py-2 border-b border-gray-50">Hub</Link>
            <Link href="#alliance-vrm" onClick={closeMenu} className="text-gray-800 hover:text-[#6b7558] font-medium transition-colors py-2 border-b border-gray-50">Alliance/VRM</Link>
            <Link href="#contact" onClick={closeMenu} className="text-gray-800 hover:text-[#6b7558] font-medium transition-colors py-2">Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
