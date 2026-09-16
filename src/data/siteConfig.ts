export const SITE = {
  name: "Academy Uma Sovereign",
  shortName: "A'ueS",
  fullName: "Academy Uma Sovereign (Marga A'ues / Acaumas)",
  tagline: "Sovereignty and Unity",
  logo: "https://i.imgur.com/A3Hde01.png",
  heroLogo: "https://i.imgur.com/kDvsNa3.png",
  favicon: "https://i.imgur.com/J1bHQua.png",
  whatsappCommunity: "https://chat.whatsapp.com/EidQqBTQz143yoAmkaYb5y?mode=gi_t",
  contactEmail: "auesstudio12@gmail.com",
  socials: {
    tiktok: "https://www.tiktok.com/@academyumasovereign_ofc?_r=1&_t=ZS-95aGn9R95l9",
    instagram: "https://www.instagram.com/academyumasovereign_ofc?stkn=cDhva29ob3VidDQz",
  },
} as const;

export interface NavLink {
  label: string;
  href: string;
}

// Satu sumber kebenaran untuk seluruh navbar di situs — sebelumnya link ini
// tersalin manual di 3 file (Navbar, NavbarGalery, NavbarCons) dengan isi
// yang saling tidak konsisten satu sama lain.
export const NAV_LINKS: NavLink[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "about" },
  { label: "Sejarah & Perkembangan", href: "history" },
  { label: "Undang-Undang Regulasi", href: "constitution" },
  { label: "Galeri Kami", href: "galery" },
];
