"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function PageLoadReveal() {
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const loader = loaderRef.current;
    if (!loader) return;

    const tl = gsap.timeline({
      delay: 0.25,
      onComplete: () => setShow(false),
    });

    tl.to(loader, {
      yPercent: -120,
      duration: 1.35,
      ease: "power4.inOut",
    });

    return () => {
      tl.kill();
    };
  }, []);

  if (!show) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed left-0 top-0 z-9999 pointer-events-none h-[120vh] w-full bg-[#b6f5e3]"
      style={{
        borderBottomLeftRadius: "50% 12%",
        borderBottomRightRadius: "50% 12%",
      }}
    />
  );
}
