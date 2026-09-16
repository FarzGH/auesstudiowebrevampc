import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DragScrollCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number, isActive: boolean) => React.ReactNode;
  /** Class Tailwind untuk lebar tiap slide, mis. "w-[85vw] md:w-[420px]" */
  slideClassName?: string;
  gapClassName?: string;
  showProgress?: boolean;
  /** Aktifkan deteksi "slide mana yang di tengah" — dipakai untuk interaksi seperti kartu admin. */
  trackActive?: boolean;
  showArrows?: boolean;
  ariaLabel?: string;
}

/**
 * Carousel ringan tanpa dependency eksternal: drag-to-scroll di desktop,
 * swipe native di mobile, snap per-slide, dan indikator progres.
 * Menggantikan dua implementasi berbeda sebelumnya (Swiper untuk admin,
 * scroller manual untuk syarat/benefit) dengan satu komponen yang sama.
 */
export default function DragScrollCarousel<T>({
  items,
  renderItem,
  slideClassName = "w-[85vw] md:w-[420px]",
  gapClassName = "gap-6",
  showProgress = true,
  trackActive = false,
  showArrows = false,
  ariaLabel = "Carousel",
}: DragScrollCarouselProps<T>) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const rafRef = useRef<number | null>(null);

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);
  const didDrag = useRef(false);

  const updateActive = useCallback(() => {
    const container = scrollRef.current;
    if (!container || !trackActive) return;
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;
    let closestIndex = 0;
    let closestDistance = Infinity;

    Array.from(container.children).forEach((child, i) => {
      const rect = (child as HTMLElement).getBoundingClientRect();
      const childCenter = rect.left + rect.width / 2;
      const distance = Math.abs(childCenter - containerCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    });
    setActiveIndex(closestIndex);
  }, [trackActive]);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const total = scrollWidth - clientWidth;
    setProgress(total > 0 ? (scrollLeft / total) * 100 : 0);

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(updateActive);
  }, [updateActive]);

  useEffect(() => {
    updateActive();
  }, [updateActive, items.length]);

  const scrollByAmount = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const slide = el.children[0] as HTMLElement | undefined;
    const amount = (slide?.offsetWidth ?? 320) + 24;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDown.current = true;
    didDrag.current = false;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftPos.current = scrollRef.current.scrollLeft;
  };
  const handleMouseLeave = () => {
    isDown.current = false;
  };
  const handleMouseUp = () => {
    isDown.current = false;
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    if (Math.abs(walk) > 5) didDrag.current = true;
    scrollRef.current.scrollLeft = scrollLeftPos.current - walk;
  };
  // Mencegah klik "nyangkut" ke link/tombol di dalam slide tepat setelah drag.
  const handleClickCapture = (e: React.MouseEvent) => {
    if (didDrag.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        role="region"
        aria-label={ariaLabel}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onClickCapture={handleClickCapture}
        tabIndex={0}
        className={`no-scrollbar flex snap-x snap-mandatory cursor-grab overflow-x-auto select-none active:cursor-grabbing ${gapClassName} pb-2 focus:outline-none`}
      >
        {items.map((item, i) => (
          <div key={i} className={`shrink-0 snap-center ${slideClassName}`}>
            {renderItem(item, i, i === activeIndex)}
          </div>
        ))}
      </div>

      {showArrows && (
        <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 justify-between px-1 sm:flex">
          <button
            type="button"
            onClick={() => scrollByAmount(-1)}
            aria-label="Sebelumnya"
            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-brass/30 bg-ink/80 text-parchment backdrop-blur transition-colors hover:border-brass hover:text-brass-bright"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount(1)}
            aria-label="Berikutnya"
            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-brass/30 bg-ink/80 text-parchment backdrop-blur transition-colors hover:border-brass hover:text-brass-bright"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}

      {showProgress && (
        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-ink-line">
          <div
            className="h-full rounded-full bg-garnet-bright transition-all duration-200 ease-out"
            style={{ width: `${Math.max(progress, 8)}%` }}
          />
        </div>
      )}
    </div>
  );
}
