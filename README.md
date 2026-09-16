# Academy Uma Sovereign (A'ueS) — Situs Resmi

Situs resmi komunitas Academy Uma Sovereign, dibangun dengan React + TypeScript + Vite + Tailwind CSS.

## ⚠️ Wajib dibaca sebelum deploy

Versi sebelumnya dari project ini menyimpan kredensial (App Password Gmail & Supabase secret key) dalam bentuk teks polos di `lib/config.json`, ikut ter-commit ke kode sumber. Di versi ini, seluruh kredensial sudah dipindahkan ke **environment variables** (lihat `.env.example`) dan `lib/config.json` sudah dihapus.

**Jika file `config.json` yang lama pernah ter-upload ke repository (GitHub, dsb), langkah ini wajib dilakukan sebelum lanjut:**

1. **Buat App Password Gmail baru** di [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords), lalu hapus/cabut App Password yang lama.
2. **Regenerasi Supabase Service Role Key** dari Supabase Dashboard → Project Settings → API, lalu update key di semua tempat yang memakainya.
3. Isi kredensial yang baru ke Environment Variables di Vercel Dashboard (Project Settings → Environment Variables), **bukan** ke dalam file yang ikut di-commit.

## Tech Stack

- **React 18** + **TypeScript** — komponen UI
- **Vite** — build tool (multi-page app, satu entry per halaman)
- **Tailwind CSS** — styling berbasis utility class + design token kustom
- **GSAP** — animasi hero & scroll-based
- **Three.js / ogl** — efek visual WebGL (Aurora, GridDistortion, SplashCursor, SpecularButton)
- **Supabase** — database pendaftaran member (dipakai di `api/registration.js`, server-side only)
- **Nodemailer** — kirim email verifikasi pendaftaran via Gmail

## Menjalankan di Lokal

```bash
npm install
cp .env.example .env   # lalu isi nilai asli di .env
npm run dev
```

Build untuk production:

```bash
npm run build
npm run preview   # opsional, untuk cek hasil build secara lokal
```

## Struktur Folder

```
├── api/
│   └── registration.js       # Serverless function (Vercel) — proses form pendaftaran
├── src/
│   ├── entries/               # Satu file .tsx per halaman (mount React ke #root)
│   ├── pages/                 # Komponen halaman utama (Home, About, Galery, dst.)
│   │   └── selection/         # Sub-komponen & hook khusus form pendaftaran
│   ├── components/
│   │   ├── layout/             # Navbar, Footer, PageLoader — dipakai di semua halaman
│   │   ├── sections/           # Section per halaman, dikelompokkan per folder (about/, gallery/, dst.)
│   │   └── ui/                 # Komponen dasar reusable (Reveal, Aurora, PixelCard, dll.)
│   ├── data/                   # Konten & data terpusat (site config, konstitusi, admin, dll.)
│   ├── hooks/                  # Custom hooks (useReveal, useCountUp, dll.)
│   └── styles/
│       └── global.css          # Satu file CSS global (Tailwind + design token + base style)
├── *.html                      # Satu file HTML per halaman (index, about, galery, dst.)
├── tailwind.config.js          # Design token: warna, font, animasi
└── vercel.json                 # Konfigurasi deployment Vercel (tidak diubah dari versi sebelumnya)
```

Setiap halaman (`/`, `/about`, `/galery`, `/constitution`, `/join`, `/selection`, `/proposal`) tetap berupa entry HTML terpisah seperti sebelumnya (bukan single-page-app), supaya seluruh URL yang sudah dibagikan di luar (TikTok, Instagram, WhatsApp) tetap berfungsi persis sama.

## Environment Variables

Lihat `.env.example` untuk daftar lengkap dan penjelasan masing-masing variabel (Supabase, Gmail, kontak admin).

## Desain

- **Palet warna**: dasar gelap hangat (`ink`), aksen garnet (merah pualam) & brass (emas antik) — terinspirasi tema "Academy" & "Sovereign".
- **Tipografi**: Cormorant Garamond untuk judul besar, Plus Jakarta Sans untuk teks & UI, IBM Plex Mono untuk elemen "kode" (Card ID, nomor pasal).
- **Animasi**: sistem scroll-reveal kustom (`<Reveal />`) dipakai konsisten di seluruh halaman, dilengkapi animasi signature per halaman (hero sequence, trophy 3D, dsb).
