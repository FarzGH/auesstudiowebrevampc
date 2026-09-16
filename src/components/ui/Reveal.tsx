import React from "react";
import { useReveal } from "@/hooks/useReveal";

type RevealVariant = "up" | "fade" | "scale" | "left" | "right";

interface RevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  /** Delay dalam ms — pakai `index * 80` dkk. untuk efek stagger pada daftar. */
  delay?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

const HIDDEN_STATE: Record<RevealVariant, string> = {
  up: "opacity-0 translate-y-8",
  fade: "opacity-0",
  scale: "opacity-0 scale-95",
  left: "opacity-0 -translate-x-8",
  right: "opacity-0 translate-x-8",
};

/**
 * Bungkus konten apa pun agar fade/slide masuk saat discroll ke viewport.
 * Satu mekanisme konsisten dipakai di seluruh situs (dulu: AOS + banyak
 * variasi delay/easing manual yang tidak seragam antar komponen).
 */
export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  once = true,
  threshold = 0.15,
}: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>({ once, threshold });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "translate-x-0 translate-y-0 scale-100 opacity-100" : HIDDEN_STATE[variant]
      } ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
