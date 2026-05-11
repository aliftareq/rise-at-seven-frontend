/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
// components/Contact.tsx
"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

const items = [
  {
    text: "Chasing Consumers",
    image: "/images/contacts/contact-1.jpg",
  },
  {
    text: "Not Algorithms",
    image: "/images/contacts/contact-2.jpg",
  },
];

export default function Contact() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLAnchorElement | null>(null);

  const pos = useRef(0);

  // Desktop default speed
  const speed = useRef(-0.001);
  const targetSpeed = useRef(-0.001);

  const lastScrollY = useRef(0);
  const raf = useRef<number | null>(null);
  const resetTimer = useRef<NodeJS.Timeout | null>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const cursor = useRef({ x: 0, y: 0 });

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const getSpeedConfig = () => {
      const isMobile = window.innerWidth < 768;

      return {
        base: isMobile ? -0.025 : -0.01,
        scrollDown: isMobile ? -0.12 : -0.03,
        scrollUp: isMobile ? 0.06 : 0.02,
      };
    };

    const initialConfig = getSpeedConfig();

    speed.current = initialConfig.base;
    targetSpeed.current = initialConfig.base;
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;
      const delta = current - lastScrollY.current;
      const config = getSpeedConfig();

      if (delta > 0) {
        targetSpeed.current = config.scrollDown;
      } else if (delta < 0) {
        targetSpeed.current = config.scrollUp;
      }

      lastScrollY.current = current;

      if (resetTimer.current) {
        clearTimeout(resetTimer.current);
      }

      resetTimer.current = setTimeout(() => {
        const config = getSpeedConfig();
        targetSpeed.current = config.base;
      }, 300);
    };

    const animate = () => {
      speed.current += (targetSpeed.current - speed.current) * 0.04;
      pos.current += speed.current;

      if (pos.current < -50) pos.current = 0;
      if (pos.current > 0) pos.current = -50;

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${pos.current}%, 0, 0)`;
      }

      cursor.current.x += (mouse.current.x - cursor.current.x) * 0.16;
      cursor.current.y += (mouse.current.y - cursor.current.y) * 0.16;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursor.current.x}px, ${cursor.current.y}px, 0) translate(-50%, -50%)`;
      }

      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", onScroll);

      if (raf.current) {
        cancelAnimationFrame(raf.current);
      }

      if (resetTimer.current) {
        clearTimeout(resetTimer.current);
      }
    };
  }, []);

  return (
    <section
      onMouseEnter={(e) => {
        mouse.current = { x: e.clientX, y: e.clientY };
        cursor.current = { x: e.clientX, y: e.clientY };
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => {
        mouse.current = { x: e.clientX, y: e.clientY };
      }}
      className="relative overflow-hidden bg-grey-100 py-2 text-[#111212] md:py-9"
    >
      <a
        ref={cursorRef}
        href="/connect-with-us"
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-80 hidden items-center gap-x-2 rounded-full bg-[#b2f6e3] px-7 py-4 text-[18px] font-medium tracking-[-0.055em] text-[#111212] will-change-transform md:inline-flex",
          hovered ? "opacity-100" : "opacity-0",
        )}
        style={{
          transition:
            "opacity 0.25s ease, scale 0.35s cubic-bezier(0.135, 0.9, 0.15, 1)",
          scale: hovered ? "1" : "0.75",
        }}
      >
        Send Us Your Brief
        <ArrowUpRight size={20} strokeWidth={2.2} />
      </a>

      <a href="/" className="block cursor-none">
        <div className="relative z-0 flex w-[120vw] overflow-hidden">
          <div ref={trackRef} className="flex shrink-0 will-change-transform">
            {[...items, ...items, ...items, ...items].map((item, index) => (
              <div
                key={`${item.text}-${index}`}
                className="flex shrink-0 items-center gap-x-4 px-2 pb-3 lg:gap-x-10 lg:px-5 lg:pb-5 lg:pt-5"
              >
                <h2 className="relative inline-flex flex-1 text-left text-[75px] font-medium leading-[0.9] tracking-[-0.055em] text-[#111212] md:text-[100px] lg:pb-5 lg:text-[150px] xl:text-[210px]">
                  {item.text}
                </h2>

                <div className="w-[20vw] shrink-0 overflow-hidden rounded-2xl md:w-[15vw] lg:mb-10 lg:w-[12vw] lg:rounded-3xl">
                  <div className="relative w-full overflow-hidden pt-[100%]">
                    <img
                      src={item.image}
                      alt={item.text}
                      loading="lazy"
                      className="absolute left-0 top-0 h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </a>
    </section>
  );
}
