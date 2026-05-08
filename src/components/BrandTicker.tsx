// "use client";

// import Image from "next/image";

// const logos = [
//   { name: "AXA", src: "/images/brands/axa.png", width: 88, height: 88 },
//   {
//     name: "Capital One",
//     src: "/images/brands/capital-one.png",
//     width: 176,
//     height: 64,
//   },
//   {
//     name: "Emirates",
//     src: "/images/brands/emirates.png",
//     width: 150,
//     height: 58,
//   },
//   {
//     name: "HubSpot",
//     src: "/images/brands/hubspot.png",
//     width: 168,
//     height: 54,
//   },
//   { name: "JD", src: "/images/brands/jd.jpg", width: 88, height: 88 },
//   {
//     name: "Kroger",
//     src: "/images/brands/kroger.png",
//     width: 148,
//     height: 58,
//   },
//   {
//     name: "Red Bull",
//     src: "/images/brands/red-bull.jpg",
//     width: 150,
//     height: 58,
//   },
//   {
//     name: "Revolution Beauty",
//     src: "/images/brands/revolutionbeauty.jpg",
//     width: 182,
//     height: 48,
//   },
//   {
//     name: "Shark Ninja",
//     src: "/images/brands/shark-ninja.png",
//     width: 162,
//     height: 58,
//   },
//   { name: "Sixt", src: "/images/brands/sixt.png", width: 144, height: 56 },
//   { name: "Xbox", src: "/images/brands/xbox.png", width: 130, height: 52 },
// ];

// export default function BrandMarquee() {
//   const repeated = [...logos, ...logos, ...logos];

//   return (
//     <>
//       <style>{`
//         @keyframes marquee-scroll {
//           0%   { transform: translateX(0); }
//           100% { transform: translateX(-33.333%); }
//         }
//         .marquee-track {
//           animation: marquee-scroll 80s linear infinite;
//           will-change: transform;
//         }
//         .marquee-track:hover {
//           animation-play-state: paused;
//         }
//       `}</style>

//       <section className="flex items-center w-full bg-[#f0f0ee] py-3 sm:py-4 overflow-hidden mt-8">
//         {/* Left label — tighter on mobile */}
//         <h2 className="shrink-0 pl-4 pr-3 sm:pl-8 sm:pr-6 inline-flex flex-wrap text-balance relative text-left justify-start text-neutral-900 text-xs sm:text-sm leading-tight font-sans font-medium tracking-tight max-w-18 sm:max-w-32">
//           The agency behind ...
//         </h2>

//         {/* Scroller */}
//         <div className="relative flex-1 overflow-hidden">
//           {/* Left glassmorphism — 10% on mobile, 15% on desktop */}
//           <div className="absolute left-0 top-0 bottom-0 w-[10%] sm:w-[15%] z-10 pointer-events-none backdrop-blur-sm bg-linear-to-r from-[rgba(240,240,238,0.98)] via-[rgba(240,240,238,0.6)] to-transparent" />

//           {/* Right glassmorphism — 10% on mobile, 15% on desktop */}
//           <div className="absolute right-0 top-0 bottom-0 w-[10%] sm:w-[15%] z-10 pointer-events-none backdrop-blur-sm bg-linear-to-l from-[rgba(240,240,238,0.98)] via-[rgba(240,240,238,0.6)] to-transparent" />

//           {/* Right black gradient strip */}
//           <div
//             className="absolute right-0 top-0 bottom-0 z-20 pointer-events-none"
//             style={{
//               width: "1%",
//               background:
//                 "linear-gradient(to left, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.45) 35%, rgba(0,0,0,0.15) 75%, transparent 100%)",
//             }}
//           />

//           {/* Scrolling track */}
//           <div className="marquee-track flex w-max">
//             {repeated.map((logo, i) => (
//               <div
//                 key={`${logo.name}-${i}`}
//                 // px-4 on mobile keeps ~3 logos visible, px-12 on desktop unchanged
//                 className="flex items-center justify-center px-4 sm:px-12 h-14 sm:h-20 shrink-0"
//               >
//                 <Image
//                   src={logo.src}
//                   alt={logo.name}
//                   width={logo.width}
//                   height={logo.height}
//                   // max-h-8 on mobile scales logos down proportionally
//                   className="object-contain grayscale opacity-70 max-h-8 sm:max-h-13 w-auto transition-all duration-200 hover:grayscale-0 hover:opacity-100"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

  const trackRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);

  const offsetRef = useRef(0);
  const setWidthRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);

  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      setWidthRef.current = trackRef.current.scrollWidth / 3;
    };

    measure();
    window.addEventListener("resize", measure);

    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const speed = 0.03;

    const animate = (time: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (!isDraggingRef.current && setWidthRef.current > 0) {
        offsetRef.current =
          (offsetRef.current + delta * speed) % setWidthRef.current;

        setOffset(offsetRef.current);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    setIsDragging(true);

    dragStartXRef.current = event.clientX;
    dragStartOffsetRef.current = offsetRef.current;

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || setWidthRef.current <= 0) return;

    const dragDistance = event.clientX - dragStartXRef.current;
    const nextOffset = dragStartOffsetRef.current - dragDistance;

    const normalizedOffset =
      ((nextOffset % setWidthRef.current) + setWidthRef.current) %
      setWidthRef.current;

    offsetRef.current = normalizedOffset;
    setOffset(normalizedOffset);
  };

  const stopDragging = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
    lastTimeRef.current = null;
  };

  return (
    <section className="mt-8 flex w-full items-center overflow-hidden bg-[#f0f0ee] py-3 sm:py-4">
      {/* Left label */}
      <h2 className="relative inline-flex max-w-18 shrink-0 flex-wrap justify-start text-balance pl-4 pr-3 text-left font-sans text-xs font-medium leading-tight tracking-tight text-neutral-900 sm:max-w-32 sm:pl-8 sm:pr-6 sm:text-sm">
        The agency behind ...
      </h2>

      {/* Scroller */}
      <div
        className={[
          "relative flex-1 overflow-hidden",
          isDragging ? "cursor-grabbing" : "cursor-grab",
        ].join(" ")}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        onPointerLeave={stopDragging}
      >
        {/* Left glassmorphism */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-[10%] bg-linear-to-r from-[rgba(240,240,238,0.98)] via-[rgba(240,240,238,0.6)] to-transparent backdrop-blur-sm sm:w-[15%]" />

        {/* Right glassmorphism */}
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-[10%] bg-linear-to-l from-[rgba(240,240,238,0.98)] via-[rgba(240,240,238,0.6)] to-transparent backdrop-blur-sm sm:w-[15%]" />

        {/* Right black gradient strip */}
        <div
          className="pointer-events-none absolute bottom-0 right-0 top-0 z-20"
          style={{
            width: "1%",
            background:
              "linear-gradient(to left, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.45) 35%, rgba(0,0,0,0.15) 75%, transparent 100%)",
          }}
        />

        {/* Scrolling track */}
        <div
          ref={trackRef}
          className="flex w-max select-none"
          style={{
            transform: `translate3d(${-offset}px, 0, 0)`,
            willChange: "transform",
          }}
        >
          {repeated.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex h-14 shrink-0 items-center justify-center px-4 sm:h-20 sm:px-12"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                draggable={false}
                className="max-h-8 w-auto object-contain opacity-70 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0 sm:max-h-13"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
