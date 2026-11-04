'use client';

import React, { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#tech', label: 'Tech' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const saved = (localStorage.getItem('pixel-cv-theme') as 'dark' | 'light') || 'dark';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.getAttribute('id')}`);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('pixel-cv-theme', next);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <a
        href="#hero"
        className="nav-brand"
        onClick={(e) => handleNavClick(e, '#hero')}
      >
        MAULANA.dev
      </a>

      <button
        id="hamburger"
        type="button"
        className={`hamburger-retro ${menuOpen ? 'is-open' : ''}`}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        🎮
      </button>

      <ul id="nav-links" className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
        <li className="mobile-drawer-header">
          <span className="mobile-drawer-title">MENU NAVIGASI</span>
          <button
            type="button"
            className="drawer-close-btn"
            aria-label="Close mobile menu"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </li>

        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`nav-link ${activeSection === item.href ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        id="theme-toggle"
        type="button"
        className="theme-toggle-nav"
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        onClick={toggleTheme}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </nav>
  );
}
