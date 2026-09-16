import { Sparkles } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import TermsCarousel from "./TermsCarousel";
import { SYARAT_MEMBER_GEN } from "@/data/partnershipTerms";

export default function MemberGenSection() {
  return (
    <section className="container max-w-5xl border-t border-ink-line py-16">
      <Reveal variant="up" className="mb-10">
        <h2 className="mb-6 font-display text-3xl font-semibold text-parchment md:text-4xl">Member Gen</h2>
        <div className="prose-charter space-y-4">
          <p>
            Member Gen adalah member khusus yang dipilih atau bersedia untuk menjadi salah satu wajah dari ACAUMAS.
            Mereka bukan sekadar member yang aktif ngobrol, tapi juga diharapkan bisa menjadi contoh dan gambaran
            bagaimana seorang member ACAUMAS seharusnya bersikap.
          </p>
          <p>
            Member Gen bisa dibilang sebagai salah satu role model bagi member public. Artinya, perilaku mereka
            akan lebih diperhatikan karena mereka membawa nama ACAUMAS ketika berinteraksi dengan member lain
            maupun di luar komunitas. Karena itu, Member Gen juga punya tanggung jawab lebih. Kalau melakukan
            kesalahan, mereka diharapkan berani mengakui dan bertanggung jawab, bukan malah menghilang atau
            melempar kesalahan ke orang lain.
          </p>
          <p>
            Selain itu, Member Gen juga diharapkan bisa membantu Admin dalam mengembangkan komunitas, baik dengan
            memberikan ide, membantu kegiatan, menjaga suasana komunitas, maupun sekadar menjadi member yang bisa
            diandalkan ketika dibutuhkan.
          </p>
          <p>
            Jadi intinya, Member Gen bukan berarti member yang paling hebat atau paling tinggi derajatnya. Mereka
            lebih ke member yang diberikan kepercayaan untuk menjadi contoh, tetap aktif, dan ikut membantu ACAUMAS
            berkembang.
          </p>
        </div>
      </Reveal>

      <TermsCarousel eyebrow="Syarat" items={SYARAT_MEMBER_GEN} />

      <Reveal variant="up" className="mt-12">
        <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-parchment">
          <Sparkles className="h-5 w-5 text-brass-bright" /> Inti dari Member Gen
        </h3>
        <div className="prose-charter mb-10 space-y-4">
          <p>
            Member Gen pada dasarnya adalah member yang mendapatkan kepercayaan lebih untuk menjadi salah satu
            wajah ACAUMAS. Karena itu, yang dicari bukan cuma member yang terkenal, punya banyak chat, atau sudah
            lama bergabung. Yang lebih penting adalah attitude, konsistensi, tanggung jawab, dan kemauan untuk
            membantu komunitas.
          </p>
          <p>
            Kalau Lu menjadi Member Gen, bukan berarti Lu harus selalu sempurna. Namanya juga manusia, pasti pernah
            salah. Yang penting ketika melakukan kesalahan, berani acknowledge, memperbaiki, dan belajar dari
            kesalahan tersebut.
          </p>
        </div>

        <div className="flex flex-col items-stretch justify-center gap-6 text-center md:flex-row md:text-left">
          <div className="flex-1 rounded-xl border border-ink-line bg-ink-soft p-6">
            <h4 className="mb-2 font-bold text-parchment">Member Public</h4>
            <p className="text-sm text-parchment-muted">Member umum yang ikut menjadi bagian dari ACAUMAS.</p>
          </div>
          <div className="z-10 -my-2 flex items-center justify-center md:-mx-2 md:my-0">
            <span className="rounded-full bg-garnet px-3 py-1 text-sm font-bold text-parchment">VS</span>
          </div>
          <div className="flex-1 rounded-xl border border-ink-line bg-ink-soft p-6">
            <h4 className="mb-2 font-bold text-parchment">Member Gen</h4>
            <p className="text-sm text-parchment-muted">
              Member yang dipercaya untuk menjadi salah satu wajah, contoh, dan support system bagi perkembangan
              aues.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
