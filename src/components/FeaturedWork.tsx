/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/immutability */
"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

type Project = {
  id: number;
  name: string;
  years: string;
  color: string;
  result: string;
  category: string | null;
  src: string;
  width: number;
  height: number;
};

const projects: Project[] = [
  {
    id: 1,
    name: "SIXT",
    years: "2023-2025",
    color: "#cb7b3a",
    result: "An extra 3m clicks regionally through SEO",
    category: "Car rental",
    src: "/images/work/sixt.png",
    width: 800,
    height: 600,
  },
  {
    id: 2,
    name: "Dojo - B2B",
    years: "2021-2025",
    color: "#fdd8c4",
    result: "A B2B success story for Dojo card machines",
    category: "Card Machines",
    src: "/images/work/dojo.png",
    width: 800,
    height: 600,
  },
  {
    id: 3,
    name: "Magnet Trade - B2B",
    years: "2023-2024",
    color: "#d8c4fd",
    result: "Full service SEO success story — 170%+ increase",
    category: null,
    src: "/images/work/magnet.png",
    width: 800,
    height: 600,
  },
  {
    id: 4,
    name: "Leading eSIM Brand",
    years: "2023-2025",
    color: "#cb7b3a",
    result: "Increasing brand & non-brand visibility UK/ES",
    category: "Esims",
    src: "/images/work/esims.png",
    width: 800,
    height: 600,
  },
  {
    id: 5,
    name: "JD Sports",
    years: "2025",
    color: "#3a8ccb",
    result: "65% up YoY in clicks for JD Sports FR, IT, ES",
    category: "Trainers",
    src: "/images/work/trainers.png",
    width: 800,
    height: 600,
  },
  {
    id: 6,
    name: "Parkdean Resorts",
    years: "2019-2025",
    color: "#d2b59d",
    result: "Dominating Google and AI search",
    category: "Easter Breaks",
    src: "/images/work/easter-breaks.png",
    width: 800,
    height: 600,
  },
  {
    id: 7,
    name: "Pooky",
    years: "2025",
    color: "#39b0bd",
    result: "Driving demand for Pooky Rechargeable Lights",
    category: "Rechargeable Lights",
    src: "/images/work/rechargable-lights.png",
    width: 800,
    height: 600,
  },
  {
    id: 8,
    name: "Parkdean Resorts",
    years: "2019-2025",
    color: "#d29dd0",
    result: "Social search & multi-channel content to #1",
    category: "UK holidays",
    src: "/images/work/uk-holidays.png",
    width: 800,
    height: 600,
  },
  {
    id: 9,
    name: "Revolution Beauty",
    years: "2022-2025",
    color: "#fecacc",
    result: "Building the UK's leading beauty dupe brand",
    category: "Beauty Dupes",
    src: "/images/work/beauty-dupes.png",
    width: 800,
    height: 600,
  },
  {
    id: 10,
    name: "Lloyds Pharmacy",
    years: "2022-23",
    color: "#60dcfb",
    result: "Driving category leadership for STI tests",
    category: "STI tests",
    src: "/images/work/sti_test.png",
    width: 800,
    height: 600,
  },
  {
    id: 11,
    name: "PrettyLittleThing",
    years: "2021-2023",
    color: "#fecacc",
    result: 'Driving discovery for everything "outfits" for PLT',
    category: "Outfits",
    src: "/images/work/outfits.png",
    width: 800,
    height: 600,
  },
];

