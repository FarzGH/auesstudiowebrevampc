interface SectionHeadingProps {
  title: string;
  /** Opsional — hanya isi jika benar-benar membawa informasi (mis. kode klasifikasi), bukan hiasan. */
  eyebrow?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({ title, eyebrow, description, align = "left", className = "" }: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`flex flex-col gap-3.5 ${isCenter ? "mx-auto items-center text-center" : "items-start text-left"} ${className}`}>
      {eyebrow && <span className="seal-label">{eyebrow}</span>}
      <h2 className="text-balance font-display text-3xl font-semibold text-parchment sm:text-4xl md:text-[2.6rem]">
        {title}
      </h2>
      {description && (
        <p className={`text-parchment-muted leading-relaxed ${isCenter ? "max-w-2xl" : "max-w-prose"}`}>{description}</p>
      )}
    </div>
  );
}
