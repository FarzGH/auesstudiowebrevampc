import { useState, useEffect, useMemo } from "react";
import { Search } from "lucide-react";
import { CONSTITUTION_DATA } from "@/data/constitutionData";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ArticleAccordion from "@/components/sections/constitution/ArticleAccordion";
import SearchResultCard from "@/components/sections/constitution/SearchResultCard";

export default function ConstitutionPage() {
  const [activeTab, setActiveTab] = useState<string>("kode-1");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedPasal, setExpandedPasal] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Navigasi via hash & deep link
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;

      for (const kode of CONSTITUTION_DATA) {
        for (const pasal of kode.pasal) {
          for (const aturan of pasal.aturan) {
            const hasMatch = aturan.bagian.some((b) => b.id === hash);
            if (hasMatch || aturan.id === hash || pasal.id === hash) {
              setActiveTab(kode.id);
              setExpandedPasal((prev) => ({ ...prev, [pasal.id]: true }));
              setTimeout(() => {
                const el = document.getElementById(hash);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
              }, 150);
              return;
            }
          }
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const togglePasal = (pasalId: string) => {
    setExpandedPasal((prev) => ({ ...prev, [pasalId]: !prev[pasalId] }));
  };

  const copyAnchor = (id: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filter data berdasarkan query pencarian
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return CONSTITUTION_DATA;

    const query = searchQuery.toLowerCase();
    return CONSTITUTION_DATA.map((kode) => {
      const matchedPasal = kode.pasal
        .map((pasal) => {
          const matchedAturan = pasal.aturan
            .map((aturan) => {
              const matchedBagian = aturan.bagian.filter(
                (b) => b.teks.toLowerCase().includes(query) || (b.judul && b.judul.toLowerCase().includes(query))
              );
              if (matchedBagian.length > 0 || aturan.judul.toLowerCase().includes(query)) {
                return { ...aturan, bagian: matchedBagian.length > 0 ? matchedBagian : aturan.bagian };
              }
              return null;
            })
            .filter(Boolean);

          if (matchedAturan.length > 0 || pasal.judul.toLowerCase().includes(query)) {
            return { ...pasal, aturan: matchedAturan as typeof pasal.aturan };
          }
          return null;
        })
        .filter(Boolean);

      return { ...kode, pasal: matchedPasal as typeof kode.pasal };
    });
  }, [searchQuery]);

  const activeKodeData = filteredData.find((k) => k.id === activeTab);

  return (
    <div className="relative flex min-h-screen w-full max-w-full flex-col overflow-x-hidden bg-ink font-sans text-parchment selection:bg-garnet-bright selection:text-ink">
      <Navbar />

      <main className="mx-auto w-full max-w-5xl flex-grow overflow-x-hidden px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-10 border-b border-ink-line pb-8 text-center">
          <div className="seal-label mb-4">Buku Pedoman Resmi Seluruh Sivitas & Otorita</div>
          <h1 className="mb-3 break-words font-display text-2xl font-semibold tracking-tight text-parchment sm:text-4xl">
            Regulasi Kode Etik & Tata Kelola Organisasi
          </h1>
          <p className="mx-auto max-w-3xl break-words text-sm leading-relaxed text-parchment-muted sm:text-base">
            Academy Uma Sovereign (Marga A'ues / Acaumas)
          </p>
          <div className="prose-charter mx-auto mt-4 max-w-2xl rounded-xl border border-ink-line bg-ink-soft/60 p-4 text-xs sm:text-sm">
            Dokumen ini memuat ketetapan hukum, norma etika, hak, kewajiban, serta tata kelola kelembagaan Marga
            A'ues. Seluruh ketentuan disusun secara terstruktur guna menjaga keharmonisan internal, melindungi
            kedaulatan kepemimpinan, dan menegakkan standar keamanan komunitas.
          </div>
        </header>

        {/* Search */}
        <div className="relative mx-auto mb-8 w-full max-w-xl">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari kata kunci aturan, pasal, atau sanksi..."
            className="w-full rounded-xl border border-ink-line bg-ink-soft px-4 py-3 pl-11 text-sm text-parchment shadow-inner placeholder:text-parchment-dim focus:border-garnet-bright focus:outline-none focus:ring-1 focus:ring-garnet-bright"
          />
          <Search className="absolute left-3.5 top-3.5 h-5 w-5 text-parchment-dim" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-3 rounded-md bg-ink-line px-2 py-1 text-xs text-parchment-muted hover:text-parchment"
            >
              Reset
            </button>
          )}
        </div>

        {/* Tabs */}
        {!searchQuery && (
          <div className="mb-8 flex w-full justify-center overflow-hidden">
            <div className="no-scrollbar flex w-full max-w-full scroll-smooth overflow-x-auto rounded-2xl border border-ink-line bg-ink-soft/90 p-1.5">
              <div className="mx-auto flex min-w-max space-x-1">
                {CONSTITUTION_DATA.map((kode) => {
                  const isActive = activeTab === kode.id;
                  return (
                    <button
                      key={kode.id}
                      onClick={() => setActiveTab(kode.id)}
                      className={`relative whitespace-nowrap rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-200 sm:px-5 sm:py-2.5 sm:text-sm ${
                        isActive ? "bg-garnet text-parchment shadow-lg shadow-garnet-deep/40" : "text-parchment-dim hover:text-parchment-muted"
                      }`}
                    >
                      {kode.judul.split("—")[0].trim()}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Konten */}
        {searchQuery ? (
          <div className="space-y-6">
            <p className="mb-2 break-words text-xs text-parchment-muted">
              Menampilkan hasil pencarian untuk: <span className="font-medium text-parchment">"{searchQuery}"</span>
            </p>
            {filteredData.every((k) => k.pasal.length === 0) ? (
              <div className="rounded-2xl border border-ink-line bg-ink-soft/40 py-12 text-center">
                <p className="text-sm text-parchment-muted">Tidak ada aturan yang cocok dengan kata kunci pencarian.</p>
              </div>
            ) : (
              filteredData.map((kode) =>
                kode.pasal.map((pasal) => <SearchResultCard key={pasal.id} pasal={pasal} kodeJudul={kode.judul} />)
              )
            )}
          </div>
        ) : (
          activeKodeData && (
            <div className="space-y-6">
              <div className="mb-6 text-center sm:text-left">
                <h2 className="break-words font-display text-xl font-semibold tracking-tight text-parchment sm:text-2xl">
                  {activeKodeData.judul}
                </h2>
                <p className="mt-1 break-words text-xs italic text-parchment-muted sm:text-sm">{activeKodeData.deskripsi}</p>
              </div>

              <div className="space-y-4">
                {activeKodeData.pasal.map((pasal) => (
                  <ArticleAccordion
                    key={pasal.id}
                    pasal={pasal}
                    isExpanded={expandedPasal[pasal.id] ?? false}
                    onToggle={togglePasal}
                    copiedId={copiedId}
                    onCopy={copyAnchor}
                  />
                ))}
              </div>
            </div>
          )
        )}
      </main>

      <Footer />
    </div>
  );
}
