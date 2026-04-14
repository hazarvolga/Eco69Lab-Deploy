'use client';

export default function HeroBackground() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover opacity-60"
      src="/hero-gaia-bg.mp4"
    />
  );
}
