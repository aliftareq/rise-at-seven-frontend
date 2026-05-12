import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandTicker from "@/components/BrandTicker";
import DemandDiscovery from "@/components/DemandDiscovery";
import FeaturedWork from "@/components/FeaturedWork";
import ServicesSection from "@/components/ServicesSection";
import Contact from "@/components/Contact";
import LegacyCards from "@/components/LegacyCards";
import Blog from "@/components/Blog";
import ReadyToRiseSnake from "@/components/ReadyToRiseSnake";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-grey-100">
      <div className="p-1.25 md:p-2.5">
        <AnnouncementBar />
        <Navbar />
        <Hero />
      </div>
      <BrandTicker />
      <div className="p-1.25 md:p-2.5">
        <DemandDiscovery />
        <FeaturedWork />
        <ServicesSection />
        <Contact />
        <LegacyCards />
        <Blog />
        <ReadyToRiseSnake />
        <Footer />
      </div>
    </main>
  );
}
