# 📁 Panduan Folder Assets Proyek (`public/projects/`)

Setiap proyek memiliki **1 folder khusus** sesuai *slug* proyeknya agar semua gambar, diagram cara kerja, foto alat, dan screenshot aplikasi tertata rapi:

```text
public/projects/
├── bitewise/                 # Proyek 1: BiteWise (Bangkit Academy Capstone - Android Kotlin MVVM)
│   ├── cover-showcase.png    # Mockup HD 4-layar utama hasil peningkatan resolusi dari demo video
│   ├── scanner-recommendations.png # Mockup HD fitur Scan Nilai Gizi & Rekomendasi Makanan
│   ├── health-dashboard-darkmode.png # Mockup HD Profil Medis, Kalori Harian & Dark Mode
│   └── workflow.svg          # Diagram arsitektur Android MVVM + CameraX + Retrofit2 + Cloud ML
├── aquasee/                  # Proyek 2: AQUASEE (Smart Aquarium IoT, Fuzzy Sugeno, OLED SSD1306 & Android)
│   ├── aquarium-real.jpg     # Foto implementasi fisik nyata instalasi alat & akuarium AQUASEE
│   ├── android-overview.jpg  # Tangkapan layar asli Tab Overview & status aktuator di aplikasi Android
│   ├── android-chart.jpg     # Tangkapan layar asli Tab Grafik Parameter Air (1415 data) & download
│   ├── mobile-dashboard.svg  # Mockup dual-phone showcase antarmuka aplikasi Android (Overview & Grafik)
│   ├── oled-states.svg       # Visualisasi 4 State layar OLED SSD1306 (128x64): Monitoring, Aktuator, Priming, EEPROM
│   ├── cover.svg             # Gambar ilustrasi sistem
│   └── workflow.svg          # Diagram alur cara kerja (Sensor -> ESP32 Fuzzy Sugeno -> Antares -> Android)
├── paytrack/                 # Proyek 2: Paytrack (Personal Finance & Target Savings Tracker)
│   ├── dashboard.png         # Screenshot asli Dashboard Overview dari repo GitHub
│   ├── savings.png           # Screenshot asli Target-Driven Savings
│   ├── expanses.png          # Screenshot asli Expense Management
│   ├── recurring.png         # Screenshot asli Recurring Subscriptions
│   ├── warning.png           # Screenshot asli Strict Transaction Validations
│   ├── auth.png              # Screenshot asli Modal Authentication Supabase
│   └── workflow.svg          # Diagram cara kerja Strict Wallet Accountability & RLS
├── broiler-counter/          # Proyek 4: ChicKount (Jetpack Compose, MVVM, YOLOv8s TFLite, Room SQLite)
│   ├── 01_app_overview_banner.png     # Banner overview aplikasi ChicKount
│   ├── 02_logo_chickount_hd.png       # Logo resmi ChicKount HD
│   ├── 03_screen_home_real.png        # Screenshot nyata HomeScreen (Statistik & Pindaian Terakhir)
│   ├── 04_screen_scan_real.png        # Screenshot nyata ScanScreen (Live CameraX + Confidence Threshold)
│   ├── 04_ui_screens_documentation.png # Dokumentasi fungsi 3 layar utama ChicKount
│   ├── 05_screen_scan_tracking.png    # Screenshot tracking & bounding box ayam realtime
│   ├── 06_screen_history_real.png     # Screenshot nyata HistoryScreen (Grafik 7 hari & Filter)
│   ├── 07_ui_screens_showcase.png     # Showcase perbandingan 3 layar utama
│   ├── 08_detection_sample_real.png   # Sampel hasil anotasi gambar (.jpg) populasi ayam
│   └── workflow.svg                   # Diagram arsitektur MVVM + YOLOv8s TFLite + Room SQLite
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
└── scribd-downloader/        # Proyek 7: ScribdFetch (Neo-Brutalism Batch Downloader, Python, Selenium, Pillow)
    ├── preview.png           # Screenshot nyata antarmuka desktop bergaya Neo-Brutalism
    ├── workflow.svg          # Diagram arsitektur multi-threaded: Shell -> REST API -> Selenium/Requests -> Pillow PDF
    └── cover.svg             # Gambar ilustrasi sistem pengarsipan batch PDF
```

## Cara Menambahkan atau Mengganti Gambar Proyek
1. Masukkan file gambar baru (`.png`, `.jpg`, `.webp`, atau `.svg`) ke dalam folder proyek terkait di `public/projects/<nama-folder>/`.
2. Buka file `src/data/portfolio.ts`.
3. Pada proyek yang ingin diubah, perbarui bagian `coverImage`, `workflowDiagram`, atau tambahkan item baru ke dalam array `assets`.
