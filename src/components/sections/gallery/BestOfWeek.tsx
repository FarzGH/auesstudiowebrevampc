import { useState } from "react";
import ProtectedImage from "@/components/ui/ProtectedImage";
import Marquee from "@/components/ui/Marquee";
import TrophyCard from "./TrophyCard";
import { BOW_DATA } from "@/data/champions";

// Konfigurasi 4 sudut (translasi) & arah lirik (rotasi 3D)
const CORNER_CONFIG = [
  { pos: { x: 220, y: -160 }, rot: { rx: 15, ry: -25 } }, // Top-Right
  { pos: { x: 220, y: 160 }, rot: { rx: -15, ry: -25 } }, // Bottom-Right
  { pos: { x: -220, y: 160 }, rot: { rx: -15, ry: 25 } }, // Bottom-Left
  { pos: { x: -220, y: -160 }, rot: { rx: 15, ry: 25 } }, // Top-Left
];

export default function BestOfWeek() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleTrophyClick = () => {
    if (isOpen) {
      setIsOpen(false);
      setActiveCard(null);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center [perspective:1200px]">
      <Marquee text="BEST OF WEEK" className="text-[8rem] text-brass/[0.08] md:text-[10rem]" />

      {/* Piala Tengah */}
      <div
        className={`relative z-30 cursor-pointer transition-transform duration-700 ease-out ${
          isOpen ? "scale-75 hover:scale-[0.8]" : "scale-100 hover:scale-105"
        }`}
        onClick={handleTrophyClick}
      >
        <ProtectedImage src="https://i.imgur.com/PDUFTTf.png" alt="Trofi Best of Week" className="w-32 shadow-glow-brass md:w-48" />
      </div>

      {/* 4 Kartu Melayang */}
      {BOW_DATA.map((data, i) => {
        const isActive = activeCard === i;
        const config = CORNER_CONFIG[i];

        const xPos = isOpen ? config.pos.x : 0;
        const yPos = isOpen ? config.pos.y : 0;
        const rotX = isActive ? 0 : isOpen ? config.rot.rx : 0;
        const rotY = isActive ? 0 : isOpen ? config.rot.ry : 0;
        const scale = isActive ? 1.2 : 1;

        return (
          <div
            key={data.name}
            className={`absolute left-1/2 top-1/2 z-10 -ml-[90px] -mt-[110px] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isOpen ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            style={{ transform: `translate(${xPos}px, ${yPos}px)` }}
          >
            <div className="animate-float" style={{ animationDelay: `${i * 0.4}s` }}>
              <div
                className={`cursor-pointer transition-all duration-500 ease-out ${
                  isActive ? "z-40 shadow-glow" : "z-20 drop-shadow-xl hover:scale-105"
                }`}
                style={{ transform: `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scale})` }}
                onClick={() => setActiveCard(isActive ? null : i)}
              >
                <TrophyCard data={data} isActive={isActive} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
