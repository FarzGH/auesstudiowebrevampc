import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/data/siteConfig";

function normalizePath(path: string): string {
  const stripped = path.replace(/\.html$/, "").replace(/\/$/, "");
  return stripped === "" ? "/" : stripped.replace(/^\//, "");
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState<string | null>(null);

  useEffect(() => {
    setCurrentPath(normalizePath(window.location.pathname));
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = isMenuOpen ? "hidden" : "";
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isActive = (href: string) => currentPath !== null && normalizePath(href) === currentPath;

  return (
    <nav className="sticky top-0 z-50 border-b border-ink-line/80 bg-ink/75 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <a href="/" className="group flex items-center gap-3">
          <img
            src={SITE.logo}
            alt={SITE.shortName}
            className="h-10 transition-transform duration-500 group-hover:scale-110"
          />
          <span className="font-display text-xl font-semibold tracking-wide text-parchment">
            {SITE.shortName}
            <span className="text-garnet-bright">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-medium text-parchment-muted lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-active={isActive(link.href)}
              className="link-underline transition-colors hover:text-parchment data-[active=true]:text-brass-bright"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={SITE.whatsappCommunity}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-garnet px-5 py-2.5 text-sm font-semibold text-parchment shadow-glow transition-colors hover:bg-garnet-bright lg:inline-block"
          >
            Bergabung
          </a>

          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Buka menu"
            className="text-parchment lg:hidden"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </div>

      {/* Backdrop mobile */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 z-[90] h-screen w-screen bg-ink/80 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel menu mobile */}
      <div
        className={`fixed bottom-0 right-0 top-0 z-[100] w-[80%] max-w-sm transform border-l border-ink-line bg-ink-soft shadow-panel transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col p-8">
          <div className="mb-10 flex items-center justify-between">
            <span className="font-display text-xl font-semibold text-parchment">{SITE.shortName}.</span>
            <button onClick={() => setIsMenuOpen(false)} aria-label="Tutup menu" className="text-parchment-muted hover:text-parchment">
              <X className="h-7 w-7" />
            </button>
          </div>

          <div className="flex flex-grow flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                data-active={isActive(link.href)}
                className="border-b border-ink-line py-3.5 text-lg font-medium text-parchment-muted transition-colors hover:text-brass-bright data-[active=true]:text-brass-bright"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={SITE.whatsappCommunity}
            target="_blank"
            rel="noreferrer"
            className="mt-6 block w-full rounded-2xl bg-garnet px-6 py-4 text-center font-semibold text-parchment shadow-glow transition-transform hover:scale-[1.02]"
          >
            Bergabung Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
}
