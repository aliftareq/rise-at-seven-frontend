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
              aria-label="Rise at Seven homepage"
              className={cn(
                "ml-0 flex h-4.5 w-36 shrink-0 items-center md:ml-2 md:h-5.25 md:w-42",
              )}
            >
              <svg
                className="h-full w-full fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 168 21"
                aria-hidden="true"
              >
                <path d="M91.3152 5.40061C91.3152 3.94241 92.5306 2.67359 93.9881 2.67359C95.7162 2.67359 96.797 3.83419 96.797 5.56225H99.7127C99.7127 2.1873 97.3096 0 93.9874 0C90.9371 0 88.3988 2.32257 88.3988 5.42766C88.3988 9.31596 90.883 10.2344 93.9874 11.4221C95.6627 12.07 97.2007 12.5563 97.2007 14.6895C97.2007 16.634 95.9867 18.0651 93.9874 18.0651C91.8813 18.0651 90.7477 16.3905 90.7477 14.446H87.832C87.832 18.0651 90.3426 20.7381 93.9874 20.7381C97.6323 20.7381 100.118 18.2816 100.118 14.6895C100.118 7.10161 91.3145 9.64061 91.3145 5.40061H91.3152Z" />
                <path d="M109.209 4.99609C104.834 4.99609 101.539 8.53405 101.539 12.8539C101.539 17.1737 104.888 20.738 109.155 20.738C112.422 20.738 115.203 18.713 116.337 15.662H113.529C112.718 17.2278 111.017 18.1733 109.262 18.1733C106.806 18.1733 104.915 16.4182 104.348 14.0963H116.743C116.797 13.6371 116.823 13.1508 116.823 12.6922C116.823 8.47926 113.447 4.99609 109.209 4.99609ZM104.348 11.9361C104.509 9.47823 106.751 7.56147 109.181 7.56147C111.611 7.56147 113.853 9.47823 114.014 11.9361H104.348Z" />
                <path d="M127.476 5.40039L123.575 16.0941L119.673 5.40039H116.676L122.617 20.3598H124.588L130.475 5.40039H127.476Z" />
                <path d="M137.942 4.99609C133.567 4.99609 130.273 8.53405 130.273 12.8539C130.273 17.1737 133.621 20.738 137.888 20.738C141.155 20.738 143.936 18.713 145.071 15.662H142.262C141.453 17.2278 139.75 18.1733 137.996 18.1733C135.538 18.1733 133.649 16.4182 133.081 14.0963H145.476C145.53 13.6371 145.556 13.1508 145.556 12.6922C145.556 8.47926 142.182 4.99609 137.942 4.99609ZM133.081 11.9361C133.243 9.47823 135.484 7.56147 137.915 7.56147C140.347 7.56147 142.586 9.47823 142.749 11.9361H133.081Z" />
                <path d="M147.473 8.21195V8.69013V20.3618H150.032V10.1815L167.216 20.3618V17.2405L147.473 5.40039V8.21195Z" />
                <path d="M67.8431 7.50804H67.789C66.6818 5.80635 64.7103 4.99609 62.713 4.99609C58.1775 4.99609 54.7734 8.3981 54.7734 12.935C54.7734 17.4719 58.2296 20.7387 62.713 20.7387C64.7651 20.7387 66.7359 19.8473 67.789 18.0387H67.8431V20.3606H70.652V5.40122H67.8431V7.50804ZM62.686 18.1733C59.823 18.1733 57.5823 15.7168 57.5823 12.9073C57.5823 10.0978 59.7425 7.56079 62.7124 7.56079C65.6822 7.56079 67.8972 9.90973 67.8972 12.9073C67.8972 15.9048 65.6024 18.1733 62.6867 18.1733H62.686Z" />
                <path d="M77.5832 0.378906H74.7736V5.40144H72.75V7.96681H74.7736V20.3608H77.5832V7.96681H80.0403V5.40144H77.5832V0.378906Z" />
                <path d="M18.3089 0.378906H15.5V3.2953H18.3089V0.378906Z" />
                <path d="M18.3089 5.02344H15.5V19.9828H18.3089V5.02344Z" />
                <path d="M25.8409 10.7205C24.8142 10.3959 23.5183 10.0996 23.5183 8.77603C23.5183 7.77639 24.3279 7.18256 25.2728 7.18256C26.4077 7.18256 27.0549 7.91166 27.1895 8.99178H29.9984C29.9443 6.39935 27.9727 4.61719 25.4087 4.61719C22.8447 4.61719 20.7088 6.3723 20.7088 8.93767C20.7088 14.2307 27.5412 12.6102 27.5412 15.743C27.5412 17.0389 26.6227 17.7951 25.381 17.7951C23.707 17.7951 22.9516 16.6074 22.8427 15.0681H20.0352C20.0352 17.417 21.1951 19.2269 23.4094 20.0094C24.0303 20.2252 24.6789 20.3604 25.3262 20.3604C28.1892 20.3604 30.3494 18.5248 30.3494 15.5807C30.3494 12.6366 28.296 11.476 25.8402 10.7205H25.8409Z" />
                <path d="M39.3637 4.61719C34.9891 4.61719 31.6953 8.15514 31.6953 12.475C31.6953 16.7948 35.0432 20.3591 39.3096 20.3591C42.577 20.3591 45.3581 18.3341 46.493 15.2831H43.6842C42.8746 16.8489 41.1722 17.7944 39.4178 17.7944C36.96 17.7944 35.0709 16.0393 34.5028 13.7174H46.8975C46.9516 13.2582 46.978 12.7719 46.978 12.3133C46.978 8.10036 43.6037 4.61719 39.3637 4.61719ZM34.5028 11.5565C34.6651 9.09864 36.9059 7.18188 39.3373 7.18188C41.7688 7.18188 44.0075 9.09932 44.1705 11.5565H34.5028Z" />
                <path d="M9.55945 12.1512C12.1519 11.2327 13.3395 9.09953 13.3395 6.39957C13.3395 4.67151 12.7728 2.88934 11.5046 1.67395C10.0998 0.297591 8.07419 0 6.18314 0H0V19.9826H2.91572V13.8069L13.3389 19.9826V16.8606L6.22575 12.5949L7.61496 12.5293C8.26222 12.5293 8.96359 12.3676 9.55809 12.1512H9.55945ZM4.91499 10.3156H2.91572V2.67359H5.99444C8.317 2.67359 10.4231 3.86192 10.4231 6.40024C10.4231 9.5865 7.50742 10.3156 4.91499 10.3156Z" />
                <path d="M164.759 7.94414L166.061 8.71517V8.08955L165.395 7.69051C165.437 7.68172 165.48 7.66954 165.521 7.65466C165.869 7.53157 166.061 7.24209 166.061 6.84034C166.061 6.57725 165.966 6.33579 165.801 6.17753C165.583 5.9638 165.277 5.93945 165.065 5.93945H164.191V8.63807H164.758V7.94346L164.759 7.94414ZM164.908 7.22856H164.76V6.47715H165.043C165.261 6.47715 165.495 6.57251 165.495 6.84102C165.495 7.10953 165.297 7.22856 164.908 7.22856H164.908Z" />
                <path d="M165.127 10.1622C166.714 10.1622 168 8.87583 168 7.28913C168 5.70242 166.714 4.41602 165.127 4.41602C163.54 4.41602 162.254 5.70242 162.254 7.28913C162.254 8.87583 163.54 10.1622 165.127 10.1622ZM165.127 5.22763C166.264 5.22763 167.189 6.15219 167.189 7.28913C167.189 8.42606 166.264 9.35062 165.127 9.35062C163.99 9.35062 163.066 8.42606 163.066 7.28913C163.066 6.15219 163.99 5.22763 165.127 5.22763Z" />
              </svg>
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
