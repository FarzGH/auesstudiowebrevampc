import type { Pasal } from "@/data/constitutionData";
import { GlossaryText } from "@/components/ui/GlossaryText";
import SanksiBadge from "./SanksiBadge";

export default function SearchResultCard({ pasal, kodeJudul }: { pasal: Pasal; kodeJudul: string }) {
  return (
    <div className="space-y-4 rounded-2xl border border-ink-line bg-ink-soft/80 p-4 sm:p-5">
      <span className="block text-xs font-bold uppercase tracking-wider text-garnet-bright">{kodeJudul}</span>
      <h3 className="break-words text-base font-bold text-parchment">{pasal.judul}</h3>
      {pasal.aturan.map((aturan) => (
        <div key={aturan.id} className="space-y-3 border-t border-ink-line/60 pt-2">
          <h4 className="break-words text-sm font-semibold text-garnet-bright/90">{aturan.judul}</h4>
          {aturan.bagian.map((b) => (
            <div key={b.id} id={b.id} className="space-y-2 rounded-xl border border-ink-line bg-ink/60 p-3.5 text-xs sm:text-sm">
              {b.judul && <span className="block break-words font-bold text-parchment">({b.judul})</span>}
              <p className="break-words leading-relaxed text-parchment-muted">
                <GlossaryText text={b.teks} />
              </p>
              <SanksiBadge sanksi={b.sanksi} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
