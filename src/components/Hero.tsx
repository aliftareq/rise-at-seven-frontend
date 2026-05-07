// /* eslint-disable react-hooks/set-state-in-effect */
// /* eslint-disable react-hooks/purity */
// /* eslint-disable @next/next/no-img-element */
// "use client";

// import { useState, useEffect } from "react";

// const heroImages = [
//   "/images/hero-pic-1.jpg",
//   "/images/hero-pic-2.jpg",
//   "/images/hero-pic-3.jpg",
//   "/images/hero-pic-4.jpg",
//   "/images/hero-pic-5.jpg",
// ];

// export default function Hero() {
//   const [bgImage, setBgImage] = useState(heroImages[0]);

//   useEffect(() => {
//     const randomImage =
//       heroImages[Math.floor(Math.random() * heroImages.length)];
//     setBgImage(randomImage);
//   }, []);

//   return (
//     <section className="relative w-full h-160 flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-[oklab(0.181061_-0.00153356_-0.000468194/0.3)] mt-2">
//       {/* Background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center blur-sm scale-105 rounded-2xl"
//         style={{ backgroundImage: `url(${bgImage})` }}
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/30 rounded-2xl" />

//       {/* Content */}
//       <div className="relative z-20 flex flex-col items-center text-center px-6 md:px-12 -translate-y-4">
//         {/* Achievement block */}
//         <div className="flex flex-col items-center justify-center mb-3">
//           <p className="text-white block font-sans text-[12px] font-medium leading-3.75 tracking-[0.3px] uppercase text-center w-52 max-w-52">
//             #1 Most recommended content marketing agency
//           </p>
//           <div className="flex items-center justify-center box-border mt-1">
//             <img
//               src="/images/achievement.PNG"
//               alt="Awards"
//               className="w-72 h-12"
//             />
//           </div>
//         </div>

//         {/* Headline with inline image */}
//         <h1 className="inline-flex flex-col justify-center items-center text-center text-white font-sans font-medium tracking-tight text-[120px] leading-27 mt-2 mb-0 overflow-visible">
//           <span className="block">We Create</span>
//           <span className="inline-flex items-baseline">
//             <span className="mr-2">Category</span>
//             <span className="inline-block w-28 h-auto mx-2 rounded-2xl overflow-hidden">
//               <img
//                 src={bgImage}
//                 alt="Inline"
//                 className="w-full h-full object-cover rounded-2xl"
//               />
//             </span>
//             <span className="ml-2">Leaders</span>
//           </span>
//         </h1>

//         {/* Subtitle */}
//         <div className="text-white block font-sans font-medium text-[32px] leading-6 w-198.5 text-center mt-8">
//           on every searchable platform
//         </div>

//         {/* Bottom logos row */}
//         <div className="w-full hidden 3xl:flex justify-center mt-12 gap-x-14">
//           <img
//             src="/logos/gogle.png"
//             alt="Gogle"
//             className="w-16 h-auto object-contain"
//           />
//           <img
//             src="/logos/chat-gpt.png"
//             alt="Chat GPT"
//             className="w-16 h-auto object-contain"
//           />
//           <img
//             src="/logos/gemini.png"
//             alt="Gemini"
//             className="w-16 h-auto object-contain"
//           />
//           <img
//             src="/logos/tiktok.png"
//             alt="Tiktok"
//             className="w-16 h-auto object-contain"
//           />
//           <img
//             src="/logos/youtube.png"
//             alt="Youtube"
//             className="w-16 h-auto object-contain"
//           />
//           <img
//             src="/logos/pinterest.png"
//             alt="Pinterest"
//             className="w-16 h-auto object-contain"
//           />
//           <img
//             src="/logos/giphy.png"
//             alt="Giphy"
//             className="w-16 h-auto object-contain"
//           />
//           <img
//             src="/logos/reddit.png"
//             alt="Reddit"
//             className="w-16 h-auto object-contain"
//           />
//           <img
//             src="/logos/amazon.png"
//             alt="Amazon"
//             className="w-16 h-auto object-contain"
//           />
//         </div>
//         {/* Bottom corner texts */}
//         <div className="absolute bottom-8 left-0 right-0 z-20 flex items-end justify-between px-8 md:px-10">
//           <p className="text-white block font-sans text-[16px] leading-6 text-left w-[414.677px]">
//             Organic media planners creating, distributing & optimising
//             <br />
//             search-first content for SEO, Social, PR, Ai and LLM search
//           </p>

