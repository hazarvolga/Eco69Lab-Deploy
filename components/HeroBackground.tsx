'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { GoogleGenAI } from '@google/genai';

export default function HeroBackground() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(true);
  const [needsApiKey, setNeedsApiKey] = useState(false);

  useEffect(() => {
    async function generateBg() {
      // Check if we already have it cached
      const cached = localStorage.getItem('hero-bg-image');
      if (cached) {
        setImageUrl(cached);
        setIsGenerating(false);
        return;
      }

      try {
        const hasKey = await (window as any).aistudio?.hasSelectedApiKey();
        if (!hasKey) {
          setNeedsApiKey(true);
          setIsGenerating(false);
          return;
        }

        await generateWithKey();
      } catch (error) {
        console.error("Error checking API key:", error);
        // Fallback to try generating anyway
        await generateWithKey();
      }
    }

    generateBg();
  }, []);

  async function generateWithKey() {
    setIsGenerating(true);
    setNeedsApiKey(false);
    try {
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      if (!apiKey) {
        console.error("Gemini API key not found");
        setIsGenerating(false);
        return;
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-image-preview',
        contents: {
          parts: [
            {
              text: 'A high-tech, glowing stylized world map with energy lines connecting different regions. The colors are predominantly dark green, bright green, glowing orange, and teal. It looks like a futuristic ecological global network visualization. No text, no words, clean background.',
            },
          ],
        },
        config: {
          imageConfig: {
            aspectRatio: "16:9",
            imageSize: "2K"
          },
        },
      });

      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          const base64EncodeString = part.inlineData.data;
          const url = `data:image/jpeg;base64,${base64EncodeString}`;
          setImageUrl(url);
          try {
            localStorage.setItem('hero-bg-image', url);
          } catch (e) {
            console.warn("Could not cache image in localStorage (might be too large)");
          }
          break;
        }
      }
    } catch (error: any) {
      console.error("Error generating image:", error);
      if (error?.message?.includes("PERMISSION_DENIED") || error?.message?.includes("Requested entity was not found")) {
        setNeedsApiKey(true);
      }
    } finally {
      setIsGenerating(false);
    }
  }

  async function handleSelectKey() {
    try {
      await (window as any).aistudio?.openSelectKey();
      // Assume success due to race condition
      await generateWithKey();
    } catch (error) {
      console.error("Error opening key selector:", error);
    }
  }

  if (imageUrl) {
    return (
      <Image 
        src={imageUrl} 
        alt="Global Map Network" 
        fill 
        className="object-cover opacity-60"
        priority
        unoptimized
      />
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#0a1510] z-20">
      {isGenerating ? (
        <div className="flex flex-col items-center gap-4 text-[#6b7558]">
          <div className="w-12 h-12 border-4 border-t-[#6b7558] border-r-[#6b7558] border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          <p className="font-oswald tracking-widest uppercase text-sm">Generating Network Map...</p>
        </div>
      ) : needsApiKey ? (
        <div className="flex flex-col items-center gap-6 bg-black/80 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm max-w-md text-center">
          <h3 className="text-2xl font-oswald text-white uppercase">API Key Required</h3>
          <p className="text-gray-300">
            To generate this high-quality background image, you need to provide your own Gemini API key from a paid Google Cloud project.
          </p>
          <a 
            href="https://ai.google.dev/gemini-api/docs/billing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-[#6b7558] hover:underline"
          >
            Learn more about billing
          </a>
          <button 
            onClick={handleSelectKey}
            className="bg-[#6b7558] hover:bg-[#5a6349] text-white px-8 py-3 rounded-full font-medium transition-all"
          >
            Select API Key
          </button>
        </div>
      ) : (
        <Image 
          src="https://picsum.photos/seed/globalmap/1920/1080" 
          alt="Global Map Fallback" 
          fill 
          className="object-cover opacity-60"
          priority
        />
      )}
    </div>
  );
}
