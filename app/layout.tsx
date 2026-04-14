import type { Metadata } from 'next';
import { Outfit, Lora } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });

export const metadata: Metadata = {
  title: 'Global Eco-Tech Network | Gaia Design',
  description: 'Validating Planetary Health with Sustainable Science',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${lora.variable} scroll-smooth`}>
      <body className="font-outfit antialiased bg-[#050A07] text-[#F5F2EB]" suppressHydrationWarning>
        {/* Subtle noise overlay for organic texture */}
        <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.015] mix-blend-screen" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        {children}
      </body>
    </html>
  );
}
