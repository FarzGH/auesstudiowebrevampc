import ScrambleText from "@/components/ui/ScrambleText";
import InteractiveParagraph from "@/components/ui/InteractiveParagraph";
import ProtectedImage from "@/components/ui/ProtectedImage";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/data/siteConfig";

export default function AboutIntro() {
  return (
    <section id="tentang" className="container flex flex-col items-center gap-12 py-16 md:flex-row md:py-24">
      <div className="space-y-6 md:w-3/5">
        <div className="flex h-[140px] w-full items-center sm:h-[120px] md:h-[150px]">
          <h1 className="w-full font-display text-4xl font-semibold leading-tight text-parchment md:text-6xl">
            <ScrambleText phrases={["Academy Uma Sovereign", "Lux Corunuma", "Sovereignty and Unity"]} />
          </h1>
        </div>

        <div className="prose-charter text-base md:text-lg">
          <InteractiveParagraph>
            <strong className="text-parchment">Academy Uma Sovereign</strong> (<strong className="text-parchment">A'ues</strong>) adalah
            komunitas pop kultur tempat berkumpulnya para pecinta anime, game, dan karya kreatif lainnya, dengan
            Uma Musume sebagai ikonitas utama kami. Kami terbuka untuk siapa saja—tanpa batasan fandom. Di A'ueS,
            kamu bisa saling bertukar informasi, ngobrolin hobi favorit, dan ngikutin perkembangan industri
            hiburan dalam ruang yang santai dan inklusif.
          </InteractiveParagraph>
        </div>

        <Reveal variant="up" className="flex flex-wrap gap-4 pt-2">
          <a
            href={SITE.socials.tiktok}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-parchment px-6 py-3 font-semibold text-ink transition-transform hover:scale-105"
          >
            TikTok Official
          </a>
          <a
            href={SITE.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-brass/40 bg-brass/10 px-6 py-3 font-semibold text-brass-bright transition-transform hover:scale-105 hover:bg-brass/20"
          >
            Instagram Official
          </a>
        </Reveal>
      </div>

      <Reveal variant="scale" className="md:w-2/5">
        <ProtectedImage
          src="https://i.imgur.com/89LolxE.png"
          alt="Uma Musume Group"
          className="rounded-3xl border border-ink-line shadow-panel"
        />
      </Reveal>
    </section>
  );
}
