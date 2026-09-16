import { Coins } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import TermsCarousel from "./TermsCarousel";
import { SYARAT_DONATUR, BENEFIT_DONATUR } from "@/data/partnershipTerms";

export default function DonaturSection() {
  return (
    <section className="container max-w-5xl py-16">
      <Reveal variant="up" className="mb-10">
        <h2 className="mb-6 flex items-center gap-3 font-display text-3xl font-semibold text-parchment md:text-4xl">
          <Coins className="h-8 w-8 text-brass-bright" strokeWidth={1.7} /> Donatur
        </h2>
        <div className="prose-charter space-y-4">
          <p>
            Donatur adalah seseorang yang rela memberikan sebagian uangnya untuk support Acaumas, terutama buat
            kebutuhan yang memang penting di komunitas. Contohnya seperti Dana Event, Sponsorship, hadiah event,
            atau kebutuhan komunitas lainnya.
          </p>
          <p>
            Tapi donatur bukan berarti harus tiap saat keluar duit atau harus punya uang banyak. Intinya adalah mau
            support ketika memang dibutuhkan dan sesuai kemampuan sendiri. Jangan sampai gara-gara mau bantu
            komunitas, kebutuhan pribadi malah jadi berantakan. Basically, support secukupnya dan tetap realistis.
          </p>
        </div>
      </Reveal>

      <TermsCarousel eyebrow="Syarat" items={SYARAT_DONATUR} />
      <TermsCarousel eyebrow="Benefit" items={BENEFIT_DONATUR} />

      <Reveal variant="up" className="mt-12 rounded-2xl border-l-4 border-brass bg-ink-soft/60 p-6">
        <p className="leading-relaxed text-parchment-muted">
          Jadi kurang lebih, Donatur itu adalah orang yang mau support, punya kemampuan buat membantu, dan bisa
          menggunakan pengaruhnya dengan bijak. Bukan sekadar siapa yang paling banyak ngasih duit, tapi siapa yang
          bisa ikut membantu Acaumas dengan cara yang sehat dan realistis.
        </p>
      </Reveal>
    </section>
  );
}
