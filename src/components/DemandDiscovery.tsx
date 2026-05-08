import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ctas = [
  { label: "Our Story", href: "/about" },
  { label: "Our Services", href: "/services" },
];

export default function DemandDiscovery() {
  return (
    <section className="bg-[#eeeeed] px-5 py-16 text-[#111212] md:px-11 md:py-24 lg:py-[96px]">
      <div className="grid min-h-[360px] grid-cols-1 items-start gap-y-3 lg:grid-cols-[minmax(0,1fr)_max-content] lg:gap-x-16 lg:gap-y-4">
        {/* Right heading - mobile top, desktop right */}
        <div className="order-1 grid w-full max-w-[24rem] justify-self-start md:max-w-[40rem] lg:order-2 lg:col-start-2 lg:row-start-1 lg:justify-self-end xl:max-w-xl 2xl:max-w-[42rem] 3xl:max-w-[52rem] 4xl:max-w-5xl">
          <h2 className="relative inline-flex flex-col flex-wrap justify-start text-balance text-left font-sans-primary text-5xl font-medium leading-none tracking-tight text-grey-900 lg:text-6xl lg:leading-none xl:text-7xl xl:leading-[0.9] 3xl:text-7.5xl 3xl:leading-[0.9] 4xl:text-8xl 4xl:leading-[0.9]">
            <div className="relative flex flex-wrap justify-start text-left">
              <span className="mr-2 inline" style={{ marginRight: 10 }}>
                Driving
              </span>

              <span className="mr-2 inline" style={{ marginRight: 10 }}>
                Demand
              </span>

              <span className="mr-2 inline" style={{ marginRight: 10 }}>
                &amp;
              </span>

              <span className="mr-2 inline" style={{ marginRight: 10 }}>
                Discovery
              </span>

              <span
                className="relative mr-2 inline-flex shrink-0 overflow-hidden bg-black/5"
                style={{
                  marginRight: 10,
                  borderRadius: "15%",
                  width: 68,
                  aspectRatio: "1 / 1",
                }}
              >
                <span className="relative block h-full w-full">
                  <Image
                    src="/images/story-thumb.png"
                    alt="Rise at Seven team member outside Google office"
                    fill
                    priority
                    sizes="68px"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                </span>
              </span>
            </div>
          </h2>
        </div>

        {/* Left text - mobile middle, desktop left */}
        <div className="order-2 relative max-w-[820px] text-left font-sans-primary text-lg font-medium leading-tight tracking-tight text-grey-900 lg:order-1 lg:col-start-1 lg:row-start-1 lg:text-lg lg:leading-tight xl:text-2xl xl:leading-none 4xl:text-3xl 4xl:leading-none">
          A global team of search-first content marketers engineering semantic
          relevancy &amp; category signals for both the internet and people
        </div>

        {/* Buttons - mobile last, desktop below right heading */}
        <div className="order-3 mt-3 flex w-full flex-col gap-3 md:flex-row md:flex-wrap md:gap-4 lg:col-start-2 lg:row-start-2 lg:mt-[-8px] lg:w-auto lg:flex-row">
          {ctas.map((cta, index) => (
            <Link
              key={cta.label}
              href={cta.href}
              className={
                index === 0
                  ? "group relative inline-flex w-full shrink-0 flex-row-reverse items-center justify-center gap-x-2 overflow-hidden rounded-3xl border border-transparent bg-white px-6 py-3 text-base font-medium capitalize leading-tight tracking-tight text-grey-900 ring-grey-900/5 transition-[border-radius] duration-500 focus:outline-none focus:ring-3 md:w-auto pointer-fine:hover:rounded-xl"
                  : "group relative inline-flex w-full shrink-0 flex-row-reverse items-center justify-center gap-x-2 overflow-hidden rounded-3xl border border-transparent bg-transparent px-6 py-3 text-base font-medium capitalize leading-tight tracking-tight text-grey-900 focus:outline-none md:w-auto"
              }
            >
              <span className="relative overflow-hidden">
                <span className="flex items-center gap-x-2 transition-transform duration-500 pointer-fine:group-hover:-translate-y-6">
                  <span>{cta.label}</span>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={2.4}
                    className="mt-1 inline-block align-middle"
                    aria-hidden="true"
                  />
                </span>

                <span className="absolute left-0 top-0 flex translate-y-6 items-center gap-x-2 transition-transform duration-500 pointer-fine:group-hover:translate-y-0">
                  <span>{cta.label}</span>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={2.4}
                    className="mt-1 inline-block align-middle"
                    aria-hidden="true"
                  />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
