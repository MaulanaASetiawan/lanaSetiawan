export interface ProjectAsset {
  title: string;
  src: string;
  caption: string;
  type: 'diagram' | 'screenshot' | 'hardware';
}

export interface ProjectMetric {
  label: string;
  value: string;
  detail: string;
}

export interface ProjectItem {
  slug: string;
  icon: string;
  title: string;
  subtitle: string;
  period: string;
  role: string;
  shortDesc: string;
  problem: string;
  solution: string;
  howItWorksSteps: string[];
  workflowDiagram: string;
  assetsFolder: string;
  coverImage: string;
  assets: ProjectAsset[];
  metrics: ProjectMetric[];
  tags: string[];
  links: {
    label: string;
    url: string;
    external?: boolean;
  }[];
}

export interface TechCategory {
  title: string;
  icon: string;
  items: {
    icon: string;
    label: string;
  }[];
}

export const portfolioData = {
  profile: {
    greeting: 'HELLO WORLD! WELCOME TO MY SPACE',
    shortName: 'MAULANA',
    fullName: 'Maulana Agus Setiawan',
    titleRole: 'Android & IoT Solutions Engineer',
    typingRoles: [
      'Android Developer (Kotlin, Compose & MVVM)',
      'IoT Solutions Engineer (ESP32 & Sensors)',
      'Machine Learning Enthusiast (YOLOv8, TFX & TensorFlow)',
      'Informatics Graduate (Universitas Mulawarman)',
    ],
    bio: 'Informatics graduate from Universitas Mulawarman alumnus. Specializing in modular Android development (Kotlin, Compose, MVVM) and end-to-end IoT engineering, with real-world industry experience bridging connected hardware to intuitive mobile apps.',
    availability: 'Open to Work: Android Developer / IoT Engineer',
    location: 'Samarinda, Kalimantan Timur',
    university: 'Universitas Mulawarman (S1 Informatika, IPK 3.89)',
    email: 'maulanaa.agss@gmail.com',
    github: 'https://github.com/MaulanaASetiawan',
    linkedin: 'https://www.linkedin.com/in/maulana-agss/',
    cvUrl: '/cv-Maulana_Agus_Setiawan.pdf',
    statusBar: {
      hp: '100 / 100',
      classRole: 'Android & IoT Specialist',
      level: '0++',
      zone: 'Samarinda, Kalimantan Timur',
    },
  },

  about: {
    heading: 'ABOUT & EXPERIENCE',
    subheading: 'Specialist in Android & IoT — from connected microcontrollers to clean-architecture mobile apps.',
    summary:
      'Lulusan S1 Informatika Universitas Mulawarman yang berfokus pada Android Development, solusi berbasis IoT, serta penerapan Machine Learning. Berpengalaman merancang arsitektur aplikasi mobile modular berbasis Kotlin dan MVVM, mengintegrasikan model cerdas (seperti Computer Vision YOLOv8 dan TensorFlow) ke dalam aplikasi, serta andal menghubungkan komunikasi data real-time antara sensor hardware (ESP32, Arduino, Raspberry Pi) dengan aplikasi pengguna—termasuk pada proyek maritim bersama PT Badak LNG dan Kontes Robot Indonesia.',
    highlights: [
      {
        icon: '📱',
        title: 'Mobile Development Cohort — Bangkit Academy',
        period: 'Google, GoTo, and Traveloka (Agu 2024 – Des 2024)',
        description:
          'Mengembangkan aplikasi mobile BiteWise berbasis Android (Kotlin, MVVM Clean Architecture), mengintegrasikan antarmuka responsif dengan REST API backend dan model Machine Learning, serta berkolaborasi lintas disiplin menggunakan Git/GitHub.',
      },
      {
        icon: '⚓',
        title: 'Kontributor IoT Maritim — PT Badak LNG',
        period: 'Proyek CSR Jaka Samudra (Sep 2024)',
        description:
          'Merancang sistem bagan apung cerdas berbasis IoT untuk keselamatan maritim, menyusun wiring diagram dan instruksi teknis sensor, serta menginstalasi sensor deteksi kebocoran dan kemiringan langsung di lapangan.',
      },
      {
        icon: '🎓',
        title: 'S1 Informatika (IPK 3.89) & Asisten Lab — Universitas Mulawarman',
        period: 'Agustus 2022 – Juli 2026',
        description:
          'Menyelesaikan skripsi sistem kontrol akuarium otomatis IoT (ESP32 & Fuzzy Sugeno). Bertindak sebagai Koordinator Praktikum Basis Data (100+ mahasiswa/semester) serta Asisten Praktikum Kecerdasan Buatan dan Arsitektur Komputer.',
      },
      {
        icon: '🏆',
        title: 'Pencapaian Kompetisi Robotika & IoT',
        period: 'KRI Bawah Air (KRBAI) & Diskominfo Balikpapan (2024)',
        description:
          'Perwakilan babak wilayah Kontes Robot Indonesia (KRBAI - Autonomous Underwater Vehicle) dengan Raspberry Pi, Arduino & OpenCV; serta Juara 3 Kompetisi Parkir Cerdas berbasis IoT Diskominfo Balikpapan (ESP32, MQTT, C++).',
      },
    ],
  },

  techCategories: [
    {
      title: 'MOBILE & WEB',
      icon: '📱',
      items: [
        { icon: '🤖', label: 'KOTLIN' },
        { icon: '🎨', label: 'JETPACK COMPOSE' },
        { icon: '🏗️', label: 'MVVM ARCH' },
        { icon: '🎯', label: 'FLUTTER' },
        { icon: '🌐', label: 'REACT NATIVE' },
        { icon: '⚡', label: 'NEXT.JS' },
        { icon: '🛡️', label: 'SUPABASE' },
        { icon: '🔥', label: 'FIREBASE' },
        { icon: '🗄️', label: 'SQL' },
      ],
    },
    {
      title: 'MACHINE LEARNING & COMPUTER VISION',
      icon: '🧠',
      items: [
        { icon: '👁️', label: 'YOLOv8' },
        { icon: '🐍', label: 'PYTHON' },
        { icon: '📓', label: 'JUPYTER NOTEBOOK' },
        { icon: '🔮', label: 'TENSORFLOW' },
        { icon: '🔄', label: 'TFX' },
        { icon: '📊', label: 'SCIKIT-LEARN' },
        { icon: '🐳', label: 'DOCKER' },
        { icon: '📈', label: 'PROMETHEUS' },
        { icon: '📊', label: 'GRAFANA' },
      ],
    },
    {
      title: 'ROBOTICS & IoT',
      icon: '🔌',
      items: [
        { icon: '⚙️', label: 'C++' },
        { icon: '📡', label: 'ESP32 & ARDUINO' },
        { icon: '🖥️', label: 'OLED SSD1306' },
        { icon: '🌡️', label: 'SENSORS' },
        { icon: '📨', label: 'MQTT' },
        { icon: '🌐', label: 'HTTP REST' },
      ],
    },
  ] as TechCategory[],

  projects: [
    {
      slug: 'broiler-counter',
      icon: '🐔',
      title: 'CHICKOUNT (YOLOv8s AI)',
      subtitle: 'Aplikasi Penghitung Populasi Ayam Otomatis Berbasis Computer Vision (Jetpack Compose, MVVM & Room)',
      period: 'Proyek Android & On-Device Computer Vision • YOLOv8 TFLite',
      role: 'Android Developer (Kotlin 2.2, Jetpack Compose, MVVM, CameraX, Room) & Computer Vision Engineer (YOLOv8s TFLite)',
      shortDesc:
        'Aplikasi mobile Android modern berbasis Jetpack Compose (Material 3) dan arsitektur MVVM yang menjalankan model deteksi objek YOLOv8-Small (best_small.tflite) secara on-device untuk menghitung populasi ayam secara realtime melalui CameraX maupun foto statis, dilengkapi penyimpanan lokal Room SQLite dan fitur auto-restore.',
      problem:
        'Peternak ayam kesulitan menghitung jumlah populasi ayam di dalam kandang secara manual karena jumlahnya yang banyak dan pergerakan ayam yang aktif, sehingga rentan terjadi kesalahan hitung (human error), memakan waktu lama, serta tidak memiliki pencatatan riwayat populasi yang terstruktur.',
      solution:
        'Mengembangkan aplikasi Android ChicKount menggunakan Jetpack Compose dengan arsitektur MVVM (Kotlin Coroutines & StateFlow) yang menjalankan inferensi model YOLOv8s TensorFlow Lite (XNNPACK multi-core CPU) secara langsung di perangkat. Aplikasi mendukung live camera preview dengan pengaturan ambang sensitivitas (-5% / +5%), menggambar anotasi bounding box ke file gambar lokal, menyimpan riwayat dan grafik mingguan di Room SQLite Database, serta menyediakan fitur Auto-Sync & Pemulihan Lokal.',
      howItWorksSteps: [
        'Pemindaian Realtime & Foto Statis (CameraX 1.4.1): Pengguna memindai kandang secara langsung melalui live camera preview atau mengambil foto statis di ScanScreen, lengkap dengan kontrol penyesuaian Confidence Threshold (-5% / +5%) sesuai pencahayaan kandang.',
        'Preprocessing & Inferensi YOLOv8s TFLite (XNNPACK): Class ChickenDetection menormalisasi citra kamera menjadi tensor NCHW [1, 3, 640, 640] dan mengeksekusi model YOLOv8 best_small.tflite (44.7 MB) menggunakan TensorFlow Lite 2.17.0 multi-core CPU (XNNPACK SIMD) yang stabil.',
        'Post-Processing & Non-Maximum Suppression (NMS): Menyaring kandidat kotak deteksi berdasarkan ambang keyakinan dan menjalankan algoritma NMS untuk mengeliminasi bounding box yang tumpang tindih sehingga setiap ekor ayam terhitung akurat.',
        'Penyimpanan Anotasi Gambar & Auto-Sync Room SQLite: ImageStorageHelper menggambar bounding box dan persentase confidence ke file .jpg di penyimpanan internal (filesDir/scans/), lalu HistoryRepository mencatat metadata sesi ke Room Database (v2.8.5) dengan dukungan syncAndRestoreLocalScans.',
        'Analitik Beranda, Grafik 7 Hari & Bagikan Laporan: HomeScreen dan HistoryScreen menyajikan statistik real-time (Hari Ini, Total Sesi, Rata-rata Ekor/Sesi), grafik distribusi mingguan (Sen–Min), filter waktu (Hari Ini/Minggu Ini/Semua), serta fitur Share Laporan di DetailHistoryScreen.',
      ],
      workflowDiagram: '/projects/broiler-counter/workflow.svg',
      assetsFolder: '/public/projects/broiler-counter/',
      coverImage: '/projects/broiler-counter/01_app_overview_banner.png',
      assets: [
        {
          title: 'Banner Ikhtisar Aplikasi ChicKount',
          src: '/projects/broiler-counter/01_app_overview_banner.png',
          caption: 'Overview aplikasi ChicKount: penghitung populasi ayam otomatis berbasis AI (YOLOv8 TensorFlow Lite) dan Jetpack Compose.',
          type: 'screenshot',
        },
        {
          title: 'Showcase Antarmuka Layar Utama ChicKount',
          src: '/projects/broiler-counter/07_ui_screens_showcase.png',
          caption: 'Perbandingan tampilan antarmuka modern Material Design 3 pada Beranda (Home), Pemindaian Kamera AI (Scan), dan Riwayat (History).',
          type: 'screenshot',
        },
        {
          title: 'Dokumentasi Fitur & Navigasi Layar (UI Documentation)',
          src: '/projects/broiler-counter/04_ui_screens_documentation.png',
          caption: 'Penjelasan fungsi setiap elemen antarmuka pengguna pada ketiga layar utama aplikasi ChicKount.',
          type: 'screenshot',
        },
        {
          title: 'Hasil Deteksi & Tracking Ayam Realtime (YOLOv8s)',
          src: '/projects/broiler-counter/05_screen_scan_tracking.png',
          caption: 'Layar pemindaian kamera mendeteksi setiap ekor ayam secara simultan menggunakan bounding box hijau dan penghitung populasi real-time.',
          type: 'screenshot',
        },
        {
          title: 'Sampel Hasil Anotasi Bounding Box YOLOv8s pada Kandang',
          src: '/projects/broiler-counter/08_detection_sample_real.png',
          caption: 'Contoh hasil penyimpanan gambar anotasi (.jpg) dengan kotak deteksi dan skor keyakinan (confidence score) pada populasi ayam yang rapat.',
          type: 'screenshot',
        },
        {
          title: 'Tangkapan Layar Nyata: Beranda, Kamera Pindai AI, dan Riwayat',
          src: '/projects/broiler-counter/04_screen_scan_real.png',
          caption: 'Tangkapan layar langsung dari perangkat Android saat melakukan pemindaian live dengan pengaturan sensitivitas threshold.',
          type: 'screenshot',
        },
        {
          title: 'Layar Beranda (HomeScreen) Berbasis Data Room SQLite',
          src: '/projects/broiler-counter/03_screen_home_real.png',
          caption: 'Ringkasan statistik nyata: Hari Ini (Ekor), Total Sesi, Rata-rata (Ekor/Sesi), dan daftar Pindaian Terakhir.',
          type: 'screenshot',
        },
        {
          title: 'Layar Riwayat Pemindaian & Grafik Distribusi 7 Hari',
          src: '/projects/broiler-counter/06_screen_history_real.png',
          caption: 'Rekapitulasi total ayam terhitung, diagram batang mingguan (Sen–Min), serta filter waktu interaktif.',
          type: 'screenshot',
        },
        {
          title: 'Diagram Arsitektur MVVM, Jetpack Compose & YOLOv8s TFLite',
          src: '/projects/broiler-counter/workflow.svg',
          caption: 'Arsitektur lengkap ChicKount: UI Layer (Compose), ViewModel Layer (StateFlow), ChickenDetection (YOLOv8 TFLite), dan Room SQLite.',
          type: 'diagram',
        },
      ],
      metrics: [
        {
          label: 'On-Device AI Engine',
          value: 'YOLOv8s TFLite 2.17',
          detail: 'Inferensi tensor NCHW [1, 3, 640, 640] dengan akselerasi CPU multi-core XNNPACK SIMD dan algoritma NMS.',
        },
        {
          label: 'Arsitektur & UI Modern',
          value: 'Compose + MVVM',
          detail: 'Dibangun dengan Kotlin 2.2, Jetpack Compose Material 3, CameraX 1.4.1, Coroutines, dan StateFlow.',
        },
        {
          label: 'Persistensi & Auto-Sync',
          value: 'Room SQLite 2.8.5',
          detail: 'Penyimpanan permanen gambar anotasi bounding box (.jpg) dengan fitur syncAndRestoreLocalScans otomatis.',
        },
      ],
      tags: [
        'KOTLIN 2.2',
        'JETPACK COMPOSE',
        'MVVM ARCHITECTURE',
        'YOLOv8s TFLITE',
        'CAMERAX',
        'ROOM SQLITE',
        'COMPUTER VISION',
      ],
      links: [
        {
          label: 'GitHub Repo (ChicKount)',
          url: 'https://github.com/MaulanaASetiawan/ChicKount',
          external: true,
        },
        {
          label: 'Download APK (v1.0)',
          url: 'https://github.com/MaulanaASetiawan/ChicKount/blob/main/ChicKount-v1.0-debug.apk',
          external: true,
        },
      ],
    },
    {
      slug: 'bitewise',
      icon: '🥗',
      title: 'BITEWISE',
      subtitle: 'Smart Nutrition Scanner & Personalized Health Tracker (Bangkit Academy Capstone)',
      period: 'Capstone Project Bangkit 2024 (Google, GoTo, Traveloka) • Mobile Development',
      role: 'Android Developer (Kotlin, MVVM Architecture, CameraX, Retrofit2 & DataStore)',
      shortDesc:
        'Aplikasi mobile Android berbasis Kotlin dan arsitektur MVVM untuk memindai tabel Informasi Nilai Gizi kemasan makanan menggunakan kamera (CameraX & uCrop), menganalisis tingkat risiko kesehatan terhadap profil pengguna (gula darah, tekanan darah, BMI), serta memberikan rekomendasi makanan sehat dan pelacakan kalori harian.',
      problem:
        'Masyarakat, terutama penderita diabetes, hipertensi, atau obesitas, sering kesulitan memahami dampak angka pada tabel Informasi Nilai Gizi kemasan makanan terhadap kondisi kesehatan mereka serta belum memiliki alat praktis untuk memantau asupan kalori harian sekaligus berdiskusi di satu aplikasi.',
      solution:
        'Mengembangkan aplikasi Android BiteWise menggunakan Kotlin dan arsitektur MVVM yang terintegrasi dengan backend Cloud (Google App Engine) dan model Machine Learning. Pengguna mendaftarkan profil medis (berat/tinggi badan, kadar gula darah, tekanan darah, riwayat penyakit), memindai label nilai gizi makanan dengan CameraX + uCrop untuk mendapatkan klasifikasi risiko instan (LOW / MEDIUM / HIGH), memperoleh rekomendasi makanan sehat beserta rincian makronutrisi, memantau 4 indikator kesehatan pada dashboard gauge, serta berbagi di komunitas.',
      howItWorksSteps: [
        'Registrasi Profil Medis & DataStore Preferences: Pengguna mengisi data fisik (berat & tinggi badan untuk kalkulasi BMI), kadar gula darah, tekanan darah, serta riwayat penyakit (Diabetes, Hipertensi, Obesitas, Jantung, atau Sehat). Sesi login dan preferensi tema (Light/Dark Mode) disimpan secara asinkron menggunakan Jetpack DataStore.',
        'Pemindaian Tabel Nilai Gizi (CameraX & uCrop): Pengguna memotret kemasan makanan/minuman melalui CameraX atau memilih dari galeri, lalu melakukan pemotongan presisi (cropping) pada area tabel Informasi Nilai Gizi menggunakan pustaka uCrop.',
        'Integrasi Cloud API & Analisis Risiko ML (Retrofit2): Citra tabel gizi dikirim melalui multipart request Retrofit2 ke server Google App Engine untuk dianalisis oleh model Machine Learning terhadap profil kesehatan pengguna, menghasilkan status risiko (seperti LOW — Aman dikonsumsi) dan penjelasan medisnya.',
        'Rekomendasi Makanan & Pelacakan Asupan Gizi (MVVM LiveData): Berdasarkan hasil pemindaian, aplikasi menampilkan daftar rekomendasi makanan sehat lengkap dengan gramasi Gula, Lemak, Karbohidrat, dan Protein. Pengguna juga dapat mencatat makanan harian (mis. Nasi Padang 250 Cal) yang otomatis memperbarui 4 gauge indikator (Kalori Harian, BMI, Gula Darah, Tekanan Darah).',
        'Komunitas Gizi & Dual-Theme UI: Pengguna dapat mengunggah foto dan berdiskusi melalui kolom komentar pada feed komunitas, serta mengganti tampilan antara Sage Green Light Mode dan Slate Dark Mode secara instan.',
      ],
      workflowDiagram: '/projects/bitewise/workflow.svg',
      assetsFolder: '/public/projects/bitewise/',
      coverImage: '/projects/bitewise/cover-showcase.png',
      assets: [
        {
          title: 'Ikhtisar 4 Fitur Utama BiteWise (Enhanced HD Mockup)',
          src: '/projects/bitewise/cover-showcase.png',
          caption: 'Tampilan Onboarding, Pemindaian Tabel Informasi Nilai Gizi, Hasil Analisis Risiko ML (LOW), dan Dashboard 4-Gauge Asupan Gizi.',
          type: 'screenshot',
        },
        {
          title: 'Pemindaian Tabel Nilai Gizi & Rekomendasi Makanan Sehat',
          src: '/projects/bitewise/scanner-recommendations.png',
          caption: 'Alur pemindaian kemasan makanan dengan CameraX/uCrop, hasil evaluasi keamanan konsumsi, dan rekomendasi makanan sehat beserta detail makronutrisi.',
          type: 'screenshot',
        },
        {
          title: 'Profil Medis, Kalkulator Kalori Harian & Tampilan Dark Mode',
          src: '/projects/bitewise/health-dashboard-darkmode.png',
          caption: 'Pendaftaran parameter medis (gula darah, tensi, riwayat penyakit), pencatatan makanan harian real-time, serta dukungan tema gelap berbasis Jetpack DataStore.',
          type: 'screenshot',
        },
        {
          title: 'Diagram Arsitektur Android MVVM & Cloud ML Integration',
          src: '/projects/bitewise/workflow.svg',
          caption: 'Arsitektur modular Android (ViewBinding, Navigation, ViewModel/LiveData, DataStore, CameraX/uCrop, dan Retrofit2 REST API).',
          type: 'diagram',
        },
      ],
      metrics: [
        {
          label: 'Arsitektur & Tech Stack',
          value: 'Kotlin MVVM + Jetpack',
          detail: 'Menggunakan ViewModel, LiveData, DataStore Preferences, ViewBinding, Navigation Component, CameraX, uCrop, Glide, dan Retrofit2.',
        },
        {
          label: 'Fitur Kesehatan Terpadu',
          value: '4-in-1 Health App',
          detail: 'Menggabungkan Nutrition Facts OCR Scanner, Rekomendasi Makanan, 4-Gauge Tracker (Kalori, BMI, Gula Darah, Tensi), dan Social Community Feed.',
        },
        {
          label: 'Kolaborasi Lintas Disiplin',
          value: 'Bangkit Capstone 2024',
          detail: 'Kolaborasi tim Mobile Development (Android), Cloud Computing (GCP App Engine), dan Machine Learning.',
        },
      ],
      tags: [
        'KOTLIN',
        'ANDROID SDK',
        'MVVM ARCHITECTURE',
        'RETROFIT2',
        'CAMERAX & UCROP',
        'JETPACK DATASTORE',
        'LIVEDATA',
        'BANGKIT CAPSTONE',
      ],
      links: [
        {
          label: 'GitHub Repo (androidX)',
          url: 'https://github.com/bitewise-lab/androidX',
          external: true,
        },
      ],
    },
    {
      slug: 'scribd-downloader',
      icon: '📚',
      title: 'SCRIBDFETCH (BATCH DOWNLOADER)',
      subtitle: 'Aplikasi Desktop Lokal Pengunduh & Pengarsip PDF dengan Antarmuka Neo-Brutalism (Python, Selenium & Pillow)',
      period: 'Proyek Otomatisasi Desktop & Web Scraping Python',
      role: 'Python Full-Stack & Automation Developer (Selenium Chrome, Pillow, Threading HTTPServer, Neo-Brutalism UI)',
      shortDesc:
        'Aplikasi desktop lokal berbasis Python dan antarmuka modern Neo-Brutalism untuk mengunduh dan mengarsipkan dokumen digital dari Scribd ke dalam format PDF beresolusi tinggi. Mendukung antrean batch multi-URL, ekstraksi judul resmi otomatis via Selenium Chrome DOM inspection, pelacakan proses real-time (halaman, MB/s, ETA, log konsol), serta manajemen arsip file lokal dengan pencarian instan dan auto-cleanup.',
      problem:
        'Pengumpulan dan pengarsipan materi referensi dokumen publik sering terkendala oleh halaman yang dimuat secara dinamis (lazy-load), pemisahan antar halaman berupa potongan gambar resolusi acak, tidak adanya penamaan judul dokumen otomatis, serta antarmuka downloader desktop tradisional yang kaku atau membingungkan.',
      solution:
        'Membangun aplikasi desktop mandiri ScribdFetch dengan arsitektur multi-threaded Python (ThreadingHTTPServer pada 127.0.0.1:5000 di dalam shell Chrome/Edge --app) dan antarmuka Neo-Brutalism berkontras tinggi. Sistem mengotomatisasi penguraian tautan dokumen, melewati proteksi verifikasi via Selenium Chrome, mengunduh potongan lembar halaman secara paralel menggunakan requests.Session, menyusunnya menjadi PDF utuh beresolusi tinggi menggunakan Pillow, dan membersihkan berkas gambar sementara secara otomatis.',
      howItWorksSteps: [
        'Input Batch & Pintasan "Coba ID Cepat": Pengguna memasukkan satu atau banyak URL/ID Scribd (dipisahkan baris baru) dengan live counter deteksi dokumen, atau memilih dari pintasan cepat ID yang dapat ditambah/dihapus via modal dialog tersimpan di LocalStorage browser.',
        'Ekstraksi Judul Asli & DOM Viewer (Selenium Chrome): Worker thread latar belakang menginisialisasi browser headless untuk memeriksa DOM viewer dokumen, melewati proteksi Cloudflare/bot, dan mengekstrak judul resmi dokumen (bukan sekadar fallback ID acak).',
        'Unduhan Potongan Lembar Resolusi Tinggi (requests.Session): Mengunduh seluruh halaman dokumen ke folder temporer (Scribd_Downloads/temp_images/) menggunakan koneksi keep-alive dan header referer tersimulasi.',
        'Kompilasi PDF High-DPI (Pillow / PIL): Seluruh potongan lembar gambar dikonversi ke mode warna RGB dan digabungkan secara presisi menjadi satu berkas PDF tunggal dengan penamaan file yang bersih dan aman.',
        'Manajemen Riwayat: Membuat thumbnail visual, mencatat metadata JSON ke .metadata/, otomatis menghapus folder gambar sementara (temp_images/), dan menyajikan file di daftar arsip dengan filter waktu dan pencarian teks ber-highlight.',
      ],
      workflowDiagram: '/projects/scribd-downloader/workflow.svg',
      assetsFolder: '/public/projects/scribd-downloader/',
      coverImage: '/projects/scribd-downloader/preview.png',
      assets: [
        {
          title: 'Antarmuka Neo-Brutalism ScribdFetch (Real Desktop UI)',
          src: '/projects/scribd-downloader/preview.png',
          caption: 'Tampilan antarmuka desktop lokal bergaya Neo-Brutalism: Kotak input batch URL, pintasan Coba ID Cepat, progress bar dan live log terminal, serta daftar arsip berkas PDF lokal.',
          type: 'screenshot',
        },
        {
          title: 'Diagram Arsitektur Otomatisasi & Kompilasi PDF',
          src: '/projects/scribd-downloader/workflow.svg',
          caption: 'Arsitektur sistem multi-threaded: Neo-Brutalism Shell -> Python ThreadingHTTPServer REST API -> Worker Thread -> Selenium Chrome & Requests -> Pillow PDF Assembly -> Local Storage.',
          type: 'diagram',
        },
        {
          title: 'Ikhtisar Desain Sistem ScribdFetch',
          src: '/projects/scribd-downloader/cover.svg',
          caption: 'Ilustrasi sistem pengarsipan batch dokumen digital lokal berbasis Python.',
          type: 'screenshot',
        },
      ],
      metrics: [
        {
          label: 'Arsitektur & Tampilan',
          value: 'Neo-Brutalism UI',
          detail: 'Antarmuka taktil modern dengan kontras tinggi (2.5px solid border, hard drop shadows) berjalan dalam mode standalone desktop app shell.',
        },
        {
          label: 'Engine Otomatisasi',
          value: 'Selenium + Pillow',
          detail: 'Ekstraksi judul resmi dokumen via Chrome DOM, unduhan paralel chunk lembar, dan kompilasi PDF utuh beresolusi tinggi.',
        },
        {
          label: 'Cleanup',
          value: 'Auto Cleanup',
          detail: 'Pembersihan otomatis folder gambar temporer (zero garbage footprint).',
        },
      ],
      tags: [
        'PYTHON 3',
        'SELENIUM WEBDRIVER',
        'PILLOW (PIL)',
        'NEO-BRUTALISM',
        'LOCAL REST API',
        'DESKTOP APP SHELL',
        'BATCH AUTOMATION',
      ],
      links: [
        {
          label: 'GitHub Repo (Scribd-Batch-Downloader)',
          url: 'https://github.com/MaulanaASetiawan/Scribd-Batch-Downloader',
          external: true,
        },
      ],
    },
    {
      slug: 'paytrack',
      icon: '💳',
      title: 'PAYTRACK',
      subtitle: 'Smart Personal Finance & Target-Driven Savings Tracker (Next.js 15 & Supabase)',
      period: 'Proyek Full-Stack Web & PWA • Active Development',
      role: 'Full-Stack Web Developer (Next.js 15 App Router, TypeScript & Supabase RLS)',
      shortDesc:
        'Aplikasi manajemen keuangan pribadi dan tabungan berbasis Next.js 15 & Supabase dengan prinsip Strict Wallet Accountability: alokasi dana ke tabungan otomatis memotong saldo dompet utama secara riil (tanpa "ghost money") dan mengunci penarikan hingga target 100% tercapai.',
      problem:
        'Banyak aplikasi pencatat anggaran (budgeting) mengizinkan pengguna membuat alokasi tabungan semu ("ghost money") yang tidak terhubung langsung dengan sisa saldo dompet utama, sehingga pencatatan saldo sering tidak sinkron dengan uang nyata.',
      solution:
        'Membangun Paytrack menggunakan Next.js 15 (Server Actions) dan Supabase PostgreSQL (Row Level Security) yang menerapkan validasi ketat: setiap deposit ke target tabungan langsung diverifikasi terhadap saldo dompet utama, memotong saldo secara riil, dan mengunci penarikan dana sebelum target tabungan mencapai 100%.',
      howItWorksSteps: [
        'Autentikasi Modal & Isolasi Data (RLS): Pengguna masuk melalui modal autentikasi Supabase; seluruh baris data dompet, transaksi, dan tabungan diisolasi ketat per pengguna dengan PostgreSQL Row Level Security.',
        'Strict Wallet Accountability: Saldo dompet utama dihitung secara dinamis dari total pemasukan (top-up) dikurangi pengeluaran harian dan alokasi deposit tabungan.',
        'Validasi Transaksi & Target Savings: Saat pengguna mengalokasikan uang ke target tabungan, sistem memvalidasi kecukupan saldo dompet utama agar tidak pernah bernilai negatif.',
        'Goal Locking Mechanism: Dana pada tabungan dikunci hingga progres mencapai 100% guna menjaga disiplin finansial pengguna.',
        'Pelacakan Langganan & Analitik Recharts: Mencatat pengeluaran berulang (Spotify, Netflix, sewa) serta memvisualisasikan distribusi kategori dan tren harian dengan grafik interaktif Recharts dalam aplikasi siap-PWA (@serwist/next).',
      ],
      workflowDiagram: '/projects/paytrack/workflow.svg',
      assetsFolder: '/public/projects/paytrack/',
      coverImage: '/projects/paytrack/dashboard.png',
      assets: [
        {
          title: 'Dashboard Utama Paytrack',
          src: '/projects/paytrack/dashboard.png',
          caption: 'Ringkasan saldo dompet utama, grafik analitik pengeluaran, dan status keuangan secara real-time.',
          type: 'screenshot',
        },
        {
          title: 'Manajemen Target Tabungan (Target-Driven Savings)',
          src: '/projects/paytrack/savings.png',
          caption: 'Alokasi tabungan yang langsung terhubung dengan pemotongan saldo dompet utama dan dikunci hingga target tercapai.',
          type: 'screenshot',
        },
        {
          title: 'Pencatatan & Kategori Pengeluaran',
          src: '/projects/paytrack/expanses.png',
          caption: 'Manajemen pengeluaran harian dengan kategori kustom berwarna dan ikon.',
          type: 'screenshot',
        },
        {
          title: 'Pelacakan Langganan Berulang (Recurring Subscriptions)',
          src: '/projects/paytrack/recurring.png',
          caption: 'Pemantauan tagihan rutin bulanan seperti layanan streaming dan sewa.',
          type: 'screenshot',
        },
        {
          title: 'Validasi Ketat Anti Saldo Negatif',
          src: '/projects/paytrack/warning.png',
          caption: 'Peringatan otomatis ketika alokasi atau pengeluaran melebihi saldo dompet nyata.',
          type: 'screenshot',
        },
        {
          title: 'Modal Autentikasi Supabase',
          src: '/projects/paytrack/auth.png',
          caption: 'Alur login dan registrasi berbasis modal yang cepat dan dilindungi Supabase RLS.',
          type: 'screenshot',
        },
        {
          title: 'Diagram Cara Kerja & Arsitektur Paytrack',
          src: '/projects/paytrack/workflow.svg',
          caption: 'Alur validasi Strict Wallet Accountability, Supabase RLS, dan analitik keuangan.',
          type: 'diagram',
        },
      ],
      metrics: [
        {
          label: 'Akuntabilitas Saldo',
          value: 'Zero Ghost Money',
          detail: 'Setiap rupiah yang masuk ke tabungan memotong saldo dompet utama secara akurat dengan validasi server-side.',
        },
        {
          label: 'Keamanan Database',
          value: 'Supabase RLS',
          detail: 'Isolasi penuh data finansial per pengguna di tingkat PostgreSQL Row Level Security.',
        },
        {
          label: 'Modern Web Stack',
          value: 'Next.js 15 + PWA',
          detail: 'Dibangun dengan App Router, Server Actions, Tailwind CSS, Recharts, dan @serwist/next.',
        },
      ],
      tags: ['Next.js 15', 'TypeScript', 'Supabase', 'PostgreSQL RLS', 'Tailwind CSS', 'Recharts', 'PWA'],
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/MaulanaASetiawan/Paytrack',
          external: true,
        },
        {
          label: 'Website',
          url: 'https://paytracks.vercel.app',
          external: true,
        },
      ],
    },
        {
      slug: 'aquasee',
      icon: '🐠',
      title: 'AQUASEE',
      subtitle: 'Sistem Kontrol Kualitas Air Akuarium Otomatis Berbasis ESP32, Fuzzy Sugeno, OLED SSD1306 & Antares IoT',
      period: 'Tugas Akhir S1 • Solo End-to-End Developer',
      role: 'Perancang Rangkaian IoT, Firmware Engineer (C++ ESP32), Fuzzy Modeler & Android Developer (Kotlin)',
      shortDesc:
        'Sistem otomasi akuarium cerdas terintegrasi berbasis ESP32, 3 sensor (pH, Suhu DS18B20, Turbidity/Kekeruhan), layar OLED SSD1306 (128x64), 4 aktuator relay (Pompa Air, Pompa Peristaltik Dosing pH UP & DOWN, dan Heater), algoritma Logika Fuzzy Sugeno 18 Aturan, proteksi mati listrik EEPROM, serta telemetri Antares IoT dan aplikasi Android.',
      problem:
        'Pemilik ikan hias sering kesulitan memantau parameter vital air (pH, suhu, dan kekeruhan) secara terus-menerus. Penggantian air, pemberian cairan penstabil pH, dan pemanasan manual sering kali tidak terukur, berisiko tinggi menyebabkan lonjakan pH (overdosis kimia) atau stres dan kematian pada ikan.',
      solution:
        'Merancang ekosistem hardware kontroler mandiri berbasis ESP32 dan box akrilik terpasang langsung di akuarium. Sistem membaca 3 sensor secara berkala, memproses data dengan inferensi Logika Fuzzy Sugeno 18 aturan untuk menentukan durasi kerja tepat masing-masing aktuator, menampilkan status real-time di OLED SSD1306, mengamankan priming cairan melalui memori EEPROM (mencegah overdosis saat mati listrik), serta menyinkronkan data evaluasi ke cloud Antares dan aplikasi Android.',
      howItWorksSteps: [
        'Booting, Loading & Priming Pompa (EEPROM Safeguard): Saat dinyalakan, ESP32 menampilkan progress bar di OLED. Fungsi priming mengkalibrasi selang pompa peristaltik pH UP (5.05 detik) dan pH DOWN (5.65 detik). Jika terdeteksi reboot pasca mati listrik via marker 0xAB pada EEPROM addr 33, priming otomatis dilewati (Skip Priming) agar tidak terjadi overdosis bahan kimia ke dalam akuarium.',
        'Akuisisi 3 Sensor Kualitas Air: Sensor DS18B20 (suhu Celsius via OneWire GPIO 32), sensor pH DFRobot (ADC 12-bit GPIO 35 terkompensasi suhu), dan sensor kekeruhan air Turbidity (NTU terkalibrasi voltase GPIO 34) dibaca secara berkala.',
        'Inferensi Logika Fuzzy Sugeno (18 Rules): Nilai crisp dikonversi menjadi derajat keanggotaan kurva trapesium & segitiga (Suhu: Dingin/Normal/Panas; pH: Asam/Netral/Basa; Kekeruhan: Tidak Keruh/Keruh). Dievaluasi menggunakan 18 Rule Base dengan defuzzifikasi Weighted Average untuk menghasilkan durasi aktif aktuator (menit untuk air & heater, detik untuk pompa pH UP/DOWN).',
        'Eksekusi 4 Aktuator & Display OLED (128x64): Firmware menggerakkan 4 relay secara independen: Pompa Penguras/Filter Air (GPIO 17), Pompa Dosing pH UP (GPIO 16), Pompa Dosing pH DOWN (GPIO 4), dan Heater (GPIO 2). Layar OLED menampilkan telemetri 3 kotak sensor serta baris status aktif (mis. WTR-UP-HEAT).',
        'Pelaporan Cloud Antares & Dashboard Android: Selesai aktuasi, durasi target vs durasi riil (Real Durasi) dikirimkan ke platform Antares IoT melalui AntaresESPHTTP untuk dicatat secara historis dan dipantau live pada aplikasi mobile Android berbasis Kotlin.',
      ],
      workflowDiagram: '/projects/aquasee/workflow.svg',
      assetsFolder: '/public/projects/aquasee/',
      coverImage: '/projects/aquasee/aquarium-real.jpg',
      assets: [
        {
          title: 'Implementasi Fisik Hardware & Akuarium AQUASEE (Real Device Setup)',
          src: '/projects/aquasee/aquarium-real.jpg',
          caption: 'Foto instalasi nyata sistem AQUASEE pada akuarium: box kontroler ESP32 di sisi kaca, layar OLED menyala, sensor suhu & pH, pompa peristaltik dosing, dan heater.',
          type: 'hardware',
        },
        {
          title: 'Visualisasi 4 State Layar OLED SSD1306 (128x64 Telemetry)',
          src: '/projects/aquasee/oled-states.svg',
          caption: 'Tampilan grafis antarmuka OLED hasil render firmware C++ (Org_01 font): Monitoring Sensor (pH, TEMP, NTU), Status Aktuasi Aktif (WTR-UP-HEAT), Priming Pompa Dosing, dan Proteksi EEPROM Skip Priming.',
          type: 'screenshot',
        },
        {
          title: 'Antarmuka Aplikasi Android: Tab Overview & Status Aktuator Real-Time',
          src: '/projects/aquasee/android-overview.jpg',
          caption: 'Tangkapan layar nyata aplikasi Android Kotlin: Kartu sensor pH Level (7,31 Netral), Kekeruhan (0,0 Jernih), serta status durasi aktif 4 aktuator (Pompa pH Up/Down 0,00s, Pompa Air 3.0 Menit, dan Heater 0m 0s).',
          type: 'screenshot',
        },
        {
          title: 'Antarmuka Aplikasi Android: Tab Grafik Parameter Air (1415 Data Antares)',
          src: '/projects/aquasee/android-chart.jpg',
          caption: 'Tangkapan layar nyata visualisasi grafik garis interaktif parameter pH dan NTU dari 1415 data historis telemetri yang tersinkronisasi dari Antares IoT Cloud beserta fitur Download Data.',
          type: 'screenshot',
        },
        {
          title: 'Mockup Dual-Phone Showcase Aplikasi Android (Overview & Grafik Telemetri)',
          src: '/projects/aquasee/mobile-dashboard.svg',
          caption: 'Visualisasi mockup dual-phone resolusi tinggi menampilkan kedua tab utama aplikasi Android Kotlin: Tab Overview status aktuator dan Tab Grafik parameter air.',
          type: 'screenshot',
        },
        {
          title: 'Diagram Alur Cara Kerja & Arsitektur Fuzzy Sugeno Sistem',
          src: '/projects/aquasee/workflow.svg',
          caption: 'Alur lengkap dari pembacaan 3 sensor air -> perhitungan Fuzzy Sugeno 18 aturan -> eksekusi 4 relay -> telemetri Antares -> aplikasi Android.',
          type: 'diagram',
        },
        {
          title: 'Ikhtisar Desain Sistem AQUASEE',
          src: '/projects/aquasee/cover.svg',
          caption: 'Integrasi modul perangkat keras akuarium, algoritma Fuzzy Sugeno di ESP32, dan aplikasi Android Kotlin.',
          type: 'hardware',
        },
      ],
      metrics: [
        {
          label: 'Metode Pengujian Akurasi',
          value: 'Uji MAPE < 2%',
          detail: 'Membandingkan perhitungan durasi aktuator pada ESP32 dengan perhitungan manual/MATLAB dengan tingkat presisi tinggi.',
        },
        {
          label: 'Multi-Aktuator & Proteksi',
          value: '4 Aktuator + EEPROM Safety',
          detail: 'Pompa kuras/isi air, pompa peristaltik pH Up, pompa pH Down, heater, dan proteksi anti overdosis pasca mati listrik.',
        },
        {
          label: 'Platform & Display',
          value: 'OLED SSD1306 + Antares IoT',
          detail: 'Pemantauan visual langsung pada perangkat melalui layar OLED 128x64 dan pemantauan jarak jauh via smartphone Android.',
        },
      ],
      tags: [
        'ESP32',
        'C++ ARDUINO',
        'FUZZY SUGENO',
        'OLED SSD1306',
        'EEPROM SAFEGUARD',
        'ANTARES IOT',
        'ANDROID KOTLIN',
        'MAPE EVALUATION',
      ],
      links: [
        {
          label: 'GitHub Profile',
          url: 'https://github.com/MaulanaASetiawan',
          external: true,
        },
      ],
    },
    {
      slug: 'duckdock',
      icon: '🦆',
      title: 'DUCKDOCK',
      subtitle: 'ESP32 BLE Stream Deck & Dynamic On-Device Macro Pad (OLED SSD1306 & 10 Buttons)',
      period: 'Proyek Hardware & Embedded Systems (BLE HID + NVS Flash)',
      role: 'Embedded Hardware Designer & ESP32 C++ Firmware Developer',
      shortDesc:
        'Perangkat kontroler makro nirkabel (Bluetooth Low Energy HID) ala Stream Deck berbasis ESP32, layar OLED SSD1306 (128x64), dan 10 tombol fisik (6 slot makro + 4 tombol navigasi/media). Dilengkapi fitur On-Device Dynamic Remapping untuk memilih 11 fitur makro langsung dari layar OLED dan menyimpannya secara permanen di NVS Flash.',
      problem:
        'Macro pad DIY pada umumnya memiliki pemetaan tombol statis (hardcoded) yang mengharuskan pengguna membuka Arduino IDE, mengubah kode program, dan melakukan upload ulang setiap kali ingin mengganti fungsi shortcut tombol, serta sering kehilangan konfigurasi saat perangkat dimatikan.',
      solution:
        'Merancang DuckDock berbasis ESP32 dengan antarmuka 5-State Menu di layar OLED SSD1306 (I2C) dan penyimpanan non-volatile Preferences.h (NVS Flash). Pengguna dapat langsung memilih dari 11 database fitur makro (seperti Auto Audio Output Switcher Monitor/IEM, Ghost F13 OBS, Nvidia ShadowPlay Record, Restart VGA, Toggle HDR, dll.), memetakannya ke slot tombol mana pun langsung dari layar OLED tanpa coding ulang, serta mengontrol volume & musik melalui koneksi Bluetooth HID ("StreamDock ESP32").',
      howItWorksSteps: [
        'Inisialisasi Hardware & NVS Flash (muatKonfigurasi): Saat menyala, ESP32 menampilkan layar "SYSTEM BOOTING" di OLED SSD1306 (SDA: GPIO 21, SCL: GPIO 22, 0x3C), memuat pemetaan 6 slot tombol terakhir dari memori NVS (Preferences namespace "streamdock"), dan mengaktifkan layanan Bluetooth HID ("StreamDock ESP32").',
        'State 0 — Dashboard & Direct Media Control: Layar OLED menampilkan grid 3x2 berisi kode 3 huruf (SND, PIC, REC, TSK, MIC, F13, dll.) beserta ikon status Bluetooth. Di layar ini, tombol shortcut mengeksekusi makro, sedangkan tombol Up/Down/Enter berfungsi langsung sebagai Volume Up (+), Volume Down (-), dan Play/Pause.',
        'State 1 s/d 3 — On-Device Dynamic Remapping: Menekan btnMenu (GPIO 4) membuka Menu Utama ("1. Ubah Shortcut", "2. Music Player", "3. Reset Default"). Pengguna memilih 1 dari 11 fitur makro di State 2, lalu memilih target Slot (1-6) di State 3 dan menyimpannya secara permanen ke NVS Flash.',
        'State 4 — Dedicated Music Player: Menyediakan menu pemutar media khusus di layar OLED untuk kendali Play/Pause, Next Track >>, << Prev Track, dan Mute Audio.',
        'Eksekusi 11 Fitur & Pop-up Feedback (showFeedback): Setiap aksi mengirimkan kombinasi keystroke BLE HID (termasuk makro sekuensial otomatis Win+Ctrl+V untuk berganti output suara Monitor vs IEM) dan memunculkan overlay pop-up konfirmasi di tengah layar OLED selama 700ms.',
      ],
      workflowDiagram: '/projects/duckdock/oled-states.svg',
      assetsFolder: '/public/projects/duckdock/',
      coverImage: '/projects/duckdock/oled-states.svg',
      assets: [
        {
          title: 'Tampilan 5 State Layar OLED SSD1306 (128x64) & Pop-up Feedback',
          src: '/projects/duckdock/oled-states.svg',
          caption: 'Visualisasi presisi seluruh state layar OLED: Dashboard Grid 3x2, Menu Utama, Pilih Fitur (1-11), Pilih Slot (1-6), Music Player, dan Pop-up Feedback.',
          type: 'screenshot',
        },
        {
          title: '11 Fitur Makro BLE HID & Tampilan Pop-up OLED (showFeedback)',
          src: '/projects/duckdock/oled-features.svg',
          caption: 'Daftar lengkap 11 fitur: Audio Toggle (MON/IEM), Screenshot, Nvidia Record, Task Manager, Mute Mic, Ghost F13 (OBS), Toggle HDR, Focus Mode, Restart VGA, Next/Prev Track.',
          type: 'diagram',
        },
        {
          title: 'Skematik Pinout Hardware ESP32, OLED SSD1306 & 10 Tombol',
          src: '/projects/duckdock/hardware-pinout.svg',
          caption: 'Pemetaan pin GPIO ESP32 untuk 6 tombol slot makro (GPIO 32, 33, 25, 26, 27, 14), 4 tombol navigasi/media (GPIO 4, 5, 18, 19), dan I2C OLED (GPIO 21 & 22).',
          type: 'hardware',
        },
        {
          title: 'Official Logo & Identitas Visual DuckDock',
          src: '/projects/duckdock/logo.svg',
          caption: 'Logo resmi proyek DuckDock yang memadukan maskot Cyber-Duck dengan modul ESP32, layar OLED SSD1306, dan tombol makro.',
          type: 'hardware',
        },
      ],
      metrics: [
        {
          label: 'Database Fitur & Remapping',
          value: '11 Fitur • 6 Slot Dinamis',
          detail: 'Dapat diubah langsung dari menu layar OLED kapan saja dan tersimpan permanen di NVS Flash (Preferences.h).',
        },
        {
          label: 'Antarmuka & Umpan Balik',
          value: '5 OLED States + Pop-up',
          detail: 'Layar OLED 128x64 menampilkan status Bluetooth real-time, grid 3x2, menu scrollable, dan pop-up aksi 700ms.',
        },
        {
          label: 'Konektivitas & Input',
          value: 'BLE HID + 10 Buttons',
          detail: 'Terhubung tanpa kabel sebagai Bluetooth Keyboard/Media Controller dengan software debouncing 30ms.',
        },
      ],
      tags: [
        'ESP32',
        'C++ / ARDUINO',
        'BLE HID KEYBOARD',
        'OLED SSD1306',
        'NVS PREFERENCES',
        '10 PUSH BUTTONS',
        'STREAM DECK',
      ],
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/MaulanaASetiawan/DuckDock',
          external: true,
        },
      ],
    },
    {
      slug: 'pdfku',
      icon: '📑',
      title: 'PDFKu',
      subtitle: 'Web-Based Hybrid PDF Processing Suite (Local Browser & Cloud API)',
      period: 'Proyek Independen • Full-Stack Web & Cloud Deployment',
      role: 'Full-Stack Developer (Frontend Vite/JS & Backend Python/Express Docker)',
      shortDesc:
        'Aplikasi web pengolah dokumen PDF dengan arsitektur hybrid: fitur Merge & susun halaman diproses 100% lokal di browser (pdf-lib & PDF.js), sedangkan konversi PDF ke DOCX dan kompresi tingkat lanjut dijalankan melalui microservice Python ber-Docker di HuggingFace Spaces.',
      problem:
        'Banyak layanan PDF online mengharuskan pengguna mengunggah dokumen sensitif ke server bahkan untuk operasi sederhana seperti menggabungkan file (merge), sementara operasi berat seperti konversi PDF ke Word sering merusak tata letak jika hanya mengandalkan browser.',
      solution:
        'Merancang arsitektur hybrid pada PDFKu: operasi penggabungan dan pratinjau halaman dieksekusi langsung di memori browser pengguna menggunakan PDF-lib dan PDF.js (tanpa upload server), sedangkan konversi PDF-ke-DOCX dan kompresi Ghostscript ditangani oleh backend Python/Express yang terisolasi di dalam container Docker pada HuggingFace Spaces dengan penghapusan file otomatis.',
      howItWorksSteps: [
        'Pemilihan Mode Operasi: Saat pengguna memilih fitur di antarmuka Vite, aplikasi menentukan apakah tugas dapat diselesaikan di sisi klien (Client-Side) atau membutuhkan pemrosesan Cloud API.',
        'Jalur Lokal (Merge & Pratinjau): File dibaca sebagai ArrayBuffer di browser, dirender per halaman oleh PDF.js, dan digabungkan langsung oleh PDF-lib tanpa keluar dari perangkat pengguna.',
        'Jalur Cloud (Konversi PDF ke DOCX & Kompresi): File dikirim melalui REST API (Express.js & Multer) menuju container Docker di HuggingFace Spaces.',
        'Eksekusi Engine Python: Backend menjalankan pdf2docx, PyMuPDF, atau Ghostscript untuk menghasilkan dokumen dengan tata letak rapi dan ukuran optimal.',
        'Unduh Instan & Auto-Cleanup: File hasil konversi dikirim balik ke browser pengguna dan file sementara di server langsung dihapus demi menjaga privasi.',
      ],
      workflowDiagram: '/projects/pdfku/workflow.svg',
      assetsFolder: '/public/projects/pdfku/',
      coverImage: '/projects/pdfku/cover.svg',
      assets: [
        {
          title: 'Fitur Utama PDFKu',
          src: '/projects/pdfku/cover.svg',
          caption: 'Tiga pilar utama PDFKu: Merge/Split lokal di browser, Kompresi Ghostscript, dan Konversi PDF ke DOCX.',
          type: 'screenshot',
        },
        {
          title: 'Diagram Arsitektur Hybrid PDFKu',
          src: '/projects/pdfku/workflow.svg',
          caption: 'Pembagian beban kerja antara Client-Side (PDF-lib/PDF.js) dan Cloud Container (Python/Docker di HuggingFace Spaces).',
          type: 'diagram',
        },
      ],
      metrics: [
        {
          label: 'Privasi & Kecepatan Merge',
          value: '100% Client-Side',
          detail: 'Operasi penggabungan PDF berjalan langsung di memori browser tanpa konsumsi bandwidth upload.',
        },
        {
          label: 'Infrastruktur Backend',
          value: 'Docker + HF Spaces',
          detail: 'Layanan konversi Python/Ghostscript dikemas dalam Docker container dan terhubung ke frontend Vercel.',
        },
        {
          label: 'Status Produksi',
          value: 'Live (200 OK)',
          detail: 'Dapat diakses dan digunakan langsung melalui https://pdf-ku.vercel.app.',
        },
      ],
      tags: [
        'Vite',
        'PDF-lib',
        'PDF.js',
        'Express.js',
        'Multer',
        'pdf2docx',
        'PyMuPDF',
        'Ghostscript',
        'Docker',
        'HuggingFace Spaces',
      ],
      links: [
        {
          label: 'Website',
          url: 'https://pdf-ku.vercel.app',
          external: true,
        },
        {
          label: 'GitHub',
          url: 'https://github.com/MaulanaASetiawan/PDFKu',
          external: true,
        },
      ],
    },
    {
      slug: 'mental-health-ml',
      icon: '🧠',
      title: 'MENTAL HEALTH TWITTER PREDICTION',
      subtitle: 'End-to-End Machine Learning & MLOps Pipeline dengan TFX',
      period: 'Proyek Machine Learning Operations (MLOps)',
      role: 'Machine Learning & MLOps Engineer',
      shortDesc:
        'Pipeline Machine Learning end-to-end menggunakan TensorFlow Extended (TFX) untuk mendeteksi indikasi depresi dari teks cuitan Twitter, lengkap dengan validasi data otomatis, deployment Docker (TF Serving), serta monitoring Prometheus dan Grafana.',
      problem:
        'Model NLP yang hanya dilatih di notebook sering mengalami kendala saat dibawa ke produksi akibat ketidakkonsistenan preprocessing teks (training-serving skew) serta tidak adanya pemantauan performa dan kesehatan endpoint secara real-time.',
      solution:
        'Membangun pipeline produksi otomatis menggunakan TensorFlow Extended (TFX) mulai dari Data Ingestion, Validasi Skema, Transformasi NLP yang menyatu dengan grafik model, Tuning & Training, Evaluasi kelayakan dengan TFMA, hingga deployment ke TensorFlow Serving di dalam Docker yang dipantau langsung oleh Prometheus dan Grafana.',
      howItWorksSteps: [
        'Data Ingestion & Validation: Komponen ExampleGen, StatisticsGen, SchemaGen, dan ExampleValidator memeriksa distribusi dataset Twitter dari Kaggle dan mendeteksi anomali data.',
        'Feature Engineering (TFX Transform): Melakukan pembersihan teks, tokenisasi, dan sekuensing yang diekspor sebagai grafik TensorFlow sehingga proses saat inferensi identik dengan saat training.',
        'Hyperparameter Tuning & Training: Komponen Tuner dan Trainer melatih arsitektur jaringan saraf tiruan untuk klasifikasi biner indikasi depresi.',
        'Model Evaluation & Conditional Push: Komponen Evaluator (TFMA) menguji metrik AUC dan akurasi terhadap ambang batas; Pusher hanya merilis model jika lolos validasi.',
        'Containerized Serving & Monitoring: Model disajikan melalui TensorFlow Serving di Docker, sementara Prometheus mengambil metrik request/latensi untuk divisualisasikan pada dashboard Grafana.',
      ],
      workflowDiagram: '/projects/mental-health-ml/workflow.svg',
      assetsFolder: '/public/projects/mental-health-ml/',
      coverImage: '/projects/mental-health-ml/cover.svg',
      assets: [
        {
          title: 'Ikhtisar Pipeline TFX & Monitoring',
          src: '/projects/mental-health-ml/cover.svg',
          caption: 'Komponen utama siklus hidup MLOps dari pelatihan model hingga pemantauan di Grafana.',
          type: 'screenshot',
        },
        {
          title: 'Diagram Alur Kerja Pipeline TFX',
          src: '/projects/mental-health-ml/workflow.svg',
          caption: 'Tahapan otomatis dari ExampleGen hingga conditional deployment dan observability.',
          type: 'diagram',
        },
      ],
      metrics: [
        {
          label: 'Orkestrasi Pipeline',
          value: 'Full TFX Lifecycle',
          detail: 'Mencakup 8+ komponen standar industri (ExampleGen hingga Pusher) yang mencegah training-serving skew.',
        },
        {
          label: 'Observability',
          value: 'Prometheus + Grafana',
          detail: 'Pemantauan metrik kesehatan container, jumlah request inferensi, dan latensi prediksi secara real-time.',
        },
        {
          label: 'Deployment',
          value: 'Docker TF-Serving',
          detail: 'Siap dijalankan lintas lingkungan server melalui container Docker yang terstandarisasi.',
        },
      ],
      tags: ['Python', 'TensorFlow', 'TFX', 'Docker', 'Prometheus', 'Grafana'],
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/MaulanaASetiawan/Mental-Health-Twitter-Model-Prediction',
          external: true,
        },
      ],
    },
  ] as ProjectItem[],
};
