import { useState } from "react";
import BestOfWeek from "./BestOfWeek";
import BestOfMonth from "./BestOfMonth";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ChampionSection() {
  const [activeTab, setActiveTab] = useState<"bow" | "bom">("bow");

  return (
    <section className="relative w-full overflow-hidden px-4 py-16">
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading align="center" title="Our Champion" className="mx-auto mb-10 max-w-2xl" />

        {/* Toggle */}
        <div className="mb-12 flex justify-center">
          <div className="relative flex h-12 w-64 rounded-full border border-ink-line bg-ink-soft/90 p-1 shadow-panel backdrop-blur-md">
            <div
              className={`absolute bottom-1 top-1 w-[calc(50%-4px)] rounded-full bg-garnet transition-transform duration-500 ${
                activeTab === "bom" ? "translate-x-[100%]" : "translate-x-0"
              }`}
            />
            <button
              onClick={() => setActiveTab("bow")}
              className={`relative z-20 flex-1 text-sm font-bold transition-colors duration-300 ${
                activeTab === "bow" ? "text-parchment" : "text-parchment-dim hover:text-parchment-muted"
              }`}
            >
              BOW
            </button>
            <button
              onClick={() => setActiveTab("bom")}
              className={`relative z-20 flex-1 text-sm font-bold transition-colors duration-300 ${
                activeTab === "bom" ? "text-parchment" : "text-parchment-dim hover:text-parchment-muted"
              }`}
            >
              BOM
            </button>
          </div>
        </div>

        <div className="relative flex min-h-[600px] w-full items-center justify-center md:min-h-[700px]">
          <div className={`absolute inset-0 transition-opacity duration-700 ease-out ${activeTab === "bow" ? "z-20 opacity-100" : "pointer-events-none z-0 opacity-0"}`}>
            <BestOfWeek />
          </div>
          <div className={`absolute inset-0 transition-opacity duration-700 ease-out ${activeTab === "bom" ? "z-20 opacity-100" : "pointer-events-none z-0 opacity-0"}`}>
            <BestOfMonth />
          </div>
        </div>
      </div>
    </section>
  );
}
