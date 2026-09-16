import { Loader2, Rocket } from "lucide-react";
import type { UseSelectionFormReturn } from "./useSelectionForm";

export default function SubmitButton({ form }: { form: UseSelectionFormReturn }) {
  const { loading, isFormValid, isUnderage, isMandatoryValid, isPrefPartial, isPrefMandatoryForCategory, formData } = form;

  const stateClass = isUnderage
    ? "bg-garnet text-parchment border-garnet-bright/60 shadow-glow cursor-not-allowed"
    : isFormValid && !loading
    ? "bg-gradient-to-r from-garnet via-garnet-bright to-brass hover:brightness-110 border-brass-bright/40 text-parchment shadow-glow active:scale-[0.99] cursor-pointer"
    : isPrefPartial
    ? "bg-amber-950/80 text-amber-300 border-amber-500/50 cursor-not-allowed opacity-90"
    : "bg-ink-line text-parchment-dim border-ink-line cursor-not-allowed opacity-60";

  return (
    <button
      type="submit"
      disabled={loading || !isFormValid || isUnderage}
      className={`group relative w-full overflow-hidden rounded-2xl border py-4 text-sm font-extrabold uppercase tracking-widest transition-all duration-300 ${stateClass}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Memproses Pendaftaran...</span>
          </>
        ) : isUnderage ? (
          <span>DITOLAK!!</span>
        ) : !isMandatoryValid ? (
          <span>Lengkapi Data Wajib Dahulu (*)</span>
        ) : isPrefPartial ? (
          <span>{isPrefMandatoryForCategory ? `Preferensi ${formData.category} Wajib Diisi!` : "Penuhin Jawaban Opsional!"}</span>
        ) : (
          <>
            <span>Kirim Pendaftaran</span>
            <Rocket className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </span>
    </button>
  );
}
