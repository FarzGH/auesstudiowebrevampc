import { SITE, NAV_LINKS } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink-soft">
      <div className="container grid gap-10 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <a href="/" className="flex items-center gap-3">
            <img src={SITE.logo} alt={SITE.shortName} className="h-11" />
            <span className="font-display text-xl font-semibold text-parchment">{SITE.shortName}</span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-parchment-muted">
            Tempat berkumpulnya fans Uma Musume & Anime untuk berkreasi di dunia digital.
          </p>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-widest2 text-brass">Jelajah</span>
          <ul className="mt-4 space-y-2.5 text-sm text-parchment-muted">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-brass-bright">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-widest2 text-brass">Terhubung</span>
          <ul className="mt-4 space-y-2.5 text-sm text-parchment-muted">
            <li>
              <a href={SITE.socials.tiktok} target="_blank" rel="noreferrer" className="transition-colors hover:text-brass-bright">
                TikTok Official
              </a>
            </li>
            <li>
              <a href={SITE.socials.instagram} target="_blank" rel="noreferrer" className="transition-colors hover:text-brass-bright">
                Instagram Official
              </a>
            </li>
            <li>
              <a href={SITE.whatsappCommunity} target="_blank" rel="noreferrer" className="transition-colors hover:text-brass-bright">
                Grup WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-line py-6">
        <p className="text-center text-[11px] uppercase tracking-widest2 text-parchment-dim">
          &copy; {new Date().getFullYear()} <span className="text-parchment-muted">{SITE.shortName} Studio</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