//           <p className="text-white block font-sans text-[16px] leading-6 text-right">
//             4 Global Offices serving
//             <br />
//             UK, USA (New York) & EU
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

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
];

export default function Hero() {
  const [bgImage, setBgImage] = useState(heroImages[0]);

  useEffect(() => {
    const randomImage =
      heroImages[Math.floor(Math.random() * heroImages.length)];
    setBgImage(randomImage);
  }, []);

  return (
    <section className="relative w-full h-135 flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-[oklab(0.181061_-0.00153356_-0.000468194/0.3)] mt-2">
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
        <h1 className="inline-flex flex-col justify-center items-center text-center text-white font-sans font-medium text-[120px] leading-27 tracking-[-4.2px] mt-2 mb-0 overflow-visible">
          <span className="block">We Create</span>
          <span className="inline-flex items-baseline">
            <span className="mr-2">Category</span>
            <span className="relative inline-block mx-2 w-[107.998px] h-[107.998px] overflow-hidden rounded-2xl align-middle">
              <img
                src={bgImage}
                alt="Inline"
                className="absolute inset-0 block w-full h-full max-w-full object-cover rounded-2xl align-middle"
              />
            </span>
            <span className="ml-2">Leaders</span>
          </span>
        </h1>

        {/* Subtitle */}
        <div className="text-white block font-sans font-medium text-[32px] tracking-[-2px] leading-6 w-198.5 text-center mt-8">
          on every searchable platform
        </div>
      </div>

      {/* Logos row centered above bottom texts */}
      <div className="w-full hidden 3xl:flex justify-center mt-8 z-20">
        <img
          src="/logos/gogle.png"
          alt="Gogle"
          className="w-16 h-auto object-contain"
        />
        <img
          src="/logos/chat-gpt.png"
          alt="Chat GPT"
          className="w-16 h-auto object-contain"
        />
        <img
          src="/logos/gemini.png"
          alt="Gemini"
          className="w-16 h-auto object-contain"
        />
        <img
          src="/logos/tiktok.png"
          alt="Tiktok"
          className="w-16 h-auto object-contain"
        />
        <img
          src="/logos/youtube.png"
          alt="Youtube"
          className="w-16 h-auto object-contain"
        />
        <img
          src="/logos/pinterest.png"
          alt="Pinterest"
          className="w-16 h-auto object-contain"
        />
        <img
          src="/logos/giphy.png"
          alt="Giphy"
          className="w-16 h-auto object-contain"
        />
        <img
          src="/logos/reddit.png"
          alt="Reddit"
          className="w-16 h-auto object-contain"
        />
        <img
          src="/logos/amazon.png"
          alt="Amazon"
          className="w-16 h-auto object-contain"
        />
      </div>

      {/* Bottom corner texts fixed relative to Hero section */}
      <div className="absolute bottom-3 left-1 right-1 flex justify-between px-4 md:px-4">
        <p className="text-white/90 block font-sans font-semibold text-[14px] leading-6 text-left w-[414.677px]">
          Organic media planners creating, distributing & optimising
          <br />
          search-first content for SEO, Social, PR, Ai and LLM search
        </p>
        <p className="text-white block font-sans font-medium text-[16px] leading-6 text-right">
          4 Global Offices serving
          <br />
          UK, USA (New York) & EU
        </p>
      </div>
    </section>
  );
}
