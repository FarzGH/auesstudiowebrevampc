import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

interface GroupItem {
  title: string;
  desc: string;
  image: string;
}

const GROUPS: GroupItem[] = [
  { title: "Main Group", desc: "Pusat interaksi utama seluruh Member A'ueS. Tempat berbagi informasi terbaru, diskusi umum, dan komunikasi yang baik.", image: "https://i.imgur.com/rdYCpyW.png" },
  { title: "Design Group", desc: "Wadah kreatif bagi para designer dan editor A'ueS. Tempat berkolaborasi, berbagi aset visual, serta mengasah skill editing digital bersama.", image: "https://i.imgur.com/XwmZ1v2.png" },
  { title: "Game Group", desc: "Arena khusus bagi para trainer dan gamers. Diskusi strategi Uma Musume, mabar, hingga berbagi tips teknis seputar dunia kompetitif game.", image: "https://i.imgur.com/INjyXmQ.png" },
  { title: "Bot Room", desc: "Laboratory dan permainan RPG bersama bot.", image: "https://i.imgur.com/vhMHtGX.png" },
  { title: "Fanart Group", desc: "Galeri apresiasi seni. Tempat bebas untuk berbagi dan mendapatkan koleksi fanart Uma Musume, anime, serta karya ilustrasi lainnya dari berbagai sumber.", image: "https://i.imgur.com/zNnG5G0.png" },
  { title: "Courtroom", desc: "Ruang penegakan hukum komunitas. Di sini segala bentuk laporan, sengketa, dan aturan administratif diproses secara transparan namun tetap adil.", image: "https://i.imgur.com/Rw6sYuc.png" },
];

export default function GroupsShowcase() {
  return (
    <section id="groups" className="overflow-hidden bg-ink py-24">
      <SectionHeading align="center" title="Group in Community" className="container mb-16 max-w-2xl" />

      <div className="flex flex-col">
        {GROUPS.map((group, i) => {
          const imageFromLeft = i % 2 === 0;
          return (
            <div
              key={group.title}
              className="relative flex min-h-[360px] flex-col items-center border-t border-ink-line/70 first:border-t-0 md:min-h-[440px] md:flex-row"
            >
              <Reveal
                variant={imageFromLeft ? "left" : "right"}
                className={`relative order-1 h-[280px] w-full md:h-[440px] md:w-1/2 ${imageFromLeft ? "md:order-2" : ""}`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${group.image}')`,
                    WebkitMaskImage: `linear-gradient(to ${imageFromLeft ? "left" : "right"}, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)`,
                    maskImage: `linear-gradient(to ${imageFromLeft ? "left" : "right"}, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)`,
                  }}
                />
              </Reveal>

              <Reveal
                variant={imageFromLeft ? "right" : "left"}
                className={`z-10 order-2 w-full p-8 text-center md:w-1/2 md:p-16 ${
                  imageFromLeft ? "md:order-1 md:text-left" : "md:text-right"
                }`}
              >
                <h3 className="mb-3 font-display text-3xl font-semibold text-parchment md:text-4xl">{group.title}</h3>
                <p className="mx-auto max-w-md text-parchment-muted leading-relaxed md:mx-0">{group.desc}</p>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
