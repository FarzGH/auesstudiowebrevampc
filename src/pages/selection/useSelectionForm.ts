import { useEffect, useRef, useState } from "react";
import { INDONESIA_PROVINCES, MALAYSIA_STATES } from "@/data/regions";

export type CategoryType = "Anime Lovers" | "Pop Culture" | "Entertainment Enjoyer" | "Readers" | "Film Enthusiasts" | "Gamers";

export interface SelectionFormData {
  name: string;
  email: string;
  wa_number: string;
  age: string;
  gender: string;
  country: string;
  region: string;
  category: CategoryType;
  pref_fields: Record<string, string[]>;
  hobby: string;
}

// Helper untuk mendapatkan prefix hobi yang dikunci
const getHobbyPrefix = (category: string, country: string) => {
  if (category === "Readers") return country === "Malaysia" ? "Membaca Buku, " : "Pembaca Buku, ";
  if (category === "Film Enthusiasts") return country === "Malaysia" ? "Menonton Filem, " : "Menonton Film, ";
  if (category === "Gamers") return country === "Malaysia" ? "Bermain Game, " : "Main Game, ";
  return "";
};

export function useSelectionForm() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successCardId, setSuccessCardId] = useState("");

  const [regionSearch, setRegionSearch] = useState("");
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const regionDropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<SelectionFormData>({
    name: "",
    email: "",
    wa_number: "",
    age: "",
    gender: "Cowo",
    country: "Indonesia",
    region: "",
    category: "Anime Lovers",
    pref_fields: {
      "Anime Kesukaan": [""],
      "Waifu/Husbu": [""],
    },
    hobby: "",
  });

  // Tutup dropdown wilayah saat klik di luar area-nya
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (regionDropdownRef.current && !regionDropdownRef.current.contains(event.target as Node)) {
        setIsRegionOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 1. Cek kelengkapan data wajib (Section 1 & 2)
  const ageNum = parseInt(formData.age, 10);
  const isUnderage = !isNaN(ageNum) && ageNum < 15;
  const isMandatoryValid = Boolean(
    formData.name.trim() &&
      formData.email.trim() &&
      formData.wa_number.trim() &&
      formData.age.trim() &&
      ageNum >= 15 &&
      formData.gender &&
      formData.country &&
      formData.region
  );

  // 2. Cek kategori yang memaksa preferensi wajib diisi
  const mandatoryPrefCategories: CategoryType[] = ["Gamers", "Film Enthusiasts", "Readers"];
  const isPrefMandatoryForCategory = mandatoryPrefCategories.includes(formData.category);

  // 3. Cek kelengkapan section preferensi
  const requiredPrefix = getHobbyPrefix(formData.category, formData.country);
  const userHobbyContent = formData.hobby.startsWith(requiredPrefix)
    ? formData.hobby.slice(requiredPrefix.length).trim()
    : formData.hobby.trim();

  const allPrefValues = Object.values(formData.pref_fields).flat();
  const filledPrefCount = allPrefValues.filter((val) => val.trim() !== "").length;
  const hasHobbyContent = userHobbyContent !== "";

  const totalPrefInputs = allPrefValues.length;
  const isPrefEmpty = filledPrefCount === 0 && !hasHobbyContent;
  const isPrefFullyFilled = filledPrefCount === totalPrefInputs && hasHobbyContent;

  const isPrefPartial = isPrefMandatoryForCategory ? !isPrefFullyFilled : !isPrefEmpty && !isPrefFullyFilled;

  const isFormValid = isMandatoryValid && (isPrefMandatoryForCategory ? isPrefFullyFilled : isPrefEmpty || isPrefFullyFilled);

  const handleCategoryChange = (newCategory: CategoryType, country = formData.country, gender = formData.gender) => {
    let newFields: Record<string, string[]> = {};
    const autoHobby = getHobbyPrefix(newCategory, country);
    const waifuLabel = gender === "Cewe" ? "Husbu" : gender === "Cowo" ? "Waifu" : "Waifu/Husbu";

    switch (newCategory) {
      case "Anime Lovers":
        newFields = { "Anime Kesukaan": [""], [waifuLabel]: [""] };
        break;
      case "Pop Culture":
        newFields = { "Negara Favorite": [""], "Artist Favorite": [""], "Culture Favorite": [""] };
        break;
      case "Entertainment Enjoyer":
        newFields = { "Idol Group Favorite": [""], "Artist Favorite": [""] };
        break;
      case "Readers":
        newFields = { "Buku Favorite": [""], "Author Favorite": [""], "Genre Favorite": [""] };
        break;
      case "Film Enthusiasts":
        newFields = { "Favorite Movie": [""], "Favorite Actor/Actress": [""], "Genre Favorite": [""] };
        break;
      case "Gamers":
        newFields = { "Game Favorite": [""], "Team Esport Favorite": [""] };
        break;
    }

    setFormData((prev) => ({ ...prev, category: newCategory, pref_fields: newFields, hobby: autoHobby }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === "hobby") {
      const prefix = getHobbyPrefix(formData.category, formData.country);
      if (prefix && !value.startsWith(prefix)) {
        setFormData((prev) => ({ ...prev, hobby: prefix }));
        return;
      }
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenderChange = (val: string) => {
    setFormData((prev) => {
      const updated = { ...prev, gender: val };
      if (prev.category === "Anime Lovers") {
        const waifuLabel = val === "Cewe" ? "Husbu" : val === "Cowo" ? "Waifu" : "Waifu/Husbu";
        const oldVal = prev.pref_fields["Waifu"] || prev.pref_fields["Husbu"] || prev.pref_fields["Waifu/Husbu"] || [""];
        updated.pref_fields = {
          "Anime Kesukaan": prev.pref_fields["Anime Kesukaan"] || [""],
          [waifuLabel]: oldVal,
        };
      }
      return updated;
    });
  };

  const handleCountryChange = (val: string) => {
    setFormData((prev) => {
      const updated = { ...prev, country: val, region: "" };
      const prefix = getHobbyPrefix(prev.category, val);
      if (prefix) {
        const oldPrefix = getHobbyPrefix(prev.category, prev.country);
        const userEnteredText = prev.hobby.startsWith(oldPrefix) ? prev.hobby.slice(oldPrefix.length) : "";
        updated.hobby = prefix + userEnteredText;
      }
      return updated;
    });
    setRegionSearch("");
  };

  const selectRegion = (region: string) => {
    setFormData((prev) => ({ ...prev, region }));
    setIsRegionOpen(false);
    setRegionSearch("");
  };

  const handleDynamicChange = (fieldKey: string, index: number, value: string) => {
    setFormData((prev) => {
      const currentList = [...(prev.pref_fields[fieldKey] || [""])];
      currentList[index] = value;
      return { ...prev, pref_fields: { ...prev.pref_fields, [fieldKey]: currentList } };
    });
  };

  const addDynamicField = (fieldKey: string) => {
    setFormData((prev) => {
      const currentList = [...(prev.pref_fields[fieldKey] || [""])];
      currentList.push("");
      return { ...prev, pref_fields: { ...prev.pref_fields, [fieldKey]: currentList } };
    });
  };

  const removeDynamicField = (fieldKey: string, index: number) => {
    setFormData((prev) => {
      const currentList = [...(prev.pref_fields[fieldKey] || [""])];
      if (currentList.length <= 1) return prev;
      currentList.splice(index, 1);
      return { ...prev, pref_fields: { ...prev.pref_fields, [fieldKey]: currentList } };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (isUnderage) {
      setErrorMessage("Pendaftaran ditolak karena batasan usia minimal.");
      return;
    }

    if (!isFormValid) {
      if (isPrefMandatoryForCategory && !isPrefFullyFilled) {
        setErrorMessage(`Kategori ${formData.category} mewajibkan seluruh preferensi terisi!`);
      } else if (isPrefPartial) {
        setErrorMessage("Harap penuhi semua bidang jawaban opsional jika ingin mengisinya!");
      } else {
        setErrorMessage("Harap lengkapi semua data wajib terlebih dahulu!");
      }
      return;
    }

    setLoading(true);

    try {
      const cleanPrefFields: Record<string, string[]> = {};
      Object.keys(formData.pref_fields).forEach((key) => {
        cleanPrefFields[key] = formData.pref_fields[key].filter((x) => x.trim() !== "");
      });

      const payload = { ...formData, pref_fields: cleanPrefFields };

      const response = await fetch("/api/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const responseText = await response.text();
      let result;
      try {
        result = JSON.parse(responseText);
      } catch {
        throw new Error("Terjadi kesalahan format dari server.");
      }

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Terjadi kesalahan saat mendaftar.");
      }

      setSuccessCardId(result.card_id);
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Gagal terhubung ke server.");
    } finally {
      setLoading(false);
    }
  };

  const regionList = formData.country === "Malaysia" ? MALAYSIA_STATES : INDONESIA_PROVINCES;
  const filteredRegions = regionList.filter((r) => r.toLowerCase().includes(regionSearch.toLowerCase()));

  return {
    formData,
    loading,
    errorMessage,
    successCardId,
    regionSearch,
    setRegionSearch,
    isRegionOpen,
    setIsRegionOpen,
    regionDropdownRef,
    ageNum,
    isUnderage,
    isMandatoryValid,
    isPrefMandatoryForCategory,
    isPrefPartial,
    isFormValid,
    filteredRegions,
    handleCategoryChange,
    handleChange,
    handleGenderChange,
    handleCountryChange,
    selectRegion,
    handleDynamicChange,
    addDynamicField,
    removeDynamicField,
    handleSubmit,
  };
}

export type UseSelectionFormReturn = ReturnType<typeof useSelectionForm>;
