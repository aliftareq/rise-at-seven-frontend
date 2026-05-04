"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/cn";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const menuItems = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Search & Growth Strategy", href: "/services/strategy-growth" },
      { label: "Onsite SEO", href: "/services/onsite-seo" },
      { label: "Content Experience", href: "/services/content-experience" },
      { label: "B2B Marketing", href: "/services/b2b-marketing" },
      { label: "Digital PR", href: "/services/digital-pr" },
      { label: "Social Media & Campaigns", href: "/services/social" },
      { label: "Data & Insights", href: "/services/data-insights" },
      {
        label: "Social SEO/Search",
        href: "/services/social-seo-tiktok-youtube",
      },
    ],
  },
  {
    label: "International",
    href: "/international",
    children: [
      { label: "US Digital PR", href: "/international/us-digital-pr" },
      { label: "Spain Digital PR", href: "/spain-digital-pr" },
      { label: "Germany Digital PR", href: "/germany-digital-pr" },
      { label: "Netherlands Digital PR", href: "/netherlands-digital-pr" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Meet The Risers", href: "/meet-the-team" },
      { label: "Culture", href: "/culture" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  { label: "Work", href: "/work" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Webinar", href: "/webinars" },
];

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-80 h-svh w-full p-2 backdrop-blur-sm transition duration-1000 lg:hidden",
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0",
      )}
    >
      <div className="flex h-full w-full flex-col items-start justify-between rounded-3xl bg-[#111212]/80 px-4 py-2.5 text-white">
        <div className="grid w-full gap-y-10">
          {/* Top row */}
          <div className="flex w-full flex-wrap items-center justify-between">
            <Link
              href="/"
              onClick={onClose}
              aria-label="Rise at Seven homepage"
              className="inline-flex w-32 items-center text-white md:w-40"
            >
              <span className="text-[24px] font-medium leading-none tracking-[-0.075em]">
                Rise at Seven
              </span>
              <span className="ml-0.5 -translate-y-1.75 text-[7px]">®</span>
              <span className="ml-0.75 translate-y-2 text-[22px] font-light leading-none">
                ╲
              </span>
            </Link>

            <div className="-mr-2">
              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="inline-flex h-8 w-12 items-center justify-center text-white"
              >
                <X size={30} strokeWidth={1.8} />
              </button>
            </div>
          </div>

          {/* Menu links */}
          <nav className="flex w-full flex-col items-start gap-y-1">
            {menuItems.map((item) => {
              const hasChildren = Boolean(item.children?.length);
              const isActive = activeItem === item.label;

              return (
                <div key={item.label} className="w-full">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={!hasChildren ? onClose : undefined}
                      className="text-4xl font-medium leading-none tracking-[-0.075em] text-white md:text-5xl"
                    >
                      {item.label}
                    </Link>

                    {hasChildren && (
                      <button
                        type="button"
                        aria-label={`Toggle ${item.label} submenu`}
                        onClick={() =>
                          setActiveItem(isActive ? null : item.label)
                        }
                        className="mr-[6px] flex shrink-0 items-center justify-center text-white transition-transform duration-300"
                        style={{
                          width: "28px",
                          height: "28px",
                          minWidth: "28px",
                          minHeight: "28px",
                          borderRadius: "9999px",
                          border: "1px solid rgba(255, 255, 255, 0.9)",
                          backgroundColor: "transparent",
                        }}
                      >
                        <ChevronDown
                          size={15}
                          strokeWidth={2.2}
                          className={cn(
                            "text-white transition-transform duration-300",
                            isActive ? "rotate-180" : "rotate-0",
                          )}
                        />
                      </button>
                    )}
                  </div>

                  {hasChildren && (
                    <div
                      className={cn(
                        "grid w-full transition-all duration-300 ease-out",
                        isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="grid gap-y-1 py-4">
                          {item.children?.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={onClose}
                              className="inline-flex text-[22px] font-medium leading-tight tracking-[-0.055em] text-white"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* CTA */}
        <Link
          href="/connect-with-us"
          onClick={onClose}
          className="group inline-flex w-full shrink-0 flex-row-reverse items-center justify-center gap-x-2 overflow-hidden rounded-3xl border border-transparent bg-white px-6 py-3 text-base font-medium capitalize leading-tight tracking-[-0.04em] text-[#111212] transition-[border-radius] duration-600 ease-[cubic-bezier(0.135,0.9,0.15,1)] hover:rounded-xl"
        >
          <span className="relative block h-5 overflow-hidden whitespace-nowrap text-current">
            <span className="flex h-5 items-center gap-x-2 text-current transition-transform duration-600 ease-[cubic-bezier(0.135,0.9,0.15,1)] group-hover:-translate-y-6">
              <span>Get in touch</span>
              <ArrowUpRight
                size={16}
                strokeWidth={2.4}
                className="mt-1 shrink-0 text-current"
              />
            </span>

            <span className="absolute left-0 top-0 flex h-5 translate-y-6 items-center gap-x-2 text-current transition-transform duration-600 ease-[cubic-bezier(0.135,0.9,0.15,1)] group-hover:translate-y-0">
              <span>Get in touch</span>
              <ArrowUpRight
                size={16}
                strokeWidth={2.4}
                className="mt-1 shrink-0 text-current"
              />
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
