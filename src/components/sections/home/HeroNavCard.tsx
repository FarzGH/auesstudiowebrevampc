import { useState } from "react";
import "./HeroNavCard.css";

interface HeroNavCardProps {
  href: string;
  label: string;
  image: string;
  external?: boolean;
}

export default function HeroNavCard({ href, label, image, external }: HeroNavCardProps) {
  const [armed, setArmed] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    const isHoverable = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isHoverable && !armed) {
      // Tap pertama di mobile: hanya membesarkan kartu, belum navigasi.
      e.preventDefault();
      setArmed(true);
    }
  };

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      data-armed={armed}
      onClick={handleClick}
      onBlur={() => setArmed(false)}
      className="hero-nav-card group"
    >
      <img src={image} alt="" className="hero-nav-card__image" />
      <div className="hero-nav-card__overlay" />
      <span className="hero-nav-card__label">{label}</span>
    </a>
  );
}
