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
      slug: 'aquasee',
      icon: '🐠',
      title: 'AQUASEE',
      subtitle: 'Sistem Kontrol Kualitas Air Akuarium Otomatis (Fuzzy Sugeno & Android)',
      period: 'Tugas Akhir S1 • Solo End-to-End Developer',
      role: 'Perancang Rangkaian IoT, Firmware Engineer (C++), Fuzzy Modeler & Android Developer (Kotlin)',
      shortDesc:
        'Sistem IoT otomatis berbasis ESP32 dan metode Fuzzy Sugeno untuk menghitung durasi aktif aktuator (pompa & heater) guna menjaga suhu dan pH air akuarium tetap optimal, terintegrasi dengan Antares Cloud dan aplikasi Android Kotlin.',
      problem:
        'Pemilik ikan hias air tawar harus memeriksa suhu dan pH air secara manual serta menyalakan pompa penguras/pengisi atau pemanas dengan perkiraan waktu kasar, yang berisiko membuat kualitas air tidak stabil dan memicu stres pada ikan.',
      solution:
        'Membangun perangkat IoT berbasis ESP32 yang membaca sensor suhu dan pH secara berkala, memprosesnya menggunakan metode logika Fuzzy Sugeno di dalam mikrokontroler untuk menentukan durasi aktif relay aktuator secara presisi (dalam detik), lalu mengirim data telemetri ke platform Antares IoT untuk dipantau real-time melalui aplikasi Android (Kotlin).',
      howItWorksSteps: [
        'Akuisisi Sensor: Sensor suhu air dan sensor pH membaca parameter fisik air di dalam akuarium secara real-time lalu dikirim ke ADC mikrokontroler ESP32.',
        'Fuzzifikasi & Evaluasi Rule: Firmware C++ pada ESP32 mengubah nilai crisp suhu & pH menjadi derajat keanggotaan fuzzy, kemudian mengevaluasi basis aturan (Rule Base) kondisi air.',
        'Defuzzifikasi Fuzzy Sugeno: Menggunakan metode Weighted Average (Rata-rata Terbobot) untuk menghasilkan output tegas berupa durasi aktif aktuator (detik).',
        'Eksekusi Aktuator: Relay mengaktifkan pompa air / pemanas tepat selama durasi hasil perhitungan Fuzzy Sugeno agar parameter kembali ke rentang normal.',
        'Sinkronisasi Cloud & Aplikasi Mobile: Data sensor, status aktuator, dan hasil perhitungan dikirim ke Antares IoT Platform melalui protokol HTTP/MQTT dan ditampilkan pada aplikasi Android berbasis Kotlin.',
      ],
      workflowDiagram: '/projects/aquasee/workflow.svg',
      assetsFolder: '/public/projects/aquasee/',
      coverImage: '/projects/aquasee/cover.svg',
      assets: [
        {
          title: 'Ikhtisar Sistem AQUASEE',
          src: '/projects/aquasee/cover.svg',
          caption: 'Integrasi perangkat keras akuarium, algoritma Fuzzy Sugeno di ESP32, dan aplikasi Android Kotlin.',
          type: 'hardware',
        },
        {
          title: 'Diagram Cara Kerja & Arsitektur Sistem',
          src: '/projects/aquasee/workflow.svg',
          caption: 'Alur lengkap dari pembacaan sensor air -> perhitungan Fuzzy Sugeno -> eksekusi relay -> telemetri Antares -> aplikasi Android.',
          type: 'diagram',
        },
        {
          title: 'Antarmuka Monitoring Android (Kotlin) & Telemetri',
          src: '/projects/aquasee/mobile-dashboard.svg',
          caption: 'Tampilan pemantauan parameter pH, suhu air, dan durasi aktif aktuator secara real-time melalui Antares Cloud.',
          type: 'screenshot',
        },
      ],
      metrics: [
        {
          label: 'Metode Pengujian Akurasi',
          value: 'Uji MAPE',
          detail: 'Membandingkan perhitungan durasi aktuator pada ESP32 dengan perhitungan manual/MATLAB dengan tingkat error sangat rendah (< 2%).',
        },
        {
          label: 'Platform & Konektivitas',
          value: 'ESP32 + Antares + Kotlin',
          detail: 'Pemantauan jarak jauh secara real-time melalui smartphone Android dengan sinkronisasi cloud Antares.',
        },
        {
          label: 'Cakupan Peran',
          value: '100% End-to-End',
          detail: 'Mulai dari perancangan skematik sensor/relay, pemrograman C++ Fuzzy Sugeno, hingga pembuatan aplikasi Android.',
        },
      ],
      tags: ['AUTOMATION', 'ESP32', 'C++', 'FUZZY SUGENO', 'MAPE', 'ANTARES', 'ANDROID', 'KOTLIN'],
      links: [
        {
          label: 'GitHub Profile',
          url: 'https://github.com/MaulanaASetiawan',
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
      slug: 'broiler-counter',
      icon: '🐔',
      title: 'BROILER COUNTER (YOLOv8s)',
      subtitle: 'Aplikasi Android Penghitung Jumlah Ayam Broiler Otomatis (Jetpack Compose & MVVM)',
      period: 'Proyek Android & Computer Vision • On-Device AI',
      role: 'Android Developer (Kotlin, Jetpack Compose, MVVM) & Computer Vision Engineer (YOLOv8s)',
      shortDesc:
        'Aplikasi mobile Android modern berbasis Jetpack Compose dan arsitektur MVVM yang mengintegrasikan model deteksi objek YOLOv8-Small (YOLOv8s) untuk mendeteksi dan menghitung jumlah ayam broiler secara otomatis dari citra kandang.',
      problem:
        'Peternak ayam broiler kesulitan menghitung jumlah populasi ayam di dalam kandang secara manual karena jumlahnya yang banyak dan pergerakan ayam yang aktif, sehingga rentan terjadi kesalahan hitung (human error) dan memakan waktu lama.',
      solution:
        'Mengembangkan aplikasi Android menggunakan Jetpack Compose dengan arsitektur bersih MVVM yang menjalankan model deteksi objek YOLOv8-small (YOLOv8s). Aplikasi mendeteksi setiap ekor ayam pada gambar/frame kamera, menggambar bounding box beserta nilai confidence, dan menampilkan total populasi ayam secara instan.',
      howItWorksSteps: [
        'Pengambilan Citra Kandang: Pengguna mengambil foto area kandang menggunakan kamera smartphone atau memilih gambar dari galeri melalui antarmuka Jetpack Compose.',
        'Preprocessing Citra: Layer pemrosesan mengubah ukuran gambar dan menormalisasi piksel menjadi tensor input yang sesuai dengan dimensi model YOLOv8s.',
        'Inferensi Model YOLOv8-Small: Model YOLOv8s mengekstraksi fitur visual dan memprediksi koordinat bounding box beserta skor probabilitas untuk setiap ayam broiler.',
        'Post-Processing & Non-Maximum Suppression (NMS): Menyaring bounding box yang tumpang tindih agar setiap ekor ayam hanya dihitung tepat satu kali.',
        'Manajemen State MVVM & Render UI: ViewModel memperbarui UI State secara reaktif (StateFlow) untuk merender overlay kotak deteksi dan jumlah total ayam di layar Jetpack Compose.',
      ],
      workflowDiagram: '/projects/broiler-counter/workflow.svg',
      assetsFolder: '/public/projects/broiler-counter/',
      coverImage: '/projects/broiler-counter/cover.svg',
      assets: [
        {
          title: 'Ikhtisar Deteksi Ayam Broiler dengan YOLOv8s',
          src: '/projects/broiler-counter/cover.svg',
          caption: 'Visualisasi deteksi bounding box ayam broiler menggunakan model YOLOv8-small pada antarmuka Android Jetpack Compose.',
          type: 'screenshot',
        },
        {
          title: 'Diagram Alur Kerja (Jetpack Compose + MVVM + YOLOv8s)',
          src: '/projects/broiler-counter/workflow.svg',
          caption: 'Tahapan dari input citra kandang, inferensi YOLOv8s + NMS, pengelolaan state MVVM, hingga tampilan hasil hitung.',
          type: 'diagram',
        },
      ],
      metrics: [
        {
          label: 'Model Deteksi Objek',
          value: 'YOLOv8-Small',
          detail: 'Keseimbangan optimal antara akurasi deteksi ayam yang rapat dan kecepatan inferensi di perangkat mobile.',
        },
        {
          label: 'Arsitektur Aplikasi',
          value: 'MVVM + Compose',
          detail: 'Pemisahan bersih antara UI deklaratif Jetpack Compose, ViewModel state management, dan ML inference engine.',
        },
        {
          label: 'Dampak Lapangan',
          value: 'Hitung Cepat & Objektif',
          detail: 'Memangkas waktu perhitungan populasi ayam kandang dari hitungan manual menjadi beberapa detik.',
        },
      ],
      tags: ['KOTLIN', 'JETPACK COMPOSE', 'MVVM', 'YOLOv8s', 'COMPUTER VISION', 'ANDROID'],
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
    {
      slug: 'scribd-downloader',
      icon: '📚',
      title: 'SCRIBD BATCH DOWNLOADER',
      subtitle: 'Alat Otomatisasi Pemrosesan Antrean Dokumen & Kompilasi PDF',
      period: 'Proyek Otomatisasi Python',
      role: 'Python Automation Developer',
      shortDesc:
        'Aplikasi otomatisasi berbasis Python dan Selenium untuk memproses banyak tautan dokumen sekaligus (batch processing), menangani pemuatan halaman dinamis (lazy-loading), dan menyusunnya menjadi file PDF berkualitas tinggi menggunakan Pillow.',
      problem:
        'Mengumpulkan dan mengarsipkan banyak materi referensi dokumen satu per satu membutuhkan waktu lama karena halaman dimuat secara dinamis (lazy-load) saat digulir dan sering terhalang elemen antarmuka tambahan.',
      solution:
        'Mengembangkan utilitas batch berbasis Python yang menggabungkan Selenium WebDriver untuk mengotomatisasi pengguliran halaman hingga seluruh aset termuat, membersihkan tampilan secara terprogram, dan menggunakan pustaka Pillow (PIL) untuk menggabungkan seluruh halaman menjadi satu dokumen PDF yang bersih dan terurut.',
      howItWorksSteps: [
        'Input Antrean Batch: Pengguna memasukkan daftar tautan dokumen yang akan diproses secara berurutan.',
        'Otomatisasi Browser & Lazy-Load: Selenium membuka dokumen di browser headless, melakukan pengguliran bertahap untuk memastikan setiap halaman dirender sempurna.',
        'Pembersihan Elemen DOM: Script mengeksekusi manipulasi DOM/CSS untuk menyembunyikan toolbar, banner, dan elemen pengganggu di luar area halaman.',
        'Tangkapan Resolusi Tinggi & Kompilasi PDF: Setiap halaman diekstrak, dikonversi ke mode warna RGB menggunakan Pillow, lalu digabungkan menjadi file PDF tunggal.',
      ],
      workflowDiagram: '/projects/scribd-downloader/workflow.svg',
      assetsFolder: '/public/projects/scribd-downloader/',
      coverImage: '/projects/scribd-downloader/cover.svg',
      assets: [
        {
          title: 'Ikhtisar Sistem Batch Downloader',
          src: '/projects/scribd-downloader/cover.svg',
          caption: 'Otomatisasi pemrosesan antrean dokumen menggunakan Python, Selenium, dan Pillow.',
          type: 'screenshot',
        },
        {
          title: 'Diagram Cara Kerja Ekstraksi & Kompilasi PDF',
          src: '/projects/scribd-downloader/workflow.svg',
          caption: 'Alur dari antrean URL, rendering halaman dinamis dengan Selenium, hingga kompilasi PDF dengan Pillow.',
          type: 'diagram',
        },
      ],
      metrics: [
        {
          label: 'Mode Pemrosesan',
          value: 'Multi-URL Batch Queue',
          detail: 'Mendukung pemrosesan banyak dokumen sekaligus dalam satu kali eksekusi tanpa intervensi manual.',
        },
        {
          label: 'Kualitas Output',
          value: 'High-DPI Clean PDF',
          detail: 'Menghasilkan dokumen PDF yang bersih dari elemen overlay antarmuka web.',
        },
      ],
      tags: ['Python', 'Requests', 'Pillow', 'Selenium'],
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/MaulanaASetiawan/Scribd-Batch-Downloader',
          external: true,
        },
      ],
    },
  ] as ProjectItem[],
};
