import { Check, Link2 } from "lucide-react";

interface CopyLinkButtonProps {
  id: string;
  copied: boolean;
  onCopy: (id: string) => void;
  variant?: "callout" | "default" | "ghost";
  label?: string;
}

const VARIANT_STYLES = {
  callout: "text-garnet-bright/80 hover:text-garnet-bright text-xs",
  default: "text-parchment-dim hover:text-parchment-muted text-xs",
  ghost: "text-parchment-dim hover:text-parchment-muted text-[10px] opacity-0 group-hover:opacity-100",
};

export default function CopyLinkButton({ id, copied, onCopy, variant = "default", label = "Link" }: CopyLinkButtonProps) {
  return (
    <button
      onClick={() => onCopy(id)}
      title="Salin Link Tautan Ini"
      className={`inline-flex shrink-0 items-center gap-1 transition-colors ${VARIANT_STYLES[variant]}`}
    >
      {copied ? (
        <>
          <Check className="h-3 w-3" /> Tersalin
        </>
      ) : (
        <>
          <Link2 className="h-3 w-3" /> {label}
        </>
      )}
    </button>
  );
}