function isLightColor(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return (r * 299 + g * 587 + b * 114) / 1000 > 155;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function IconSearch() {
  return (
    <svg
      width={13}
      height={13}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function IconTrend() {
  return (
    <svg
      width={13}
      height={13}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function IconArrow({ color }: { color: string }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function CategoryBadge({
  category,
  style,
}: {
  category: string;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        borderRadius: 999,
        padding: "7px 14px",
        fontSize: 12,
        fontWeight: 500,
        ...style,
      }}
    >
      <IconSearch />
      <span>{category}</span>
      <IconTrend />
    </div>
  );
}

function ProjectCard({
  project,
  index,
  onVisible,
}: {
  project: Project;
  index: number;
  onVisible: (idx: number) => void;
}) {
  const [hovered, setHovered] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const cursorPosition = useRef({ x: 50, y: 50 });
  const hoverRafRef = useRef<number | null>(null);

  const textColor = isLightColor(project.color) ? "#111212" : "#ffffff";

  useEffect(() => {
    const el = cardRef.current;
    const root = document.querySelector("[data-fw-scroll]") as Element | null;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
          onVisible(index);
        }
      },
      {
        root,
        threshold: [0.25, 0.35, 0.5, 0.75],
      },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [index, onVisible]);

  const updateHoverMotion = useCallback(() => {
    const card = cardRef.current;
    const cursor = cursorRef.current;
    const image = imageRef.current;

    if (!card) {
      hoverRafRef.current = null;
      return;
    }

    const { x, y } = cursorPosition.current;

    if (cursor) {
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    }

    if (image) {
      const cardWidth = card.clientWidth || 1;
      const cardHeight = card.clientHeight || 1;

      const moveX = (x / cardWidth - 0.5) * 14;
      const moveY = (y / cardHeight - 0.5) * 14;

      image.style.transform = hovered
        ? `scale(1.06) translate3d(${moveX}px, ${moveY}px, 0)`
        : "scale(1) translate3d(0, 0, 0)";
    }

    hoverRafRef.current = null;
  }, [hovered]);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;

      cursorPosition.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };

      if (hoverRafRef.current === null) {
        hoverRafRef.current = requestAnimationFrame(updateHoverMotion);
      }
    },
    [updateHoverMotion],
  );

  const handleMouseLeave = () => {
    setHovered(false);

    if (imageRef.current) {
      imageRef.current.style.transform = "scale(1) translate3d(0, 0, 0)";
    }
  };

  useEffect(() => {
    return () => {
      if (hoverRafRef.current !== null) {
        cancelAnimationFrame(hoverRafRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      data-index={index}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
        marginBottom: 28,
        cursor: "none",
        scrollMarginTop: 28,
        willChange: "transform",
      }}
    >
      <div
        style={{
          position: "relative",
          paddingTop: "72%",
          background: "#1a1a1a",
          overflow: "hidden",
        }}
      >
        <Image
          ref={imageRef}
          src={project.src}
          alt={project.name}
          width={project.width}
          height={project.height}
          priority={index < 2}
          draggable={false}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "scale(1) translate3d(0, 0, 0)",
            transition: "transform 1.05s cubic-bezier(0.16, 1, 0.3, 1)",
            willChange: "transform",
            userSelect: "none",
          }}
        />

        {project.category && (
          <div
            data-card-category-badge
            style={{
              position: "absolute",
              right: 14,
              bottom: 14,
              zIndex: 10,
            }}
          >
            <CategoryBadge
              category={project.category}
              style={{
                background: "rgba(255,255,255,0.18)",
                backdropFilter: "blur(8px)",
                color: "#ffffff",
              }}
            />
          </div>
        )}

        <div
          data-mobile-card-info
          style={{
            position: "absolute",
            left: 14,
            bottom: 12,
            zIndex: 12,
            display: "none",
            color: "#ffffff",
            pointerEvents: "none",
          }}
        >
          <p
            style={{
              margin: "0 0 2px 0",
              fontSize: 11,
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            [{project.years}]
          </p>

          <h3
            style={{
              margin: 0,
              fontSize: 26,
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: "-0.075em",
            }}
          >
            {project.name}
          </h3>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: project.color,
          clipPath: hovered ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)",
          transition: "clip-path 0.95s cubic-bezier(0.16, 1, 0.3, 1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 18,
          padding: "20px 24px",
          zIndex: 20,
          pointerEvents: "none",
          willChange: "clip-path",
        }}
      >
        <p
          style={{
            fontSize: "clamp(20px, 3vw, 38px)",
            fontWeight: 500,
            color: textColor,
            letterSpacing: "-0.035em",
            lineHeight: 1.08,
            maxWidth: "88%",
            margin: 0,
          }}
        >
          {project.result}
        </p>

        {project.category && (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <CategoryBadge
              category={project.category}
              style={{
                background: "rgba(255,255,255,0.15)",
                color: textColor,
              }}
            />
          </div>
        )}
      </div>

      <div
        ref={cursorRef}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "translate3d(50%, 50%, 0) translate(-50%, -50%)",
          width: 62,
          height: 62,
          borderRadius: "50%",
          background: project.color,
          border: `2px solid ${project.color}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: hovered ? 1 : 0,
          scale: hovered ? "1" : "0.82",
          transition:
            "opacity 0.35s ease, scale 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 30,
          pointerEvents: "none",
          boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
          willChange: "transform, opacity, scale",
        }}
      >
        <IconArrow color={textColor} />
      </div>
    </div>
  );
}

const TRACK_HEIGHT = 340;
const THUMB_HEIGHT = 180;

export default function FeaturedWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [thumbTop, setThumbTop] = useState(0);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);

  const nameViewportRef = useRef<HTMLDivElement>(null);
  const nameListRef = useRef<HTMLDivElement>(null);
  const nameItemRefs = useRef<Array<HTMLDivElement | null>>([]);

  const activeIndexRef = useRef(0);

  const setActiveProject = useCallback((idx: number) => {
    activeIndexRef.current = idx;
    setActiveIndex(idx);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const getCenteredNameOffset = useCallback((idx: number) => {
    const viewport = nameViewportRef.current;
    const item = nameItemRefs.current[idx];

    if (!viewport || !item) return 0;

    const viewportCenter = viewport.clientHeight / 2;
    const itemCenter = item.offsetTop + item.offsetHeight / 2;

    return viewportCenter - itemCenter;
  }, []);

  const syncLeftListWithScroll = useCallback(() => {
    if (isMobile) return;

    const panel = rightPanelRef.current;
    const list = nameListRef.current;
    const firstItem = nameItemRefs.current[0];
    const lastItem = nameItemRefs.current[projects.length - 1];

    if (!panel || !list || !firstItem || !lastItem) return;

    const maxScroll = panel.scrollHeight - panel.clientHeight;
    const progress = maxScroll > 0 ? panel.scrollTop / maxScroll : 0;

    const firstOffset = getCenteredNameOffset(0);
    const lastOffset = getCenteredNameOffset(projects.length - 1);

    const nextY = firstOffset + (lastOffset - firstOffset) * progress;

    list.style.transform = `translate3d(0, ${nextY}px, 0)`;
  }, [getCenteredNameOffset, isMobile]);

  const updateThumb = useCallback(() => {
    if (isMobile) return;

    const panel = rightPanelRef.current;
    if (!panel) return;

    const maxScroll = panel.scrollHeight - panel.clientHeight;
    const progress = maxScroll > 0 ? panel.scrollTop / maxScroll : 0;

    setThumbTop(progress * (TRACK_HEIGHT - THUMB_HEIGHT));
  }, [isMobile]);

  const detectActiveFromScroll = useCallback(() => {
    const panel = rightPanelRef.current;
    if (!panel) return;

    const cards = Array.from(
      panel.querySelectorAll<HTMLElement>("[data-index]"),
    );

    const panelRect = panel.getBoundingClientRect();
    const targetY = panelRect.top + panelRect.height * 0.43;

    let closestIndex = activeIndexRef.current;
    let closestDistance = Infinity;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.top + rect.height * 0.5;
      const distance = Math.abs(cardCenter - targetY);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = Number(card.dataset.index || 0);
      }
    });

    if (closestIndex !== activeIndexRef.current) {
      setActiveProject(closestIndex);
    }
  }, [setActiveProject]);

  const updateScrollLinkedUI = useCallback(() => {
    updateThumb();
    detectActiveFromScroll();
    syncLeftListWithScroll();
  }, [detectActiveFromScroll, syncLeftListWithScroll, updateThumb]);

  useEffect(() => {
    if (isMobile) {
      setScrollDistance(0);
      return;
    }

    const panel = rightPanelRef.current;
    if (!panel) return;

    const updateDistance = () => {
      const maxScroll = panel.scrollHeight - panel.clientHeight;
      setScrollDistance(Math.max(0, maxScroll));
    };

    updateDistance();

    const id = requestAnimationFrame(updateDistance);

    window.addEventListener("resize", updateDistance);

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", updateDistance);
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const wrapper = wrapperRef.current;
    const panel = rightPanelRef.current;

    if (!wrapper || !panel) return;

    let rafId: number | null = null;

    const syncPanelToPageScroll = () => {
      const maxScroll = panel.scrollHeight - panel.clientHeight;

      if (maxScroll <= 0) return;

      const wrapperTop = wrapper.offsetTop;
      const progress = clamp((window.scrollY - wrapperTop) / maxScroll, 0, 1);

      panel.scrollTop = progress * maxScroll;

      updateScrollLinkedUI();
    };

    const onScroll = () => {
      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        syncPanelToPageScroll();
        rafId = null;
      });
    };

    syncPanelToPageScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [isMobile, scrollDistance, updateScrollLinkedUI]);

  const scrollToCard = useCallback(
    (idx: number) => {
      const panel = rightPanelRef.current;
      const wrapper = wrapperRef.current;
      const card = panel?.querySelector<HTMLElement>(`[data-index="${idx}"]`);

      if (!panel || !card) return;

      const panelTop = panel.getBoundingClientRect().top;
      const cardTop = card.getBoundingClientRect().top;
      const maxScroll = panel.scrollHeight - panel.clientHeight;

      const target = clamp(
        panel.scrollTop + cardTop - panelTop - 28,
        0,
        maxScroll,
      );

      setActiveProject(idx);

      if (isMobile || !wrapper) {
        card.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        return;
      }

      window.scrollTo({
        top: wrapper.offsetTop + target,
        behavior: "smooth",
      });
    },
    [isMobile, setActiveProject],
  );

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      updateScrollLinkedUI();
    });

    return () => cancelAnimationFrame(id);
  }, [updateScrollLinkedUI, isMobile]);

  return (
    <div
      ref={wrapperRef}
      data-featured-work-wrapper
      style={{
        background: "#eeeeec",
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: isMobile ? 56 : 64,
        position: "relative",
        height: isMobile ? "auto" : `calc(100vh + ${scrollDistance}px)`,
      }}
    >
      <section
        ref={sectionRef}
        data-featured-work-section
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          background: "#111212",
          borderRadius: isMobile ? 18 : 24,
          height: isMobile ? "auto" : "calc(100vh - 48px)",
          overflow: isMobile ? "visible" : "hidden",
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
          overscrollBehavior: isMobile ? "auto" : "contain",
          touchAction: "pan-y",
          position: isMobile ? "relative" : "sticky",
          top: isMobile ? "auto" : 24,
        }}
      >
        <div
          data-featured-work-left-panel
          style={{
            width: isMobile ? "100%" : "50%",
            flexBasis: isMobile ? "auto" : "50%",
            flexShrink: 0,
            position: "relative",
            height: isMobile ? "auto" : "100%",
            display: "flex",
            flexDirection: "column",
            padding: isMobile ? "24px 18px 8px 18px" : "48px 32px 48px 40px",
            overflow: isMobile ? "visible" : "hidden",
          }}
        >
          <p
            style={{
              color: "#ffffff",
              fontSize: isMobile ? 20 : 28,
              fontWeight: isMobile ? 400 : 500,
              letterSpacing: isMobile ? "-0.065em" : "-0.055em",
              lineHeight: isMobile ? 0.95 : 1,
              margin: isMobile ? 0 : "0 0 64px 0",
            }}
          >
            Featured Work
          </p>

          <div
            ref={nameViewportRef}
            style={{
              position: "relative",
              flex: 1,
              overflow: "hidden",
              paddingRight: 108,
              display: isMobile ? "none" : "block",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "34%",
                zIndex: 20,
                pointerEvents: "none",
                background:
                  "linear-gradient(to bottom, #111212 0%, rgba(17,18,18,0.94) 22%, rgba(17,18,18,0.42) 68%, rgba(17,18,18,0) 100%)",
              }}
            />

            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "34%",
                zIndex: 20,
                pointerEvents: "none",
                background:
                  "linear-gradient(to top, #111212 0%, rgba(17,18,18,0.94) 22%, rgba(17,18,18,0.42) 68%, rgba(17,18,18,0) 100%)",
              }}
            />

            <div
              ref={nameListRef}
              style={{
                position: "relative",
                zIndex: 10,
                display: "grid",
                gap: 2,
                willChange: "transform",
                transform: "translate3d(0, 0, 0)",
              }}
            >
              {projects.map((project, index) => {
                const distance = Math.abs(activeIndex - index);
                const isActive = activeIndex === index;

                return (
                  <div
                    key={project.id}
                    ref={(el) => {
                      nameItemRefs.current[index] = el;
                    }}
                    onClick={() => scrollToCard(index)}
                    style={{
                      position: "relative",
                      minHeight: 72,
                      cursor: "pointer",
                      paddingRight: 102,
                      transform: isActive
                        ? "translateX(12px)"
                        : "translateX(0)",
                      opacity: distance > 3 ? 0.18 : 1,
                      transition:
                        "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease",
                    }}
                  >
                    <div
                      style={{
                        color: isActive ? "#ffffff" : "rgba(255,255,255,0.22)",
                        fontSize: "clamp(48px, 5.75vw, 82px)",
                        fontWeight: 500,
                        letterSpacing: "-0.075em",
                        lineHeight: 0.86,
                        textAlign: "left",
                        textWrap: "balance",
                        transition: "color 0.5s ease",
                      }}
                    >
                      {project.name}
                    </div>

                    <div
                      style={{
                        position: "absolute",
                        right: 0,
                        top: 6,
                        color: isActive
                          ? "rgba(255,255,255,0.72)"
                          : "rgba(255,255,255,0.25)",
                        fontSize: 16,
                        fontWeight: 600,
                        letterSpacing: "-0.04em",
                        lineHeight: 1.08,
                        textAlign: "left",
                        width: 86,
                        transition: "color 0.5s ease",
                      }}
                    >
                      [{project.years}]
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div
          style={{
            width: isMobile ? "100%" : "50%",
            flexBasis: isMobile ? "auto" : "50%",
            flexShrink: 0,
            position: "relative",
            height: isMobile ? "auto" : "100%",
            overflow: isMobile ? "visible" : "hidden",
          }}
        >
          <div
            data-featured-work-scroll-stick
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 0,
              top: `calc(50% - ${TRACK_HEIGHT / 2}px + ${thumbTop}px)`,
              zIndex: 80,
              width: 12,
              height: THUMB_HEIGHT,
              pointerEvents: "none",
              borderRadius: 0,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.62) 18%, rgba(0,0,0,0.08) 48%, rgba(0,0,0,0.08) 54%, rgba(0,0,0,0.62) 82%, rgba(0,0,0,0.96) 100%)",
              transition: "top 0.12s linear",
              display: isMobile ? "none" : "block",
            }}
          />

          <div
            ref={rightPanelRef}
            data-fw-scroll
            data-lenis-prevent
            onScroll={updateScrollLinkedUI}
            style={
              {
                width: "100%",
                height: isMobile ? "auto" : "100%",
                overflowY: isMobile ? "visible" : "hidden",
                padding: isMobile ? "18px 16px 20px 16px" : "28px 40px 56px 0",
                scrollbarWidth: "none",
                overscrollBehavior: isMobile ? "auto" : "contain",
                scrollBehavior: "auto",
                WebkitOverflowScrolling: "touch",
              } as CSSProperties
            }
          >
            <style>{`
              [data-fw-scroll]::-webkit-scrollbar {
                display: none;
              }

              [data-featured-work-cta-wrap] {
                display: flex;
                justify-content: center;
                padding: 42px 16px 0;
              }

              [data-featured-work-cta] {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                height: 68px;
                padding: 0 38px;
                border-radius: 999px;
                background: #ffffff;
                color: #111212;
                font-size: 23px;
                font-weight: 600;
                line-height: 1;
                letter-spacing: -0.055em;
                text-decoration: none;
              }

              @media (max-width: 900px) {
                [data-index] {
                  margin-bottom: 14px !important;
                  border-radius: 12px !important;
                  cursor: pointer !important;
                }

                [data-index] > div:first-child {
                  padding-top: 74% !important;
                }

                [data-card-category-badge] {
                  top: 12px !important;
                  right: 12px !important;
                  bottom: auto !important;
                }

                [data-card-category-badge] > div {
                  padding: 6px 10px !important;
                  gap: 6px !important;
                  font-size: 10px !important;
                }

                [data-mobile-card-info] {
                  display: block !important;
                }

                [data-index] > div:nth-child(2),
                [data-index] > div:nth-child(3) {
                  display: none !important;
                }

                [data-featured-work-cta-wrap] {
                  padding: 46px 16px 0 !important;
                }

                [data-featured-work-cta] {
                  width: 100% !important;
                  height: 60px !important;
                  padding: 0 24px !important;
                  font-size: 20px !important;
                }
              }
            `}</style>

            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onVisible={setActiveProject}
              />
            ))}
          </div>
        </div>
      </section>

      <div data-featured-work-cta-wrap>
        <Link href="/work" data-featured-work-cta className="group">
          <span className="relative block h-6 overflow-hidden whitespace-nowrap text-current">
            <span className="flex h-6 items-center justify-center gap-x-2 whitespace-nowrap text-current transition-transform duration-600 ease-[cubic-bezier(0.135,0.9,0.15,1)] group-hover:-translate-y-7">
              <span className="whitespace-nowrap text-current">
                Explore Our Work
              </span>

              <span className="mt-1 inline-block shrink-0 text-xs leading-none text-current">
                <ArrowUpRight
                  size={20}
                  strokeWidth={2.4}
                  className="shrink-0 text-current"
                />
              </span>
            </span>

            <span className="absolute left-0 top-0 flex h-6 translate-y-7 items-center justify-center gap-x-2 whitespace-nowrap text-current transition-transform duration-600 ease-[cubic-bezier(0.135,0.9,0.15,1)] group-hover:translate-y-0">
              <span className="whitespace-nowrap text-current">
                Explore Our Work
              </span>

              <span className="mt-1 inline-block shrink-0 text-xs leading-none text-current">
                <ArrowUpRight
                  size={20}
                  strokeWidth={2.4}
                  className="shrink-0 text-current"
                />
              </span>
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
