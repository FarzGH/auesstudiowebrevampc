import FormSectionCard from "./FormSectionCard";
import FormInput from "./FormInput";
import type { UseSelectionFormReturn } from "./useSelectionForm";

export default function IdentitySection({ form }: { form: UseSelectionFormReturn }) {
  const { formData, handleChange } = form;

  return (
    <FormSectionCard number="01." title="Identitas Utamamu">
      <FormInput
        label="Nama Panggilan"
        required
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Contoh: Budi"
      />
      <FormInput
        label="Email (Gmail)"
        required
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="nama@gmail.com"
      />
      <FormInput
        label="Nomor WhatsApp"
        required
        type="text"
        name="wa_number"
        value={formData.wa_number}
        onChange={handleChange}
        placeholder="081234567890"
      />
    </FormSectionCard>
  );
}
