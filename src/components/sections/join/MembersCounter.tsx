import React, { useRef, useState, useEffect } from "react";
import { Users } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

export const MembersCounter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const { count, isCompleted } = useCountUp(230, 2000, isVisible);

  return (
    <div
      ref={containerRef}
      className={`flex items-center gap-3.5 rounded-2xl border border-brass/50 bg-parchment/85 px-6 py-3.5 shadow-md backdrop-blur-md transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <Users className="h-9 w-9 shrink-0 text-garnet" strokeWidth={1.8} />
      <div className="flex select-none flex-col leading-tight">
        <span className="text-xs font-bold uppercase tracking-widest text-garnet/70">Members</span>
        <span className="font-mono text-2xl font-bold text-ink">
          {count}
          {isCompleted && "+"}
        </span>
      </div>
    </div>
  );
};
