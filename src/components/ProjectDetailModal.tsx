'use client';

import React, { useEffect, useState } from 'react';
import { ProjectItem } from '@/data/portfolio';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  initialTab?: 'overview' | 'workflow' | 'assets' | 'metrics';
  onClose: () => void;
}

export default function ProjectDetailModal({
  project,
  initialTab = 'overview',
  onClose,
}: ProjectDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'workflow' | 'assets' | 'metrics'>(
    initialTab
  );
  const [selectedAssetIdx, setSelectedAssetIdx] = useState(0);

  useEffect(() => {
    setActiveTab(initialTab);
    setSelectedAssetIdx(0);
  }, [project, initialTab]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentAsset = project.assets[selectedAssetIdx] || project.assets[0];

  return (
    <div
      className="project-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="project-modal-box pixel-border">
        {/* Top Modal Header */}
        <div className="project-modal-header">
          <div className="project-modal-title-group">
            <span className="project-modal-icon" aria-hidden="true">
              {project.icon}
            </span>
            <div>
              <h3 id="modal-project-title" className="project-modal-title">
                {project.title}
              </h3>
              <p className="project-modal-subtitle">{project.subtitle}</p>
            </div>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            aria-label="Tutup detail proyek"
            onClick={onClose}
          >
            ✕ TUTUP
          </button>
        </div>

        {/* Navigation Tabs ("Tab Selengkapnya") */}
        <div className="project-modal-tabs" role="tablist" aria-label="Detail proyek">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'overview'}
            className={`modal-tab-btn ${activeTab === 'overview' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            📋 OVERVIEW
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'workflow'}
            className={`modal-tab-btn ${activeTab === 'workflow' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('workflow')}
          >
            ⚙️ CARA KERJA
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'assets'}
            className={`modal-tab-btn ${activeTab === 'assets' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('assets')}
          >
            🖼️ ASSETS &amp; GALERI ({project.assets.length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'metrics'}
            className={`modal-tab-btn ${activeTab === 'metrics' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('metrics')}
          >
            📊 HASIL &amp; METRIK
          </button>
        </div>

        {/* Tab Panel Content */}
        <div className="project-modal-body">
          {activeTab === 'overview' && (
            <div className="tab-panel" role="tabpanel">
              <div className="overview-meta-grid">
                <div className="meta-box pixel-border-sm">
                  <span className="meta-label">PERAN SAYA (ROLE)</span>
                  <span className="meta-value">{project.role}</span>
                </div>
                <div className="meta-box pixel-border-sm">
                  <span className="meta-label">KONTEKS &amp; PERIODE</span>
                  <span className="meta-value">{project.period}</span>
                </div>
              </div>

              <div className="story-grid">
                <div className="story-card pixel-border-sm">
                  <h4 className="story-heading">⚠️ MASALAH (PROBLEM)</h4>
                  <p>{project.problem}</p>
                </div>
                <div className="story-card pixel-border-sm">
                  <h4 className="story-heading">💡 SOLUSI ARSITEKTUR</h4>
                  <p>{project.solution}</p>
                </div>
              </div>

              <div className="modal-tags-section">
                <h4 className="story-heading">🛠️ TEKNOLOGI YANG DIGUNAKAN</h4>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'workflow' && (
            <div className="tab-panel" role="tabpanel">
              <div className="workflow-diagram-box pixel-border-sm">
                <div className="workflow-diagram-header">
                  <span>📐 DIAGRAM ALUR &amp; ARSITEKTUR SISTEM</span>
                  <code className="folder-badge">{project.workflowDiagram}</code>
                </div>
                <img
                  src={project.workflowDiagram}
                  alt={`Diagram cara kerja ${project.title}`}
                  className="workflow-diagram-img"
                />
              </div>

              <h4 className="story-heading" style={{ marginTop: '1.25rem' }}>
                🔄 TAHAPAN CARA KERJA (STEP-BY-STEP)
              </h4>
              <ol className="workflow-steps-list">
                {project.howItWorksSteps.map((step, idx) => (
                  <li key={idx} className="workflow-step-item pixel-border-sm">
                    <span className="step-number">0{idx + 1}</span>
                    <p className="step-text">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {activeTab === 'assets' && (
            <div className="tab-panel" role="tabpanel">
              <div className="assets-folder-banner pixel-border-sm">
                <span>📁 Direktori Khusus Proyek:</span>
                <code>{project.assetsFolder}</code>
              </div>

              {currentAsset && (
                <div className="asset-viewer pixel-border-sm">
                  <div className="asset-stage">
                    <img
                      src={currentAsset.src}
                      alt={currentAsset.title}
                      className="asset-main-img"
                    />
                  </div>
                  <div className="asset-caption-bar">
                    <div>
                      <strong className="asset-title">{currentAsset.title}</strong>
                      <p className="asset-caption">{currentAsset.caption}</p>
                    </div>
                    <span className="tag">{currentAsset.type.toUpperCase()}</span>
                  </div>
                </div>
              )}

              <div className="asset-thumbnails">
                {project.assets.map((asset, idx) => (
                  <button
                    key={asset.src}
                    type="button"
                    className={`asset-thumb-btn pixel-border-sm ${
                      selectedAssetIdx === idx ? 'is-selected' : ''
                    }`}
                    onClick={() => setSelectedAssetIdx(idx)}
                  >
                    <img src={asset.src} alt={asset.title} />
                    <span>{asset.title}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'metrics' && (
            <div className="tab-panel" role="tabpanel">
              <h4 className="story-heading">📊 HASIL PENGUJIAN &amp; DAMPAK PROYEK</h4>
              <div className="metrics-grid">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="metric-card pixel-border-sm">
                    <span className="metric-label">{metric.label}</span>
                    <strong className="metric-value">{metric.value}</strong>
                    <p className="metric-detail">{metric.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Links */}
        <div className="project-modal-footer">
          <div className="modal-footer-links">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pixel btn-pixel-sm"
              >
                🔗 {link.label} ↗
              </a>
            ))}
          </div>
          <button type="button" className="project-link" onClick={onClose}>
            TUTUP [ESC]
          </button>
        </div>
      </div>
    </div>
  );
}
