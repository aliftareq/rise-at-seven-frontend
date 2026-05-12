"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const primaryLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Culture", href: "/culture" },
  { label: "Meet The Risers", href: "/meet-the-team" },
];

const resourceLinks = [
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog & Resources", href: "/blog" },
  { label: "Webinars", href: "/webinars" },
  { label: "Careers", href: "/careers" },
];

const locationLinks = [
  { label: "Sheffield", href: "https://g.co/kgs/4Br7JaS" },
  { label: "Manchester", href: "https://g.co/kgs/9vh5imK" },
  { label: "London", href: "https://g.co/kgs/hsv6LhR" },
  { label: "New York", href: "https://g.co/kgs/NxzhAKU" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/riseatseven",
    icon: "facebook",
  },
  {
    label: "X",
    href: "https://x.com/riseatseven",
    icon: "x",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/riseatseven/",
    icon: "linkedin",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCAjOP9BgpZPTgae-QT9HGCw",
    icon: "youtube",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@riseatseven",
    icon: "tiktok",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/riseatseven/",
    icon: "instagram",
  },
] as const;

const legalItems = [
  "© 2025 Rise at Seven Ltd. All rights reserved",
  "Company Number 11955187",
  "VAT Registered GB 322402945",
];

function BrandIcon({ icon }: { icon: (typeof socialLinks)[number]["icon"] }) {
  const className = "h-4 w-4 fill-[#111212] text-[#111212] md:h-3.75 md:w-3.75";

  if (icon === "facebook") {
    return (
      <svg viewBox="0 0 320 512" className={className} aria-hidden="true">
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H297V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
      </svg>
    );
  }

  if (icon === "x") {
    return (
      <svg viewBox="0 0 512 512" className={className} aria-hidden="true">
        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42z" />
      </svg>
    );
  }

  if (icon === "linkedin") {
    return (
      <svg viewBox="0 0 448 512" className={className} aria-hidden="true">
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
      </svg>
    );
  }

  if (icon === "youtube") {
    return (
      <svg viewBox="0 0 576 512" className={className} aria-hidden="true">
        <path d="M549.65 124.08c-6.28-23.65-24.78-42.24-48.28-48.61C458.78 64 288 64 288 64S117.22 64 74.63 75.47c-23.5 6.37-42 24.96-48.28 48.61C15 167 15 256.4 15 256.4s0 89.4 11.35 132.32c6.28 23.65 24.78 41.47 48.28 47.84C117.22 448 288 448 288 448s170.78 0 213.37-11.44c23.5-6.37 42-24.19 48.28-47.84C561 345.8 561 256.4 561 256.4s0-89.4-11.35-132.32zM232 337.6V175.2l142.74 81.2L232 337.6z" />
      </svg>
    );
  }

  if (icon === "tiktok") {
    return (
      <svg viewBox="0 0 448 512" className={className} aria-hidden="true">
        <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 448 512" className={className} aria-hidden="true">
      <path d="M224.1 141c-63.6 0-115.1 51.5-115.1 115.1S160.5 371.2 224.1 371.2 339.2 319.7 339.2 256.1 287.7 141 224.1 141zm0 190.2c-41.5 0-75.1-33.6-75.1-75.1s33.6-75.1 75.1-75.1 75.1 33.6 75.1 75.1-33.6 75.1-75.1 75.1zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9S352.4 35.7 316.5 34C280.2 32 167.9 32 131.6 34 95.8 35.7 64 43.9 37.7 70.2S3.2 128.2 1.5 164.1c-2 36.3-2 148.6 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58.1 34.5 93.9 36.2c36.3 2 148.6 2 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2s34.5-58.1 36.2-93.9c2-36.3 2-148.5 0-184.9z" />
    </svg>
  );
}

function FooterNavColumn({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex w-1/2 flex-col items-start gap-y-1.5 border-l border-white/20 pl-3 md:w-auto">
      {links.map((link) => {
        const isExternal = link.href.startsWith("http");

        const content = (
          <div className="relative overflow-hidden">
            <div className="transition duration-300 ease-[cubic-bezier(0.135,0.9,0.15,1)] group-hover:-translate-y-7 group-hover:text-[#9ee9d7]">
              {link.label}
            </div>

            <div className="absolute left-0 top-0 translate-y-7 text-[#9ee9d7] transition duration-300 ease-[cubic-bezier(0.135,0.9,0.15,1)] group-hover:translate-y-0">
              {link.label}
            </div>
          </div>
        );

        const className =
          "group inline-flex text-[18px] font-medium leading-tight tracking-tight text-white transition-colors duration-300 ease-[cubic-bezier(0.135,0.9,0.15,1)] lg:text-[24px]";

        return isExternal ? (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={className}
          >
            {content}
          </a>
        ) : (
          <Link key={link.label} href={link.href} className={className}>
            {content}
          </Link>
        );
      })}
    </div>
  );
}

function FooterLogo() {
  return (
    <svg
      className="h-full w-full fill-current object-contain"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 168 21"
      aria-hidden="true"
      focusable="false"
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
  );
}

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  const [contentOpacity, setContentOpacity] = useState(0.34);

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;

      const rect = footerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.95;
      const end = windowHeight * 0.25;

      const progress = Math.min(
        Math.max((start - rect.top) / (start - end), 0),
        1,
      );

      setContentOpacity(0.34 + progress * 0.66);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <footer className="w-full bg-[#efefed] px-1.25 pb-1.25 md:px-2.5 md:pb-2.5">
      <section
        ref={footerRef}
        className="relative overflow-hidden rounded-3xl bg-[#101111] px-4 pb-4 pt-10 text-white md:rounded-[36px] md:px-7 md:pb-5 md:pt-14 lg:min-h-0 lg:rounded-[40px] lg:px-10 lg:pb-5 lg:pt-10 xl:min-h-0"
      >
        <div
          className="relative z-10 grid grid-cols-12 gap-x-3 gap-y-3 transition-opacity duration-300 md:gap-x-5 md:gap-y-7"
          style={{ opacity: contentOpacity }}
        >
          <div className="col-span-12 mb-10 flex flex-col items-start justify-start gap-y-3 md:gap-y-5 lg:col-span-4 lg:mb-0">
            <h2 className="inline-flex flex-wrap text-balance text-left text-2xl font-medium leading-none tracking-tight text-white xl:text-3xl">
              Stay updated with Rise news
            </h2>

            <form className="relative w-full" action="#">
              <input
                suppressHydrationWarning
                type="email"
                required
                name="email"
                placeholder="Your Email Address"
                className="w-full appearance-none rounded-full bg-[#252525] px-7 py-6 pr-24 text-[28px] font-bold leading-none tracking-tight text-white outline-none transition placeholder:text-[20px] placeholder:font-medium placeholder:text-white/50 focus:ring-3 focus:ring-white/15 lg:px-8 lg:py-7 lg:pr-28 lg:text-[38px] lg:placeholder:text-[25px]"
              />

              <div className="absolute right-0 top-0 p-3">
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="flex size-10 cursor-pointer items-center justify-center rounded-full text-[#111212] transition duration-300 ease-[cubic-bezier(0.135,0.9,0.15,1)] pointer-fine:hover:rotate-90 pointer-fine:hover:bg-white lg:size-16 lg:text-lg"
                  style={{ backgroundColor: "#9ee9d7" }}
                >
                  <ArrowUpRight size={28} strokeWidth={2.2} color="#111212" />
                </button>
              </div>
            </form>

            <div className="flex gap-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Rise at Seven on ${social.label}`}
                  className="inline-flex h-8 items-center gap-x-2.5 rounded-xl bg-white px-2.5 text-lg leading-none text-[#111212] transition-[border-radius] duration-300 ease-[cubic-bezier(0.135,0.9,0.15,1)] pointer-fine:hover:rounded-sm"
                >
                  <span className="inline-flex w-3 items-center justify-center text-[16px] font-semibold leading-none text-[#111212] md:min-w-3.75 md:text-[13px]">
                    <BrandIcon icon={social.icon} />
                  </span>

                  <ArrowUpRight
                    strokeWidth={2.35}
                    color="#111212"
                    className="h-3 w-3 shrink-0 md:h-4.25 md:w-4.25"
                  />
                </a>
              ))}
            </div>
          </div>

          <nav className="col-span-12 flex flex-wrap justify-between gap-y-10 md:col-span-11 md:flex-row lg:col-span-6 lg:col-start-6">
            <FooterNavColumn links={primaryLinks} />
            <FooterNavColumn links={resourceLinks} />
            <FooterNavColumn links={locationLinks} />
          </nav>

          <div className="col-span-12 mt-10 lg:mt-20 xl:mt-24">
            <Link
              href="/"
              aria-label="Rise at Seven homepage"
              className="block w-full text-white"
            >
              <FooterLogo />
            </Link>
          </div>

          <div className="col-span-12 mt-6 flex flex-col items-end justify-between gap-y-2.5 md:flex-row lg:mt-0 lg:items-center">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-2 md:gap-x-3.5 md:gap-y-2.5">
              {legalItems.map((item) => (
                <div key={item} className="contents">
                  <span className="text-[13px] font-light leading-[1.05] text-white md:text-[14px] md:leading-tight">
                    {item}
                  </span>
                  <span className="inline-flex size-1 rounded-full bg-white md:mt-0.5" />
                </div>
              ))}

              <Link
                href="/privacy-policy"
                className="text-[13px] font-light leading-[1.05] text-white transition pointer-fine:hover:text-[#9ee9d7] md:text-[14px] md:leading-tight"
              >
                Privacy Policy
              </Link>

              <span className="inline-flex size-1 rounded-full bg-white md:mt-0.5" />

              <Link
                href="/terms-conditions"
                className="text-[13px] font-light leading-[1.05] text-white transition pointer-fine:hover:text-[#9ee9d7] md:text-[14px] md:leading-tight"
              >
                Terms &amp; conditions
              </Link>
            </div>

            <div className="mt-1 w-full md:ml-auto md:text-right lg:mt-0 lg:w-auto">
              <a
                href="https://madebyshape.co.uk"
                target="_blank"
                rel="noreferrer"
                className="text-[13px] font-light leading-[1.05] text-white transition pointer-fine:hover:text-[#9ee9d7] md:text-[14px] md:leading-tight"
              >
                Website MadeByShape
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
