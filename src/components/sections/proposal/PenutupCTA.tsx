import { Mail } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/data/siteConfig";

export default function PenutupCTA() {
  return (
    <section className="w-full bg-gradient-to-br from-garnet-deep via-ink to-ink px-4 py-16 text-center">
      <Reveal variant="up" className="mx-auto max-w-2xl">
        <h2 className="mb-4 font-display text-3xl font-semibold text-parchment">Tertarik Kerja Sama dengan Kami?</h2>
        <p className="mb-8 leading-relaxed text-parchment-muted">
          Kami selalu terbuka untuk berkolaborasi dengan individu maupun komunitas yang memiliki semangat yang
          sama. Mari ciptakan sesuatu yang luar biasa bersama Acaumas.
        </p>
        <a
          href={`mailto:${SITE.contactEmail}`}
          className="inline-flex items-center gap-2 rounded-full bg-parchment px-8 py-3 font-bold text-ink shadow-lg transition-all duration-300 hover:scale-105 hover:bg-parchment/90"
        >
          <Mail className="h-4 w-4" /> Hubungi Kami
        </a>
      </Reveal>
    </section>
  );
}
