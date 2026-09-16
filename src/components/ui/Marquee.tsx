interface MarqueeProps {
  text: string;
  className?: string;
}

/**
 * Teks raksasa yang berjalan looping di belakang konten (dekorasi ambient).
 * Dirender dua kali berdampingan lalu digeser -50% agar loop-nya mulus
 * berapa pun panjang teksnya (lihat keyframe "marquee" di tailwind.config.js).
 */
export default function Marquee({ text, className = "" }: MarqueeProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 flex select-none items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee">
        <span className={`whitespace-nowrap px-8 font-display font-semibold ${className}`}>{text}</span>
        <span className={`whitespace-nowrap px-8 font-display font-semibold ${className}`}>{text}</span>
      </div>
    </div>
  );
}
