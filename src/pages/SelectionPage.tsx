import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import GridDistortion from "@/components/ui/GridDistortion";
import { useSelectionForm } from "./selection/useSelectionForm";
import IdentitySection from "./selection/IdentitySection";
import PersonalSection from "./selection/PersonalSection";
import PreferenceSection from "./selection/PreferenceSection";
import SubmitButton from "./selection/SubmitButton";
import SuccessCard from "./selection/SuccessCard";
import { SITE } from "@/data/siteConfig";

export default function SelectionPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const form = useSelectionForm();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-between overflow-x-hidden bg-ink p-4 font-sans text-parchment antialiased selection:bg-garnet-bright selection:text-ink sm:p-6 md:p-8">
      <div
        className={`fixed inset-0 z-0 h-screen w-screen pointer-events-auto transition-opacity duration-1000 ease-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ filter: "blur(10px)", WebkitFilter: "blur(10px)", transform: "scale(1.05)" }}
      >
        <GridDistortion imageSrc="https://i.imgur.com/hpYMac5.png" grid={15} mouse={0.1} strength={0.15} relaxation={0.9} />
      </div>

      <div className="pointer-events-none fixed inset-0 z-[1] bg-ink/80 backdrop-brightness-75" />
      <div className="pointer-events-none fixed left-[-10%] top-[-10%] z-[2] h-[40vw] w-[40vw] rounded-full bg-garnet/15 blur-[120px]" />
      <div className="pointer-events-none fixed bottom-[-10%] right-[-10%] z-[2] h-[40vw] w-[40vw] rounded-full bg-brass/10 blur-[120px]" />

      <header className="relative z-10 flex w-full max-w-6xl items-center justify-between py-4">
        <a
          href="/join"
          className="group inline-flex items-center gap-2 rounded-full border border-parchment/20 bg-ink/40 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-parchment-muted shadow-lg backdrop-blur-md transition-all duration-300 hover:border-brass/60 hover:bg-ink/70 hover:text-parchment active:scale-95"
        >
          <ArrowLeft className="h-3.5 w-3.5 text-brass-bright transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Kembali ke Syarat</span>
        </a>
      </header>

      <main className="relative z-10 my-auto flex w-full max-w-6xl flex-col items-center py-6">
        <div className="flex w-full flex-col gap-8">
          <div className="space-y-2 text-center">
            <h1 className="bg-gradient-to-r from-parchment via-brass-bright to-parchment bg-clip-text font-display text-3xl font-semibold uppercase tracking-wider text-transparent drop-shadow-[0_0_20px_rgba(244,236,221,0.2)] sm:text-4xl md:text-5xl">
              Formulir Pendaftaran
            </h1>
            <p className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wide text-parchment-muted sm:text-sm">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-garnet-bright" />
              {SITE.fullName}
            </p>
          </div>

          {form.successCardId ? (
            <SuccessCard cardId={form.successCardId} />
          ) : (
            <form onSubmit={form.handleSubmit} className="flex w-full flex-col gap-8">
              {form.errorMessage && (
                <div className="rounded-2xl border border-garnet-bright/60 bg-garnet-deep/60 p-4 text-center text-xs font-bold text-parchment shadow-[0_0_20px_rgba(161,39,64,0.3)] backdrop-blur-md">
                  ⚠️ {form.errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
                <IdentitySection form={form} />
                <PersonalSection form={form} />
                <PreferenceSection form={form} />
              </div>

              <SubmitButton form={form} />
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
