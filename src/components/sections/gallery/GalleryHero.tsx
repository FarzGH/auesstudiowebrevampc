import ProtectedImage from "@/components/ui/ProtectedImage";
import Reveal from "@/components/ui/Reveal";

export default function GalleryHero() {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden pb-10 pt-28">
      <Reveal variant="scale" threshold={0}>
        <ProtectedImage
          src="https://i.imgur.com/KqptnPU.png"
          alt="Galeri Kami"
          className="h-auto w-[90%] max-w-5xl object-contain shadow-glow transition-transform duration-700 hover:scale-[1.02] md:w-[70%]"
        />
      </Reveal>
    </section>
  );
}
