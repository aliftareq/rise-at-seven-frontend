/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks/purity */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";

const heroImages = [
  "/images/hero-pic-1.jpg",
  "/images/hero-pic-2.jpg",
  "/images/hero-pic-3.jpg",
  "/images/hero-pic-4.jpg",
  "/images/hero-pic-5.jpg",
  "/images/hero-pic-6.jpg",
];

export default function Hero() {
  const [bgImage, setBgImage] = useState(heroImages[0]);

  useEffect(() => {
    const randomImage =
      heroImages[Math.floor(Math.random() * heroImages.length)];
    setBgImage(randomImage);
  }, []);

  return (
    <section className="relative w-full h-[90vh] xl:h-[95vh] flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-[oklab(0.181061_-0.00153356_-0.000468194/0.3)] mt-2">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-105 rounded-2xl"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 rounded-2xl" />

      {/* Main content wrapper */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 md:px-12 -translate-y-2">
        {/* Achievement block */}
        <div className="flex flex-col items-center justify-center mb-3">
          <p className="text-white block font-sans font-medium text-[12px] leading-3 tracking-[-.5px] uppercase text-center w-52 max-w-52">
            #1 Most recommended <br />
            content marketing agency
          </p>
          <div className="flex items-center justify-center box-border mt-1">
            <img
              src="/images/achievement.PNG"
              alt="Awards"
              className="w-72 h-12"
            />
          </div>
        </div>

        {/* Headline with inline image */}
        <h1 className="flex flex-col justify-center items-center text-center text-white font-sans font-medium tracking-[-4.2px] text-[60px] xl:text-[120px] leading-15 xl:leading-27 mt-2 mb-0 overflow-visible">
          <span className="block">We Create</span>

          {/* Second line: wrap elements and allow responsive break */}
          <span className="flex flex-wrap justify-center items-center">
            <span className="mr-2 text-center sm:w-auto sm:text-left">
              Category
            </span>

            <span className="relative mx-2 h-16 w-16 overflow-hidden rounded-xl align-middle sm:h-[107.998px] sm:w-[107.998px] sm:rounded-2xl">
              <img
                src={bgImage}
                alt="Inline"
                className="absolute inset-0 block h-full w-full max-w-full object-cover rounded-xl align-middle sm:rounded-2xl"
              />
            </span>

            {/* mobile-only break after image */}
            <span className="basis-full sm:hidden" />

            <span className="mt-2 text-center sm:ml-2 sm:mt-0 sm:w-auto sm:text-left">
              Leaders
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <div className="text-white block font-sans font-medium text-[24px] xl:text-[32px] tracking-[-2px] leading-6 w-198.5 text-center mt-4 xl:mt-8">
          on every searchable platform
        </div>
      </div>

      {/* Logos row centered above bottom texts */}
      <div className="w-full hidden 2xl:flex justify-center mt-8 z-20 gap-x-8 my-16">
        <img
          src="/logos/google.jpg"
          alt="Gogle"
          className="w-16 h-auto object-contain"
        />
        <img
          src="/logos/chatgpt.jpg"
          alt="Chat GPT"
          className="w-16 h-auto object-contain"
        />
        <img
          src="/logos/gemini.jpg"
          alt="Gemini"
          className="w-16 h-auto object-contain"
        />
        <img
          src="/logos/tiktok.jpg"
          alt="Tiktok"
          className="w-16 h-auto object-contain"
        />
        <img
          src="/logos/youtube.jpg"
          alt="Youtube"
          className="w-16 h-auto object-contain"
        />
        <img
          src="/logos/pinterest.jpg"
          alt="Pinterest"
          className="w-16 h-auto object-contain"
        />
        <img
          src="/logos/giphy.jpg"
          alt="Giphy"
          className="w-16 h-auto object-contain"
        />
        <img
          src="/logos/reddit.jpg"
          alt="Reddit"
          className="w-16 h-auto object-contain"
        />
        <img
          src="/logos/amazon.jpg"
          alt="Amazon"
          className="w-16 h-auto object-contain"
        />
      </div>

      {/* Bottom corner texts fixed relative to Hero section */}
      <div className="absolute bottom-3 left-1 right-1 flex flex-col xl:flex-row justify-between px-4 md:px-4">
        <p className="hidden xl:block text-white/90 font-sans font-semibold text-[14px] leading-6 text-left w-[414.677px]">
          Organic media planners creating, distributing & optimising
          <br />
          search-first content for SEO, Social, PR, Ai and LLM search
        </p>
        <p className="text-white block font-sans font-medium text-[16px] leading-6 text-center xl:text-right mt-2 xl:mt-0 w-full xl:w-auto">
          4 Global Offices serving
          <br />
          UK, USA (New York) & EU
        </p>
      </div>
    </section>
  );
}
