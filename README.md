# Tugas FGD FYP Media

## Deskripsi

Proyek ini adalah sebuah situs web berita yang dibangun menggunakan React js, Tailwind css dan dilengkapi dengan animasi menggunakan Framer Motion. Proyek ini menggunakan Vite sebagai bundler dan development server untuk mempercepat proses pengembangan.

## Instalasi

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek di lokal Anda.

### Prasyarat

- Node.jsx dan npm harus sudah terinstal di sistem Anda.

### Langkah-langkah Instalasi

1. Clone repositori ini ke lokal Anda:

   ```bash
   git clone https://github.com/username/repository-name.git
   cd repository-name
   ```

2. Instal dependensi proyek:

   ```bash
   npm install
   ```

3. Jalankan proyek:

   ```bash
   npm run dev
   ```

Proyek akan berjalan di `http://localhost:5173`.

## Struktur Proyek

Berikut adalah struktur direktori utama dari proyek ini:

├── public
├── src
│ ├── components
│ │ ├── atoms
│ │ │ ├── Button
│ │ │ │ └── BackToTop.jsx
│ │ │ │ └── Button.jsx
│ │ │ ├── Title
│ │ │ │ └── Title.jsx
│ │ ├── molecules
│ │ │ ├── About
│ │ │ │ └── AboutPage.jsx
│ │ │ ├── Contact
│ │ │ │ └── ContactPage.jsx
│ │ │ │ └── ContactForm.jsx
│ │ │ ├── Footer
│ │ │ │ └── Footer.jsx
│ │ │ ├── Header
│ │ │ │ └── Header.jsx
│ │ │ ├── Home
│ │ │ │ └── Blog.jsx
│ │ │ │ └── LatestNews.jsx
│ │ │ │ └── PopularArticle.jsx
│ ├── pages
│ │ ├── About.jsx
│ │ ├── Contact.jsx
│ │ └── Home.jsx
│ │ └── News.jsx
│ ├── App.css
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── .gitignore
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js

Berikut adalah deskripsi proyek yang diperbarui dengan instruksi instalasi menggunakan Vite. Anda dapat menambahkan ini ke file README.md di root directory repository Anda.

markdown
Copy code

# Project Title

## Deskripsi

Ini adalah proyek web yang mencakup beberapa komponen, termasuk halaman kontak dengan lokasi di Bekasi. Proyek ini dibuat menggunakan React dan dilengkapi dengan animasi menggunakan Framer Motion. Proyek ini menggunakan Vite sebagai bundler dan development server untuk mempercepat proses pengembangan.

## Fitur

- **Header**: Header responsif dengan navigasi dan pencarian.
- **LatestNews**: Komponen untuk menampilkan berita terkini dengan animasi saat menggulir.
- **PopularArticle**: Komponen untuk menampilkan artikel populer dengan animasi saat menggulir.
- **ContactPage**: Halaman kontak lengkap dengan formulir dan informasi kontak yang mencakup lokasi di Bekasi.

## Instalasi

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek di lokal Anda.

### Prasyarat

- Node.js dan npm harus sudah terinstal di sistem Anda.

### Langkah-langkah Instalasi

1. Clone repositori ini ke lokal Anda:

   ```bash
   git clone https://github.com/username/repository-name.git
   cd repository-name
   ```

2. Instal Vite jika belum terpasang:

   ```bash
   npm create vite@latest
   ```

3. Instal dependensi proyek:

   ```bash
   npm install
   ```

4. Jalankan proyek:

   ```bash
   npm run dev
   ```

Proyek akan berjalan di `http://localhost:5173`.

## Struktur Proyek

Berikut adalah struktur direktori utama dari proyek ini:

.
├── public
├── src
│ ├── components
│ │ ├── Header
│ │ ├── Footer
│ │ ├── ContactForm
│ │ ├── ContactInfo
│ │ └── ...
│ ├── pages
│ │ ├── Contact
│ │ │ └── ContactPage.js
│ │ └── ...
│ ├── atoms
│ │ ├── Button
│ │ │ └── Button.js
│ │ ├── Title
│ │ │ └── Title.js
│ │ └── ...
│ ├── App.js
│ ├── main.jsx
│ └── ...
├── .gitignore
├── package.json
└── README.md

## Kontribusi

Kontribusi sangat kami hargai. Silakan fork repositori ini dan ajukan pull request dengan perubahan yang diusulkan.

1. Fork repositori ini.
2. Buat branch fitur baru: `git checkout -b feature-name`.
3. Commit perubahan Anda: `git commit -m 'Add some feature'`.
4. Push ke branch: `git push origin feature-name`.
5. Buat pull request.

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).
