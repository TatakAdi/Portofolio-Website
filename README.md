# 🚀 Web Portofolio – Catatan Pengembangan Selanjutnya

Status saat ini: **MVP (Minimum Viable Product) sudah selesai** ✅

Web portofolio ini sudah memiliki fondasi yang stabil dan layak dipublikasikan.
Dokumen ini berisi catatan, ide, dan arah pengembangan fitur di masa depan yang
dapat dikerjakan secara bertahap setelah penyelesaian Tugas Akhir (TA).

---

## 🎯 Tujuan Pengembangan

- Menjadikan web portofolio lebih **informatif, interaktif, dan profesional**
- Memudahkan recruiter / reviewer memahami:
  - Skill
  - Pengalaman
  - Proyek yang pernah dikerjakan
- Menjadikan proyek ini sebagai **showcase teknis & playground eksperimen**

---

## 🧩 Lingkup MVP Saat Ini (Baseline)

Fitur yang sudah ada dan **tidak perlu diubah secara fundamental**:

- Website portofolio responsif (desktop & mobile)
- Halaman utama:
  - Home
  - About
  - Projects
  - Contact
- UI modern & bersih
- Data masih bersifat statis / lokal
- Siap dipublish dan dibagikan

> MVP ini adalah **fondasi utama** — semua pengembangan selanjutnya dibangun di
> atas ini.

---

## 🥇 PRIORITAS 1 – Paling Penting (High Impact, Low Risk)

Fitur di bawah ini **paling direkomendasikan untuk dikerjakan pertama**.

### 1. Manajemen Data Project yang Lebih Rapi

- Ubah data project menjadi terstruktur (JSON / CMS / database)
- Atribut project:
  - Judul
  - Deskripsi
  - Tech stack
  - Gambar / screenshot
  - Link demo & repository
- Tambahan:
  - Halaman detail project (`/projects/[slug]`)
  - Filter berdasarkan kategori / teknologi

📌 _Alasan:_ Ini adalah inti dari web portofolio.

---

### 2. Penyempurnaan Halaman About

- Timeline pengalaman:
  - Pendidikan
  - Studi independen
  - Internship / freelance
- Visualisasi skill:
  - Tech stack badges
  - Skill progress
- Showcase sertifikat:
  - Carousel / slider
  - Modal preview

📌 _Alasan:_ Recruiter biasanya buka halaman ini setelah Home.

---

### 3. Penyempurnaan UI & Animasi

- Animasi ringan per section
- Hover & micro-interaction
- Page transition sederhana

📌 _Alasan:_ Meningkatkan kesan profesional tanpa over-engineering.

---

## 🥈 PRIORITAS 2 – Interaksi & Kredibilitas

### 4. Contact Form yang Benar-Benar Berfungsi

- Validasi input
- Kirim email langsung ke owner
- Feedback sukses / error

Opsi teknologi:

- EmailJS
- Resend
- Custom API endpoint

---

### 5. Integrasi Profesional

- Link GitHub & LinkedIn yang lebih menonjol
- Download CV / Resume (PDF)
- (Opsional) Preview aktivitas GitHub

---

## 🥉 PRIORITAS 3 – Admin & Konten (Opsional)

> Fitur ini **tidak wajib**, hanya jika ingin lebih dinamis.

### 6. Admin Dashboard

- Login admin
- CRUD project
- Proteksi route

Opsi auth:

- Supabase Auth
- JWT
- Custom backend

---

### 7. Headless CMS (Alternatif Admin)

- Sanity / Contentful / Strapi
- Update konten tanpa edit kode

📌 _Lebih cocok jika ingin fokus ke konten, bukan backend._

---

## 📊 PRIORITAS 4 – SEO & Insight

### 8. Optimasi SEO

- Meta tag per halaman
- Open Graph & Twitter Card
- Sitemap & robots.txt
- Structured data (JSON-LD)

---

### 9. Analytics

- Tracking page view
- Tracking klik project
- Tracking submit contact

Opsi:

- Google Analytics
- Plausible
- Umami

---

## 🌍 PRIORITAS 5 – Nice to Have

### 10. Multi Bahasa

- Bahasa Indonesia & Inggris
- i18n routing
- Content translation

---

### 11. Blog / Writing Page

- Catatan teknis
- Pembelajaran TA
- Artikel pengembangan diri
- Markdown-based content

---

### 12. Performance & Accessibility

- Optimasi Lighthouse
- Lazy loading
- Keyboard navigation
- Aksesibilitas dasar (ARIA)

---

## 🧪 Preview Teknologi yang Digunakan

Teknologi saat ini & yang berpotensi digunakan ke depan:

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **UI:** shadcn/ui + Tailwind CSS
- **Animation:** Framer Motion
- **Auth (opsional):** Supabase Auth / JWT
- **CMS (opsional):** Sanity / Contentful
- **Email:** EmailJS / Resend
- **Analytics:** Plausible / Google Analytics
- **Deployment:** Vercel

---

## 🧠 Visi Jangka Panjang

Web portofolio ini dapat berkembang menjadi:

- Personal branding website
- Technical blog
- Showcase profesional untuk recruiter
- Tempat eksperimen teknologi baru

---

## 📌 Prinsip Pengembangan

- MVP tetap **ringan & stabil**
- Fokus pada **value**, bukan sekadar fitur
- Hindari over-engineering
- Anggap proyek ini sebagai **living product**

---

---

## 🗺️ Milestone & Commit Plan

Dokumen ini menjelaskan rencana pengembangan **jangka pendek** dan **jangka
menengah** agar proyek tetap terstruktur meskipun tidak disentuh dalam waktu
lama.

---

### 🟢 Milestone 1 – Finalisasi Konten Awal (Target: 1 Minggu)

**Tujuan:**  
Melengkapi konten utama agar web portofolio sudah layak dinilai & dibagikan,
meskipun pengembangan dihentikan sementara sampai TA selesai.

#### Scope Pekerjaan

1. Finalisasi data project:
   - Lengkapi deskripsi project
   - Tambahkan tech stack
   - Tambahkan link repository / demo
2. Sertifikat:
   - Kumpulkan semua sertifikat
   - Implementasi carousel sertifikat
   - Modal / preview sertifikat (jika perlu)

#### Deliverables

- Data project lengkap & rapi
- Carousel sertifikat berjalan dengan baik
- UI tetap konsisten & responsif

#### Commit Plan (Disarankan)

- `feat: finalize project data structure`
- `content: add completed project data`
- `feat: certificate carousel component`
- `ui: adjust about page layout for certificates`
- `chore: cleanup unused assets and components`

---

### 🟡 Milestone 2 – Maintenance Mode (Target: Feb – Okt)

**Status:** 🔒 _Frozen / Maintenance Only_

#### Aktivitas yang Boleh Dilakukan

- Bug fix kecil (jika ada)
- Update dependency minor (opsional)
- Tidak menambah fitur baru

📌 _Catatan:_  
Tidak ada kewajiban menyentuh proyek ini selama fokus TA.

---

### 🔵 Milestone 3 – Post-TA Enhancement (Target: Setelah Oktober)

**Tujuan:**  
Melanjutkan pengembangan fitur strategis dengan kondisi mental & waktu yang
lebih longgar.

#### Kandidat Fitur

- Contact form fungsional
- SEO & analytics
- Blog / writing page
- Admin / CMS (opsional)

---

## 📌 Catatan Pengembangan

- Setiap milestone **harus berakhir dalam kondisi stabil**
- Jangan meninggalkan TODO besar sebelum freeze
- Prioritaskan fitur yang **langsung terlihat oleh reviewer**

---

_Last updated: Januari 2026_
