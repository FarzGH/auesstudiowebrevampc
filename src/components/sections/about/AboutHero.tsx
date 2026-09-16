import ProtectedImage from "@/components/ui/ProtectedImage";
import Reveal from "@/components/ui/Reveal";

export default function AboutHero() {
  return (
    <section className="w-full overflow-hidden">
      <Reveal variant="fade" threshold={0}>
        <ProtectedImage
          src="https://i.imgur.com/HzwcuLh.png"
          alt="Banner Academy Uma Sovereign"
          className="h-auto w-full object-cover"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
          }}
        />
      </Reveal>
    </section>
  );
}
