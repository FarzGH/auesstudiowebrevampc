import { ChevronDown } from "lucide-react";
import type { UseSelectionFormReturn } from "./useSelectionForm";

export default function RegionDropdown({ form }: { form: UseSelectionFormReturn }) {
  const { formData, regionDropdownRef, isRegionOpen, setIsRegionOpen, regionSearch, setRegionSearch, filteredRegions, selectRegion } = form;

  const label = formData.country === "Malaysia" ? "Negeri" : "Provinsi";

  return (
    <div className="relative" ref={regionDropdownRef}>
      <label className="mb-1.5 block text-xs font-semibold text-parchment-muted">
        {label} <span className="text-brass-bright">*</span>
      </label>
      <button
        type="button"
        onClick={() => setIsRegionOpen(!isRegionOpen)}
        className="flex w-full items-center justify-between rounded-xl border border-parchment/20 bg-ink/50 px-4 py-2.5 text-left text-sm text-parchment transition-all duration-300 focus:border-brass-bright focus:outline-none"
      >
        <span className={formData.region ? "font-medium text-parchment" : "text-parchment-dim"}>
          {formData.region || "(klik untuk memilih asal mu)"}
        </span>
        <ChevronDown className={`h-4 w-4 text-parchment-dim transition-transform ${isRegionOpen ? "rotate-180" : ""}`} />
      </button>

      {isRegionOpen && (
        <div className="absolute left-0 top-full z-50 mt-2 w-full overflow-hidden rounded-xl border border-parchment/20 bg-ink-raised/95 p-2 shadow-panel backdrop-blur-2xl">
          <input
            type="text"
            value={regionSearch}
            onChange={(e) => setRegionSearch(e.target.value)}
            placeholder={`Cari ${label}...`}
            className="mb-2 w-full rounded-lg border border-parchment/10 bg-ink/60 px-3 py-2 text-xs text-parchment placeholder:text-parchment-dim focus:outline-none"
          />
          <div className="max-h-48 space-y-1 overflow-y-auto">
            {filteredRegions.length > 0 ? (
              filteredRegions.map((reg) => (
                <button
                  key={reg}
                  type="button"
                  onClick={() => selectRegion(reg)}
                  className={`w-full rounded-lg px-3 py-2 text-left text-xs transition-colors ${
                    formData.region === reg ? "bg-brass-bright font-bold text-ink" : "text-parchment-muted hover:bg-parchment/10"
                  }`}
                >
                  {reg}
                </button>
              ))
            ) : (
              <div className="py-2 text-center text-xs text-parchment-dim">Tidak ditemukan</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
