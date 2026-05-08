import AnnouncementBar from "@/components/AnnouncementBar";
import BrandTicker from "@/components/BrandTicker";
import DemandDiscovery from "@/components/DemandDiscovery";
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
      <DemandDiscovery />
    </main>
  );
}
