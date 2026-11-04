'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';

export default function AboutSection() {
  const { about, profile } = portfolioData;

  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-header reveal visible">
          <h2 id="about-heading">{about.heading}</h2>
          <p>{about.subheading}</p>
        </div>

        <div className="about-layout reveal visible">
          <div className="about-intro pixel-border">
            <div className="about-badge-row">
              <span className="tag">👤 {profile.fullName}</span>
              <span className="tag">📍 {profile.location}</span>
              <span className="tag">🎓 {profile.university}</span>
            </div>
            <p className="about-summary-text">{about.summary}</p>
          </div>

          <div className="about-cards-grid">
            {about.highlights.map((item) => (
              <article
                key={item.title}
                className="about-card pixel-border-sm particle-trigger"
              >
                <div className="about-card-header">
                  <span className="about-card-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="about-card-title">{item.title}</h3>
                    <span className="about-card-period">{item.period}</span>
                  </div>
                </div>
                <p className="about-card-desc">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
