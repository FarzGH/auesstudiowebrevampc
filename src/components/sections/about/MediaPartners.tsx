import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

interface LogoItem {
  name: string;
  label: string;
  image: string;
}

const MEDIA: LogoItem[] = [{ name: "A'ues", label: "Academy Uma Sovereign", image: "https://i.imgur.com/GhLfIhV.png" }];

const PARTNERSHIP: LogoItem[] = [
  { name: "Nanime", label: "Nanime Creator Aogiri", image: "https://i.imgur.com/SSC4WwL.jpeg" },
  { name: "AUF", label: "Academy Uma Family", image: "https://i.imgur.com/MvOR28S.jpeg" },
  { name: "KOS", label: "Kyra Os Artemis", image: "https://i.imgur.com/IHZtvEp.jpeg" },
];

const OPERATIONAL: LogoItem[] = [
  { name: "Origami", label: "Origami County", image: "https://i.imgur.com/LllTSOh.png" },
  { name: "Oguri", label: "Oguri Bot by Ourin", image: "https://i.imgur.com/IBAMfYJ.png" },
];

function LogoGroup({ title, accent, items }: { title: string; accent: string; items: LogoItem[] }) {
  return (
    <div className="mb-14 last:mb-0">
      <h3 className={`mb-8 border-l-2 pl-4 text-sm font-semibold uppercase tracking-widest2 text-parchment-muted ${accent}`}>
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {items.map((item, i) => (
          <Reveal key={item.name} variant="up" delay={i * 80} className="group text-center">
            <div className="flex aspect-video items-center justify-center rounded-2xl border border-brass/15 bg-parchment/95 p-4 shadow-panel transition-transform duration-300 group-hover:-translate-y-1">
              <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
            </div>
            <p className="mt-3 text-sm font-semibold text-parchment-muted">{item.label}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function MediaPartners() {
  return (
    <section id="partnership" className="bg-ink py-24">
      <div className="container max-w-6xl">
        <SectionHeading align="center" title="Partnership & Media" className="mx-auto mb-16 max-w-2xl" />
        <LogoGroup title="Media" accent="border-garnet-bright" items={MEDIA} />
        <LogoGroup title="Partnership" accent="border-brass" items={PARTNERSHIP} />
        <LogoGroup title="Operational" accent="border-steel-bright" items={OPERATIONAL} />
      </div>
    </section>
  );
}
