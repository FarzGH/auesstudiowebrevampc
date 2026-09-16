import { useEffect, useRef } from "react";
import gsap from "gsap";
import Aurora from "@/components/ui/Aurora";
import HeroNavCard from "./HeroNavCard";
import { usePreloadImages } from "@/hooks/usePreloadImages";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import PageLoader from "@/components/layout/PageLoader";
import { SITE } from "@/data/siteConfig";

const NAV_CARDS = [
  { href: "about", label: "Tentang Kami", image: "https://i.imgur.com/HzwcuLh.png" },
  { href: "history", label: "Sejarah & Perkembangan", image: "https://i.imgur.com/71byDRE.png" },
  { href: "constitution", label: "Undang-Undang Regulasi", image: "https://i.imgur.com/0D89mYN.png" },
  { href: "galery", label: "Galeri Kami", image: "https://i.imgur.com/EQbOkjd.png" },
  { href: "join", label: "Gabung Sekarang", image: "https://i.imgur.com/hpYMac5.png" },
];

const PRELOAD_ASSETS = [SITE.heroLogo, ...NAV_CARDS.map((c) => c.image)];

export default function Hero() {
  const { loading, fadingOut } = usePreloadImages(PRELOAD_ASSETS);
  const reducedMotion = usePrefersReducedMotion();

  const logoRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const footerNoteRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (loading) return;
    const logo = logoRef.current;
    const title = titleRef.current;
    const desc = descRef.current;
    const cards = cardsRef.current;
    const note = footerNoteRef.current;
    if (!logo || !title || !desc || !cards || !note) return;

    if (reducedMotion) {
      gsap.set([logo, title, desc, note, ...Array.from(cards.children)], { opacity: 1, y: 0, scale: 1 });
      return;
    }

    gsap.set(logo, { clearProps: "all" });
    const logoRect = logo.getBoundingClientRect();
    const windowCenterY = window.innerHeight / 2;
    const logoCenterY = logoRect.top + logoRect.height / 2;
    const yOffset = windowCenterY - logoCenterY;

    gsap.set(logo, { y: yOffset, scale: 1.4, opacity: 0 });
    gsap.set([title, desc], { y: 26, opacity: 0 });
    gsap.set(cards.children, { y: 32, opacity: 0 });
    gsap.set(note, { opacity: 0 });

    const tl = gsap.timeline();
    tl.to(logo, { opacity: 1, duration: 0.8, ease: "power2.out" })
      .to(logo, { y: 0, scale: 1, duration: 1, ease: "power3.inOut" }, "+=0.2")
      .to(title, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.3")
      .to(desc, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.35")
      .to(cards.children, { y: 0, opacity: 1, duration: 0.55, stagger: 0.1, ease: "power2.out" }, "-=0.25")
      .to(note, { opacity: 1, duration: 0.5 }, "-=0.2");
  }, [loading, reducedMotion]);

  return (
    <>
      <PageLoader visible={loading} fadingOut={fadingOut} />

      <div className="relative flex min-h-screen w-full flex-col overflow-hidden">
        {!reducedMotion && (
          <div className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-70">
            <Aurora colorStops={["#7A1F35", "#C9A768", "#15110D"]} amplitude={1.0} blend={0.55} speed={0.3} />
          </div>
        )}
        <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-ink/10 via-ink/40 to-ink" />

        <main
          className={`relative z-10 flex w-full flex-grow flex-col items-center justify-center px-4 py-16 transition-opacity duration-1000 sm:px-6 md:px-8 ${
            loading && !fadingOut ? "h-0 overflow-hidden opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex w-full max-w-4xl flex-col items-center space-y-7 text-center sm:space-y-8">
            <img
              ref={logoRef}
              src={SITE.heroLogo}
              alt={`Logo ${SITE.shortName}`}
              className="h-28 object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] sm:h-36 md:h-44"
            />

            <h1
              ref={titleRef}
              className="text-balance font-display text-3xl font-semibold uppercase tracking-wide text-parchment drop-shadow-md sm:text-5xl md:text-6xl"
            >
              Selamat Datang di AuesStudio
            </h1>

            <p
              ref={descRef}
              className="max-w-3xl px-2 text-left text-sm leading-relaxed text-parchment-muted sm:px-4 sm:text-center sm:text-base"
            >
              Website ini hadir sebagai wadah integratif yang dikhususkan untuk mengenal lebih dekat Marga AUS.
              Fokus utama dari platform ini adalah menyajikan tata kelola organisasi yang jelas, termasuk di
              dalamnya dokumen Undang-Undang yang berlaku, peraturan (rules) mendalam bagi seluruh member internal
              dan eksternal, serta panduan kerja sama bagi pihak luar yang ingin menjalin kemitraan (partnership).
              <br className="hidden sm:block" />
              <br className="hidden sm:block" />
              Bersamaan dengan fungsi administratif tersebut, kami juga berkomitmen untuk mendukung penuh potensi
              kreatif komunitas. Oleh karena itu, kami menyediakan ruang khusus berupa galeri karya yang berfungsi
              untuk memamerkan, mengapresiasi, dan mendokumentasikan seluruh kreativitas serta dedikasi yang telah
              dilahirkan oleh para anggota kami.
            </p>

            <div
              ref={cardsRef}
              className="flex w-full flex-col items-center justify-center gap-4 pt-4 text-xs sm:flex-row sm:flex-wrap sm:gap-4 sm:text-sm"
            >
              {NAV_CARDS.map((card) => (
                <HeroNavCard key={card.href} {...card} />
              ))}
            </div>
          </div>
        </main>

        <p
          ref={footerNoteRef}
          className="relative z-10 w-full border-t border-ink-line/60 bg-ink/30 py-6 text-center text-[10px] uppercase tracking-widest2 text-parchment-dim backdrop-blur-sm sm:text-xs"
        >
          Copyright &copy; {new Date().getFullYear()} <span className="text-parchment-muted">{SITE.shortName} Studio</span>. All Rights
          Reserved.
        </p>
      </div>
    </>
  );
}
