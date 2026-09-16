import { SITE } from "@/data/siteConfig";

interface PageLoaderProps {
  visible: boolean;
  fadingOut: boolean;
}

export default function PageLoader({ visible, fadingOut }: PageLoaderProps) {
  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink transition-opacity duration-700 ${
        fadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <img src={SITE.logo} alt="" className="mb-5 h-16 animate-pulse drop-shadow-2xl" />
      <div className="h-[3px] w-36 overflow-hidden rounded-full bg-ink-line">
        <div className="h-full w-full origin-left rounded-full bg-garnet-bright animate-progress" />
      </div>
    </div>
  );
}
