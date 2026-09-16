import type { ReactNode } from "react";

interface FormSectionCardProps {
  number: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function FormSectionCard({ number, title, children, className = "" }: FormSectionCardProps) {
  return (
    <div
      className={`group flex flex-col justify-between gap-5 rounded-3xl border border-parchment/15 bg-parchment/5 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-parchment/30 ${className}`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 border-b border-parchment/10 pb-3">
          <span className="font-bold text-brass-bright">{number}</span>
          <span className="text-xs font-bold uppercase tracking-wider text-parchment transition-colors duration-300 group-hover:text-brass-bright">
            {title}
          </span>
        </div>
        <div className="flex flex-col gap-4">{children}</div>
      </div>
    </div>
  );
}
