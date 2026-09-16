import Aurora from "@/components/ui/Aurora";
import SplashCursor from "@/components/ui/SplashCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GalleryHero from "@/components/sections/gallery/GalleryHero";
import ChampionSection from "@/components/sections/gallery/ChampionSection";
import ComingSoonPanel from "@/components/sections/gallery/ComingSoonPanel";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function GalleryPage() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink text-parchment selection:bg-garnet-bright selection:text-ink">
      {!reducedMotion && (
        <>
          <div className="fixed inset-0 z-0 h-[100dvh] w-full pointer-events-none">
            <Aurora colorStops={["#7A1F35", "#C9A768", "#15110D"]} amplitude={1.2} blend={0.6} speed={0.4} />
          </div>
          <div className="pointer-events-none fixed inset-0 z-30 mix-blend-screen">
            <SplashCursor />
          </div>
        </>
      )}

      <div className="relative z-40">
        <Navbar />
        <GalleryHero />
        <ChampionSection />
        <ComingSoonPanel
          title="Our Design"
          eyebrow="Karya Kreatif Komunitas"
          description="Koleksi desain grafis terbaik sedang disiapkan."
          accent="brass"
        />
        <ComingSoonPanel
          title="Our Editing"
          eyebrow="Video Kreatif & AMV"
          description="Kompilasi video editing paling estetik segera hadir."
          accent="garnet"
        />
        <Footer />
      </div>
    </div>
  );
}
