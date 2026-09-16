import DragScrollCarousel from "@/components/ui/DragScrollCarousel";
import Reveal from "@/components/ui/Reveal";
import type { TermItem } from "@/data/partnershipTerms";

function TermCard({ item }: { item: TermItem }) {
  return (
    <div className="h-full rounded-2xl border border-ink-line bg-ink-soft p-6 shadow-panel transition-all duration-300 hover:-translate-y-1 hover:border-brass/40 md:p-8">
      <h3 className="mb-2 font-display text-lg font-semibold text-parchment md:text-xl">{item.title}</h3>
      <hr className="mb-4 border-ink-line" />
      <div className="text-sm leading-relaxed text-parchment-muted md:text-base">{item.content}</div>
    </div>
  );
}

export default function TermsCarousel({ eyebrow, items }: { eyebrow: string; items: TermItem[] }) {
  const isSingle = items.length === 1;

  return (
    <div className="my-8 w-full">
      <Reveal variant="up">
        <span className="mb-4 block text-sm font-black uppercase tracking-widest text-brass-bright">{eyebrow}</span>
      </Reveal>

      {isSingle ? (
        <TermCard item={items[0]} />
      ) : (
        <DragScrollCarousel
          items={items}
          slideClassName="h-auto w-[85vw] md:w-[450px]"
          renderItem={(item, i) => <TermCard key={i} item={item} />}
          ariaLabel={eyebrow}
        />
      )}
    </div>
  );
}
