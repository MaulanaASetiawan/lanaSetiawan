# 👾 Pixel Portfolio (Next.js Edition) — Maulana Agus Setiawan

Versi **Next.js (App Router + TypeScript)** dari portofolio pixel-art **Maulana Agus Setiawan**, dibangun di folder terpisah (`lana-nextjs`) agar bersih, modular, dan siap langsung di-deploy ke **Vercel**.

## ✨ Pembaruan & Penyelesaian Audit (`laporan.md`)

1. **Siap Rekruter (K1 & K2)**:
   - Tombol **Download CV (`/cv-maulana-agus-setiawan.pdf`)** di Hero & Contact.
   - Tombol Email menggunakan `mailto:` + fitur **Salin Email Sekali Klik (`maulanaa.agss@gmail.com`)** tanpa memaksa login Gmail.
   - Tautan **LinkedIn**, **GitHub**, dan repositori **PDFKu (`MaulanaASetiawan/PDFKu`)** aktif dan valid (tanpa link `#`).
2. **Tab "Selengkapnya" untuk Tiap Proyek (`ProjectDetailModal.tsx`)**:
   - Setiap kartu proyek memiliki tombol **`▶ SELENGKAPNYA (DETAIL & TAB)`** yang membuka modal interaktif dengan **4 Tab**:
     - `📋 OVERVIEW`: Peran, periode, masalah (*Problem*), solusi arsitektur, dan daftar teknologi.
     - `⚙️ CARA KERJA`: Diagram blok cara kerja sistem (`workflow.svg`) + penjelasan tahapan *step-by-step*.
     - `🖼️ ASSETS & GALERI`: Galeri visual interaktif dari folder khusus masing-masing proyek.
     - `📊 HASIL & METRIK`: Hasil pengujian terukur (mis. validasi **MAPE** pada AQUASEE, arsitektur hybrid pada PDFKu, dan pipeline MLOps TFX/Grafana).
3. **Satu Folder Khusus per Proyek (`public/projects/<slug>/`)**:
   - `public/projects/aquasee/`
   - `public/projects/pdfku/`
   - `public/projects/mental-health-ml/`
   - `public/projects/scribd-downloader/`
4. **Section About & Pengalaman Maritim (T2 & T3)**:
   - Menampilkan nama lengkap **Maulana Agus Setiawan**, lulusan S1 Informatika **Universitas Mulawarman**, pengalaman di **industri maritim Samarinda**, serta status ketersediaan kerja.
5. **Aksesibilitas, Kontras, Mobile Font, Audio & Security Headers (T4, T5, S1–S6, R1–R5)**:
   - Musik chiptune **default OFF (`🔇`)** saat halaman pertama kali dibuka (WCAG 1.4.2).
   - Ukuran teks label di layar HP minimum `≥ 11.5px` dan ukuran tombol sentuh `≥ 44×44 px`.
   - Kontras warna teks sekunder/muted ditingkatkan (`> 6.2:1`, lulus WCAG AA).
   - Mendukung `<main id="content">`, `@media (prefers-reduced-motion: reduce)`, dan tombol tutup `✕` pada menu drawer mobile.
   - Metadata SEO lengkap (`og.svg`, `robots.txt`, `sitemap.xml`, `canonical`) dan Security Headers di `next.config.mjs`.

## 🚀 Cara Menjalankan secara Lokal

```bash
cd e:\Software-Kuliah\antigravity\about-me\lana-nextjs
npm install
npm run dev
```

Buka `http://localhost:3000` di browser.

## 📦 Cara Deploy ke Vercel

1. Push folder `lana-nextjs` ke repositori GitHub baru (atau set **Root Directory** ke `lana-nextjs` di pengaturan proyek Vercel).
2. Framework Preset akan otomatis terdeteksi sebagai **Next.js**.
3. Klik **Deploy**.
