import FormSectionCard from "./FormSectionCard";
import FormInput from "./FormInput";
import PillSelect from "./PillSelect";
import RegionDropdown from "./RegionDropdown";
import type { UseSelectionFormReturn } from "./useSelectionForm";

const GENDER_OPTIONS = [
  { id: "Cowo", label: "Cowo ♂️" },
  { id: "Cewe", label: "Cewe ♀️" },
  { id: "Rahasia", label: "Rahasia 🔒" },
];

const COUNTRY_OPTIONS = [
  { id: "Indonesia", label: "Indonesia 🇮🇩" },
  { id: "Malaysia", label: "Malaysia 🇲🇾" },
];

export default function PersonalSection({ form }: { form: UseSelectionFormReturn }) {
  const { formData, handleChange, handleGenderChange, handleCountryChange, isUnderage } = form;

  return (
    <FormSectionCard number="02." title="Detail Personal" className="relative z-30">
      <FormInput
        label="Umur"
        required
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="17"
        invalid={isUnderage}
      />

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-parchment-muted">
          Gender <span className="text-brass-bright">*</span>
        </label>
        <PillSelect name="gender" options={GENDER_OPTIONS} value={formData.gender} onChange={handleGenderChange} columns={3} />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-parchment-muted">
          Negara <span className="text-brass-bright">*</span>
        </label>
        <PillSelect name="country" options={COUNTRY_OPTIONS} value={formData.country} onChange={handleCountryChange} columns={2} />
      </div>

      <RegionDropdown form={form} />
    </FormSectionCard>
  );
}
