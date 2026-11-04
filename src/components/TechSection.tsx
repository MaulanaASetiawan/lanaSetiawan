'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';

export default function TechSection() {
  const { techCategories } = portfolioData;

  return (
    <section id="tech" aria-labelledby="tech-heading">
      <div className="container">
        <div className="section-header reveal visible">
          <h2 id="tech-heading">TECH STACK</h2>
          <p>Tools and technologies I wield in my quest.</p>
        </div>

        <div className="tech-categories reveal visible">
          {techCategories.map((category) => (
            <div key={category.title} className="tech-category">
              <div className="tech-category-title">
                <span className="tech-category-icon" aria-hidden="true">
                  {category.icon}
                </span>{' '}
                {category.title}
              </div>
              <div className="tech-grid">
                {category.items.map((tech) => (
                  <div
                    key={tech.label}
                    className="tech-card pixel-border-sm particle-trigger"
                  >
                    <span className="tech-icon" aria-hidden="true">
                      {tech.icon}
                    </span>
                    <span className="tech-label">{tech.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
