export interface Sanksi {
  poin: number;
  label: string;
}

export interface Bagian {
  id: string;
  judul?: string;
  teks: string;
  sanksi?: Sanksi;
}

export interface Aturan {
  id: string;
  judul: string;
  isCallout?: boolean;
  bagian: Bagian[];
}

export interface Pasal {
  id: string;
  judul: string;
  aturan: Aturan[];
}

export interface KodeRegulasi {
  id: string;
  judul: string;
  deskripsi: string;
  pasal: Pasal[];
}

export const CONSTITUTION_DATA: KodeRegulasi[] = [
  {
    id: "kode-1",
    judul: "KODE I — SIVITAS",
    deskripsi: "Aturan, Etika, dan Kewajiban Seluruh Anggota (Sivitas) Academy Uma Sovereign",
    pasal: [
      {
        id: "kode1-pasal1",
        judul: "Pasal 1 — Internal (Tata Tertib & Etika Marga A'ues)",
        aturan: [
          {
            id: "kode1-pasal1-aturan1",
            judul: "Aturan 1 — Etika, Attitudes, dan Keharmonisan Interpersonal",
            bagian: [
              {
                id: "k1-p1-a1-b1",
                judul: "Sikap Utama dan Toleransi",
                teks: "Setiap anggota wajib menjaga sikap, bertoleransi, saling menghormati, serta memelihara keharmonisan di dalam lingkungan grup obrolan.",
                sanksi: { poin: 5, label: "Ringan" }
              },
              {
                id: "k1-p1-a1-b2",
                judul: "Larangan SARA, Rasisme, dan Penghinaan",
                teks: "Dilarang keras melakukan tindakan yang berbau SARA, rasisme, menghina, saling menjatuhkan, atau memicu keributan antaranggota.",
                sanksi: { poin: 35, label: "Berat" }
              },
              {
                id: "k1-p1-a1-b3",
                judul: "Toxic Berlebihan, Lelucon Melampaui Batas, dan Menghitamkan Waifu",
                teks: "Dilarang melakukan perilaku toxic secara berlebihan, membuat lelucon (jokes) yang melampaui batas kenyamanan orang lain, atau sengaja melakukan aksi menghitamkan waifu milik anggota lain.",
                sanksi: { poin: 15, label: "Sedang" }
              },
              {
                id: "k1-p1-a1-b4",
                judul: "Pencampuran Masalah Personal",
                teks: "Dilarang keras membawa masalah pribadi atau perselisihan personal ke dalam ruang obrolan grup marga.",
                sanksi: { poin: 20, label: "Sedang" }
              }
            ]
          },
          {
            id: "kode1-pasal1-aturan2",
            judul: "Aturan 2 — Ketertiban Teknis dan Lalu Lintas Chat",
            bagian: [
              {
                id: "k1-p1-a2-b1",
                judul: "Spamming dan Penggunaan Bot Luar",
                teks: "Dilarang melakukan tindakan spamming dalam bentuk pesan teks, stiker, maupun panggilan suara (voice call), membawa bot dari luar yang tidak terverifikasi ke dalam grup, atau melakukan spam command pada sistem otomatisasi.",
                sanksi: { poin: 15, label: "Sedang" }
              },
              {
                id: "k1-p1-a2-b2",
                judul: "Pengiriman Media Sekali Lihat",
                teks: "Dilarang mengirimkan foto, video, atau media dengan fitur sekali lihat (View Once) di dalam grup obrolan penting.",
                sanksi: { poin: 10, label: "Ringan" }
              },
              {
                id: "k1-p1-a2-b3",
                judul: "Promosi Tanpa Izin",
                teks: "Dilarang mempromosikan grup lain, komunitas luar, marga luar, ataupun club Uma Musume lain dalam bentuk apa pun di dalam grup tanpa izin Otorita (tagsw juga termasuk).",
                sanksi: { poin: 30, label: "Berat" }
              }
            ]
          },
          {
            id: "kode1-pasal1-aturan3",
            judul: "Aturan 3 — WARNING ALERT (Pelanggaran Mutlak dan Pemecatan Langsung)",
            bagian: [
              {
                id: "k1-p1-a3-b1",
                judul: "Penyimpangan, NSFW, dan PMO",
                teks: "Dilarang keras membagikan, membahas, menyebarkan, atau mengirimkan materi yang berkaitan dengan NSFW, PMO, jomok, LGBT, serta penyimpangan seksual lainnya.",
                sanksi: { poin: 100, label: "Pemecatan Langsung / Banned Permanen" }
              },
              {
                id: "k1-p1-a3-b2",
                judul: "Judi Online dan Virtex",
                teks: "Dilarang keras mempromosikan Judi Online (Judol) atau mengirimkan Virtex (Virus Text / Crash Script) yang dapat merusak perangkat anggota lain.",
                sanksi: { poin: 100, label: "Pemecatan Langsung / Banned Permanen" }
              },
              {
                id: "k1-p1-a3-b3",
                judul: "Ghibah dan Pembongkaran Keburukan",
                teks: "Dilarang keras membahas, menyebarkan, atau membongkar keburukan dan aib orang lain di dalam lingkungan marga.",
                sanksi: { poin: 100, label: "Pemecatan Langsung / Banned Permanen" }
              }
            ]
          }
        ]
      },
      {
        id: "kode1-pasal2",
        judul: "Pasal 2 — Eksternal (Etika & Perilaku di Luar Marga A'ues)",
        aturan: [
          {
            id: "kode1-pasal2-aturan1",
            judul: "Aturan 1 — Reputasi dan Kerahasiaan Internal",
            bagian: [
              {
                id: "k1-p2-a1-b1",
                judul: "Menjaga Nama Baik Marga",
                teks: "Setiap anggota wajib menjaga nama baik, kehormatan, dan citra Marga A'ues di mana pun anggota berada.",
                sanksi: { poin: 5, label: "Ringan" }
              },
              {
                id: "k1-p2-a1-b2",
                judul: "Larangan Membocorkan Informasi Internal",
                teks: "Dilarang keras membocorkan rahasia internal A'ues (seperti informasi internal, tangkapan layar obrolan internal, strategi, perselisihan dalam, atau isi rapat Otorita) kepada pihak luar.",
                sanksi: { poin: 35, label: "Berat" }
              },
              {
                id: "k1-p2-a1-b3",
                judul: "Representasi dan Pengakuan Ilegal",
                teks: "Dilarang mengaku-ngaku sebagai perwakilan resmi, pengurus, atau juru bicara Marga A'ues saat berinteraksi dengan pihak luar tanpa izin resmi dari Otorita.",
                sanksi: { poin: 25, label: "Sedang" }
              }
            ]
          },
          {
            id: "kode1-pasal2-aturan2",
            judul: "Aturan 2 — Etika Interaksi dan Larangan Drama Komunitas",
            bagian: [
              {
                id: "k1-p2-a2-b1",
                judul: "Kenyamanan Komunitas Luar",
                teks: "Dilarang melakukan tindakan yang membuat komunitas luar merasa tidak nyaman, seperti membuat kerusuhan, melakukan spamming, atau bertindak tidak sopan di grup atau server luar.",
                sanksi: { poin: 15, label: "Sedang" }
              },
              {
                id: "k1-p2-a2-b2",
                judul: "Anti-Drama Antar-Komunitas",
                teks: "Dilarang keras memicu, meladeni, atau terlibat dalam drama dengan komunitas atau marga lain, terutama yang menyeret nama Marga A'ues ke dalamnya.",
                sanksi: { poin: 30, label: "Berat" }
              },
              {
                id: "k1-p2-a2-b3",
                judul: "Penghinaan Komunitas Luar atas Nama A'ues",
                teks: "Dilarang keras menghina, mencela, atau merendahkan marga maupun komunitas lain dengan mengatasnamakan atau membawa nama Marga A'ues.",
                sanksi: { poin: 35, label: "Berat" }
              }
            ]
          },
          {
            id: "kode1-pasal2-aturan3",
            judul: "Aturan 3 — Netralitas, Penanganan Konflik, dan Provokasi",
            bagian: [
              {
                id: "k1-p2-a3-b1",
                judul: "Larangan Menyeret Nama Marga dalam Konflik",
                teks: "Dilarang keras menyeret, melibatkan, atau menjadikan Marga A'ues sebagai tameng dalam konflik pribadi maupun konflik antar-komunitas.",
                sanksi: { poin: 40, label: "Berat" }
              },
              {
                id: "k1-p2-a3-b2",
                judul: "Anti-Raid dan Provokasi Massal",
                teks: "Dilarang melakukan atau mengajak anggota lain untuk melakukan aksi raid, serangan spam, atau serangan siber ke grup lain atas nama Marga A'ues.",
                sanksi: { poin: 50, label: "Berat / Skorsing Langsung" }
              },
              {
                id: "k1-p2-a3-b3",
                judul: "Adu Domba dan Tindakan Spionase",
                teks: "Dilarang melakukan tindakan adu domba, menjadi mata-mata (spy), atau merusak hubungan aliansi Marga A'ues dengan komunitas sahabat.",
                sanksi: { poin: 50, label: "Berat / Skorsing Langsung" }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "kode-2",
    judul: "KODE II — OTORITA",
    deskripsi: "Aturan, Etika, dan Tata Kelola Kepemimpinan Admin & OSIS Academy Uma Sovereign",
    pasal: [
      {
        id: "kode2-pasal1",
        judul: "Pasal 1 — Takhta & Kedaulatan Presiden (Tier 1)",
        aturan: [
          {
            id: "kode2-pasal1-aturan1",
            judul: "Aturan 1 — Kedaulatan Otonom Presiden",
            bagian: [
              {
                id: "k2-p1-a1-b1",
                teks: "Kedudukan Presiden (Tier 1) adalah kekuasaan tertinggi di Akademi. Takhta ini bersifat Abadi dan cuma bisa diatur, diubah, atau digantikan oleh Presiden itu sendiri."
              },
              {
                id: "k2-p1-a1-b2",
                judul: "Kesetaraan Presiden",
                teks: "Setiap Presiden punya kedudukan yang setara. Presiden TIDAK BISA mengatur, merombak, atau mencopot Presiden lainnya. Keputusan antar-Presiden harus lewat mufakat bersama."
              },
              {
                id: "k2-p1-a1-b3",
                judul: "Kekuasaan atas Founder",
                teks: "Dalam hal administrasi, operasional, dan arah kebijakan Akademi, Presiden BERHAK mengatur dan mengarahkan Founder (The Boundless). Founder wajib menghormati dan mematuhi keputusan administratif para Presiden."
              }
            ]
          },
          {
            id: "kode2-pasal1-aturan2",
            judul: "Aturan 2 — Mekanisme Lengser, Suksesi, dan Pengunduran Diri",
            bagian: [
              {
                id: "k2-p1-a2-b1",
                teks: "Penyerahan takhta hanya sah kalau Presiden yang bersangkutan menunjuk sendiri calon penggantinya dari Gen 0–2."
              },
              {
                id: "k2-p1-a2-b2",
                teks: "Kalau ada Presiden yang Moksa (inaktif total 14 hari tanpa kabar), takhta dianggap kosong dan penggantinya ditentukan lewat kesepakatan Presiden yang tersisa."
              },
              {
                id: "k2-p1-a2-b3",
                teks: "Hal ini juga akan berlaku apabila seluruh Presiden sisa melakukan voting penurunan takhta Presiden."
              },
              {
                id: "k2-p1-a2-b4",
                judul: "Aturan Khusus Pengunduran Diri Presiden",
                teks: "Presiden tidak dapat mengundurkan diri dengan alasan apa pun, sampai yang bersangkutan benar-benar terbukti secara sah tidak lagi berguna atau tidak lagi memberikan fungsi/kebermanfaatan bagi komunitas.",
                sanksi: { poin: 0, label: "Ketentuan Mutlak Takhta" }
              }
            ]
          }
        ]
      },
      {
        id: "kode2-pasal2",
        judul: "Pasal 2 — Silsilah Gen & Kualifikasi Jabatan",
        aturan: [
          {
            id: "kode2-pasal2-aturan1",
            judul: "Aturan 1 — Hak Silsilah OSIS (Gen 0, Gen 1, Gen 2)",
            bagian: [
              {
                id: "k2-p2-a1-b1",
                teks: "Gen 0, 1, dan 2 adalah kasta pengurus inti (Elite OSIS). Cuma mereka yang punya hak silsilah buat mengisi posisi dari Tier 1 (Presiden), Tier 1.5 (Sekjen), Tier 2 (Kepala Komite/Asrama), sampai Tier 3 (Staf OSIS)."
              },
              {
                id: "k2-p2-a1-b2",
                teks: "Penempatan jabatan untuk Gen 0–2 bersifat fleksibel. Siapa pun dari Gen 0, 1, atau 2 bisa saling mengisi posisi OSIS sesuai kebutuhan dan kesepakatan internal Otorita."
              }
            ]
          },
          {
            id: "kode2-pasal2-aturan2",
            judul: "Aturan 2 — Batas Wewenang Admin GC (Gen 3+)",
            bagian: [
              {
                id: "k2-p2-a2-b1",
                teks: "Admin Gen 3 ke atas (Gen 3+) adalah Admin Biasa / Moderator Lapangan. Mereka TIDAK PUNYA HAK untuk masuk ke dalam struktur OSIS atau ikut Sidang Otorita."
              },
              {
                id: "k2-p2-a2-b2",
                teks: "Tugas Gen 3+ murni menjaga ketertiban obrolan harian, ngabersihin spam, dan nanganin pelanggaran ringan member di Group Chat (GC).",
                sanksi: { poin: 40, label: "Penyerobotan Wewenang / Pencopotan Akses Admin" }
              }
            ]
          }
        ]
      },
      {
        id: "kode2-pasal3",
        judul: "Pasal 3 — Moral Admin, Anti-Abuse of Power, dan Evaluasi Kinerja",
        aturan: [
          {
            id: "kode2-pasal3-aturan1",
            judul: "Aturan 1 — Kekuasaan atas Sivitas & Larangan Tirani",
            bagian: [
              {
                id: "k2-p3-a1-b1",
                teks: "Admin berkuasa penuh atas Sivitas (member biasa). Tapi, Admin DILARANG KERAS menyalahgunakan jabatan buat hal-hal di luar kewajaran, maksa member demi kepentingan pribadi, atau berbuat seenaknya.",
                sanksi: { poin: 50, label: "Pencopotan Jabatan / Skorsing Langsung" }
              },
              {
                id: "k2-p3-a1-b2",
                judul: "Haram Ada Anak Emas",
                teks: "Aturan berlaku sama buat semua orang. Admin dilarang keras melindungi teman dekat (inner circle), ngasih keistimewaan tanpa dasar hukum, atau tebang pilih dalam menjatuhkan sanksi.",
                sanksi: { poin: 50, label: "Evaluasi Total & Pencopotan Wewenang" }
              }
            ]
          },
          {
            id: "kode2-pasal3-aturan2",
            judul: "Aturan 2 — Integritas & Kerahasiaan Otorita",
            bagian: [
              {
                id: "k2-p3-a2-b1",
                teks: "Admin wajib menjaga kerahasiaan dapur Otorita. Dilarang membocorkan hasil rapat internal, strategi, atau konflik antar-admin ke member biasa (Sivitas).",
                sanksi: { poin: 35, label: "Berat" }
              }
            ]
          },
          {
            id: "kode2-pasal3-aturan3",
            judul: "Aturan 3 — Pemantauan Kinerja & Evaluasi Admin Buruk",
            bagian: [
              {
                id: "k2-p3-a3-b1",
                judul: "Masa Pemantauan",
                teks: "Admin yang dianggap atau dinilai berkinerja/berperilaku buruk oleh komunitas akan ditempatkan di bawah pengawasan khusus dan diperhatikan secara lebih luas selama 1 (satu) bulan."
              },
              {
                id: "k2-p3-a3-b2",
                judul: "Sidang Khusus Rahasia",
                teks: "Ketika seorang Admin telah dinilai buruk selama 3 (tiga) bulan berturut-turut, Otorita wajib melakukan evaluasi menyeluruh serta menggelar Sidang Khusus Rahasia untuk menentukan tindakan tegas atau pemakzulan wewenang.",
                sanksi: { poin: 0, label: "Prosedur Evaluasi Rekam Jejak" }
              }
            ]
          }
        ]
      },
      {
        id: "kode2-pasal4",
        judul: "Pasal 4 — Pelaksanaan Tugas & Sidang Otorita",
        aturan: [
          {
            id: "kode2-pasal4-aturan1",
            judul: "Aturan 1 — Keaktifan Pengurus",
            bagian: [
              {
                id: "k2-p4-a1-b1",
                teks: "Pejabat OSIS atau Admin GC yang ngabur dari tugas tanpa kabar (ghosting) atau sengaja menelantarkan tanggung jawabnya bakal kena evaluasi dari Sekjen atau Presiden terkait.",
                sanksi: { poin: 20, label: "Sedang" }
              }
            ]
          },
          {
            id: "kode2-pasal4-aturan2",
            judul: "Aturan 2 — Sidang Otorita",
            bagian: [
              {
                id: "k2-p4-a2-b1",
                teks: "Sidang Otorita adalah forum khusus pengurus OSIS (Gen 0–2) buat menuntaskan masalah-masalah berat Akademi."
              },
              {
                id: "k2-p4-a2-b2",
                teks: "Keputusan yang sudah diketok di Sidang Otorita bersifat mutlak dan wajib ditaati oleh seluruh admin tanpa kecuali.",
                sanksi: { poin: 60, label: "Pembangkangan atas Putusan Resmi" }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "kode-3",
    judul: "KODE III — EKSTERNA",
    deskripsi: "Panduan Standar Keamanan Luar, Ruang Lingkup Konsekuensi, Sistem Partnership, dan Mediasi Akun Marga Acaumas",
    pasal: [
      {
        id: "kode3-pasal1",
        judul: "📌 Ruang Lingkup Penerapan, Konsekuensi, dan Keaktifan Anggota",
        aturan: [
          {
            id: "kode3-pasal1-aturan1",
            judul: "⚖️ Ketetapan Khusus: Ruang Lingkup Member Publik vs Member Gen",
            isCallout: true,
            bagian: [
              {
                id: "k3-p1-a1-b1",
                judul: "Ruang Lingkup Standar Keamanan Eksternal",
                teks: "Seluruh Standar Keamanan Eksternal (CN, Hashtag Atribut, kewajiban akun sekunder, dan pelaporan) HANYA BERLAKU UNTUK MEMBER GEN, BUKAN untuk Member Publik."
              },
              {
                id: "k3-p1-a1-b2",
                judul: "Diferensiasi Konsekuensi Sivitas-Eksternal",
                teks: "Member Publik TIDAK DIKENAKAN konsekuensi Sivitas-Eksternal secara umum, KECUALI melakukan pelanggaran fatal berupa: (a) Memicu atau terlibat Drama secara berlebihan; (b) Mencari perkara / memicu konflik berlebihan di luar; (c) Melakukan tindakan Rasisme / SARA yang berlebihan. Member Gen wajib menaati dan MENERIMA KONSEKUENSI penuh dari seluruh aturan Sivitas-Eksternal tanpa pengecualian."
              },
              {
                id: "k3-p1-a1-b3",
                judul: "Ketentuan Keaktifan & Sider",
                teks: "Member Publik diperbolehkan menjadi sider (pasif) di dalam grup. Member Gen DILARANG KERAS menjadi sider (wajib aktif berinteraksi, dengan syarat minimal aktif/online di grup publik ataupun di grup internal Gen)."
              }
            ]
          }
        ]
      },
      {
        id: "kode3-pasal2",
        judul: "🛡️ Standar Keamanan Eksternal (Khusus Member Gen)",
        aturan: [
          {
            id: "kode3-pasal2-aturan1",
            judul: "1. Identitas & Atribut Utama (Standar Pertama)",
            bagian: [
              {
                id: "k3-p2-a1-b1",
                judul: "Change Name (CN)",
                teks: "Setiap Member Gen wajib memasukkan Surname resmi Marga Acaumas pada nickname akun media utama. Pilihan CN: 皇主 | 아스 | 奥斯 | A'ues"
              },
              {
                id: "k3-p2-a1-b2",
                judul: "Hashtag Atribut",
                teks: "Wajib #margaaus | Pendukung: #academyumasovereign, #ausxcr, #ausxart, #uasxprjct"
              }
            ]
          },
          {
            id: "kode3-pasal2-aturan2",
            judul: "2. Pelaporan & Jaminan Proteksi (Standar Kedua)",
            bagian: [
              {
                id: "k3-p2-a2-b1",
                judul: "Pelaporan Member",
                teks: "Member wajib melapor ke Admin jika menemukan ada anggota lain yang melanggar aturan Sivitas-Eksternal di luar."
              },
              {
                id: "k3-p2-a2-b2",
                judul: "Jaminan Admin",
                teks: "Seluruh Admin berkomitmen menjaga dan melindungi member secara total dalam situasi konflik luar, selama member tidak melanggar aturan."
              }
            ]
          },
          {
            id: "kode3-pasal2-aturan3",
            judul: "3. Operasional Akun & Penanganan Masalah (Standar Ketiga)",
            bagian: [
              {
                id: "k3-p2-a3-b1",
                judul: "Akun Admin / Gen",
                teks: "Admin / Member Gen disarankan membuat akun sekunder (second account) dan dilarang terus-menerus membawa nama Marga Acaumas di ruang publik untuk menghindari risiko target konflik."
              },
              {
                id: "k3-p2-a3-b2",
                judul: "Eskalasi Masalah Besar",
                teks: "Admin maupun Member yang memicu masalah besar di luar wajib memilih salah satu opsi: Menjalani Sidang Otorita ATAU Dikeluarkan dari Marga."
              }
            ]
          },
          {
            id: "kode3-pasal2-aturan4",
            judul: "4. Kedisiplinan & Keaktifan Admin (Standar Keempat)",
            bagian: [
              {
                id: "k3-p2-a4-b1",
                judul: "Komitmen",
                teks: "Admin wajib menjaga keharmonisan, kedisiplinan, dan ketaatan di lingkungan luar."
              },
              {
                id: "k3-p2-a4-b2",
                judul: "Inaktivitas",
                teks: "Admin yang hilang/inaktif secara tiba-tiba selama 1 minggu penuh (7 hari) tanpa kabar wajib mengundurkan diri atau diproses lewat Sidang Otorita."
              }
            ]
          }
        ]
      },
      {
        id: "kode3-pasal3",
        judul: "🤝 Sistem Partnership (Kemitraan)",
        aturan: [
          {
            id: "kode3-pasal3-aturan1",
            judul: "1. Partnership Official (Jangka Panjang & Resmi) — Bentuk kerja sama resmi skala besar untuk hubungan jangka panjang.",
            bagian: [
              {
                id: "k3-p3-a1-b1",
                judul: "Benefit",
                teks: "Seluruh program kerja Marga Acaumas akan melibatkan pihak mitra serta mendapatkan dukungan penuh dan promosi khusus untuk program milik mitra."
              },
              {
                id: "k3-p3-a1-b2",
                judul: "Syarat",
                teks: "Jalur Khusus (Dibayar oleh Admin Acaumas jika program mitra sangat berpotensi) ATAU Jalur Reguler (Komunitas mitra membayar biaya Partnership resmi ke Marga Acaumas)."
              }
            ]
          },
          {
            id: "kode3-pasal3-aturan2",
            judul: "2. Partnership Normally (Jangka Pendek & Non-Resmi) — Bentuk kerja sama terbatas untuk event atau turnamen tertentu.",
            bagian: [
              {
                id: "k3-p3-a2-b1",
                judul: "Benefit",
                teks: "Berhak merasakan dan berpartisipasi dalam program/event Marga Acaumas sebanyak 1 kali (Event Limited / Turnamen)."
              },
              {
                id: "k3-p3-a2-b2",
                judul: "Syarat",
                teks: "Komunitas mitra wajib memberikan kontribusi yang menonjol dan berkualitas pada event/turnamen yang bersangkutan."
              }
            ]
          },
          {
            id: "kode3-pasal3-aturan3",
            judul: "3. Collaboration (Trial Media) — Bentuk kolaborasi media sederhana.",
            bagian: [
              {
                id: "k3-p3-a3-b1",
                judul: "Benefit",
                teks: "Fasilitas uji coba (trial) kolaborasi media sebanyak 1 kali publikasi."
              },
              {
                id: "k3-p3-a3-b2",
                judul: "Syarat",
                teks: "Tidak ada syarat khusus (cukup kesepakatan antar-admin media)."
              }
            ]
          }
        ]
      },
      {
        id: "kode3-pasal4",
        judul: "📢 Kebijakan Mediasi Akun Resmi & Pengunggahan Konten Video (VT)",
        aturan: [
          {
            id: "kode3-pasal4-aturan1",
            judul: "Ringkasan Pengelolaan & Publikasi Konten",
            bagian: [
              {
                id: "k3-p4-a1-b1",
                judul: "Konten Diterima / Dibolehkan",
                teks: "(1) Meme Uma Musume, (2) Collab Member, (3) Media News Anime, (4) Konten Berhubungan dengan Marga Acaumas, (5) Announcement Resmi."
              },
              {
                id: "k3-p4-a1-b2",
                judul: "Konten Ditolak / Dilarang",
                teks: "(1) Birthday Character Anime, (2) Jedag Jedug Nyari Drama, (3) Pembongkaran Dapur / Aib Internal."
              }
            ]
          },
          {
            id: "kode3-pasal4-aturan2",
            judul: "📌 Ketentuan Penjadwalan & Waktu Upload Video Content (VT) Media Resmi",
            isCallout: true,
            bagian: [
              {
                id: "k3-p4-a2-b1",
                judul: "Konten Internal Komunitas (Collab Member, Promosi Internal, dll.)",
                teks: "Wajib maksimal 2 VT dalam 1 hari. Pembagian jam sesi (WITA): Sesi Pagi/Siang 08.00–12.00, Sesi Sore/Malam 17.00–20.00. Jadwal berlaku 1 kali tiap sesi — contoh: kalau ada VT diunggah jam 09.00 WITA, maka sisa jam sesi itu (10.00–12.00 WITA) dilarang upload konten apa pun lagi; sama berlaku buat sesi sore."
              },
              {
                id: "k3-p4-a2-b2",
                judul: "Konten Unsur Eksterna/Luar (Turnamen, Partnership, Media, dll.)",
                teks: "Waktu unggah bebas kapan saja, tapi wajib kasih jeda minimal 1 jam per VT dan disesuaikan sama antrean VT lainnya."
              }
            ]
          }
        ]
      }
    ]
  }
];
