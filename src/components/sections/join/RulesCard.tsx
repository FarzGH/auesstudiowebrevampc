import React from "react";
import PixelCard from "@/components/ui/PixelCard";
import SpecularButton from "@/components/ui/SpecularButton";
import "./JoinVisuals.css";

interface RulesCardProps {
  isLoaded: boolean;
}

const RULES: React.ReactNode[] = [
  "Dilarang sider.",
  "Minimal memiliki akun Instagram atau TikTok.",
  "Jujur dalam menjawab.",
  "Hanya diperbolehkan untuk Warga Negara Indonesia dan Malaysia.",
  "Patuh pada MinAus (admin) dan Bot.",
  "LITERASI!!.",
  <span key="rule-constitution">
    Patuh pada hukum yang ditulis di halaman{" "}
    <a
      href="http://auesstudio.my.id/constitution"
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold text-garnet underline decoration-garnet/50 transition-colors hover:text-garnet-deep"
    >
      constitution
    </a>
  </span>,
];

export const RulesCard: React.FC<RulesCardProps> = ({ isLoaded }) => {
  const handleSelectionClick = () => {
    window.location.href = "/selection.html";
  };

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        isLoaded ? "translate-y-0 scale-100 opacity-100" : "translate-y-8 scale-[0.96] opacity-0"
      }`}
    >
      <PixelCard variant="default" colors="#E4C989,#C9A768,#7A1F35" className="rules-card">
        <h1 className="mb-6 w-full border-b-2 border-ink/10 pb-3 text-center font-display text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
          Rules to be Memaus
        </h1>

        <ol className="mb-8 w-full space-y-3.5 text-left text-sm font-medium leading-relaxed text-ink sm:text-base">
          {RULES.map((rule, idx) => (
            <li
              key={idx}
              className="join-stagger-item flex items-start gap-3 transition-all duration-500 ease-out"
              style={{
                transitionDelay: `${300 + idx * 80}ms`,
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(12px)",
              }}
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-garnet text-xs font-bold text-parchment shadow-sm">
                {idx + 1}
              </span>
              <span className="pt-0.5">{rule}</span>
            </li>
          ))}
        </ol>

        <div
          className="join-stagger-item flex w-full justify-center pt-2 transition-all duration-500 ease-out"
          style={{
            transitionDelay: `${300 + RULES.length * 80 + 100}ms`,
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(12px)",
          }}
        >
          <SpecularButton
            size="lg"
            baseColor="#C9A768"
            lineColor="#15110D"
            textColor="#15110D"
            followMouse={true}
            onClick={handleSelectionClick}
            className="!opacity-100 border-2 border-ink font-extrabold shadow-lg"
          >
            Seleksi!
          </SpecularButton>
        </div>
      </PixelCard>
    </div>
  );
};
