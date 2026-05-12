"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TEXT = "Ready to Rise at Seven?";

type CharacterItem = {
  char: string;
  letterIndex: number | null;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function mix(a: number, b: number, progress: number) {
  return a + (b - a) * progress;
}

/**
 * This curve is based on the values you extracted from the real site:
 *
 * settled letters:       0%
 * overshoot downward:    8% / 11%
 * transition middle:    -2% / -48%
 * high pulled letters:  -60% / -72%
 *
 * Rotation is then derived as:
 * rotate = -yPercent / 6
 */
function getSnakeY(localProgress: number) {
  const p = clamp(localProgress, 0, 1);

  if (p <= 0.08) {
    return mix(-60, -72, p / 0.08);
  }

  if (p <= 0.22) {
    return mix(-72, -64, (p - 0.08) / 0.14);
  }

  if (p <= 0.38) {
    return mix(-64, -48, (p - 0.22) / 0.16);
  }

  if (p <= 0.55) {
    return mix(-48, -2.5, (p - 0.38) / 0.17);
  }

  if (p <= 0.68) {
    return mix(-2.5, 11.5, (p - 0.55) / 0.13);
  }

  if (p <= 0.82) {
    return mix(11.5, 5.5, (p - 0.68) / 0.14);
  }

  return mix(5.5, 0, (p - 0.82) / 0.18);
}

export default function ReadyToRiseSnake() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);

  const characters = useMemo<CharacterItem[]>(() => {
    let letterIndex = 0;

    return Array.from(TEXT).map((char) => {
      if (char === " ") {
        return {
          char,
          letterIndex: null,
        };
      }

      const item = {
        char,
        letterIndex,
      };

      letterIndex += 1;

      return item;
    });
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const heading = headingRef.current;

    if (!section || !heading) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const letters = lettersRef.current.filter(Boolean);
        const totalLetters = letters.length;

        gsap.set(heading, {
          x: () => window.innerWidth * 0.92,
          y: () => window.innerHeight * 0.12,
          force3D: true,
        });

        gsap.set(letters, {
          display: "inline-block",
          position: "relative",
          yPercent: -60,
          rotation: 10,
          transformOrigin: "50% 55%",
          force3D: true,
        });

        const trigger = ScrollTrigger.create({
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,

          onUpdate: (self) => {
            const progress = self.progress;
            const headingWidth = heading.offsetWidth;

            /**
             * Whole sentence movement.
             *
             * This recreates the real site behavior:
             * - enters from the right edge
             * - travels left
             * - drops vertically while moving
             */
            const x = mix(
              window.innerWidth * 0.92,
              -headingWidth + window.innerWidth * 0.24,
              progress,
            );

            const y =
              mix(
                window.innerHeight * 0.08,
                window.innerHeight * 0.58,
                progress,
              ) +
              Math.sin(progress * Math.PI * 1.1) * window.innerHeight * 0.16;

            gsap.set(heading, {
              x,
              y,
            });
            const wavePosition = progress * (totalLetters + 8) - 3.5;

            letters.forEach((letter, index) => {
              const localProgress = clamp((wavePosition - index) / 5.2, 0, 1);
              const yPercent = getSnakeY(localProgress);
              const rotation = -yPercent / 6;

              gsap.set(letter, {
                yPercent,
                rotation,
              });
            });
          },
        });

        return () => {
          trigger.kill();
        };
      });

      return () => {
        mm.revert();
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Ready to Rise at Seven section"
      className="relative hidden h-[100vh] overflow-hidden bg-grey-100 text-black lg:flex"
    >
      <div
        ref={headingRef}
        aria-label={TEXT}
        className="pointer-events-none absolute left-0 top-0 shrink-0 whitespace-nowrap text-[16vw] font-medium leading-tight tracking-tight 4xl:text-[14vw]"
      >
        {characters.map((item, index) => {
          if (item.char === " ") {
            return (
              <span key={`space-${index}`} aria-hidden="true">
                {" "}
              </span>
            );
          }

          return (
            <span
              key={`${item.char}-${index}`}
              ref={(node) => {
                if (node && item.letterIndex !== null) {
                  lettersRef.current[item.letterIndex] = node;
                }
              }}
              aria-hidden="true"
            >
              {item.char}
            </span>
          );
        })}
      </div>
    </section>
  );
}
