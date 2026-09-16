import { useState } from "react";

const MISI_ITEMS = [
  { num: "01.", title: "Stabilitas Internal dan Harmoni Kolektif", desc: "Membangun ekosistem komunikasi yang selaras dan tertib bagi seluruh elemen komunitas, guna menjamin terciptanya lingkungan yang stabil di bawah naungan otoritas tertinggi." },
  { num: "02.", title: "Manifestasi Persaudaraan dalam Naungan Takhta", desc: "Menyelenggarakan wadah kekeluargaan yang berlandaskan loyalitas, menjadikannya rumah bagi para penggiat media dan konten kreator dari berbagai latar belakang dengan tetap menjunjung tinggi rasa hormat." },
  { num: "03.", title: "Supremasi Otoritas dan Sakralitas Sistem", desc: "Menjaga kemurnian tata kelola organisasi dengan menempatkan kedudukan Admin dan sistem sebagai pilar utama yang tidak tergoyahkan, demi menjamin keberlangsungan mandat kepemimpinan." },
  { num: "04.", title: "Representasi Eksternal yang Eksklusif", desc: "Menampilkan citra komunitas di dunia luar dengan standar profesionalisme, mencerminkan martabat kerajaan dalam setiap interaksi lintas platform dan media." },
  { num: "05.", title: "Keteguhan Disiplin dan Penegakan Tradisi", desc: "Menerapkan pengawasan ketat terhadap tata tertib baik dalam ruang internal maupun ranah publik, guna memastikan setiap anggota bertindak selaras dengan marwah organisasi." },
  { num: "06.", title: "Legitimasi Hierarki Monarki yang Absolut", desc: "Menjalankan roda organisasi melalui sistem kerajaan yang kaku dan tersentralisasi, di mana kebijakan bersifat satu arah demi menjaga kesatuan visi tanpa ruang bagi perpecahan." },
  { num: "07.", title: "Ketentuan Keabadian Entitas", desc: "Menetapkan eksistensi Academy Uma Sovereign sebagai entitas yang bersifat permanen dan tidak dapat diganggu gugat, serta melarang segala bentuk upaya yang merujuk pada pembubaran atau pelemahan struktur komunitas." },
];

export default function VisionMission() {
  const [showWho, setShowWho] = useState(false);
  const [expandVisi, setExpandVisi] = useState(false);
  const [expandMisi, setExpandMisi] = useState(false);

  return (
    <>
      {/* Who We Are */}
      <section className="border-y border-ink-line bg-ink-soft py-20">
        <div className="container max-w-4xl text-center">
          <h2
            onClick={() => setShowWho(!showWho)}
            className={`cursor-pointer font-display font-semibold uppercase tracking-wide transition-all duration-700 ease-out ${
              showWho ? "mb-8 text-2xl text-parchment" : "text-4xl text-brass-bright hover:scale-105 md:text-5xl"
            }`}
          >
            Siapa Kami?
          </h2>
          <div className={`grid transition-[grid-template-rows] duration-700 ease-in-out ${showWho ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
            <div className="prose-charter mx-auto space-y-5 overflow-hidden px-2 text-left">
              <p>
                Sebuah komunitas yang besar butuh sistem manajemen yang rapi dan presisi. Oleh karena itu,{" "}
                <strong className="text-parchment">Academy Uma Sovereign</strong> menerapkan struktur kepengurusan
                yang jelas, mulai dari level dasar hingga tim inti. Pembagian peran ini dibuat bukan sekadar
                formalitas, melainkan bentuk tanggung jawab untuk menjaga kestabilan dan efisiensi koordinasi
                internal.
              </p>
              <p>
                Ketegasan dalam menegakkan aturan menjadi kunci kenyamanan bersama. Komunitas ini berjalan di atas
                prinsip <i>Ordered Liberty</i>—di mana setiap anggota memiliki kebebasan penuh untuk berekspresi
                dan berinteraksi, selama tetap selaras dengan hukum serta ketertiban umum. Selain itu, A'ueS juga
                memegang prinsip <i>Absolute Neutrality</i> dengan tidak memihak pada konflik luar yang tidak
                relevan, demi menjaga komunitas ini tetap mandiri, objektif, dan kondusif bagi semua orang.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-10 h-px w-20 bg-brass/40" />
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="overflow-hidden bg-ink py-16">
        <div className="container flex max-w-5xl flex-col gap-8">
          {/* Visi */}
          <div
            onClick={() => setExpandVisi(!expandVisi)}
            className="group relative w-full cursor-pointer overflow-hidden rounded-[2rem] border border-ink-line shadow-panel"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
              style={{ backgroundImage: "url('https://i.imgur.com/XhVUXzG.png')" }}
            />
            <div className="absolute inset-0 bg-ink/60 transition-colors duration-500 group-hover:bg-ink/50" />

            <div className="relative z-10 flex w-full items-center justify-center py-10">
              <h3 className="font-display text-4xl tracking-widest text-parchment drop-shadow-2xl md:text-6xl">VISI</h3>
            </div>

            <div
              className={`relative z-10 grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                expandVisi ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="mx-auto max-w-4xl px-8 pb-12 text-center">
                  <p className="font-display text-lg italic leading-relaxed text-parchment/95 md:text-xl">
                    "Menjadi pusat inkubasi bagi para kreator Uma Musume dan kreator manapun, Mewujudkan kedaulatan
                    absolut Academy Uma Sovereign sebagai episentrum peradaban komunikasi dan kreativitas media
                    yang agung, di mana harmoni tercipta melalui keteguhan hierarki dan integritas tatanan kerajaan
                    yang abadi."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Misi */}
          <div
            onClick={() => setExpandMisi(!expandMisi)}
            className="group relative w-full cursor-pointer overflow-hidden rounded-[2rem] border border-ink-line shadow-panel"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
              style={{ backgroundImage: "url('https://i.imgur.com/yRLe2Ie.png')" }}
            />
            <div className="absolute inset-0 bg-ink/70 transition-colors duration-500 group-hover:bg-ink/60" />

            <div className="relative z-10 flex w-full items-center justify-center border-t border-parchment/10 py-10">
              <h3 className="font-display text-4xl tracking-widest text-parchment drop-shadow-2xl md:text-6xl">MISI</h3>
            </div>

            <div
              className={`relative z-10 grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                expandMisi ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="mx-auto max-w-4xl space-y-4 px-4 pb-12 text-left md:px-10">
                  {MISI_ITEMS.map((item) => (
                    <div key={item.num} className="rounded-2xl border border-parchment/15 bg-parchment/5 p-6 backdrop-blur-md transition-colors hover:bg-parchment/10">
                      <h4 className="text-lg font-bold leading-tight text-parchment drop-shadow-md">
                        <span className="mr-2 text-brass-bright">{item.num}</span>
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-parchment-muted">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
