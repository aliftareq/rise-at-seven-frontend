"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Services", hasDropdown: true },
  { label: "International", hasDropdown: true },
  { label: "About", hasDropdown: true },
  { label: "Work", badge: "25" },
  { label: "Careers" },
  { label: "Blog" },
  { label: "Webinar" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 80);

      if (currentScrollY > lastScrollY && currentScrollY > 140) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed left-1.25 right-1.25 z-50 transition-all duration-600 ease-[cubic-bezier(0.135,0.9,0.15,1)] md:left-2.5 md:right-2.5",
          isScrolled ? "top-2.5" : "top-9.75 md:top-14.5",
          hidden && !menuOpen ? "translate-y-[-140%]" : "translate-y-0",
        )}
      >
        <div
          className={cn(
            "relative z-20 flex w-full items-center justify-between rounded-full px-4 transition-all duration-600 ease-[cubic-bezier(0.135,0.9,0.15,1)] lg:px-3",
            "h-10.5 md:h-16",
            isScrolled
              ? "bg-white/60 text-black backdrop-blur-lg"
              : "bg-transparent text-white",
          )}
        >
          {/* Logo */}
          <a
            href="#"
            aria-label="Rise at Seven homepage"
            className={cn(
              "ml-0 flex shrink-0 items-center leading-none md:ml-2",
              "text-[15px] font-medium tracking-[-0.07em] md:text-[30px]",
              isScrolled ? "text-black" : "text-white",
            )}
          >
            <span>Rise at Seven</span>
            <span className="ml-0.5 text-[6px] md:text-[10px]">®</span>
            <span className="ml-0.75 translate-y-1.5 text-[16px] leading-none md:translate-y-3 md:text-[34px]">
              ╲
            </span>
          </a>

          {/* Desktop nav links */}
          <nav className="relative ml-10 hidden items-center lg:inline-flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className={cn(
                  "group relative inline-flex rounded-full px-4 py-1 text-[14px] font-medium leading-tight tracking-[-0.045em] transition-all duration-300 hover:bg-white! hover:text-black! xl:text-[16px]",
                  isScrolled ? "text-black" : "text-white",
                )}
              >
                {item.badge && (
                  <span className="pointer-events-none absolute right-0 top-0 -translate-y-2.5 rounded-full bg-[#aef7df] px-1.5 py-0.5 text-[10px] font-light leading-none text-black transition-transform duration-300 group-hover:-translate-y-4">
                    {item.badge}
                  </span>
                )}

                <span className="text-current">
                  {item.label}
                  {item.hasDropdown ? <span className="ml-1">+</span> : null}
                </span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:inline-flex">
            <Link
              href="/connect-with-us"
              style={{
                backgroundColor: isScrolled ? "#111212" : "#ffffff",
                color: isScrolled ? "#ffffff" : "#111212",
              }}
              className="group relative inline-flex h-[45.333px] min-w-42.5 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-3xl border border-transparent px-6 py-3 text-base font-medium capitalize leading-5 tracking-[-0.4px] transition-[border-radius] duration-600 ease-[cubic-bezier(0.135,0.9,0.15,1)] hover:rounded-xl"
            >
              <span className="relative block h-5 overflow-hidden whitespace-nowrap text-current">
                <span className="flex h-5 items-center justify-center gap-x-2 whitespace-nowrap text-current transition-transform duration-600 ease-[cubic-bezier(0.135,0.9,0.15,1)] group-hover:-translate-y-6">
                  <span className="whitespace-nowrap text-current">
                    Get in touch
                  </span>
                  <span className="mt-1 inline-block shrink-0 text-xs leading-none text-current">
                    <ArrowUpRight
                      size={20}
                      strokeWidth={2.4}
                      className="shrink-0 text-current"
                    />
                  </span>
                </span>

                <span className="absolute left-0 top-0 flex h-5 translate-y-6 items-center justify-center gap-x-2 whitespace-nowrap text-current transition-transform duration-600 ease-[cubic-bezier(0.135,0.9,0.15,1)] group-hover:translate-y-0">
                  <span className="whitespace-nowrap text-current">
                    Get in touch
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

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-8 w-12 items-center justify-center lg:hidden"
          >
            <span className="flex h-2 w-5 flex-col items-start justify-between">
              <span
                className={cn(
                  "relative -top-px h-0.5 w-full transition-transform duration-500",
                  menuOpen && "translate-y-1 rotate-45",
                  isScrolled && !menuOpen ? "bg-black" : "bg-white",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full transition-transform duration-500",
                  menuOpen && "-translate-y-1 -rotate-45",
                  isScrolled && !menuOpen ? "bg-black" : "bg-white",
                )}
              />
            </span>
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
