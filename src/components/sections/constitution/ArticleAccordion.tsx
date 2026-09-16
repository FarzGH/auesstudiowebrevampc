import { ChevronDown } from "lucide-react";
import type { Pasal } from "@/data/constitutionData";
import { GlossaryText } from "@/components/ui/GlossaryText";
import SanksiBadge from "./SanksiBadge";
import CopyLinkButton from "./CopyLinkButton";

interface ArticleAccordionProps {
  pasal: Pasal;
  isExpanded: boolean;
  onToggle: (pasalId: string) => void;
  copiedId: string | null;
  onCopy: (id: string) => void;
}

export default function ArticleAccordion({ pasal, isExpanded, onToggle, copiedId, onCopy }: ArticleAccordionProps) {
  return (
    <div id={pasal.id} className="overflow-hidden rounded-2xl border border-ink-line bg-ink-soft/90 shadow-md transition-all">
      <button
        onClick={() => onToggle(pasal.id)}
        className="flex w-full items-center justify-between gap-2 px-4 py-4 text-left transition-colors hover:bg-ink-raised/60 focus:outline-none sm:px-5"
      >
        <span className="break-words text-sm font-bold text-parchment sm:text-base">{pasal.judul}</span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink-line transition-transform duration-200 ${
            isExpanded ? "rotate-180 border border-garnet/60 bg-garnet-deep/60 text-garnet-bright" : "text-parchment-dim"
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>

      {isExpanded && (
        <div className="space-y-6 border-t border-ink-line/80 bg-ink/40 px-4 pb-6 pt-2 sm:px-5">
          {pasal.aturan.map((aturan) =>
            aturan.isCallout ? (
              <div
                key={aturan.id}
                id={aturan.id}
                className="relative my-4 space-y-4 rounded-2xl border-2 border-garnet/70 bg-gradient-to-br from-ink-soft via-garnet-deep/20 to-ink-soft p-4 shadow-xl sm:p-5"
              >
                <div className="flex items-center justify-between gap-2 border-b border-garnet-deep/50 pb-3">
                  <h4 className="flex items-center gap-2 break-words text-sm font-extrabold text-garnet-bright sm:text-base">
                    {aturan.judul}
                  </h4>
                  <CopyLinkButton id={aturan.id} copied={copiedId === aturan.id} onCopy={onCopy} variant="callout" />
                </div>

                <div className="space-y-3">
                  {aturan.bagian.map((b) => (
                    <div key={b.id} id={b.id} className="space-y-1 text-xs text-parchment sm:text-sm">
                      {b.judul && <span className="block break-words font-bold text-garnet-bright">{b.judul}:</span>}
                      <p className="break-words leading-relaxed text-parchment-muted">
                        <GlossaryText text={b.teks} />
                      </p>
                      <SanksiBadge sanksi={b.sanksi} />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div key={aturan.id} id={aturan.id} className="space-y-3 pt-2">
                <div className="flex items-center justify-between gap-2 border-b border-ink-line/80 pb-1.5">
                  <h4 className="break-words text-sm font-bold tracking-wide text-garnet-bright">{aturan.judul}</h4>
                  <CopyLinkButton id={aturan.id} copied={copiedId === aturan.id} onCopy={onCopy} />
                </div>

                <div className="space-y-3">
                  {aturan.bagian.map((b) => (
                    <div
                      key={b.id}
                      id={b.id}
                      className="group space-y-2 rounded-xl border border-ink-line/80 bg-ink-soft/60 p-3.5 transition-colors hover:border-ink-line"
                    >
                      <div className="flex items-start justify-between gap-2">
                        {b.judul ? (
                          <span className="block break-words text-xs font-bold text-parchment sm:text-sm">({b.judul})</span>
                        ) : (
                          <div />
                        )}
                        <CopyLinkButton id={b.id} copied={copiedId === b.id} onCopy={onCopy} variant="ghost" label="Salin Tautan" />
                      </div>
                      <p className="break-words text-xs leading-relaxed text-parchment-muted sm:text-sm">
                        <GlossaryText text={b.teks} />
                      </p>
                      <SanksiBadge sanksi={b.sanksi} />
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
