/* eslint-disable @next/next/no-img-element */
"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, Timer } from "lucide-react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

type BlogPost = {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  author: string;
  authorImage: string;
  readTime: string;
  tag?: string;
};

const posts: BlogPost[] = [
  {
    title: "Rise at Seven Appoints Hollie Lovell as Senior Operations Lead",
    href: "https://riseatseven.com/blog/rise-at-seven-appoints-new-senior-ops-lead/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A8137.jpg?w=2000&h=2000&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778062638&s=73539e9e0c5b7d6d966448c9789bf97e",
    imageAlt: "Rise at Seven team seated in front of a brick wall",
    author: "Ray Saddiq",
    authorImage:
      "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/WhatsApp-Image-2025-06-23-at-22.50.52.jpeg?w=1231&h=1145&q=100&auto=format&fit=crop&dm=1750949501&s=fe120a0db5c7acc0cd0c72601fb4ba89",
    readTime: "3 mins",
  },
  {
    title:
      "Rise at Seven Exits Sheffield and Triples Manchester as new HQ as they go for global expansion",
    href: "https://riseatseven.com/blog/rise-at-seven-announces-new-global-hq-in-manchester/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/WRAS-Manchester-01.png?w=2000&h=2000&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778084605&s=66c3ca1b30a572b0c88d073167f801bd",
    imageAlt: "Rise at Seven billboard in Manchester",
    author: "Ray Saddiq",
    authorImage:
      "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/WhatsApp-Image-2025-06-23-at-22.50.52.jpeg?w=1231&h=1145&q=100&auto=format&fit=crop&dm=1750949501&s=fe120a0db5c7acc0cd0c72601fb4ba89",
    readTime: "2 mins",
  },
  {
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    href: "https://riseatseven.com/blog/global-operations-director-promotion/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7827.jpg?w=2000&h=2000&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1777514348&s=3a8eaa4bc91ab5fc6d16035d1db68f35",
    imageAlt: "Rise at Seven team members seated in front of a brick wall",
    author: "Carrie Rose",
    authorImage:
      "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/84b3917f166d7feb4c2376f78ce33ae432656999.jpg?w=1080&h=1080&q=100&auto=format&fit=crop&dm=1750847674&s=8bef9798a0d24a5970f561908d301967",
    readTime: "2 mins",
    tag: "News",
  },
];

function ExploreButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/blog"
      className={`group inline-flex w-full shrink-0 flex-row-reverse items-center justify-center gap-x-2 overflow-hidden rounded-3xl border border-transparent bg-white px-6 py-3 text-base font-medium capitalize leading-tight tracking-[-0.04em] text-[#111212] ring-[#111212]/5 transition-[border-radius] duration-500 ease-[cubic-bezier(0.135,0.9,0.15,1)] hover:rounded-xl md:w-auto ${className}`}
    >
      <span className="relative block h-5 overflow-hidden whitespace-nowrap text-current">
        <span className="flex h-5 items-center gap-x-2 text-current transition-transform duration-500 ease-[cubic-bezier(0.135,0.9,0.15,1)] group-hover:-translate-y-6">
          <span>Explore More Thoughts</span>
          <ArrowUpRight
            size={16}
            strokeWidth={2.3}
            className="mt-0.5 shrink-0"
          />
        </span>

        <span className="absolute left-0 top-0 flex h-5 translate-y-6 items-center gap-x-2 text-current transition-transform duration-500 ease-[cubic-bezier(0.135,0.9,0.15,1)] group-hover:translate-y-0">
          <span>Explore More Thoughts</span>
          <ArrowUpRight
            size={16}
            strokeWidth={2.3}
            className="mt-0.5 shrink-0"
          />
        </span>
      </span>
    </Link>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  const handleMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    event.currentTarget.style.setProperty(
      "--blog-x",
      `${event.clientX - rect.left}px`,
    );

    event.currentTarget.style.setProperty(
      "--blog-y",
      `${event.clientY - rect.top}px`,
    );
  };

  return (
    <Link
      href={post.href}
      onMouseMove={handleMouseMove}
      className="blog-card-link group/blog-card block w-full transition-transform duration-500 ease-[cubic-bezier(0.135,0.9,0.15,1)] hover:-translate-y-2"
    >
      <article className="flex w-full flex-col items-start gap-y-5">
        <div className="relative grid w-full overflow-hidden rounded-2xl lg:rounded-3xl">
          <div className="col-start-1 row-start-1 aspect-square overflow-hidden rounded-2xl lg:rounded-3xl">
            <img
              src={post.image}
              alt={post.imageAlt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.135,0.9,0.15,1)] group-hover/blog-card:scale-[1.035]"
            />
          </div>

          <div className="pointer-events-none col-start-1 row-start-1 z-10 aspect-square overflow-hidden rounded-2xl opacity-0 transition-opacity duration-300 group-hover/blog-card:opacity-100 lg:rounded-3xl">
            <img
              src={post.image}
              alt=""
              loading="lazy"
              aria-hidden="true"
              className="h-full w-full scale-110 object-cover blur-md brightness-95"
            />
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
          </div>

          <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-2xl opacity-0 transition-opacity duration-300 group-hover/blog-card:opacity-100 lg:rounded-3xl">
            <div
              className="blog-hover-orb absolute flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#b5ffda] text-[#111212] shadow-[0_18px_50px_rgba(70,255,202,0.42)] backdrop-blur-md transition-transform duration-200 md:h-34 md:w-34"
              style={{
                left: "var(--blog-x, 50%)",
                top: "var(--blog-y, 50%)",
              }}
            >
              <ArrowUpRight size={30} strokeWidth={2.15} />
            </div>
          </div>

          <div className="col-start-1 row-start-1 z-30 p-3">
            {post.tag ? (
              <div className="inline-flex min-h-7 items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium leading-none tracking-[-0.04em] text-white backdrop-blur-sm xl:min-h-8 xl:py-1.5 xl:text-base">
                {post.tag}
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col items-start gap-y-3">
          <div className="mt-1 flex flex-wrap items-start gap-1">
            <div className="inline-flex min-h-7 items-center gap-x-2 rounded-full bg-white px-3 py-1 text-sm font-medium leading-none tracking-[-0.04em] text-[#6f6f6f] xl:min-h-8 xl:py-1.5 xl:text-base">
              <span className="inline-flex items-center justify-center -ml-1.5">
                <span className="-mr-1 h-5 w-5 overflow-hidden rounded-full">
                  <img
                    src={post.authorImage}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </span>
              </span>
              <span>{post.author}</span>
            </div>

            <div className="inline-flex min-h-7 items-center gap-x-2 rounded-full bg-white px-3 py-1 text-sm font-medium leading-none tracking-[-0.04em] text-[#6f6f6f] xl:min-h-8 xl:py-1.5 xl:text-base">
              <Timer size={18} strokeWidth={2.2} />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h2 className="text-balance text-left text-[24px] font-medium leading-none tracking-[-0.07em] text-[#111212] xl:text-[30px] 2xl:text-[34px]">
            {post.title}
          </h2>
        </div>
      </article>
    </Link>
  );
}

