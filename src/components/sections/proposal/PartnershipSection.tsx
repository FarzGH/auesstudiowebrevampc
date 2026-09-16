import { Handshake, Crown, CalendarDays, Coffee, Coins, Search } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import TermsCarousel from "./TermsCarousel";
import {
  BENEFIT_PRINCIPAL,
  SYARAT_EVENT_ASSOCIATE,
  BENEFIT_EVENT_ASSOCIATE,
  BENEFIT_CASUAL_ALLY,
} from "@/data/partnershipTerms";

export default function PartnershipSection() {
  return (
    <section className="container max-w-5xl border-t border-ink-line py-16">
      <Reveal variant="up" className="mb-12">
        <h2 className="mb-6 flex items-center gap-3 font-display text-3xl font-semibold text-parchment md:text-4xl">
          <Handshake className="h-8 w-8 text-brass-bright" strokeWidth={1.7} /> Partnership
        </h2>
        <div className="prose-charter space-y-4">
          <p>
            Partnership adalah kerja sama antara Acaumas dengan Komunitas, Unit, atau Organisasi lain yang ingin
            saling support dan berkembang bersama.
          </p>
          <p>
            Kerja sama ini gak harus selalu soal uang. Bisa berupa bantuan dalam event, media promotion, SDM,
            collaboration antar member, atau bentuk support lainnya. Intinya, kedua pihak sama-sama punya sesuatu
            yang bisa diberikan dan sama-sama mendapatkan value dari kerja sama tersebut.
          </p>
          <p className="font-semibold text-parchment">Di Acaumas, Partnership dibagi menjadi 3 tipe:</p>
        </div>
      </Reveal>

      {/* 1. Principal Sovereign */}
      <div className="mb-16">
        <Reveal variant="up">
          <h3 className="mb-4 flex items-center gap-2 font-display text-2xl font-semibold text-brass-bright">
            <Crown className="h-6 w-6" strokeWidth={1.8} /> 1. Principal Sovereign
          </h3>
          <p className="prose-charter mb-6">
            Principal Sovereign adalah Partnership dengan status Utama/Official di Acaumas. Tipe ini ditujukan untuk
            kerja sama jangka panjang, jadi bukan cuma kerja sama untuk satu event lalu selesai. Partner dengan
            status ini akan mendapatkan kesempatan untuk ikut terlibat dalam berbagai event Acaumas dan akan
            mendapatkan mention sebagai partner di event-event yang memang termasuk dalam kerja sama. Bentuk
            mention-nya bisa berupa penerapan logo, nama komunitas, credit, atau bentuk branding lainnya, tergantung
            kesepakatan antara kedua pihak. Tipe ini lebih cocok buat komunitas yang sudah cukup besar, aktif, dan
            punya SDM yang cukup banyak, terutama komunitas yang memang ingin membangun hubungan jangka panjang
            dengan Acaumas.
          </p>
        </Reveal>

        <Reveal variant="up" className="mb-4 flex items-center gap-2 text-sm font-black uppercase tracking-widest text-garnet-bright">
          <Coins className="h-4 w-4" /> Road to Principal Sovereign
        </Reveal>
        <div className="mb-8 flex flex-col items-stretch justify-center gap-6 lg:flex-row">
          <Reveal variant="up" className="flex-1 rounded-xl border border-ink-line bg-ink-soft p-6 transition-shadow hover:shadow-panel">
            <h4 className="mb-2 text-lg font-bold text-parchment">Membayar</h4>
            <p className="text-sm text-parchment-muted">
              Komunitas yang ingin menjadi Principal Sovereign dapat mengajukan Partnership dengan memberikan biaya
              sekitar Rp50.000–Rp100.000. Untuk pengajuan PT awal, komunitas akan diberikan diskon 50% dari harga
              normal. Jika nantinya ingin diperpanjang atau lanjut PT untuk periode berikutnya, maka akan
              menggunakan harga normal. Nominalnya gak selalu sama karena bisa disesuaikan dengan kondisi dan skala
              komunitas. Jadi angka tersebut lebih sebagai range, bukan harga mutlak. Contohnya, komunitas kecil
              tapi aktif mungkin cukup dengan nominal yang lebih rendah, sedangkan komunitas yang lebih besar dan
              punya kerja sama lebih luas bisa menggunakan nominal yang berbeda setelah dibicarakan. Yang paling
              penting adalah kesepakatan kedua pihak, bukan sekadar bayar lalu otomatis mendapatkan semua benefit.
            </p>
          </Reveal>
          <div className="z-10 -my-2 flex items-center justify-center lg:-mx-2 lg:my-0">
            <span className="rounded-full bg-ink-line px-3 py-1 text-xs font-bold text-parchment-muted">ATAU</span>
          </div>
          <Reveal variant="up" delay={100} className="flex-1 rounded-xl border border-ink-line bg-ink-soft p-6 transition-shadow hover:shadow-panel">
            <h4 className="mb-2 text-lg font-bold text-parchment">Dibayar</h4>
            <p className="text-sm text-parchment-muted">
              Jalur kedua justru kebalikannya. Acaumas yang mengajak komunitas tersebut untuk menjadi Principal
              Sovereign. Dalam kondisi ini, Acaumas akan memberikan pembayaran kepada komunitas tersebut sesuai
              dengan kemampuan dan budget yang kami punya. Biasanya jalur ini digunakan ketika kami memang melihat
              suatu komunitas punya value atau SDM yang cocok untuk membantu perkembangan Acaumas. Jadi bukan
              berarti semua komunitas bisa langsung mendapatkan jalur ini. Kami akan melihat kondisi dan kebutuhan
              terlebih dahulu.
            </p>
          </Reveal>
        </div>

        <TermsCarousel eyebrow="Benefit Principal Sovereign" items={BENEFIT_PRINCIPAL} />
      </div>

      {/* 2. Event Associate */}
      <div className="mb-16">
        <Reveal variant="up">
          <h3 className="mb-4 flex items-center gap-2 font-display text-2xl font-semibold text-garnet-bright">
            <CalendarDays className="h-6 w-6" strokeWidth={1.8} /> 2. Event Associate
          </h3>
          <p className="prose-charter mb-6">
            Event Associate adalah Partnership jangka pendek yang hanya berlaku untuk event tertentu dan biasanya
            selesai setelah event tersebut berakhir. Tipe ini gratis dan cocok untuk komunitas yang gak ingin
            menjalin Partnership jangka panjang, tetapi ingin ikut bekerja sama dengan Acaumas dalam event
            tertentu. Misalnya ada komunitas yang cuma tertarik ikut support event tournament Acaumas bulan ini.
            Mereka gak perlu menjadi partner tetap. Cukup menjadi Event Associate untuk event tersebut. Jadi
            konsepnya lebih simple dan event-based.
          </p>
        </Reveal>
        <TermsCarousel eyebrow="Syarat Event Associate" items={SYARAT_EVENT_ASSOCIATE} />
        <TermsCarousel eyebrow="Benefit Event Associate" items={BENEFIT_EVENT_ASSOCIATE} />
      </div>

      {/* 3. Casual Ally */}
      <div className="mb-16">
        <Reveal variant="up">
          <h3 className="mb-4 flex items-center gap-2 font-display text-2xl font-semibold text-steel-bright">
            <Coffee className="h-6 w-6" strokeWidth={1.8} /> 3. Casual Ally
          </h3>
          <p className="prose-charter mb-6">
            Casual Ally adalah tipe Partnership yang paling simple dan santai. Tipe ini hanya berlaku dalam waktu
            yang sangat pendek, yaitu sekitar 3–4 minggu. Berbeda dari dua tipe sebelumnya, Casual Ally tidak
            memiliki syarat khusus dan tidak memiliki benefit yang berhubungan dengan event tertentu. Fokus
            utamanya cuma satu, yaitu Collaboration. Tipe ini cocok untuk komunitas kecil atau komunitas yang baru
            ingin mencoba connect dengan Acaumas tanpa harus langsung masuk ke Partnership yang lebih serius.
            Misalnya ada komunitas kecil yang ingin membuat project bersama member Acaumas selama beberapa minggu.
            Mereka bisa menggunakan sistem Casual Ally tanpa harus memenuhi berbagai persyaratan seperti Partnership
            lainnya.
          </p>
        </Reveal>
        <TermsCarousel eyebrow="Benefit Casual Ally" items={BENEFIT_CASUAL_ALLY} />
      </div>

      {/* Ringkasan */}
      <Reveal variant="up" className="mt-16">
        <span className="mb-6 flex items-center gap-2 text-sm font-black uppercase tracking-widest text-brass-bright">
          <Search className="h-4 w-4" /> Singkatnya
        </span>
        <div className="flex flex-col gap-6">
          <div className="border-l-4 border-brass py-1 pl-4">
            <p className="text-parchment-muted">
              <strong className="text-brass-bright">Principal Sovereign</strong> &rarr; Partnership utama, Official,
              dan jangka panjang. Cocok untuk komunitas yang ingin kerja sama lebih serius.
            </p>
          </div>
          <div className="border-l-4 border-garnet py-1 pl-4">
            <p className="text-parchment-muted">
              <strong className="text-garnet-bright">Event Associate</strong> &rarr; Partnership gratis dan jangka
              pendek untuk event tertentu. Cocok buat komunitas yang cuma ingin ikut support atau terlibat dalam
              event tertentu.
            </p>
          </div>
          <div className="border-l-4 border-steel py-1 pl-4">
            <p className="text-parchment-muted">
              <strong className="text-steel-bright">Casual Ally</strong> &rarr; Partnership paling santai dengan
              durasi sekitar 3–4 minggu. Fokusnya hanya untuk collaboration dan cocok untuk komunitas kecil yang
              ingin mulai connect dengan Acaumas.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
