import Reveal from "@/components/ui/Reveal";

interface ComingSoonPanelProps {
  title: string;
  eyebrow: string;
  description: string;
  accent?: "garnet" | "brass";
}

export default function ComingSoonPanel({ title, eyebrow, description, accent = "brass" }: ComingSoonPanelProps) {
  const accentClass = accent === "garnet" ? "text-garnet-bright" : "text-brass-bright";

  return (
    <section className="relative z-10 w-full border-t border-ink-line/60 bg-ink/40 py-16 backdrop-blur-sm">
      <div className="container max-w-6xl text-center">
        <Reveal variant="up">
          <h2 className="mb-2 font-display text-3xl font-semibold uppercase tracking-widest text-parchment">{title}</h2>
          <p className={`mb-12 text-xs font-bold uppercase tracking-[0.2em] ${accentClass}`}>{eyebrow}</p>
        </Reveal>

        <Reveal variant="scale" delay={100}>
          <div className="rounded-[2rem] border border-dashed border-ink-line bg-ink-soft/40 py-20 backdrop-blur-md transition-colors hover:bg-ink-soft/60">
            <h3 className="animate-pulse font-display text-4xl font-semibold uppercase tracking-tight text-parchment-dim">
              Coming Soon
            </h3>
            <p className="mt-2 text-sm font-medium text-parchment-dim">{description}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
