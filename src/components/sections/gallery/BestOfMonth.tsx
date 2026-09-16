import { useState } from "react";
import ProtectedImage from "@/components/ui/ProtectedImage";
import Marquee from "@/components/ui/Marquee";
import { BOM_DATA, BOM_PERIOD_LABEL } from "@/data/champions";

// Susunan berlian: atas, kiri, kanan, bawah
const DIAMOND_LAYOUT = [
  { x: 0, y: -170 },
  { x: -170, y: 0 },
  { x: 170, y: 0 },
  { x: 0, y: 170 },
];

export default function BestOfMonth() {
  const [activeTrophy, setActiveTrophy] = useState<number | null>(null);

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      <Marquee text="BEST OF MONTH" className="text-[8rem] text-garnet/[0.08] md:text-[10rem]" />

      <h3 className="absolute top-10 z-10 border-b border-ink-line pb-2 text-2xl font-black uppercase tracking-widest text-parchment-muted md:text-3xl">
        {BOM_PERIOD_LABEL}
      </h3>

      <div className="relative flex h-[500px] w-full items-center justify-center">
        {BOM_DATA.map((item, i) => {
          const isActive = activeTrophy === i;
          const isHidden = activeTrophy !== null && !isActive;
          const x = isActive ? 0 : DIAMOND_LAYOUT[i].x;
          const y = isActive ? 0 : DIAMOND_LAYOUT[i].y;

          return (
            <div
              key={item.title}
              className={`absolute left-1/2 top-1/2 -ml-16 -mt-16 flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isActive ? "z-30" : isHidden ? "z-0 scale-50 opacity-0" : "z-10 scale-100 opacity-100"
              }`}
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              {/* Reveal atas: profil */}
              <div
                className={`absolute bottom-full z-0 mb-4 flex flex-col items-center transition-all delay-200 duration-[600ms] ease-out ${
                  isActive ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[80px] opacity-0"
                }`}
              >
                <ProtectedImage
                  src={item.imgProfile}
                  alt={item.name}
                  className="h-16 w-16 rounded-full border-2 border-garnet-bright object-cover drop-shadow-lg"
                />
                <span className="mt-2 text-lg font-bold text-parchment">{item.name}</span>
              </div>

              {/* Piala (trigger) */}
              <div
                className={`relative z-10 transition-all duration-300 drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] ${
                  item.disabled ? "pointer-events-none cursor-not-allowed opacity-50" : "cursor-pointer hover:scale-110"
                }`}
                onClick={() => !item.disabled && setActiveTrophy(isActive ? null : i)}
              >
                <ProtectedImage src={item.piala} alt={item.title} className="h-32 w-32 object-contain" />
              </div>

              {/* Reveal bawah: judul & link */}
              <div
                className={`absolute top-full z-0 mt-4 flex flex-col items-center transition-all delay-200 duration-[600ms] ease-out ${
                  isActive ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-[80px] opacity-0"
                }`}
              >
                <h4 className="text-center font-black uppercase tracking-widest text-garnet-bright">{item.title}</h4>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="pointer-events-auto mt-2 rounded border-b border-ink-line bg-ink/60 px-2 py-1 text-xs text-parchment-muted transition-all hover:border-brass-bright hover:text-parchment"
                >
                  Lihat Karya
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
