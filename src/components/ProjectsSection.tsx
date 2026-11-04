'use client';

import React, { useState } from 'react';
import { portfolioData, ProjectItem } from '@/data/portfolio';
import ProjectDetailModal from './ProjectDetailModal';

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [modalInitialTab, setModalInitialTab] = useState<
    'overview' | 'workflow' | 'assets' | 'metrics'
  >('overview');

  const openProjectModal = (
    project: ProjectItem,
    tab: 'overview' | 'workflow' | 'assets' | 'metrics' = 'overview'
  ) => {
    setModalInitialTab(tab);
    setSelectedProject(project);
  };

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-header reveal visible">
          <h2 id="projects-heading">PROJECTS</h2>
          <p>
            Quest log of completed missions — klik <strong>SELENGKAPNYA</strong> pada
            tiap proyek untuk melihat cara kerja, arsitektur, dan galeri assets.
          </p>
        </div>

        <div className="projects-grid reveal visible">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="project-card pixel-border particle-trigger"
            >
              {/* Thumbnail Preview dari folder /public/projects/<slug>/cover.svg */}
              <div
                className="project-cover-wrap"
                onClick={() => openProjectModal(project, 'overview')}
                role="button"
                tabIndex={0}
                aria-label={`Lihat detail proyek ${project.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openProjectModal(project, 'overview');
                  }
                }}
              >
                <img
                  src={project.coverImage}
                  alt={`Preview proyek ${project.title}`}
                  className="project-cover-img"
                  loading="lazy"
                />
                <span className="project-folder-chip">📁 /projects/{project.slug}</span>
              </div>

              <div className="project-header">
                <div className="project-title-wrap">
                  <span className="project-icon" aria-hidden="true">
                    {project.icon}
                  </span>
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-role-badge">{project.period}</span>
                  </div>
                </div>

                <div className="project-links">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </div>

              <p className="project-desc">{project.shortDesc}</p>

              {/* Quick Story Highlights */}
              <div className="project-quick-highlights">
                <div>
                  <strong>Peran:</strong> {project.role}
                </div>
                {project.metrics[0] && (
                  <div>
                    <strong>Hasil Utama:</strong> {project.metrics[0].value} —{' '}
                    {project.metrics[0].detail}
                  </div>
                )}
              </div>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Bar: Tab Selengkapnya & Cara Kerja */}
              <div className="project-card-actions">
                <button
                  type="button"
                  className="btn-selengkapnya"
                  onClick={() => openProjectModal(project, 'overview')}
                >
                  ▶ SELENGKAPNYA (DETAIL &amp; TAB)
                </button>
                <button
                  type="button"
                  className="btn-cara-kerja"
                  onClick={() => openProjectModal(project, 'workflow')}
                >
                  ⚙️ CARA KERJA
                </button>
                <button
                  type="button"
                  className="btn-cara-kerja"
                  onClick={() => openProjectModal(project, 'assets')}
                >
                  🖼️ ASSETS ({project.assets.length})
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectDetailModal
        project={selectedProject}
        initialTab={modalInitialTab}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
