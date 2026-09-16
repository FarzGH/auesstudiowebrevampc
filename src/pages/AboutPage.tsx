import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageLoader from "@/components/layout/PageLoader";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutIntro from "@/components/sections/about/AboutIntro";
import VisionMission from "@/components/sections/about/VisionMission";
import KeyPillars from "@/components/sections/about/KeyPillars";
import GroupsShowcase from "@/components/sections/about/GroupsShowcase";
import AdminCarousel from "@/components/sections/about/AdminCarousel";
import MediaPartners from "@/components/sections/about/MediaPartners";
import { usePreloadImages } from "@/hooks/usePreloadImages";

const PRELOAD_ASSETS = ["https://i.imgur.com/HzwcuLh.png", "https://i.imgur.com/89LolxE.png"];

export default function AboutPage() {
  const { loading, fadingOut } = usePreloadImages(PRELOAD_ASSETS);

  return (
    <div className="min-h-screen bg-ink">
      <PageLoader visible={loading} fadingOut={fadingOut} />
      <div className={`transition-opacity duration-700 ${loading && !fadingOut ? "opacity-0" : "opacity-100"}`}>
        <Navbar />
        <AboutHero />
        <AboutIntro />
        <VisionMission />
        <KeyPillars />
        <GroupsShowcase />
        <AdminCarousel />
        <MediaPartners />
        <Footer />
      </div>
    </div>
  );
}
