import DragScrollCarousel from "@/components/ui/DragScrollCarousel";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ADMIN_TEAM, type AdminMember } from "@/data/adminTeam";

function AdminCard({ admin, isActive }: { admin: AdminMember; isActive: boolean }) {
  return (
    <a
      href={admin.link}
      target="_blank"
      rel="noreferrer"
      className={`group relative block h-[360px] w-full overflow-hidden rounded-[1.75rem] border transition-all duration-500 ease-out ${
        isActive ? "scale-100 border-brass/50 shadow-glow-brass" : "scale-[0.94] border-ink-line opacity-55"
      }`}
    >
      <img
        src={admin.img}
        alt={admin.name}
        loading="lazy"
        className={`h-full w-full object-cover transition-all duration-500 ${isActive ? "grayscale-0" : "grayscale"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <div
        className={`absolute inset-x-0 bottom-0 p-6 transition-all duration-500 ${
          isActive ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        <p className="text-[11px] font-semibold uppercase tracking-widest2 text-brass-bright">{admin.role}</p>
        <h4 className="mt-1 font-display text-2xl font-semibold text-parchment">{admin.name}</h4>
        <p className="mt-1 text-xs text-parchment-dim">{admin.text}</p>
      </div>
    </a>
  );
}

export default function AdminCarousel() {
  return (
    <section className="bg-ink-soft py-24">
      <div className="container">
        <SectionHeading
          align="center"
          title="Otorita & Admin Kami"
          description="Jajaran pengurus yang menjaga arah dan kestabilan Academy Uma Sovereign."
          className="mx-auto mb-14 max-w-2xl"
        />
      </div>

      <Reveal variant="fade" className="container">
        <DragScrollCarousel
          items={ADMIN_TEAM}
          trackActive
          slideClassName="w-[230px] md:w-[270px]"
          gapClassName="gap-5"
          ariaLabel="Daftar admin komunitas"
          renderItem={(admin, i, isActive) => <AdminCard key={admin.name + i} admin={admin} isActive={isActive} />}
        />
      </Reveal>
    </section>
  );
}
