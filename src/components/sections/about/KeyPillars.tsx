import { useEffect, useRef, useState } from "react";
import { HeartHandshake, Users, Medal, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

interface Pillar {
  id: number;
  title: string;
  desc: string;
  Icon: LucideIcon;
  accent: "garnet" | "steel" | "brass";
}

const PILLARS: Pillar[] = [
  {
    id: 0,
    title: "Komunitas Yang Solid",
    desc: "A'ueS dibangun atas prinsip loyalitas dan kedaulatan yang tak terjaga. Kekuatan kami terletak pada persatuan anggota yang bergerak dalam satu komando dan satu visi, menciptakan lingkungan yang suportif namun tetap disiplin dalam menjaga keutuhan internal.",
    Icon: HeartHandshake,
    accent: "garnet",
  },
  {
    id: 1,
    title: "Mediasi & Kolaborasi Strategis",
    desc: "Kami mengutamakan jalur diplomasi dalam setiap interaksi. Dengan sistem komunikasi yang terarah, A'ueS mampu menjalin kemitraan yang produktif dengan pihak luar, memastikan setiap kerja sama berjalan lancar tanpa benturan kepentingan atau ego sektoral.",
    Icon: Users,
    accent: "steel",
  },
  {
    id: 2,
    title: "Profesionalisme Medan Luar",
    desc: "Setiap anggota dan admin adalah representasi dari kedaulatan A'ueS. Kami menjaga sikap netral dan profesional di ranah publik, memastikan bahwa aturan internal kami tetap tercermin dalam etika eksternal yang dihormati oleh komunitas lain.",
    Icon: Medal,
    accent: "brass",
  },
];

const ACCENT_STYLES = {
  garnet: { icon: "text-garnet-bright bg-garnet-deep/60", border: "group-hover:border-garnet/60", back: "border-garnet/50" },
  steel: { icon: "text-steel-bright bg-steel/20", border: "group-hover:border-steel/60", back: "border-steel/50" },
  brass: { icon: "text-brass-bright bg-brass/15", border: "group-hover:border-brass/60", back: "border-brass/50" },
} as const;

export default function KeyPillars() {
  const [openIndex, setOpenIndex] = useState(-1);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) setOpenIndex(-1);
      },
      { rootMargin: "-30% 0px -30% 0px", threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-ink py-24">
      <div className="container">
        <SectionHeading align="center" title="Tiga Pilar Utama" className="mx-auto mb-16 max-w-2xl" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3" style={{ perspective: "1200px" }}>
          {PILLARS.map((p, i) => {
            const styles = ACCENT_STYLES[p.accent];
            const isOpen = openIndex === i;
            return (
              <Reveal key={p.id} variant="up" delay={i * 120}>
                <div
                  className="group relative h-[340px] w-full cursor-pointer"
                  style={{ perspective: "1200px" }}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <div
                    className="relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                    style={{ transformStyle: "preserve-3d", transform: isOpen ? "rotateY(180deg)" : "none" }}
                  >
                    {/* Front */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center rounded-[2.5rem] border border-ink-line bg-ink-soft shadow-panel transition-colors duration-300 ${styles.border}`}
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className={`flex h-24 w-24 items-center justify-center rounded-3xl ${styles.icon}`}>
                        <p.Icon className="h-11 w-11" strokeWidth={1.6} />
                      </div>
                    </div>

                    {/* Back */}
                    <div
                      className={`absolute inset-0 flex flex-col justify-center rounded-[2.5rem] border bg-ink-raised p-8 text-center shadow-panel ${styles.back}`}
                      style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                    >
                      <div className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full ${styles.icon}`}>
                        <p.Icon className="h-6 w-6" strokeWidth={1.8} />
                      </div>
                      <h4 className="mb-3 text-xl font-bold leading-tight text-parchment">{p.title}</h4>
                      <p className="text-[13px] leading-relaxed text-parchment-muted">{p.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
