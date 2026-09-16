import { useState, useEffect } from 'react';

export function useCountUp(end: number, duration: number = 2000, trigger: boolean = false) {
  const [count, setCount] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (!trigger || isCompleted) return;

    // Cek fallback prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setCount(end);
      setIsCompleted(true);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutCubic(progress);

      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
        setIsCompleted(true);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, trigger, isCompleted]);

  return { count, isCompleted };
}
