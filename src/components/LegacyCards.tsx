/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/cn";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Pioneers",
    bg: "bg-black",
    text: "text-white",
    rotate: 4,
    image: "/images/story-thumbnail.jpg",
    body: [
      "We’re dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.",
      "We’re on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
    ],
  },
  {
    title: "Award Winning",
    bg: "bg-[#aef7df]",
    text: "text-[#111212]",
    rotate: 8,
    image: "/images/about.jpg",
    body: [
      "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
    ],
  },
  {
    title: "Speed",
    bg: "bg-white",
    text: "text-[#111212]",
    rotate: 12,
    image: "/images/legecy-card-3.jpg",
    body: [
      "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We’ve created a service which takes ideas to result within 60 minutes.",
    ],
  },
];

export default function LegacyCards() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [activeMobileCard, setActiveMobileCard] = useState(0);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const items = gsap.utils.toArray<HTMLElement>(".legacy-card-wrap");

        const cardDuration = 2.6;
        const cardStagger = 1.3;

        gsap.set(items, {
          yPercent: 0,
          rotation: 0,
          transformOrigin: "50% 55%",
          force3D: true,
          willChange: "transform",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.4,
            invalidateOnRefresh: true,
          },
        });

        items.forEach((item, index) => {
          tl.to(
            item,
            {
              yPercent: -120,
              rotation: -28,
              ease: "none",
              duration: cardDuration,
            },
            index * cardStagger,
          );
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  const handleMobileScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cardWidth = slider.clientWidth;
    const nextIndex = Math.round(slider.scrollLeft / cardWidth);

    setActiveMobileCard(Math.min(Math.max(nextIndex, 0), cards.length - 1));
  };

  const progress = ((activeMobileCard + 1) / cards.length) * 100;

  return (
    <>
      {/* Mobile slider */}
      <section className="bg-[#efefed] px-4 py-4 lg:hidden">
        <h2 className="mb-3 text-center text-[14px] font-medium tracking-[-0.055em] text-[#111212]">
          Legacy In The Making
        </h2>

        <div
          ref={sliderRef}
          onScroll={handleMobileScroll}
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="w-full shrink-0 snap-center px-0.5"
            >
              <article
                className={cn(
                  "flex min-h-97 w-full flex-col items-center rounded-[10px] px-5 py-5 text-center",
                  card.bg,
                )}
              >
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    className="absolute left-0 top-0 h-full w-full object-cover"
                  />
                </div>

                <div className="mt-4 flex flex-col items-center">
                  <h2
                    className={cn(
                      "text-[24px] font-medium leading-none tracking-[-0.065em]",
                      card.text,
                    )}
                  >
                    {card.title}
                  </h2>

                  <div className="mt-4 w-full">
                    {card.body.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className={cn(
                          "mb-3 text-[12px] font-medium leading-[1.35] tracking-[-0.04em]",
                          paragraphIndex === card.body.length - 1 && "mb-0",
                          card.text,
                        )}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="mt-2 h-0.75 w-full rounded-full bg-white">
          <div
            className="h-full rounded-full bg-black transition-[width] duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </section>

      {/* Desktop / large-screen rotating card stack */}
      <section
        ref={sectionRef}
        className="relative hidden h-[145vh] bg-[#efefed] lg:block"
      >
        <div className="sticky top-0 h-svh w-full overflow-hidden py-16">
          <div className="absolute inset-x-20 bottom-16 top-16 flex items-center justify-center">
            {cards.map((card, index) => (
              <div
                key={card.title}
                className={cn(
                  "legacy-card-wrap absolute flex h-full w-full items-center justify-center will-change-transform",
                  index === 0 && "z-30",
                  index === 1 && "z-20",
                  index === 2 && "z-10",
                )}
              >
                <div
                  className="w-full max-w-lg xl:max-w-xl 2xl:max-w-2xl"
                  style={{ transform: `rotate(${card.rotate}deg)` }}
                >
                  <article
                    className={cn(
                      "grid w-full rounded-2xl px-7 py-5 text-center lg:items-center lg:rounded-3xl xl:px-12 xl:py-6",
                      card.bg,
                    )}
                  >
                    <div className="col-start-1 row-start-1 flex flex-col gap-y-3 text-center md:gap-y-5 lg:items-center">
                      <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl lg:aspect-square lg:w-48 lg:rounded-2xl">
                        <img
                          src={card.image}
                          alt={card.title}
                          loading="lazy"
                          className="absolute left-0 top-0 h-full w-full object-cover"
                        />
                      </div>

                      <div className="flex flex-col items-center gap-y-4">
                        <h2
                          className={cn(
                            "inline-flex flex-wrap justify-center text-center text-3xl font-medium leading-none tracking-tight lg:text-5xl xl:text-6xl",
                            card.text,
                          )}
                        >
                          {card.title}
                        </h2>

                        <div className="w-full">
                          {card.body.map((paragraph, paragraphIndex) => (
                            <p
                              key={paragraphIndex}
                              className={cn(
                                "mb-5 text-sm leading-normal lg:text-base",
                                paragraphIndex === card.body.length - 1 &&
                                  "mb-0",
                                card.text,
                              )}
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
