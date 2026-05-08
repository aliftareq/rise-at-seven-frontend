import AnnouncementBar from "@/components/AnnouncementBar";
import BrandTicker from "@/components/BrandTicker";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-grey-100 p-1.25 md:p-2.5">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <BrandTicker />

      {/* Temporary scroll area to test sticky navbar behavior */}
      <section className="min-h-screen px-4 py-24 text-black md:px-8">
        <p className="text-[20px] font-semibold tracking-[-0.05em]">
          Scroll down, then scroll up to test navbar hide/show behavior.
        </p>

        <h2 className="mt-20 max-w-[900px] text-[56px] font-bold leading-[0.9] tracking-[-0.07em] md:text-[110px]">
          Driving Demand & Discovery
        </h2>
      </section>
    </main>
  );
}