export default function Blog() {
  return (
    <section className="overflow-hidden bg-[#efeeeb] px-4 py-14 text-[#111212] md:px-7 md:py-20">
      <style jsx global>{`
        .blog-mobile-pagination.swiper-pagination-progressbar {
          position: relative;
          width: 100%;
          height: 3px;
          overflow: hidden;
          background: rgba(17, 18, 18, 0.12);
        }

        .blog-mobile-pagination .swiper-pagination-progressbar-fill {
          background: #111212;
          transform-origin: left top;
        }

        @media (pointer: fine) {
          .blog-card-link {
            cursor: none;
          }
        }
      `}</style>

      <div className="grid grid-cols-12 gap-x-3 gap-y-10 md:gap-x-5 md:gap-y-12">
        <div className="col-span-12">
          <div className="grid grid-cols-12 items-end gap-x-3 gap-y-6 border-b border-[#cfcfca] pb-8 md:gap-x-5 md:pb-5">
            <div className="col-span-12 md:col-span-9">
              <h2 className="flex flex-wrap items-center text-[65px] font-medium leading-[0.9] tracking-[-0.075em] text-[#111212] md:text-[75px]">
                <span>What&apos;s</span>

                <span className="mx-2 inline-flex h-12 w-12 shrink-0 overflow-hidden rounded-[15%] bg-black/5 md:mx-4 md:h-20 md:w-20">
                  <img
                    src="https://rise-atseven.transforms.svdcdn.com/production/images/FOS25-3380.jpg?w=200&h=200&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846499&s=196df3f09231b9e6d4b20b3b56f237ea"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </span>

                <span>New</span>
              </h2>
            </div>

            <div className="hidden justify-end md:col-span-3 md:flex">
              <ExploreButton />
            </div>
          </div>
        </div>

        <div className="col-span-12 hidden lg:block">
          <div className="grid grid-cols-3 gap-x-5">
            {posts.map((post) => (
              <BlogCard key={post.title} post={post} />
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:hidden">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={12}
            speed={700}
            pagination={{
              el: ".blog-mobile-pagination",
              type: "progressbar",
            }}
            className="overflow-visible!"
          >
            {posts.map((post) => (
              <SwiperSlide key={post.title}>
                <BlogCard post={post} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-6 px-0">
            <div className="blog-mobile-pagination" />
          </div>
        </div>

        <div className="col-span-12 md:hidden">
          <ExploreButton />
        </div>
      </div>
    </section>
  );
}
