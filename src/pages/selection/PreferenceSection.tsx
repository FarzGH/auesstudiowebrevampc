import { Plus, X } from "lucide-react";
import FormSectionCard from "./FormSectionCard";
import type { CategoryType, UseSelectionFormReturn } from "./useSelectionForm";

const CATEGORIES: CategoryType[] = ["Anime Lovers", "Pop Culture", "Entertainment Enjoyer", "Readers", "Film Enthusiasts", "Gamers"];

export default function PreferenceSection({ form }: { form: UseSelectionFormReturn }) {
  const {
    formData,
    isPrefMandatoryForCategory,
    handleCategoryChange,
    handleDynamicChange,
    addDynamicField,
    removeDynamicField,
    handleChange,
  } = form;

  return (
    <FormSectionCard number="03." title={`Preferensi ${isPrefMandatoryForCategory ? "(Wajib)" : "(Opsional)"}`} className="relative z-10">
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-parchment-muted">Pilih Kategori Fandom</label>
        <select
          value={formData.category}
          onChange={(e) => handleCategoryChange(e.target.value as CategoryType)}
          className="w-full cursor-pointer rounded-xl border border-brass/40 bg-ink-raised px-4 py-2.5 text-sm font-semibold text-brass-bright focus:border-brass-bright focus:outline-none"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="flex max-h-[320px] flex-col gap-4 overflow-y-auto pr-1">
        {Object.keys(formData.pref_fields).map((fieldKey) => (
          <div key={fieldKey}>
            <label className="mb-1.5 block text-xs font-semibold text-parchment-muted">{fieldKey}</label>
            {formData.pref_fields[fieldKey].map((item, index) => (
              <div key={index} className="mb-2 flex gap-2">
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleDynamicChange(fieldKey, index, e.target.value)}
                  placeholder={fieldKey === "Genre Favorite" ? `Masukkan ${fieldKey} ${index + 1}` : `Masukkan ${fieldKey} ke-${index + 1}`}
                  className="w-full rounded-xl border border-parchment/20 bg-ink/50 px-4 py-2 text-sm text-parchment placeholder:text-parchment-dim focus:border-brass-bright focus:outline-none"
                />
                {formData.pref_fields[fieldKey].length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeDynamicField(fieldKey, index)}
                    className="rounded-xl border border-garnet/40 bg-garnet/20 px-3 text-xs font-bold text-garnet-bright transition-all hover:bg-garnet hover:text-parchment"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            ))}
            {fieldKey !== "Genre Favorite" && (
              <button
                type="button"
                onClick={() => addDynamicField(fieldKey)}
                className="mt-1 flex items-center gap-1 rounded-xl border border-parchment/20 bg-parchment/10 px-3.5 py-1.5 text-xs font-semibold text-parchment transition-all hover:border-brass-bright/50 hover:bg-parchment/20 active:scale-95"
              >
                <Plus className="h-3 w-3" /> Tambah {fieldKey}
              </button>
            )}
          </div>
        ))}

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-parchment-muted">Hobi</label>
          <input
            type="text"
            name="hobby"
            value={formData.hobby}
            onChange={handleChange}
            placeholder="Desain, Coding, dll."
            className="w-full rounded-xl border border-parchment/20 bg-ink/50 px-4 py-2.5 text-sm text-parchment placeholder:text-parchment-dim focus:border-brass-bright focus:outline-none"
          />
        </div>
      </div>
    </FormSectionCard>
  );
}
