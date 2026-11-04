'use client';

import { useEffect } from 'react';

export default function PixelParticles() {
  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let activeParticles = 0;
    const maxParticles = 45;

    const getColors = () => {
      const style = getComputedStyle(document.documentElement);
      const colors = [
        style.getPropertyValue('--particle-1').trim(),
        style.getPropertyValue('--particle-2').trim(),
        style.getPropertyValue('--particle-3').trim(),
        style.getPropertyValue('--particle-4').trim(),
      ].filter(Boolean);
      return colors.length ? colors : ['#f97316', '#38bdf8', '#a78bfa', '#22c55e'];
    };

    const createParticle = (x: number, y: number, container: HTMLElement) => {
      if (activeParticles >= maxParticles) return;
      activeParticles++;

      const particle = document.createElement('div');
      particle.classList.add('particle');

      const size = 3 + Math.floor(Math.random() * 3) * 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      const colors = getColors();
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.backgroundColor = color;

      const rect = container.getBoundingClientRect();
      const localX = x - rect.left;
      const localY = y - rect.top;
      particle.style.left = `${localX}px`;
      particle.style.top = `${localY}px`;

      const angle = Math.random() * Math.PI * 2;
      const speed = 40 + Math.random() * 80;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed - 30;

      container.style.position = container.style.position || 'relative';
      container.appendChild(particle);

      let startTime: number | null = null;
      const duration = 500 + Math.random() * 300;
      const gravity = 200;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = (timestamp - startTime) / 1000;
        const progress = elapsed / (duration / 1000);

        if (progress >= 1) {
          particle.remove();
          activeParticles--;
          return;
        }

        const currentX = localX + vx * elapsed;
        const currentY = localY + vy * elapsed + 0.5 * gravity * elapsed * elapsed;
        const opacity = 1 - progress;
        const scale = 1 - progress * 0.5;

        particle.style.transform = `translate(${currentX - localX}px, ${
          currentY - localY
        }px) scale(${scale})`;
        particle.style.opacity = String(opacity);

        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    };

    let lastSpawn = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('.particle-trigger') as HTMLElement | null;
      if (!target) return;

      const now = Date.now();
      if (now - lastSpawn < 90) return;
      lastSpawn = now;

      createParticle(e.clientX, e.clientY, target);
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null;
}
