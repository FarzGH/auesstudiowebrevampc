import { useEffect, useState } from "react";

interface UsePreloadImagesOptions {
  /** Durasi minimum loader tampil (ms), agar tidak "berkedip" walau gambar cepat termuat. */
  minWait?: number;
  /** Batas maksimum menunggu sebelum tetap melanjutkan meski gambar belum semua termuat. */
  maxWait?: number;
  /** Durasi transisi fade-out loader (ms), samakan dengan durasi CSS transition-nya. */
  fadeDuration?: number;
}

/**
 * Preload sekumpulan gambar sebelum menampilkan konten halaman.
 * Catatan: berikan `sources` sebagai array yang stabil (didefinisikan di luar
 * komponen atau di-memo), bukan array literal baru setiap render.
 */
export function usePreloadImages(sources: readonly string[], options: UsePreloadImagesOptions = {}) {
  const { minWait = 1000, maxWait = 5000, fadeDuration = 700 } = options;
  const [loading, setLoading] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const preloads = sources.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = () => resolve();
        })
    );

    const minWaitPromise = new Promise<void>((resolve) => setTimeout(resolve, minWait));
    const maxWaitPromise = new Promise<void>((resolve) => setTimeout(resolve, maxWait));

    Promise.race([Promise.all([Promise.all(preloads), minWaitPromise]), maxWaitPromise]).then(() => {
      if (!isMounted) return;
      setFadingOut(true);
      setTimeout(() => {
        if (isMounted) setLoading(false);
      }, fadeDuration);
    });

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sources, minWait, maxWait, fadeDuration]);

  return { loading, fadingOut };
}
