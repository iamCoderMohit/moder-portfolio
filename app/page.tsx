import Navbar from "@/components/layout/Navbar";
import HeroBanner from "@/components/sections/HeroBanner";
import About from "@/components/sections/About";
import SpotifyCard from "@/components/sections/SpotifyCard";
import Skills from "@/components/sections/Skills";
import GitHubGraph from "@/components/sections/GitHubGraph";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import QuoteBlock from "@/components/ui/QuoteBlock";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}>
      <Navbar />

      {/* Push content below fixed navbar */}
      <div style={{ paddingTop: "56px" }}>
        <HeroBanner />
        <About />
        <SpotifyCard />
        <Skills />
        <GitHubGraph />
        <FeaturedProjects />
        <QuoteBlock />
        <Footer />
      </div>
    </main>
  );
}
