'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TechSection from '@/components/TechSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import FloatingControls from '@/components/FloatingControls';
import SideOrnaments from '@/components/SideOrnaments';
import PixelParticles from '@/components/PixelParticles';

// Lazy-load MiniGameModal (Perbaikan Audit S4: tidak memblokir render awal)
const MiniGameModal = dynamic(() => import('@/components/MiniGameModal'), {
  ssr: false,
});

export default function HomePage() {
  const [miniGameOpen, setMiniGameOpen] = useState(false);

  // Konami Code Listener (↑↑↓↓←→←→BA)
  useEffect(() => {
    const konamiCode = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'KeyB',
      'KeyA',
    ];
    let index = 0;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === konamiCode[index]) {
        index++;
        if (index === konamiCode.length) {
          index = 0;
          setMiniGameOpen(true);
        }
      } else {
        index = 0;
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <SideOrnaments />
      <PixelParticles />
      <Navbar />

      {/* Perbaikan Audit S5: Menggunakan landmark <main id="content"> */}
      <main id="content">
        <HeroSection onOpenMiniGame={() => setMiniGameOpen(true)} />
        <AboutSection />
        <TechSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <FloatingControls />
      <MiniGameModal isOpen={miniGameOpen} onClose={() => setMiniGameOpen(false)} />
    </>
  );
}
