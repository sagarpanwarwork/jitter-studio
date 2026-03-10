import { useState, useCallback } from "react";
import LoadingCurtain from "@/components/LoadingCurtain";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MarqueeText from "@/components/MarqueeText";
import WorkSection from "@/components/WorkSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const handleComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      <LoadingCurtain onComplete={handleComplete} />
      {loaded && <Navigation />}
      <div className="snap-container">
        <HeroSection />
        <MarqueeText />
        <WorkSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </div>
    </>
  );
};

export default Index;
