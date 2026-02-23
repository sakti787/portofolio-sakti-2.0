export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  sourceUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "event-h",
    title: "Event-H",
    description: "Website company profile untuk event organizer profesional di Indonesia, menonjolkan layanan corporate/MICE, portofolio, testimoni, proses kerja, dan CTA Request Proposal/WhatsApp.",
    image: "/projects/screenshots/website-event-h.png", // Ganti dengan path screenshot Event-H Anda
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Sanity", "Framer Motion"],
    liveUrl: "https://event-h-two.vercel.app/", // Ganti dengan URL live Anda
    sourceUrl: "https://github.com/sakti787/event-h", // Ganti dengan URL repository GitHub Anda
    featured: true
  },
  {
    id: "muchu-petshop",
    title: "Muchu PetShop",
    description: "Website statis bertema calm & pet-friendly untuk Muchu PetShop di Wonosobo. Menampilkan profil toko, jam operasional, kategori produk, testimoni pelanggan, serta lokasi presisi dengan Google Maps embed dan tombol cepat WhatsApp/Telepon/Instagram.",
    image: "/projects/screenshots/website-petshop.png", // Ganti dengan path screenshot Muchu PetShop Anda
    technologies: ["Node.js", "Vite", "HTML", "CSS", "JavaScript"], // Sesuaikan jika Anda pakai framework lain
    liveUrl: "https://pet-shop-static.vercel.app/", // Ganti dengan URL live Anda
    sourceUrl: "https://github.com/sakti787/pet-shop-static", // Ganti dengan URL repository GitHub Anda
    featured: true
  },
  {
    id: "helpdesk-realtime",
    title: "Helpdesk Realtime (Ticketing + Chat)",
    description:
      "Platform helpdesk fullstack dengan alur kerja tiket dan obrolan waktu nyata untuk mengelola dukungan pelanggan. Termasuk akses berbasis peran (Admin/Agen/Pelanggan), antrian agen, alur status tiket, dan pengiriman pesan berbasis WebSocket.",
    image: "/projects/screenshots/website-helpdesk.png", // Opsional: taruh screenshot di public/projects/screenshots/
    technologies: ["Laravel", "PHP", "Inertia.js", "Vue 3", "Naive UI", "MySQL", "WebSockets", "REST API"],
    sourceUrl: "https://github.com/sakti787/helpdesk-realtime-laravel",
    featured: true
  },
  {
    id: "uangsakti 2.0",
    title: "uangsakti 2.0",
    description: "Aplikasi pelacak keuangan personal full-stack yang dirancang untuk audiens muda, menampilkan UI modern dengan animasi (glassmorphism), visualisasi data real-time, dan backend aman yang di-hosting secara mandiri (self-hosted) menggunakan virtualisasi container.",
    image: "/projects/screenshots/website-uangsakti2.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Framer Motion",
      "Recharts",
      "Zustand",
      "Supabase",
      "PostgreSQL",
      "Proxmox VE",
      "Cloudflare Tunnel",
      "PM2"
    ],
    liveUrl: "https://uangsakti.my.id",
    sourceUrl: "https://github.com/sakti787/personal-finance-2.0",
    featured: true
  },
  {
    id: "airqu",
    title: "Airqu",
    description: "Aplikasi web untuk memantau kualitas udara secara real-time, menyediakan data polutan dan indeks kualitas udara (AQI) di berbagai lokasi.",
    image: "/projects/screenshots/website-airqu.png", // Ganti dengan path screenshot Airqu Anda
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Leaflet.js"], // Sesuaikan teknologinya
    liveUrl: "https://airqu.vercel.app/", // Ganti dengan URL live Airqu
    sourceUrl: "https://github.com/sakti787/AirQu", // Ganti dengan URL repository GitHub Airqu
    featured: true
  },
  {
    id: "uangsakti",
    title: "uangsakti",
    description: "Aplikasi web manajemen keuangan personal yang memungkinkan pengguna untuk melacak income, expense, dan merencanakan budget dengan interface yang intuitif.",
    image: "/projects/screenshots/website-uangsakti.png", // Menggunakan gambar yang ada
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Chart.js"],
    liveUrl: "https://finance-sakti.vercel.app/",
    sourceUrl: "https://github.com/sakti787/personal-finance",
    featured: true
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "Website portfolio personal yang dibangun dengan Next.js dan Tailwind CSS, menampilkan proyek dan pengalaman dengan desain yang clean dan responsif.",
    image: "/projects/screenshots/website-portfolio.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://portofolio-sakti.vercel.app/",
    sourceUrl: "https://github.com/sakti787/portofolio-sakti",
    featured: false
  },
];
