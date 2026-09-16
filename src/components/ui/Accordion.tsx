import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-4 overflow-hidden rounded-xl border border-ink-line bg-ink-soft transition-shadow hover:shadow-panel">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-3 p-6 text-left transition-colors hover:bg-ink-raised/50 focus:outline-none"
      >
        <h3 className="font-display text-xl font-semibold text-parchment">{title}</h3>
        <ChevronDown className={`h-5 w-5 shrink-0 text-brass-bright transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <div className="space-y-4 p-6 pt-0 leading-relaxed text-parchment-muted">{children}</div>
        </div>
      </div>
    </div>
  );
}
