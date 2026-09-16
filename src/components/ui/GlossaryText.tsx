import React, { useState } from "react";
import { GLOSSARY } from "@/data/glossary";

export { GLOSSARY } from "@/data/glossary";

interface GlossaryTextProps {
  text: string;
}

/**
 * Menyorot istilah dari GLOSSARY di dalam teks bebas dan menampilkan
 * definisinya lewat tooltip (desktop, hover) atau modal (mobile, tap).
 */
export const GlossaryText: React.FC<GlossaryTextProps> = ({ text }) => {
  const [activeTooltip, setActiveTooltip] = useState<{ term: string; def: string } | null>(null);

  const termsRegex = new RegExp(
    `\\b(${GLOSSARY.map((g) => g.term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})\\b`,
    "g"
  );

  const parts = text.split(termsRegex);

  return (
    <span className="relative inline">
      {parts.map((part, idx) => {
        const glossaryMatch = GLOSSARY.find((g) => g.term === part);
        if (glossaryMatch) {
          return (
            <span
              key={idx}
              className="group relative inline-block cursor-help border-b-2 border-dashed border-brass/70 font-medium text-brass-bright transition-colors hover:text-brass"
              onClick={(e) => {
                e.stopPropagation();
                setActiveTooltip(
                  activeTooltip?.term === glossaryMatch.term
                    ? null
                    : { term: glossaryMatch.term, def: glossaryMatch.definition }
                );
              }}
            >
              {part}
              <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 hidden w-56 -translate-x-1/2 flex-col items-center group-hover:flex">
                <span className="rounded-lg border border-brass/30 bg-ink-raised px-3 py-2 text-center text-xs leading-relaxed text-parchment shadow-panel">
                  <strong className="mb-0.5 block text-brass-bright">{glossaryMatch.term}</strong>
                  {glossaryMatch.definition}
                </span>
                <span className="-mt-1 h-2 w-2 rotate-45 border-b border-r border-brass/30 bg-ink-raised" />
              </span>
            </span>
          );
        }
        return <React.Fragment key={idx}>{part}</React.Fragment>;
      })}

      {activeTooltip && (
        <span
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm md:hidden"
          onClick={(e) => {
            e.stopPropagation();
            setActiveTooltip(null);
          }}
        >
          <span className="block max-w-xs rounded-xl border border-brass/40 bg-ink-raised p-4 text-center shadow-panel">
            <span className="mb-1 block text-sm font-bold text-brass-bright">{activeTooltip.term}</span>
            <span className="mb-3 block text-xs leading-relaxed text-parchment-muted">{activeTooltip.def}</span>
            <span className="inline-block rounded-full border border-brass/30 bg-brass/10 px-3 py-1 text-xs text-brass-bright">
              Ketuk di mana saja untuk menutup
            </span>
          </span>
        </span>
      )}
    </span>
  );
};
