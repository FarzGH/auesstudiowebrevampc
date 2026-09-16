import Reveal from "@/components/ui/Reveal";
import ProtectedImage from "@/components/ui/ProtectedImage";

export default function HeroProposal() {
  return (
    <section className="relative flex h-[70vh] w-full flex-col items-center justify-center overflow-hidden bg-ink">
      <div
        className="absolute top-0 h-[60vh] w-full bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('https://i.imgur.com/trqtTlS.png')" }}
      />
      <div className="absolute top-0 h-[60vh] w-full bg-gradient-to-b from-transparent via-ink/70 to-ink" />

      <div className="relative z-10 mt-20 flex flex-col items-center px-4 text-center">
        <Reveal variant="up">
          <ProtectedImage
            src="https://i.imgur.com/UZdykWg.png"
            alt="Logo Aues UMPD"
            className="mb-4 w-40 drop-shadow-xl transition-transform duration-500 hover:scale-105 md:w-56"
          />
        </Reveal>
        <Reveal variant="up" delay={100}>
          <h1 className="font-display text-3xl italic tracking-wide text-parchment md:text-5xl">Proposal Kerja Sama</h1>
        </Reveal>
        <Reveal variant="up" delay={200} className="mt-4">
          <p className="text-sm font-medium italic text-parchment-muted md:text-base">#Academyumasovereign #Margaaus</p>
          <p className="text-sm font-medium italic text-parchment-muted md:text-base">#ausxcr #ausxart #ausxprjct</p>
        </Reveal>
      </div>
    </section>
  );
}
