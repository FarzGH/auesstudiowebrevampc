import { Ban } from "lucide-react";
import type { Sanksi } from "@/data/constitutionData";

export default function SanksiBadge({ sanksi }: { sanksi?: Sanksi }) {
  if (!sanksi) return null;
  const { label, poin } = sanksi;

  if (label.includes("Pemecatan Langsung") || label.includes("Banned Permanen") || poin === 100) {
    return (
      <span className="inline-flex max-w-full shrink-0 items-center gap-1.5 break-words rounded-md border border-red-800 bg-red-950 px-2.5 py-1 text-xs font-bold text-red-200 shadow-sm">
        <Ban className="h-3.5 w-3.5 shrink-0" />
        <span>Sanksi: 100 Poin ({label})</span>
      </span>
    );
  }

  if (label.includes("Berat") || poin >= 30) {
    return (
      <span className="inline-flex max-w-full shrink-0 items-center break-words rounded-md border border-rose-500/20 bg-rose-500/10 px-2.5 py-1 text-xs font-semibold text-rose-400">
        Sanksi: {poin > 0 ? `${poin} Poin ` : ""}({label})
      </span>
    );
  }

  if (label.includes("Sedang") || (poin >= 15 && poin < 30)) {
    return (
      <span className="inline-flex max-w-full shrink-0 items-center break-words rounded-md border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-400">
        Sanksi: {poin} Poin ({label})
      </span>
    );
  }

  if (label.includes("Ringan") || (poin > 0 && poin < 15)) {
    return (
      <span className="inline-flex max-w-full shrink-0 items-center break-words rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-400">
        Sanksi: {poin} Poin ({label})
      </span>
    );
  }

  return (
    <span className="inline-flex max-w-full shrink-0 items-center break-words rounded-md border border-ink-line bg-ink-raised px-2.5 py-1 text-xs font-medium text-parchment-muted">
      {label}
    </span>
  );
}
