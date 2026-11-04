# 📁 Panduan Folder Assets Proyek (`public/projects/`)

Setiap proyek memiliki **1 folder khusus** sesuai *slug* proyeknya agar semua gambar, diagram cara kerja, foto alat, dan screenshot aplikasi tertata rapi:

```text
public/projects/
├── bitewise/                 # Proyek 1: BiteWise (Bangkit Academy Capstone - Android Kotlin MVVM)
│   ├── cover-showcase.png    # Mockup HD 4-layar utama hasil peningkatan resolusi dari demo video
│   ├── scanner-recommendations.png # Mockup HD fitur Scan Nilai Gizi & Rekomendasi Makanan
│   ├── health-dashboard-darkmode.png # Mockup HD Profil Medis, Kalori Harian & Dark Mode
│   └── workflow.svg          # Diagram arsitektur Android MVVM + CameraX + Retrofit2 + Cloud ML
├── aquasee/                  # Proyek 2: AQUASEE (Smart Aquarium IoT & Android)
│   ├── cover.svg             # Gambar sampul kartu proyek
│   ├── workflow.svg          # Diagram alur cara kerja (Sensor -> ESP32 Fuzzy Sugeno -> Antares -> Android)
│   └── mobile-dashboard.svg  # Tampilan aplikasi monitoring Android (Kotlin)
├── paytrack/                 # Proyek 2: Paytrack (Personal Finance & Target Savings Tracker)
│   ├── dashboard.png         # Screenshot asli Dashboard Overview dari repo GitHub
│   ├── savings.png           # Screenshot asli Target-Driven Savings
│   ├── expanses.png          # Screenshot asli Expense Management
│   ├── recurring.png         # Screenshot asli Recurring Subscriptions
│   ├── warning.png           # Screenshot asli Strict Transaction Validations
│   ├── auth.png              # Screenshot asli Modal Authentication Supabase
│   └── workflow.svg          # Diagram cara kerja Strict Wallet Accountability & RLS
├── broiler-counter/          # Proyek 3: Broiler Counter (Jetpack Compose, MVVM, YOLOv8s)
│   ├── cover.svg             # Visualisasi deteksi bounding box ayam broiler
│   └── workflow.svg          # Diagram cara kerja kamera -> YOLOv8s -> MVVM -> Compose UI
├── duckdock/                 # Proyek 4: DuckDock (ESP32 Stream Deck, OLED SSD1306, 10 Buttons)
│   ├── logo.svg              # Logo resmi DuckDock (Cyber-Duck + Stream Deck)
│   ├── oled-states.svg       # Visualisasi 5 State layar OLED SSD1306 (128x64) + Pop-up Feedback
│   ├── oled-features.svg     # Visualisasi 11 fitur makro BLE HID & tampilan pop-up OLED
│   ├── hardware-pinout.svg   # Diagram pinout GPIO ESP32, I2C OLED, dan 10 tombol
│   ├── cover.svg             # Ilustrasi perangkat keras
│   └── workflow.svg          # Diagram alur sistem
├── pdfku/                    # Proyek 5: PDFKu (Hybrid Client/Cloud PDF Suite)
│   ├── cover.svg             # Gambar sampul kartu proyek
│   └── workflow.svg          # Diagram cara kerja (Browser PDF-lib vs Cloud Python API)
├── mental-health-ml/         # Proyek 6: Mental Health Twitter Prediction (MLOps)
│   ├── cover.svg             # Gambar sampul kartu proyek
│   └── workflow.svg          # Diagram TFX Pipeline, Docker Serving, Prometheus & Grafana
└── scribd-downloader/        # Proyek 7: Scribd Batch Downloader
    ├── cover.svg             # Gambar sampul kartu proyek
    └── workflow.svg          # Diagram otomatisasi ekstraksi dan kompilasi PDF
```

## Cara Menambahkan atau Mengganti Gambar Proyek
1. Masukkan file gambar baru (`.png`, `.jpg`, `.webp`, atau `.svg`) ke dalam folder proyek terkait di `public/projects/<nama-folder>/`.
2. Buka file `src/data/portfolio.ts`.
3. Pada proyek yang ingin diubah, perbarui bagian `coverImage`, `workflowDiagram`, atau tambahkan item baru ke dalam array `assets`.
