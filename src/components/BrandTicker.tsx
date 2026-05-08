"use client";

import Image from "next/image";

const logos = [
  { name: "AXA", src: "/images/brands/axa.png", width: 88, height: 88 },
  {
    name: "Capital One",
    src: "/images/brands/capital-one.png",
    width: 176,
    height: 64,
  },
  {
    name: "Emirates",
    src: "/images/brands/emirates.png",
    width: 150,
    height: 58,
  },
  {
    name: "HubSpot",
    src: "/images/brands/hubspot.png",
    width: 168,
    height: 54,
  },
  { name: "JD", src: "/images/brands/jd.jpg", width: 88, height: 88 },
  {
    name: "Kroger",
    src: "/images/brands/kroger.png",
    width: 148,
    height: 58,
  },
  {
    name: "Red Bull",
    src: "/images/brands/red-bull.jpg",
    width: 150,
    height: 58,
  },
  {
    name: "Revolution Beauty",
    src: "/images/brands/revolutionbeauty.jpg",
    width: 182,
    height: 48,
  },
  {
    name: "Shark Ninja",
    src: "/images/brands/shark-ninja.png",
    width: 162,
    height: 58,
  },
  { name: "Sixt", src: "/images/brands/sixt.png", width: 144, height: 56 },
  { name: "Xbox", src: "/images/brands/xbox.png", width: 130, height: 52 },
];

export default function BrandMarquee() {
  const repeated = [...logos, ...logos, ...logos];

  return (
    <>
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .marquee-track {
          animation: marquee-scroll 80s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="flex items-center w-full bg-[#f0f0ee] py-3 sm:py-4 overflow-hidden mt-8">
        {/* Left label — tighter on mobile */}
        <h2 className="shrink-0 pl-4 pr-3 sm:pl-8 sm:pr-6 inline-flex flex-wrap text-balance relative text-left justify-start text-neutral-900 text-xs sm:text-sm leading-tight font-sans font-medium tracking-tight max-w-18 sm:max-w-32">
          The agency behind ...
        </h2>

        {/* Scroller */}
        <div className="relative flex-1 overflow-hidden">
          {/* Left glassmorphism — 10% on mobile, 15% on desktop */}
          <div className="absolute left-0 top-0 bottom-0 w-[10%] sm:w-[15%] z-10 pointer-events-none backdrop-blur-sm bg-linear-to-r from-[rgba(240,240,238,0.98)] via-[rgba(240,240,238,0.6)] to-transparent" />

          {/* Right glassmorphism — 10% on mobile, 15% on desktop */}
          <div className="absolute right-0 top-0 bottom-0 w-[10%] sm:w-[15%] z-10 pointer-events-none backdrop-blur-sm bg-linear-to-l from-[rgba(240,240,238,0.98)] via-[rgba(240,240,238,0.6)] to-transparent" />

          {/* Right black gradient strip */}
          <div
            className="absolute right-0 top-0 bottom-0 z-20 pointer-events-none"
            style={{
              width: "1%",
              background:
                "linear-gradient(to left, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.45) 35%, rgba(0,0,0,0.15) 75%, transparent 100%)",
            }}
          />

          {/* Scrolling track */}
          <div className="marquee-track flex w-max">
            {repeated.map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                // px-4 on mobile keeps ~3 logos visible, px-12 on desktop unchanged
                className="flex items-center justify-center px-4 sm:px-12 h-14 sm:h-20 shrink-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  // max-h-8 on mobile scales logos down proportionally
                  className="object-contain grayscale opacity-70 max-h-8 sm:max-h-13 w-auto transition-all duration-200 hover:grayscale-0 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
