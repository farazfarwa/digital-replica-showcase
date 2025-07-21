import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PopularDestinations } from "@/components/PopularDestinations";
import { StatsSection } from "@/components/StatsSection";
import { ToursSection } from "@/components/ToursSection";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PopularDestinations />
      <StatsSection />
      <ToursSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
