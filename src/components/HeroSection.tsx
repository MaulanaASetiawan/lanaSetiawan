'use client';

import React, { useEffect, useState } from 'react';
import { portfolioData } from '@/data/portfolio';

interface HeroSectionProps {
  onOpenMiniGame: () => void;
}

export default function HeroSection({ onOpenMiniGame }: HeroSectionProps) {
  const { profile } = portfolioData;
  const [typedText, setTypedText] = useState(profile.typingRoles[0]);
  const [hpFilled, setHpFilled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHpFilled(true), 250);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setTypedText(profile.typingRoles[0]);
      return;
    }

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const currentPhrase = profile.typingRoles[phraseIndex];

      if (!isDeleting) {
        charIndex++;
        setTypedText(currentPhrase.substring(0, charIndex));
        if (charIndex === currentPhrase.length) {
          isDeleting = true;
          timeoutId = setTimeout(tick, 1800);
          return;
        }
        timeoutId = setTimeout(tick, 55);
      } else {
        charIndex--;
        setTypedText(currentPhrase.substring(0, charIndex));
        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % profile.typingRoles.length;
          timeoutId = setTimeout(tick, 380);
          return;
        }
        timeoutId = setTimeout(tick, 28);
      }
    };

    timeoutId = setTimeout(tick, 600);
    return () => clearTimeout(timeoutId);
  }, [profile.typingRoles]);

  return (
    <section id="hero" aria-label="Introduction">
      <div className="container">
        <div className="hero-content">
          <div className="availability-pill pixel-border-sm">
            <span className="status-dot" aria-hidden="true" />
            <span>{profile.availability}</span>
          </div>

          <p className="hero-greeting">{profile.greeting}</p>

          <h1 className="hero-name">{profile.shortName}</h1>
          <p className="hero-fullname">{profile.fullName}</p>

          <div className="typing-container" aria-live="off" aria-label={profile.titleRole}>
            <span id="typing-text" className="typing-text">
              {typedText}
            </span>
            <span className="typing-cursor" aria-hidden="true">
              ▮
            </span>
          </div>

          <p className="hero-bio">
            <strong>Informatics graduate</strong> from{' '}
            <strong>Universitas Mulawarman</strong>. Specializing in{' '}
            <strong>Modular Android Development (Kotlin, Jetpack Compose &amp; MVVM)</strong>,{' '}
            <strong>End-to-End IoT Solutions (ESP32 &amp; Connected Sensors)</strong>, and{' '}
            <strong>Applied Machine Learning (YOLOv8, TFX &amp; TensorFlow)</strong>—bridging real-time hardware telemetry and intelligent models into seamless mobile interfaces.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn-pixel particle-trigger">
              ▶ LIHAT PROYEK
            </a>
            <a
              href={profile.cvUrl}
              download="CV-Maulana-Agus-Setiawan.pdf"
              className="btn-pixel btn-pixel-alt particle-trigger"
            >
              📄 DOWNLOAD CV
            </a>
            <a href="#contact" className="btn-pixel btn-pixel-ghost particle-trigger">
              💬 HUBUNGI SAYA
            </a>
          </div>

          <div className="status-bar pixel-border">
            <div className="status-row">
              <span className="status-label">HP</span>
              <div className="hp-container">
                <div className="hp-bar">
                  <div
                    className="hp-fill"
                    style={{ width: hpFilled ? '100%' : '0%' }}
                  />
                </div>
                <span className="hp-text">{profile.statusBar.hp}</span>
              </div>
            </div>
            <div className="status-row">
              <span className="status-label">CLASS</span>
              <span className="status-value">{profile.statusBar.classRole}</span>
            </div>
            <div className="status-row">
              <span className="status-label">LVL</span>
              <span className="status-value">{profile.statusBar.level}</span>
            </div>
            <div className="status-row">
              <span className="status-label">ZONE</span>
              <span className="status-value">{profile.statusBar.zone}</span>
            </div>
          </div>

          <div className="easter-egg-wrap">
            <button
              type="button"
              className="easter-egg-trigger"
              id="game-trigger"
              aria-label="Buka mini-game Pixel Runner"
              title="Mainkan Pixel Runner (atau ketik Konami Code)"
              onClick={onOpenMiniGame}
            >
              🕹️ <span>MAIN MINI-GAME</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
