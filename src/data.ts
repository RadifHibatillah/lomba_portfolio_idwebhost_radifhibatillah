import { Project, Achievement, TimelineEvent, LegacyMilestone, FAQItem } from './types';

export const PERSONAL_INFO = {
  name: 'Radif Hibatillah',
  title: 'Future Software Engineer & Leader',
  tagline: 'Beyond Portfolio, Build Your Legacy',
  heroSubtitle: 'Building Skills, Creating Impact, Leaving a Legacy.',
  extendedSubtitle: 'Saya adalah developer muda dan pemimpin visioner dari Kota Depok yang mendedikasikan diri untuk merancang masa depan teknologi digital. Menggabungkan kedisiplinan Tarung Derajat, kepemimpinan OSIS, dan ketelitian teknis metrologi.',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&h=500&q=80', // Premium clean corporate/student portrait mockup
  statusTags: [
    'Student Developer ⚡',
    'Future Software Engineer 🚀',
    'Tech Enthusiast 💻',
    'Certified Martial Artist 🥊'
  ],
  stats: [
    { value: '100%', label: 'Akademik Unggul', desc: 'Konsisten di jajaran nilai tertinggi' },
    { value: '2nd', label: 'Tarung Derajat', desc: 'Medali Perak Kejuaraan Kota Depok' },
    { value: '10+', label: 'Proyek & Eksperimen', desc: 'Desain UI, Web, & Automasi Python' },
    { value: '3+', label: 'Organisasi Kepemimpinan', desc: 'Wakil Ketua OSIS & Sekretaris Remaja Masjid' }
  ],
  aboutStory: 'Sebagai seorang siswa pengembang perangkat lunak, saya percaya bahwa baris kode yang kita tulis hari ini adalah fondasi peradaban digital hari esok. Kegemaran saya pada teknologi bermula dari rasa penasaran bagaimana solusi digital dapat menyederhanakan birokrasi dan administrasi masyarakat. Dengan latar belakang kepemimpinan aktif di lingkungan sekolah (OSIS) dan keagamaan (Remaja Masjid), serta didikan fisik mental Tarung Derajat, saya membawa pendekatan holistik: teknis yang tajam, kepemimpinan yang berempati, dan ketangguhan mental dalam memecahkan masalah kompleks.',
  careerGoal: 'Menjadi Software Engineer kelas dunia yang tidak hanya mahir menulis kode, tetapi juga melahirkan solusi digital yang mempermudah kehidupan jutaan orang serta memberdayakan masyarakat lokal.'
};

