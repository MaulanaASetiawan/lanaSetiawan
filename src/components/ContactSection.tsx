'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolio';

export default function ContactSection() {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-content reveal visible">
          <div className="section-header">
            <h2 id="contact-heading">CONTACT</h2>
            <p>Ready for co-op mode? Let&apos;s connect for roles or project collaborations.</p>
          </div>

          <div className="email-copy-bar pixel-border-sm">
            <span className="email-address-text">📧 {profile.email}</span>
            <button
              type="button"
              className="copy-email-btn"
              onClick={handleCopyEmail}
              aria-label="Salin alamat email ke clipboard"
            >
              {copied ? '✓ TERSALIN!' : '📋 SALIN EMAIL'}
            </button>
          </div>

          <div className="contact-links">
            <a
              href={`mailto:${profile.email}?subject=Halo%20Maulana%20-%20Kolaborasi%20/%20Rekrutmen`}
              className="contact-link pixel-border-sm particle-trigger"
            >
              <span className="contact-icon" aria-hidden="true">
                📧
              </span>
              <span>KIRIM EMAIL</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link pixel-border-sm particle-trigger"
            >
              <span className="contact-icon" aria-hidden="true">
                💼
              </span>
              <span>LINKEDIN</span>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link pixel-border-sm particle-trigger"
            >
              <span className="contact-icon" aria-hidden="true">
                🐙
              </span>
              <span>GITHUB</span>
            </a>

            <a
              href={profile.cvUrl}
              download="CV-Maulana-Agus-Setiawan.pdf"
              className="contact-link pixel-border-sm particle-trigger"
            >
              <span className="contact-icon" aria-hidden="true">
                📄
              </span>
              <span>DOWNLOAD CV</span>
            </a>
          </div>

          <div className="footer-bottom">
            <p className="footer-text">
              © {new Date().getFullYear()}{' '}
              <span className="accent">{profile.fullName.toUpperCase()}</span> — Built with
              Next.js, pixels, and passion in Samarinda. ▪▪▪
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
