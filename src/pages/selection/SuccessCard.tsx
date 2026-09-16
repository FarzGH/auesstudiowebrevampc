import { CheckCircle2 } from "lucide-react";

export default function SuccessCard({ cardId }: { cardId: string }) {
  return (
    <div className="relative mx-auto flex w-full max-w-2xl flex-col items-center gap-6 overflow-hidden rounded-3xl border border-emerald-500/40 bg-ink/60 p-8 text-center shadow-[0_0_40px_rgba(16,185,129,0.15)] backdrop-blur-xl sm:p-10">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
        <CheckCircle2 className="h-9 w-9" />
      </div>
      <div className="space-y-2">
        <h2 className="font-display text-2xl font-semibold tracking-wide text-parchment sm:text-3xl">Pendaftaran Berhasil!</h2>
        <p className="max-w-md text-sm leading-relaxed text-parchment-muted">
          Data kamu udah masuk ke database. Cek email (Gmail) kamu buat ngedapetin link grup WhatsApp!
        </p>
      </div>
      <div className="w-full max-w-md space-y-1 rounded-2xl border border-parchment/10 bg-ink/70 p-5 text-center shadow-inner">
        <span className="block text-[10px] uppercase tracking-widest text-parchment-dim">Card ID Kamu</span>
        <span className="font-mono text-2xl font-extrabold tracking-wider text-brass-bright drop-shadow-[0_0_10px_rgba(228,201,137,0.5)] sm:text-3xl">
          {cardId}
        </span>
      </div>
    </div>
  );
}
