import type { ReactNode } from "react";
import { Medal, Trophy, Palette, ClipboardList, Clapperboard, Flame, TrendingUp, Search, Coins } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";

const CATEGORY_STYLES = {
  sky: "bg-sky-500/15 text-sky-300 border border-sky-500/20",
  violet: "bg-violet-500/15 text-violet-300 border border-violet-500/20",
  orange: "bg-orange-500/15 text-orange-300 border border-orange-500/20",
  emerald: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/20",
} as const;

function CategoryCard({
  tag,
  color,
  Icon,
  title,
  children,
}: {
  tag: string;
  color: keyof typeof CATEGORY_STYLES;
  Icon: typeof Flame;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-lg border border-ink-line bg-ink/60 p-5 transition-shadow hover:shadow-panel">
      <span className={`mb-2 inline-block rounded px-2 py-1 text-xs font-bold ${CATEGORY_STYLES[color]}`}>{tag}</span>
      <h4 className="mb-2 flex items-center gap-1.5 font-bold text-parchment">
        <Icon className="h-4 w-4 text-brass-bright" /> {title}
      </h4>
      <p className="text-sm text-parchment-muted">{children}</p>
    </div>
  );
}

export default function ProyekEventSection() {
  return (
    <section className="container max-w-5xl border-t border-ink-line py-16">
      <Reveal variant="up" className="mb-10">
        <h2 className="mb-6 font-display text-3xl font-semibold text-parchment md:text-4xl">Our Proyek Event</h2>
        <p className="prose-charter">
          Ini adalah kumpulan event tetap ACAUMAS yang akan terus dilaksanakan sesuai jadwalnya. Event-event ini
          dibuat untuk memberikan apresiasi kepada member, mendorong member supaya lebih aktif, sekaligus menjadi
          wadah buat member menunjukkan kemampuan mereka. Jadi bukan sekadar event yang muncul sekali lalu selesai.
          Beberapa event di bawah ini akan terus berjalan secara weekly, monthly, atau sesuai kebutuhan event
          tertentu.
        </p>
      </Reveal>

      <Reveal variant="up" delay={100} className="w-full">
        <Accordion
          defaultOpen
          title={
            <span className="flex items-center gap-2">
              <Medal className="h-5 w-5 text-brass-bright" /> Best of Week
            </span>
          }
        >
          <p>
            Best of Week adalah event mingguan yang dibuat untuk memberikan penghargaan kepada member yang aktif
            dalam membuat dan meng-upload konten di media sosial. Event ini khusus untuk Member Gen dan setiap
            minggunya akan dipilih 4 member sebagai penerima penghargaan.
          </p>
          <p>
            <strong className="inline-flex items-center gap-1.5 text-parchment">
              <ClipboardList className="h-4 w-4" /> Cara Penilaian:
            </strong>{" "}
            Setiap minggu, Admin akan melakukan pengecekan satu per satu terhadap akun media sosial Member Gen.
            Member yang dalam satu minggu mampu meng-upload sekitar 5–7 VT akan masuk ke dalam kandidat Best of
            Week. Tapi jumlah upload bukan satu-satunya hal yang dilihat. Admin juga akan melihat apakah member
            tersebut memang aktif, konsisten, dan konten yang dibuat masih sesuai dengan aktivitas yang diharapkan.
            Jadi bukan berarti spam upload = auto menang. Jumlah konten bisa membuat Lu masuk kandidat, tetapi
            hasil akhirnya tetap berdasarkan penilaian Admin. Setelah semua kandidat dikumpulkan, Admin akan
            menentukan 4 member terbaik untuk mendapatkan Best of Week.
          </p>
        </Accordion>

        <Accordion
          title={
            <span className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-brass-bright" /> Best of Month
            </span>
          }
        >
          <p>
            Best of Month adalah event bulanan yang memberikan penghargaan kepada member berdasarkan beberapa
            kategori tertentu. Setiap kategori memiliki rules masing-masing, jadi konten yang ingin masuk penilaian
            harus mengikuti ketentuan yang sudah dibuat.
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <CategoryCard tag="#ausxcr" color="sky" Icon={Clapperboard} title="Best of Editing">
              Untuk member yang membuat konten editing. Wajib menggunakan hashtag di caption. Tidak berlaku untuk
              konten Jedag Jedug, Mixtaper, dan jenis konten sejenisnya — tujuannya supaya penilaian lebih fokus
              kepada kemampuan editing yang memang ingin diapresiasi, bukan sekadar efek atau style tertentu.
              Contohnya AMV, anime edit, motion edit, atau jenis editing lain yang sesuai kategori.
            </CategoryCard>
            <CategoryCard tag="#ausxart" color="violet" Icon={Palette} title="Best of Designer">
              Khusus untuk member yang membuat karya design/graphic. Wajib menggunakan hashtag di caption. Admin
              akan melihat karya yang masuk melalui hashtag tersebut dan memilih design yang dianggap paling bagus
              atau paling menonjol — bukan cuma seberapa ramai postingannya, tapi juga hasil design, konsep,
              layout, kreativitas, dan overall look karya tersebut.
            </CategoryCard>
            <CategoryCard tag="#margaaus" color="orange" Icon={Flame} title="Most Viral">
              Diberikan kepada konten dengan performa/engagement tertinggi. Wajib menggunakan hashtag di caption.
              Tapi Admin gak sekadar ambil angka views tertinggi — dari beberapa konten viral, dilihat mana yang
              konsepnya paling bagus. Misalnya Content A 100K views tapi konsepnya biasa, Content B 70K views tapi
              eksekusinya jauh lebih menarik — Content B tetap bisa jadi pilihan.
            </CategoryCard>
            <CategoryCard tag="MEMBER GEN" color="emerald" Icon={TrendingUp} title="Most Consistent">
              Khusus untuk Member Gen. Diberikan kepada member yang mampu menjaga aktivitas dan konsistensi membuat
              content selama satu bulan — bukan cuma 1-2 upload bagus, tapi konsistensi rutin (misal upload rutin
              tiap minggu) dibanding upload banyak dalam sehari lalu menghilang berminggu-minggu.
            </CategoryCard>
          </div>

          <p>
            <strong className="inline-flex items-center gap-1.5 text-parchment">
              <Search className="h-4 w-4" /> Cara Judgement Best of Month:
            </strong>{" "}
            Untuk menentukan kandidat, Admin akan mengecek masing-masing hashtag kategori yang sudah ditentukan.
            Dari sana, Admin akan memilih beberapa content yang dianggap menarik, bagus, atau memenuhi kriteria
            untuk masuk sebagai kandidat. Setelah kandidat terkumpul, Admin akan melakukan penilaian dan menentukan
            siapa yang paling cocok mendapatkan penghargaan di masing-masing kategori. Jadi penggunaan hashtag
            memang wajib — kalau content gak menggunakan hashtag yang sudah ditentukan, Admin bisa saja gak
            menemukan content tersebut saat melakukan pengecekan.
          </p>
          <p className="rounded-lg border border-brass/20 bg-brass/10 p-4 text-parchment">
            <strong className="inline-flex items-center gap-1.5 text-brass-bright">
              <Coins className="h-4 w-4" /> Hadiah:
            </strong>{" "}
            Setiap pemenang Best of Month akan mendapatkan hadiah sekitar Rp50.000–Rp100.000, tergantung kebijakan
            dan prizepool yang tersedia pada periode tersebut. Hadiah ini diberikan sebagai bentuk apresiasi atas
            usaha dan kontribusi member selama satu bulan.
          </p>
        </Accordion>

        <Accordion
          title={
            <span className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-brass-bright" /> Tugas Design Graphic
            </span>
          }
        >
          <p>
            Tugas Design Graphic adalah tugas yang diberikan kepada para designer ACAUMAS secara mingguan, bulanan,
            atau untuk event tertentu — tempat bagi para designer untuk membantu kebutuhan visual ACAUMAS sekaligus
            menunjukkan skill mereka dalam membuat design.
          </p>
          <p>
            Dalam tugas ini, designer akan mendapatkan instruksi dari Admin atau pihak yang bertanggung jawab
            mengenai: aturan design, style design, tema design, ukuran/format, isi yang harus dimasukkan, dan
            deadline pengerjaan. Designer diharapkan mengikuti brief yang sudah diberikan supaya hasil akhirnya
            sesuai dengan kebutuhan event atau project.
          </p>
          <p>
            Misalnya Admin memberikan brief untuk membuat poster event dengan tema tertentu, style tertentu, dan
            deadline hari Jumat — designer mengerjakan berdasarkan brief tersebut dan mengumpulkannya sebelum
            deadline. Tapi tugas ini bukan berarti designer gak boleh berkreasi — selama masih sesuai brief,
            designer tetap bisa memasukkan kreativitas dan style masing-masing. Basically, Admin memberikan
            direction, designer yang mengolahnya menjadi hasil visual yang menarik.
          </p>
        </Accordion>
      </Reveal>
    </section>
  );
}
