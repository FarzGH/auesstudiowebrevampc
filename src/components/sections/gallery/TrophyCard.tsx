import ProtectedImage from "@/components/ui/ProtectedImage";
import type { BowEntry } from "@/data/champions";

export default function TrophyCard({ data, isActive }: { data: BowEntry; isActive: boolean }) {
  return (
    <div
      className={`flex w-[180px] flex-col items-center rounded-2xl border bg-ink-raised/90 p-4 backdrop-blur-md ${
        isActive ? "border-garnet-bright/60" : "border-parchment/10"
      }`}
    >
      <ProtectedImage
        src={data.img}
        alt={data.name}
        className={`mb-4 h-20 w-20 rounded-full border-2 object-cover transition-colors ${
          isActive ? "border-garnet-bright" : "border-ink-line"
        }`}
      />
      <h3 className="mb-2 w-full truncate text-center text-lg font-bold text-parchment">{data.name}</h3>
      <a
        href={data.link}
        target="_blank"
        rel="noreferrer"
        onClick={(e) => {
          if (!isActive) e.preventDefault();
        }}
        className="border-b border-transparent pb-1 text-xs text-garnet-bright transition-all hover:border-garnet-bright hover:text-brass-bright"
      >
        Lihat Akun
      </a>
    </div>
  );
}
