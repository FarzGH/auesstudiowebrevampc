import { useEffect, useRef } from "react";

/**
 * Efek "text scramble" — kata berganti dengan karakter acak sebelum stabil
 * ke kata berikutnya. Menghormati prefers-reduced-motion (langsung tampil diam).
 */
export default function ScrambleText({ phrases }: { phrases: string[] }) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) {
      el.innerText = phrases[0];
      return;
    }

    class TextScramble {
      el: HTMLElement;
      chars: string;
      queue: { from: string; to: string; start: number; end: number; char: string }[];
      frame: number;
      frameRequest: number;
      resolve: (() => void) | null = null;

      constructor(el: HTMLElement) {
        this.el = el;
        this.chars = "!<>-_\\/[]{}—=+*^?#________";
        this.queue = [];
        this.frame = 0;
        this.frameRequest = 0;
        this.update = this.update.bind(this);
      }

      setText(newText: string) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise<void>((resolve) => (this.resolve = resolve));

        this.queue = [];
        for (let i = 0; i < length; i++) {
          const from = oldText[i] || "";
          const to = newText[i] || "";
          const start = Math.floor(Math.random() * 40);
          const end = start + Math.floor(Math.random() * 40);
          this.queue.push({ from, to, start, end, char: "" });
        }

        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
      }

      update() {
        let output = "";
        let complete = 0;

        for (let i = 0, n = this.queue.length; i < n; i++) {
          let { from, to, start, end, char } = this.queue[i];

          if (this.frame >= end) {
            complete++;
            output += to;
          } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = this.randomChar();
              this.queue[i].char = char;
            }
            output += `<span class="text-garnet-bright opacity-70">${char}</span>`;
          } else {
            output += from;
          }
        }

        this.el.innerHTML = output;

        if (complete === this.queue.length) {
          this.resolve?.();
        } else {
          this.frameRequest = requestAnimationFrame(this.update);
          this.frame++;
        }
      }

      randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
      }
    }

    const fx = new TextScramble(el);
    let counter = 0;
    let isCancelled = false;

    const next = () => {
      if (isCancelled) return;
      fx.setText(phrases[counter]).then(() => {
        if (isCancelled) return;
        setTimeout(next, 3000);
      });
      counter = (counter + 1) % phrases.length;
    };

    el.innerHTML = "";
    next();

    return () => {
      isCancelled = true;
      cancelAnimationFrame(fx.frameRequest);
    };
  }, [phrases]);

  return <span ref={textRef} className="inline-block break-words"></span>;
}
