import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Digital PR",
    href: "/",
    image: "/images/services/Digital_PR.jpg",
  },
  {
    title: "Organic Social & Content",
    href: "/",
    image: "/images/services/organic-social-content.jpg",
  },
  {
    title: "Search & Growth Strategy",
    href: "/",
    image: "/images/services/search-growth-strategy.jpg",
  },
  {
    title: "Content Experience",
    href: "/",
    image: "/images/services/content-experience.jpg",
  },
  {
    title: "Data & Insights",
    href: "/",
    image: "/images/services/data-insight.jpg",
  },
  {
    title: "Onsite SEO",
    href: "/",
    image: "/images/services/onsite-ceo.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#efefed] px-3 py-16 text-black md:px-5 lg:pt-20">
      <div className="grid grid-cols-12 overflow-hidden gap-x-3 gap-y-3 md:gap-x-5 md:gap-y-7">
        {/* Header */}
        <div className="col-span-12">
          <div className="grid grid-cols-12 gap-x-3 gap-y-3 border-b border-black/15 pb-8 md:gap-x-5 md:gap-y-7 md:pb-5">
            <div className="col-span-12 flex items-end md:col-span-9">
              <h2 className="flex flex-wrap items-center text-[50px] font-medium leading-[0.9] tracking-[-0.075em] text-[#111212] md:text-[60px] lg:text-[75px] 2xl:text-[96px]">
                <span className="mr-2.75">Our</span>

                <span className="mr-2.75 inline-flex h-11.5 w-14.5 shrink-0 overflow-hidden rounded-[15%] bg-black/5 md:h-14.5 md:w-17.5 lg:h-18.75 lg:w-18.75 2xl:h-23 2xl:w-23">
                  <Image
                    src="/images/services/service-thumb.jpg"
                    alt="Services"
                    width={200}
                    height={200}
                    className="h-full w-full object-cover object-center"
                  />
                </span>

                <span className="basis-full md:basis-auto">Services</span>
              </h2>
            </div>

            <div className="col-span-12 hidden items-center justify-end md:col-span-3 md:flex">
              <Link
                href="/services"
                className="group inline-flex w-full shrink-0 flex-row-reverse items-center justify-center gap-x-2 overflow-hidden rounded-3xl border border-transparent bg-white px-6 py-3 text-base font-medium capitalize leading-tight tracking-[-0.035em] text-[#111212] transition-all duration-500 hover:rounded-xl md:w-auto"
              >
                <div className="relative overflow-hidden">
                  <div className="transition duration-500 group-hover:-translate-y-6">
                    <div className="flex items-center gap-x-2">
                      <span>View All Services</span>
                      <ArrowUpRight size={16} strokeWidth={2.3} />
                    </div>
                  </div>

                  <div className="absolute left-0 top-0 translate-y-6 transition duration-500 group-hover:translate-y-0">
                    <div className="flex items-center gap-x-2">
                      <span>View All Services</span>
                      <ArrowUpRight size={16} strokeWidth={2.3} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="col-span-12 grid grid-cols-1 gap-x-2 xl:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="-my-px">
              <div className="group relative">
                <div className="absolute bottom-0 left-0 z-0 w-full xl:px-12">
                  <div className="h-px w-full bg-black/15" />
                </div>

                <Link
                  href={service.href}
                  className="relative z-10 grid grid-cols-1"
                >
                  {/* Text layer */}
                  <div className="col-start-1 row-start-1 relative z-20 flex items-center gap-3 py-4 text-black transition duration-500 lg:py-6 xl:group-hover:text-white">
                    {/* Mobile/tablet thumbnail */}
                    <div className="relative inline-flex h-12 w-12 shrink-0 overflow-hidden rounded-lg md:h-16 md:w-16 md:rounded-xl xl:hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>

                    <div className="xl:translate-x-10">
                      <div className="relative">
                        {/* Arrow reveal */}
                        <div className="absolute left-0 top-0 overflow-hidden pr-2">
                          <div className="-translate-x-full translate-y-full -rotate-45 transition duration-500 xl:group-hover:translate-x-0 xl:group-hover:translate-y-0 xl:group-hover:rotate-0">
                            <ArrowUpRight
                              className="h-7.5 w-7.5 md:h-10 md:w-10 xl:h-12.5 xl:w-12.5"
                              strokeWidth={2}
                            />
                          </div>
                        </div>

                        {/* Title */}
                        <div className="transition duration-500 xl:group-hover:translate-x-14">
                          <h3 className="text-[28px] font-medium leading-none tracking-[-0.035em] md:text-[34px]  xl:text-[50px]">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover background layer - XL only */}
                  <div className="col-start-1 row-start-1 relative z-10 hidden overflow-hidden rounded-full bg-black opacity-0 transition duration-500 xl:block xl:group-hover:opacity-100">
                    <div className="h-full w-full opacity-60 transition duration-700 xl:group-hover:scale-[1.05]">
                      <Image
                        src={service.image}
                        alt=""
                        fill
                        sizes="50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="col-span-12 md:hidden">
          <Link
            href="/services"
            className="group inline-flex w-full shrink-0 flex-row-reverse items-center justify-center gap-x-2 overflow-hidden rounded-3xl bg-white px-6 py-3 text-base font-medium tracking-[-0.035em] text-[#111212] transition-all duration-500 hover:rounded-xl"
          >
            <div className="relative overflow-hidden">
              <div className="transition duration-500 group-hover:-translate-y-6">
                <div className="flex items-center gap-x-2">
                  <span>View All Services</span>
                  <ArrowUpRight size={16} strokeWidth={2.3} />
                </div>
              </div>

              <div className="absolute left-0 top-0 translate-y-6 transition duration-500 group-hover:translate-y-0">
                <div className="flex items-center gap-x-2">
                  <span>View All Services</span>
                  <ArrowUpRight size={16} strokeWidth={2.3} />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
