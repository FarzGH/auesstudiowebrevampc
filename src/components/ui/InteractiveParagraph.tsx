import React, { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Paragraf dengan efek mengetik saat masuk viewport, plus interaksi hover
 * (3 huruf terdekat kursor berubah warna) dan klik (ripple warna menyebar).
 */
export default function InteractiveParagraph({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isTyped = useRef(false);

  const wrapText = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === "string") {
      return node.split("").map((char, i) => (
        <span key={i} className="inter-char inline-block whitespace-pre opacity-0">
          {char}
        </span>
      ));
    }
    if (React.isValidElement(node)) {
      return React.cloneElement(
        node,
        { ...node.props } as any,
        React.Children.map(node.props.children, wrapText)
      );
    }
    return node;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const chars = container.querySelectorAll(".inter-char");

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isTyped.current) {
          isTyped.current = true;
          if (isReduced) {
            gsap.set(chars, { opacity: 1 });
          } else {
            gsap.to(chars, { opacity: 1, stagger: 0.015, duration: 0.1, ease: "none" });
          }
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(container);

    if (isReduced) return;

    const handleMouseMove = (e: MouseEvent) => {
      const charElements = Array.from(chars) as HTMLElement[];
      const distances = charElements.map((char) => {
        const rect = char.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        return { char, dist: Math.hypot(cx - e.clientX, cy - e.clientY) };
      });

      distances.sort((a, b) => a.dist - b.dist);
      charElements.forEach((c) => {
        c.style.color = "";
      });

      for (let i = 0; i < Math.min(3, distances.length); i++) {
        distances[i].char.style.color = "#E4C989"; // brass-bright
      }
    };

    const handleClick = (e: MouseEvent) => {
      const charElements = Array.from(chars) as HTMLElement[];
      charElements.forEach((char) => {
        const rect = char.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dist = Math.hypot(cx - e.clientX, cy - e.clientY);

        setTimeout(() => {
          gsap.to(char, { color: "#E15873", duration: 0.2, yoyo: true, repeat: 1, clearProps: "color" }); // garnet-bright
        }, dist * 2);
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("click", handleClick);

    return () => {
      observer.disconnect();
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="cursor-default">
      {wrapText(children)}
    </div>
  );
}