export const SKILLS = [
  { name: 'HTML5', level: 95, category: 'frontend', color: '#E34F26' },
  { name: 'CSS3 & Tailwind', level: 90, category: 'frontend', color: '#06B6D4' },
  { name: 'JavaScript (ES6+)', level: 85, category: 'frontend', color: '#F7DF1E' },
  { name: 'PHP & Laravel', level: 80, category: 'backend', color: '#777BB4' },
  { name: 'MySQL Database', level: 80, category: 'backend', color: '#4479A1' },
  { name: 'Python scripting', level: 85, category: 'backend', color: '#3776AB' },
  { name: 'UI/UX (Figma)', level: 88, category: 'design', color: '#F24E1E' },
  { name: 'Public Speaking', level: 90, category: 'nontech', color: '#10B981' },
  { name: 'Leadership & Org', level: 95, category: 'nontech', color: '#8B5CF6' }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 't1',
    year: '2025 - Sekarang',
    title: 'Wakil Ketua OSIS',
    subtitle: 'Kepemimpinan & Kolaborasi Organisasi Sekolah',
    description: 'Mengoordinasi 10 sekbid di lingkungan sekolah, merancang program kerja berorientasi digitalisasi administrasi OSIS, memimpin rapat mingguan, serta melatih kemampuan komunikasi publik dan resolusi konflik.',
    category: 'leadership',
    tags: ['Organisasi', 'Public Speaking', 'Manajemen Event']
  },
  {
    id: 't2',
    year: '2024 (Semester Ganjil)',
    title: 'Magang Teknis di UPTD Metrologi Legal',
    subtitle: 'Kota Depok, Jawa Barat',
    description: 'Bekerja langsung di bawah bimbingan penera ahli. Terlibat dalam pengujian kalibrasi Alat Ukur, Takar, Timbang, dan Perlengkapannya (UTTP). Membuat otomasi pendataan kalibrasi sederhana menggunakan Python untuk mempercepat pelaporan.',
    category: 'experience',
    tags: ['Python', 'Metrologi Legal', 'Quality Assurance']
  },
  {
    id: 't3',
    year: '2024',
    title: 'Juara 2 Tarung Derajat',
    subtitle: 'Tingkat Kota Depok (Kejuaraan Resmi)',
    description: 'Meraih medali perak dalam kompetisi seni bela diri asli Indonesia Tarung Derajat. Melatih disiplin ekstrem, refleks fisik, dan ketangguhan mental untuk tetap fokus di bawah tekanan intensif.',
    category: 'awards',
    tags: ['Disiplin', 'Ketangguhan Mental', 'Bela Diri']
  },
  {
    id: 't4',
    year: '2023 - Sekarang',
    title: 'Sekretaris Remaja Masjid',
    subtitle: 'Manajemen Data & Pengabdian Masyarakat',
    description: 'Mengelola database keanggotaan, membuat surat menyurat resmi, mendigitalisasi jadwal kegiatan bulanan masjid, serta menginisiasi pelatihan dasar MS Office bagi generasi muda sekitar.',
    category: 'leadership',
    tags: ['Administrasi', 'Sosial Keagamaan', 'Digital Litercay']
  },
  {
    id: 't5',
    year: '2023 - 2026',
    title: 'Akademik & Eksplorasi Perangkat Lunak',
    subtitle: 'Pencapaian Nilai Akademis & Pembelajaran Mandiri',
    description: 'Secara konsisten memperoleh nilai tertinggi di kelas untuk mata pelajaran sains dan komputer. Mempelajari secara otodidak arsitektur full-stack, OOP Python, dan struktur database relasional.',
    category: 'education',
    tags: ['Akademik', 'Python', 'Web Development']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Sistem Kalibrasi UTTP (Metrologi Digital)',
    description: 'Aplikasi berbasis web untuk otomasi kalkulasi ketidakpastian kalibrasi massa dan timbangan, terinspirasi langsung dari pengalaman magang di UPTD Metrologi Legal Kota Depok.',
    category: 'web',
    tags: ['PHP', 'MySQL', 'TailwindCSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#',
    githubUrl: '#',
    details: [
      'Menghitung otomatis nilai koreksi dan limit deviasi kalibrasi standard.',
      'Sistem administrasi penerimaan UTTP dari wajib tera.',
      'Dashboard laporan kinerja peneraan bulanan yang interaktif.'
    ],
    features: ['Auto Error Limit Check', 'Report PDF Exporter', 'Responsif Dashboard']
  },
  {
    id: 'p2',
    title: 'Smart Calibration Engine Python Script',
    description: 'Script CLI & GUI berbasis Python untuk otomatisasi membaca data log timbangan lab digital dan mengekspornya ke format standar pengujian tera secara instan.',
    category: 'python',
    tags: ['Python', 'OpenPyXL', 'Tkinter', 'Automation'],
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#',
    githubUrl: '#',
    details: [
      'Membaca file keluaran log timbangan serial berkabel USB/RS232.',
      'Mengolah deviasi standar dalam waktu milidetik secara statistik.',
      'Mengekspor data mentah langsung menjadi file Excel dengan format resmi UPTD.'
    ],
    features: ['Serial Port Reader', 'Auto Statistic Engine', 'Excel Generator']
  },
  {
    id: 'p3',
    title: 'Platform Digitalisasi Kompetisi Tarung Derajat',
    description: 'Konsep desain antarmuka (UI/UX) dan prototipe aplikasi sistem penilaian skor realtime juri untuk turnamen Tarung Derajat regional.',
    category: 'uiux',
    tags: ['Figma', 'UI/UX', 'Responsive Design', 'Framer Style'],
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#',
    githubUrl: '#',
    details: [
      'Riset kebutuhan user juri bela diri yang membutuhkan akurasi input dalam sepersekian detik.',
      'Tampilan antarmuka kontras tinggi (High-Contrast Style) ramah sentuhan tangan di tepi ring.',
      'Diagram alir user journey dari pendaftaran kontestan hingga visualisasi pemenang bagan.'
    ],
    features: ['Sub-Second Touch Target', 'Dynamic Bracket Visualizer', 'Accessibility Checked']
  },
  {
    id: 'p4',
    title: 'Remaja Masjid Digital Portal (RMDP)',
    description: 'Sistem manajemen organisasi masjid modern yang mencakup pencatatan kas inventaris, manajemen jadwal muadzin/imam, serta presensi kegiatan keagamaan remaja.',
    category: 'web',
    tags: ['JavaScript', 'TailwindCSS', 'Local Storage', 'Responsive'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#',
    githubUrl: '#',
    details: [
      'Pemberitahuan otomatis agenda kajian remaja masjid.',
      'Penyimpanan kas transparan berbasis client-side dengan visual grafik keuangan sederhana.',
      'Manajemen kartu anggota digital berbasis QR Code mockup.'
    ],
    features: ['Simulated QR Codes', 'Interactive Ledger Financials', 'Event Coordinator Flow']
  },
  {
    id: 'p5',
    title: 'E-Voting OSIS - Legacy Election Portal',
    description: 'Sistem pemungutan suara aman berbasis web untuk pemilihan Ketua & Wakil OSIS dengan visualisasi grafik suara interaktif.',
    category: 'web',
    tags: ['HTML5', 'TailwindCSS', 'ChartJS', 'VanillaJS'],
    image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#',
    githubUrl: '#',
    details: [
      'Pemilihan interaktif dengan proteksi token unik sekali pakai.',
      'Update hitung cepat suara masuk menggunakan animasi chart modern.',
      'Halaman visi misi kandidat interaktif dilengkapi file pidato audio.'
    ],
    features: ['Quick Vote Token Authentication', 'Real-time Chart Graphing', 'Premium Responsive Cards']
  },
  {
    id: 'p6',
    title: 'Python Public Speaking Pacing Tool',
    description: 'Program analisa tempo bicara berbasis Python untuk membantu pemimpin muda mengontrol kecepatan bicaranya lewat analisis file audio wav.',
    category: 'python',
    tags: ['Python', 'Wav Analyze', 'Speech Rhythm', 'Tkinter'],
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#',
    githubUrl: '#',
    details: [
      'Mengukur durasi jeda hening (silence) untuk menilai efektivitas intonasi.',
      'Sistem counter Word-Per-Minute (WPM) otomatis berbasis sampel data suara.',
      'Visualisasi gelombang suara (waveform) sederhana pasca-rekaman.'
    ],
    features: ['Pacing Estimator', 'Decibel Peak Indicator', 'GUI Control Panel']
  }
];

export const LEGACY_ROADMAP: LegacyMilestone[] = [
  {
    id: 'l1',
    targetYear: '2025 - 2027',
    phase: 'Fase I: Student Gold Standard & Technical Foundations',
    title: 'Penguasaan Algoritma & Kontribusi Lokal',
    description: 'Membangun dasar pemrograman yang kokoh sambil terus berkontribusi memimpin digitalisasi di lingkungan sekolah Depok. Menyelesaikan studi sekolah menengah dengan hasil nilai akademis di jajaran teratas nasional.',
    goals: [
      'Menguasai algoritma ds & oop secara mendalam',
      'Membuat 3 aplikasi web open-source untuk operasional administrasi sekolah gratis',
      'Mempertahankan IPK / Nilai Rapor di atas rata-rata tinggi'
    ],
    progress: 75,
    status: 'ongoing'
  },
  {
    id: 'l2',
    targetYear: '2027 - 2030',
    phase: 'Fase II: College Excellence & Professional Internship',
    title: 'Akademik Internasional & Kolaborasi Industri',
    description: 'Melanjutkan pendidikan tinggi di jurusan Teknik Informatika terbaik dan aktif dalam kegiatan riset laboratori. Menyelesaikan program magang industri di perusahaan teknologi unicorn nasional atau multinasional.',
    goals: [
      'Aktif sebagai asisten laboratorium komputer',
      'Memenangkan minimal 3 kompetisi hackathon nasional',
      'Magang di level profesional sebagai Software Engineer Intern'
    ],
    progress: 20,
    status: 'future'
  },
  {
    id: 'l3',
    targetYear: '2030 - 2033',
    phase: 'Fase III: Full-Stack Engineer & Ecosystem Architect',
    title: 'Membangun Solusi Skala Besar',
    description: 'Bekerja secara penuh sebagai Executive Software Engineer, mendesain arsitektur mikroservis, berkontribusi aktif dalam komunitas open-source global, dan membimbing komunitas junior di tanah air.',
    goals: [
      'Mendesain modul sistem yang melayani jutaan request aktif harian',
      'Menjadi pembicara di konferensi teknologi terkemuka',
      'Mengembangkan framework open-source terpercaya'
    ],
    progress: 0,
    status: 'future'
  },
  {
    id: 'l4',
    targetYear: '2034 - 2035 & Seterusnya',
    phase: 'Fase IV: The Legacy - Technology Founder for Public Good',
    title: 'Membangun Legacy untuk Dampak Sosial Berkelanjutan',
    description: 'Mendirikan venture solusi digital (Social Enterprise) yang merevolusi tata kelola administrasi publik dan efisiensi energi. Menciptakan dampak nyata yang menaikkan taraf ekonomi dan kemudahan hidup rakyat luas.',
    goals: [
      'Membangun sistem automasi pelaporan kepsek & dinas kota secara efisien',
      'Membina akademi coding gratis bagi anak yatim dan siswa prasejahtera di Depok',
      'Mewujudkan visi "Designing the Future" menjadi legacy berumur panjang'
    ],
    progress: 0,
    status: 'future'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Siapa itu Radif Hibatillah dan apa nilai uniknya?',
    answer: 'Saya adalah siswa pengembang perangkat lunak asal Kota Depok yang memadukan disiplin tangguh atlet Tarung Derajat (Juara 2 Depok), jiwa kepemimpinan dinamis wakil ketua OSIS, serta kecermatan teknis yang terasah selama magang di UPTD Metrologi Legal Kota Depok. Kombinasi kepemimpinan, disiplin tinggi, dan antusiasme teknologi inilah keunikan utama saya.'
  },
  {
    question: 'Bagaimana kontribusi Radif di bidang non-teknis membantu karirnya di tech?',
    answer: 'Kepemimpinan di OSIS dan Remaja Masjid sangat melatih kemampuan komunikasi (public speaking), kerja sama tim, serta empati sosial. Dalam dunia software engineering masa kini, kemampuan berkolaborasi dan memahami kebutuhan nyata pengguna (empati) sama berharganya dengan kemahiran menulis baris kode teknis.'
  },
  {
    question: 'Apa filosofi di balik tema website: "Beyond Portfolio, Build Your Legacy"?',
    answer: 'Bagi saya, portfolio hanyalah kumpulan cuplikan masa lalu. Sementara "Legacy" (Warisan) adalah arah tujuan masa depan, dampak apa yang ingin saya tinggalkan untuk masyarakat melalui teknologi. Website ini dirancang untuk menampilkan bahwa seluruh pencapaian saat ini adalah langkah pasti menuju visi masa depan 2035 yang berdampak nyata.'
  },
  {
    question: 'Mengapa memilih bela diri Tarung Derajat dan apa hubungannya dengan software development?',
    answer: 'Tarung Derajat mengajarkan filosofi "Aku Ramah Bukan Berarti Takut, Aku Tunduk Bukan Berarti Takluk". Bela diri ini melatih ketenangan pikiran saat menghadapi tekanan berat. Dalam menulis kode maupun mendesain sistem produksi besar, ketenangan di tengah tumpukan bug kritis adalah kunci keberhasilan penyelesaian.'
  }
];
