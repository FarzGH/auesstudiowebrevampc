import { useEffect, useRef, useState } from "react";

interface UseRevealOptions {
  /** Seberapa besar bagian elemen harus terlihat sebelum dianggap "masuk layar". */
  threshold?: number;
  rootMargin?: string;
  /** Jika false, elemen akan reveal/hide berulang setiap keluar-masuk viewport. Default: true (sekali saja). */
  once?: boolean;
}

/**
 * Hook reveal-on-scroll ringan tanpa dependency tambahan.
 * Menggantikan pola `data-aos="..."` dari library AOS yang sebelumnya
 * dipakai tersebar di banyak komponen dengan konfigurasi yang tidak konsisten.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(options: UseRevealOptions = {}) {
  const { threshold = 0.15, rootMargin = "0px 0px -10% 0px", once = true } = options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}
