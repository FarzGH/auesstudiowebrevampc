import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import GridDistortion from "@/components/ui/GridDistortion";
import { RulesCard } from "@/components/sections/join/RulesCard";
import { MembersCounter } from "@/components/sections/join/MembersCounter";

export default function JoinPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Delay tipis agar shader WebGL siap sebelum animasi entrance jalan
    const timer = setTimeout(() => setIsLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-between overflow-x-hidden p-4 font-sans sm:p-6">
      {/* Background GridDistortion + blur, fixed penuh layar */}
      <div
        className={`fixed inset-0 z-0 h-screen w-screen pointer-events-auto transition-opacity duration-1000 ease-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ filter: "blur(10px)", WebkitFilter: "blur(10px)", transform: "scale(1.05)" }}
      >
        <GridDistortion imageSrc="https://i.imgur.com/hpYMac5.png" grid={15} mouse={0.1} strength={0.15} relaxation={0.9} />
      </div>
      <div className="fixed inset-0 z-0 bg-ink/30" />

      <header className="relative z-10 flex w-full max-w-xl items-center justify-between py-2">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 rounded-full border border-ink/20 bg-parchment/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-ink/80 shadow-sm backdrop-blur-md transition-all hover:bg-parchment/90 hover:text-ink"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Main Page
        </a>
      </header>

      <main className="relative z-10 my-auto flex w-full flex-col items-center gap-6 py-6">
        <RulesCard isLoaded={isLoaded} />
        <MembersCounter />
      </main>

      <footer className="text-shadow-panel relative z-10 select-none py-2 text-center text-[11px] font-semibold text-parchment/90">
        © {new Date().getFullYear()} AuesStudio. All rights reserved.
      </footer>
    </div>
  );
}
