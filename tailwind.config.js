/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        // Latar "akademi di waktu senja" — hangat, gelap, bukan hitam/abu generik.
        ink: {
          DEFAULT: "#15110D",
          soft: "#1E1812",
          raised: "#262019",
          line: "#3A2F23",
        },
        // Teks & permukaan terang, senada perkamen/kertas piagam.
        parchment: {
          DEFAULT: "#F4ECDD",
          muted: "#B9AC98",
          dim: "#8A8072",
        },
        // Aksen utama — merah pualam/lak segel kerajaan.
        garnet: {
          DEFAULT: "#7A1F35",
          bright: "#E15873",
          deep: "#4A1420",
        },
        // Aksen kedua — kuningan/emas antik, pasangan klasik warna merah segel.
        brass: {
          DEFAULT: "#C9A768",
          soft: "#8C7239",
          bright: "#E4C989",
        },
        // Aksen ketiga, dipakai terbatas — kontras dingin saat butuh membedakan
        // kategori paralel (mis. 3 pilar) tanpa keluar dari nuansa hangat gelap.
        steel: {
          DEFAULT: "#3E5C6B",
          bright: "#6E97A8",
        },
      },
      fontFamily: {
        // Body & UI — geometris, modern, mudah dibaca di layar kecil.
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        // Display — serif klasik untuk judul besar, selaras dengan identitas "Academy" & "Sovereign".
        display: ['"Cormorant Garamond"', "serif"],
        // Dipakai sangat terbatas: Card ID, nomor pasal, label sistem.
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        prose: "65ch",
      },
      keyframes: {
        progress: {
          "0%": { transform: "scaleX(0)", opacity: "1" },
          "100%": { transform: "scaleX(1)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        progress: "progress 1.4s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        float: "float 4.5s ease-in-out infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        shimmer: "shimmer 2.4s linear infinite",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(225,88,115,0.35)",
        "glow-brass": "0 0 40px -10px rgba(201,167,104,0.35)",
        panel: "0 24px 60px -24px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='90' viewBox='0 0 90 90'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
