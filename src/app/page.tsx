import AnnouncementBar from "@/components/AnnouncementBar";
import BrandTicker from "@/components/BrandTicker";
import DemandDiscovery from "@/components/DemandDiscovery";
import FeaturedWork from "@/components/FeaturedWork";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";

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
      </div>
    </main>
  );
}
